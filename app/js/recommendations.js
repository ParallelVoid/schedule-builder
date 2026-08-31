/* ============================================================
   recommendations.js — Client-side recommendation engine.
   Entirely deterministic, rule-based scoring over the embedded
   JSON data. No external calls, no ML — just transparent rules.
   ============================================================ */

(function () {
  const DEFAULT_CREDIT_LOAD = 12;
  renderMasthead(3);
  const student = requireStudent();
  if (!student) return;

  const state = getState();
  const preferences = state.preferences || {
    desiredCredits: DEFAULT_CREDIT_LOAD, priority: "balanced", interests: [], days: [], timeOfDay: "any", format: "any"
  };
  const termId = state.selectedTerm || "F26";
  const term = getTerm(termId);
  const campusId = state.selectedCampus || student.campus;
  const completedCodes = getCompletedCodes(student);
  const progress = computeRequirementProgress(student);

  document.getElementById("edit-prefs-btn").addEventListener("click", () => window.location.href = "profile.html");

  /* ---------- Build candidate list ---------- */

  function timeOfDayBucket(startTime) {
    const mins = timeToMinutes(startTime);
    if (mins < 12 * 60) return "morning";
    if (mins < 17 * 60) return "afternoon";
    return "evening";
  }

  function pickBestSection(candidateSections) {
    // Prefer sections matching day + time-of-day + format preferences, then most seats.
    return candidateSections.slice().sort((a, b) => {
      const scoreOf = s => {
        let sc = 0;
        if (preferences.days.length && s.days.some(d => preferences.days.includes(d))) sc += 2;
        if (preferences.timeOfDay !== "any" && timeOfDayBucket(s.startTime) === preferences.timeOfDay) sc += 2;
        if (preferences.format !== "any" && s.format === preferences.format) sc += 2;
        if (s.seatsAvailable > 0) sc += 1;
        return sc;
      };
      return scoreOf(b) - scoreOf(a);
    })[0];
  }

  const candidates = courses
    .filter(c => !completedCodes.includes(c.code))
    .map(course => {
      const termSections = getSectionsForCourse(course.code, termId);
      const candidateSections = termSections.filter(s => s.campus === campusId || s.format === "online")
        .filter(s => getUnavailableConflicts(s).length === 0);

      if (candidateSections.length === 0) return null; // not offered where/when the student can take it

      const bestSection = pickBestSection(candidateSections);
      const missingPrereqs = getMissingPrerequisites(course, completedCodes);
      const prereqsOk = missingPrereqs.length === 0;
      const satisfyCategory = categoryCourseWouldSatisfy(course.code, student);
      const countsTowardDegree = courseCountsTowardDegree(course.code, student);
      const matchedInterests = course.areas.filter(a => preferences.interests.includes(a));

      let score = 0;
      const reasons = [];
      const warnings = [];

      // Requirement fit
      if (satisfyCategory) {
        score += 40;
        reasons.push(`satisfies your "${satisfyCategory.label}" requirement`);
      } else if (countsTowardDegree) {
        score += 12;
        reasons.push("counts toward your degree program");
      } else {
        score -= 30;
        warnings.push("Does not count toward your declared degree requirements — would transfer as a free elective.");
      }

      // Prerequisites — only a meaningful signal when the course actually has some
      if (prereqsOk) {
        if (course.prerequisites.length > 0) { score += 20; reasons.push("you've completed all prerequisites"); }
      } else {
        score -= 60;
        warnings.push(`Missing prerequisite${missingPrereqs.length > 1 ? "s" : ""}: ${missingPrereqs.join(", ")}`);
      }

      // Interests
      if (matchedInterests.length > 0) {
        score += 15 * Math.min(matchedInterests.length, 2);
        reasons.push(`matches your interest in ${matchedInterests.join(" & ")}`);
      }

      // Required vs elective priority
      const categories = getRequirementsFor(student.programId);
      const isSpecificRequirement = categories.some(cat => cat.type === "specific" && cat.courses.includes(course.code));
      const isElectiveOption = categories.some(cat => cat.type === "choose" && cat.courses.includes(course.code));
      if (preferences.priority === "required" && isSpecificRequirement) { score += 15; reasons.push("a required core course"); }
      if (preferences.priority === "electives" && isElectiveOption) { score += 10; reasons.push("an elective in your program"); }

      // Preferred days
      if (preferences.days.length > 0) {
        const overlap = bestSection.days.some(d => preferences.days.includes(d));
        if (overlap) { score += 10; reasons.push("meets on your preferred days"); }
        else { score -= 6; warnings.push(`Meets ${formatDays(bestSection.days)}, outside your preferred days.`); }
      }

      // Preferred time of day
      if (preferences.timeOfDay !== "any") {
        if (timeOfDayBucket(bestSection.startTime) === preferences.timeOfDay) { score += 8; reasons.push(`fits your ${preferences.timeOfDay} preference`); }
        else { score -= 4; }
      }

      // Format
      if (preferences.format !== "any") {
        if (bestSection.format === preferences.format) { score += 10; reasons.push(`offered ${preferences.format}, as you prefer`); }
        else { score -= 18; warnings.push(`Offered ${bestSection.format} only — you preferred ${preferences.format}.`); }
      }

      // Seat availability
      if (bestSection.seatsAvailable === 0) {
        score -= 8;
        warnings.push("This section is currently full.");
      } else if (bestSection.seatsAvailable <= 5) {
        warnings.push(`Only ${bestSection.seatsAvailable} seats left.`);
      }

      return { course, section: bestSection, sectionCount: candidateSections.length, score, reasons, warnings, prereqsOk, satisfyCategory };
    })
    .filter(Boolean)
    .sort((a, b) => b.score - a.score);

  const desiredCredits = preferences.desiredCredits || DEFAULT_CREDIT_LOAD;
  // Only surface courses that are a genuinely reasonable match — a heavily
  // negative score usually means "wrong major and missing prerequisites."
  // If too few courses clear that bar, relax it rather than show an empty page.
  const reasonableFit = candidates.filter(c => c.score > -40);
  const pool = reasonableFit.length >= 3 ? reasonableFit : candidates;
  let creditsShown = 0;
  let targetCount = 0;
  while (targetCount < pool.length && creditsShown < desiredCredits) {
    creditsShown += pool[targetCount++].course.credits;
  }
  const shown = pool.slice(0, Math.max(targetCount + 2, 5));

  /* Flag schedule conflicts among the shown recommendations */
  shown.forEach(item => { item.conflictsWith = []; });
  for (let i = 0; i < shown.length; i++) {
    for (let j = i + 1; j < shown.length; j++) {
      if (sectionsConflict(shown[i].section, shown[j].section)) {
        shown[i].conflictsWith.push(shown[j].course.code);
        shown[j].conflictsWith.push(shown[i].course.code);
      }
    }
  }

  /* ---------- Render ---------- */

  document.getElementById("loading-state").classList.add("hidden");

  const remainingCategories = progress.filter(c => !c.satisfied);
  const summaryBar = document.getElementById("summary-bar");
  summaryBar.classList.remove("hidden");
  summaryBar.innerHTML = `
    <div class="flex-between">
      <div>
        <span class="eyebrow" style="margin-bottom:4px;">${escapeHtml(term.name)} · ${escapeHtml(getCampus(campusId).name)}</span>
        <p style="margin:0;">Looking for <strong>${desiredCredits} credits</strong> ·
        ${remainingCategories.length === 0
          ? "all requirement categories are currently satisfied."
          : `${remainingCategories.length} requirement categor${remainingCategories.length === 1 ? "y" : "ies"} still open: ${remainingCategories.map(c => c.label).join(", ")}.`}</p>
      </div>
    </div>`;

  if (shown.length === 0) {
    document.getElementById("empty-state").classList.remove("hidden");
    return;
  }

  const list = document.getElementById("rec-list");
  shown.forEach((item, idx) => {
    const { course, section } = item;
    const card = el("div", { class: "rec-card" });

    const top = el("div", { class: "rec-card__top" }, [
      el("div", {}, [
        el("span", { class: "rec-card__rank" }, `Recommendation ${idx + 1}`),
        el("h3", { class: "rec-card__title" }, [
          el("span", { class: "code-badge", style: "margin-right:8px;" }, course.code),
          course.name
        ])
      ]),
      el("div", { class: "tag-row" }, [
        item.satisfyCategory ? el("span", { class: "tag tag--accent" }, "Fills requirement") : null,
        item.prereqsOk ? el("span", { class: "tag tag--good" }, "Prereqs met") : el("span", { class: "tag tag--warn" }, "Prereqs missing"),
        section.seatsAvailable === 0 ? el("span", { class: "tag tag--warn" }, "Full") : el("span", { class: "tag tag--neutral" }, `${section.seatsAvailable} seats open`)
      ])
    ]);
    card.appendChild(top);

    const metaGrid = el("div", { class: "rec-card__meta-grid" }, [
      el("div", {}, [el("span", { class: "meta-item__label" }, "Credits"), el("span", {}, String(course.credits))]),
      el("div", {}, [el("span", { class: "meta-item__label" }, "Instructor"), el("span", {}, section.instructor)]),
      el("div", {}, [el("span", { class: "meta-item__label" }, "Meets"), el("span", {}, formatMeeting(section))]),
      el("div", {}, [el("span", { class: "meta-item__label" }, "Location"), el("span", {}, `${section.location} · ${getCampus(section.campus).name}`)]),
    ]);
    card.appendChild(metaGrid);

    if (item.sectionCount > 1) {
      card.appendChild(el("p", { class: "text-faint", style: "margin:-6px 0 0;" }, `${item.sectionCount} sections available — showing the best match for your preferences.`));
    }

    card.appendChild(el("p", { class: "text-faint mt-8" }, course.description));

    if (item.reasons.length > 0) {
      card.appendChild(el("div", { class: "rec-card__why" }, `Recommended because it ${item.reasons.join(", ")}.`));
    }

    const allWarnings = item.warnings.slice();
    if (item.conflictsWith.length > 0) {
      allWarnings.push(`Schedule conflict with ${item.conflictsWith.join(", ")} at this meeting time.`);
    }
    if (allWarnings.length > 0) {
      const warnBlock = el("div", { class: "rec-card__warnings" });
      allWarnings.forEach(w => warnBlock.appendChild(el("div", { class: "warning-line" }, ["⚠", " " + w])));
      card.appendChild(warnBlock);
    }

    const inPlan = (getState().plan || []).includes(section.id);
    const footer = el("div", { class: "rec-card__footer" }, [
      el("span", { class: "text-faint" }, `${course.department}`),
      el("button", {
        class: "btn " + (inPlan ? "btn--outline" : "btn--accent") + " btn--sm",
        onclick: (e) => addToPlan(section.id, e.target)
      }, inPlan ? "Added to schedule ✓" : "Add to schedule")
    ]);
    card.appendChild(footer);

    list.appendChild(card);
  });

  function addToPlan(sectionId, button) {
    const section = sections.find(s => s.id === sectionId);
    if (getUnavailableConflicts(section).length) {
      button.textContent = "Conflicts with unavailable time";
      return;
    }
    const current = getState().plan || [];
    if (current.includes(sectionId)) return;
    setState({ plan: [...current, sectionId] });
    button.textContent = "Added to schedule ✓";
    button.classList.remove("btn--accent");
    button.classList.add("btn--outline");
  }
})();
