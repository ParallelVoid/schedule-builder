/* ============================================================
   schedule.js — Build My Schedule page.
   Reads/writes the shared `plan` (an array of section IDs) in
   localStorage, renders a weekly calendar, flags conflicts,
   and offers a compare view and a non-binding "finalize" step.
   ============================================================ */

(function () {
  renderMasthead(4);
  const student = requireStudent();
  if (!student) return;

  const state = getState();
  const termId = state.selectedTerm || "F26";
  const campusId = state.selectedCampus || student.campus;
  const term = getTerm(termId);
  const completedCodes = getCompletedCodes(student);

  const EVENT_COLORS = Array.from({ length: 6 }, (_, index) => `var(--course-${index + 1})`);

  function getPlanSections() {
    const planIds = getState().plan || [];
    return planIds
      .map(id => sections.find(s => s.id === id))
      .filter(Boolean);
  }

  function courseColor(code) {
    const allCodesInPlan = Array.from(new Set(getPlanSections().map(s => s.courseCode)));
    const idx = allCodesInPlan.indexOf(code) % EVENT_COLORS.length;
    return EVENT_COLORS[idx];
  }

  /* ---------- Render everything ---------- */
  function renderAll() {
    const confirmation = document.getElementById("finalize-confirmation");
    confirmation.classList.add("hidden");
    confirmation.innerHTML = "";
    const planSections = getPlanSections();
    renderConflictBanner(planSections);
    renderPlanList(planSections);
    renderCalendar(planSections);
    renderCompare(planSections);
    renderCreditTotal(planSections);
    renderAddCourseOptions(planSections);
  }

  /* ---------- Conflict banner ---------- */
  function renderConflictBanner(planSections) {
    const mount = document.getElementById("conflict-banner");
    const conflicts = findScheduleConflicts(planSections);
    const unavailable = planSections.flatMap(section => getUnavailableConflicts(section).map(block => ({ section, block })));
    if (conflicts.length === 0 && unavailable.length === 0) { mount.classList.add("hidden"); mount.innerHTML = ""; return; }
    mount.classList.remove("hidden");
    const lines = conflicts.map(([a, b]) => {
      const sharedDays = a.days.filter(d => b.days.includes(d));
      return `<div class="warning-line">⚠ <strong>${a.courseCode}</strong> (${formatTime(a.startTime)}–${formatTime(a.endTime)}) overlaps <strong>${b.courseCode}</strong> (${formatTime(b.startTime)}–${formatTime(b.endTime)}) on ${formatDays(sharedDays)}.</div>`;
    }).join("") + unavailable.map(({ section, block }) => `<div class="warning-line">⚠ <strong>${escapeHtml(section.courseCode)}</strong> overlaps unavailable time on ${escapeHtml(block.day)} ${escapeHtml(block.startTime)}–${escapeHtml(block.endTime)}.</div>`).join("");
    const count = conflicts.length + unavailable.length;
    mount.innerHTML = `<div class="error-banner"><strong>${count} schedule conflict${count > 1 ? "s" : ""} found.</strong><div class="mt-8">${lines}</div></div>`;
  }

  /* ---------- Plan list ---------- */
  function renderPlanList(planSections) {
    const listMount = document.getElementById("plan-list");
    const emptyMount = document.getElementById("plan-empty");
    listMount.innerHTML = "";

    if (planSections.length === 0) {
      emptyMount.classList.remove("hidden");
      return;
    }
    emptyMount.classList.add("hidden");

    const conflictIds = new Set(findScheduleConflicts(planSections).flat().map(s => s.id));

    planSections.forEach(section => {
      const course = getCourse(section.courseCode);
      const row = el("div", { class: "plan-item" }, [
        el("div", { class: "plan-item__info" }, [
          el("div", { class: "plan-item__title" }, [
            el("span", { class: "code-badge", style: "margin-right:8px;" }, section.courseCode),
            course.name,
            conflictIds.has(section.id) ? el("span", { class: "tag tag--warn", style: "margin-left:8px;" }, "Conflict") : null
          ]),
          el("div", { class: "plan-item__meta" }, `${formatMeeting(section)} · ${section.instructor} · ${course.credits} cr`)
        ]),
        el("div", { class: "schedule-action-buttons" }, [
          el("button", { type: "button", class: "btn btn--outline btn--sm", "aria-label": `Why ${section.courseCode}?`, onclick: () => showSectionAction("explain", section.id) }, "Why?"),
          el("button", { type: "button", class: "btn btn--outline btn--sm", "aria-label": `Swap ${section.courseCode}`, onclick: () => showSectionAction("swap", section.id) }, "Swap"),
          el("button", { type: "button", class: "btn btn--danger btn--sm", onclick: () => removeFromPlan(section.id) }, "Remove")
        ])
      ]);
      listMount.appendChild(row);
    });
  }

  function removeFromPlan(sectionId) {
    const current = getState().plan || [];
    setState({ plan: current.filter(id => id !== sectionId) });
  }

  function showSectionAction(action, sectionId) {
    window.dispatchEvent(new CustomEvent("schedule-section-action", { detail: { action, sectionId } }));
  }

  /* ---------- Credit total ---------- */
  function renderCreditTotal(planSections) {
    const total = planSections.reduce((sum, s) => sum + getCourse(s.courseCode).credits, 0);
    document.getElementById("credit-total-num").textContent = total;
    document.getElementById("course-count-label").textContent = `${planSections.length} course${planSections.length === 1 ? "" : "s"}`;
  }

  /* ---------- Weekly calendar ---------- */
  const DAY_COLS = { Mon: 2, Tue: 3, Wed: 4, Thu: 5, Fri: 6 };
  const CAL_START = 8 * 60;   // 8:00 AM
  const CAL_END = 20 * 60;    // 8:00 PM
  const SLOT_MIN = 30;
  const TOTAL_SLOTS = (CAL_END - CAL_START) / SLOT_MIN;

  function renderCalendar(planSections) {
    const mount = document.getElementById("calendar-mount");
    mount.innerHTML = "";

    if (planSections.length === 0) {
      mount.appendChild(el("div", { class: "state-block" }, [
        el("h3", {}, "Nothing scheduled yet"),
        el("p", {}, "Add courses from your recommendations, or use the form on the right.")
      ]));
      return;
    }

    const grid = el("div", { class: "calendar" });
    grid.style.display = "grid";
    grid.style.gridTemplateColumns = "56px repeat(5, 1fr)";
    grid.style.gridTemplateRows = `32px repeat(${TOTAL_SLOTS}, 26px)`;
    grid.style.position = "relative";

    grid.appendChild(el("div", { class: "calendar__head" }, ""));
    ["Mon", "Tue", "Wed", "Thu", "Fri"].forEach(d => grid.appendChild(el("div", { class: "calendar__head" }, d)));

    for (let slot = 0; slot < TOTAL_SLOTS; slot++) {
      const minutes = CAL_START + slot * SLOT_MIN;
      const isHour = minutes % 60 === 0;
      const rowIndex = slot + 2;
      const labelCell = el("div", {
        class: "calendar__hour-label",
        style: `grid-column:1; grid-row:${rowIndex};`
      }, isHour ? formatTime(`${String(Math.floor(minutes / 60)).padStart(2, "0")}:00`).replace(":00", "") : "");
      grid.appendChild(labelCell);

      for (let col = 2; col <= 6; col++) {
        grid.appendChild(el("div", { class: "calendar__cell", style: `grid-column:${col}; grid-row:${rowIndex};` }));
      }
    }

    const conflictIds = new Set(findScheduleConflicts(planSections).flat().map(s => s.id));

    planSections.forEach(section => {
      const course = getCourse(section.courseCode);
      const color = courseColor(section.courseCode);
      section.days.forEach(day => {
        const col = DAY_COLS[day];
        if (!col) return;
        const startSlot = Math.max(0, Math.round((timeToMinutes(section.startTime) - CAL_START) / SLOT_MIN));
        const endSlot = Math.min(TOTAL_SLOTS, Math.round((timeToMinutes(section.endTime) - CAL_START) / SLOT_MIN));
        const rowStart = startSlot + 2;
        const rowEnd = endSlot + 2;
        const event = el("div", {
          class: "calendar__event" + (conflictIds.has(section.id) ? " calendar__event--conflict" : ""),
          style: `grid-column:${col} / span 1; grid-row:${rowStart} / ${rowEnd}; background:${color};`
        }, [
          el("strong", {}, section.courseCode),
          `${formatTime(section.startTime)}`
        ]);
        grid.appendChild(event);
      });
    });

    mount.appendChild(grid);
    mount.appendChild(el("p", { class: "text-faint mt-16" }, "Times shown 8:00 AM–8:00 PM. Asynchronous sections aren't shown on the grid."));
  }

  /* ---------- Compare table ---------- */
  function renderCompare(planSections) {
    const mount = document.getElementById("compare-mount");
    mount.innerHTML = "";
    if (planSections.length < 2) {
      mount.appendChild(el("p", { class: "text-faint" }, "Add at least two courses to compare them side by side."));
      return;
    }
    const table = el("table", { class: "compare-table" });
    const thead = el("tr", {}, [el("th", {}, "Course"), el("th", {}, "Credits"), el("th", {}, "Instructor"), el("th", {}, "Meets"), el("th", {}, "Format"), el("th", {}, "Prerequisites"), el("th", {}, "Toward degree")]);
    table.appendChild(el("thead", {}, thead));
    const tbody = el("tbody");
    planSections.forEach(section => {
      const course = getCourse(section.courseCode);
      const prereqStatus = prerequisitesSatisfied(course, completedCodes) ? "Met" : `Missing ${getMissingPrerequisites(course, completedCodes).join(", ")}`;
      const towardDegree = categoryCourseWouldSatisfy(course.code, student) ? categoryCourseWouldSatisfy(course.code, student).label : (courseCountsTowardDegree(course.code, student) ? "Counts (extra)" : "Free elective");
      tbody.appendChild(el("tr", {}, [
        el("td", {}, [el("span", { class: "code-badge" }, course.code), " ", course.name]),
        el("td", {}, String(course.credits)),
        el("td", {}, section.instructor),
        el("td", {}, formatMeeting(section)),
        el("td", {}, section.format),
        el("td", {}, prereqStatus),
        el("td", {}, towardDegree)
      ]));
    });
    table.appendChild(tbody);
    mount.appendChild(table);
  }

  /* ---------- Add course ---------- */
  function renderAddCourseOptions(planSections) {
    const select = document.getElementById("add-course-select");
    select.innerHTML = "";
    const plannedIds = new Set(planSections.map(s => s.id));
    const available = sections
      .filter(s => s.term === termId && (s.campus === campusId || s.format === "online"))
      .filter(s => !plannedIds.has(s.id))
      .filter(s => getUnavailableConflicts(s).length === 0)
      .filter(s => !completedCodes.includes(s.courseCode));

    if (available.length === 0) {
      select.appendChild(el("option", { value: "" }, "No more sections available this term"));
      select.disabled = true;
      return;
    }
    select.disabled = false;
    available
      .sort((a, b) => a.courseCode.localeCompare(b.courseCode))
      .forEach(s => {
        const course = getCourse(s.courseCode);
        const label = `${s.courseCode} — ${course.name} (${formatMeeting(s)}, ${getCampus(s.campus).name})`;
        select.appendChild(el("option", { value: s.id }, label));
      });
  }

  document.getElementById("add-course-btn").addEventListener("click", () => {
    const select = document.getElementById("add-course-select");
    if (!select.value) return;
    const current = getState().plan || [];
    setState({ plan: [...current, select.value] });
  });

  /* ---------- Finalize ---------- */
  document.getElementById("finalize-btn").addEventListener("click", () => {
    const planSections = getPlanSections();
    const confirmMount = document.getElementById("finalize-confirmation");
    if (planSections.length === 0) {
      confirmMount.classList.remove("hidden");
      confirmMount.innerHTML = `<div class="error-banner">Add at least one course before finalizing your plan.</div>`;
      return;
    }
    const conflicts = findScheduleConflicts(planSections);
    const unavailableCount = planSections.filter(section => getUnavailableConflicts(section).length).length;
    const total = planSections.reduce((sum, s) => sum + getCourse(s.courseCode).credits, 0);

    confirmMount.classList.remove("hidden");
    confirmMount.innerHTML = `
      <div class="stamp ${conflicts.length || unavailableCount ? "stamp--open" : "stamp--met"}" style="display:flex; width:fit-content;">
        <span class="stamp__dot"></span>${conflicts.length || unavailableCount ? "Plan Saved — Review Needed" : "Plan Finalized"}
      </div>
      <p class="text-faint mt-8">
        ${planSections.length} course${planSections.length === 1 ? "" : "s"}, ${total} credits, for ${escapeHtml(term.name)}.
        ${conflicts.length || unavailableCount ? "This plan has unresolved schedule conflicts — resolve them before meeting with your advisor." : "This plan is ready to review with your advisor."}
        This step does not register you for any courses.
      </p>`;
  });

  window.addEventListener("schedule-plan-changed", renderAll);
  // Another tab may change the active profile or term as well as the plan.
  window.addEventListener("storage", event => {
    if (event.key === STORAGE_KEY || event.key === null) window.location.reload();
  });
  renderAll();
})();
