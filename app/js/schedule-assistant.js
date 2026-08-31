/* Student-facing controls use the same operations as the browser assistant. */
(() => {
  if (!getActiveStudent()) return;
  if (window.location.hash === "#availability") document.getElementById("availability").open = true;
  const draftMount = document.getElementById("schedule-drafts");
  const comparisonMount = document.getElementById("schedule-comparison");
  const actionMount = document.getElementById("section-actions");
  const feedback = document.getElementById("schedule-assistant-feedback");
  const undoFeedback = document.getElementById("undo-feedback");
  const availabilityFeedback = document.getElementById("availability-feedback");
  const undoButton = document.getElementById("undo-schedule-btn");
  let comparisonOptions = [];
  let refreshVersion = 0;

  const message = result => result.error || result.message || result.reason || "";
  const duration = minutes => `${Math.floor(minutes / 60)}h ${minutes % 60}m`;
  const metricSummary = metrics => `${metrics.campusDays} campus days · ${metrics.daysWithClasses} class days · ${duration(metrics.gapMinutes)} between classes · ${metrics.earlyMeetings} early / ${metrics.eveningMeetings} evening meetings`;

  function explanationContent(result) {
    const section = result.section;
    return el("div", {}, [
      el("p", {}, `${section.courseCode} — ${section.courseName} · ${formatMeeting(section)} · ${section.credits} credits`),
      el("p", {}, section.eligible ? "Eligible under your current constraints." : "Not currently eligible:"),
      el("ul", {}, [...section.problems, ...section.fit.reasons, ...(result.tradeOffs || section.fit.tradeOffs)].map(line => el("li", {}, line))),
      el("details", {}, [el("summary", {}, `Preference score: ${section.fit.score}`),
        el("ul", {}, section.fit.scoreBreakdown.map(item => el("li", {}, `${item.points > 0 ? "+" : ""}${item.points}: ${item.reason}`)))]),
      el("p", { class: "text-faint" }, result.selectionPolicy || "Eligibility and constraints are checked first; preference score ranks feasible options.")
    ]);
  }

  async function showExplanation(sectionId, sectionIds) {
    const result = await ScheduleTools.execute("explain_schedule_section", { sectionId, ...(sectionIds ? { sectionIds } : {}) });
    actionMount.replaceChildren(el("h3", {}, "Why this section?"));
    actionMount.appendChild(result.error ? el("p", {}, result.error) : explanationContent(result));
    actionMount.focus({ preventScroll: true });
    actionMount.scrollIntoView({ block: "nearest" });
  }

  async function showSwaps(sectionId, sameTimeOnly = false) {
    const result = await ScheduleTools.execute("find_schedule_swaps", { sectionId, sameTimeOnly });
    actionMount.replaceChildren(el("h3", {}, "Swap one course"));
    if (result.error) { actionMount.appendChild(el("p", {}, result.error)); return; }
    const toggle = el("input", { type: "checkbox", onchange: event => showSwaps(sectionId, event.target.checked) });
    toggle.checked = sameTimeOnly;
    actionMount.appendChild(el("label", { class: "schedule-toggle" }, [toggle, " Keep replacement meetings within the original days and times"]));
    actionMount.appendChild(el("p", { class: "text-faint" }, result.policy));
    actionMount.appendChild(el("p", {}, result.message));
    for (const option of result.alternatives) {
      const replacement = option.sections.find(section => section.id === option.replacementSectionId);
      const apply = el("button", { type: "button", class: "btn btn--outline btn--sm" }, `Use ${replacement.courseCode} (${replacement.id})`);
      apply.addEventListener("click", async () => {
        const saved = await ScheduleTools.execute("swap_schedule_section", {
          sectionId, replacementSectionId: option.replacementSectionId, expectedPlan: result.expectedPlan
        });
        feedback.textContent = message(saved);
      });
      actionMount.appendChild(el("div", { class: "schedule-draft mt-16" }, [
        el("h4", {}, `${replacement.courseCode} — ${replacement.courseName}`),
        el("p", {}, `${formatMeeting(replacement)} · ${replacement.format}`),
        el("p", { class: "text-faint" }, `Resulting plan: ${option.totalCredits} credits · ${metricSummary(option.metrics)}`),
        el("details", {}, [el("summary", {}, "Why this replacement?"), explanationContent(option.explanation)]), apply
      ]));
    }
    actionMount.focus({ preventScroll: true });
    actionMount.scrollIntoView({ block: "nearest" });
  }

  async function renderComparison(rankBy = "gapMinutes") {
    comparisonMount.replaceChildren();
    if (comparisonOptions.length < 2) return;
    const result = await ScheduleTools.execute("compare_schedules", { schedules: comparisonOptions, rankBy });
    if (result.error) { comparisonMount.appendChild(el("p", {}, result.error)); return; }
    const select = el("select", { id: "compare-priority", onchange: event => renderComparison(event.target.value) }, [
      ["gapMinutes", "Less time between classes"], ["campusDays", "Fewer campus days"], ["daysWithClasses", "Fewer class days"],
      ["earlyMeetings", "Fewer early starts"], ["eveningMeetings", "Fewer evening meetings"]
    ].map(([value, label]) => el("option", { value }, label)));
    select.value = rankBy;
    comparisonMount.appendChild(el("h3", {}, "Compare complete schedules"));
    comparisonMount.appendChild(el("div", { class: "field" }, [el("label", { for: "compare-priority" }, "Compare by"), select]));
    const table = el("table", { class: "compare-table" }, [
      el("thead", {}, el("tr", {}, ["Schedule", "Credits", "Campus days", "Class days", "Gaps", "Earliest", "Latest", "Early / evening"].map(label => el("th", { scope: "col" }, label)))),
      el("tbody", {}, result.schedules.map(option => el("tr", {}, [
        `${option.label}${option.index === result.recommendedIndex ? " · Best for this preference" : ""}${option.valid ? "" : " · Needs review"}`,
        option.totalCredits, option.metrics.campusDays, option.metrics.daysWithClasses, duration(option.metrics.gapMinutes),
        option.metrics.earliestStart || "—", option.metrics.latestEnd || "—", `${option.metrics.earlyMeetings} / ${option.metrics.eveningMeetings}`
      ].map(value => el("td", {}, String(value))))))
    ]);
    comparisonMount.appendChild(el("div", { class: "schedule-table-scroll", tabindex: "0", role: "region", "aria-label": "Schedule comparison table" }, table));
    result.tradeOffs.forEach(line => comparisonMount.appendChild(el("p", { class: "text-faint" }, line)));
  }

  document.getElementById("suggest-schedule-btn").addEventListener("click", async event => {
    const button = event.currentTarget;
    button.disabled = true;
    draftMount.replaceChildren();
    actionMount.replaceChildren();
    feedback.textContent = "Finding conflict-free drafts…";
    try {
      const result = await ScheduleTools.execute("suggest_schedules", {});
      feedback.textContent = message(result);
      comparisonOptions = result.expectedPlan?.length ? [{ label: "Current plan", sectionIds: result.expectedPlan }] : [];
      for (const [index, draft] of (result.suggestions || []).entries()) {
        const label = `Draft ${index + 1}`;
        comparisonOptions.push({ label, sectionIds: draft.sectionIds });
        const apply = el("button", { type: "button", class: "btn btn--outline btn--sm" }, "Use this draft");
        apply.addEventListener("click", async () => {
          const saved = await ScheduleTools.execute("apply_schedule", { sectionIds: draft.sectionIds, expectedPlan: result.expectedPlan });
          feedback.textContent = message(saved);
        });
        draftMount.appendChild(el("div", { class: "schedule-draft" }, [
          el("h4", {}, `${label} · ${draft.totalCredits} credits`),
          el("p", { class: "text-faint" }, metricSummary(draft.metrics)),
          el("ul", {}, draft.sections.map(section => el("li", {}, [
            `${section.courseCode} — ${formatMeeting(section)} `,
            el("button", { type: "button", class: "btn btn--ghost btn--sm", "aria-label": `Explain ${section.courseCode} in ${label}`,
              onclick: () => showExplanation(section.id, draft.sectionIds) }, "Why?")
          ]))), apply
        ]));
      }
      await renderComparison();
    } finally { button.disabled = false; }
  });

  document.getElementById("unavailable-form").addEventListener("submit", async event => {
    event.preventDefault();
    const previous = getState().unavailableTimes || [];
    const block = { day: document.getElementById("unavailable-day").value, startTime: document.getElementById("unavailable-start").value,
      endTime: document.getElementById("unavailable-end").value, label: document.getElementById("unavailable-label").value.trim() };
    const result = await ScheduleTools.execute("set_unavailable_times", { unavailableTimes: [...previous, block], expectedUnavailableTimes: previous });
    availabilityFeedback.textContent = message(result);
  });

  undoButton.addEventListener("click", async () => {
    const result = await ScheduleTools.execute("undo_schedule_change", { expectedPlan: getState().plan || [] });
    undoFeedback.textContent = message(result);
    feedback.textContent = message(result);
  });

  async function refresh() {
    const version = ++refreshVersion;
    const state = getState();
    undoButton.disabled = getPlanHistory(state).length === 0;
    const blocks = state.unavailableTimes || [];
    const mount = document.getElementById("unavailable-list");
    mount.replaceChildren();
    if (!blocks.length) mount.appendChild(el("p", { class: "text-faint" }, "No unavailable times saved."));
    blocks.forEach((block, index) => {
      const remove = el("button", { type: "button", class: "btn btn--ghost btn--sm", "aria-label": `Remove unavailable time ${index + 1}` }, "Remove");
      remove.addEventListener("click", async () => {
        const result = await ScheduleTools.execute("set_unavailable_times", { unavailableTimes: blocks.filter((_, i) => i !== index), expectedUnavailableTimes: blocks });
        availabilityFeedback.textContent = message(result);
      });
      mount.appendChild(el("div", { class: "availability-item" }, [el("span", {}, `${block.day} ${block.startTime}–${block.endTime} · ${block.label || "Busy"}`), remove]));
    });
    const result = await ScheduleTools.execute("get_schedule_context", {});
    if (version !== refreshVersion) return;
    document.getElementById("schedule-metrics").textContent = result.error || metricSummary(result.plan.metrics);
  }

  window.addEventListener("schedule-section-action", event => {
    if (event.detail.action === "swap") showSwaps(event.detail.sectionId);
    else showExplanation(event.detail.sectionId);
  });
  window.addEventListener("schedule-plan-changed", () => {
    draftMount.replaceChildren();
    comparisonMount.replaceChildren();
    actionMount.replaceChildren();
    comparisonOptions = [];
    feedback.textContent = "Planning state updated. Preview again to compare fresh options.";
    undoFeedback.textContent = "";
    refresh();
  });
  refresh();
})();
