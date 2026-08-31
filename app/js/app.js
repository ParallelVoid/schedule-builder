/* ============================================================
   app.js — Shared helpers used across every page.
   Handles: demo session state (localStorage), lookups against
   the embedded data, requirement/prerequisite calculations,
   scheduling math, and the shared masthead/nav.
   ============================================================ */

const STORAGE_KEY = "csh_demo_state_v1";

/* ---------- Session state (localStorage) ---------- */

function getState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    return {};
  }
}

function getPlanningScope(state) {
  return JSON.stringify([state.studentId || state.manualProfile || null, state.selectedTerm || "F26", state.selectedCampus || null]);
}

function getPlanHistory(state = getState()) {
  return (state.planHistory || []).filter(entry => entry.scope === getPlanningScope(state));
}

function setState(partial, { recordPlanHistory = true, planSource = "manual" } = {}) {
  const current = getState();
  const next = Object.assign({}, current, partial);
  const scopeChanged = getPlanningScope(current) !== getPlanningScope(next);
  const planChanged = JSON.stringify(current.plan || []) !== JSON.stringify(next.plan || []);
  if (scopeChanged) {
    next.planHistory = [];
    // Availability belongs to the selected student/term, never another profile.
    if (!Object.hasOwn(partial, "unavailableTimes")) next.unavailableTimes = [];
  } else if (planChanged && recordPlanHistory) {
    next.planHistory = [...getPlanHistory(current), {
      scope: getPlanningScope(current), before: [...(current.plan || [])], after: [...(next.plan || [])],
      source: planSource, savedAt: new Date().toISOString()
    }].slice(-10);
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  if (planChanged || JSON.stringify(current.unavailableTimes || []) !== JSON.stringify(next.unavailableTimes || [])) {
    window.dispatchEvent(new CustomEvent("schedule-plan-changed"));
  }
  return next;
}

/* Weekly commitments are local campus times. Adjacent intervals do not overlap. */
function getUnavailableConflicts(section, blocks = getState().unavailableTimes || []) {
  return blocks.filter(block => section.days.includes(block.day)
    && timeToMinutes(section.startTime) < timeToMinutes(block.endTime)
    && timeToMinutes(block.startTime) < timeToMinutes(section.endTime));
}

function clearState() {
  localStorage.removeItem(STORAGE_KEY);
}

/* ---------- Lookups ---------- */

function findStudentById(id) {
  const target = String(id).trim().toUpperCase();
  return students.find(s => s.id.toUpperCase() === target) || null;
}

function getProgram(programId) {
  return programs.find(p => p.id === programId) || null;
}

function getRequirementsFor(programId) {
  const entry = requirements.find(r => r.programId === programId);
  return entry ? entry.categories : [];
}

function getCourse(code) {
  return courses.find(c => c.code === code) || null;
}

function getTerm(termId) {
  return terms.find(t => t.id === termId) || null;
}

function getCampus(campusId) {
  return campuses.find(c => c.id === campusId) || null;
}

function getCompletedCodes(student) {
  return student.completedCourses.map(c => c.code);
}

function getCompletedCredits(student) {
  return student.completedCourses.reduce((sum, c) => {
    const course = getCourse(c.code);
    return sum + (course ? course.credits : 0);
  }, 0);
}

function getSectionsForCourse(code, termId) {
  return sections.filter(s => s.courseCode === code && s.term === termId);
}

/* ---------- Prerequisites ---------- */

function getMissingPrerequisites(course, completedCodes) {
  return course.prerequisites.filter(p => !completedCodes.includes(p));
}

function prerequisitesSatisfied(course, completedCodes) {
  return getMissingPrerequisites(course, completedCodes).length === 0;
}

/* ----------------------------------------------------------
   Requirement progress — for a given student, work out, per
   category, which required courses are still outstanding and
   whether the category is fully satisfied.
   ---------------------------------------------------------- */
function computeRequirementProgress(student) {
  const completed = getCompletedCodes(student);
  const categories = getRequirementsFor(student.programId);

  return categories.map(cat => {
    const completedInCategory = cat.courses.filter(code => completed.includes(code));
    let satisfied, remainingCourses, neededCount;

    if (cat.type === "specific") {
      neededCount = cat.courses.length;
      remainingCourses = cat.courses.filter(code => !completed.includes(code));
      satisfied = remainingCourses.length === 0;
    } else {
      // type === "choose"
      neededCount = cat.count;
      satisfied = completedInCategory.length >= cat.count;
      remainingCourses = satisfied ? [] : cat.courses.filter(code => !completed.includes(code));
    }

    return {
      id: cat.id,
      label: cat.label,
      type: cat.type,
      neededCount,
      completedCount: completedInCategory.length,
      remainingCourses,
      satisfied
    };
  });
}

/* Is a given course code still useful toward this student's degree? */
function courseCountsTowardDegree(code, student) {
  const categories = getRequirementsFor(student.programId);
  return categories.some(cat => cat.courses.includes(code));
}

/* Which (if any) requirement category would this course satisfy next? */
function categoryCourseWouldSatisfy(code, student) {
  const progress = computeRequirementProgress(student);
  return progress.find(cat => !cat.satisfied && cat.remainingCourses.includes(code)) || null;
}

/* ---------- Scheduling math ---------- */

function timeToMinutes(hhmm) {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
}

function formatTime(hhmm) {
  const [h, m] = hhmm.split(":").map(Number);
  const period = h >= 12 ? "PM" : "AM";
  const hour12 = h % 12 === 0 ? 12 : h % 12;
  return `${hour12}:${String(m).padStart(2, "0")} ${period}`;
}

function formatDays(days) {
  return days.join("/");
}

function formatMeeting(section) {
  if (section.days.length === 0) return "Asynchronous";
  return `${formatDays(section.days)} · ${formatTime(section.startTime)}–${formatTime(section.endTime)}`;
}

/* Do two sections overlap in both day and time? */
function sectionsConflict(a, b) {
  const sharedDay = a.days.some(d => b.days.includes(d));
  if (!sharedDay) return false;
  const aStart = timeToMinutes(a.startTime), aEnd = timeToMinutes(a.endTime);
  const bStart = timeToMinutes(b.startTime), bEnd = timeToMinutes(b.endTime);
  return aStart < bEnd && bStart < aEnd;
}

/* Given a list of chosen sections, return pairs that conflict */
function findScheduleConflicts(sectionList) {
  const conflicts = [];
  for (let i = 0; i < sectionList.length; i++) {
    for (let j = i + 1; j < sectionList.length; j++) {
      if (sectionsConflict(sectionList[i], sectionList[j])) {
        conflicts.push([sectionList[i], sectionList[j]]);
      }
    }
  }
  return conflicts;
}

/* ---------- Small utilities ---------- */

function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);
  Object.entries(attrs).forEach(([key, value]) => {
    if (key === "class") node.className = value;
    else if (key === "html") node.innerHTML = value;
    else if (key.startsWith("on") && typeof value === "function") node.addEventListener(key.slice(2), value);
    else node.setAttribute(key, value);
  });
  (Array.isArray(children) ? children : [children]).forEach(child => {
    if (child === null || child === undefined) return;
    node.appendChild(typeof child === "string" ? document.createTextNode(child) : child);
  });
  return node;
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

