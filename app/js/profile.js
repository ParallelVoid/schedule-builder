/* ============================================================
   profile.js — Renders the profile summary, requirement
   progress, and completed-courses list; captures preferences.
   ============================================================ */

(function () {
  const DEFAULT_CREDIT_LOAD = 12;
  renderMasthead(2);
  const student = requireStudent();
  if (!student) return;

  const program = getProgram(student.programId);
  const campus = getCampus(student.campus);
  const completedCredits = getCompletedCredits(student);
  const progress = computeRequirementProgress(student);
  const remainingCategories = progress.filter(c => !c.satisfied).length;

  /* ---------- Profile summary ---------- */
  const summaryFields = [
    ["Name", student.name],
    ["Student ID", student.id],
    ["Major / Program", `${program.name} (${program.degree})`],
    ["Year of study", student.year],
    ["Campus", campus.name],
    ["Credits completed", `${completedCredits} of ${program.totalCreditsRequired}`]
  ];

  const summaryGrid = el("div", { class: "rec-card__meta-grid" });
  summaryFields.forEach(([label, value]) => {
    summaryGrid.appendChild(el("div", {}, [
      el("span", { class: "meta-item__label" }, label),
      el("span", {}, String(value))
    ]));
  });
  document.getElementById("profile-summary").appendChild(summaryGrid);

  const progressPct = Math.min(100, Math.round((completedCredits / program.totalCreditsRequired) * 100));
  const progressWrap = el("div", { class: "mt-16" }, [
    el("div", { class: "flex-between" }, [
      el("span", { class: "text-faint" }, "Overall credit progress"),
      el("span", { class: "text-faint" }, `${progressPct}%`)
    ]),
    el("div", { class: "progress-track mt-8" }, [
      el("div", { class: "progress-fill", style: `width:${progressPct}%` })
    ])
  ]);
  document.getElementById("profile-summary").appendChild(progressWrap);

  /* ---------- Requirement progress ---------- */
  const reqMount = document.getElementById("requirement-progress");
  if (progress.length === 0) {
    reqMount.appendChild(el("p", {}, "No requirement data available for this program."));
  } else {
    progress.forEach(cat => {
      const statusStamp = cat.satisfied
        ? el("span", { class: "stamp stamp--met" }, [el("span", { class: "stamp__dot" }), "Requirement Met"])
        : el("span", { class: "stamp stamp--open" }, [el("span", { class: "stamp__dot" }), "In Progress"]);

      const detail = cat.type === "specific"
        ? `${cat.neededCount - cat.remainingCourses.length} of ${cat.neededCount} required courses complete`
        : `${cat.completedCount} of ${cat.neededCount} needed (choose from ${cat.remainingCourses.length + cat.completedCount} options)`;

      const remainingText = cat.satisfied ? "" : `Still needed: ${cat.remainingCourses.join(", ")}`;

      reqMount.appendChild(el("div", { class: "req-row" }, [
        el("div", {}, [
          el("div", { class: "req-row__label" }, cat.label),
          el("div", { class: "req-row__meta" }, detail),
          remainingText ? el("div", { class: "req-row__meta" }, remainingText) : null
        ]),
        statusStamp
      ]));
    });
  }

  if (remainingCategories === 0) {
    reqMount.parentElement.insertAdjacentHTML("beforeend",
      `<p class="text-faint mt-16">All requirement categories are satisfied based on completed coursework.</p>`);
  }

  /* ---------- Completed courses ---------- */
  const completedMount = document.getElementById("completed-courses");
  if (student.completedCourses.length === 0) {
    completedMount.appendChild(el("div", { class: "state-block" }, [
      el("h3", {}, "No completed courses yet"),
      el("p", {}, "This is a fresh profile — recommendations will focus on entry-level courses with no prerequisites.")
    ]));
  } else {
    const table = el("table", { class: "compare-table" });
    table.innerHTML = `<thead><tr><th>Course</th><th>Title</th><th>Credits</th><th>Grade</th></tr></thead>`;
    const tbody = el("tbody");
    student.completedCourses.forEach(c => {
      const course = getCourse(c.code);
      const row = el("tr", {}, [
        el("td", {}, el("span", { class: "code-badge" }, c.code)),
        el("td", {}, course ? course.name : "—"),
        el("td", {}, course ? String(course.credits) : "—"),
        el("td", {}, c.grade)
      ]);
      tbody.appendChild(row);
    });
    table.appendChild(tbody);
    completedMount.appendChild(table);
  }

  /* ---------- Preferences form: build dynamic chip options ---------- */
  const allAreas = Array.from(new Set(courses.flatMap(c => c.areas))).sort();
  const interestMount = document.getElementById("interest-chips");
  allAreas.forEach(area => {
    interestMount.appendChild(el("label", { class: "chip" }, [
      el("input", { type: "checkbox", name: "interest", value: area }),
      area.charAt(0).toUpperCase() + area.slice(1)
    ]));
  });

  const dayMount = document.getElementById("day-chips");
  ["Mon", "Tue", "Wed", "Thu", "Fri"].forEach(day => {
    dayMount.appendChild(el("label", { class: "chip" }, [
      el("input", { type: "checkbox", name: "day", value: day }),
      day
    ]));
  });

  /* Restore previously-saved preferences, if any */
  const existing = getState().preferences;
  if (existing) {
    document.getElementById("pref-load").value = existing.desiredCredits || DEFAULT_CREDIT_LOAD;
    document.getElementById("pref-notes").value = existing.notes || "";
    document.querySelectorAll('input[name="priority"]').forEach(r => r.checked = r.value === existing.priority);
    document.querySelectorAll('input[name="timeOfDay"]').forEach(r => r.checked = r.value === existing.timeOfDay);
    document.querySelectorAll('input[name="format"]').forEach(r => r.checked = r.value === existing.format);
    document.querySelectorAll('input[name="interest"]').forEach(c => c.checked = (existing.interests || []).includes(c.value));
    document.querySelectorAll('input[name="day"]').forEach(c => c.checked = (existing.days || []).includes(c.value));
  }

  /* ---------- Submit ---------- */
  document.getElementById("preferences-form").addEventListener("submit", e => {
    e.preventDefault();
    const interests = Array.from(document.querySelectorAll('input[name="interest"]:checked')).map(i => i.value);
    const days = Array.from(document.querySelectorAll('input[name="day"]:checked')).map(i => i.value);
    const priority = document.querySelector('input[name="priority"]:checked').value;
    const timeOfDay = document.querySelector('input[name="timeOfDay"]:checked').value;
    const format = document.querySelector('input[name="format"]:checked').value;

    setState({
      preferences: {
        desiredCredits: Number(document.getElementById("pref-load").value),
        priority,
        interests,
        days,
        timeOfDay,
        format,
        notes: document.getElementById("pref-notes").value.trim()
      }
    });
    window.location.href = "recommendations.html";
  });
})();
