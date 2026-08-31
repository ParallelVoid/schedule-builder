/* ============================================================
   data.js — All demo data for the Course Selection Helper.
   This is the single source of truth for the demo. Add students,
   courses, sections, or requirements here without touching any
   other file.
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
        courses: ["CS101", "CS201", "CS210", "CS301", "CS350"] },
      { id: "cs-math", label: "Mathematics Foundation", type: "specific",
        courses: ["MATH120", "MATH220"] },
      { id: "cs-elective", label: "Computer Science Electives", type: "choose", count: 2,
        courses: ["CS340", "CS360", "CS410", "CS420"] },
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
        courses: ["ENG101", "MATH120", "PSY101"] }
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
        courses: ["ENG101", "MATH120", "HIST105"] }
    ]
  }
];

/* ----------------------------------------------------------
   Courses — the full catalog. `areas` are used to match a
   student's stated interests during recommendation scoring.
   ---------------------------------------------------------- */
const courses = [
  { code: "CS101", name: "Introduction to Programming", credits: 4, department: "Computer Science",
    description: "Fundamentals of programming using a modern language: variables, control flow, functions, and basic data structures.",
    prerequisites: [], areas: ["programming"] },
  { code: "CS201", name: "Data Structures", credits: 4, department: "Computer Science",
    description: "Lists, stacks, queues, trees, and hash tables, with an emphasis on choosing the right structure for a problem.",
    prerequisites: ["CS101"], areas: ["programming", "algorithms"] },
  { code: "CS210", name: "Discrete Mathematics", credits: 3, department: "Computer Science",
    description: "Logic, proof techniques, set theory, and combinatorics for computer science.",
    prerequisites: ["MATH120"], areas: ["math", "theory"] },
  { code: "CS301", name: "Algorithms", credits: 4, department: "Computer Science",
    description: "Design and analysis of algorithms: sorting, graph algorithms, greedy methods, and dynamic programming.",
    prerequisites: ["CS201", "CS210"], areas: ["algorithms", "theory"] },
  { code: "CS340", name: "Database Systems", credits: 3, department: "Computer Science",
    description: "Relational design, SQL, normalization, and transactions.",
    prerequisites: ["CS201"], areas: ["data", "systems"] },
  { code: "CS350", name: "Software Engineering", credits: 4, department: "Computer Science",
    description: "Team-based software development: requirements, design, testing, and version control.",
    prerequisites: ["CS201"], areas: ["programming", "teamwork"] },
  { code: "CS360", name: "Computer Networks", credits: 3, department: "Computer Science",
    description: "Network architecture, protocols, and the mechanics behind how computers communicate.",
    prerequisites: ["CS201"], areas: ["systems", "networking"] },
  { code: "CS410", name: "Machine Learning", credits: 3, department: "Computer Science",
    description: "Supervised and unsupervised learning, model evaluation, and applied ML workflows.",
    prerequisites: ["CS301", "MATH220"], areas: ["ai", "data"] },
  { code: "CS420", name: "Web Development", credits: 3, department: "Computer Science",
    description: "Building full-stack web applications: front-end interfaces, back-end services, and deployment.",
    prerequisites: ["CS201"], areas: ["programming", "web"] },

  { code: "MATH120", name: "Calculus I", credits: 4, department: "Mathematics",
    description: "Limits, derivatives, and integrals with applications.",
    prerequisites: [], areas: ["math"] },
  { code: "MATH220", name: "Linear Algebra", credits: 3, department: "Mathematics",
    description: "Vectors, matrices, eigenvalues, and linear transformations.",
    prerequisites: ["MATH120"], areas: ["math"] },

  { code: "BUS101", name: "Introduction to Business", credits: 3, department: "Business",
    description: "Survey of business functions: operations, marketing, finance, and management.",
    prerequisites: [], areas: ["business"] },
  { code: "BUS201", name: "Principles of Management", credits: 3, department: "Business",
    description: "Core management theory: planning, organizing, leading, and controlling.",
    prerequisites: ["BUS101"], areas: ["business", "management"] },
  { code: "ACC201", name: "Financial Accounting", credits: 3, department: "Business",
    description: "Reading and preparing financial statements for external stakeholders.",
    prerequisites: [], areas: ["accounting"] },
  { code: "ECON101", name: "Microeconomics", credits: 3, department: "Economics",
    description: "Supply, demand, market structure, and individual decision-making.",
    prerequisites: [], areas: ["economics"] },
  { code: "ECON102", name: "Macroeconomics", credits: 3, department: "Economics",
    description: "National income, inflation, unemployment, and monetary and fiscal policy.",
    prerequisites: ["ECON101"], areas: ["economics"] },
  { code: "BUS310", name: "Marketing Principles", credits: 3, department: "Business",
    description: "Market research, branding, pricing, and promotion strategy.",
    prerequisites: ["BUS101"], areas: ["marketing"] },
  { code: "BUS320", name: "Financial Management", credits: 3, department: "Business",
    description: "Corporate finance fundamentals: valuation, capital budgeting, and risk.",
    prerequisites: ["ACC201"], areas: ["finance"] },
  { code: "BUS330", name: "Organizational Behavior", credits: 3, department: "Business",
    description: "How individuals and groups behave within organizations, and how to lead them.",
    prerequisites: ["BUS201"], areas: ["management", "psychology"] },

  { code: "PSY101", name: "Introduction to Psychology", credits: 3, department: "Psychology",
    description: "Survey of the major subfields of psychology and how the mind and behavior are studied.",
    prerequisites: [], areas: ["psychology"] },
  { code: "PSY201", name: "Developmental Psychology", credits: 3, department: "Psychology",
    description: "Human development across the lifespan, from infancy through late adulthood.",
    prerequisites: ["PSY101"], areas: ["psychology"] },
  { code: "PSY210", name: "Research Methods", credits: 4, department: "Psychology",
    description: "Designing and evaluating psychological studies, including statistics fundamentals.",
    prerequisites: ["PSY101"], areas: ["psychology", "research"] },
  { code: "PSY301", name: "Cognitive Psychology", credits: 3, department: "Psychology",
    description: "Memory, attention, perception, language, and reasoning.",
    prerequisites: ["PSY201", "PSY210"], areas: ["psychology", "cognition"] },
  { code: "PSY320", name: "Abnormal Psychology", credits: 3, department: "Psychology",
    description: "Origins, diagnosis, and treatment of psychological disorders.",
    prerequisites: ["PSY201"], areas: ["psychology", "clinical"] },
  { code: "PSY330", name: "Social Psychology", credits: 3, department: "Psychology",
    description: "How people's thoughts, feelings, and behavior are shaped by others.",
    prerequisites: ["PSY101"], areas: ["psychology", "social"] },
  { code: "PSY340", name: "Psychology of Learning", credits: 3, department: "Psychology",
    description: "How learning happens, from classical conditioning to modern cognitive models.",
    prerequisites: ["PSY201"], areas: ["psychology", "cognition"] },

  { code: "ENG101", name: "College Writing", credits: 3, department: "English",
    description: "Expository and argumentative writing for an academic audience.",
    prerequisites: [], areas: ["writing"] },
  { code: "HIST105", name: "World History", credits: 3, department: "History",
    description: "A survey of major world events and movements from 1500 to the present.",
    prerequisites: [], areas: ["history"] }
];

