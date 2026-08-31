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
  const availabilityOption = { ...blocksSchema,
    description: "Optional replacement for saved unavailable times for this request only; [] ignores saved blocks. Omit to use saved blocks. Local campus time; split overnight blocks. Does not save." };
  const rankBySchema = { type: "string", enum: ["gapMinutes", "campusDays", "daysWithClasses", "earlyMeetings", "eveningMeetings"] };
  const filters = {
    unavailableTimes: availabilityOption,
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
    const original = sections.find(section => section.id === input.replaceSectionId);
    if (!original || !current.includes(original.id)) throw new Error("Choose a section in the current plan to replace.");
    const categories = getRequirementsFor(ctx.student.programId).filter(cat => cat.courses.includes(original.courseCode));
    const core = categories.some(cat => cat.type === "specific");
    const candidateCode = input.courseCode?.replace(/\s/g, "").toUpperCase();
    if (candidateCode && !getCourse(candidateCode)) throw new Error("Unknown replacement course");
    const alternatives = sections.filter(section => section.id !== original.id && !current.includes(section.id))
      .filter(section => !candidateCode || section.courseCode === candidateCode)
      .filter(section => section.courseCode === original.courseCode || (!core && categories.some(cat => cat.courses.includes(section.courseCode))))
      .filter(section => matches(section, input))
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

  function withAvailability(input, ctx) {
    return input.unavailableTimes === undefined ? ctx : {
      ...ctx, state: { ...ctx.state, unavailableTimes: input.unavailableTimes }
    };
  }

  function apply(input, ctx) {
    const actions = ["sectionIds", "addSectionId", "removeSectionId", "swap", "undo"].filter(key => Object.hasOwn(input, key));
    if (actions.length > 1) throw new Error("Choose only one plan change: sectionIds, addSectionId, removeSectionId, swap or undo.");
    const action = actions[0];
    const changesAvailability = input.unavailableTimes !== undefined;
    if (!action && !changesAvailability) throw new Error("Provide a plan change or unavailableTimes to save.");
    if (action) {
      if (!Object.hasOwn(input, "expectedPlan")) throw new Error("A plan change requires expectedPlan from fresh context or a preview.");
      assertCurrentPlan(input.expectedPlan, ctx);
    } else if (input.expectedPlan !== undefined) throw new Error("expectedPlan requires a plan change.");
    if (changesAvailability) {
      if (!Object.hasOwn(input, "expectedUnavailableTimes")) throw new Error("Saving unavailableTimes requires expectedUnavailableTimes from fresh context.");
      if (availabilitySnapshot(input.expectedUnavailableTimes) !== availabilitySnapshot(ctx.state.unavailableTimes || [])) throw new Error("Unavailable times changed. Read context before saving again.");
    } else if (input.expectedUnavailableTimes !== undefined) throw new Error("expectedUnavailableTimes requires unavailableTimes.");
    if (action === "undo" && changesAvailability) throw new Error("Undo cannot be combined with unavailableTimes; save commitments separately.");

    const current = ctx.state.plan || [];
    const partial = changesAvailability ? { unavailableTimes: input.unavailableTimes.map(block => ({ ...block })) } : {};
    let next = [...current];
    let allowInvalid = !action || action === "removeSectionId";
    const source = { sectionIds: "Apply schedule", addSectionId: "Add section", removeSectionId: "Remove section", swap: "Swap section" }[action];
    if (action === "sectionIds") next = [...input.sectionIds];
    if (action === "addSectionId") {
      if (current.includes(input.addSectionId)) allowInvalid = !changesAvailability;
      else {
        if (current.length >= 6) throw new Error("At most six courses can be added with this tool.");
        next.push(input.addSectionId);
      }
    }
    if (action === "removeSectionId") next = current.filter(id => id !== input.removeSectionId);
    if (action === "swap") {
      if (!current.includes(input.swap.sectionId)) throw new Error("Section is no longer in the plan.");
      next = current.map(id => id === input.swap.sectionId ? input.swap.replacementSectionId : id);
    }
    if (action === "undo") {
      const history = getPlanHistory(ctx.state);
      const last = history.at(-1);
      if (!last) throw new Error("No previous plan to restore.");
      if (JSON.stringify(last.after) !== JSON.stringify(current)) throw new Error("The plan changed outside the recorded history; it cannot be safely undone.");
      next = [...last.before];
      partial.planHistory = history.slice(0, -1);
    }
    // Validate against proposed commitments before either part is persisted.
    const result = preview(next, withAvailability(input, ctx));
    if (!result.valid && !allowInvalid) return { ok: false,
      error: "Plan and unavailable times were not changed. Resolve the listed problems first.", ...result };
    if (action) partial.plan = next;
    setState(partial, { planSource: source, recordPlanHistory: action !== "undo" });
    return { ok: true, ...result, ...(changesAvailability ? { unavailableTimes: partial.unavailableTimes, plan: result } : {}),
      message: action === "undo" ? "Previous plan restored. Preferences and unavailable times were kept."
        : !action ? "Unavailable times saved. Existing courses are unchanged; resolve any flagged conflicts."
        : "Demo plan saved in this browser. No courses were registered." };
  }

  const definitions = [
    {
      name: "get_schedule_context", description: "Read the active demo student's program, completed course codes, requirements, preferences, term, campus, unavailable times and current plan. includeHistory adds up to ten recent plan snapshots, newest first. Omits name, student ID, grades and free-text notes. Identify a student in the UI first.",
      inputSchema: object({ includeHistory: { type: "boolean", description: "Include plan history for undo; preferences and commitments are not undone." } }), readOnly: true,
      run: (input, ctx) => {
        const prefs = ctx.state.preferences || {};
        return { program: getProgram(ctx.student.programId), term: getTerm(ctx.termId), campus: getCampus(ctx.campusId),
          completedCourseCodes: getCompletedCodes(ctx.student), requirements: computeRequirementProgress(ctx.student),
          preferences: { desiredCredits: prefs.desiredCredits || DEFAULT_CREDIT_LOAD, priority: prefs.priority || "balanced", interests: prefs.interests || [],
            days: prefs.days || [], timeOfDay: prefs.timeOfDay || "any", format: prefs.format || "any" },
          unavailableTimes: ctx.state.unavailableTimes || [], undoCount: getPlanHistory(ctx.state).length,
          ...(input.includeHistory ? { history: getPlanHistory(ctx.state).slice().reverse().map(({ before, after, source, savedAt }) => ({ before, after, source, savedAt })) } : {}),
          plan: preview(ctx.state.plan || [], ctx), dataSource: "Embedded demo catalog; not live university availability." };
      }
    },
    {
      name: "search_course_sections", description: "Search the selected term/campus (including online) by course code, title or interest. Returns section IDs, meetings, seats, prerequisite problems and degree fit. Eligible sections only by default. Optional days, times, format and unavailableTimes are hard constraints. Does not save.",
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
      name: "suggest_schedules", description: "Generate up to three conflict-free drafts without saving. Default to saved credit target (12 if unset), closest total at or above target within six courses. Override with targetCredits OR exact courseCount; courseCodes are mandatory inclusions. Saved preferences rank results; days, times, format and unavailableTimes are hard constraints. Alternatively, replaceSectionId previews up to ten swaps for one current section, preserving all others. Core courses keep their code; electives share a requirement category. Returns expectedPlan for applying a draft or swap. Does not save commitments or enroll.",
      inputSchema: object({ courseCount: { type: "integer", minimum: 1, maximum: 6 }, targetCredits: { type: "integer", minimum: 1, maximum: 24 }, courseCodes: ids,
        replaceSectionId: { ...text, description: "Preview replacements for this planned section instead of generating full drafts; cannot combine with load or courseCodes options." },
        courseCode: { ...text, description: "Only with replaceSectionId: restrict the replacement course." },
        sameTimeOnly: { type: "boolean", description: "Only with replaceSectionId: keep meetings inside the original day/time windows." }, ...filters }), readOnly: true,
      run: (input, ctx) => {
        if (input.replaceSectionId !== undefined) {
          if (["courseCount", "targetCredits", "courseCodes"].some(key => Object.hasOwn(input, key))) throw new Error("replaceSectionId cannot be combined with courseCount, targetCredits or courseCodes.");
          return findSwaps(input, ctx);
        }
        if (input.courseCode !== undefined || input.sameTimeOnly !== undefined) throw new Error("courseCode and sameTimeOnly require replaceSectionId.");
        return suggest(input, ctx);
      }
    },
    {
      name: "preview_schedule", description: "Validate sectionIds (defaults to current plan) without saving: conflicts, duplicate/completed courses, prerequisites, seats, term, campus and unavailable times. Returns meetings, credits and metrics. explainSectionId adds eligibility, degree fit, preference score and trade-offs against that plan. Alternatively provide 2–5 schedules to compare; rankBy chooses a metric (lower is better). Comparison excludes invalid/empty options and flags differing credit loads. unavailableTimes overrides saved commitments for this request only.",
      inputSchema: object({ sectionIds: ids, explainSectionId: text, unavailableTimes: availabilityOption,
        schedules: { type: "array", maxItems: 5, items: object({ label: text, sectionIds: ids }, ["sectionIds"]), description: "Compare complete schedules; cannot combine with sectionIds or explainSectionId." },
        rankBy: { ...rankBySchema, description: "Only with schedules; defaults to gapMinutes. Gaps include online meetings; travel time is not estimated." } }), readOnly: true,
      run: (input, ctx) => {
        if (input.schedules !== undefined) {
          if (input.sectionIds !== undefined || input.explainSectionId !== undefined) throw new Error("schedules cannot be combined with sectionIds or explainSectionId.");
          if (input.schedules.length < 2) throw new Error("Provide at least two schedules to compare.");
          return compare(input, ctx);
        }
        if (input.rankBy !== undefined) throw new Error("rankBy requires schedules.");
        const sectionIds = input.sectionIds || ctx.state.plan || [];
        if (input.explainSectionId && sectionIds.some(id => !sections.some(section => section.id === id))) throw new Error("Unknown section in comparison plan");
        return { ...preview(sectionIds, ctx), ...(input.explainSectionId ? { explanation: explain(input.explainSectionId, sectionIds, ctx) } : {}) };
      }
    },
    {
      name: "apply_schedule", description: "Save changes to the browser demo plan only when the student requests them. Choose at most one: sectionIds replaces/clears the plan, addSectionId, removeSectionId, swap, or undo:true. Every plan change requires expectedPlan from fresh context or suggestions. Optionally save unavailableTimes (replaces all blocks, [] clears) with expectedUnavailableTimes from context, alone or atomically with a plan change except undo. Validates against proposed commitments before saving; availability-only saves and removals may leave flagged conflicts. Undo restores one valid snapshot, preserving commitments/preferences. Never enrolls or finalizes.",
      inputSchema: object({ sectionIds: ids, addSectionId: text, removeSectionId: text,
        swap: object({ sectionId: text, replacementSectionId: text }, ["sectionId", "replacementSectionId"]),
        undo: { type: "boolean", enum: [true] }, expectedPlan: expectedPlanSchema,
        unavailableTimes: { ...blocksSchema, description: "Save this complete list of weekly commitments. Read context and preserve existing blocks when adding. Use neutral labels for private commitments." },
        expectedUnavailableTimes: blocksSchema }), readOnly: false, run: apply
    }
  ];

  const tools = definitions.map(({ run, readOnly, ...definition }) => ({
    ...definition, annotations: { readOnlyHint: readOnly, untrustedContentHint: true },
    async execute(input = {}, options = {}) {
      try {
        if (options.signal?.aborted) throw new Error("Tool execution was cancelled.");
        validate(input, definition.inputSchema);
        if (input.earliestStart && input.latestEnd && input.earliestStart >= input.latestEnd) throw new Error("earliestStart must be before latestEnd.");
        for (const block of input.unavailableTimes || []) if (block.startTime >= block.endTime) throw new Error("Unavailable time must end after it starts; split overnight commitments into two days.");
        const ctx = context();
        const result = run(input, readOnly ? withAvailability(input, ctx) : ctx);
        return readOnly && input.unavailableTimes !== undefined ? { ...result, unavailableTimes: input.unavailableTimes,
          expectedUnavailableTimes: ctx.state.unavailableTimes || [] } : result;
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
