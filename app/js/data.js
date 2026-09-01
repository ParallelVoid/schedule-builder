/* ============================================================
   data.js — Termwise planning scaffolding and demo students.
   The course catalog and offerings are in course-data.js. Add
   programs, requirements, terms, and students here.
   ============================================================ */

/* ---------- Campuses ---------- */
const campuses = [
  { id: "main",   name: "Main Campus" },
  { id: "north",  name: "North Campus" },
  { id: "online", name: "Online" }
];

/* ---------- Terms ---------- */
const terms = [
  { id: "F26", name: "Fall 2026",   registrationOpen: true },
  { id: "S27", name: "Spring 2027", registrationOpen: true }
];

/* ---------- Programs ---------- */
const programs = [
  { id: "cs",  name: "Computer Science",     degree: "B.S.", totalCreditsRequired: 42 },
  { id: "bus", name: "Business Administration", degree: "B.A.", totalCreditsRequired: 39 },
  { id: "psy", name: "Psychology",           degree: "B.A.", totalCreditsRequired: 36 }
];

/* ----------------------------------------------------------
   Requirements — organized by program into categories.
   Each category is either:
     type: "specific"  -> every course in `courses` is required
     type: "choose"    -> student must complete `count` courses
                           from the `courses` list
   ---------------------------------------------------------- */
const requirements = [
  {
    programId: "cs",
    categories: [
      { id: "cs-core", label: "Core Requirements", type: "specific",
        courses: ["CPSC110", "CPSC221", "CPSC121", "CPSC320", "CPSC310"] },
      { id: "cs-math", label: "Mathematics Foundation", type: "specific",
        courses: ["MATH100", "MATH221"] },
      { id: "cs-elective", label: "Computer Science Electives", type: "choose", count: 2,
        courses: ["CPSC304", "CPSC317", "CPSC340", "CPSC455"] },
      { id: "cs-genEd", label: "General Education", type: "choose", count: 1,
        courses: ["ENG101", "HIST105", "PSY101"] }
    ]
  },
  {
    programId: "bus",
    categories: [
      { id: "bus-core", label: "Core Requirements", type: "specific",
        courses: ["BUS101", "BUS201", "ACC201", "ECON101", "ECON102"] },
      { id: "bus-elective", label: "Business Electives", type: "choose", count: 2,
        courses: ["BUS310", "BUS320", "BUS330"] },
      { id: "bus-genEd", label: "General Education", type: "choose", count: 1,
        courses: ["ENG101", "MATH100", "PSY101"] }
    ]
  },
  {
    programId: "psy",
    categories: [
      { id: "psy-core", label: "Core Requirements", type: "specific",
        courses: ["PSY101", "PSY201", "PSY210", "PSY301"] },
      { id: "psy-elective", label: "Psychology Electives", type: "choose", count: 2,
        courses: ["PSY320", "PSY330", "PSY340"] },
      { id: "psy-genEd", label: "General Education", type: "choose", count: 1,
        courses: ["ENG101", "MATH100", "HIST105"] }
    ]
  }
];

/* ----------------------------------------------------------
   Courses and sections now live in course-data.js. Load that
   file before data.js so the large catalog stays independent
   from programs, requirements, terms, and sample students.
   ---------------------------------------------------------- */

/* ----------------------------------------------------------
   Students — four scenarios:
   S1001 Peter Parker	— on track, straightforward recommendations
   S1002 Nathan Drake	— will hit missing-prerequisite warnings
   S1003 Philip Fry		— will hit schedule-conflict warnings
   S1004 Han Solo   	— behind on specific required courses
   ---------------------------------------------------------- */
const students = [
  {
    id: "S1001",
    name: "Peter Parker",
    programId: "cs",
    year: "Junior",
    campus: "main",
    completedCourses: [
      { code: "CPSC110", grade: "A" },
      { code: "CPSC221", grade: "B+" },
      { code: "CPSC121", grade: "B" },
      { code: "MATH100", grade: "A-" },
      { code: "MATH221", grade: "B" },
      { code: "ENG101", grade: "B+" }
    ]
  },
  {
    id: "S1002",
    name: "Nathan Drake",
    programId: "cs",
    year: "Sophomore",
    campus: "main",
    completedCourses: [
      { code: "CPSC110", grade: "B" },
      { code: "MATH100", grade: "B+" },
      { code: "ENG101", grade: "A" }
    ]
  },
  {
    id: "S1003",
    name: "Philip Fry",
    programId: "bus",
    year: "Sophomore",
    campus: "main",
    completedCourses: [
      { code: "BUS101", grade: "B" },
      { code: "ACC201", grade: "B+" },
      { code: "ENG101", grade: "B" }
    ]
  },
  {
    id: "S1004",
    name: "Han Solo",
    programId: "psy",
    year: "Senior",
    campus: "north",
    completedCourses: [
      { code: "PSY101", grade: "A" },
      { code: "PSY201", grade: "B" },
      { code: "PSY210", grade: "B+" },
      { code: "ENG101", grade: "B" }
    ]
  }
];
