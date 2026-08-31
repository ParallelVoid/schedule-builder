/* Shared, dependency-free planning operations for the UI and WebMCP.
   All writes affect only this browser's demo plan, never registration. */
const ScheduleTools = (() => {
  const DEFAULT_CREDIT_LOAD = 12;
  const object = (properties = {}, required = []) => ({ type: "object", properties, required, additionalProperties: false });
  const text = { type: "string", minLength: 1, maxLength: 80 };
  const ids = { type: "array", items: text, maxItems: 6, uniqueItems: true };
  const clock = { type: "string", pattern: "^([01][0-9]|2[0-3]):[0-5][0-9]$" };
  const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  const blocksSchema = { type: "array", maxItems: 20, items: object({
    day: { type: "string", enum: weekdays }, startTime: clock,
    endTime: { type: "string", pattern: "^(([01][0-9]|2[0-3]):[0-5][0-9]|24:00)$" },
    label: { type: "string", maxLength: 80 }
  }, ["day", "startTime", "endTime"]) };
  const expectedPlanSchema = { ...ids, maxItems: 100, uniqueItems: false };
  const filters = {
    days: { type: "array", items: { type: "string", enum: ["Mon", "Tue", "Wed", "Thu", "Fri"] }, maxItems: 5, uniqueItems: true,
      description: "Allowed meeting days; every meeting must fit. Empty means any day." },
    earliestStart: { ...clock, description: "Earliest permitted class start, local campus time (HH:MM)." },
    latestEnd: { ...clock, description: "Latest permitted class end, local campus time (HH:MM)." },
    format: { type: "string", enum: ["any", "online", "in-person"] }
  };

  // Validate at the boundary too: experimental browsers may not enforce schemas.
  function validate(value, schema, path = "input") {
    const fail = message => { throw new Error(`${path}: ${message}`); };
    if (schema.type === "object") {
      if (!value || typeof value !== "object" || Array.isArray(value)) fail("expected an object");
      for (const key of schema.required) if (!Object.hasOwn(value, key)) fail(`missing ${key}`);
      for (const key of Object.keys(value)) {
        if (!Object.hasOwn(schema.properties, key)) fail(`unknown field ${key}`);
        validate(value[key], schema.properties[key], `${path}.${key}`);
      }
    } else if (schema.type === "array") {
      if (!Array.isArray(value)) fail("expected an array");
      if (value.length > schema.maxItems) fail(`at most ${schema.maxItems} items allowed`);
      if (schema.uniqueItems && new Set(value).size !== value.length) fail("duplicate items are not allowed");
      value.forEach((entry, i) => validate(entry, schema.items, `${path}[${i}]`));
    } else if (schema.type === "integer") {
      if (!Number.isInteger(value) || value < schema.minimum || value > schema.maximum) fail(`expected an integer from ${schema.minimum} to ${schema.maximum}`);
    } else if (schema.type === "boolean") {
      if (typeof value !== "boolean") fail("expected a boolean");
    } else if (schema.type === "string") {
      if (typeof value !== "string") fail("expected text");
      if (value.length < (schema.minLength || 0) || value.length > (schema.maxLength || 200)) fail("invalid text length");
      if (schema.pattern && !new RegExp(schema.pattern).test(value)) fail("expected HH:MM in 24-hour time");
    }
    if (schema.enum && !schema.enum.includes(value)) fail(`expected one of ${schema.enum.join(", ")}`);
  }

  function context() {
    const student = getActiveStudent();
    if (!student) throw new Error("Choose a student on the Identify page first.");
    const state = getState();
    return { student, state, termId: state.selectedTerm || "F26", campusId: state.selectedCampus || student.campus };
  }

  function sectionProblems(section, ctx) {
    const course = getCourse(section.courseCode);
    const problems = [];
    if (section.term !== ctx.termId) problems.push("Wrong term");
    if (section.campus !== ctx.campusId && section.format !== "online") problems.push("Wrong campus");
    if (section.seatsAvailable <= 0) problems.push("Section is full");
    const completed = getCompletedCodes(ctx.student);
    if (completed.includes(course.code)) problems.push("Course already completed");
    const missing = getMissingPrerequisites(course, completed);
    if (missing.length) problems.push(`Missing prerequisites: ${missing.join(", ")}`);
    getUnavailableConflicts(section, ctx.state.unavailableTimes || []).forEach(block => {
      problems.push(`Unavailable ${block.day} ${block.startTime}–${block.endTime}${block.label ? ` (${block.label})` : ""}`);
    });
    return problems;
  }

  function describe(section, ctx) {
    const course = getCourse(section.courseCode);
    const problems = sectionProblems(section, ctx);
    return { ...section, courseName: course.name, credits: course.credits,
      prerequisites: course.prerequisites, eligible: problems.length === 0, problems,
      requirement: categoryCourseWouldSatisfy(course.code, ctx.student)?.label || null,
      fit: sectionFit(section, ctx) };
  }

  function preview(sectionIds, ctx = context()) {
    const selected = [];
    const problems = [];
    const seenCourses = new Set();
    for (const id of sectionIds) {
      const section = sections.find(s => s.id === id);
      if (!section) { problems.push({ sectionId: id, message: "Unknown section" }); continue; }
      if (seenCourses.has(section.courseCode)) problems.push({ sectionId: id, message: "Multiple sections of the same course" });
      seenCourses.add(section.courseCode);
      sectionProblems(section, ctx).forEach(message => problems.push({ sectionId: id, message }));
      selected.push(section);
    }
    const conflicts = findScheduleConflicts(selected).map(([a, b]) => ({ sectionIds: [a.id, b.id], days: a.days.filter(d => b.days.includes(d)) }));
    return { sectionIds: [...sectionIds], sections: selected.map(s => describe(s, ctx)),
      totalCredits: [...seenCourses].reduce((sum, code) => sum + getCourse(code).credits, 0),
      valid: problems.length === 0 && conflicts.length === 0, problems, conflicts,
      metrics: scheduleMetrics(selected), registration: false };
  }

  function matches(section, options) {
    if (options.format && options.format !== "any" && section.format !== options.format) return false;
    if (section.days.length === 0) return true; // Asynchronous: no meeting constraints.
    if (options.days?.length && !section.days.every(day => options.days.includes(day))) return false;
    if (options.earliestStart && section.startTime < options.earliestStart) return false;
    if (options.latestEnd && section.endTime > options.latestEnd) return false;
    return true;
  }

  function sectionFit(section, ctx) {
    const prefs = ctx.state.preferences || {};
    const course = getCourse(section.courseCode);
    const category = categoryCourseWouldSatisfy(course.code, ctx.student);
    const reasons = [], tradeOffs = [], scoreBreakdown = [];
    const add = (reason, points) => { reasons.push(reason); scoreBreakdown.push({ reason, points }); };
    if (category) add(`Can fill ${category.label} based on completed coursework.`, 40);
    else if (courseCountsTowardDegree(course.code, ctx.student)) add("Listed in the degree, but its requirement category is already complete.", 12);
    else { scoreBreakdown.push({ reason: "Not listed in this degree's requirements.", points: -30 }); tradeOffs.push("Does not satisfy a listed degree requirement."); }
    if (prefs.priority === "required" && category?.type === "specific") add("Matches your priority for required courses.", 15);
    if (prefs.priority === "electives" && category?.type === "choose") add("Matches your priority for electives.", 10);
    const interests = course.areas.filter(area => (prefs.interests || []).includes(area));
    if (interests.length) add(`Matches interests: ${interests.join(", ")}.`, Math.min(2, interests.length) * 15);
    if (prefs.days?.length) {
      if (section.days.every(day => prefs.days.includes(day))) add("All meetings fit your preferred days.", 10);
      else tradeOffs.push(`Meets outside your preferred days: ${section.days.filter(day => !prefs.days.includes(day)).join(", ")}.`);
    }
    const bucket = section.startTime < "12:00" ? "morning" : section.startTime < "17:00" ? "afternoon" : "evening";
    if (section.days.length && prefs.timeOfDay && prefs.timeOfDay !== "any") {
      if (prefs.timeOfDay === bucket) add(`Fits your ${bucket} start-time preference.`, 8);
      else tradeOffs.push(`Starts in the ${bucket}; you preferred ${prefs.timeOfDay}.`);
    }
    if (prefs.format && prefs.format !== "any") {
      if (prefs.format === section.format) add(`Matches your ${section.format} preference.`, 10);
      else tradeOffs.push(`Offered ${section.format}; you preferred ${prefs.format}.`);
    }
    const missing = getMissingPrerequisites(course, getCompletedCodes(ctx.student));
    reasons.push(missing.length ? `Prerequisites still missing: ${missing.join(", ")}.` : course.prerequisites.length ? "All prerequisites are completed." : "No prerequisites required.");
    if (section.seatsAvailable <= 5) tradeOffs.push(section.seatsAvailable ? `Only ${section.seatsAvailable} demo seats available.` : "This demo section is full.");
    return { score: scoreBreakdown.reduce((sum, item) => sum + item.points, 0), reasons, tradeOffs, scoreBreakdown };
  }

  function score(section, ctx) { return sectionFit(section, ctx).score; }

  function scheduleMetrics(selected) {
    const daily = weekdays.map(day => {
      const meetings = selected.filter(section => section.days.includes(day));
      const intervals = meetings.map(section => [timeToMinutes(section.startTime), timeToMinutes(section.endTime)])
        .sort((a, b) => a[0] - b[0]);
      const merged = [];
      for (const interval of intervals) {
        const last = merged[merged.length - 1];
        if (last && interval[0] <= last[1]) last[1] = Math.max(last[1], interval[1]);
        else merged.push([...interval]);
      }
      const gapMinutes = merged.slice(1).reduce((sum, interval, index) => sum + interval[0] - merged[index][1], 0);
      return { day, meetingCount: meetings.length, onCampus: meetings.some(section => section.format === "in-person"),
        firstStart: meetings.length ? meetings.map(s => s.startTime).sort()[0] : null,
        lastEnd: meetings.length ? meetings.map(s => s.endTime).sort().at(-1) : null,
        classMinutes: merged.reduce((sum, [start, end]) => sum + end - start, 0), gapMinutes,
        longestGapMinutes: Math.max(0, ...merged.slice(1).map((interval, index) => interval[0] - merged[index][1])),
        earlyMeetings: meetings.filter(s => s.startTime < "09:00").length,
        eveningMeetings: meetings.filter(s => s.endTime > "17:00").length };
    });
    return { daysWithClasses: daily.filter(day => day.meetingCount).length,
      campusDays: daily.filter(day => day.onCampus).length,
      gapMinutes: daily.reduce((sum, day) => sum + day.gapMinutes, 0),
      longestGapMinutes: Math.max(0, ...daily.map(day => day.longestGapMinutes)),
      classMinutes: daily.reduce((sum, day) => sum + day.classMinutes, 0),
      earlyMeetings: daily.reduce((sum, day) => sum + day.earlyMeetings, 0),
      eveningMeetings: daily.reduce((sum, day) => sum + day.eveningMeetings, 0),
      earliestStart: daily.map(day => day.firstStart).filter(Boolean).sort()[0] || null,
      latestEnd: daily.map(day => day.lastEnd).filter(Boolean).sort().at(-1) || null,
      asynchronousCourses: selected.filter(section => section.days.length === 0).length, daily };
  }

  function assertCurrentPlan(expected, ctx) {
    if (JSON.stringify(expected) !== JSON.stringify(ctx.state.plan || [])) throw new Error("The plan changed. Read the current schedule and preview again before applying.");
  }

  function availabilitySnapshot(blocks) {
    // WebMCP transports may reorder object keys; compare field values, not JSON key order.
    return JSON.stringify(blocks.map(block => [block.day, block.startTime, block.endTime, block.label || ""]));
  }

  function explain(sectionId, sectionIds, ctx) {
    const section = sections.find(item => item.id === sectionId);
    if (!section) throw new Error("Unknown section");
    const others = sectionIds.filter(id => id !== sectionId).map(id => sections.find(item => item.id === id)).filter(Boolean);
    const conflictsWithPlan = others.filter(other => sectionsConflict(section, other)).map(other => other.id);
    const tradeOffs = [...sectionFit(section, ctx).tradeOffs];
    if (conflictsWithPlan.length) tradeOffs.push(`Overlaps planned sections: ${conflictsWithPlan.join(", ")}.`);
    const category = categoryCourseWouldSatisfy(section.courseCode, ctx.student);
    if (category?.type === "choose") {
      const codes = getRequirementsFor(ctx.student.programId).find(cat => cat.id === category.id).courses;
      const plannedCount = new Set(others.filter(other => codes.includes(other.courseCode)).map(other => other.courseCode)).size;
      if (category.completedCount + plannedCount >= category.neededCount) tradeOffs.push("Other courses in this proposed plan already cover the remaining slots in this requirement category.");
    }
    return { section: describe(section, ctx), conflictsWithPlan, tradeOffs,
      selectionPolicy: "Eligibility and hard constraints first; then credit target and preference score. Degree fit is based on completed coursework, not a graduation audit." };
  }

  function compare(input, ctx) {
    const results = input.schedules.map((schedule, index) => ({ index, label: schedule.label || `Option ${index + 1}`, ...preview(schedule.sectionIds, ctx) }));
    const rankBy = input.rankBy || "gapMinutes";
    const eligible = results.filter(result => result.valid && result.sectionIds.length);
    eligible.sort((a, b) => a.metrics[rankBy] - b.metrics[rankBy] || a.metrics.campusDays - b.metrics.campusDays || a.index - b.index);
    return { schedules: results, rankBy, recommendedIndex: eligible[0]?.index ?? null,
      tradeOffs: [...(new Set(results.map(result => result.totalCredits)).size > 1 ? ["Credit loads differ. Fewer gaps or campus days may simply reflect fewer credits; compare degree fit too."] : []),
        "Gaps are minutes between the first and last class each day, including online meetings. They may contain other commitments; travel time is not estimated.",
        "Early meetings start before 09:00; evening meetings end after 17:00. Asynchronous courses add no scheduled time or campus days." ] };
  }

  function findSwaps(input, ctx) {
    const current = ctx.state.plan || [];
    const original = sections.find(section => section.id === input.sectionId);
    if (!original || !current.includes(original.id)) throw new Error("Choose a section in the current plan to replace.");
    const categories = getRequirementsFor(ctx.student.programId).filter(cat => cat.courses.includes(original.courseCode));
    const core = categories.some(cat => cat.type === "specific");
    const candidateCode = input.courseCode?.replace(/\s/g, "").toUpperCase();
    if (candidateCode && !getCourse(candidateCode)) throw new Error("Unknown replacement course");
    const alternatives = sections.filter(section => section.id !== original.id && !current.includes(section.id))
      .filter(section => !candidateCode || section.courseCode === candidateCode)
      .filter(section => section.courseCode === original.courseCode || (!core && categories.some(cat => cat.courses.includes(section.courseCode))))
      .filter(section => !input.sameTimeOnly || section.days.every(day => original.days.includes(day))
        && (!section.days.length || section.startTime >= original.startTime && section.endTime <= original.endTime))
      .map(section => ({ replacementSectionId: section.id, ...preview(current.map(id => id === original.id ? section.id : id), ctx),
        explanation: explain(section.id, current.filter(id => id !== original.id), ctx) }))
      .filter(result => result.valid)
      .sort((a, b) => score(sections.find(s => s.id === b.replacementSectionId), ctx) - score(sections.find(s => s.id === a.replacementSectionId), ctx))
      .slice(0, 10);
    return { sectionId: original.id, expectedPlan: [...current], alternatives,
      message: alternatives.length ? "Preview only; all other sections are unchanged." : "No eligible replacement fits. Try allowing a different meeting time.",
      policy: "Core courses keep the same course code. Elective alternatives must share a degree requirement category. Same-time replacements fit entirely inside the original meeting windows." };
  }

  function suggest(options, ctx) {
    const count = options.courseCount;
    if (count !== undefined && options.targetCredits !== undefined) throw new Error("Specify courseCount or targetCredits, not both.");
    const targetCredits = count === undefined ? (options.targetCredits || ctx.state.preferences?.desiredCredits || DEFAULT_CREDIT_LOAD) : null;
    if (targetCredits !== null && (!Number.isInteger(targetCredits) || targetCredits < 1 || targetCredits > 24)) throw new Error("Credit target must be between 1 and 24.");
    const required = (options.courseCodes || []).map(code => code.replace(/\s/g, "").toUpperCase());
    if (new Set(required).size !== required.length) throw new Error("Duplicate course codes are not allowed.");
    if (count !== undefined && required.length > count) throw new Error("Requested courses exceed courseCount.");
    for (const code of required) if (!getCourse(code)) throw new Error(`Unknown course: ${code}`);
    const pool = sections.filter(s => sectionProblems(s, ctx).length === 0 && matches(s, options))
      .filter(s => required.includes(s.courseCode) || courseCountsTowardDegree(s.courseCode, ctx.student));
    const missing = required.filter(code => !pool.some(s => s.courseCode === code));
    if (missing.length) return { found: false, reason: `No eligible section meets the constraints for: ${missing.join(", ")}`, suggestions: [] };

    // Group by course to prevent duplicates, and explore alternatives rather than
    // greedily choosing a section that could block a later required course.
    const codes = [...new Set(pool.map(s => s.courseCode))].sort((a, b) => Number(required.includes(b)) - Number(required.includes(a)) || a.localeCompare(b));
    const groups = codes.map(code => pool.filter(s => s.courseCode === code).sort((a, b) => score(b, ctx) - score(a, ctx)));
    const best = [];
    let visited = 0;
    let truncated = false;
    function visit(index, chosen, points, credits = 0) {
      if (++visited > 50000) { truncated = true; return; }
      const includesRequired = required.every(code => chosen.some(s => s.courseCode === code));
      if (includesRequired && (count !== undefined ? chosen.length === count : credits >= targetCredits)) {
        best.push({ chosen: [...chosen], score: points, credits });
        best.sort((a, b) => (targetCredits === null ? 0 : a.credits - b.credits) || b.score - a.score);
        best.splice(3);
        return;
      }
      if (index === groups.length || chosen.length >= (count || 6) || (count !== undefined && chosen.length + groups.length - index < count)) return;
      for (const section of groups[index]) {
        if (!chosen.some(other => sectionsConflict(section, other))) visit(index + 1, [...chosen, section], points + score(section, ctx), credits + getCourse(section.courseCode).credits);
        if (truncated) return;
      }
      if (!required.includes(codes[index])) visit(index + 1, chosen, points, credits);
    }
    visit(0, [], 0);
    return { found: best.length > 0, truncated, targetCredits,
      reason: best.length ? `${targetCredits === null ? "" : `Target: ${targetCredits} credits. Drafts meet or exceed the target, with the closest totals first. `}Drafts only; the current plan is unchanged. Saved preferences rank results; explicit constraints are mandatory.`
        : truncated ? "Search limit reached; narrow the course choices and try again." : `No conflict-free schedule meets all constraints${targetCredits === null ? "" : ` and reaches ${targetCredits} credits within six courses`}. Try a lower load or wider days/times.`,
      expectedPlan: [...(ctx.state.plan || [])],
      suggestions: best.map(item => ({ ...preview(item.chosen.map(s => s.id), ctx), score: item.score })) };
  }

  function save(sectionIds, ctx, allowInvalidRemainder = false, source = "planner") {
    const result = preview(sectionIds, ctx);
    if (!result.valid && !allowInvalidRemainder) return { ok: false, error: "Plan was not changed. Resolve the listed problems first.", ...result };
    setState({ plan: [...sectionIds] }, { planSource: source });
    return { ok: true, ...result, message: "Demo plan saved in this browser. No courses were registered." };
  }

  const definitions = [
    {
      name: "get_schedule_context", description: "Read the active demo student's program, completed course codes, requirements, preferences, term, campus and current plan. Omits name, student ID, grades and free-text notes. Identify a student in the UI first.",
      inputSchema: object(), readOnly: true,
      run: (_, ctx) => {
        const prefs = ctx.state.preferences || {};
        return { program: getProgram(ctx.student.programId), term: getTerm(ctx.termId), campus: getCampus(ctx.campusId),
          completedCourseCodes: getCompletedCodes(ctx.student), requirements: computeRequirementProgress(ctx.student),
          preferences: { desiredCredits: prefs.desiredCredits || DEFAULT_CREDIT_LOAD, priority: prefs.priority || "balanced", interests: prefs.interests || [],
            days: prefs.days || [], timeOfDay: prefs.timeOfDay || "any", format: prefs.format || "any" },
          unavailableTimes: ctx.state.unavailableTimes || [], undoCount: getPlanHistory(ctx.state).length,
          plan: preview(ctx.state.plan || [], ctx), dataSource: "Embedded demo catalog; not live university availability." };
      }
    },
    {
      name: "search_course_sections", description: "Search the selected term/campus (including online) by course code, title or interest. Returns section IDs, meetings, seats, prerequisite problems and degree fit. Eligible sections only by default. Does not edit the plan.",
      inputSchema: object({ query: { type: "string", maxLength: 120 }, eligibleOnly: { type: "boolean" }, ...filters }), readOnly: true,
      run: (input, ctx) => {
        const query = (input.query || "").trim().toLowerCase();
        const results = sections.filter(s => s.term === ctx.termId && (s.campus === ctx.campusId || s.format === "online"))
          .filter(s => {
            const course = getCourse(s.courseCode);
            return (`${course.code} ${course.name} ${course.areas.join(" ")}`.toLowerCase().includes(query)
              || course.code.toLowerCase().includes(query.replace(/\s/g, ""))) && matches(s, input);
          }).map(s => describe(s, ctx)).filter(s => input.eligibleOnly === false || s.eligible);
        return { sections: results, count: results.length };
      }
    },
    {
      name: "suggest_schedules", description: "Generate up to three conflict-free drafts. Default to the saved credit target (12 credits when unset), preferring the closest total at or above the target within six courses. Override with targetCredits OR an exact courseCount. courseCodes are mandatory inclusions; fill with degree courses. Saved preferences rank results; supplied days, times and format are hard constraints. Does not save or enroll.",
      inputSchema: object({ courseCount: { type: "integer", minimum: 1, maximum: 6 }, targetCredits: { type: "integer", minimum: 1, maximum: 24 }, courseCodes: ids, ...filters }), readOnly: true,
      run: suggest
    },
    {
      name: "preview_schedule", description: "Validate proposed section IDs without saving: checks time conflicts, duplicate courses, completed courses, prerequisites, seats, term and campus; returns meetings and credits. Empty list previews an empty plan.",
      inputSchema: object({ sectionIds: ids }, ["sectionIds"]), readOnly: true,
      run: (input, ctx) => preview(input.sectionIds, ctx)
    },
    {
      name: "apply_schedule", description: "Replace the browser's demo plan with validated section IDs and refresh the visible calendar. Only use when the student requests a plan change. Pass expectedPlan from the latest context or suggestion to prevent overwriting subsequent edits. Empty sectionIds clears the plan. Never registers or finalizes courses.",
      inputSchema: object({ sectionIds: ids, expectedPlan: expectedPlanSchema }, ["sectionIds", "expectedPlan"]), readOnly: false,
      run: (input, ctx) => {
        assertCurrentPlan(input.expectedPlan, ctx);
        return save(input.sectionIds, ctx, false, "Apply schedule");
      }
    },
    {
      name: "add_schedule_section", description: "Add one eligible section to the current browser demo plan and refresh the calendar. Rejects conflicts and duplicate courses. Repeating an existing section is a no-op. Never enrolls or finalizes.",
      inputSchema: object({ sectionId: text }, ["sectionId"]), readOnly: false,
      run: (input, ctx) => {
        const current = ctx.state.plan || [];
        if (current.includes(input.sectionId)) return { ok: true, ...preview(current, ctx), message: "Section already in the plan; nothing changed." };
        if (current.length >= 6) throw new Error("At most six courses can be added with this tool.");
        return save([...current, input.sectionId], ctx, false, "Add section");
      }
    },
    {
      name: "remove_schedule_section", description: "Remove a section from the current browser demo plan and refresh the calendar. Can repair an invalid plan; returns any remaining problems. Repeating a removal is a no-op. Never drops a university registration.",
      inputSchema: object({ sectionId: text }, ["sectionId"]), readOnly: false,
      run: (input, ctx) => save((ctx.state.plan || []).filter(id => id !== input.sectionId), ctx, true, "Remove section")
    },
    {
      name: "set_unavailable_times", description: "Save recurring weekly unavailable times for work, commuting or commitments. Replaces the list; read context and preserve existing blocks when adding one. Pass expectedUnavailableTimes from fresh context to prevent stale writes. Start/end are local campus times; end may be 24:00. Split overnight blocks into separate days. These hard constraints apply to search, drafts, validation and swaps. Does not remove existing courses; reports their conflicts. Use neutral labels if commitment details are private.",
      inputSchema: object({ unavailableTimes: blocksSchema, expectedUnavailableTimes: blocksSchema }, ["unavailableTimes", "expectedUnavailableTimes"]), readOnly: false,
      run: (input, ctx) => {
        if (availabilitySnapshot(input.expectedUnavailableTimes) !== availabilitySnapshot(ctx.state.unavailableTimes || [])) throw new Error("Unavailable times changed. Read context before saving again.");
        for (const block of input.unavailableTimes) if (block.startTime >= block.endTime) throw new Error("Unavailable time must end after it starts; split overnight commitments into two days.");
        setState({ unavailableTimes: input.unavailableTimes.map(block => ({ ...block })) });
        return { ok: true, unavailableTimes: input.unavailableTimes, plan: preview(ctx.state.plan || [], context()),
          message: "Unavailable times saved. Existing courses are unchanged; resolve any flagged conflicts." };
      }
    },
    {
      name: "compare_schedules", description: "Compare two to five complete schedules without saving. Returns credits, campus days, class days, weekly gaps, earliest/latest times, early starts and evening meetings. Rank valid nonempty options by rankBy (lower is better). Gaps include online meetings and may contain commitments; no travel estimates. Flags unequal credit loads so a lighter schedule is not mistaken for a better fit.",
      inputSchema: object({ schedules: { type: "array", maxItems: 5, items: object({ label: text, sectionIds: ids }, ["sectionIds"]) },
        rankBy: { type: "string", enum: ["gapMinutes", "campusDays", "daysWithClasses", "earlyMeetings", "eveningMeetings"] } }, ["schedules"]), readOnly: true,
      run: (input, ctx) => { if (input.schedules.length < 2) throw new Error("Provide at least two schedules to compare."); return compare(input, ctx); }
    },
    {
      name: "explain_schedule_section", description: "Explain a section's eligibility, prerequisite status, degree fit, preference score and trade-offs against sectionIds (defaults to current plan). Shows schedule conflicts and whether other planned electives already fill the requirement. Read-only; does not claim optimality or graduation eligibility.",
      inputSchema: object({ sectionId: text, sectionIds: ids }, ["sectionId"]), readOnly: true,
      run: (input, ctx) => {
        if (input.sectionIds?.some(id => !sections.some(section => section.id === id))) throw new Error("Unknown section in comparison plan");
        return explain(input.sectionId, input.sectionIds || ctx.state.plan || [], ctx);
      }
    },
    {
      name: "find_schedule_swaps", description: "Preview replacements for one current section while preserving every other course. Same-course sections or electives in the same requirement category are considered; core courses retain their course code. Optional courseCode narrows candidates; sameTimeOnly keeps all replacement meetings inside the original day/time windows. Does not save. Use returned expectedPlan when applying a swap.",
      inputSchema: object({ sectionId: text, courseCode: text, sameTimeOnly: { type: "boolean" } }, ["sectionId"]), readOnly: true,
      run: findSwaps
    },
    {
      name: "swap_schedule_section", description: "Atomically replace one planned section, keeping all other section IDs and their order unchanged. Pass expectedPlan from the swap preview. Validates the resulting plan and records one undo step. A different course can change credits and degree coverage; review the preview first. Never enrolls or drops courses.",
      inputSchema: object({ sectionId: text, replacementSectionId: text, expectedPlan: expectedPlanSchema }, ["sectionId", "replacementSectionId", "expectedPlan"]), readOnly: false,
      run: (input, ctx) => {
        assertCurrentPlan(input.expectedPlan, ctx);
        if (!(ctx.state.plan || []).includes(input.sectionId)) throw new Error("Section is no longer in the plan.");
        return save(ctx.state.plan.map(id => id === input.sectionId ? input.replacementSectionId : id), ctx, false, "Swap section");
      }
    },
    {
      name: "get_schedule_history", description: "Read up to ten recent plan snapshots for the current student, term and campus, newest first. Includes manual edits as well as planner changes so undo never skips a later edit. Snapshots are local to this browser; preferences and unavailable times are not undone.",
      inputSchema: object(), readOnly: true,
      run: (_, ctx) => ({ expectedPlan: [...(ctx.state.plan || [])], entries: getPlanHistory(ctx.state).slice().reverse().map(({ before, after, source, savedAt }) => ({ before, after, source, savedAt })) })
    },
    {
      name: "undo_schedule_change", description: "Restore the immediately previous plan snapshot (including manual changes). Pass expectedPlan from fresh context/history. Rejects stale state or a snapshot that is invalid under current availability or eligibility, rather than overwriting newer edits or ignoring constraints. Consumes one undo step; does not alter preferences, unavailable times or enrollment.",
      inputSchema: object({ expectedPlan: expectedPlanSchema }, ["expectedPlan"]), readOnly: false,
      run: (input, ctx) => {
        assertCurrentPlan(input.expectedPlan, ctx);
        const history = getPlanHistory(ctx.state);
        const last = history.at(-1);
        if (!last) throw new Error("No previous plan to restore.");
        if (JSON.stringify(last.after) !== JSON.stringify(ctx.state.plan || [])) throw new Error("The plan changed outside the recorded history; it cannot be safely undone.");
        const restored = preview(last.before, ctx);
        if (!restored.valid) return { ok: false, error: "The previous plan is not valid under current constraints. Resolve the reported problems before undoing.", ...restored };
        setState({ plan: [...last.before], planHistory: history.slice(0, -1) }, { recordPlanHistory: false });
        return { ok: true, ...restored, message: "Previous plan restored. Preferences and unavailable times were kept." };
      }
    }
  ];

  const tools = definitions.map(({ run, readOnly, ...definition }) => ({
    ...definition, annotations: { readOnlyHint: readOnly, untrustedContentHint: true },
    async execute(input = {}, options = {}) {
      try {
        if (options.signal?.aborted) throw new Error("Tool execution was cancelled.");
        validate(input, definition.inputSchema);
        if (input.earliestStart && input.latestEnd && input.earliestStart >= input.latestEnd) throw new Error("earliestStart must be before latestEnd.");
        return run(input, context());
      } catch (error) {
        return { ok: false, error: error.message };
      }
    }
  }));

  return { tools, execute: (name, input) => {
    const tool = tools.find(item => item.name === name);
    if (!tool) return Promise.resolve({ ok: false, error: "Unknown scheduling tool" });
    return tool.execute(input);
  } };
})();