/* ----------------------------------------------------------
   Masthead + step indicator, rendered into #masthead on every
   page. `activeStep` is 1-4.
   ---------------------------------------------------------- */
function renderMasthead(activeStep) {
  const mount = document.getElementById("masthead");
  if (!mount) return;

  const student = getActiveStudent();

  const steps = [
    { n: 1, label: "Identify", href: "index.html" },
    { n: 2, label: "Profile & Preferences", href: "profile.html" },
    { n: 3, label: "Recommendations", href: "recommendations.html" },
    { n: 4, label: "Schedule", href: "schedule.html" }
  ];

  const stepsHtml = steps.map(step => {
    const state = step.n < activeStep ? "done" : step.n === activeStep ? "active" : "upcoming";
    const clickable = student || step.n === 1;
    const tag = clickable ? "a" : "span";
    const hrefAttr = clickable ? ` href="${step.href}"` : "";
    return `<${tag} class="step step--${state}"${hrefAttr}>
        <span class="step__marker">${step.n}</span>
        <span class="step__label">${step.label}</span>
      </${tag}>`;
  }).join(`<span class="step__connector" aria-hidden="true"></span>`);

  mount.innerHTML = `
    <div class="masthead__top">
      <a href="index.html" class="wordmark">
        <span class="wordmark__mark" aria-hidden="true">TW</span>
        <span class="wordmark__text">Termwise<br><small>Your next term, sorted</small></span>
      </a>
      <div class="masthead__actions">
        ${student ? `
          <div class="masthead__student">
            <span class="masthead__student-name">${escapeHtml(student.name)}</span>
            <span class="masthead__student-meta">${escapeHtml(student.id)} · ${escapeHtml(getProgram(student.programId).name)}</span>
          </div>` : ""}
        <label class="theme-picker">
          <span class="theme-picker__label">Theme</span>
          <select id="theme-select" aria-label="Colour theme">
            <option value="system">System</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </label>
      </div>
    </div>
    <nav class="stepper" aria-label="Planning steps">${stepsHtml}</nav>
  `;

  const themeSelect = document.getElementById("theme-select");
  if (themeSelect && window.TermwiseTheme) {
    themeSelect.value = TermwiseTheme.getPreference();
    themeSelect.addEventListener("change", () => TermwiseTheme.setPreference(themeSelect.value));
  }
}

/* Returns the active student record, whether they were loaded by
   ID or built via the manual-selection path. */
function getActiveStudent() {
  const state = getState();
  if (state.studentId) return findStudentById(state.studentId);
  if (state.manualProfile) return state.manualProfile;
  return null;
}

/* Guard used on profile/recommendations/schedule pages: bounce
   back to index.html if no student has been identified yet. */
function requireStudent() {
  const student = getActiveStudent();
  if (!student) {
    window.location.href = "index.html";
    return null;
  }
  return student;
}