/* ----------------------------------------------------------
   Sections — where and when a course is actually offered in
   a given term. `seatsAvailable` of 0 means the section is full.
   `format` is "in-person" or "online".
   ---------------------------------------------------------- */
const sections = [
  // ---- Fall 2026 : Computer Science ----
  { id: "F26-CS101-A", courseCode: "CS101", term: "F26", campus: "main", instructor: "Dr. Reyes",
    days: ["Mon", "Wed"], startTime: "09:00", endTime: "10:15", location: "Turing Hall 100",
    format: "in-person", seatsTotal: 60, seatsAvailable: 14 },
  { id: "F26-CS201-A", courseCode: "CS201", term: "F26", campus: "main", instructor: "Dr. Okafor",
    days: ["Tue", "Thu"], startTime: "11:00", endTime: "12:15", location: "Turing Hall 210",
    format: "in-person", seatsTotal: 45, seatsAvailable: 6 },
  { id: "F26-CS210-A", courseCode: "CS210", term: "F26", campus: "main", instructor: "Dr. Patel",
    days: ["Mon", "Wed"], startTime: "13:00", endTime: "14:15", location: "Turing Hall 110",
    format: "in-person", seatsTotal: 50, seatsAvailable: 22 },
  { id: "F26-CS301-A", courseCode: "CS301", term: "F26", campus: "main", instructor: "Dr. Okafor",
    days: ["Tue", "Thu"], startTime: "09:00", endTime: "10:15", location: "Turing Hall 210",
    format: "in-person", seatsTotal: 40, seatsAvailable: 11 },
  { id: "F26-CS340-A", courseCode: "CS340", term: "F26", campus: "main", instructor: "Dr. Singh",
    days: ["Mon", "Wed"], startTime: "15:00", endTime: "16:15", location: "Turing Hall 120",
    format: "in-person", seatsTotal: 40, seatsAvailable: 18 },
  { id: "F26-CS350-A", courseCode: "CS350", term: "F26", campus: "main", instructor: "Dr. Reyes",
    days: ["Mon", "Wed"], startTime: "11:00", endTime: "12:15", location: "Turing Hall 100",
    format: "in-person", seatsTotal: 40, seatsAvailable: 9 },
  { id: "F26-CS350-B", courseCode: "CS350", term: "F26", campus: "online", instructor: "Dr. Reyes",
    days: ["Tue", "Thu"], startTime: "16:00", endTime: "17:15", location: "Online — Live Sessions",
    format: "online", seatsTotal: 35, seatsAvailable: 20 },
  { id: "F26-CS360-A", courseCode: "CS360", term: "F26", campus: "north", instructor: "Dr. Kim",
    days: ["Tue", "Thu"], startTime: "13:00", endTime: "14:15", location: "North Hall 210",
    format: "in-person", seatsTotal: 35, seatsAvailable: 0 },
  { id: "F26-CS410-A", courseCode: "CS410", term: "F26", campus: "main", instructor: "Dr. Singh",
    days: ["Wed"], startTime: "17:00", endTime: "19:45", location: "Turing Hall 305",
    format: "in-person", seatsTotal: 30, seatsAvailable: 12 },
  { id: "F26-CS420-A", courseCode: "CS420", term: "F26", campus: "online", instructor: "Dr. Alvarez",
    days: ["Mon", "Wed"], startTime: "18:00", endTime: "19:15", location: "Online — Live Sessions",
    format: "online", seatsTotal: 40, seatsAvailable: 17 },

  // ---- Fall 2026 : Math ----
  { id: "F26-MATH120-A", courseCode: "MATH120", term: "F26", campus: "main", instructor: "Dr. Ito",
    days: ["Mon", "Wed", "Fri"], startTime: "09:00", endTime: "09:50", location: "Newton Hall 101",
    format: "in-person", seatsTotal: 80, seatsAvailable: 25 },
  { id: "F26-MATH220-A", courseCode: "MATH220", term: "F26", campus: "main", instructor: "Dr. Ito",
    days: ["Tue", "Thu"], startTime: "10:00", endTime: "11:15", location: "Newton Hall 210",
    format: "in-person", seatsTotal: 45, seatsAvailable: 9 },

  // ---- Fall 2026 : Business & Economics ----
  { id: "F26-BUS101-A", courseCode: "BUS101", term: "F26", campus: "main", instructor: "Prof. Whitfield",
    days: ["Mon", "Wed"], startTime: "10:00", endTime: "11:15", location: "Commerce Hall 100",
    format: "in-person", seatsTotal: 70, seatsAvailable: 30 },
  { id: "F26-BUS201-A", courseCode: "BUS201", term: "F26", campus: "main", instructor: "Prof. Delgado",
    days: ["Mon", "Wed"], startTime: "10:00", endTime: "11:15", location: "Commerce Hall 205",
    format: "in-person", seatsTotal: 45, seatsAvailable: 13 },
  { id: "F26-ACC201-A", courseCode: "ACC201", term: "F26", campus: "main", instructor: "Prof. Nakamura",
    days: ["Tue", "Thu"], startTime: "08:30", endTime: "09:45", location: "Commerce Hall 110",
    format: "in-person", seatsTotal: 55, seatsAvailable: 19 },
  { id: "F26-ECON101-A", courseCode: "ECON101", term: "F26", campus: "main", instructor: "Prof. Whitfield",
    days: ["Mon", "Wed"], startTime: "10:00", endTime: "11:15", location: "Commerce Hall 130",
    format: "in-person", seatsTotal: 60, seatsAvailable: 24 },
  { id: "F26-ECON102-A", courseCode: "ECON102", term: "F26", campus: "main", instructor: "Prof. Osei",
    days: ["Tue", "Thu"], startTime: "13:00", endTime: "14:15", location: "Commerce Hall 130",
    format: "in-person", seatsTotal: 60, seatsAvailable: 21 },
  { id: "F26-BUS310-A", courseCode: "BUS310", term: "F26", campus: "main", instructor: "Prof. Delgado",
    days: ["Tue", "Thu"], startTime: "11:00", endTime: "12:15", location: "Commerce Hall 205",
    format: "in-person", seatsTotal: 40, seatsAvailable: 16 },
  { id: "F26-BUS320-A", courseCode: "BUS320", term: "F26", campus: "online", instructor: "Prof. Nakamura",
    days: ["Mon", "Wed"], startTime: "18:00", endTime: "19:15", location: "Online — Live Sessions",
    format: "online", seatsTotal: 40, seatsAvailable: 22 },
  { id: "F26-BUS330-A", courseCode: "BUS330", term: "F26", campus: "main", instructor: "Prof. Osei",
    days: ["Tue", "Thu"], startTime: "09:30", endTime: "10:45", location: "Commerce Hall 220",
    format: "in-person", seatsTotal: 40, seatsAvailable: 8 },

  // ---- Fall 2026 : Psychology ----
  { id: "F26-PSY101-A", courseCode: "PSY101", term: "F26", campus: "north", instructor: "Dr. Bennett",
    days: ["Mon", "Wed"], startTime: "09:00", endTime: "10:15", location: "North Hall 101",
    format: "in-person", seatsTotal: 65, seatsAvailable: 20 },
  { id: "F26-PSY201-A", courseCode: "PSY201", term: "F26", campus: "north", instructor: "Dr. Ferreira",
    days: ["Tue", "Thu"], startTime: "09:30", endTime: "10:45", location: "North Hall 115",
    format: "in-person", seatsTotal: 50, seatsAvailable: 14 },
  { id: "F26-PSY210-A", courseCode: "PSY210", term: "F26", campus: "north", instructor: "Dr. Bennett",
    days: ["Mon", "Wed"], startTime: "11:00", endTime: "12:15", location: "North Hall 120",
    format: "in-person", seatsTotal: 40, seatsAvailable: 5 },
  { id: "F26-PSY301-A", courseCode: "PSY301", term: "F26", campus: "north", instructor: "Dr. Ferreira",
    days: ["Mon", "Wed"], startTime: "13:00", endTime: "14:15", location: "North Hall 120",
    format: "in-person", seatsTotal: 35, seatsAvailable: 10 },
  { id: "F26-PSY320-A", courseCode: "PSY320", term: "F26", campus: "north", instructor: "Dr. Ahmadi",
    days: ["Tue", "Thu"], startTime: "13:00", endTime: "14:15", location: "North Hall 130",
    format: "in-person", seatsTotal: 35, seatsAvailable: 12 },
  { id: "F26-PSY330-A", courseCode: "PSY330", term: "F26", campus: "online", instructor: "Dr. Ahmadi",
    days: ["Tue", "Thu"], startTime: "17:00", endTime: "18:15", location: "Online — Live Sessions",
    format: "online", seatsTotal: 45, seatsAvailable: 26 },
  { id: "F26-PSY340-A", courseCode: "PSY340", term: "F26", campus: "north", instructor: "Dr. Bennett",
    days: ["Mon", "Wed"], startTime: "14:30", endTime: "15:45", location: "North Hall 118",
    format: "in-person", seatsTotal: 35, seatsAvailable: 15 },

  // ---- Fall 2026 : General Education ----
  { id: "F26-ENG101-A", courseCode: "ENG101", term: "F26", campus: "main", instructor: "Prof. Marsh",
    days: ["Tue", "Thu"], startTime: "09:30", endTime: "10:45", location: "Humanities 140",
    format: "in-person", seatsTotal: 30, seatsAvailable: 4 },
  { id: "F26-HIST105-A", courseCode: "HIST105", term: "F26", campus: "online", instructor: "Prof. Caldwell",
    days: ["Mon"], startTime: "16:00", endTime: "18:45", location: "Online — Live Sessions",
    format: "online", seatsTotal: 50, seatsAvailable: 31 },

  // ---- Spring 2027 : a lighter slate, so some courses are "not offered this term" ----
  { id: "S27-CS101-A", courseCode: "CS101", term: "S27", campus: "main", instructor: "Dr. Reyes",
    days: ["Mon", "Wed"], startTime: "09:00", endTime: "10:15", location: "Turing Hall 100",
    format: "in-person", seatsTotal: 60, seatsAvailable: 40 },
  { id: "S27-CS201-A", courseCode: "CS201", term: "S27", campus: "main", instructor: "Dr. Okafor",
    days: ["Tue", "Thu"], startTime: "11:00", endTime: "12:15", location: "Turing Hall 210",
    format: "in-person", seatsTotal: 45, seatsAvailable: 28 },
  { id: "S27-CS410-A", courseCode: "CS410", term: "S27", campus: "main", instructor: "Dr. Singh",
    days: ["Wed"], startTime: "17:00", endTime: "19:45", location: "Turing Hall 305",
    format: "in-person", seatsTotal: 30, seatsAvailable: 22 },
  { id: "S27-MATH220-A", courseCode: "MATH220", term: "S27", campus: "main", instructor: "Dr. Ito",
    days: ["Tue", "Thu"], startTime: "10:00", endTime: "11:15", location: "Newton Hall 210",
    format: "in-person", seatsTotal: 45, seatsAvailable: 30 },
  { id: "S27-PSY330-A", courseCode: "PSY330", term: "S27", campus: "online", instructor: "Dr. Ahmadi",
    days: ["Tue", "Thu"], startTime: "17:00", endTime: "18:15", location: "Online — Live Sessions",
    format: "online", seatsTotal: 45, seatsAvailable: 33 }
];

/* ----------------------------------------------------------
   Students — four scenarios:
   S1001 Alex Chen    — on track, straightforward recommendations
   S1002 Priya Patel   — will hit missing-prerequisite warnings
   S1003 Jordan Lee    — will hit schedule-conflict warnings
   S1004 Morgan Diaz   — behind on specific required courses
   ---------------------------------------------------------- */
const students = [
  {
    id: "S1001",
    name: "Alex Chen",
    programId: "cs",
    year: "Junior",
    campus: "main",
    completedCourses: [
      { code: "CS101", grade: "A" },
      { code: "CS201", grade: "B+" },
      { code: "CS210", grade: "B" },
      { code: "MATH120", grade: "A-" },
      { code: "MATH220", grade: "B" },
      { code: "ENG101", grade: "B+" }
    ]
  },
  {
    id: "S1002",
    name: "Priya Patel",
    programId: "cs",
    year: "Sophomore",
    campus: "main",
    completedCourses: [
      { code: "CS101", grade: "B" },
      { code: "MATH120", grade: "B+" },
      { code: "ENG101", grade: "A" }
    ]
  },
  {
    id: "S1003",
    name: "Jordan Lee",
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
    name: "Morgan Diaz",
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
