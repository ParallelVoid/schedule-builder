/* ============================================================
   course-data.js — Browser-ready undergraduate catalog for Termwise.

   Official course fields come from ../../courses.json. The
   Vancouver campus suffix is removed. Because the source contains
   no section data, demo-only offerings inherit missing fields
   from the most similar legacy data.js course. Provenance is kept
   in templateCourseCode/templateSectionId and synthetic.
   ============================================================ */

const courseCatalogMetadata = {
  "generatedFrom": "courses.json",
  "vancouverCampusSuffixRemoved": true,
  "scrapedCourseCount": 256,
  "retainedDemoCourseCount": 17,
  "syntheticSectionCount": 397,
  "retainedDemoSectionCount": 18,
  "note": "Synthetic offerings inherit instructor, meeting, location, format and seat data from the most similar original data.js course; they are not live registration data."
};

const courses = [
  {
    "code": "CPSC100",
    "name": "Computational Thinking",
    "credits": 3,
    "creditsText": "3",
    "department": "Computer Science",
    "description": "Meaning and impact of computational thinking. Solving problems using computational thinking, testing, debugging. How computers work. No prior computing experience required. Not for students with existing credit for or exemption from CPSC 107, CPSC 110 or APSC 160.",
    "prerequisiteText": "",
    "corequisiteText": "",
    "prerequisites": [],
    "areas": [
      "computer science",
      "programming"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS101"
  },
  {
    "code": "CPSC103",
    "name": "Introduction to Systematic Program Design",
    "credits": 3,
    "creditsText": "3",
    "department": "Computer Science",
    "description": "Computation as a tool for systematic problem solving in non-computer-science disciplines. Introductory programming skills. Not for credit for students who have credit for, or exemption from, or are concurrently taking CPSC 110 or APSC 160. No programming experience expected.",
    "prerequisiteText": "",
    "corequisiteText": "",
    "prerequisites": [],
    "areas": [
      "computer science",
      "programming"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS101"
  },
  {
    "code": "CPSC107",
    "name": "Systematic Program Design",
    "credits": 3,
    "creditsText": "3",
    "department": "Computer Science",
    "description": "Fundamental computation and program structures. Continuing systematic program design from CPSC 103.",
    "prerequisiteText": "CPSC 103.",
    "corequisiteText": "",
    "prerequisites": [],
    "areas": [
      "computer science",
      "programming"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS101"
  },
  {
    "code": "CPSC110",
    "name": "Computation, Programs, and Programming",
    "credits": 4,
    "creditsText": "4",
    "department": "Computer Science",
    "description": "Fundamental program and computation structures. Introductory programming skills. Computation as a tool for information processing, simulation and modelling, and interacting with the world.",
    "prerequisiteText": "",
    "corequisiteText": "",
    "prerequisites": [],
    "areas": [
      "computer science",
      "programming"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS101"
  },
  {
    "code": "CPSC121",
    "name": "Models of Computation",
    "credits": 4,
    "creditsText": "4",
    "department": "Computer Science",
    "description": "Physical and mathematical structures of computation. Boolean algebra and combinations logic circuits; proof techniques; functions and sequential circuits; sets and relations; finite state machines; sequential instruction execution.",
    "prerequisiteText": "Principles of Mathematics 12 or Pre-calculus 12",
    "corequisiteText": "",
    "prerequisites": [
      "MATH100"
    ],
    "areas": [
      "computer science",
      "math",
      "theory"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS210"
  },
  {
    "code": "CPSC203",
    "name": "Programming, Problem Solving, and Algorithms",
    "credits": 3,
    "creditsText": "3",
    "department": "Computer Science",
    "description": "Analysis of increasingly complex algorithmic problems, using a modern programming language and a variety of approaches. Problem decomposition and abstraction guide explorations of topics from applied algorithms, for example Voronoi Diagrams, Markov Chains, Bin Packing, and Graph Search. Not for students with credit for, or currently enrolled in, CPSC 210 or CPEN 221.",
    "prerequisiteText": "One of CPSC 103, CPSC 110, APSC 160, EOSC 211, MATH 210, PHYS 210, COMM 337.",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC221",
      "CPSC121"
    ],
    "areas": [
      "computer science",
      "algorithms",
      "theory"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS301"
  },
  {
    "code": "CPSC210",
    "name": "Software Construction",
    "credits": 4,
    "creditsText": "4",
    "department": "Computer Science",
    "description": "Design, development, and analysis of robust software components. Topics such as software design, computational models, data structures, debugging, and testing.",
    "prerequisiteText": "One of CPSC 107, CPSC 110.",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC221"
    ],
    "areas": [
      "computer science",
      "programming",
      "teamwork"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS350"
  },
  {
    "code": "CPSC213",
    "name": "Introduction to Computer Systems",
    "credits": 4,
    "creditsText": "4",
    "department": "Computer Science",
    "description": "Software architecture, operating systems, and I/O architectures. Relationships between application software, operating systems, and computing hardware; critical sections, deadlock avoidance, and performance; principles and operation of disks and networks.",
    "prerequisiteText": "All of CPSC 121, CPSC 210.",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC221"
    ],
    "areas": [
      "computer science",
      "data",
      "systems"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS340"
  },
  {
    "code": "CPSC221",
    "name": "Basic Algorithms and Data Structures",
    "credits": 4,
    "creditsText": "4",
    "department": "Computer Science",
    "description": "Design and analysis of basic algorithms and data structures; algorithm analysis methods, searching and sorting algorithms, basic data structures, graphs and concurrency.",
    "prerequisiteText": "One of CPSC 210, CPEN 221 and either (a) one of CPSC 121, MATH 220, MATH_O 220 or (b) a score of 68% or higher in MATH 226.",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC110"
    ],
    "areas": [
      "computer science",
      "programming",
      "algorithms"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS201"
  },
  {
    "code": "CPSC259",
    "name": "Data Structures and Algorithms for Electrical Engineers",
    "credits": 4,
    "creditsText": "4",
    "department": "Computer Science",
    "description": "Advanced procedural programming. Fundamental algorithms for sorting and searching. Data structures including lists, trees, and hash tables. Introduction to scripting languages and file input/output.",
    "prerequisiteText": "APSC 160.",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC110"
    ],
    "areas": [
      "computer science",
      "programming",
      "algorithms"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS201"
  },
  {
    "code": "CPSC302",
    "name": "Numerical Computation for Algebraic Problems",
    "credits": 3,
    "creditsText": "3",
    "department": "Computer Science",
    "description": "Numerical techniques for basic mathematical processes involving no discretization, and their analysis. Solution of linear systems, including analysis of round-off errors; norms and condition number; introduction to iterative techniques in linear algebra, including eigenvalue problems; solution to nonlinear equations.",
    "prerequisiteText": "One of CPSC 103, CPSC 110, CPEN 221, EOSC 211, PHYS 210 and one of MATH 101, MATH 103, MATH 105, MATH 121, SCIE 001 and one of MATH 152, MATH 221, MATH 223.",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC221"
    ],
    "areas": [
      "computer science",
      "data",
      "systems"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS340"
  },
  {
    "code": "CPSC303",
    "name": "Numerical Approximation and Discretization",
    "credits": 3,
    "creditsText": "3",
    "department": "Computer Science",
    "description": "Numerical techniques for basic mathematical processes involving discretization, and their analysis. Interpolation and approximation, including splines and least squares data fitting; numerical differentiation and integration; introduction to numerical initial value ordinary differential equations.",
    "prerequisiteText": "One of CPSC 103, CPSC 110, CPEN 221, EOSC 211, PHYS 210 and one of MATH 101, MATH 103, MATH 105, MATH 121, SCIE 001 and one of MATH 152, MATH 221, MATH 223.",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC221",
      "CPSC121"
    ],
    "areas": [
      "computer science",
      "algorithms",
      "theory"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS301"
  },
  {
    "code": "CPSC304",
    "name": "Introduction to Relational Databases",
    "credits": 3,
    "creditsText": "3",
    "department": "Computer Science",
    "description": "Overview of database systems, ER models, logical database design and normalization, formal relational query languages, SQL and other commercial languages, data warehouses, special topics.",
    "prerequisiteText": "CPSC 221 or DSCI 221.",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC221"
    ],
    "areas": [
      "computer science",
      "data",
      "systems"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS340"
  },
  {
    "code": "CPSC310",
    "name": "Introduction to Software Engineering",
    "credits": 4,
    "creditsText": "4",
    "department": "Computer Science",
    "description": "Specification, design, validation, evolution and construction of modern software systems, within the context of socially and professionally relevant domains such as ethics, intellectual property, and information security.",
    "prerequisiteText": "All of CPSC 213, CPSC 221.",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC221"
    ],
    "areas": [
      "computer science",
      "programming",
      "teamwork"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS350"
  },
  {
    "code": "CPSC311",
    "name": "Definition of Programming Languages",
    "credits": 3,
    "creditsText": "3",
    "department": "Computer Science",
    "description": "Comparative study of advanced programming language features. Statement types, data types, variable binding, parameter passing mechanisms. Methods for syntactic and semantic description of programming languages.",
    "prerequisiteText": "CPSC 210.",
    "corequisiteText": "",
    "prerequisites": [],
    "areas": [
      "computer science",
      "programming"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS101"
  },
  {
    "code": "CPSC312",
    "name": "Functional and Logic Programming",
    "credits": 3,
    "creditsText": "3",
    "department": "Computer Science",
    "description": "Principles of symbolic computing, using languages based upon first-order logic and the lambda calculus. Algorithms for implementing such languages. Applications to artificial intelligence and knowledge representation.",
    "prerequisiteText": "One of CPSC 210, CPEN 221.",
    "corequisiteText": "",
    "prerequisites": [],
    "areas": [
      "computer science",
      "programming"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS101"
  },
  {
    "code": "CPSC313",
    "name": "Computer Hardware and Operating Systems",
    "credits": 3,
    "creditsText": "3",
    "department": "Computer Science",
    "description": "Instruction sets, pipelining, code optimization, caching, virtual memory management, dynamically linked libraries, exception processing, execution time of programs.",
    "prerequisiteText": "CPSC 213 and either CPSC 221 or DSCI 221.",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC221"
    ],
    "areas": [
      "computer science",
      "systems",
      "networking"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS360"
  },
  {
    "code": "CPSC314",
    "name": "Computer Graphics",
    "credits": 3,
    "creditsText": "3",
    "department": "Computer Science",
    "description": "Human vision and colour; geometric transformations; algorithms for 2-D and 3-D graphics; hardware and system architectures; shading and lighting; animation.",
    "prerequisiteText": "CPSC 221 and one of MATH 200, MATH 217, MATH 226, MATH 253, MATH_O 200 and one of MATH 152, MATH 221, MATH 223, MATH_O 222.",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC221"
    ],
    "areas": [
      "computer science",
      "systems",
      "networking"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS360"
  },
  {
    "code": "CPSC317",
    "name": "Introduction to Computer Networking",
    "credits": 3,
    "creditsText": "3",
    "department": "Computer Science",
    "description": "Computer networking, basic communication protocols, network infrastructure and routing. Common application-level protocols and principles associated with developing distributed applications.",
    "prerequisiteText": "CPSC 213 and either CPSC 221 or DSCI 221.",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC221"
    ],
    "areas": [
      "computer science",
      "systems",
      "networking"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS360"
  },
  {
    "code": "CPSC319",
    "name": "Software Engineering Project",
    "credits": 4,
    "creditsText": "4",
    "department": "Computer Science",
    "description": "The design, implementation, and test of a large software system, using a team approach.",
    "prerequisiteText": "CPSC 310.",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC221"
    ],
    "areas": [
      "computer science",
      "programming",
      "teamwork"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS350"
  },
  {
    "code": "CPSC320",
    "name": "Intermediate Algorithm Design and Analysis",
    "credits": 3,
    "creditsText": "3",
    "department": "Computer Science",
    "description": "Systematic study of basic concepts and techniques in the design and analysis of algorithms, illustrated from various problem areas. Topics include models of computation; choice of data structures; and graph-theoretic, algebraic, and text processing algorithms.",
    "prerequisiteText": "All of (a) CPSC 221 or DSCI 221, (b) at least 3 credits from MATH or STAT at 200 level or above or MATH_O 200, MATH_O 220, MATH_O 222, MATH_O 225, MATH_O 307, STAT_O 121, STAT_O 203, STAT_O 205, STAT_O 230, STAT_O 303 or any course on the STAT 200 credit exclusion: https://vancouver.calendar.ubc.ca/faculties-colleges-and-schools/facult… or HES_O 340, HMKN_O 205, POLI_O 400, PSYO_O 271, STAT_O 124.",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC221",
      "CPSC121"
    ],
    "areas": [
      "computer science",
      "algorithms",
      "theory"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS301"
  },
  {
    "code": "CPSC322",
    "name": "Introduction to Artificial Intelligence",
    "credits": 3,
    "creditsText": "3",
    "department": "Computer Science",
    "description": "Problem-solving and planning. State/action models and graph searching. Natural language understanding. Computational vision. Applications of artificial intelligence.",
    "prerequisiteText": "Either CPSC 221 or DSCI 221. Equivalency: AI 322.",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC221",
      "CPSC121"
    ],
    "areas": [
      "computer science",
      "algorithms",
      "theory"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS301"
  },
  {
    "code": "CPSC330",
    "name": "Applied Machine Learning",
    "credits": 3,
    "creditsText": "3",
    "department": "Computer Science",
    "description": "Application of machine learning tools, with an emphasis on solving practical problems. Data cleaning, feature extraction, supervised and unsupervised machine learning, reproducible workflows, and communicating results.",
    "prerequisiteText": "Either (a) one of CPSC 203, CPSC 210, CPEN 221, DSCI 221 or (b) MATH 210 and one of CPSC 107, CPSC 110.",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC320",
      "MATH221"
    ],
    "areas": [
      "computer science",
      "ai",
      "data"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS410"
  },
  {
    "code": "CPSC337",
    "name": "Introduction to Computer Security",
    "credits": 3,
    "creditsText": "3",
    "department": "Computer Science",
    "description": "Fundamentals of computer security and privacy. Cryptography, network security, and application security. Security assessments, problem diagnosis, defensive strategies. Impacts and outcomes of security design decisions.",
    "prerequisiteText": "CPSC 213.",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC221"
    ],
    "areas": [
      "computer science",
      "systems",
      "networking"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS360"
  },
  {
    "code": "CPSC340",
    "name": "Machine Learning and Data Mining",
    "credits": 3,
    "creditsText": "3",
    "department": "Computer Science",
    "description": "Models of algorithms for dimensionality reduction, nonlinear regression, classification, clustering and unsupervised learning; applications to computer graphics, computer games, bio-informatics, information retrieval, e-commerce, databases, computer vision and artificial intelligence.",
    "prerequisiteText": "All of (a) one of CPSC 221, DSCI 221 (b) one of MATH 152, MATH 221, MATH 223, MATH_O 222 (c) one of MATH 200, MATH 217, MATH 226, MATH 253, MATH 254, MATH_O 200 (d) one of STAT 241, STAT 251, ECON 325, ECON 327, MATH 302, STAT 302, MATH 318, STAT_O 302.",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC320",
      "MATH221"
    ],
    "areas": [
      "computer science",
      "ai",
      "data"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS410"
  },
  {
    "code": "CPSC344",
    "name": "Introduction to Human Computer Interaction Methods",
    "credits": 3,
    "creditsText": "3",
    "department": "Computer Science",
    "description": "Basic tools and techniques, teaching a systematic approach to interface design, task analysis, analytic and empirical evaluation methods.",
    "prerequisiteText": "One of CPSC 210, CPEN 221.",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC221"
    ],
    "areas": [
      "computer science",
      "systems",
      "networking"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS360"
  },
  {
    "code": "CPSC349",
    "name": "Honours Research Seminar",
    "credits": 0,
    "creditsText": "0",
    "department": "Computer Science",
    "description": "Students will attend a series of research seminars presented by faculty members, produce a thesis proposal, and choose their honours thesis supervisor. Available to Honours students. Majors students with satisfactory standing may also be permitted to enrol.",
    "prerequisiteText": "",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC221",
      "CPSC121"
    ],
    "areas": [
      "computer science",
      "algorithms",
      "theory"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS301"
  },
  {
    "code": "CPSC368",
    "name": "Databases in Data Science",
    "credits": 3,
    "creditsText": "3",
    "department": "Computer Science",
    "description": "Overview of relational and non-relational database systems, role and usage of a database when querying data, data modelling, query languages, and query optimization.",
    "prerequisiteText": "One of CPSC 203, CPSC 210, CPEN 221, DSCI 221.",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC221"
    ],
    "areas": [
      "computer science",
      "data",
      "systems"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS340"
  },
  {
    "code": "CPSC402",
    "name": "Numerical Linear Algebra",
    "credits": 3,
    "creditsText": "3",
    "department": "Computer Science",
    "description": "Investigation of the practical techniques of computational linear algebra. Orthogonal transformations and their application to the solution of linear equations, the eigenproblem, and linear least squares. Complete solution of the symmetric eigenproblem, including bisection and the QR method. Refinements of these techniques for sparse matrices.",
    "prerequisiteText": "One of CPSC 302, CPSC 303, MATH 307.",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC221"
    ],
    "areas": [
      "computer science",
      "programming",
      "web"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS420"
  },
  {
    "code": "CPSC404",
    "name": "Advanced Relational Databases",
    "credits": 3,
    "creditsText": "3",
    "department": "Computer Science",
    "description": "Physical database design, indexing, external mergesort, relational query processing and optimization, transaction processing, concurrency control, crash recovery, special topics.",
    "prerequisiteText": "CPSC 304 and one of CPSC 213, CPSC 261, CPEN 212.",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC221"
    ],
    "areas": [
      "computer science",
      "data",
      "systems"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS340"
  },
  {
    "code": "CPSC406",
    "name": "Computational Optimization",
    "credits": 3,
    "creditsText": "3",
    "department": "Computer Science",
    "description": "Formulation and analysis of algorithms for continuous and discrete optimization problems; linear, nonlinear, network, dynamic, and integer optimization; large-scale problems; software packages and their implementation; duality theory and sensitivity.",
    "prerequisiteText": "One of CPSC 302, CPSC 303, MATH 307.",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC221",
      "CPSC121"
    ],
    "areas": [
      "computer science",
      "algorithms",
      "theory"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS301"
  },
  {
    "code": "CPSC410",
    "name": "Advanced Software Engineering",
    "credits": 3,
    "creditsText": "3",
    "department": "Computer Science",
    "description": "Specification, design, construction and validation of multi-version software systems.",
    "prerequisiteText": "Either (a) CPSC 310 or (b) all of CPEN 321, CPEN 331.",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC221"
    ],
    "areas": [
      "computer science",
      "programming",
      "teamwork"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS350"
  },
  {
    "code": "CPSC411",
    "name": "Introduction to Compiler Construction",
    "credits": 3,
    "creditsText": "3",
    "department": "Computer Science",
    "description": "A practical introduction to lexical analysis, syntactic analysis, type-checking, code generation and optimization. This will be used to design and implement a compiler for a small language.",
    "prerequisiteText": "All of CPSC 213, CPSC 221, CPSC 311.",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC320",
      "MATH221"
    ],
    "areas": [
      "computer science",
      "ai",
      "data"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS410"
  },
  {
    "code": "CPSC415",
    "name": "Operating Systems Design and Implementation",
    "credits": 4,
    "creditsText": "4",
    "department": "Computer Science",
    "description": "Team-based design and implementation of a complete operating system, with emphasis on applicability to modern hardware and the practical implementation of operating systems concepts.",
    "prerequisiteText": "All of the following with a minimum grade of 76% in each of: (a) CPSC 310 or CPEN 321, (b) CPSC 313 or CPEN 331, and (c) CPSC 317 or ELEC 331.",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC221"
    ],
    "areas": [
      "computer science",
      "data",
      "systems"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS340"
  },
  {
    "code": "CPSC416",
    "name": "Distributed Systems",
    "credits": 3,
    "creditsText": "3",
    "department": "Computer Science",
    "description": "Concepts and design of distributed systems. Communication architecture and models for interprocess communication. Process migration, naming, distributed file systems, fault tolerance, and concurrency control.",
    "prerequisiteText": "One of CPSC 313, CPEN 331 and one of CPSC 317, ELEC 331.",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC221"
    ],
    "areas": [
      "computer science",
      "data",
      "systems"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS340"
  },
  {
    "code": "CPSC417",
    "name": "Computer Networking",
    "credits": 3,
    "creditsText": "3",
    "department": "Computer Science",
    "description": "Network protocols and architecture including internetworking, the Internet, layered communication protocols, routing, flow and congestion control, network performance, wired and wireless data communication.",
    "prerequisiteText": "All of CPSC 313, CPSC 317.",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC221"
    ],
    "areas": [
      "computer science",
      "systems",
      "networking"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS360"
  },
  {
    "code": "CPSC418",
    "name": "Parallel Computation",
    "credits": 3,
    "creditsText": "3",
    "department": "Computer Science",
    "description": "Algorithms, architectures, and programming paradigms for parallel computation. Shared memory, message passing, and data parallel architectures and programming models. Parallel algorithms including reduce, scan, and sorting networks. Reasoning about the correctness of parallel programs. Performance analysis and measurement for parallel programs.",
    "prerequisiteText": "CPSC 320 and one of CPSC 261, CPSC 313, CPEN 212, CPEN 411.",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC221",
      "CPSC121"
    ],
    "areas": [
      "computer science",
      "algorithms",
      "theory"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS301"
  },
  {
    "code": "CPSC420",
    "name": "Advanced Algorithms Design and Analysis",
    "credits": 3,
    "creditsText": "3",
    "department": "Computer Science",
    "description": "The study of advanced topics in the design and analysis of algorithms and associated data structures. Topics include algorithms for graph-theoretic; algebraic and geometric problems; algorithms on nonsequential models; complexity issues; approximation algorithms.",
    "prerequisiteText": "[CPSC320]",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC221",
      "CPSC121"
    ],
    "areas": [
      "computer science",
      "algorithms",
      "theory"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS301"
  },
  {
    "code": "CPSC421",
    "name": "Introduction to Theory of Computing",
    "credits": 3,
    "creditsText": "3",
    "department": "Computer Science",
    "description": "Characterizations of computability (using machines, languages and functions). Universality, equivalence and Church's thesis. Unsolvable problems. Restricted models of computation. Finite automata, grammars and formal languages.",
    "prerequisiteText": "One of CPSC 320 or MATH 220 or MATH 226.",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC320",
      "MATH221"
    ],
    "areas": [
      "computer science",
      "ai",
      "data"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS410"
  },
  {
    "code": "CPSC423",
    "name": "Natural Language Processing",
    "credits": 3,
    "creditsText": "3",
    "department": "Computer Science",
    "description": "Fundamentals of data-driven natural language processing, including applications (machine translation, summarization, question answering), text representations (word embeddings, language models), and statistical and neural-network methods.",
    "prerequisiteText": "Either CPSC 340 or both (a) one of AI 240, CPSC 330 and (b) one of STAT 200, STAT 251, ECON 325, ECON 327, MATH 302, STAT 302, MATH 318.",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC320",
      "MATH221"
    ],
    "areas": [
      "computer science",
      "ai",
      "data"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS410"
  },
  {
    "code": "CPSC424",
    "name": "Geometric Modelling",
    "credits": 3,
    "creditsText": "3",
    "department": "Computer Science",
    "description": "Digital representation of curves and surfaces, including splines, subdivision surfaces and meshes. Principles, algorithms and mathematical foundations for geometry representation in computer graphics, computer vision, fabrication, CAD/CAM, and medical imaging. Algorithms for acquisition, creation, representation, and processing of 3D shapes.",
    "prerequisiteText": "One of MATH 152, MATH 221, MATH 223 and one of MATH 200, MATH 217, MATH 226, MATH 253.",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC221",
      "CPSC121"
    ],
    "areas": [
      "computer science",
      "algorithms",
      "theory"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS301"
  },
  {
    "code": "CPSC425",
    "name": "Computer Vision",
    "credits": 3,
    "creditsText": "3",
    "department": "Computer Science",
    "description": "Introduction to the processing and interpretation of images. Image sensing, sampling, and filtering. Algorithms for colour analysis, texture description, stereo imaging, motion interpretation, 3D shape recovery, and recognition.",
    "prerequisiteText": "CPSC 221 and one of MATH 200, MATH 217, MATH 226, MATH 253, MATH 254 and one of MATH 111, MATH 131, MATH 152, MATH 221, MATH 223.",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC221"
    ],
    "areas": [
      "computer science",
      "systems",
      "networking"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS360"
  },
  {
    "code": "CPSC426",
    "name": "Computer Animation",
    "credits": 3,
    "creditsText": "3",
    "department": "Computer Science",
    "description": "Motion in computer graphics for characters and their environments. Keyframing, inverse kinematics, particle systems, rigid body dynamics, contact and collision, controller-based active motion, motion capture.",
    "prerequisiteText": "CPSC 314.",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC221"
    ],
    "areas": [
      "computer science",
      "systems",
      "networking"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS360"
  },
  {
    "code": "CPSC427",
    "name": "Video Game Programming",
    "credits": 3,
    "creditsText": "3",
    "department": "Computer Science",
    "description": "Video game programming techniques and technologies, including rendering, animation, interaction, game AI, real-time software development for games; start-to-finish simple video-game design and implementation. [1.5–1.5-1]",
    "prerequisiteText": "CPSC 314 and one of MATH 200, MATH 217, MATH 226, MATH 253 and one of MATH 152, MATH 221, MATH 223.",
    "corequisiteText": "",
    "prerequisites": [],
    "areas": [
      "computer science",
      "programming"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS101"
  },
  {
    "code": "CPSC430",
    "name": "Computers and Society",
    "credits": 3,
    "creditsText": "3",
    "department": "Computer Science",
    "description": "Impact of computer technology on society; historical perspectives; social and economic consequences of large-scale information processing systems and automatic control; legal and ethical problems in computer applications. Computers and the individual: machine versus human capabilities, fact and fancy; problematic interface between man and machine.",
    "prerequisiteText": "3 credits of Computer Science and at least third-year standing.",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC221"
    ],
    "areas": [
      "computer science",
      "systems",
      "networking"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS360"
  },
  {
    "code": "CPSC436",
    "name": "Topics in Computer Science",
    "credits": 1,
    "creditsText": "1-6",
    "department": "Computer Science",
    "description": "Selected topics in a specific area within Computer Science. May be taken more than once for credit with permission of the department.",
    "prerequisiteText": "Third-year standing in a Computer Science or Computer Engineering specialization, and permission of the department.",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC221"
    ],
    "areas": [
      "computer science",
      "systems",
      "networking"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS360"
  },
  {
    "code": "CPSC440",
    "name": "Advanced Machine Learning",
    "credits": 3,
    "creditsText": "3",
    "department": "Computer Science",
    "description": "Advanced machine learning techniques focusing on probabilistic models. Deep learning and differentiable programming, exponential families and Bayesian inference, probabilistic graphical models and other generative models, Monte Carlo and variational inference methods.",
    "prerequisiteText": "Either CPSC 340 or both (a) AI 240 and (b) one of STAT 251, ECON 325, ECON 327, MATH 302, STAT 302, MATH 318.",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC320",
      "MATH221"
    ],
    "areas": [
      "computer science",
      "ai",
      "data"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS410"
  },
  {
    "code": "CPSC444",
    "name": "Advanced Methods for Human Computer Interaction",
    "credits": 3,
    "creditsText": "3",
    "department": "Computer Science",
    "description": "Design and evaluation methodologies and theories; formal models of the user including visual, motor, and information processing; advanced evaluation methods including laboratory experiments and field studies; HCI research frontiers.",
    "prerequisiteText": "CPSC 344 and one of STAT 200, STAT 201, STAT 203, STAT 241, STAT 251, BIOL 300, COMM 291, ECON 325, ECON 327, FRST 231, GEOG 374, KIN 206, KIN 371, POLI 380, PSYC 218, PSYC 278, PSYC 366, SOCI 328.",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC221"
    ],
    "areas": [
      "computer science",
      "systems",
      "networking"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS360"
  },
  {
    "code": "CPSC445",
    "name": "Algorithms in Bioinformatics",
    "credits": 3,
    "creditsText": "3",
    "department": "Computer Science",
    "description": "Sequence alignment, phylogenetic tree reconstruction, prediction of RNA and protein structure, gene finding and sequence annotation, gene expression, and biomolecular computing.",
    "prerequisiteText": "CPSC 320. and either BMEG 250 or six credits of BIOL beyond BIOL 111.",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC221",
      "CPSC121"
    ],
    "areas": [
      "computer science",
      "algorithms",
      "theory"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS301"
  },
  {
    "code": "CPSC447",
    "name": "Introduction to Visualization",
    "credits": 3,
    "creditsText": "3",
    "department": "Computer Science",
    "description": "Design and implementation of static and interactive visualizations. Selection of appropriate visualization methods for given combinations of data type and intended analysis task. Assessment of visual representations according to design and perceptual principles.",
    "prerequisiteText": "One of CPSC 310, CPEN 321.",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC221",
      "CPSC121"
    ],
    "areas": [
      "computer science",
      "algorithms",
      "theory"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS301"
  },
  {
    "code": "CPSC448",
    "name": "Directed Studies in Computer Science",
    "credits": 3,
    "creditsText": "3-6",
    "department": "Computer Science",
    "description": "Open ordinarily to students in Computer Science with at least a 72% average and permission of the department. The course may consist of supervised reading, participation in a seminar, and one or more programming projects.",
    "prerequisiteText": "",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC221"
    ],
    "areas": [
      "computer science",
      "systems",
      "networking"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS360"
  },
  {
    "code": "CPSC449",
    "name": "Honours Thesis",
    "credits": 6,
    "creditsText": "6",
    "department": "Computer Science",
    "description": "Under supervision of a faculty member, students investigate a research topic and prepare a thesis.",
    "prerequisiteText": "[CPSC349]",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC320",
      "MATH221"
    ],
    "areas": [
      "computer science",
      "ai",
      "data"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS410"
  },
  {
    "code": "CPSC455",
    "name": "Applied Industry Practices",
    "credits": 3,
    "creditsText": "3",
    "department": "Computer Science",
    "description": "Hands-on project, mentored by industry experts, integrating skills relevant to early career in the computing industry: technical skills, communication, teamwork, networking and portfolio building.",
    "prerequisiteText": "One of CPSC 310, CPEN 321.",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC221"
    ],
    "areas": [
      "computer science",
      "programming",
      "web"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS420"
  },
  {
    "code": "CPSC490",
    "name": "Student Directed Seminars",
    "credits": 3,
    "creditsText": "3",
    "department": "Computer Science",
    "description": "Self-directed, collaborative studies, in a group-learning environment, initiated and coordinated by senior undergraduate students with the supervision of a faculty advisor. Course structure, enrolment and delivery methods will comply with the Handbook for Student Directed Seminars.",
    "prerequisiteText": "",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC320",
      "MATH221"
    ],
    "areas": [
      "computer science",
      "ai",
      "data"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS410"
  },
  {
    "code": "CPSC491",
    "name": "Interactive Digital Media Practicum",
    "credits": 6,
    "creditsText": "6",
    "department": "Computer Science",
    "description": "Design and implementation of interactive digital media systems using modern processes and tools. Projects provided by external clients or vetted entrepreneurial pitches are developed by interdisciplinary teams composed of one CPSC 491 student and multiple Master of Digital Media students.",
    "prerequisiteText": "All of CPSC 221, CPSC 310, CPSC 344 and Third-year standing. This course is not eligible for Credit/D/Fail grading.",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC320",
      "MATH221"
    ],
    "areas": [
      "computer science",
      "ai",
      "data"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS410"
  },
  {
    "code": "MATH100",
    "name": "Differential Calculus with Applications",
    "credits": 3,
    "creditsText": "3",
    "department": "Mathematics",
    "description": "Derivatives of elementary functions. Applications and modelling: graphing, optimization. Consult the Faculty of Science Credit Exclusion List: https://vancouver.calendar.ubc.ca/faculties-colleges-and-schools/facult…",
    "prerequisiteText": "A score of 80% or higher in BC Pre-calculus 12. High school calculus is strongly recommended.",
    "corequisiteText": "",
    "prerequisites": [],
    "areas": [
      "math"
    ],
    "source": "courses.json",
    "templateCourseCode": "MATH120"
  },
  {
    "code": "MATH101",
    "name": "Integral Calculus with Applications",
    "credits": 3,
    "creditsText": "3",
    "department": "Mathematics",
    "description": "The definite integral, integration techniques, applications, modelling, infinite series. Equivalency: MATH 103, MATH 105.",
    "prerequisiteText": "One of MATH 100, MATH 102, MATH 104, MATH 110, MATH 120, MATH 180, MATH 184, MATH_O 100.",
    "corequisiteText": "",
    "prerequisites": [],
    "areas": [
      "math"
    ],
    "source": "courses.json",
    "templateCourseCode": "MATH120"
  },
  {
    "code": "MATH102",
    "name": "Differential Calculus with Applications to Life Sciences",
    "credits": 3,
    "creditsText": "3",
    "department": "Mathematics",
    "description": "Functions, derivatives, optimization, growth and decay, discrete probability. Equivalency: MATH 100, 104.",
    "prerequisiteText": "High-school calculus and a score of 80% or higher in BC Principles of Mathematics 12 or Pre-calculus 12.",
    "corequisiteText": "",
    "prerequisites": [],
    "areas": [
      "math"
    ],
    "source": "courses.json",
    "templateCourseCode": "MATH120"
  },
  {
    "code": "MATH103",
    "name": "Integral Calculus with Applications to Life Sciences",
    "credits": 3,
    "creditsText": "3",
    "department": "Mathematics",
    "description": "Antiderivatives and definite integrals, infinite series, applications to probability and dynamical systems. Equivalency: MATH 101, 105.",
    "prerequisiteText": "One of MATH 100, MATH 102, MATH 104, MATH 110, MATH 120, MATH 180, MATH 184.",
    "corequisiteText": "",
    "prerequisites": [],
    "areas": [
      "math"
    ],
    "source": "courses.json",
    "templateCourseCode": "MATH120"
  },
  {
    "code": "MATH104",
    "name": "Differential Calculus with Applications to Commerce and Social Sciences",
    "credits": 3,
    "creditsText": "3",
    "department": "Mathematics",
    "description": "Derivatives and rates of change, exponential and trigonometric functions, Newton's method, Taylor polynomials, maxima and minima, and graphing. Equivalency: MATH 100, 102.",
    "prerequisiteText": "High-school calculus and a score of 80% or higher in BC Principles of Mathematics 12 or Pre-calculus 12.",
    "corequisiteText": "",
    "prerequisites": [],
    "areas": [
      "math"
    ],
    "source": "courses.json",
    "templateCourseCode": "MATH120"
  },
  {
    "code": "MATH105",
    "name": "Integral Calculus with Applications to Commerce and Social Sciences",
    "credits": 3,
    "creditsText": "3",
    "department": "Mathematics",
    "description": "Antiderivatives, the definite integral, techniques of integration, infinite series, partial derivatives, maxima and minima with constraints, discrete and continuous random variables. Equivalency: MATH 101, 103.",
    "prerequisiteText": "One of MATH 100, MATH 102, MATH 104, MATH 110, MATH 120, MATH 180, MATH 184.",
    "corequisiteText": "",
    "prerequisites": [],
    "areas": [
      "math"
    ],
    "source": "courses.json",
    "templateCourseCode": "MATH120"
  },
  {
    "code": "MATH110",
    "name": "Differential Calculus",
    "credits": 6,
    "creditsText": "6",
    "department": "Mathematics",
    "description": "Topics as for MATH 100, but including relevant topics from algebra, geometry, functions, trigonometry, logarithms, and exponentials. [3-0-1.5; 3-0-1.5]",
    "prerequisiteText": "A grade of 65% or higher in BC Principles of Mathematics 12 or Pre-calculus 12.",
    "corequisiteText": "",
    "prerequisites": [],
    "areas": [
      "math"
    ],
    "source": "courses.json",
    "templateCourseCode": "MATH120"
  },
  {
    "code": "MATH111",
    "name": "Matrix Algebra",
    "credits": 3,
    "creditsText": "3",
    "department": "Mathematics",
    "description": "Systems of linear equations, operations on matrices, determinants, eigenvalues and eigenvectors, diagonalization of symmetric matrices. Please consult the Faculty of Science Credit Exclusion List: https://vancouver.calendar.ubc.ca/faculties-colleges-and-schools/facult… . Equivalency: MATH 221.",
    "prerequisiteText": "Either (a) one of MATH 100, MATH 102, MATH 104, MATH 110, MATH 120, MATH 180, MATH 184, MATH_O 100 or (b) advanced credit for MATH 100, or (c) SCIE 001 as a co-requisite.",
    "corequisiteText": "",
    "prerequisites": [
      "MATH100"
    ],
    "areas": [
      "math"
    ],
    "source": "courses.json",
    "templateCourseCode": "MATH220"
  },
  {
    "code": "MATH120",
    "name": "Honours Differential Calculus",
    "credits": 4,
    "creditsText": "4",
    "department": "Mathematics",
    "description": "Limits, derivatives, Mean Value Theorem and applications, elementary functions, optimization, Taylor series, approximation. Please consult the Faculty of Science Credit Exclusion List: https://vancouver.calendar.ubc.ca/faculties-colleges-and-schools/facult…",
    "prerequisiteText": "High-school calculus and one of (a) a score of 95% or higher in BC Principles of Mathematics 12 or Pre-calculus 12; or (b) permission from the Mathematics Department Head.",
    "corequisiteText": "",
    "prerequisites": [],
    "areas": [
      "math"
    ],
    "source": "courses.json",
    "templateCourseCode": "MATH120"
  },
  {
    "code": "MATH121",
    "name": "Honours Integral Calculus",
    "credits": 4,
    "creditsText": "4",
    "department": "Mathematics",
    "description": "Definite integrals and the Fundamental Theorem of Calculus, techniques and applications of integration, infinite series. Please consult the Faculty of Science Credit Exclusion List: https://vancouver.calendar.ubc.ca/faculties-colleges-and-schools/facult… .",
    "prerequisiteText": "Either a) a score of 68% or higher in MATH 120, b) a score of 80% or higher in MATH 100, MATH 102, MATH 104, MATH 180, MATH 184, or c) a score of 5 in AP Calculus AB.",
    "corequisiteText": "",
    "prerequisites": [],
    "areas": [
      "math"
    ],
    "source": "courses.json",
    "templateCourseCode": "MATH120"
  },
  {
    "code": "MATH131",
    "name": "Honours Linear Algebra",
    "credits": 3,
    "creditsText": "3",
    "department": "Mathematics",
    "description": "Matrices, eigenvectors, diagonalization, orthogonality, linear systems, applications. Students who obtain credit for MATH 131 cannot in the same or later terms obtain credit for MATH 111, MATH 152, or MATH 221. Equivalency: MATH 223.",
    "prerequisiteText": "One of (a) one of MATH 120, MATH 121, SCIE 001, or (b) a score of 80% or higher in one of MATH 100, MATH 102, MATH 104, MATH 110, MATH 180, MATH 184, or (c) a score of 68% or higher in one of MATH 101, MATH 103, MATH 105, MATH 152, MATH 111, MATH 221, or (d) SCIE 001 as a corequisite.",
    "corequisiteText": "",
    "prerequisites": [
      "MATH100"
    ],
    "areas": [
      "math"
    ],
    "source": "courses.json",
    "templateCourseCode": "MATH220"
  },
  {
    "code": "MATH152",
    "name": "Linear Systems",
    "credits": 3,
    "creditsText": "3",
    "department": "Mathematics",
    "description": "2D and 3D geometry, vectors and matrices, eigenvalues and vibration, physical applications. Laboratories demonstrate computer solutions of large systems. Please consult the Faculty of Science Credit Exclusion List: https://vancouver.calendar.ubc.ca/faculties-colleges-and-schools/facult… [3-1*-0]",
    "prerequisiteText": "",
    "corequisiteText": "MATH 101.",
    "prerequisites": [
      "MATH100"
    ],
    "areas": [
      "math"
    ],
    "source": "courses.json",
    "templateCourseCode": "MATH220"
  },
  {
    "code": "MATH180",
    "name": "Differential Calculus with Applications",
    "credits": 4,
    "creditsText": "4",
    "department": "Mathematics",
    "description": "Topics as for Math 100; intended for students with no previous knowledge of Calculus. Please consult the Faculty of Science Credit Exclusion List: https://vancouver.calendar.ubc.ca/faculties-colleges-and-schools/facult… . Not for credit for students with AP Calculus AB, AP Calculus BC, or a passing score on the UBC-SFU-UVIC-UNBC Calculus Challenge Examination.",
    "prerequisiteText": "A grade of 80% or higher in BC Principles of Mathematics 12 or Pre-calculus 12.",
    "corequisiteText": "",
    "prerequisites": [],
    "areas": [
      "math"
    ],
    "source": "courses.json",
    "templateCourseCode": "MATH120"
  },
  {
    "code": "MATH184",
    "name": "Differential Calculus for Social Science and Commerce",
    "credits": 4,
    "creditsText": "4",
    "department": "Mathematics",
    "description": "Topics as for Math 104; intended for students with no previous knowledge of Calculus. Please consult the Faculty of Science Credit Exclusion List: https://vancouver.calendar.ubc.ca/faculties-colleges-and-schools/facult… . Not for credit for students with AP Calculus AB, AP Calculus BC, or a passing score on the UBC-SFU-UVIC-UNBC Calculus Challenge Examination.",
    "prerequisiteText": "A grade of 80% or higher in BC Principles of Mathematics 12 or Pre-calculus 12.",
    "corequisiteText": "",
    "prerequisites": [],
    "areas": [
      "math"
    ],
    "source": "courses.json",
    "templateCourseCode": "MATH120"
  },
  {
    "code": "MATH190",
    "name": "Calculus Survey",
    "credits": 4,
    "creditsText": "4",
    "department": "Mathematics",
    "description": "Functions, derivatives, integrals, curve sketching growth functions, volume calculations. Only for credit in the Faculty of Forestry and Environmental Stewardship. Students with credit for MATH 100, 102, 104, 120, 180, or 184 cannot in the same term or later terms obtain credit for MATH 190.",
    "prerequisiteText": "Principles of Mathematics 12 or Pre-calculus 12 and registration in the B.S.F. or B.Sc.N. programs.",
    "corequisiteText": "",
    "prerequisites": [],
    "areas": [
      "math"
    ],
    "source": "courses.json",
    "templateCourseCode": "MATH120"
  },
  {
    "code": "MATH200",
    "name": "Calculus III",
    "credits": 3,
    "creditsText": "3",
    "department": "Mathematics",
    "description": "Analytic geometry in 2 and 3 dimensions, partial and directional derivatives, chain rule, maxima and minima, second derivative test, Lagrange multipliers, multiple integrals with applications. Please consult the Faculty of Science Credit Exclusion List: https://vancouver.calendar.ubc.ca/faculties-colleges-and-schools/facult… .",
    "prerequisiteText": "One of MATH 101, MATH 103, MATH 105, MATH 121, SCIE 001, MATH_O 101, MATH_O 103.",
    "corequisiteText": "",
    "prerequisites": [],
    "areas": [
      "math"
    ],
    "source": "courses.json",
    "templateCourseCode": "MATH120"
  },
  {
    "code": "MATH210",
    "name": "Introduction to Mathematical Computing",
    "credits": 3,
    "creditsText": "3",
    "department": "Mathematics",
    "description": "Introduction to mathematical software and numerical methods. Numbers, arrays, functions, vectorization and iteration. Sequences and series, root finding, numerical integration, numerical methods for differential equations, systems of linear equations, mathematical graphics.",
    "prerequisiteText": "One of MATH 101, MATH 103, MATH 105, MATH 121, SCIE 001, MATH_O 101, MATH_O 103",
    "corequisiteText": "",
    "prerequisites": [
      "MATH100"
    ],
    "areas": [
      "math"
    ],
    "source": "courses.json",
    "templateCourseCode": "MATH220"
  },
  {
    "code": "MATH215",
    "name": "Elementary Differential Equations I",
    "credits": 3,
    "creditsText": "3",
    "department": "Mathematics",
    "description": "First-order equations; linear equations; linear systems; Laplace transforms; numerical methods; trajectory analysis of plane nonlinear systems. Applications of these topics will be emphasized. Please consult the Faculty of Science Credit Exclusion List: https://vancouver.calendar.ubc.ca/faculties-colleges-and-schools/facult… .",
    "prerequisiteText": "One of MATH 101, MATH 103, MATH 105, MATH 121, SCIE 001, MATH_O 101, MATH_O 103 and one of MATH 152, MATH 221, MATH 223, MATH_O 222",
    "corequisiteText": "",
    "prerequisites": [
      "MATH100"
    ],
    "areas": [
      "math"
    ],
    "source": "courses.json",
    "templateCourseCode": "MATH220"
  },
  {
    "code": "MATH217",
    "name": "Multivariable and Vector Calculus",
    "credits": 4,
    "creditsText": "4",
    "department": "Mathematics",
    "description": "Partial differentiation, extreme values, multiple integration, vector fields, line and surface integrals, the divergence theorem, Green's and Stokes' theorems. Intended for students in Honours Physics and Engineering Physics. Please consult the Faculty of Science Credit Exclusion List: https://vancouver.calendar.ubc.ca/faculties-colleges-and-schools/facult…",
    "prerequisiteText": "A score of 68% or higher in one of PHYS 102, PHYS 108, PHYS 118, PHYS 153, PHYS 158, SCIE 001 and a score of 68% or higher in one of MATH 101, MATH 103, MATH 105, MATH 121, SCIE 001, MATH_O 101, MATH_O 103",
    "corequisiteText": "",
    "prerequisites": [],
    "areas": [
      "math"
    ],
    "source": "courses.json",
    "templateCourseCode": "MATH120"
  },
  {
    "code": "MATH220",
    "name": "Mathematical Proof",
    "credits": 3,
    "creditsText": "3",
    "department": "Mathematics",
    "description": "Sets and functions; induction; cardinality; properties of the real numbers; sequences, series, and limits. Logic, structure, style, and clarity of proofs emphasized throughout.",
    "prerequisiteText": "Either (a) a score of 64% or higher in one of MATH 101, MATH 103, MATH 105, SCIE 001, MATH_O 101, MATH_O 103 or (b) one of MATH 121, MATH 200, MATH 217, MATH 226, MATH 253, MATH 254, MATH_O 200.",
    "corequisiteText": "",
    "prerequisites": [
      "MATH100"
    ],
    "areas": [
      "math"
    ],
    "source": "courses.json",
    "templateCourseCode": "MATH220"
  },
  {
    "code": "MATH221",
    "name": "Matrix Algebra",
    "credits": 3,
    "creditsText": "3",
    "department": "Mathematics",
    "description": "Systems of linear equations, operations on matrices, determinants, eigenvalues and eigenvectors, diagonalization of symmetric matrices. This course is intended for first and second year students. Please consult the Faculty of Science Credit Exclusion List: https://vancouver.calendar.ubc.ca/faculties-colleges-and-schools/facult… Equivalency: MATH 111.",
    "prerequisiteText": "Either (a) one of MATH 100, MATH 102, MATH 104, MATH 110, MATH 120, MATH 180, MATH 184, SCIE 001, MATH_O 100 or (b) advanced credit for MATH 100, or (c) SCIE 001 as a corequisite.",
    "corequisiteText": "",
    "prerequisites": [
      "MATH100"
    ],
    "areas": [
      "math"
    ],
    "source": "courses.json",
    "templateCourseCode": "MATH220"
  },
  {
    "code": "MATH223",
    "name": "Honours Linear Algebra",
    "credits": 3,
    "creditsText": "3",
    "department": "Mathematics",
    "description": "Matrices, eigenvectors, diagonalization, orthogonality, linear systems, applications. This course is intended for first and second year students. Students who obtain credit for MATH 223 cannot in the same or later terms obtain credit for MATH 111, MATH 152, or MATH 221. Equivalency: MATH 131.",
    "prerequisiteText": "One of (a) one of MATH 120, MATH 121, SCIE 001, or (b) a score of 80% or higher in one of MATH 100, MATH 102, MATH 104, MATH 110, MATH 180, MATH 184, MATH_O 100, or (c) a score of 68% or higher in one of MATH 101, MATH 103, MATH 105, MATH 111, MATH 152, MATH 221, MATH_O 101, MATH_O 103, MATH_O 221, or (d) SCIE 001 as a corequisite.",
    "corequisiteText": "",
    "prerequisites": [
      "MATH100"
    ],
    "areas": [
      "math"
    ],
    "source": "courses.json",
    "templateCourseCode": "MATH220"
  },
  {
    "code": "MATH226",
    "name": "Advanced Calculus I",
    "credits": 3,
    "creditsText": "3",
    "department": "Mathematics",
    "description": "Functions of several variables: limits, continuity, differentiability; implicit functions; Taylor's theorem; extrema; Lagrange multipliers; multiple integration, Fubini's theorem; improper integrals. Please consult the Faculty of Science Credit Exclusion List: https://vancouver.calendar.ubc.ca/faculties-colleges-and-schools/facult…",
    "prerequisiteText": "Either (a) a score of 68% or higher in MATH 121 or (b) a score of 80% or higher in one of MATH 101, MATH 103, MATH 105, SCIE 001, MATH_O 101, MATH_O 103",
    "corequisiteText": "",
    "prerequisites": [],
    "areas": [
      "math"
    ],
    "source": "courses.json",
    "templateCourseCode": "MATH120"
  },
  {
    "code": "MATH227",
    "name": "Advanced Calculus II",
    "credits": 3,
    "creditsText": "3",
    "department": "Mathematics",
    "description": "Parametrization of curves and surfaces; line and surface integrals; theorems of Green, Gauss, Stokes; applications to physics and/or introduction to differential forms. Please consult the Faculty of Science Credit Exclusion List: https://vancouver.calendar.ubc.ca/faculties-colleges-and-schools/facult…",
    "prerequisiteText": "MATH 226. Prerequisite grade requirement: 68% in MATH226.",
    "corequisiteText": "",
    "prerequisites": [],
    "areas": [
      "math"
    ],
    "source": "courses.json",
    "templateCourseCode": "MATH120"
  },
  {
    "code": "MATH230",
    "name": "Marvels of Mathematics",
    "credits": 3,
    "creditsText": "3",
    "department": "Mathematics",
    "description": "A variety of topics in mathematics, showcasing its beauty and utility. Intended for a general audience of students whose degrees have no mathematics requirements, but who may be curious about practical and recreational mathematics. Not for credit in the Faculty of Science. Students who obtain UBC credit for any other mathematics course cannot in the same or later years obtain credit for MATH 230.",
    "prerequisiteText": "",
    "corequisiteText": "",
    "prerequisites": [
      "MATH100"
    ],
    "areas": [
      "math"
    ],
    "source": "courses.json",
    "templateCourseCode": "MATH220"
  },
  {
    "code": "MATH253",
    "name": "Multivariable Calculus",
    "credits": 3,
    "creditsText": "3",
    "department": "Mathematics",
    "description": "Partial and directional derivatives; maxima and minima; Lagrange multipliers and second derivative test; multiple integrals and applications. Please consult the Faculty of Science Credit Exclusion List: https://vancouver.calendar.ubc.ca/faculties-colleges-and-schools/facult…",
    "prerequisiteText": "One of MATH 101, MATH 103, MATH 105, MATH 121, SCIE 001, MATH_O 101, MATH_O 103.",
    "corequisiteText": "",
    "prerequisites": [],
    "areas": [
      "math"
    ],
    "source": "courses.json",
    "templateCourseCode": "MATH120"
  },
  {
    "code": "MATH254",
    "name": "Multivariable and Vector Calculus for Mechanical Engineering",
    "credits": 3,
    "creditsText": "3",
    "department": "Mathematics",
    "description": "Partial differentiation, extreme values, multiple integration, vector fields, line and surface integrals, the divergence and Stokes' theorems; applications to fluid mechanics: buoyancy, hydrostatic force, pipe flow, drag; applications to thermodynamics: work, entropy, heat transfer; numerical methods. Emphasis on mechanical engineering applications. [3-0-1*]",
    "prerequisiteText": "MATH 101 and one of MATH 152, MATH 221, MATH 223",
    "corequisiteText": "",
    "prerequisites": [],
    "areas": [
      "math"
    ],
    "source": "courses.json",
    "templateCourseCode": "MATH120"
  },
  {
    "code": "MATH255",
    "name": "Ordinary Differential Equations",
    "credits": 3,
    "creditsText": "3",
    "department": "Mathematics",
    "description": "Review of linear systems; nonlinear equations and applications; phase plane analysis; Laplace transforms; numerical methods. Please consult the Faculty of Science Credit Exclusion List: https://vancouver.calendar.ubc.ca/faculties-colleges-and-schools/facult…",
    "prerequisiteText": "One of MATH 101, MATH 103, MATH 105, MATH 121, SCIE 001 and one of MATH 152, MATH 221, MATH 223",
    "corequisiteText": "",
    "prerequisites": [
      "MATH100"
    ],
    "areas": [
      "math"
    ],
    "source": "courses.json",
    "templateCourseCode": "MATH220"
  },
  {
    "code": "MATH256",
    "name": "Differential Equations",
    "credits": 3,
    "creditsText": "3",
    "department": "Mathematics",
    "description": "Linear ordinary differential equations, Laplace transforms, Fourier series and separation of variables for linear partial differential equations. Consult the Faculty of Science Credit Exclusion List: https://vancouver.calendar.ubc.ca/faculties-colleges-and-schools/facult… .",
    "prerequisiteText": "One of MATH 101, MATH 103, MATH 105, MATH 121, SCIE 001, MATH_O 101, MATH_O 103 and one of MATH 152, MATH 221, MATH 223, MATH_O 222",
    "corequisiteText": "",
    "prerequisites": [
      "MATH100"
    ],
    "areas": [
      "math"
    ],
    "source": "courses.json",
    "templateCourseCode": "MATH220"
  },
  {
    "code": "MATH257",
    "name": "Partial Differential Equations",
    "credits": 3,
    "creditsText": "3",
    "department": "Mathematics",
    "description": "Introduction to partial differential equations; Fourier series; the heat, wave and potential equations; boundary-value problems; numerical methods. Please consult the Faculty of Science Credit Exclusion List: https://vancouver.calendar.ubc.ca/faculties-colleges-and-schools/facult…",
    "prerequisiteText": "One of MATH 215, MATH 255, MATH 256, MATH 258.",
    "corequisiteText": "",
    "prerequisites": [
      "MATH100"
    ],
    "areas": [
      "math"
    ],
    "source": "courses.json",
    "templateCourseCode": "MATH220"
  },
  {
    "code": "MATH258",
    "name": "Differential Equations for Mechanical Engineering",
    "credits": 3,
    "creditsText": "3",
    "department": "Mathematics",
    "description": "First-order equations; linear equations; linear systems; Laplace transforms; trajectory analysis of plane nonlinear systems; translational and rotational vibrations; applications to RLC circuit analysis; numerical and graphical methods. Emphasis on mechanical engineering applications. [3-0-1*]",
    "prerequisiteText": "MATH 101 and one of MATH 152, MATH 221, MATH 223",
    "corequisiteText": "",
    "prerequisites": [
      "MATH100"
    ],
    "areas": [
      "math"
    ],
    "source": "courses.json",
    "templateCourseCode": "MATH220"
  },
  {
    "code": "MATH264",
    "name": "Vector Calculus for Electrical Engineering",
    "credits": 1,
    "creditsText": "1",
    "department": "Mathematics",
    "description": "Divergence, gradient, curl, theorems of Gauss and Stokes. Applications to Electrostatics and Magnetostatics. MATH 264 content is strongly coupled to BMEG 220 and ELEC 211 with topics and student evaluations weighted accordingly.",
    "prerequisiteText": "One of MATH 200, MATH 217, MATH 226, MATH 253, MATH 254",
    "corequisiteText": "",
    "prerequisites": [],
    "areas": [
      "math"
    ],
    "source": "courses.json",
    "templateCourseCode": "MATH120"
  },
  {
    "code": "MATH300",
    "name": "Introduction to Complex Variables",
    "credits": 3,
    "creditsText": "3",
    "department": "Mathematics",
    "description": "Functions of a complex variable, Cauchy-Riemann equations, elementary functions, Cauchy's theorem and contour integration, Laurent series, poles and residues. Please consult the Faculty of Science Credit Exclusion List: https://vancouver.calendar.ubc.ca/faculties-colleges-and-schools/facult…",
    "prerequisiteText": "",
    "corequisiteText": "One of MATH 217, MATH 227, MATH 254, MATH 317.",
    "prerequisites": [
      "MATH100"
    ],
    "areas": [
      "math"
    ],
    "source": "courses.json",
    "templateCourseCode": "MATH220"
  },
  {
    "code": "MATH301",
    "name": "Applied Analysis",
    "credits": 3,
    "creditsText": "3",
    "department": "Mathematics",
    "description": "Integrals involving multi-valued functions, conformal mapping and applications, analytic continuation, Laplace and Fourier transforms.",
    "prerequisiteText": "One of MATH 300, MATH 305",
    "corequisiteText": "",
    "prerequisites": [
      "MATH100"
    ],
    "areas": [
      "math"
    ],
    "source": "courses.json",
    "templateCourseCode": "MATH220"
  },
  {
    "code": "MATH302",
    "name": "Introduction to Probability",
    "credits": 3,
    "creditsText": "3",
    "department": "Mathematics",
    "description": "Basic notions of probability, random variables, expectation and conditional expectation, limit theorems. Please consult the Faculty of Science Credit Exclusion List: https://vancouver.calendar.ubc.ca/faculties-colleges-and-schools/facult…",
    "prerequisiteText": "One of MATH 200, MATH 217, MATH 226, MATH 253, MATH 254. Equivalency: STAT 302.",
    "corequisiteText": "",
    "prerequisites": [
      "MATH100"
    ],
    "areas": [
      "math"
    ],
    "source": "courses.json",
    "templateCourseCode": "MATH220"
  },
  {
    "code": "MATH303",
    "name": "Introduction to Stochastic Processes",
    "credits": 3,
    "creditsText": "3",
    "department": "Mathematics",
    "description": "Discrete-time Markov chains, Poisson processes, continuous time Markov chains, renewal theory. Please consult the Faculty of Science Credit Exclusion List: https://vancouver.calendar.ubc.ca/faculties-colleges-and-schools/facult…",
    "prerequisiteText": "One of MATH 302, STAT 302, STAT_O 203.",
    "corequisiteText": "",
    "prerequisites": [
      "MATH100"
    ],
    "areas": [
      "math"
    ],
    "source": "courses.json",
    "templateCourseCode": "MATH220"
  },
  {
    "code": "MATH305",
    "name": "Applied Complex Analysis",
    "credits": 3,
    "creditsText": "3",
    "department": "Mathematics",
    "description": "Functions of a complex variable, Cauchy-Riemann equations, contour integration, Laurent series, residues, integrals of multi-valued functions, Fourier transforms. Please consult the Faculty of Science Credit Exclusion List: https://vancouver.calendar.ubc.ca/faculties-colleges-and-schools/facult…",
    "prerequisiteText": "One of MATH 200, MATH 217, MATH 226, MATH 253, MATH 254",
    "corequisiteText": "",
    "prerequisites": [
      "MATH100"
    ],
    "areas": [
      "math"
    ],
    "source": "courses.json",
    "templateCourseCode": "MATH220"
  },
  {
    "code": "MATH307",
    "name": "Applied Linear Algebra",
    "credits": 3,
    "creditsText": "3",
    "department": "Mathematics",
    "description": "Applications of linear algebra to problems in science and engineering; use of computer algebra systems for solving problems in linear algebra.",
    "prerequisiteText": "One of MATH 152, MATH 221, MATH 223, MATH_O 222 and one of MATH 200, MATH 217, MATH 226, MATH 253, MATH 254, MATH_O 200.",
    "corequisiteText": "",
    "prerequisites": [
      "MATH100"
    ],
    "areas": [
      "math"
    ],
    "source": "courses.json",
    "templateCourseCode": "MATH220"
  },
  {
    "code": "MATH308",
    "name": "Euclidean Geometry",
    "credits": 3,
    "creditsText": "3",
    "department": "Mathematics",
    "description": "Classical plane geometry, solid geometry, spherical trigonometry, polyhedra, linear and affine transformations. Linear algebra proofs are used. It is suggested that MATH 307 be taken concurrently.",
    "prerequisiteText": "Either (a) one of MATH 152, MATH 221 and one of MATH 220, MATH 226, CPSC 121; or (b) MATH 223.",
    "corequisiteText": "",
    "prerequisites": [
      "MATH100"
    ],
    "areas": [
      "math"
    ],
    "source": "courses.json",
    "templateCourseCode": "MATH220"
  },
  {
    "code": "MATH309",
    "name": "Topics in Geometry",
    "credits": 3,
    "creditsText": "3",
    "department": "Mathematics",
    "description": "Topics chosen by the instructor. These may include conic sections, projective configuration, convexity, non-Euclidean geometries, fractal geometry, combinatorial problems of points in the plane.",
    "prerequisiteText": "Either (a) one of MATH 152, MATH 221 and one of MATH 220, MATH 226, CPSC 121, MATH_O 220; or (b) MATH 223 or MATH_O 222.",
    "corequisiteText": "",
    "prerequisites": [
      "MATH100"
    ],
    "areas": [
      "math"
    ],
    "source": "courses.json",
    "templateCourseCode": "MATH220"
  },
  {
    "code": "MATH310",
    "name": "Abstract Linear Algebra",
    "credits": 3,
    "creditsText": "3",
    "department": "Mathematics",
    "description": "Linear spaces, duality, linear mappings, matrices, determinant and trace, spectral theory, Euclidean structure. Consult the Faculty of Science Credit Exclusion List: https://vancouver.calendar.ubc.ca/faculties-colleges-and-schools/facult…",
    "prerequisiteText": "One of MATH 152, MATH 221 and one of MATH 220, MATH 226, CPSC 121.",
    "corequisiteText": "",
    "prerequisites": [
      "MATH100"
    ],
    "areas": [
      "math"
    ],
    "source": "courses.json",
    "templateCourseCode": "MATH220"
  },
  {
    "code": "MATH312",
    "name": "Introduction to Number Theory",
    "credits": 3,
    "creditsText": "3",
    "department": "Mathematics",
    "description": "Euclidean algorithm, congruences, Fermat's theorem, applications. Some diophantine equations. Distribution of the prime numbers. Please consult the Faculty of Science Credit Exclusion List: https://vancouver.calendar.ubc.ca/faculties-colleges-and-schools/facult…",
    "prerequisiteText": "One of MATH 220, MATH 223, MATH 226, CPSC 121. and 9 additional credits of mathematics courses.",
    "corequisiteText": "",
    "prerequisites": [
      "MATH100"
    ],
    "areas": [
      "math"
    ],
    "source": "courses.json",
    "templateCourseCode": "MATH220"
  },
  {
    "code": "MATH313",
    "name": "Topics in Number Theory",
    "credits": 3,
    "creditsText": "3",
    "department": "Mathematics",
    "description": "Topics chosen by the instructor. These might include: division algorithms, group theory, continued fractions, primality testing, factoring. Please consult the Faculty of Science Credit Exclusion List: https://vancouver.calendar.ubc.ca/faculties-colleges-and-schools/facult… .",
    "prerequisiteText": "MATH 312.",
    "corequisiteText": "",
    "prerequisites": [
      "MATH100"
    ],
    "areas": [
      "math"
    ],
    "source": "courses.json",
    "templateCourseCode": "MATH220"
  },
  {
    "code": "MATH316",
    "name": "Elementary Differential Equations II",
    "credits": 3,
    "creditsText": "3",
    "department": "Mathematics",
    "description": "Power series methods (ordinary and regular singular points, Bessel's equation); boundary value problems and separation of variables (Fourier series and other orthogonal series), applications to the vibrating string, heat flow, potentials. Please consult the Faculty of Science Credit Exclusion List: https://vancouver.calendar.ubc.ca/faculties-colleges-and-schools/facult…",
    "prerequisiteText": "One of MATH 215, MATH 255, MATH 256, MATH 258, MATH_O 225.",
    "corequisiteText": "",
    "prerequisites": [
      "MATH100"
    ],
    "areas": [
      "math"
    ],
    "source": "courses.json",
    "templateCourseCode": "MATH220"
  },
  {
    "code": "MATH317",
    "name": "Calculus IV",
    "credits": 3,
    "creditsText": "3",
    "department": "Mathematics",
    "description": "Parametrizations, inverse and implicit functions, integrals with respect to length and area; grad, div, and curl, theorems of Green, Gauss, and Stokes. Please consult the Faculty of Science Credit Exclusion List: https://vancouver.calendar.ubc.ca/faculties-colleges-and-schools/facult…",
    "prerequisiteText": "One of MATH 200, MATH 226, MATH 253. One of MATH 152, MATH 221, MATH 223 is recommended.",
    "corequisiteText": "",
    "prerequisites": [],
    "areas": [
      "math"
    ],
    "source": "courses.json",
    "templateCourseCode": "MATH120"
  },
  {
    "code": "MATH318",
    "name": "Probability with Physical Applications",
    "credits": 3,
    "creditsText": "3",
    "department": "Mathematics",
    "description": "Random variables, discrete and continuous distributions. Random walk, Markov chains, Monte Carlo methods. Characteristic functions, limit laws. Please consult the Faculty of Science Credit Exclusion List: https://vancouver.calendar.ubc.ca/faculties-colleges-and-schools/facult…",
    "prerequisiteText": "One of MATH 152, MATH 221, MATH 223",
    "corequisiteText": "",
    "prerequisites": [],
    "areas": [
      "math"
    ],
    "source": "courses.json",
    "templateCourseCode": "MATH120"
  },
  {
    "code": "MATH319",
    "name": "Introduction to Real Analysis",
    "credits": 3,
    "creditsText": "3",
    "department": "Mathematics",
    "description": "Ideas and methods of real analysis and their application. Countability and topology of the reals; convergence, continuity and differentiability of functions; metric spaces. Please consult the Faculty of Science credit exclusion list: https://vancouver.calendar.ubc.ca/faculties-colleges-and-schools/facult…",
    "prerequisiteText": "Either (a) a score of 68% or higher in MATH 220 or (b) a score of 55% or higher in one of MATH 223, MATH 226.",
    "corequisiteText": "",
    "prerequisites": [
      "MATH100"
    ],
    "areas": [
      "math"
    ],
    "source": "courses.json",
    "templateCourseCode": "MATH220"
  },
  {
    "code": "MATH320",
    "name": "Real Variables I",
    "credits": 3,
    "creditsText": "3",
    "department": "Mathematics",
    "description": "The real number system; real Euclidean n-space; open, closed, compact, and connected sets; Bolzano-Weierstrass theorem; sequences and series. Continuity and uniform continuity. Differentiability and mean-value theorems. Please consult the Faculty of Science credit exclusion list: https://vancouver.calendar.ubc.ca/faculties-colleges-and-schools/facult… .",
    "prerequisiteText": "Either (a) a score of 68% or higher in MATH 226 or (b) one of MATH 200, MATH 217, MATH 226, MATH 253, MATH 254 and a score of 80% or higher in MATH 220.",
    "corequisiteText": "",
    "prerequisites": [
      "MATH100"
    ],
    "areas": [
      "math"
    ],
    "source": "courses.json",
    "templateCourseCode": "MATH220"
  },
  {
    "code": "MATH321",
    "name": "Real Variables II",
    "credits": 3,
    "creditsText": "3",
    "department": "Mathematics",
    "description": "The Riemann or Riemann-Stieltjes integrals. Sequences and series of functions, uniform convergence. Approximation of continuous functions by polynomials. Fourier series. Functions from Rm to Rn , inverse and implicit function theorems.",
    "prerequisiteText": "MATH 320.",
    "corequisiteText": "",
    "prerequisites": [
      "MATH100"
    ],
    "areas": [
      "math"
    ],
    "source": "courses.json",
    "templateCourseCode": "MATH220"
  },
  {
    "code": "MATH322",
    "name": "Introduction to Group Theory",
    "credits": 3,
    "creditsText": "3",
    "department": "Mathematics",
    "description": "Groups, cosets, homomorphisms, group actions, p-groups, Sylow theorems, composition series, finitely generated Abelian groups. Please consult the Faculty of Science credit exclusion list: https://vancouver.calendar.ubc.ca/faculties-colleges-and-schools/facult… .",
    "prerequisiteText": "Either (a) a score of 68% or higher in one of MATH 223, MATH 310 or (b) one of MATH 152, MATH 221, MATH 223 and a score of 80% or higher in MATH 220.",
    "corequisiteText": "",
    "prerequisites": [
      "MATH100"
    ],
    "areas": [
      "math"
    ],
    "source": "courses.json",
    "templateCourseCode": "MATH220"
  },
  {
    "code": "MATH323",
    "name": "Introduction to Rings and Modules",
    "credits": 3,
    "creditsText": "3",
    "department": "Mathematics",
    "description": "Rings, ideals, unique factorization, Euclidean rings, fields, polynomial rings, modules; structure theory of modules over a principal ideal domain.",
    "prerequisiteText": "MATH 322.",
    "corequisiteText": "",
    "prerequisites": [
      "MATH100"
    ],
    "areas": [
      "math"
    ],
    "source": "courses.json",
    "templateCourseCode": "MATH220"
  },
  {
    "code": "MATH329",
    "name": "Introduction to Abstract Algebra",
    "credits": 3,
    "creditsText": "3",
    "department": "Mathematics",
    "description": "Ideas and methods of group theory and their applications. Groups, subgroups, and cosets; homomorphisms, isomorphisms, and associated theorems. Consult the Faculty of Science Credit Exclusion List: https://vancouver.calendar.ubc.ca/faculties-colleges-and-schools/facult…",
    "prerequisiteText": "Either (a) one of MATH 152, MATH 221, and one of MATH 220, MATH 226, CPSC 121, or (b) MATH 223",
    "corequisiteText": "",
    "prerequisites": [
      "MATH100"
    ],
    "areas": [
      "math"
    ],
    "source": "courses.json",
    "templateCourseCode": "MATH220"
  },
  {
    "code": "MATH335",
    "name": "Introduction to Mathematics",
    "credits": 4,
    "creditsText": "4",
    "department": "Mathematics",
    "description": "Intensive course with required tutorial. Combinatorics, probability, geometry and elementary number theory. Not for credit in the Faculty of Science. Students who obtain credit at UBC for any other mathematics course cannot in the same or later years obtain credit for MATH 335. Please consult the Faculty of Science Credit Exclusion List: https://vancouver.calendar.ubc.ca/faculties-colleges-and-schools/facult…",
    "prerequisiteText": "",
    "corequisiteText": "",
    "prerequisites": [
      "MATH100"
    ],
    "areas": [
      "math"
    ],
    "source": "courses.json",
    "templateCourseCode": "MATH220"
  },
  {
    "code": "MATH340",
    "name": "Introduction to Linear Programming",
    "credits": 3,
    "creditsText": "3",
    "department": "Mathematics",
    "description": "Linear programming problems, dual problems, the simplex algorithm, solution of primal and dual problems, sensitivity analysis. Additional topics chosen from: Karmarkar's algorithm, non-linear programming, game theory, applications.",
    "prerequisiteText": "One of MATH 152, MATH 221, MATH 223, MATH_O 222.",
    "corequisiteText": "",
    "prerequisites": [
      "MATH100"
    ],
    "areas": [
      "math"
    ],
    "source": "courses.json",
    "templateCourseCode": "MATH220"
  },
  {
    "code": "MATH341",
    "name": "Introduction to Discrete Mathematics",
    "credits": 3,
    "creditsText": "3",
    "department": "Mathematics",
    "description": "Introduction to ideas and methods of discrete mathematics and their application.",
    "prerequisiteText": "One of MATH 220, MATH 223, MATH 226, CPSC 121, MATH_O 220, MATH_O 222.",
    "corequisiteText": "",
    "prerequisites": [
      "MATH100"
    ],
    "areas": [
      "math"
    ],
    "source": "courses.json",
    "templateCourseCode": "MATH220"
  },
  {
    "code": "MATH342",
    "name": "Algebra and Coding Theory",
    "credits": 3,
    "creditsText": "3",
    "department": "Mathematics",
    "description": "Error-correcting codes via abstract and linear algebra. Emphasis on proofs and computation. Finite fields, Hamming distance and error-correction, upper and lower bounds on the size of a code, linear codes, groups and cosets, encoding and decoding schemes.",
    "prerequisiteText": "Either (a) one of MATH 152, MATH 221 and one of MATH 220, MATH 226, CPSC 121, MATH_O 220; or (b) one of MATH 223, MATH_O 222.",
    "corequisiteText": "",
    "prerequisites": [
      "MATH100"
    ],
    "areas": [
      "math"
    ],
    "source": "courses.json",
    "templateCourseCode": "MATH220"
  },
  {
    "code": "MATH344",
    "name": "Mathematical Game Theory",
    "credits": 3,
    "creditsText": "3",
    "department": "Mathematics",
    "description": "Introduction to mathematical game theory and its applications.",
    "prerequisiteText": "Either (a) one of MATH 152, MATH 221 and one of MATH 220, MATH 226, CPSC 121, MATH_O 220; or (b) one of MATH 223, MATH_O 222.",
    "corequisiteText": "",
    "prerequisites": [
      "MATH100"
    ],
    "areas": [
      "math"
    ],
    "source": "courses.json",
    "templateCourseCode": "MATH220"
  },
  {
    "code": "MATH345",
    "name": "Applied Nonlinear Dynamics and Chaos",
    "credits": 3,
    "creditsText": "3",
    "department": "Mathematics",
    "description": "Phase plane methods, bifurcation and stability theory, limit-cycle behavior and chaos for nonlinear differential equations with applications to the sciences. Assignments involve the use of computers.",
    "prerequisiteText": "A score of 68% or higher in one of MATH 215, MATH 255, MATH 256, MATH 258.",
    "corequisiteText": "",
    "prerequisites": [
      "MATH100"
    ],
    "areas": [
      "math"
    ],
    "source": "courses.json",
    "templateCourseCode": "MATH220"
  },
  {
    "code": "MATH358",
    "name": "Engineering Analysis",
    "credits": 3,
    "creditsText": "3",
    "department": "Mathematics",
    "description": "Fourier series; auto- and cross-correlation; power spectra; discrete Fourier transform; boundary-value problems; numerical methods; partial differential equations; heat, wave, Laplace, Poisson, and wave equations. Applications to mechanical engineering and practical computing applications emphasized. Credit will be granted for only one of MECH 358 or MATH 358. [3-2*-0]",
    "prerequisiteText": "All of MECH 224, MECH 225. Equivalency: MECH358",
    "corequisiteText": "",
    "prerequisites": [
      "MATH100"
    ],
    "areas": [
      "math"
    ],
    "source": "courses.json",
    "templateCourseCode": "MATH220"
  },
  {
    "code": "MATH360",
    "name": "Introduction to Mathematical Modelling",
    "credits": 3,
    "creditsText": "3",
    "department": "Mathematics",
    "description": "Construction and evaluation of deterministic, stochastic, and data-driven models. Software-assisted simulations and numerical solutions involving ordinary differential equations, stochastic processes, and basic machine learning algorithms. Examples from science, engineering, and economics.",
    "prerequisiteText": "One of MATH 200, MATH 217, MATH 226, MATH 253, MATH 254 and one of MATH 210, CPSC 203, CPSC 210 and one of MATH 215, MATH 255, MATH 256, MATH 258.",
    "corequisiteText": "",
    "prerequisites": [
      "MATH100"
    ],
    "areas": [
      "math"
    ],
    "source": "courses.json",
    "templateCourseCode": "MATH220"
  },
  {
    "code": "MATH361",
    "name": "Introduction to Mathematical Biology",
    "credits": 3,
    "creditsText": "3",
    "department": "Mathematics",
    "description": "Mathematical modelling of basic biological processes in ecology, physiology, neuroscience and genetics. Dynamic behavior of difference equations, differential equations, and partial differential equations, explained with reference to concrete biological examples.",
    "prerequisiteText": "One of BIOL 301, MATH 215, MATH 255, MATH 256, MATH 258.",
    "corequisiteText": "",
    "prerequisites": [
      "MATH100"
    ],
    "areas": [
      "math"
    ],
    "source": "courses.json",
    "templateCourseCode": "MATH220"
  },
  {
    "code": "MATH400",
    "name": "Applied Partial Differential Equations",
    "credits": 3,
    "creditsText": "3",
    "department": "Mathematics",
    "description": "Separation of variables, first order equations, Sturm-Liouville theory, integral transform methods.",
    "prerequisiteText": "One of MATH 300, MATH 305 and one of MATH 256, MATH 257, MATH 316, MATH 358, MECH 358, PHYS 312.",
    "corequisiteText": "",
    "prerequisites": [
      "MATH100"
    ],
    "areas": [
      "math"
    ],
    "source": "courses.json",
    "templateCourseCode": "MATH220"
  },
  {
    "code": "MATH401",
    "name": "Green&#039;s Functions and Variational Methods",
    "credits": 3,
    "creditsText": "3",
    "department": "Mathematics",
    "description": "Green's functions for partial differential equations. Calculus of variations. Eigenfunction expansions. Rayleigh-Ritz and finite element methods. See Faculty of Science credit exclusion list: https://vancouver.calendar.ubc.ca/faculties-colleges-and-schools/facult…",
    "prerequisiteText": "Either (a) a score of 80% or higher in one of MATH 256, MATH 257, MATH 316, MATH 358, MECH 358, PHYS 312 or (b) MATH 400.",
    "corequisiteText": "",
    "prerequisites": [],
    "areas": [
      "math"
    ],
    "source": "courses.json",
    "templateCourseCode": "MATH120"
  },
  {
    "code": "MATH402",
    "name": "Calculus of Variations",
    "credits": 3,
    "creditsText": "3",
    "department": "Mathematics",
    "description": "Classical variational problems; necessary conditions of Euler, Weierstrass, Legendre, and Jacobi; Erdmann corner conditions, transversality, convex Lagrangians, fields of extremals, sufficient conditions for optimality, numerical methods; applications to classical mechanics, engineering and economics. Recommended pre-requisites: a score of 68% or higher in one of MATH 301, MATH 320, or, a score of 80% or higher in MATH 319.",
    "prerequisiteText": "",
    "corequisiteText": "",
    "prerequisites": [],
    "areas": [
      "math"
    ],
    "source": "courses.json",
    "templateCourseCode": "MATH120"
  },
  {
    "code": "MATH403",
    "name": "Stabilization and Optimal Control of Dynamical Systems",
    "credits": 3,
    "creditsText": "3",
    "department": "Mathematics",
    "description": "Dynamical systems; stability by Liapunov's direct method; controllability and eigenvalue assignment for autonomous linear systems; linear-quadratic regulator, time optimal control, Pontryagin maximum principle, dynamic programming; applications in engineering, economics and resource management. Recommended pre-requisites: MATH 402, and one of (a) a score of 68% or higher in one of MATH 301, MATH 320, or (b) a score of 80% or higher in MATH 319.",
    "prerequisiteText": "",
    "corequisiteText": "",
    "prerequisites": [
      "MATH100"
    ],
    "areas": [
      "math"
    ],
    "source": "courses.json",
    "templateCourseCode": "MATH220"
  },
  {
    "code": "MATH404",
    "name": "Harmonic Analysis I",
    "credits": 3,
    "creditsText": "3",
    "department": "Mathematics",
    "description": "Harmonic analysis on Euclidean spaces, with applications to number theory, partial differential equations and geometric measure theory.",
    "prerequisiteText": "MATH 300 and a score of 68% or higher in MATH 321",
    "corequisiteText": "",
    "prerequisites": [
      "MATH100"
    ],
    "areas": [
      "math"
    ],
    "source": "courses.json",
    "templateCourseCode": "MATH220"
  },
  {
    "code": "MATH405",
    "name": "Numerical Methods for Differential Equations",
    "credits": 3,
    "creditsText": "3",
    "department": "Mathematics",
    "description": "Interpolation, numerical integration, numerical solution of ordinary and partial differential equations. Practical computational methods emphasized and basic theory developed through simple models. See Faculty of Science credit exclusion list: https://vancouver.calendar.ubc.ca/faculties-colleges-and-schools/facult…",
    "prerequisiteText": "One of MATH 256, MATH 257, MATH 316, MATH 358, MECH 358, PHYS 312.",
    "corequisiteText": "",
    "prerequisites": [
      "MATH100"
    ],
    "areas": [
      "math"
    ],
    "source": "courses.json",
    "templateCourseCode": "MATH220"
  },
  {
    "code": "MATH406",
    "name": "Variational and Approximate Methods in Applied Mathematics",
    "credits": 3,
    "creditsText": "3",
    "department": "Mathematics",
    "description": "Variational and Green's function methods for ordinary and partial differential equations, introduction to finite difference, finite element and boundary element methods. See Faculty of Science Credit exclusion list: https://vancouver.calendar.ubc.ca/faculties-colleges-and-schools/facult…",
    "prerequisiteText": "One of MATH 307, CPSC 302 and either (a) a score of 80% or higher in one of MATH 256, MATH 257, MATH 316, MATH 358, MECH 358, PHYS 312 or (b) MATH 400.",
    "corequisiteText": "",
    "prerequisites": [
      "MATH100"
    ],
    "areas": [
      "math"
    ],
    "source": "courses.json",
    "templateCourseCode": "MATH220"
  },
  {
    "code": "MATH412",
    "name": "Advanced Linear Algebra",
    "credits": 3,
    "creditsText": "3",
    "department": "Mathematics",
    "description": "Topics include decompositions of linear operators, multilinear algebra, bilinear forms, metric spaces.",
    "prerequisiteText": "A score of 68% or higher in MATH 322 and either (a) a score of 68% or higher in MATH 320 or (b) a score of 80% or higher in MATH 319.",
    "corequisiteText": "",
    "prerequisites": [
      "MATH100"
    ],
    "areas": [
      "math"
    ],
    "source": "courses.json",
    "templateCourseCode": "MATH220"
  },
  {
    "code": "MATH414",
    "name": "Mathematical Demonstrations",
    "credits": 3,
    "creditsText": "3",
    "department": "Mathematics",
    "description": "Students will prepare material illustrating ideas and applications of mathematics and present it to audiences outside the University. Intended for third or fourth year Mathematics students and Math/Science Education students. [2-0-0; 1-0-0] or",
    "prerequisiteText": "24 credits in MATH.",
    "corequisiteText": "",
    "prerequisites": [
      "MATH100"
    ],
    "areas": [
      "math"
    ],
    "source": "courses.json",
    "templateCourseCode": "MATH220"
  },
  {
    "code": "MATH418",
    "name": "Probability",
    "credits": 3,
    "creditsText": "3",
    "department": "Mathematics",
    "description": "Probability spaces, random variables, distributions, expectation, conditional probabilities, convergence of random variables, generating and characteristic functions, weak and strong laws of large numbers, central limit theorem.",
    "prerequisiteText": "MATH 321. Prerequisite grade requirement: 68% in MATH321.",
    "corequisiteText": "",
    "prerequisites": [
      "MATH100"
    ],
    "areas": [
      "math"
    ],
    "source": "courses.json",
    "templateCourseCode": "MATH220"
  },
  {
    "code": "MATH419",
    "name": "Stochastic Processes",
    "credits": 3,
    "creditsText": "3",
    "department": "Mathematics",
    "description": "Random walks, Markov chains, branching processes, Poisson processes, continuous time Markov chains, martingales, Brownian motion.",
    "prerequisiteText": "MATH 418.",
    "corequisiteText": "",
    "prerequisites": [
      "MATH100"
    ],
    "areas": [
      "math"
    ],
    "source": "courses.json",
    "templateCourseCode": "MATH220"
  },
  {
    "code": "MATH420",
    "name": "Real Analysis I",
    "credits": 3,
    "creditsText": "3",
    "department": "Mathematics",
    "description": "Sigma-algebras, Lebesgue measure, Borel measures, measurable functions, integration, convergence theorems, Lp spaces, Holder and Minkowski inequalities, Lebesgue and/or Radon-Nikodym differentiation.",
    "prerequisiteText": "MATH 321. Prerequisite grade requirement: 68% in MATH321.",
    "corequisiteText": "",
    "prerequisites": [
      "MATH100"
    ],
    "areas": [
      "math"
    ],
    "source": "courses.json",
    "templateCourseCode": "MATH220"
  },
  {
    "code": "MATH421",
    "name": "Real Analysis II",
    "credits": 3,
    "creditsText": "3",
    "department": "Mathematics",
    "description": "Banach spaces, linear operators, bounded and compact operators, strong, weak, and weak* topology. Hahn-Banach, open mapping, and closed graph theorems. Hilbert spaces, symmetric and self-adjoint operators, spectral theory for bounded operators.",
    "prerequisiteText": "MATH 420.",
    "corequisiteText": "",
    "prerequisites": [
      "MATH100"
    ],
    "areas": [
      "math"
    ],
    "source": "courses.json",
    "templateCourseCode": "MATH220"
  },
  {
    "code": "MATH422",
    "name": "Fields and Galois Theory",
    "credits": 3,
    "creditsText": "3",
    "department": "Mathematics",
    "description": "Field extensions, the Galois correspondence, finite fields, insolvability in radicals, ruler and compass constructions, additional topics chosen by instructor.",
    "prerequisiteText": "MATH 323.",
    "corequisiteText": "",
    "prerequisites": [
      "MATH100"
    ],
    "areas": [
      "math"
    ],
    "source": "courses.json",
    "templateCourseCode": "MATH220"
  },
  {
    "code": "MATH423",
    "name": "Commutative Algebra",
    "credits": 3,
    "creditsText": "3",
    "department": "Mathematics",
    "description": "Commutative algebra; homological algebra or representation theory of finite groups.",
    "prerequisiteText": "MATH 323 and a score of 68% or higher in one of MATH 412, MATH 422.",
    "corequisiteText": "",
    "prerequisites": [
      "MATH100"
    ],
    "areas": [
      "math"
    ],
    "source": "courses.json",
    "templateCourseCode": "MATH220"
  },
  {
    "code": "MATH424",
    "name": "Classical Differential Geometry",
    "credits": 3,
    "creditsText": "3",
    "department": "Mathematics",
    "description": "The differential geometry of curves and surfaces in three-dimensional Euclidean space. Mean curvature and Gaussian curvature. Geodesics. Gauss's Theorema Egregium.",
    "prerequisiteText": "Either (a) a score of 68% or higher in MATH 223 or (b) a score of 80% or higher in one of MATH 152, MATH 221; and either (a) a score of 68% or higher in MATH 227 or (b) a score of 80% or higher in one of MATH 217, MATH 254, MATH 264, MATH 317.",
    "corequisiteText": "",
    "prerequisites": [
      "MATH100"
    ],
    "areas": [
      "math"
    ],
    "source": "courses.json",
    "templateCourseCode": "MATH220"
  },
  {
    "code": "MATH425",
    "name": "Introduction to Modern Differential Geometry",
    "credits": 3,
    "creditsText": "3",
    "department": "Mathematics",
    "description": "Smooth manifolds, smooth maps, immersions and submersions, vector fields, vector bundles, tangent and cotangent bundles, tensors and differential forms, orientation of manifolds, integration of forms, and selected topics.",
    "prerequisiteText": "One of MATH 221, MATH 223 and one of MATH 217, MATH 227, MATH 254, MATH 264, MATH 317 and one of MATH 319, MATH 320.",
    "corequisiteText": "",
    "prerequisites": [
      "MATH100"
    ],
    "areas": [
      "math"
    ],
    "source": "courses.json",
    "templateCourseCode": "MATH220"
  },
  {
    "code": "MATH426",
    "name": "Introduction to Topology",
    "credits": 3,
    "creditsText": "3",
    "department": "Mathematics",
    "description": "General topology, combinatorial topology, fundamental group and covering spaces, topics chosen by the instructor.",
    "prerequisiteText": "All of MATH 321, MATH 322. Prerequisite grade requirement: 68% in MATH322,MATH321.",
    "corequisiteText": "",
    "prerequisites": [
      "MATH100"
    ],
    "areas": [
      "math"
    ],
    "source": "courses.json",
    "templateCourseCode": "MATH220"
  },
  {
    "code": "MATH427",
    "name": "Topics in Topology",
    "credits": 3,
    "creditsText": "3",
    "department": "Mathematics",
    "description": "Homology theory, homotopy theory, manifolds, and other topics chosen by the instructor.",
    "prerequisiteText": "MATH 426.",
    "corequisiteText": "",
    "prerequisites": [
      "MATH100"
    ],
    "areas": [
      "math"
    ],
    "source": "courses.json",
    "templateCourseCode": "MATH220"
  },
  {
    "code": "MATH428",
    "name": "Mathematical Classical Mechanics I",
    "credits": 3,
    "creditsText": "3",
    "department": "Mathematics",
    "description": "Newton's equation, conservation laws, the Euler-Lagrange equation; Hamilton's principle of least action, Hamilton's equations, Lagrangian mechanics on manifolds.",
    "prerequisiteText": "One of MATH 215, MATH 255, MATH 256, MATH 258 and one of PHYS 216, PHYS 306, ENPH 270",
    "corequisiteText": "",
    "prerequisites": [
      "MATH100"
    ],
    "areas": [
      "math"
    ],
    "source": "courses.json",
    "templateCourseCode": "MATH220"
  },
  {
    "code": "MATH430",
    "name": "Special Topics in Analysis",
    "credits": 2,
    "creditsText": "2-6",
    "department": "Mathematics",
    "description": "The student should consult the Mathematics Department for the particular topics offered in a given year.",
    "prerequisiteText": "",
    "corequisiteText": "",
    "prerequisites": [
      "MATH100"
    ],
    "areas": [
      "math"
    ],
    "source": "courses.json",
    "templateCourseCode": "MATH220"
  },
  {
    "code": "MATH432",
    "name": "Special Topics in Algebra",
    "credits": 2,
    "creditsText": "2-6",
    "department": "Mathematics",
    "description": "The student should consult the Mathematics Department for the particular topics offered in a given year.",
    "prerequisiteText": "",
    "corequisiteText": "",
    "prerequisites": [
      "MATH100"
    ],
    "areas": [
      "math"
    ],
    "source": "courses.json",
    "templateCourseCode": "MATH220"
  },
  {
    "code": "MATH437",
    "name": "Number Theory",
    "credits": 3,
    "creditsText": "3",
    "department": "Mathematics",
    "description": "Divisibility, congruences, Diophantine equations, arithmetic functions, quadratic reciprocity, advanced topics. Please consult the Faculty of Science Credit Exclusion List: https://vancouver.calendar.ubc.ca/faculties-colleges-and-schools/facult… .",
    "prerequisiteText": "",
    "corequisiteText": "One of MATH 320 (waived for students with a score of 80% or higher in MATH 319), MATH 322.",
    "prerequisites": [
      "MATH100"
    ],
    "areas": [
      "math"
    ],
    "source": "courses.json",
    "templateCourseCode": "MATH220"
  },
  {
    "code": "MATH440",
    "name": "Complex Analysis",
    "credits": 3,
    "creditsText": "3",
    "department": "Mathematics",
    "description": "The residue theorem, the argument principle, conformal mapping, the maximum modulus principle, harmonic functions, representation of functions by integrals, series, and products. Other topics at the discretion of the instructor.",
    "prerequisiteText": "MATH 300 and either (a) a score of 68% or higher in MATH 320 or (b) a score of 80% or higher in MATH 319 and permission of the Department Head in Mathematics.",
    "corequisiteText": "",
    "prerequisites": [
      "MATH100"
    ],
    "areas": [
      "math"
    ],
    "source": "courses.json",
    "templateCourseCode": "MATH220"
  },
  {
    "code": "MATH441",
    "name": "Mathematical Modelling: Discrete Optimization Problems",
    "credits": 3,
    "creditsText": "3",
    "department": "Mathematics",
    "description": "Formulation of real-world optimization problems using techniques such as linear programming, network flows, integer programming, dynamic programming. Solution by appropriate software.",
    "prerequisiteText": "MATH 340.",
    "corequisiteText": "",
    "prerequisites": [
      "MATH100"
    ],
    "areas": [
      "math"
    ],
    "source": "courses.json",
    "templateCourseCode": "MATH220"
  },
  {
    "code": "MATH442",
    "name": "Graphs and Networks",
    "credits": 3,
    "creditsText": "3",
    "department": "Mathematics",
    "description": "Graph theory, emphasizing trees, tree growing algorithms, and proof techniques. Other topics chosen from shortest paths, maximum flows, minimum cost flows, matchings, and graph colouring.",
    "prerequisiteText": "3rd year standing and one of MATH 220, MATH 223, MATH 226 or CPSC 221.",
    "corequisiteText": "",
    "prerequisites": [
      "MATH100"
    ],
    "areas": [
      "math"
    ],
    "source": "courses.json",
    "templateCourseCode": "MATH220"
  },
  {
    "code": "MATH443",
    "name": "Graph Theory",
    "credits": 3,
    "creditsText": "3",
    "department": "Mathematics",
    "description": "Introductory course in mostly non-algorithmic topics including: planarity and Kuratowski's theorem, graph colouring, graph minors, random graphs, cycles in graphs, Ramsey theory, extremal graph theory. Proofs emphasized. Intended for Honours students.",
    "prerequisiteText": "A score of 68% or higher in one of MATH 220, MATH 223, MATH 226, CPSC 121. And 6 credits of MATH numbered 300 or above.",
    "corequisiteText": "",
    "prerequisites": [
      "MATH100"
    ],
    "areas": [
      "math"
    ],
    "source": "courses.json",
    "templateCourseCode": "MATH220"
  },
  {
    "code": "MATH444",
    "name": "Mathematical Research and Writing",
    "credits": 3,
    "creditsText": "3",
    "department": "Mathematics",
    "description": "Current research topics in pure and applied mathematics are explored at the undergraduate level. Technical communication and research skills are developed.",
    "prerequisiteText": "One of MATH 220, MATH 223, MATH 226, and 6 credits of MATH courses numbered 300 or higher.",
    "corequisiteText": "",
    "prerequisites": [
      "MATH100"
    ],
    "areas": [
      "math"
    ],
    "source": "courses.json",
    "templateCourseCode": "MATH220"
  },
  {
    "code": "MATH446",
    "name": "Topics in the History of Mathematics I",
    "credits": 3,
    "creditsText": "3",
    "department": "Mathematics",
    "description": "Historical development of concepts and techniques in areas chosen from Geometry, Number Theory, Algebra, Calculus, Probability, Analysis. The focus is on historically significant writings of important contributors and on famous problems of Mathematics.",
    "prerequisiteText": "21 credits of MATH.",
    "corequisiteText": "",
    "prerequisites": [
      "MATH100"
    ],
    "areas": [
      "math"
    ],
    "source": "courses.json",
    "templateCourseCode": "MATH220"
  },
  {
    "code": "MATH448",
    "name": "Directed Studies in Mathematics",
    "credits": 1,
    "creditsText": "1-6",
    "department": "Mathematics",
    "description": "Introduction to the methods of mathematical research through an exploration of a mathematical topic under the supervision of a faculty member. Written report required.",
    "prerequisiteText": "Third- or fourth-year class standing and permission of the Department Head.",
    "corequisiteText": "",
    "prerequisites": [
      "MATH100"
    ],
    "areas": [
      "math"
    ],
    "source": "courses.json",
    "templateCourseCode": "MATH220"
  },
  {
    "code": "MATH449",
    "name": "Honours Reading",
    "credits": 1,
    "creditsText": "1-6",
    "department": "Mathematics",
    "description": "Independent reading and research on a mathematical topic under the supervision of a faculty member. Intended for Honours students. Written report required.",
    "prerequisiteText": "Permission of the Department Head.",
    "corequisiteText": "",
    "prerequisites": [
      "MATH100"
    ],
    "areas": [
      "math"
    ],
    "source": "courses.json",
    "templateCourseCode": "MATH220"
  },
  {
    "code": "MATH450",
    "name": "Asymptotic and Perturbation Methods",
    "credits": 3,
    "creditsText": "3",
    "department": "Mathematics",
    "description": "Asymptotic expansions. Asymptotic evaluation of integrals; WKBJ methods. Regular and singular expansions. Boundary layer theory; matched asymptotic expansions. Multiple scale techniques.",
    "prerequisiteText": "MATH 400.",
    "corequisiteText": "",
    "prerequisites": [
      "MATH100"
    ],
    "areas": [
      "math"
    ],
    "source": "courses.json",
    "templateCourseCode": "MATH220"
  },
  {
    "code": "MATH461",
    "name": "Projects in Mathematical Modelling",
    "credits": 3,
    "creditsText": "3",
    "department": "Mathematics",
    "description": "Computational methods for mathematical modelling. Numerical methods for partial differential equations, stochastic processes, and data-driven models. Includes student-directed projects on current research and applications.",
    "prerequisiteText": "Either (a) MATH 360 or (b) one of MATH 210, CPSC 203, CPSC 210 and one of MATH 345, MATH 361.",
    "corequisiteText": "",
    "prerequisites": [
      "MATH100"
    ],
    "areas": [
      "math"
    ],
    "source": "courses.json",
    "templateCourseCode": "MATH220"
  },
  {
    "code": "MATH462",
    "name": "Projects in Mathematical Biology",
    "credits": 3,
    "creditsText": "3",
    "department": "Mathematics",
    "description": "Development and analysis of mathematical models for complex systems in ecology, evolution, cell biology, neurophysiology, and other biological and medical disciplines.",
    "prerequisiteText": "One of MATH 361, MATH 345.",
    "corequisiteText": "",
    "prerequisites": [
      "MATH100"
    ],
    "areas": [
      "math"
    ],
    "source": "courses.json",
    "templateCourseCode": "MATH220"
  },
  {
    "code": "CHEM100",
    "name": "Foundations of Chemistry",
    "credits": 3,
    "creditsText": "3",
    "department": "Chemistry",
    "description": "Atomic and molecular properties, chemical reactions, bonding, nomenclature, kinetics, equilibrium processes, acids and bases, oxidation and reduction. Intended for students who do not receive a satisfactory score on the UBC Chemistry Basic Skills Test, and need to establish a foundation of chemistry skills before proceeding to other first year chemistry courses. .",
    "prerequisiteText": "Not open to students with credit for Chemistry 12. Permission of the department head. This course is not eligible for Credit/D/Fail grading.",
    "corequisiteText": "",
    "prerequisites": [],
    "areas": [
      "chemistry",
      "programming"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS101"
  },
  {
    "code": "CHEM110",
    "name": "Structure, Bonding and Equilibrium in Chemistry (Lecture)",
    "credits": 3,
    "creditsText": "3",
    "department": "Chemistry",
    "description": "Fundamentals of bonding theories, structural chemistry and equilibrium with applications relevant to modern society. .",
    "prerequisiteText": "Not open to students with credit for Chemistry 12. A satisfactory score on the UBC Chemistry Basic Skills Test. This course is not eligible for Credit/D/Fail grading.",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC110"
    ],
    "areas": [
      "chemistry",
      "programming",
      "algorithms"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS201"
  },
  {
    "code": "CHEM111",
    "name": "Structure, Bonding, and Equilibrium in Chemistry",
    "credits": 4,
    "creditsText": "4",
    "department": "Chemistry",
    "description": "Fundamentals of bonding theories, structural chemistry and equilibrium with applications relevant to modern society.",
    "prerequisiteText": "Not open to students with credit for CHEM 12. A satisfactory score on the UBC Chemistry Basic Skills Test.",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC110"
    ],
    "areas": [
      "chemistry",
      "programming",
      "algorithms"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS201"
  },
  {
    "code": "CHEM115",
    "name": "Introductory Chemical Laboratory I",
    "credits": 1,
    "creditsText": "1",
    "department": "Chemistry",
    "description": "An introduction to the principles and techniques of the chemistry laboratory.",
    "prerequisiteText": "One of CHEM 110, CHEM 120.",
    "corequisiteText": "",
    "prerequisites": [
      "BUS101"
    ],
    "areas": [
      "chemistry",
      "business",
      "management"
    ],
    "source": "courses.json",
    "templateCourseCode": "BUS201"
  },
  {
    "code": "CHEM120",
    "name": "Structure and Bonding in Chemistry (Lecture)",
    "credits": 3,
    "creditsText": "3",
    "department": "Chemistry",
    "description": "Fundamentals of bonding theories, structural chemistry, with applications relevant to modern society. .",
    "prerequisiteText": "One of CHEM 12, CHEM 100. This course is not eligible for Credit/D/Fail grading.",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC110"
    ],
    "areas": [
      "chemistry",
      "programming",
      "algorithms"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS201"
  },
  {
    "code": "CHEM121",
    "name": "Structure and Bonding in Chemistry",
    "credits": 4,
    "creditsText": "4",
    "department": "Chemistry",
    "description": "Fundamentals of bonding theories and structural chemistry, with applications relevant to modern society.",
    "prerequisiteText": "One of CHEM 12, CHEM 100. Equivalency: CHEM 141",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC110"
    ],
    "areas": [
      "chemistry",
      "programming",
      "algorithms"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS201"
  },
  {
    "code": "CHEM123",
    "name": "Thermodynamics, Kinetics and Organic Chemistry",
    "credits": 4,
    "creditsText": "4",
    "department": "Chemistry",
    "description": "Fundamentals of chemical reactivity: thermodynamics; kinetics; organic chemistry, including stereochemistry; applications relevant to modern society.",
    "prerequisiteText": "One of CHEM 111, CHEM 121, CHEM 141.",
    "corequisiteText": "",
    "prerequisites": [],
    "areas": [
      "chemistry",
      "programming"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS101"
  },
  {
    "code": "CHEM130",
    "name": "Thermodynamics, Kinetics and Organic Chemistry (Lecture)",
    "credits": 3,
    "creditsText": "3",
    "department": "Chemistry",
    "description": "Fundamentals of chemical reactivity: thermodynamics; kinetics; organic chemistry, including stereochemistry; applications relevant to modern society.",
    "prerequisiteText": "One of CHEM 110, CHEM 111, CHEM 120, CHEM 121, CHEM 141.",
    "corequisiteText": "",
    "prerequisites": [],
    "areas": [
      "chemistry",
      "programming"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS101"
  },
  {
    "code": "CHEM135",
    "name": "Introductory Chemical Laboratory II",
    "credits": 1,
    "creditsText": "1",
    "department": "Chemistry",
    "description": "An introduction to the principles and techniques of the chemistry laboratory.",
    "prerequisiteText": "One of CHEM 111, CHEM 115, CHEM 121, CHEM 141.",
    "corequisiteText": "",
    "prerequisites": [
      "BUS101"
    ],
    "areas": [
      "chemistry",
      "business",
      "management"
    ],
    "source": "courses.json",
    "templateCourseCode": "BUS201"
  },
  {
    "code": "CHEM141",
    "name": "Chemical Bonding, Molecular Structure and Properties for Lab Sciences",
    "credits": 4,
    "creditsText": "4",
    "department": "Chemistry",
    "description": "Bonding theories, their predictions, experimental tests, and consequences regarding chemical structure and observable properties. Applications relevant to modern society are emphasized. For students interested in lab-focused sciences such as Chemistry, Physics, Biochemistry, Microbiology and related disciplines. Restricted to students in the Faculty of Science.",
    "prerequisiteText": "One of CHEM 12, CHEM 100. Equivalency: CHEM121",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC110"
    ],
    "areas": [
      "chemistry",
      "programming",
      "algorithms"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS201"
  },
  {
    "code": "CHEM154",
    "name": "Chemistry for Engineering",
    "credits": 3,
    "creditsText": "3",
    "department": "Chemistry",
    "description": "Chemical bonding, properties of matter. Chemical thermodynamics with applications to phase equilibria, aqueous equilibria and electrochemistry. Processes at surfaces. [3-3*-0]",
    "prerequisiteText": "CHEM 12.",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC221"
    ],
    "areas": [
      "chemistry",
      "programming",
      "teamwork"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS350"
  },
  {
    "code": "CHEM203",
    "name": "Introduction to Organic Chemistry",
    "credits": 4,
    "creditsText": "4",
    "department": "Chemistry",
    "description": "Structure, bonding and physical properties of aliphatic and aromatic compounds; mechanistic analysis of chemical reactivity of common functional groups with a focus on carbon-heteroatom bond formation; functional group interconversion and oxidation/reduction reactions. Only open to students in Chemistry or Biochemistry specializations. Credit will be granted for only one of CHEM 203 or CHEM 223, CHEM 225 or CHEM 233, 235.",
    "prerequisiteText": "Either (a) CHEM 123 or (b) all of CHEM 130, CHEM 135 or (c) SCIE 001.",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC110"
    ],
    "areas": [
      "chemistry",
      "programming",
      "algorithms"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS201"
  },
  {
    "code": "CHEM205",
    "name": "Physical Chemistry",
    "credits": 3,
    "creditsText": "3",
    "department": "Chemistry",
    "description": "Chemical kinetics and thermodynamics and spectroscopy useful in biological, medical, agricultural, earth, and related sciences.",
    "prerequisiteText": "Either (a) SCIE 001 or (b) one of MATH 100, MATH 102, MATH 104, MATH 110, MATH 120, MATH 180, MATH 184, MATH_O 100 and one of CHEM 130, CHEM 123, CHEM 154.",
    "corequisiteText": "",
    "prerequisites": [
      "MATH100"
    ],
    "areas": [
      "chemistry",
      "math",
      "theory"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS210"
  },
  {
    "code": "CHEM208",
    "name": "Coordination Chemistry",
    "credits": 3,
    "creditsText": "3",
    "department": "Chemistry",
    "description": "Fundamental concepts and principles governing bonding and reactivity of coordination complexes: ligand field theory; symmetry and point groups; frontier molecular orbital theory. .",
    "prerequisiteText": "One of CHEM 130, CHEM 123, SCIE 001. This course is not eligible for Credit/D/Fail grading.",
    "corequisiteText": "",
    "prerequisites": [
      "BUS101"
    ],
    "areas": [
      "chemistry",
      "business",
      "management"
    ],
    "source": "courses.json",
    "templateCourseCode": "BUS201"
  },
  {
    "code": "CHEM210",
    "name": "Introduction to Chemical Analysis (Lecture)",
    "credits": 3,
    "creditsText": "3",
    "department": "Chemistry",
    "description": "Quantitative chemical analysis; chemical and physical principles of spectrophotometry, potentiometry, and chromatography.",
    "prerequisiteText": "One of CHEM 123, CHEM 130, SCIE 001. This course is not eligible for Credit/D/Fail grading.",
    "corequisiteText": "",
    "prerequisites": [
      "BUS101"
    ],
    "areas": [
      "chemistry",
      "business",
      "management"
    ],
    "source": "courses.json",
    "templateCourseCode": "BUS201"
  },
  {
    "code": "CHEM211",
    "name": "Introduction to Chemical Analysis",
    "credits": 4,
    "creditsText": "4",
    "department": "Chemistry",
    "description": "Quantitative chemical analysis; chemical and physical principles of spectrophotometry, potentiometry, and chromatography. .",
    "prerequisiteText": "Either (a) CHEM 123 or (b) all of CHEM 130, CHEM 135 or (c) SCIE 001. This course is not eligible for Credit/D/Fail grading.",
    "corequisiteText": "",
    "prerequisites": [
      "BUS101"
    ],
    "areas": [
      "chemistry",
      "business",
      "management"
    ],
    "source": "courses.json",
    "templateCourseCode": "BUS201"
  },
  {
    "code": "CHEM213",
    "name": "Organic Chemistry",
    "credits": 3,
    "creditsText": "3",
    "department": "Chemistry",
    "description": "Spectroscopy of organic compounds. Mechanistic analysis of chemical reactivity of common functional groups with a focus on carbon-carbon bond formation; functional group interconversion. Preference will be given to students in Chemistry or Biochemistry specializations.",
    "prerequisiteText": "Either (a) one of CHEM 203, CHEM 223, CHEM_O 203 or (b) a score of 76% or higher in CHEM 233 or CHEM_O 213.",
    "corequisiteText": "",
    "prerequisites": [],
    "areas": [
      "chemistry",
      "accounting"
    ],
    "source": "courses.json",
    "templateCourseCode": "ACC201"
  },
  {
    "code": "CHEM215",
    "name": "Introductory Analytical Chemical Laboratory",
    "credits": 1,
    "creditsText": "1",
    "department": "Chemistry",
    "description": "An introduction to the principles and techniques in the analytical chemistry laboratory.",
    "prerequisiteText": "CHEM 210 and one of CHEM 123, CHEM 135.",
    "corequisiteText": "",
    "prerequisites": [
      "BUS101"
    ],
    "areas": [
      "chemistry",
      "business",
      "management"
    ],
    "source": "courses.json",
    "templateCourseCode": "BUS201"
  },
  {
    "code": "CHEM218",
    "name": "Fundamentals of Reactivity in Inorganic Chemistry",
    "credits": 3,
    "creditsText": "3",
    "department": "Chemistry",
    "description": "Chemical reactivity of inorganic systems: oxidation/reduction chemistry; multiply-bonded systems; main group chemistry. .",
    "prerequisiteText": "CHEM 208. This course is not eligible for Credit/D/Fail grading.",
    "corequisiteText": "",
    "prerequisites": [
      "PSY101"
    ],
    "areas": [
      "chemistry",
      "psychology",
      "research"
    ],
    "source": "courses.json",
    "templateCourseCode": "PSY210"
  },
  {
    "code": "CHEM223",
    "name": "Introduction to Organic Chemistry (Lecture)",
    "credits": 3,
    "creditsText": "3",
    "department": "Chemistry",
    "description": "Structure, bonding and physical properties of aliphatic and aromatic compounds; mechanistic analysis of chemical reactivity of common functional groups with a focus on carbon-heteroatom bond formation; functional group interconversion and oxidation/reduction reactions. Only open to students in Chemistry or Biochemistry specializations. Students should consult the Credit Exclusion List for credit exclusions relating to second-year organic chemistry courses.",
    "prerequisiteText": "One of CHEM 123, CHEM 130, SCIE 001.",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC110"
    ],
    "areas": [
      "chemistry",
      "programming",
      "algorithms"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS201"
  },
  {
    "code": "CHEM225",
    "name": "Introductory Synthetic Chemical Laboratory",
    "credits": 1,
    "creditsText": "1",
    "department": "Chemistry",
    "description": "An introduction to the principles and techniques in the synthetic organic and inorganic chemistry laboratory.",
    "prerequisiteText": "One of CHEM 123, CHEM 135.",
    "corequisiteText": "",
    "prerequisites": [
      "BUS101"
    ],
    "areas": [
      "chemistry",
      "business",
      "management"
    ],
    "source": "courses.json",
    "templateCourseCode": "BUS201"
  },
  {
    "code": "CHEM233",
    "name": "Organic Chemistry for the Biological Sciences",
    "credits": 3,
    "creditsText": "3",
    "department": "Chemistry",
    "description": "Reactions and properties of carbonyl compounds, carbohydrates, amino acids, nucleic acids. Credit will be granted for only one of CHEM 233 or CHEM 203 or CHEM 223.",
    "prerequisiteText": "One of CHEM 123, CHEM 130, SCIE 001.",
    "corequisiteText": "",
    "prerequisites": [
      "MATH100"
    ],
    "areas": [
      "chemistry",
      "math",
      "theory"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS210"
  },
  {
    "code": "CHEM235",
    "name": "Organic Chemistry Laboratory",
    "credits": 1,
    "creditsText": "1",
    "department": "Chemistry",
    "description": "Techniques of organic chemistry. To be taken in conjunction with, or in the term following, CHEM 233. Credit will be granted for only one of CHEM 235 or CHEM 203.",
    "prerequisiteText": "One of CHEM 123, CHEM 135, SCIE 001",
    "corequisiteText": "",
    "prerequisites": [
      "MATH100"
    ],
    "areas": [
      "chemistry",
      "math",
      "theory"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS210"
  },
  {
    "code": "CHEM245",
    "name": "Intermediate Synthetic Chemistry Laboratory",
    "credits": 1,
    "creditsText": "1",
    "department": "Chemistry",
    "description": "Techniques in synthetic organic and inorganic chemistry. Open only to students in Chemistry or Biochemistry specializations. .",
    "prerequisiteText": "Either (a) CHEM 203 or (b) all of CHEM 223, CHEM 225 or (c) all of CHEM 233, CHEM 235",
    "corequisiteText": "",
    "prerequisites": [
      "MATH100"
    ],
    "areas": [
      "chemistry",
      "math",
      "theory"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS210"
  },
  {
    "code": "CHEM250",
    "name": "Inorganic Chemistry for Engineers",
    "credits": 3,
    "creditsText": "3",
    "department": "Chemistry",
    "description": "Chemistry of selected groups of inorganic compounds, considered in relation to industrial processes.",
    "prerequisiteText": "One of CHEM 123, CHEM 130, CHEM 154, SCIE 001.",
    "corequisiteText": "",
    "prerequisites": [],
    "areas": [
      "chemistry",
      "accounting"
    ],
    "source": "courses.json",
    "templateCourseCode": "ACC201"
  },
  {
    "code": "CHEM251",
    "name": "Physical Chemistry for Engineers",
    "credits": 3,
    "creditsText": "3",
    "department": "Chemistry",
    "description": "States of matter, properties of gases, phase diagrams. Elementary chemical thermodynamics and kinetics. Reaction equilibria.",
    "prerequisiteText": "One of CHEM 123, CHEM 130, CHEM 154, SCIE 001.",
    "corequisiteText": "",
    "prerequisites": [],
    "areas": [
      "chemistry",
      "accounting"
    ],
    "source": "courses.json",
    "templateCourseCode": "ACC201"
  },
  {
    "code": "CHEM260",
    "name": "Organic Chemistry for Engineers",
    "credits": 3,
    "creditsText": "3",
    "department": "Chemistry",
    "description": "A description of the properties and reactions of organic compounds.",
    "prerequisiteText": "One of CHEM 123, CHEM 130, CHEM 154, SCIE 001.",
    "corequisiteText": "",
    "prerequisites": [],
    "areas": [
      "chemistry",
      "accounting"
    ],
    "source": "courses.json",
    "templateCourseCode": "ACC201"
  },
  {
    "code": "CHEM300",
    "name": "Communicating Chemistry",
    "credits": 3,
    "creditsText": "3",
    "department": "Chemistry",
    "description": "Effective argumentation and communication skills in chemistry. Only open to students in a Chemistry specialization. .",
    "prerequisiteText": "Third year standing. This course is not eligible for Credit/D/Fail grading.",
    "corequisiteText": "",
    "prerequisites": [
      "BUS101"
    ],
    "areas": [
      "chemistry",
      "marketing"
    ],
    "source": "courses.json",
    "templateCourseCode": "BUS310"
  },
  {
    "code": "CHEM301",
    "name": "Aqueous Environmental Chemistry",
    "credits": 3,
    "creditsText": "3",
    "department": "Chemistry",
    "description": "Properties and composition of natural waters, including gas and solid equilibria, pH and acidification, redox chemistry, complexation, corrosion, ion exchange, colloids and microbial transformations.",
    "prerequisiteText": "One of CHEM 123, CHEM 130, CHBE 220. and Third year standing.",
    "corequisiteText": "",
    "prerequisites": [
      "BUS101"
    ],
    "areas": [
      "chemistry",
      "marketing"
    ],
    "source": "courses.json",
    "templateCourseCode": "BUS310"
  },
  {
    "code": "CHEM302",
    "name": "Atmospheric Environmental Chemistry",
    "credits": 3,
    "creditsText": "3",
    "department": "Chemistry",
    "description": "Introduction to structure, composition and chemical processes occurring in Earth's atmosphere, including interactions with solar radiation, stratospheric ozone layer, photochemical smog and acid rain.",
    "prerequisiteText": "One of CHEM 123, CHEM 130, CHBE 220. and Third year standing.",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC110"
    ],
    "areas": [
      "chemistry",
      "programming",
      "algorithms"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS201"
  },
  {
    "code": "CHEM304",
    "name": "Fundamentals of Thermodynamics and Statistical Mechanics",
    "credits": 3,
    "creditsText": "3",
    "department": "Chemistry",
    "description": "Principles of chemical thermodynamics; introduction to statistical mechanics; phase equilibria; electrochemistry.",
    "prerequisiteText": "One of CHEM 123, CHEM 130 and one of MATH 200, MATH 217, MATH 226, MATH 253.",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC221"
    ],
    "areas": [
      "chemistry",
      "systems",
      "networking"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS360"
  },
  {
    "code": "CHEM305",
    "name": "Biophysical Chemistry",
    "credits": 3,
    "creditsText": "3",
    "department": "Chemistry",
    "description": "Diffusion and transport phenomena; interaction of radiation and matter. Methods for determining molecular weight, size, and shape of molecules in solution.",
    "prerequisiteText": "One of MATH 200, MATH 217, MATH 226, MATH 253 and either (a) a score of 76% or higher in CHEM 205 or (b) CHEM 304 or (c) PHYS 203.",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC221",
      "CPSC121"
    ],
    "areas": [
      "chemistry",
      "algorithms",
      "theory"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS301"
  },
  {
    "code": "CHEM311",
    "name": "Instrumental Analytical Chemistry",
    "credits": 3,
    "creditsText": "3",
    "department": "Chemistry",
    "description": "Theory, design, and application of instrumental methods of chemical analysis including spectroscopy, mass spectrometry, electroanalysis, and chemical separations.",
    "prerequisiteText": "One of CHEM 210, CHEM 211.",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC221",
      "CPSC121"
    ],
    "areas": [
      "chemistry",
      "algorithms",
      "theory"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS301"
  },
  {
    "code": "CHEM312",
    "name": "Introduction to Quantum Mechanics and Spectroscopy",
    "credits": 3,
    "creditsText": "3",
    "department": "Chemistry",
    "description": "Principles of quantum mechanics; atomic wavefunctions; angular momentum; spin; atomic term symbols.",
    "prerequisiteText": "One of CHEM 123, SCIE 001 and one of MATH 200, MATH 217, MATH 226, MATH 253.",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC221"
    ],
    "areas": [
      "chemistry",
      "systems",
      "networking"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS360"
  },
  {
    "code": "CHEM313",
    "name": "Advanced Organic Chemistry for the Life Sciences",
    "credits": 3,
    "creditsText": "3",
    "department": "Chemistry",
    "description": "Chemistry of organic substances having particular relevance to the life sciences.",
    "prerequisiteText": "CHEM 213.",
    "corequisiteText": "",
    "prerequisites": [
      "BUS101"
    ],
    "areas": [
      "chemistry",
      "marketing"
    ],
    "source": "courses.json",
    "templateCourseCode": "BUS310"
  },
  {
    "code": "CHEM315",
    "name": "Chemistry Integrated Laboratory I",
    "credits": 1,
    "creditsText": "1",
    "department": "Chemistry",
    "description": "Principles and techniques of modern chemistry applied by integrating experiments chosen from organic, inorganic, physical, and analytical chemistry.",
    "prerequisiteText": "One of CHEM 211, CHEM 215 and all of CHEM 213, CHEM 245.",
    "corequisiteText": "",
    "prerequisites": [
      "BUS101"
    ],
    "areas": [
      "chemistry",
      "marketing"
    ],
    "source": "courses.json",
    "templateCourseCode": "BUS310"
  },
  {
    "code": "CHEM318",
    "name": "Principles of Catalysis",
    "credits": 3,
    "creditsText": "3",
    "department": "Chemistry",
    "description": "Fundamental aspects of chemical catalysis: kinetic models; catalytic processes in biochemistry and industry; emerging topics in catalysis. .",
    "prerequisiteText": "One of CHEM 218, CHEM 250. This course is not eligible for Credit/D/Fail grading.",
    "corequisiteText": "",
    "prerequisites": [
      "BUS101"
    ],
    "areas": [
      "chemistry",
      "marketing"
    ],
    "source": "courses.json",
    "templateCourseCode": "BUS310"
  },
  {
    "code": "CHEM319",
    "name": "Practical Skills for Chemical Research",
    "credits": 1,
    "creditsText": "1",
    "department": "Chemistry",
    "description": "The nature of scientific research; practical skills for chemical research; communicating science. Restricted to Honours students with third year standing and, with permission of the department Head, to Major students with satisfactory third year standing. .",
    "prerequisiteText": "",
    "corequisiteText": "",
    "prerequisites": [
      "PSY101"
    ],
    "areas": [
      "chemistry",
      "psychology",
      "research"
    ],
    "source": "courses.json",
    "templateCourseCode": "PSY210"
  },
  {
    "code": "CHEM325",
    "name": "Integrated Chemistry Laboratory I",
    "credits": 2,
    "creditsText": "2",
    "department": "Chemistry",
    "description": "Principles and techniques of modern chemistry applied by integrating experiments chosen from organic, inorganic, physical, and analytical chemistry. Open only to students in Chemistry specializations.",
    "prerequisiteText": "One of CHEM 211, CHEM 215 and all of CHEM 208, CHEM 213, CHEM 245.",
    "corequisiteText": "",
    "prerequisites": [
      "BUS101"
    ],
    "areas": [
      "chemistry",
      "marketing"
    ],
    "source": "courses.json",
    "templateCourseCode": "BUS310"
  },
  {
    "code": "CHEM327",
    "name": "Introduction to Materials Chemistry",
    "credits": 3,
    "creditsText": "3",
    "department": "Chemistry",
    "description": "Basic principles of materials chemistry: classification; nomenclature; synthetic methods; characterization. .",
    "prerequisiteText": "One of CHEM 208, CHEM 250 and one of CHEM 203, CHEM 223, CHEM 233, CHEM 260. This course is not eligible for Credit/D/Fail grading.",
    "corequisiteText": "",
    "prerequisites": [
      "BUS101"
    ],
    "areas": [
      "chemistry",
      "marketing"
    ],
    "source": "courses.json",
    "templateCourseCode": "BUS310"
  },
  {
    "code": "CHEM329",
    "name": "Research Ethics and Data Analysis Skills",
    "credits": 1,
    "creditsText": "1",
    "department": "Chemistry",
    "description": "Research ethics; data analysis skills for chemical research. Restricted to Honours students with third year standing and, with permission of the department Head, to Major students with satisfactory third year standing. .",
    "prerequisiteText": "",
    "corequisiteText": "",
    "prerequisites": [
      "PSY101"
    ],
    "areas": [
      "chemistry",
      "psychology",
      "research"
    ],
    "source": "courses.json",
    "templateCourseCode": "PSY210"
  },
  {
    "code": "CHEM330",
    "name": "Advanced Organic Chemistry",
    "credits": 3,
    "creditsText": "3",
    "department": "Chemistry",
    "description": "Application of carbonyl group chemistry, cyclization reactions, conformational analysis and rearrangement reactions in organic synthesis.",
    "prerequisiteText": "CHEM 213.",
    "corequisiteText": "",
    "prerequisites": [
      "BUS201"
    ],
    "areas": [
      "chemistry",
      "management",
      "psychology"
    ],
    "source": "courses.json",
    "templateCourseCode": "BUS330"
  },
  {
    "code": "CHEM335",
    "name": "Chemistry Integrated Laboratory II",
    "credits": 1,
    "creditsText": "1",
    "department": "Chemistry",
    "description": "Further development of principles and techniques of modern chemistry applied by integrating experiments chosen from organic, inorganic, physical, and analytical chemistry.",
    "prerequisiteText": "CHEM 315.",
    "corequisiteText": "",
    "prerequisites": [
      "BUS101"
    ],
    "areas": [
      "chemistry",
      "marketing"
    ],
    "source": "courses.json",
    "templateCourseCode": "BUS310"
  },
  {
    "code": "CHEM341",
    "name": "Global Challenges: A Chemical Perspective",
    "credits": 3,
    "creditsText": "3",
    "department": "Chemistry",
    "description": "Importance of chemistry in society. Detailed case studies drawn from modern chemistry: human health, energy, commodity chemicals, materials, green chemistry, agriculture.",
    "prerequisiteText": "one of CHEM 203, CHEM 211, CHEM 223, CHEM 233, CHEM 260.",
    "corequisiteText": "",
    "prerequisites": [
      "PSY201"
    ],
    "areas": [
      "chemistry",
      "psychology",
      "cognition"
    ],
    "source": "courses.json",
    "templateCourseCode": "PSY340"
  },
  {
    "code": "CHEM345",
    "name": "Integrated Chemistry Laboratory II",
    "credits": 2,
    "creditsText": "2",
    "department": "Chemistry",
    "description": "Further development of principles and techniques of modern chemistry applied by integrating experiments chosen from organic, inorganic, physical, and analytical chemistry. Open only to students in Chemistry Major or Honours specializations.",
    "prerequisiteText": "CHEM 325.",
    "corequisiteText": "",
    "prerequisites": [
      "BUS101"
    ],
    "areas": [
      "chemistry",
      "marketing"
    ],
    "source": "courses.json",
    "templateCourseCode": "BUS310"
  },
  {
    "code": "CHEM355",
    "name": "Chemistry Integrated Laboratory",
    "credits": 1,
    "creditsText": "1",
    "department": "Chemistry",
    "description": "Principles and techniques of modern chemistry for students in Combined Major in Science or a Minor in Chemistry integrating experiments from organic, inorganic, physical and analytical chemistry.",
    "prerequisiteText": "One of CHEM 203, CHEM 211, CHEM 235.",
    "corequisiteText": "",
    "prerequisites": [
      "BUS101"
    ],
    "areas": [
      "chemistry",
      "marketing"
    ],
    "source": "courses.json",
    "templateCourseCode": "BUS310"
  },
  {
    "code": "CHEM401",
    "name": "Principles of Spectroscopy",
    "credits": 3,
    "creditsText": "3",
    "department": "Chemistry",
    "description": "Rotational, vibrational, electronic and magnetic resonance spectroscopy and associated techniques; group theory.",
    "prerequisiteText": "One of MATH 111, MATH 131, MATH 152, MATH 221, MATH 223 and one of CHEM 312, PHYS 304.",
    "corequisiteText": "",
    "prerequisites": [
      "BUS101"
    ],
    "areas": [
      "chemistry",
      "marketing"
    ],
    "source": "courses.json",
    "templateCourseCode": "BUS310"
  },
  {
    "code": "CHEM402",
    "name": "Diffraction Methods",
    "credits": 3,
    "creditsText": "3",
    "department": "Chemistry",
    "description": "Crystal structures; point and space groups; X-ray diffraction, neutron diffraction, electron diffraction of gases and surfaces. Credit will be granted for only one of CHEM 402 or CHEM 514.",
    "prerequisiteText": "CHEM 208.",
    "corequisiteText": "",
    "prerequisites": [
      "PSY101"
    ],
    "areas": [
      "chemistry",
      "psychology",
      "research"
    ],
    "source": "courses.json",
    "templateCourseCode": "PSY210"
  },
  {
    "code": "CHEM403",
    "name": "Surface Chemistry and Surface Analysis",
    "credits": 3,
    "creditsText": "3",
    "department": "Chemistry",
    "description": "Surfaces and phenomena occurring at surfaces and interfaces: adsorption, thermodynamic treatments, technological applications. Methods for characterization and modification of surfaces. Dynamic electrochemistry and its application to understanding fuel cells.",
    "prerequisiteText": "CHEM 304 and one of MATH 200, MATH 217, MATH 226, MATH 253.",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC221"
    ],
    "areas": [
      "chemistry",
      "programming",
      "web"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS420"
  },
  {
    "code": "CHEM404",
    "name": "Computational Chemistry",
    "credits": 3,
    "creditsText": "3",
    "department": "Chemistry",
    "description": "Application of numerical techniques to study chemical systems; molecular simulation. Prior computer programming experience is not required. .",
    "prerequisiteText": "Either (a) SCIE 001 or (b) one of CHEM 123, CHEM 130, CHEM 154 and one of PHYS 106, PHYS 107, PHYS 108, PHYS 117, PHYS 118, PHYS 170 and one of MATH 101, MATH 103, MATH 105, MATH 121 and Third-year standing. This course is not eligible for Credit/D/Fail grading.",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC221"
    ],
    "areas": [
      "chemistry",
      "systems",
      "networking"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS360"
  },
  {
    "code": "CHEM405",
    "name": "Biophysical Chemistry",
    "credits": 3,
    "creditsText": "3",
    "department": "Chemistry",
    "description": "Interactions of macromolecules in solution: ligand, antibody and ion binding to macromolecules; thermodynamics of polymer solutions; excluded volume effects; phase separation; partition in two phase polymer solutions.",
    "prerequisiteText": "One of CHEM 304, CHEM 305, PHYS 203.",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC320",
      "MATH221"
    ],
    "areas": [
      "chemistry",
      "ai",
      "data"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS410"
  },
  {
    "code": "CHEM406",
    "name": "Polymer Chemistry",
    "credits": 3,
    "creditsText": "3",
    "department": "Chemistry",
    "description": "Structure and availability of monomers; Propagation mechanisms; synthesis of polymers with predetermined properties; measurement and interpretation of physical properties of polymers.",
    "prerequisiteText": "One of CHEM 213, CHEM 260 and one of CHEM 205, CHEM 304, CHBE 220.",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC320",
      "MATH221"
    ],
    "areas": [
      "chemistry",
      "ai",
      "data"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS410"
  },
  {
    "code": "CHEM407",
    "name": "Statistical Mechanics in Chemistry",
    "credits": 3,
    "creditsText": "3",
    "department": "Chemistry",
    "description": "Introductory concepts of statistical mechanics and statistical thermodynamics. Applications to chemistry with emphasis on understanding chemical reactivity. Credit will be granted for only one of CHEM 503/CHEM 407 or PHYS 455.",
    "prerequisiteText": "One of CHEM 304, PHYS 203.",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC221"
    ],
    "areas": [
      "chemistry",
      "programming",
      "web"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS420"
  },
  {
    "code": "CHEM408",
    "name": "Chemical Dynamics",
    "credits": 3,
    "creditsText": "3",
    "department": "Chemistry",
    "description": "Macroscopic and microscopic kinetics; photochemistry; theory of reaction rates; reaction cross sections, energy distributions, experimental methods. Credit will be granted for only one of CHEM 408 or CHEM 508.",
    "prerequisiteText": "One of CHEM 304, PHYS 203 and one of CHEM 312, PHYS 304.",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC221",
      "CPSC121"
    ],
    "areas": [
      "chemistry",
      "algorithms",
      "theory"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS301"
  },
  {
    "code": "CHEM409",
    "name": "Astrochemistry",
    "credits": 3,
    "creditsText": "3",
    "department": "Chemistry",
    "description": "Application of physical chemistry concepts and principles to the study of molecules in interstellar media and celestial bodies. Credit will be granted for only one of CHEM 409 or CHEM 509.",
    "prerequisiteText": "One of CHEM 312, PHYS 304. Students with CHEM 205 with a minimum grade of 76% may be admitted with permission of the instructor.",
    "corequisiteText": "",
    "prerequisites": [
      "BUS101"
    ],
    "areas": [
      "chemistry",
      "marketing"
    ],
    "source": "courses.json",
    "templateCourseCode": "BUS310"
  },
  {
    "code": "CHEM410",
    "name": "Properties of Materials",
    "credits": 3,
    "creditsText": "3",
    "department": "Chemistry",
    "description": "Electromagnetic, optical, thermal and mechanical properties, and chemical reactivity of solids; electrons in periodic systems: bands, zones; excitations: excitons, phonons, plasmons, polaritons; crystalline order and disorder; ionic conductivity. Credit will be granted for only one of CHEM 410 or CHEM 502.",
    "prerequisiteText": "One of CHEM 304, PHYS 203 and one of CHEM 312, PHYS 304.",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC221"
    ],
    "areas": [
      "chemistry",
      "data",
      "systems"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS340"
  },
  {
    "code": "CHEM411",
    "name": "Synthesis and Chemistry of Natural Products",
    "credits": 3,
    "creditsText": "3",
    "department": "Chemistry",
    "description": "Methods and tactics for the synthesis of biologically active natural products and analogs, particularly alkaloids, polyketides, steroids and terpenes. Credit will be granted for only one of CHEM 411 or CHEM 566.",
    "prerequisiteText": "CHEM 460.",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC320",
      "MATH221"
    ],
    "areas": [
      "chemistry",
      "ai",
      "data"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS410"
  },
  {
    "code": "CHEM412",
    "name": "Electronic Structure of Atoms and Molecules",
    "credits": 3,
    "creditsText": "3",
    "department": "Chemistry",
    "description": "Introduction to variational methods; many-electron systems; semi-empirical methods; perturbation theory; computational methods.",
    "prerequisiteText": "One of CHEM 312, PHYS 304 and one of MATH 111, MATH 131, MATH 152, MATH 221, MATH 223.",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC110"
    ],
    "areas": [
      "chemistry",
      "programming",
      "algorithms"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS201"
  },
  {
    "code": "CHEM413",
    "name": "Bioorganic Chemistry",
    "credits": 3,
    "creditsText": "3",
    "department": "Chemistry",
    "description": "Enzyme catalysis; mechanistic enzymology; chemistry of cofactors; biosynthetic transformations; natural product biosynthesis; topics in chemical biology. Credit will be granted for only one of CHEM 413, CHEM 569, or BIOC 403.",
    "prerequisiteText": "One of CHEM 313, CHEM 330.",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC320",
      "MATH221"
    ],
    "areas": [
      "chemistry",
      "ai",
      "data"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS410"
  },
  {
    "code": "CHEM414",
    "name": "Coordination Chemistry of the Transition Elements",
    "credits": 3,
    "creditsText": "3",
    "department": "Chemistry",
    "description": "Molecular and electronic structures and reactivities of coordination compounds of the transition elements. Credit will be granted for only one of CHEM 414 or CHEM 525.",
    "prerequisiteText": "CHEM 218.",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC320",
      "MATH221"
    ],
    "areas": [
      "chemistry",
      "ai",
      "data"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS410"
  },
  {
    "code": "CHEM416",
    "name": "Physical and Theoretical Organic Chemistry",
    "credits": 3,
    "creditsText": "3",
    "department": "Chemistry",
    "description": "Energetics and catalysis in organic reactions. Pericyclic reactions. Substituent effects. Linear free energy relationships. Credit will be granted for only one of CHEM 416 or CHEM 563.",
    "prerequisiteText": "One of CHEM 313, CHEM 330.",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC320",
      "MATH221"
    ],
    "areas": [
      "chemistry",
      "ai",
      "data"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS410"
  },
  {
    "code": "CHEM417",
    "name": "Nuclear Chemistry and Radiochemistry",
    "credits": 3,
    "creditsText": "3",
    "department": "Chemistry",
    "description": "Basic treatment of the nucleus, with analogy to concepts in chemistry. Nuclear stabilities and associated radioactive decay processes. Nuclear structure. Applications of radioisotopes in chemistry. The interaction of radiation with matter.",
    "prerequisiteText": "One of CHEM 123, CHEM 130. and Third year standing. CHEM 312 is recommended.",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC221"
    ],
    "areas": [
      "chemistry",
      "programming",
      "web"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS420"
  },
  {
    "code": "CHEM418",
    "name": "Organometallic Chemistry",
    "credits": 3,
    "creditsText": "3",
    "department": "Chemistry",
    "description": "The chemistry of compounds containing organic groups directly bonded to metals and metalloids. Emphasis will be placed on the structure and bonding of the compounds and their use in synthetic chemistry. Credit will be granted for only one of CHEM 418 or CHEM 524.",
    "prerequisiteText": "CHEM 318.",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC320",
      "MATH221"
    ],
    "areas": [
      "chemistry",
      "ai",
      "data"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS410"
  },
  {
    "code": "CHEM419",
    "name": "Establishing a Career in Chemical Research",
    "credits": 1,
    "creditsText": "1",
    "department": "Chemistry",
    "description": "Current research and career perspectives in chemistry. Restricted to Honours students with fourth year standing and, with permission of the department Head, to Major students with satisfactory fourth year standing. .",
    "prerequisiteText": "",
    "corequisiteText": "",
    "prerequisites": [
      "PSY101"
    ],
    "areas": [
      "chemistry",
      "psychology",
      "research"
    ],
    "source": "courses.json",
    "templateCourseCode": "PSY210"
  },
  {
    "code": "CHEM427",
    "name": "Applications of Materials Chemistry",
    "credits": 3,
    "creditsText": "3",
    "department": "Chemistry",
    "description": "Contemporary materials chemistry, including design and synthesis of materials for energy, electronics, and health applications.",
    "prerequisiteText": "CHEM 327.",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC221"
    ],
    "areas": [
      "chemistry",
      "programming",
      "web"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS420"
  },
  {
    "code": "CHEM430",
    "name": "Developments in Contemporary Chemistry",
    "credits": 3,
    "creditsText": "3-6",
    "department": "Chemistry",
    "description": "A review of modern developments in general chemistry for teachers of Secondary School chemistry (Not for credit in the Faculty of Science). Course is offered periodically in extra-sessional sessions.",
    "prerequisiteText": "",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC221"
    ],
    "areas": [
      "chemistry",
      "programming",
      "web"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS420"
  },
  {
    "code": "CHEM434",
    "name": "Principles of Chemical Separation",
    "credits": 3,
    "creditsText": "3",
    "department": "Chemistry",
    "description": "Unified theory of separation science; liquid and gas chromatography; capillary electrophoresis; electrochemical and spectroscopic detection; separation methods coupled with mass spectrometry and tandem mass spectrometry; biochemical applications. Credit will be granted for only one of CHEM 434 or CHEM 534.",
    "prerequisiteText": "CHEM 311.",
    "corequisiteText": "",
    "prerequisites": [
      "BUS101"
    ],
    "areas": [
      "chemistry",
      "marketing"
    ],
    "source": "courses.json",
    "templateCourseCode": "BUS310"
  },
  {
    "code": "CHEM435",
    "name": "Bio-Inorganic Chemistry",
    "credits": 3,
    "creditsText": "3",
    "department": "Chemistry",
    "description": "A discussion of the involvement of inorganic chemistry in biological systems. Chemistry of cations, metalloenzymes, and simpler model systems. Reactions of coordinated ligands, chemistry of sulfur and phosphorus. Credit will be granted for only one of CHEM 435 or CHEM 526.",
    "prerequisiteText": "All of CHEM 218, CHEM 304.",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC221"
    ],
    "areas": [
      "chemistry",
      "data",
      "systems"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS340"
  },
  {
    "code": "CHEM445",
    "name": "Projects in Experimental Chemistry",
    "credits": 3,
    "creditsText": "3-6",
    "department": "Chemistry",
    "description": "Principles of experimental design, practice and problem solving in chemistry, including the opportunity to pursue projects in a research setting. Students cannot take both CHEM 445 and CHEM 449.",
    "prerequisiteText": "One of CHEM 345, CHEM 335. Students satisfying the prerequisite requirement using CHEM 335 must have 4th-year class standing in a Chemistry Combined Major specialization.",
    "corequisiteText": "",
    "prerequisites": [
      "BUS101"
    ],
    "areas": [
      "chemistry",
      "marketing"
    ],
    "source": "courses.json",
    "templateCourseCode": "BUS310"
  },
  {
    "code": "CHEM448",
    "name": "Directed Studies in Chemistry",
    "credits": 3,
    "creditsText": "3-6",
    "department": "Chemistry",
    "description": "Students will undertake an investigation of a specific topic as agreed upon by the student and the faculty supervisor. Open to third- and fourth-year chemistry students.",
    "prerequisiteText": "",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC320",
      "MATH221"
    ],
    "areas": [
      "chemistry",
      "ai",
      "data"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS410"
  },
  {
    "code": "CHEM449",
    "name": "Seminar and Thesis",
    "credits": 6,
    "creditsText": "6",
    "department": "Chemistry",
    "description": "Original research work under the direction of a faculty member. Weekly seminar. Required of all Honours students. Open to Majors students with a satisfactory standing and permission of the department head. Students cannot take both CHEM 445 and CHEM 449.",
    "prerequisiteText": "Students will have completed their Year 3 laboratory requirements as outlined in their specialization.",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC320",
      "MATH221"
    ],
    "areas": [
      "chemistry",
      "ai",
      "data"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS410"
  },
  {
    "code": "CHEM460",
    "name": "Organic Synthesis: A Mechanistic Approach",
    "credits": 3,
    "creditsText": "3",
    "department": "Chemistry",
    "description": "Presentation, mechanistic discussion and analysis of modern synthetic methods using principles of physical organic chemistry. Credit will be granted for only one of CHEM 460 or CHEM 560.",
    "prerequisiteText": "CHEM 330.",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC320",
      "MATH221"
    ],
    "areas": [
      "chemistry",
      "ai",
      "data"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS410"
  },
  {
    "code": "CHEM461",
    "name": "Synthetic Chemical Biology",
    "credits": 3,
    "creditsText": "3",
    "department": "Chemistry",
    "description": "Synthetic, mechanistic, and biochemical approaches to chemical biology, including the design of drugs, probes, and catalysts. Credit will be granted for only one of CHEM 461 or CHEM 561. .",
    "prerequisiteText": "One of CHEM 313, CHEM 330. This course is not eligible for Credit/D/Fail grading.",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC320",
      "MATH221"
    ],
    "areas": [
      "chemistry",
      "ai",
      "data"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS410"
  },
  {
    "code": "CHEM473",
    "name": "Structure Determination and Reaction Analysis",
    "credits": 3,
    "creditsText": "3",
    "department": "Chemistry",
    "description": "Application of mass spectrometry and modern spectroscopic techniques, including multidimensional NMR spectroscopy, to reaction analysis and detailed characterization of complex organic and organometallic molecular structures.",
    "prerequisiteText": "CHEM 245 and one of CHEM 313, CHEM 318, CHEM 330.",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC110"
    ],
    "areas": [
      "chemistry",
      "programming",
      "algorithms"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS201"
  },
  {
    "code": "CHEM488",
    "name": "Topics in Chemistry",
    "credits": 3,
    "creditsText": "3-6",
    "department": "Chemistry",
    "description": "Selected topics in a specific area of Chemistry. May be taken more than once for credit with permission of the Department.",
    "prerequisiteText": "Third-year standing in a Chemistry specialization and permission of the Department.",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC320",
      "MATH221"
    ],
    "areas": [
      "chemistry",
      "ai",
      "data"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS410"
  },
  {
    "code": "STAT200",
    "name": "Elementary Statistics for Applications",
    "credits": 3,
    "creditsText": "3",
    "department": "Statistics",
    "description": "Classical, nonparametric, and robust inferences about means, variances, and analysis of variance, using computers. Emphasis on problem formulation, assumptions, and interpretation. See the Faculty of Science Credit Exclusion Lists: https://vancouver.calendar.ubc.ca/faculties-colleges-and-schools/facult…",
    "prerequisiteText": "One of any course on the MATH 100 credit exclusion list [ https://vancouver.calendar.ubc.ca/faculties-colleges-and-schools/facult… ], MATH 190, SCIE 001, MATH_O 100.",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC110"
    ],
    "areas": [
      "statistics",
      "data",
      "math",
      "programming",
      "algorithms"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS201"
  },
  {
    "code": "STAT201",
    "name": "Statistical Inference for Data Science",
    "credits": 3,
    "creditsText": "3",
    "department": "Statistics",
    "description": "Classical and simulation-based techniques for estimation and hypothesis testing, including inference for means and proportions. Emphasis on case studies and real data sets, as well as reproducible and transparent workflows when writing computer scripts for analysis and reports.",
    "prerequisiteText": "DSCI 100.",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC110"
    ],
    "areas": [
      "statistics",
      "data",
      "math",
      "programming",
      "algorithms"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS201"
  },
  {
    "code": "STAT203",
    "name": "Statistical Methods",
    "credits": 3,
    "creditsText": "3",
    "department": "Statistics",
    "description": "Organizing, displaying and summarizing data. Inference estimation and testing for elementary probability models. Not for credit towards a B.Sc. (Consult the Credit Exclusion list within the Faculty of Science section in the Calendar.)",
    "prerequisiteText": "MATH 11. Or Pre-calculus 11.",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC110"
    ],
    "areas": [
      "statistics",
      "data",
      "math",
      "programming",
      "algorithms"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS201"
  },
  {
    "code": "STAT251",
    "name": "Introductory Probability and Statistics",
    "credits": 3,
    "creditsText": "3",
    "department": "Statistics",
    "description": "Probability, discrete and continuous random variables, joint probability distributions, estimation, hypothesis testing, regression, analysis of variance. (Consult the Credit Exclusion list within the Faculty of Science section of the Calendar).",
    "prerequisiteText": "One of APSC 173, MATH 101, MATH 103, MATH 105, MATH 121, SCIE 001, MATH_O 101, MATH_O 103.",
    "corequisiteText": "",
    "prerequisites": [
      "MATH100"
    ],
    "areas": [
      "statistics",
      "data",
      "math",
      "theory"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS210"
  },
  {
    "code": "STAT300",
    "name": "Intermediate Statistics for Applications",
    "credits": 3,
    "creditsText": "3",
    "department": "Statistics",
    "description": "Further topics in statistical inference, including parametric and non-parametric methods, goodness-of-fit methods, analysis of variance and covariance, regression analysis, categorical data analysis, experimental designs, time series, model fitting, and statistical computing.",
    "prerequisiteText": "One of STAT 200, STAT 203, STAT 241, STAT 251, BIOL 300, BUSI 291, COMM 191, COMM 291, ECON 325, ECON 327, FRST 231, KIN 206, LFS 252, POLI 380, PSYC 218, PSYC 278, HES_O 340, POLI_O 400, STAT_O 121, STAT_O 121, STAT_O 205, STAT_O 230. Equivalency: COMM 411.",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC221",
      "CPSC121"
    ],
    "areas": [
      "statistics",
      "data",
      "math",
      "algorithms",
      "theory"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS301"
  },
  {
    "code": "STAT301",
    "name": "Statistical Modelling for Data Science",
    "credits": 3,
    "creditsText": "3",
    "department": "Statistics",
    "description": "Data analysis using statistical models and algorithms (e.g., linear and logistic regression, peeking, bandit, and variable selection algorithms) in case studies from different disciplines. Generative versus out-of-sample predictive models. Reproducible and transparent workflows for computer scripts and reports.",
    "prerequisiteText": "STAT 201 and one of MATH 100, MATH 102, MATH 104, MATH 110, MATH 120, MATH 180, MATH 184, SCIE 001, MATH_O 100.",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC110"
    ],
    "areas": [
      "statistics",
      "data",
      "math",
      "programming",
      "algorithms"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS201"
  },
  {
    "code": "STAT302",
    "name": "Introduction to Probability",
    "credits": 3,
    "creditsText": "3",
    "department": "Statistics",
    "description": "Basic notions of probability, random variables, expectation and conditional expectation, limit theorems. (Consult the Credit Exclusion list within the Faculty of Science section in the Calendar.)",
    "prerequisiteText": "One of MATH 200, MATH 226, MATH 217, MATH 253, MATH 254, MATH_O 200. Equivalency: MATH 302.",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC221",
      "CPSC121"
    ],
    "areas": [
      "statistics",
      "data",
      "math",
      "algorithms",
      "theory"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS301"
  },
  {
    "code": "STAT303",
    "name": "Introduction to Probabilistic Modelling and Simulation",
    "credits": 3,
    "creditsText": "3",
    "department": "Statistics",
    "description": "Core concepts in probability taught through probabilistic generative modelling, simulation of random variables, basic Monte Carlo, common probability distributions and models, basic probabilistic model design and inference.",
    "prerequisiteText": "All of (a) one of MATH 101, MATH 103, MATH 105, MATH 121, SCIE 001, (b) one of CPSC 103, CPSC 110, and (c) one of DSCI 100, ECON 325, STAT 200, STAT 251.",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC221"
    ],
    "areas": [
      "statistics",
      "data",
      "math",
      "systems"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS340"
  },
  {
    "code": "STAT305",
    "name": "Introduction to Statistical Inference",
    "credits": 3,
    "creditsText": "3",
    "department": "Statistics",
    "description": "Review of probability theory. Sampling distribution theory, large sample theory and methods of estimation and hypothesis testing, including maximum likelihood estimation, likelihood ratio testing and confidence interval construction.",
    "prerequisiteText": "Either (a) one of STAT 200, STAT 203, BIOL 300, STAT 251, COMM 291, ECON 325, FRST 231, PSYC 218, PSYC 366, PSYO_O 271, STAT_O 121, STAT_O 124, STAT_O 205, STAT_O 230 and one of MATH 302, STAT 302, STAT_O 203; or (b) DSCI 200 and STAT 201 and one of MATH 302, STAT 302, STAT_O 203; or (c) a score of 65% or higher in one of MATH 302, STAT 302, STAT_O 203. The Department recommends that students meet the prerequisite through option (a) or (b).",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC221"
    ],
    "areas": [
      "statistics",
      "data",
      "math",
      "programming",
      "teamwork"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS350"
  },
  {
    "code": "STAT306",
    "name": "Finding Relationships in Data",
    "credits": 3,
    "creditsText": "3",
    "department": "Statistics",
    "description": "Modelling a response (output) variable as a function of several explanatory (input) variables: multiple regression for a continuous response, logistic regression for a binary response, and log-linear models for count data. Finding low-dimensional structure: principal components analysis. Cluster analysis. (Consult the Credit Exclusion List within the Faculty of Science section in the Calendar).",
    "prerequisiteText": "One of MATH 152, MATH 221, MATH 223, MATH_O 222 and one of STAT 200, STAT 241, STAT 251, STAT 300, BIOL 300, BUSI 291, COMM 191, COMM 291, ECON 325, ECON 327, FRST 231, PSYC 218, PSYC 278, PSYO_O 271, STAT_O 124, STAT_O 205, STAT_O 230 and one of MATH 302, STAT 302, STAT_O 203.",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC110"
    ],
    "areas": [
      "statistics",
      "data",
      "math",
      "programming",
      "algorithms"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS201"
  },
  {
    "code": "STAT321",
    "name": "Stochastic Signals and Systems",
    "credits": 4,
    "creditsText": "4",
    "department": "Statistics",
    "description": "Stochastic behaviour of signals and systems (e.g., communication systems); discrete and continuous probability; random processes; modelling and identification of linear time-invariant systems; binary hypothesis testing and decision making.",
    "prerequisiteText": "One of ELEC 221, STAT 305. STAT 305 may be taken concurrently, with registration assistance from the Student Programs Coordinator in the Department of Statistics. Equivalency: ELEC321",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC221"
    ],
    "areas": [
      "statistics",
      "data",
      "math",
      "systems"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS340"
  },
  {
    "code": "STAT335",
    "name": "Statistics in Quality Assurance",
    "credits": 3,
    "creditsText": "3",
    "department": "Statistics",
    "description": "Philosophy of quality improvement and total quality control. Definitions of quality. Deming's principles, Ishikawa's tools, control charts, acceptance sampling, continuous improvement, quality design. Credit cannot be obtained for both STAT 335 and WOOD 335.",
    "prerequisiteText": "One of STAT 200, STAT 241, STAT 251, BIOL 300.",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC221"
    ],
    "areas": [
      "statistics",
      "data",
      "math",
      "programming",
      "teamwork"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS350"
  },
  {
    "code": "STAT344",
    "name": "Sample Surveys",
    "credits": 3,
    "creditsText": "3",
    "department": "Statistics",
    "description": "Planning and practice of sample surveys. Random sampling, bias and variance, unequal probability sampling, systematic, multistage and stratified sampling, ratio and regression estimators, post-stratification, establishing a frame, pretesting, pilot studies, nonresponse and additional topics.",
    "prerequisiteText": "One of STAT 200, STAT 241, STAT 251, BIOL 300, COMM 291, ECON 325, ECON 327, FRST 231, PSYC 218, PSYC 278, PSYC 366",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC221",
      "CPSC121"
    ],
    "areas": [
      "statistics",
      "data",
      "math",
      "algorithms",
      "theory"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS301"
  },
  {
    "code": "STAT404",
    "name": "Design and Analysis of Experiments",
    "credits": 3,
    "creditsText": "3",
    "department": "Statistics",
    "description": "Theory and application of analysis of variance for standard experimental designs, including blocked, nested, factorial and split plot designs. Fixed and random effects, multiple comparisons, analysis of covariance. (Consult the Credit Exclusion list within the Faculty of Science section in the Calendar.)",
    "prerequisiteText": "STAT 305, one of MATH 152, MATH 221, or MATH 223",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC221",
      "CPSC121"
    ],
    "areas": [
      "statistics",
      "data",
      "math",
      "algorithms",
      "theory"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS301"
  },
  {
    "code": "STAT405",
    "name": "Bayesian Statistics",
    "credits": 3,
    "creditsText": "3",
    "department": "Statistics",
    "description": "Bayesian approaches to statistical inference: probabilistic modelling, Bayesian inference workflows, approximation of posterior distributions supported by modelling languages, analysis of Bayesian procedures and posterior approximation methods.",
    "prerequisiteText": "One of MATH 302, STAT 302, or MATH 418, and either STAT 305 or STAT 460.",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC320",
      "MATH221"
    ],
    "areas": [
      "statistics",
      "data",
      "math",
      "ai"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS410"
  },
  {
    "code": "STAT406",
    "name": "Methods for Statistical Learning",
    "credits": 3,
    "creditsText": "3",
    "department": "Statistics",
    "description": "Flexible, data-adaptive methods for regression and classification models; regression smoothers; penalty methods; assessing accuracy of prediction; model selection; robustness; classification and regression trees; nearest-neighbour methods; neural networks; model averaging and ensembles; computational time and visualization for large data sets.",
    "prerequisiteText": "a) One of STAT 306, CPSC 340, or b) STAT 301 and one of MATH 152, MATH 221, MATH 223 and one of MATH 302, STAT 302.",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC320",
      "MATH221"
    ],
    "areas": [
      "statistics",
      "data",
      "math",
      "ai"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS410"
  },
  {
    "code": "STAT416",
    "name": "Advanced Linear Modelling",
    "credits": 3,
    "creditsText": "3",
    "department": "Statistics",
    "description": "Advanced topics in linear modelling, including weighted least squares, model selection, robust methods, splines, Bayesian methods, mixed effects models, and generalized linear models.",
    "prerequisiteText": "Both STAT 305 and STAT 306.",
    "corequisiteText": "",
    "prerequisites": [
      "MATH100"
    ],
    "areas": [
      "statistics",
      "data",
      "math"
    ],
    "source": "courses.json",
    "templateCourseCode": "MATH220"
  },
  {
    "code": "STAT443",
    "name": "Time Series and Forecasting",
    "credits": 3,
    "creditsText": "3",
    "department": "Statistics",
    "description": "Trend and seasonality, autocorrelation, stationarity, stochastic models, exponential smoothing, Holt-Winters methods, Box-Jenkins approach, frequency domain analysis.",
    "prerequisiteText": "Both (a) one of MATH 302, MATH 318, STAT 302 and (b) one of ECON 326, ECON 328, STAT 300, STAT 301, STAT 306",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC320",
      "MATH221"
    ],
    "areas": [
      "statistics",
      "data",
      "math",
      "ai"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS410"
  },
  {
    "code": "STAT445",
    "name": "Introduction to Exploratory Data Analysis",
    "credits": 3,
    "creditsText": "3",
    "department": "Statistics",
    "description": "Methods for exploring and presenting the structure of data: one group of numbers, several groups, bivariate data, time series data and two-way tables. Data displays, outlier identification, transformations, resistant regression, several types of data smoothing, comparisons with standard statistical methods.",
    "prerequisiteText": "[STAT306]",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC110"
    ],
    "areas": [
      "statistics",
      "data",
      "math",
      "programming",
      "algorithms"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS201"
  },
  {
    "code": "STAT447",
    "name": "Special Topics in Statistics",
    "credits": 2,
    "creditsText": "2-6",
    "department": "Statistics",
    "description": "Students should consult the Statistics Department for the particular topics offered in a given year.",
    "prerequisiteText": "STAT 305.",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC320",
      "MATH221"
    ],
    "areas": [
      "statistics",
      "data",
      "math",
      "ai"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS410"
  },
  {
    "code": "STAT449",
    "name": "Statistics Honours Project",
    "credits": 3,
    "creditsText": "3-6",
    "department": "Statistics",
    "description": "A research project, undertaken under the supervision of a faculty member, resulting in a written report.",
    "prerequisiteText": "Open to students enrolled in a Statistics Honours specialization and at class standing 4. Permission of the Undergraduate Advisor and supervising faculty member is required.",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC320",
      "MATH221"
    ],
    "areas": [
      "statistics",
      "data",
      "math",
      "ai"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS410"
  },
  {
    "code": "STAT450",
    "name": "Case Studies in Statistics",
    "credits": 3,
    "creditsText": "3",
    "department": "Statistics",
    "description": "Readings and projects in areas of current statistical application including environmental science, industrial statistics, official statistics, actuarial statistics, and medical statistics.",
    "prerequisiteText": "[STAT306]",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC221"
    ],
    "areas": [
      "statistics",
      "data",
      "math",
      "programming",
      "web"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS420"
  },
  {
    "code": "STAT460",
    "name": "Statistical Inference I",
    "credits": 3,
    "creditsText": "3",
    "department": "Statistics",
    "description": "Statistical models and their properties, estimation methods, properties of point and interval estimation, likelihood, Bayesian inference. Intended for Honours students.",
    "prerequisiteText": "All of MATH 320, STAT 305 and one of MATH 152, MATH 221, MATH 223.",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC320",
      "MATH221"
    ],
    "areas": [
      "statistics",
      "data",
      "math",
      "ai"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS410"
  },
  {
    "code": "STAT461",
    "name": "Statistical Inference II",
    "credits": 3,
    "creditsText": "3",
    "department": "Statistics",
    "description": "Hypothesis testing and model selection in modern statistics, confidence regions, multiple testing, model comparison criteria. Intended for Honours students.",
    "prerequisiteText": "[STAT460]",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC320",
      "MATH221"
    ],
    "areas": [
      "statistics",
      "data",
      "math",
      "ai"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS410"
  },
  {
    "code": "DSCI100",
    "name": "Introduction to Data Science",
    "credits": 3,
    "creditsText": "3",
    "department": "Data Science",
    "description": "Use of data science tools to summarize, visualize, and analyze data. Sensible workflows and clear interpretations are emphasized. .",
    "prerequisiteText": "",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC110"
    ],
    "areas": [
      "data science",
      "data",
      "programming",
      "algorithms"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS201"
  },
  {
    "code": "DSCI200",
    "name": "Navigating Data: Acquisition, Exploration and Management",
    "credits": 3,
    "creditsText": "3",
    "department": "Data Science",
    "description": "Acquiring data through web scraping and generating synthetic data via simulations. Sampling and experimental designs. Reporting and visualizing data and data quality. Data privacy and ownership. Emphasis on case studies and real data sets.",
    "prerequisiteText": "DSCI 100 or DATA_O 101.",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC110"
    ],
    "areas": [
      "data science",
      "data",
      "programming",
      "algorithms"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS201"
  },
  {
    "code": "DSCI220",
    "name": "Discrete Mathematics for Data Science",
    "credits": 4,
    "creditsText": "4",
    "department": "Data Science",
    "description": "Boolean algebra and logical inference, proof techniques, sets, relations and functions, regular expressions, and data filtering.",
    "prerequisiteText": "All of a) DSCI 100 or DATA_O 101; b) MATH 100, MATH 110, MATH 120, MATH 180, SCIE 001 or MATH_O 100; and c) CPSC 103 or CPSC 110.",
    "corequisiteText": "",
    "prerequisites": [
      "MATH100"
    ],
    "areas": [
      "data science",
      "data",
      "math",
      "theory"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS210"
  },
  {
    "code": "DSCI221",
    "name": "Data Structures for Data Science",
    "credits": 4,
    "creditsText": "4",
    "department": "Data Science",
    "description": "Object-oriented programming. Design and analysis of basic algorithms and data structures especially relevant to data science. Algorithm analysis methods, basic data structures, graphs and graph algorithms.",
    "prerequisiteText": "(a) DSCI 220, or (b) CPSC 121 and one of CPSC 203, CPSC 210, CPEN 221.",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC110"
    ],
    "areas": [
      "data science",
      "data",
      "programming",
      "algorithms"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS201"
  },
  {
    "code": "DSCI310",
    "name": "Reproducible and Trustworthy Workflows for Data Science",
    "credits": 3,
    "creditsText": "3",
    "department": "Data Science",
    "description": "Data science methods to automate the running and testing of code and analytic reports, manage data analysis software dependencies, package and deploy software for data analysis, and collaborate with others using version control.",
    "prerequisiteText": "One of (a) DSCI 221, (b) DSCI 100 and one of CPSC 203, CPSC 210, CPEN 221, or (c) DSCI 100, either MATH 210 or ECON 323, and either CPSC 107 or CPSC 110.",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC110"
    ],
    "areas": [
      "data science",
      "data",
      "programming",
      "algorithms"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS201"
  },
  {
    "code": "DSCI320",
    "name": "Visualization for Data Science",
    "credits": 3,
    "creditsText": "3",
    "department": "Data Science",
    "description": "Analysis, design, and implementation of static and interactive visual representations; visualization literacy; data communication; exploratory Data Analysis; application of theoretical principles to visualization development.",
    "prerequisiteText": "STAT 201 and one of CPSC 203, CPSC 210, CPEN 221, DSCI 221.",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC110"
    ],
    "areas": [
      "data science",
      "data",
      "programming",
      "algorithms"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS201"
  },
  {
    "code": "DSCI430",
    "name": "Fairness, Accountability, Transparency and Ethics (FATE) in Data Science",
    "credits": 3,
    "creditsText": "3",
    "department": "Data Science",
    "description": "Ethical application of data science and machine learning algorithms. Application of ethical theories in real-world case studies. Data ownership, collection, and validity. Algorithm auditing, fairness and transparency. Reducing unfairness in algorithms. Deployment of predictive models and dissemination of results.",
    "prerequisiteText": "One of CPSC 330, CPSC 340, STAT 301, STAT 406.",
    "corequisiteText": "",
    "prerequisites": [
      "CPSC221",
      "CPSC121"
    ],
    "areas": [
      "data science",
      "data",
      "algorithms",
      "theory"
    ],
    "source": "courses.json",
    "templateCourseCode": "CS301"
  },
  {
    "code": "BUS101",
    "name": "Introduction to Business",
    "credits": 3,
    "department": "Business",
    "description": "Survey of business functions: operations, marketing, finance, and management.",
    "prerequisites": [],
    "areas": [
      "business"
    ]
  },
  {
    "code": "BUS201",
    "name": "Principles of Management",
    "credits": 3,
    "department": "Business",
    "description": "Core management theory: planning, organizing, leading, and controlling.",
    "prerequisites": [
      "BUS101"
    ],
    "areas": [
      "business",
      "management"
    ]
  },
  {
    "code": "ACC201",
    "name": "Financial Accounting",
    "credits": 3,
    "department": "Business",
    "description": "Reading and preparing financial statements for external stakeholders.",
    "prerequisites": [],
    "areas": [
      "accounting"
    ]
  },
  {
    "code": "ECON101",
    "name": "Microeconomics",
    "credits": 3,
    "department": "Economics",
    "description": "Supply, demand, market structure, and individual decision-making.",
    "prerequisites": [],
    "areas": [
      "economics"
    ]
  },
  {
    "code": "ECON102",
    "name": "Macroeconomics",
    "credits": 3,
    "department": "Economics",
    "description": "National income, inflation, unemployment, and monetary and fiscal policy.",
    "prerequisites": [
      "ECON101"
    ],
    "areas": [
      "economics"
    ]
  },
  {
    "code": "BUS310",
    "name": "Marketing Principles",
    "credits": 3,
    "department": "Business",
    "description": "Market research, branding, pricing, and promotion strategy.",
    "prerequisites": [
      "BUS101"
    ],
    "areas": [
      "marketing"
    ]
  },
  {
    "code": "BUS320",
    "name": "Financial Management",
    "credits": 3,
    "department": "Business",
    "description": "Corporate finance fundamentals: valuation, capital budgeting, and risk.",
    "prerequisites": [
      "ACC201"
    ],
    "areas": [
      "finance"
    ]
  },
  {
    "code": "BUS330",
    "name": "Organizational Behavior",
    "credits": 3,
    "department": "Business",
    "description": "How individuals and groups behave within organizations, and how to lead them.",
    "prerequisites": [
      "BUS201"
    ],
    "areas": [
      "management",
      "psychology"
    ]
  },
  {
    "code": "PSY101",
    "name": "Introduction to Psychology",
    "credits": 3,
    "department": "Psychology",
    "description": "Survey of the major subfields of psychology and how the mind and behavior are studied.",
    "prerequisites": [],
    "areas": [
      "psychology"
    ]
  },
  {
    "code": "PSY201",
    "name": "Developmental Psychology",
    "credits": 3,
    "department": "Psychology",
    "description": "Human development across the lifespan, from infancy through late adulthood.",
    "prerequisites": [
      "PSY101"
    ],
    "areas": [
      "psychology"
    ]
  },
  {
    "code": "PSY210",
    "name": "Research Methods",
    "credits": 4,
    "department": "Psychology",
    "description": "Designing and evaluating psychological studies, including statistics fundamentals.",
    "prerequisites": [
      "PSY101"
    ],
    "areas": [
      "psychology",
      "research"
    ]
  },
  {
    "code": "PSY301",
    "name": "Cognitive Psychology",
    "credits": 3,
    "department": "Psychology",
    "description": "Memory, attention, perception, language, and reasoning.",
    "prerequisites": [
      "PSY201",
      "PSY210"
    ],
    "areas": [
      "psychology",
      "cognition"
    ]
  },
  {
    "code": "PSY320",
    "name": "Abnormal Psychology",
    "credits": 3,
    "department": "Psychology",
    "description": "Origins, diagnosis, and treatment of psychological disorders.",
    "prerequisites": [
      "PSY201"
    ],
    "areas": [
      "psychology",
      "clinical"
    ]
  },
  {
    "code": "PSY330",
    "name": "Social Psychology",
    "credits": 3,
    "department": "Psychology",
    "description": "How people's thoughts, feelings, and behavior are shaped by others.",
    "prerequisites": [
      "PSY101"
    ],
    "areas": [
      "psychology",
      "social"
    ]
  },
  {
    "code": "PSY340",
    "name": "Psychology of Learning",
    "credits": 3,
    "department": "Psychology",
    "description": "How learning happens, from classical conditioning to modern cognitive models.",
    "prerequisites": [
      "PSY201"
    ],
    "areas": [
      "psychology",
      "cognition"
    ]
  },
  {
    "code": "ENG101",
    "name": "College Writing",
    "credits": 3,
    "department": "English",
    "description": "Expository and argumentative writing for an academic audience.",
    "prerequisites": [],
    "areas": [
      "writing"
    ]
  },
  {
    "code": "HIST105",
    "name": "World History",
    "credits": 3,
    "department": "History",
    "description": "A survey of major world events and movements from 1500 to the present.",
    "prerequisites": [],
    "areas": [
      "history"
    ]
  }
];

const sections = [
  {
    "id": "F26-CPSC100-A",
    "courseCode": "CPSC100",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Reyes",
    "days": [
      "Mon",
      "Wed"
    ],
    "startTime": "09:00",
    "endTime": "10:15",
    "location": "Turing Hall 100",
    "format": "in-person",
    "seatsTotal": 60,
    "seatsAvailable": 14,
    "synthetic": true,
    "templateSectionId": "F26-CS101-A"
  },
  {
    "id": "S27-CPSC100-A",
    "courseCode": "CPSC100",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Reyes",
    "days": [
      "Mon",
      "Wed"
    ],
    "startTime": "09:00",
    "endTime": "10:15",
    "location": "Turing Hall 100",
    "format": "in-person",
    "seatsTotal": 60,
    "seatsAvailable": 40,
    "synthetic": true,
    "templateSectionId": "S27-CS101-A"
  },
  {
    "id": "F26-CPSC103-A",
    "courseCode": "CPSC103",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Reyes",
    "days": [
      "Mon",
      "Wed"
    ],
    "startTime": "09:00",
    "endTime": "10:15",
    "location": "Turing Hall 100",
    "format": "in-person",
    "seatsTotal": 60,
    "seatsAvailable": 14,
    "synthetic": true,
    "templateSectionId": "F26-CS101-A"
  },
  {
    "id": "S27-CPSC103-A",
    "courseCode": "CPSC103",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Reyes",
    "days": [
      "Mon",
      "Wed"
    ],
    "startTime": "09:00",
    "endTime": "10:15",
    "location": "Turing Hall 100",
    "format": "in-person",
    "seatsTotal": 60,
    "seatsAvailable": 40,
    "synthetic": true,
    "templateSectionId": "S27-CS101-A"
  },
  {
    "id": "F26-CPSC107-A",
    "courseCode": "CPSC107",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Reyes",
    "days": [
      "Mon",
      "Wed"
    ],
    "startTime": "09:00",
    "endTime": "10:15",
    "location": "Turing Hall 100",
    "format": "in-person",
    "seatsTotal": 60,
    "seatsAvailable": 14,
    "synthetic": true,
    "templateSectionId": "F26-CS101-A"
  },
  {
    "id": "S27-CPSC107-A",
    "courseCode": "CPSC107",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Reyes",
    "days": [
      "Mon",
      "Wed"
    ],
    "startTime": "09:00",
    "endTime": "10:15",
    "location": "Turing Hall 100",
    "format": "in-person",
    "seatsTotal": 60,
    "seatsAvailable": 40,
    "synthetic": true,
    "templateSectionId": "S27-CS101-A"
  },
  {
    "id": "F26-CPSC110-A",
    "courseCode": "CPSC110",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Reyes",
    "days": [
      "Mon",
      "Wed"
    ],
    "startTime": "09:00",
    "endTime": "10:15",
    "location": "Turing Hall 100",
    "format": "in-person",
    "seatsTotal": 60,
    "seatsAvailable": 14,
    "synthetic": true,
    "templateSectionId": "F26-CS101-A"
  },
  {
    "id": "S27-CPSC110-A",
    "courseCode": "CPSC110",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Reyes",
    "days": [
      "Mon",
      "Wed"
    ],
    "startTime": "09:00",
    "endTime": "10:15",
    "location": "Turing Hall 100",
    "format": "in-person",
    "seatsTotal": 60,
    "seatsAvailable": 40,
    "synthetic": true,
    "templateSectionId": "S27-CS101-A"
  },
  {
    "id": "F26-CPSC121-A",
    "courseCode": "CPSC121",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Patel",
    "days": [
      "Mon",
      "Wed"
    ],
    "startTime": "13:00",
    "endTime": "14:15",
    "location": "Turing Hall 110",
    "format": "in-person",
    "seatsTotal": 50,
    "seatsAvailable": 22,
    "synthetic": true,
    "templateSectionId": "F26-CS210-A"
  },
  {
    "id": "F26-CPSC203-A",
    "courseCode": "CPSC203",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Okafor",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "09:00",
    "endTime": "10:15",
    "location": "Turing Hall 210",
    "format": "in-person",
    "seatsTotal": 40,
    "seatsAvailable": 11,
    "synthetic": true,
    "templateSectionId": "F26-CS301-A"
  },
  {
    "id": "F26-CPSC210-A",
    "courseCode": "CPSC210",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Reyes",
    "days": [
      "Mon",
      "Wed"
    ],
    "startTime": "11:00",
    "endTime": "12:15",
    "location": "Turing Hall 100",
    "format": "in-person",
    "seatsTotal": 40,
    "seatsAvailable": 9,
    "synthetic": true,
    "templateSectionId": "F26-CS350-A"
  },
  {
    "id": "F26-CPSC210-B",
    "courseCode": "CPSC210",
    "term": "F26",
    "campus": "online",
    "instructor": "Dr. Reyes",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "16:00",
    "endTime": "17:15",
    "location": "Online — Live Sessions",
    "format": "online",
    "seatsTotal": 35,
    "seatsAvailable": 20,
    "synthetic": true,
    "templateSectionId": "F26-CS350-B"
  },
  {
    "id": "F26-CPSC213-A",
    "courseCode": "CPSC213",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Singh",
    "days": [
      "Mon",
      "Wed"
    ],
    "startTime": "15:00",
    "endTime": "16:15",
    "location": "Turing Hall 120",
    "format": "in-person",
    "seatsTotal": 40,
    "seatsAvailable": 18,
    "synthetic": true,
    "templateSectionId": "F26-CS340-A"
  },
  {
    "id": "F26-CPSC221-A",
    "courseCode": "CPSC221",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Okafor",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "11:00",
    "endTime": "12:15",
    "location": "Turing Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 6,
    "synthetic": true,
    "templateSectionId": "F26-CS201-A"
  },
  {
    "id": "S27-CPSC221-A",
    "courseCode": "CPSC221",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Okafor",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "11:00",
    "endTime": "12:15",
    "location": "Turing Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 28,
    "synthetic": true,
    "templateSectionId": "S27-CS201-A"
  },
  {
    "id": "F26-CPSC259-A",
    "courseCode": "CPSC259",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Okafor",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "11:00",
    "endTime": "12:15",
    "location": "Turing Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 6,
    "synthetic": true,
    "templateSectionId": "F26-CS201-A"
  },
  {
    "id": "S27-CPSC259-A",
    "courseCode": "CPSC259",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Okafor",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "11:00",
    "endTime": "12:15",
    "location": "Turing Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 28,
    "synthetic": true,
    "templateSectionId": "S27-CS201-A"
  },
  {
    "id": "F26-CPSC302-A",
    "courseCode": "CPSC302",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Singh",
    "days": [
      "Mon",
      "Wed"
    ],
    "startTime": "15:00",
    "endTime": "16:15",
    "location": "Turing Hall 120",
    "format": "in-person",
    "seatsTotal": 40,
    "seatsAvailable": 18,
    "synthetic": true,
    "templateSectionId": "F26-CS340-A"
  },
  {
    "id": "F26-CPSC303-A",
    "courseCode": "CPSC303",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Okafor",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "09:00",
    "endTime": "10:15",
    "location": "Turing Hall 210",
    "format": "in-person",
    "seatsTotal": 40,
    "seatsAvailable": 11,
    "synthetic": true,
    "templateSectionId": "F26-CS301-A"
  },
  {
    "id": "F26-CPSC304-A",
    "courseCode": "CPSC304",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Singh",
    "days": [
      "Mon",
      "Wed"
    ],
    "startTime": "15:00",
    "endTime": "16:15",
    "location": "Turing Hall 120",
    "format": "in-person",
    "seatsTotal": 40,
    "seatsAvailable": 18,
    "synthetic": true,
    "templateSectionId": "F26-CS340-A"
  },
  {
    "id": "F26-CPSC310-A",
    "courseCode": "CPSC310",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Reyes",
    "days": [
      "Mon",
      "Wed"
    ],
    "startTime": "11:00",
    "endTime": "12:15",
    "location": "Turing Hall 100",
    "format": "in-person",
    "seatsTotal": 40,
    "seatsAvailable": 9,
    "synthetic": true,
    "templateSectionId": "F26-CS350-A"
  },
  {
    "id": "F26-CPSC310-B",
    "courseCode": "CPSC310",
    "term": "F26",
    "campus": "online",
    "instructor": "Dr. Reyes",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "16:00",
    "endTime": "17:15",
    "location": "Online — Live Sessions",
    "format": "online",
    "seatsTotal": 35,
    "seatsAvailable": 20,
    "synthetic": true,
    "templateSectionId": "F26-CS350-B"
  },
  {
    "id": "F26-CPSC311-A",
    "courseCode": "CPSC311",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Reyes",
    "days": [
      "Mon",
      "Wed"
    ],
    "startTime": "09:00",
    "endTime": "10:15",
    "location": "Turing Hall 100",
    "format": "in-person",
    "seatsTotal": 60,
    "seatsAvailable": 14,
    "synthetic": true,
    "templateSectionId": "F26-CS101-A"
  },
  {
    "id": "S27-CPSC311-A",
    "courseCode": "CPSC311",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Reyes",
    "days": [
      "Mon",
      "Wed"
    ],
    "startTime": "09:00",
    "endTime": "10:15",
    "location": "Turing Hall 100",
    "format": "in-person",
    "seatsTotal": 60,
    "seatsAvailable": 40,
    "synthetic": true,
    "templateSectionId": "S27-CS101-A"
  },
  {
    "id": "F26-CPSC312-A",
    "courseCode": "CPSC312",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Reyes",
    "days": [
      "Mon",
      "Wed"
    ],
    "startTime": "09:00",
    "endTime": "10:15",
    "location": "Turing Hall 100",
    "format": "in-person",
    "seatsTotal": 60,
    "seatsAvailable": 14,
    "synthetic": true,
    "templateSectionId": "F26-CS101-A"
  },
  {
    "id": "S27-CPSC312-A",
    "courseCode": "CPSC312",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Reyes",
    "days": [
      "Mon",
      "Wed"
    ],
    "startTime": "09:00",
    "endTime": "10:15",
    "location": "Turing Hall 100",
    "format": "in-person",
    "seatsTotal": 60,
    "seatsAvailable": 40,
    "synthetic": true,
    "templateSectionId": "S27-CS101-A"
  },
  {
    "id": "F26-CPSC313-A",
    "courseCode": "CPSC313",
    "term": "F26",
    "campus": "north",
    "instructor": "Dr. Kim",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "13:00",
    "endTime": "14:15",
    "location": "North Hall 210",
    "format": "in-person",
    "seatsTotal": 35,
    "seatsAvailable": 0,
    "synthetic": true,
    "templateSectionId": "F26-CS360-A"
  },
  {
    "id": "F26-CPSC314-A",
    "courseCode": "CPSC314",
    "term": "F26",
    "campus": "north",
    "instructor": "Dr. Kim",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "13:00",
    "endTime": "14:15",
    "location": "North Hall 210",
    "format": "in-person",
    "seatsTotal": 35,
    "seatsAvailable": 0,
    "synthetic": true,
    "templateSectionId": "F26-CS360-A"
  },
  {
    "id": "F26-CPSC317-A",
    "courseCode": "CPSC317",
    "term": "F26",
    "campus": "north",
    "instructor": "Dr. Kim",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "13:00",
    "endTime": "14:15",
    "location": "North Hall 210",
    "format": "in-person",
    "seatsTotal": 35,
    "seatsAvailable": 0,
    "synthetic": true,
    "templateSectionId": "F26-CS360-A"
  },
  {
    "id": "F26-CPSC319-A",
    "courseCode": "CPSC319",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Reyes",
    "days": [
      "Mon",
      "Wed"
    ],
    "startTime": "11:00",
    "endTime": "12:15",
    "location": "Turing Hall 100",
    "format": "in-person",
    "seatsTotal": 40,
    "seatsAvailable": 9,
    "synthetic": true,
    "templateSectionId": "F26-CS350-A"
  },
  {
    "id": "F26-CPSC319-B",
    "courseCode": "CPSC319",
    "term": "F26",
    "campus": "online",
    "instructor": "Dr. Reyes",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "16:00",
    "endTime": "17:15",
    "location": "Online — Live Sessions",
    "format": "online",
    "seatsTotal": 35,
    "seatsAvailable": 20,
    "synthetic": true,
    "templateSectionId": "F26-CS350-B"
  },
  {
    "id": "F26-CPSC320-A",
    "courseCode": "CPSC320",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Okafor",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "09:00",
    "endTime": "10:15",
    "location": "Turing Hall 210",
    "format": "in-person",
    "seatsTotal": 40,
    "seatsAvailable": 11,
    "synthetic": true,
    "templateSectionId": "F26-CS301-A"
  },
  {
    "id": "F26-CPSC322-A",
    "courseCode": "CPSC322",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Okafor",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "09:00",
    "endTime": "10:15",
    "location": "Turing Hall 210",
    "format": "in-person",
    "seatsTotal": 40,
    "seatsAvailable": 11,
    "synthetic": true,
    "templateSectionId": "F26-CS301-A"
  },
  {
    "id": "F26-CPSC330-A",
    "courseCode": "CPSC330",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Singh",
    "days": [
      "Wed"
    ],
    "startTime": "17:00",
    "endTime": "19:45",
    "location": "Turing Hall 305",
    "format": "in-person",
    "seatsTotal": 30,
    "seatsAvailable": 12,
    "synthetic": true,
    "templateSectionId": "F26-CS410-A"
  },
  {
    "id": "S27-CPSC330-A",
    "courseCode": "CPSC330",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Singh",
    "days": [
      "Wed"
    ],
    "startTime": "17:00",
    "endTime": "19:45",
    "location": "Turing Hall 305",
    "format": "in-person",
    "seatsTotal": 30,
    "seatsAvailable": 22,
    "synthetic": true,
    "templateSectionId": "S27-CS410-A"
  },
  {
    "id": "F26-CPSC337-A",
    "courseCode": "CPSC337",
    "term": "F26",
    "campus": "north",
    "instructor": "Dr. Kim",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "13:00",
    "endTime": "14:15",
    "location": "North Hall 210",
    "format": "in-person",
    "seatsTotal": 35,
    "seatsAvailable": 0,
    "synthetic": true,
    "templateSectionId": "F26-CS360-A"
  },
  {
    "id": "F26-CPSC340-A",
    "courseCode": "CPSC340",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Singh",
    "days": [
      "Wed"
    ],
    "startTime": "17:00",
    "endTime": "19:45",
    "location": "Turing Hall 305",
    "format": "in-person",
    "seatsTotal": 30,
    "seatsAvailable": 12,
    "synthetic": true,
    "templateSectionId": "F26-CS410-A"
  },
  {
    "id": "S27-CPSC340-A",
    "courseCode": "CPSC340",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Singh",
    "days": [
      "Wed"
    ],
    "startTime": "17:00",
    "endTime": "19:45",
    "location": "Turing Hall 305",
    "format": "in-person",
    "seatsTotal": 30,
    "seatsAvailable": 22,
    "synthetic": true,
    "templateSectionId": "S27-CS410-A"
  },
  {
    "id": "F26-CPSC344-A",
    "courseCode": "CPSC344",
    "term": "F26",
    "campus": "north",
    "instructor": "Dr. Kim",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "13:00",
    "endTime": "14:15",
    "location": "North Hall 210",
    "format": "in-person",
    "seatsTotal": 35,
    "seatsAvailable": 0,
    "synthetic": true,
    "templateSectionId": "F26-CS360-A"
  },
  {
    "id": "F26-CPSC349-A",
    "courseCode": "CPSC349",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Okafor",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "09:00",
    "endTime": "10:15",
    "location": "Turing Hall 210",
    "format": "in-person",
    "seatsTotal": 40,
    "seatsAvailable": 11,
    "synthetic": true,
    "templateSectionId": "F26-CS301-A"
  },
  {
    "id": "F26-CPSC368-A",
    "courseCode": "CPSC368",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Singh",
    "days": [
      "Mon",
      "Wed"
    ],
    "startTime": "15:00",
    "endTime": "16:15",
    "location": "Turing Hall 120",
    "format": "in-person",
    "seatsTotal": 40,
    "seatsAvailable": 18,
    "synthetic": true,
    "templateSectionId": "F26-CS340-A"
  },
  {
    "id": "F26-CPSC402-A",
    "courseCode": "CPSC402",
    "term": "F26",
    "campus": "online",
    "instructor": "Dr. Alvarez",
    "days": [
      "Mon",
      "Wed"
    ],
    "startTime": "18:00",
    "endTime": "19:15",
    "location": "Online — Live Sessions",
    "format": "online",
    "seatsTotal": 40,
    "seatsAvailable": 17,
    "synthetic": true,
    "templateSectionId": "F26-CS420-A"
  },
  {
    "id": "F26-CPSC404-A",
    "courseCode": "CPSC404",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Singh",
    "days": [
      "Mon",
      "Wed"
    ],
    "startTime": "15:00",
    "endTime": "16:15",
    "location": "Turing Hall 120",
    "format": "in-person",
    "seatsTotal": 40,
    "seatsAvailable": 18,
    "synthetic": true,
    "templateSectionId": "F26-CS340-A"
  },
  {
    "id": "F26-CPSC406-A",
    "courseCode": "CPSC406",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Okafor",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "09:00",
    "endTime": "10:15",
    "location": "Turing Hall 210",
    "format": "in-person",
    "seatsTotal": 40,
    "seatsAvailable": 11,
    "synthetic": true,
    "templateSectionId": "F26-CS301-A"
  },
  {
    "id": "F26-CPSC410-A",
    "courseCode": "CPSC410",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Reyes",
    "days": [
      "Mon",
      "Wed"
    ],
    "startTime": "11:00",
    "endTime": "12:15",
    "location": "Turing Hall 100",
    "format": "in-person",
    "seatsTotal": 40,
    "seatsAvailable": 9,
    "synthetic": true,
    "templateSectionId": "F26-CS350-A"
  },
  {
    "id": "F26-CPSC410-B",
    "courseCode": "CPSC410",
    "term": "F26",
    "campus": "online",
    "instructor": "Dr. Reyes",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "16:00",
    "endTime": "17:15",
    "location": "Online — Live Sessions",
    "format": "online",
    "seatsTotal": 35,
    "seatsAvailable": 20,
    "synthetic": true,
    "templateSectionId": "F26-CS350-B"
  },
  {
    "id": "F26-CPSC411-A",
    "courseCode": "CPSC411",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Singh",
    "days": [
      "Wed"
    ],
    "startTime": "17:00",
    "endTime": "19:45",
    "location": "Turing Hall 305",
    "format": "in-person",
    "seatsTotal": 30,
    "seatsAvailable": 12,
    "synthetic": true,
    "templateSectionId": "F26-CS410-A"
  },
  {
    "id": "S27-CPSC411-A",
    "courseCode": "CPSC411",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Singh",
    "days": [
      "Wed"
    ],
    "startTime": "17:00",
    "endTime": "19:45",
    "location": "Turing Hall 305",
    "format": "in-person",
    "seatsTotal": 30,
    "seatsAvailable": 22,
    "synthetic": true,
    "templateSectionId": "S27-CS410-A"
  },
  {
    "id": "F26-CPSC415-A",
    "courseCode": "CPSC415",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Singh",
    "days": [
      "Mon",
      "Wed"
    ],
    "startTime": "15:00",
    "endTime": "16:15",
    "location": "Turing Hall 120",
    "format": "in-person",
    "seatsTotal": 40,
    "seatsAvailable": 18,
    "synthetic": true,
    "templateSectionId": "F26-CS340-A"
  },
  {
    "id": "F26-CPSC416-A",
    "courseCode": "CPSC416",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Singh",
    "days": [
      "Mon",
      "Wed"
    ],
    "startTime": "15:00",
    "endTime": "16:15",
    "location": "Turing Hall 120",
    "format": "in-person",
    "seatsTotal": 40,
    "seatsAvailable": 18,
    "synthetic": true,
    "templateSectionId": "F26-CS340-A"
  },
  {
    "id": "F26-CPSC417-A",
    "courseCode": "CPSC417",
    "term": "F26",
    "campus": "north",
    "instructor": "Dr. Kim",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "13:00",
    "endTime": "14:15",
    "location": "North Hall 210",
    "format": "in-person",
    "seatsTotal": 35,
    "seatsAvailable": 0,
    "synthetic": true,
    "templateSectionId": "F26-CS360-A"
  },
  {
    "id": "F26-CPSC418-A",
    "courseCode": "CPSC418",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Okafor",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "09:00",
    "endTime": "10:15",
    "location": "Turing Hall 210",
    "format": "in-person",
    "seatsTotal": 40,
    "seatsAvailable": 11,
    "synthetic": true,
    "templateSectionId": "F26-CS301-A"
  },
  {
    "id": "F26-CPSC420-A",
    "courseCode": "CPSC420",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Okafor",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "09:00",
    "endTime": "10:15",
    "location": "Turing Hall 210",
    "format": "in-person",
    "seatsTotal": 40,
    "seatsAvailable": 11,
    "synthetic": true,
    "templateSectionId": "F26-CS301-A"
  },
  {
    "id": "F26-CPSC421-A",
    "courseCode": "CPSC421",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Singh",
    "days": [
      "Wed"
    ],
    "startTime": "17:00",
    "endTime": "19:45",
    "location": "Turing Hall 305",
    "format": "in-person",
    "seatsTotal": 30,
    "seatsAvailable": 12,
    "synthetic": true,
    "templateSectionId": "F26-CS410-A"
  },
  {
    "id": "S27-CPSC421-A",
    "courseCode": "CPSC421",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Singh",
    "days": [
      "Wed"
    ],
    "startTime": "17:00",
    "endTime": "19:45",
    "location": "Turing Hall 305",
    "format": "in-person",
    "seatsTotal": 30,
    "seatsAvailable": 22,
    "synthetic": true,
    "templateSectionId": "S27-CS410-A"
  },
  {
    "id": "F26-CPSC423-A",
    "courseCode": "CPSC423",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Singh",
    "days": [
      "Wed"
    ],
    "startTime": "17:00",
    "endTime": "19:45",
    "location": "Turing Hall 305",
    "format": "in-person",
    "seatsTotal": 30,
    "seatsAvailable": 12,
    "synthetic": true,
    "templateSectionId": "F26-CS410-A"
  },
  {
    "id": "S27-CPSC423-A",
    "courseCode": "CPSC423",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Singh",
    "days": [
      "Wed"
    ],
    "startTime": "17:00",
    "endTime": "19:45",
    "location": "Turing Hall 305",
    "format": "in-person",
    "seatsTotal": 30,
    "seatsAvailable": 22,
    "synthetic": true,
    "templateSectionId": "S27-CS410-A"
  },
  {
    "id": "F26-CPSC424-A",
    "courseCode": "CPSC424",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Okafor",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "09:00",
    "endTime": "10:15",
    "location": "Turing Hall 210",
    "format": "in-person",
    "seatsTotal": 40,
    "seatsAvailable": 11,
    "synthetic": true,
    "templateSectionId": "F26-CS301-A"
  },
  {
    "id": "F26-CPSC425-A",
    "courseCode": "CPSC425",
    "term": "F26",
    "campus": "north",
    "instructor": "Dr. Kim",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "13:00",
    "endTime": "14:15",
    "location": "North Hall 210",
    "format": "in-person",
    "seatsTotal": 35,
    "seatsAvailable": 0,
    "synthetic": true,
    "templateSectionId": "F26-CS360-A"
  },
  {
    "id": "F26-CPSC426-A",
    "courseCode": "CPSC426",
    "term": "F26",
    "campus": "north",
    "instructor": "Dr. Kim",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "13:00",
    "endTime": "14:15",
    "location": "North Hall 210",
    "format": "in-person",
    "seatsTotal": 35,
    "seatsAvailable": 0,
    "synthetic": true,
    "templateSectionId": "F26-CS360-A"
  },
  {
    "id": "F26-CPSC427-A",
    "courseCode": "CPSC427",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Reyes",
    "days": [
      "Mon",
      "Wed"
    ],
    "startTime": "09:00",
    "endTime": "10:15",
    "location": "Turing Hall 100",
    "format": "in-person",
    "seatsTotal": 60,
    "seatsAvailable": 14,
    "synthetic": true,
    "templateSectionId": "F26-CS101-A"
  },
  {
    "id": "S27-CPSC427-A",
    "courseCode": "CPSC427",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Reyes",
    "days": [
      "Mon",
      "Wed"
    ],
    "startTime": "09:00",
    "endTime": "10:15",
    "location": "Turing Hall 100",
    "format": "in-person",
    "seatsTotal": 60,
    "seatsAvailable": 40,
    "synthetic": true,
    "templateSectionId": "S27-CS101-A"
  },
  {
    "id": "F26-CPSC430-A",
    "courseCode": "CPSC430",
    "term": "F26",
    "campus": "north",
    "instructor": "Dr. Kim",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "13:00",
    "endTime": "14:15",
    "location": "North Hall 210",
    "format": "in-person",
    "seatsTotal": 35,
    "seatsAvailable": 0,
    "synthetic": true,
    "templateSectionId": "F26-CS360-A"
  },
  {
    "id": "F26-CPSC436-A",
    "courseCode": "CPSC436",
    "term": "F26",
    "campus": "north",
    "instructor": "Dr. Kim",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "13:00",
    "endTime": "14:15",
    "location": "North Hall 210",
    "format": "in-person",
    "seatsTotal": 35,
    "seatsAvailable": 0,
    "synthetic": true,
    "templateSectionId": "F26-CS360-A"
  },
  {
    "id": "F26-CPSC440-A",
    "courseCode": "CPSC440",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Singh",
    "days": [
      "Wed"
    ],
    "startTime": "17:00",
    "endTime": "19:45",
    "location": "Turing Hall 305",
    "format": "in-person",
    "seatsTotal": 30,
    "seatsAvailable": 12,
    "synthetic": true,
    "templateSectionId": "F26-CS410-A"
  },
  {
    "id": "S27-CPSC440-A",
    "courseCode": "CPSC440",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Singh",
    "days": [
      "Wed"
    ],
    "startTime": "17:00",
    "endTime": "19:45",
    "location": "Turing Hall 305",
    "format": "in-person",
    "seatsTotal": 30,
    "seatsAvailable": 22,
    "synthetic": true,
    "templateSectionId": "S27-CS410-A"
  },
  {
    "id": "F26-CPSC444-A",
    "courseCode": "CPSC444",
    "term": "F26",
    "campus": "north",
    "instructor": "Dr. Kim",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "13:00",
    "endTime": "14:15",
    "location": "North Hall 210",
    "format": "in-person",
    "seatsTotal": 35,
    "seatsAvailable": 0,
    "synthetic": true,
    "templateSectionId": "F26-CS360-A"
  },
  {
    "id": "F26-CPSC445-A",
    "courseCode": "CPSC445",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Okafor",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "09:00",
    "endTime": "10:15",
    "location": "Turing Hall 210",
    "format": "in-person",
    "seatsTotal": 40,
    "seatsAvailable": 11,
    "synthetic": true,
    "templateSectionId": "F26-CS301-A"
  },
  {
    "id": "F26-CPSC447-A",
    "courseCode": "CPSC447",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Okafor",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "09:00",
    "endTime": "10:15",
    "location": "Turing Hall 210",
    "format": "in-person",
    "seatsTotal": 40,
    "seatsAvailable": 11,
    "synthetic": true,
    "templateSectionId": "F26-CS301-A"
  },
  {
    "id": "F26-CPSC448-A",
    "courseCode": "CPSC448",
    "term": "F26",
    "campus": "north",
    "instructor": "Dr. Kim",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "13:00",
    "endTime": "14:15",
    "location": "North Hall 210",
    "format": "in-person",
    "seatsTotal": 35,
    "seatsAvailable": 0,
    "synthetic": true,
    "templateSectionId": "F26-CS360-A"
  },
  {
    "id": "F26-CPSC449-A",
    "courseCode": "CPSC449",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Singh",
    "days": [
      "Wed"
    ],
    "startTime": "17:00",
    "endTime": "19:45",
    "location": "Turing Hall 305",
    "format": "in-person",
    "seatsTotal": 30,
    "seatsAvailable": 12,
    "synthetic": true,
    "templateSectionId": "F26-CS410-A"
  },
  {
    "id": "S27-CPSC449-A",
    "courseCode": "CPSC449",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Singh",
    "days": [
      "Wed"
    ],
    "startTime": "17:00",
    "endTime": "19:45",
    "location": "Turing Hall 305",
    "format": "in-person",
    "seatsTotal": 30,
    "seatsAvailable": 22,
    "synthetic": true,
    "templateSectionId": "S27-CS410-A"
  },
  {
    "id": "F26-CPSC455-A",
    "courseCode": "CPSC455",
    "term": "F26",
    "campus": "online",
    "instructor": "Dr. Alvarez",
    "days": [
      "Mon",
      "Wed"
    ],
    "startTime": "18:00",
    "endTime": "19:15",
    "location": "Online — Live Sessions",
    "format": "online",
    "seatsTotal": 40,
    "seatsAvailable": 17,
    "synthetic": true,
    "templateSectionId": "F26-CS420-A"
  },
  {
    "id": "F26-CPSC490-A",
    "courseCode": "CPSC490",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Singh",
    "days": [
      "Wed"
    ],
    "startTime": "17:00",
    "endTime": "19:45",
    "location": "Turing Hall 305",
    "format": "in-person",
    "seatsTotal": 30,
    "seatsAvailable": 12,
    "synthetic": true,
    "templateSectionId": "F26-CS410-A"
  },
  {
    "id": "S27-CPSC490-A",
    "courseCode": "CPSC490",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Singh",
    "days": [
      "Wed"
    ],
    "startTime": "17:00",
    "endTime": "19:45",
    "location": "Turing Hall 305",
    "format": "in-person",
    "seatsTotal": 30,
    "seatsAvailable": 22,
    "synthetic": true,
    "templateSectionId": "S27-CS410-A"
  },
  {
    "id": "F26-CPSC491-A",
    "courseCode": "CPSC491",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Singh",
    "days": [
      "Wed"
    ],
    "startTime": "17:00",
    "endTime": "19:45",
    "location": "Turing Hall 305",
    "format": "in-person",
    "seatsTotal": 30,
    "seatsAvailable": 12,
    "synthetic": true,
    "templateSectionId": "F26-CS410-A"
  },
  {
    "id": "S27-CPSC491-A",
    "courseCode": "CPSC491",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Singh",
    "days": [
      "Wed"
    ],
    "startTime": "17:00",
    "endTime": "19:45",
    "location": "Turing Hall 305",
    "format": "in-person",
    "seatsTotal": 30,
    "seatsAvailable": 22,
    "synthetic": true,
    "templateSectionId": "S27-CS410-A"
  },
  {
    "id": "F26-MATH100-A",
    "courseCode": "MATH100",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Mon",
      "Wed",
      "Fri"
    ],
    "startTime": "09:00",
    "endTime": "09:50",
    "location": "Newton Hall 101",
    "format": "in-person",
    "seatsTotal": 80,
    "seatsAvailable": 25,
    "synthetic": true,
    "templateSectionId": "F26-MATH120-A"
  },
  {
    "id": "F26-MATH101-A",
    "courseCode": "MATH101",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Mon",
      "Wed",
      "Fri"
    ],
    "startTime": "09:00",
    "endTime": "09:50",
    "location": "Newton Hall 101",
    "format": "in-person",
    "seatsTotal": 80,
    "seatsAvailable": 25,
    "synthetic": true,
    "templateSectionId": "F26-MATH120-A"
  },
  {
    "id": "F26-MATH102-A",
    "courseCode": "MATH102",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Mon",
      "Wed",
      "Fri"
    ],
    "startTime": "09:00",
    "endTime": "09:50",
    "location": "Newton Hall 101",
    "format": "in-person",
    "seatsTotal": 80,
    "seatsAvailable": 25,
    "synthetic": true,
    "templateSectionId": "F26-MATH120-A"
  },
  {
    "id": "F26-MATH103-A",
    "courseCode": "MATH103",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Mon",
      "Wed",
      "Fri"
    ],
    "startTime": "09:00",
    "endTime": "09:50",
    "location": "Newton Hall 101",
    "format": "in-person",
    "seatsTotal": 80,
    "seatsAvailable": 25,
    "synthetic": true,
    "templateSectionId": "F26-MATH120-A"
  },
  {
    "id": "F26-MATH104-A",
    "courseCode": "MATH104",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Mon",
      "Wed",
      "Fri"
    ],
    "startTime": "09:00",
    "endTime": "09:50",
    "location": "Newton Hall 101",
    "format": "in-person",
    "seatsTotal": 80,
    "seatsAvailable": 25,
    "synthetic": true,
    "templateSectionId": "F26-MATH120-A"
  },
  {
    "id": "F26-MATH105-A",
    "courseCode": "MATH105",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Mon",
      "Wed",
      "Fri"
    ],
    "startTime": "09:00",
    "endTime": "09:50",
    "location": "Newton Hall 101",
    "format": "in-person",
    "seatsTotal": 80,
    "seatsAvailable": 25,
    "synthetic": true,
    "templateSectionId": "F26-MATH120-A"
  },
  {
    "id": "F26-MATH110-A",
    "courseCode": "MATH110",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Mon",
      "Wed",
      "Fri"
    ],
    "startTime": "09:00",
    "endTime": "09:50",
    "location": "Newton Hall 101",
    "format": "in-person",
    "seatsTotal": 80,
    "seatsAvailable": 25,
    "synthetic": true,
    "templateSectionId": "F26-MATH120-A"
  },
  {
    "id": "F26-MATH111-A",
    "courseCode": "MATH111",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 9,
    "synthetic": true,
    "templateSectionId": "F26-MATH220-A"
  },
  {
    "id": "S27-MATH111-A",
    "courseCode": "MATH111",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 30,
    "synthetic": true,
    "templateSectionId": "S27-MATH220-A"
  },
  {
    "id": "F26-MATH120-A",
    "courseCode": "MATH120",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Mon",
      "Wed",
      "Fri"
    ],
    "startTime": "09:00",
    "endTime": "09:50",
    "location": "Newton Hall 101",
    "format": "in-person",
    "seatsTotal": 80,
    "seatsAvailable": 25,
    "synthetic": true,
    "templateSectionId": "F26-MATH120-A"
  },
  {
    "id": "F26-MATH121-A",
    "courseCode": "MATH121",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Mon",
      "Wed",
      "Fri"
    ],
    "startTime": "09:00",
    "endTime": "09:50",
    "location": "Newton Hall 101",
    "format": "in-person",
    "seatsTotal": 80,
    "seatsAvailable": 25,
    "synthetic": true,
    "templateSectionId": "F26-MATH120-A"
  },
  {
    "id": "F26-MATH131-A",
    "courseCode": "MATH131",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 9,
    "synthetic": true,
    "templateSectionId": "F26-MATH220-A"
  },
  {
    "id": "S27-MATH131-A",
    "courseCode": "MATH131",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 30,
    "synthetic": true,
    "templateSectionId": "S27-MATH220-A"
  },
  {
    "id": "F26-MATH152-A",
    "courseCode": "MATH152",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 9,
    "synthetic": true,
    "templateSectionId": "F26-MATH220-A"
  },
  {
    "id": "S27-MATH152-A",
    "courseCode": "MATH152",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 30,
    "synthetic": true,
    "templateSectionId": "S27-MATH220-A"
  },
  {
    "id": "F26-MATH180-A",
    "courseCode": "MATH180",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Mon",
      "Wed",
      "Fri"
    ],
    "startTime": "09:00",
    "endTime": "09:50",
    "location": "Newton Hall 101",
    "format": "in-person",
    "seatsTotal": 80,
    "seatsAvailable": 25,
    "synthetic": true,
    "templateSectionId": "F26-MATH120-A"
  },
  {
    "id": "F26-MATH184-A",
    "courseCode": "MATH184",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Mon",
      "Wed",
      "Fri"
    ],
    "startTime": "09:00",
    "endTime": "09:50",
    "location": "Newton Hall 101",
    "format": "in-person",
    "seatsTotal": 80,
    "seatsAvailable": 25,
    "synthetic": true,
    "templateSectionId": "F26-MATH120-A"
  },
  {
    "id": "F26-MATH190-A",
    "courseCode": "MATH190",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Mon",
      "Wed",
      "Fri"
    ],
    "startTime": "09:00",
    "endTime": "09:50",
    "location": "Newton Hall 101",
    "format": "in-person",
    "seatsTotal": 80,
    "seatsAvailable": 25,
    "synthetic": true,
    "templateSectionId": "F26-MATH120-A"
  },
  {
    "id": "F26-MATH200-A",
    "courseCode": "MATH200",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Mon",
      "Wed",
      "Fri"
    ],
    "startTime": "09:00",
    "endTime": "09:50",
    "location": "Newton Hall 101",
    "format": "in-person",
    "seatsTotal": 80,
    "seatsAvailable": 25,
    "synthetic": true,
    "templateSectionId": "F26-MATH120-A"
  },
  {
    "id": "F26-MATH210-A",
    "courseCode": "MATH210",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 9,
    "synthetic": true,
    "templateSectionId": "F26-MATH220-A"
  },
  {
    "id": "S27-MATH210-A",
    "courseCode": "MATH210",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 30,
    "synthetic": true,
    "templateSectionId": "S27-MATH220-A"
  },
  {
    "id": "F26-MATH215-A",
    "courseCode": "MATH215",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 9,
    "synthetic": true,
    "templateSectionId": "F26-MATH220-A"
  },
  {
    "id": "S27-MATH215-A",
    "courseCode": "MATH215",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 30,
    "synthetic": true,
    "templateSectionId": "S27-MATH220-A"
  },
  {
    "id": "F26-MATH217-A",
    "courseCode": "MATH217",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Mon",
      "Wed",
      "Fri"
    ],
    "startTime": "09:00",
    "endTime": "09:50",
    "location": "Newton Hall 101",
    "format": "in-person",
    "seatsTotal": 80,
    "seatsAvailable": 25,
    "synthetic": true,
    "templateSectionId": "F26-MATH120-A"
  },
  {
    "id": "F26-MATH220-A",
    "courseCode": "MATH220",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 9,
    "synthetic": true,
    "templateSectionId": "F26-MATH220-A"
  },
  {
    "id": "S27-MATH220-A",
    "courseCode": "MATH220",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 30,
    "synthetic": true,
    "templateSectionId": "S27-MATH220-A"
  },
  {
    "id": "F26-MATH221-A",
    "courseCode": "MATH221",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 9,
    "synthetic": true,
    "templateSectionId": "F26-MATH220-A"
  },
  {
    "id": "S27-MATH221-A",
    "courseCode": "MATH221",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 30,
    "synthetic": true,
    "templateSectionId": "S27-MATH220-A"
  },
  {
    "id": "F26-MATH223-A",
    "courseCode": "MATH223",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 9,
    "synthetic": true,
    "templateSectionId": "F26-MATH220-A"
  },
  {
    "id": "S27-MATH223-A",
    "courseCode": "MATH223",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 30,
    "synthetic": true,
    "templateSectionId": "S27-MATH220-A"
  },
  {
    "id": "F26-MATH226-A",
    "courseCode": "MATH226",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Mon",
      "Wed",
      "Fri"
    ],
    "startTime": "09:00",
    "endTime": "09:50",
    "location": "Newton Hall 101",
    "format": "in-person",
    "seatsTotal": 80,
    "seatsAvailable": 25,
    "synthetic": true,
    "templateSectionId": "F26-MATH120-A"
  },
  {
    "id": "F26-MATH227-A",
    "courseCode": "MATH227",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Mon",
      "Wed",
      "Fri"
    ],
    "startTime": "09:00",
    "endTime": "09:50",
    "location": "Newton Hall 101",
    "format": "in-person",
    "seatsTotal": 80,
    "seatsAvailable": 25,
    "synthetic": true,
    "templateSectionId": "F26-MATH120-A"
  },
  {
    "id": "F26-MATH230-A",
    "courseCode": "MATH230",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 9,
    "synthetic": true,
    "templateSectionId": "F26-MATH220-A"
  },
  {
    "id": "S27-MATH230-A",
    "courseCode": "MATH230",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 30,
    "synthetic": true,
    "templateSectionId": "S27-MATH220-A"
  },
  {
    "id": "F26-MATH253-A",
    "courseCode": "MATH253",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Mon",
      "Wed",
      "Fri"
    ],
    "startTime": "09:00",
    "endTime": "09:50",
    "location": "Newton Hall 101",
    "format": "in-person",
    "seatsTotal": 80,
    "seatsAvailable": 25,
    "synthetic": true,
    "templateSectionId": "F26-MATH120-A"
  },
  {
    "id": "F26-MATH254-A",
    "courseCode": "MATH254",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Mon",
      "Wed",
      "Fri"
    ],
    "startTime": "09:00",
    "endTime": "09:50",
    "location": "Newton Hall 101",
    "format": "in-person",
    "seatsTotal": 80,
    "seatsAvailable": 25,
    "synthetic": true,
    "templateSectionId": "F26-MATH120-A"
  },
  {
    "id": "F26-MATH255-A",
    "courseCode": "MATH255",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 9,
    "synthetic": true,
    "templateSectionId": "F26-MATH220-A"
  },
  {
    "id": "S27-MATH255-A",
    "courseCode": "MATH255",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 30,
    "synthetic": true,
    "templateSectionId": "S27-MATH220-A"
  },
  {
    "id": "F26-MATH256-A",
    "courseCode": "MATH256",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 9,
    "synthetic": true,
    "templateSectionId": "F26-MATH220-A"
  },
  {
    "id": "S27-MATH256-A",
    "courseCode": "MATH256",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 30,
    "synthetic": true,
    "templateSectionId": "S27-MATH220-A"
  },
  {
    "id": "F26-MATH257-A",
    "courseCode": "MATH257",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 9,
    "synthetic": true,
    "templateSectionId": "F26-MATH220-A"
  },
  {
    "id": "S27-MATH257-A",
    "courseCode": "MATH257",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 30,
    "synthetic": true,
    "templateSectionId": "S27-MATH220-A"
  },
  {
    "id": "F26-MATH258-A",
    "courseCode": "MATH258",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 9,
    "synthetic": true,
    "templateSectionId": "F26-MATH220-A"
  },
  {
    "id": "S27-MATH258-A",
    "courseCode": "MATH258",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 30,
    "synthetic": true,
    "templateSectionId": "S27-MATH220-A"
  },
  {
    "id": "F26-MATH264-A",
    "courseCode": "MATH264",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Mon",
      "Wed",
      "Fri"
    ],
    "startTime": "09:00",
    "endTime": "09:50",
    "location": "Newton Hall 101",
    "format": "in-person",
    "seatsTotal": 80,
    "seatsAvailable": 25,
    "synthetic": true,
    "templateSectionId": "F26-MATH120-A"
  },
  {
    "id": "F26-MATH300-A",
    "courseCode": "MATH300",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 9,
    "synthetic": true,
    "templateSectionId": "F26-MATH220-A"
  },
  {
    "id": "S27-MATH300-A",
    "courseCode": "MATH300",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 30,
    "synthetic": true,
    "templateSectionId": "S27-MATH220-A"
  },
  {
    "id": "F26-MATH301-A",
    "courseCode": "MATH301",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 9,
    "synthetic": true,
    "templateSectionId": "F26-MATH220-A"
  },
  {
    "id": "S27-MATH301-A",
    "courseCode": "MATH301",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 30,
    "synthetic": true,
    "templateSectionId": "S27-MATH220-A"
  },
  {
    "id": "F26-MATH302-A",
    "courseCode": "MATH302",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 9,
    "synthetic": true,
    "templateSectionId": "F26-MATH220-A"
  },
  {
    "id": "S27-MATH302-A",
    "courseCode": "MATH302",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 30,
    "synthetic": true,
    "templateSectionId": "S27-MATH220-A"
  },
  {
    "id": "F26-MATH303-A",
    "courseCode": "MATH303",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 9,
    "synthetic": true,
    "templateSectionId": "F26-MATH220-A"
  },
  {
    "id": "S27-MATH303-A",
    "courseCode": "MATH303",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 30,
    "synthetic": true,
    "templateSectionId": "S27-MATH220-A"
  },
  {
    "id": "F26-MATH305-A",
    "courseCode": "MATH305",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 9,
    "synthetic": true,
    "templateSectionId": "F26-MATH220-A"
  },
  {
    "id": "S27-MATH305-A",
    "courseCode": "MATH305",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 30,
    "synthetic": true,
    "templateSectionId": "S27-MATH220-A"
  },
  {
    "id": "F26-MATH307-A",
    "courseCode": "MATH307",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 9,
    "synthetic": true,
    "templateSectionId": "F26-MATH220-A"
  },
  {
    "id": "S27-MATH307-A",
    "courseCode": "MATH307",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 30,
    "synthetic": true,
    "templateSectionId": "S27-MATH220-A"
  },
  {
    "id": "F26-MATH308-A",
    "courseCode": "MATH308",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 9,
    "synthetic": true,
    "templateSectionId": "F26-MATH220-A"
  },
  {
    "id": "S27-MATH308-A",
    "courseCode": "MATH308",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 30,
    "synthetic": true,
    "templateSectionId": "S27-MATH220-A"
  },
  {
    "id": "F26-MATH309-A",
    "courseCode": "MATH309",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 9,
    "synthetic": true,
    "templateSectionId": "F26-MATH220-A"
  },
  {
    "id": "S27-MATH309-A",
    "courseCode": "MATH309",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 30,
    "synthetic": true,
    "templateSectionId": "S27-MATH220-A"
  },
  {
    "id": "F26-MATH310-A",
    "courseCode": "MATH310",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 9,
    "synthetic": true,
    "templateSectionId": "F26-MATH220-A"
  },
  {
    "id": "S27-MATH310-A",
    "courseCode": "MATH310",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 30,
    "synthetic": true,
    "templateSectionId": "S27-MATH220-A"
  },
  {
    "id": "F26-MATH312-A",
    "courseCode": "MATH312",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 9,
    "synthetic": true,
    "templateSectionId": "F26-MATH220-A"
  },
  {
    "id": "S27-MATH312-A",
    "courseCode": "MATH312",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 30,
    "synthetic": true,
    "templateSectionId": "S27-MATH220-A"
  },
  {
    "id": "F26-MATH313-A",
    "courseCode": "MATH313",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 9,
    "synthetic": true,
    "templateSectionId": "F26-MATH220-A"
  },
  {
    "id": "S27-MATH313-A",
    "courseCode": "MATH313",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 30,
    "synthetic": true,
    "templateSectionId": "S27-MATH220-A"
  },
  {
    "id": "F26-MATH316-A",
    "courseCode": "MATH316",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 9,
    "synthetic": true,
    "templateSectionId": "F26-MATH220-A"
  },
  {
    "id": "S27-MATH316-A",
    "courseCode": "MATH316",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 30,
    "synthetic": true,
    "templateSectionId": "S27-MATH220-A"
  },
  {
    "id": "F26-MATH317-A",
    "courseCode": "MATH317",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Mon",
      "Wed",
      "Fri"
    ],
    "startTime": "09:00",
    "endTime": "09:50",
    "location": "Newton Hall 101",
    "format": "in-person",
    "seatsTotal": 80,
    "seatsAvailable": 25,
    "synthetic": true,
    "templateSectionId": "F26-MATH120-A"
  },
  {
    "id": "F26-MATH318-A",
    "courseCode": "MATH318",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Mon",
      "Wed",
      "Fri"
    ],
    "startTime": "09:00",
    "endTime": "09:50",
    "location": "Newton Hall 101",
    "format": "in-person",
    "seatsTotal": 80,
    "seatsAvailable": 25,
    "synthetic": true,
    "templateSectionId": "F26-MATH120-A"
  },
  {
    "id": "F26-MATH319-A",
    "courseCode": "MATH319",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 9,
    "synthetic": true,
    "templateSectionId": "F26-MATH220-A"
  },
  {
    "id": "S27-MATH319-A",
    "courseCode": "MATH319",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 30,
    "synthetic": true,
    "templateSectionId": "S27-MATH220-A"
  },
  {
    "id": "F26-MATH320-A",
    "courseCode": "MATH320",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 9,
    "synthetic": true,
    "templateSectionId": "F26-MATH220-A"
  },
  {
    "id": "S27-MATH320-A",
    "courseCode": "MATH320",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 30,
    "synthetic": true,
    "templateSectionId": "S27-MATH220-A"
  },
  {
    "id": "F26-MATH321-A",
    "courseCode": "MATH321",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 9,
    "synthetic": true,
    "templateSectionId": "F26-MATH220-A"
  },
  {
    "id": "S27-MATH321-A",
    "courseCode": "MATH321",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 30,
    "synthetic": true,
    "templateSectionId": "S27-MATH220-A"
  },
  {
    "id": "F26-MATH322-A",
    "courseCode": "MATH322",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 9,
    "synthetic": true,
    "templateSectionId": "F26-MATH220-A"
  },
  {
    "id": "S27-MATH322-A",
    "courseCode": "MATH322",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 30,
    "synthetic": true,
    "templateSectionId": "S27-MATH220-A"
  },
  {
    "id": "F26-MATH323-A",
    "courseCode": "MATH323",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 9,
    "synthetic": true,
    "templateSectionId": "F26-MATH220-A"
  },
  {
    "id": "S27-MATH323-A",
    "courseCode": "MATH323",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 30,
    "synthetic": true,
    "templateSectionId": "S27-MATH220-A"
  },
  {
    "id": "F26-MATH329-A",
    "courseCode": "MATH329",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 9,
    "synthetic": true,
    "templateSectionId": "F26-MATH220-A"
  },
  {
    "id": "S27-MATH329-A",
    "courseCode": "MATH329",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 30,
    "synthetic": true,
    "templateSectionId": "S27-MATH220-A"
  },
  {
    "id": "F26-MATH335-A",
    "courseCode": "MATH335",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 9,
    "synthetic": true,
    "templateSectionId": "F26-MATH220-A"
  },
  {
    "id": "S27-MATH335-A",
    "courseCode": "MATH335",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 30,
    "synthetic": true,
    "templateSectionId": "S27-MATH220-A"
  },
  {
    "id": "F26-MATH340-A",
    "courseCode": "MATH340",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 9,
    "synthetic": true,
    "templateSectionId": "F26-MATH220-A"
  },
  {
    "id": "S27-MATH340-A",
    "courseCode": "MATH340",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 30,
    "synthetic": true,
    "templateSectionId": "S27-MATH220-A"
  },
  {
    "id": "F26-MATH341-A",
    "courseCode": "MATH341",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 9,
    "synthetic": true,
    "templateSectionId": "F26-MATH220-A"
  },
  {
    "id": "S27-MATH341-A",
    "courseCode": "MATH341",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 30,
    "synthetic": true,
    "templateSectionId": "S27-MATH220-A"
  },
  {
    "id": "F26-MATH342-A",
    "courseCode": "MATH342",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 9,
    "synthetic": true,
    "templateSectionId": "F26-MATH220-A"
  },
  {
    "id": "S27-MATH342-A",
    "courseCode": "MATH342",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 30,
    "synthetic": true,
    "templateSectionId": "S27-MATH220-A"
  },
  {
    "id": "F26-MATH344-A",
    "courseCode": "MATH344",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 9,
    "synthetic": true,
    "templateSectionId": "F26-MATH220-A"
  },
  {
    "id": "S27-MATH344-A",
    "courseCode": "MATH344",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 30,
    "synthetic": true,
    "templateSectionId": "S27-MATH220-A"
  },
  {
    "id": "F26-MATH345-A",
    "courseCode": "MATH345",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 9,
    "synthetic": true,
    "templateSectionId": "F26-MATH220-A"
  },
  {
    "id": "S27-MATH345-A",
    "courseCode": "MATH345",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 30,
    "synthetic": true,
    "templateSectionId": "S27-MATH220-A"
  },
  {
    "id": "F26-MATH358-A",
    "courseCode": "MATH358",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 9,
    "synthetic": true,
    "templateSectionId": "F26-MATH220-A"
  },
  {
    "id": "S27-MATH358-A",
    "courseCode": "MATH358",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 30,
    "synthetic": true,
    "templateSectionId": "S27-MATH220-A"
  },
  {
    "id": "F26-MATH360-A",
    "courseCode": "MATH360",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 9,
    "synthetic": true,
    "templateSectionId": "F26-MATH220-A"
  },
  {
    "id": "S27-MATH360-A",
    "courseCode": "MATH360",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 30,
    "synthetic": true,
    "templateSectionId": "S27-MATH220-A"
  },
  {
    "id": "F26-MATH361-A",
    "courseCode": "MATH361",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 9,
    "synthetic": true,
    "templateSectionId": "F26-MATH220-A"
  },
  {
    "id": "S27-MATH361-A",
    "courseCode": "MATH361",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 30,
    "synthetic": true,
    "templateSectionId": "S27-MATH220-A"
  },
  {
    "id": "F26-MATH400-A",
    "courseCode": "MATH400",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 9,
    "synthetic": true,
    "templateSectionId": "F26-MATH220-A"
  },
  {
    "id": "S27-MATH400-A",
    "courseCode": "MATH400",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 30,
    "synthetic": true,
    "templateSectionId": "S27-MATH220-A"
  },
  {
    "id": "F26-MATH401-A",
    "courseCode": "MATH401",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Mon",
      "Wed",
      "Fri"
    ],
    "startTime": "09:00",
    "endTime": "09:50",
    "location": "Newton Hall 101",
    "format": "in-person",
    "seatsTotal": 80,
    "seatsAvailable": 25,
    "synthetic": true,
    "templateSectionId": "F26-MATH120-A"
  },
  {
    "id": "F26-MATH402-A",
    "courseCode": "MATH402",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Mon",
      "Wed",
      "Fri"
    ],
    "startTime": "09:00",
    "endTime": "09:50",
    "location": "Newton Hall 101",
    "format": "in-person",
    "seatsTotal": 80,
    "seatsAvailable": 25,
    "synthetic": true,
    "templateSectionId": "F26-MATH120-A"
  },
  {
    "id": "F26-MATH403-A",
    "courseCode": "MATH403",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 9,
    "synthetic": true,
    "templateSectionId": "F26-MATH220-A"
  },
  {
    "id": "S27-MATH403-A",
    "courseCode": "MATH403",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 30,
    "synthetic": true,
    "templateSectionId": "S27-MATH220-A"
  },
  {
    "id": "F26-MATH404-A",
    "courseCode": "MATH404",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 9,
    "synthetic": true,
    "templateSectionId": "F26-MATH220-A"
  },
  {
    "id": "S27-MATH404-A",
    "courseCode": "MATH404",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 30,
    "synthetic": true,
    "templateSectionId": "S27-MATH220-A"
  },
  {
    "id": "F26-MATH405-A",
    "courseCode": "MATH405",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 9,
    "synthetic": true,
    "templateSectionId": "F26-MATH220-A"
  },
  {
    "id": "S27-MATH405-A",
    "courseCode": "MATH405",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 30,
    "synthetic": true,
    "templateSectionId": "S27-MATH220-A"
  },
  {
    "id": "F26-MATH406-A",
    "courseCode": "MATH406",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 9,
    "synthetic": true,
    "templateSectionId": "F26-MATH220-A"
  },
  {
    "id": "S27-MATH406-A",
    "courseCode": "MATH406",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 30,
    "synthetic": true,
    "templateSectionId": "S27-MATH220-A"
  },
  {
    "id": "F26-MATH412-A",
    "courseCode": "MATH412",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 9,
    "synthetic": true,
    "templateSectionId": "F26-MATH220-A"
  },
  {
    "id": "S27-MATH412-A",
    "courseCode": "MATH412",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 30,
    "synthetic": true,
    "templateSectionId": "S27-MATH220-A"
  },
  {
    "id": "F26-MATH414-A",
    "courseCode": "MATH414",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 9,
    "synthetic": true,
    "templateSectionId": "F26-MATH220-A"
  },
  {
    "id": "S27-MATH414-A",
    "courseCode": "MATH414",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 30,
    "synthetic": true,
    "templateSectionId": "S27-MATH220-A"
  },
  {
    "id": "F26-MATH418-A",
    "courseCode": "MATH418",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 9,
    "synthetic": true,
    "templateSectionId": "F26-MATH220-A"
  },
  {
    "id": "S27-MATH418-A",
    "courseCode": "MATH418",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 30,
    "synthetic": true,
    "templateSectionId": "S27-MATH220-A"
  },
  {
    "id": "F26-MATH419-A",
    "courseCode": "MATH419",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 9,
    "synthetic": true,
    "templateSectionId": "F26-MATH220-A"
  },
  {
    "id": "S27-MATH419-A",
    "courseCode": "MATH419",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 30,
    "synthetic": true,
    "templateSectionId": "S27-MATH220-A"
  },
  {
    "id": "F26-MATH420-A",
    "courseCode": "MATH420",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 9,
    "synthetic": true,
    "templateSectionId": "F26-MATH220-A"
  },
  {
    "id": "S27-MATH420-A",
    "courseCode": "MATH420",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 30,
    "synthetic": true,
    "templateSectionId": "S27-MATH220-A"
  },
  {
    "id": "F26-MATH421-A",
    "courseCode": "MATH421",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 9,
    "synthetic": true,
    "templateSectionId": "F26-MATH220-A"
  },
  {
    "id": "S27-MATH421-A",
    "courseCode": "MATH421",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 30,
    "synthetic": true,
    "templateSectionId": "S27-MATH220-A"
  },
  {
    "id": "F26-MATH422-A",
    "courseCode": "MATH422",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 9,
    "synthetic": true,
    "templateSectionId": "F26-MATH220-A"
  },
  {
    "id": "S27-MATH422-A",
    "courseCode": "MATH422",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 30,
    "synthetic": true,
    "templateSectionId": "S27-MATH220-A"
  },
  {
    "id": "F26-MATH423-A",
    "courseCode": "MATH423",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 9,
    "synthetic": true,
    "templateSectionId": "F26-MATH220-A"
  },
  {
    "id": "S27-MATH423-A",
    "courseCode": "MATH423",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 30,
    "synthetic": true,
    "templateSectionId": "S27-MATH220-A"
  },
  {
    "id": "F26-MATH424-A",
    "courseCode": "MATH424",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 9,
    "synthetic": true,
    "templateSectionId": "F26-MATH220-A"
  },
  {
    "id": "S27-MATH424-A",
    "courseCode": "MATH424",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 30,
    "synthetic": true,
    "templateSectionId": "S27-MATH220-A"
  },
  {
    "id": "F26-MATH425-A",
    "courseCode": "MATH425",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 9,
    "synthetic": true,
    "templateSectionId": "F26-MATH220-A"
  },
  {
    "id": "S27-MATH425-A",
    "courseCode": "MATH425",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 30,
    "synthetic": true,
    "templateSectionId": "S27-MATH220-A"
  },
  {
    "id": "F26-MATH426-A",
    "courseCode": "MATH426",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 9,
    "synthetic": true,
    "templateSectionId": "F26-MATH220-A"
  },
  {
    "id": "S27-MATH426-A",
    "courseCode": "MATH426",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 30,
    "synthetic": true,
    "templateSectionId": "S27-MATH220-A"
  },
  {
    "id": "F26-MATH427-A",
    "courseCode": "MATH427",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 9,
    "synthetic": true,
    "templateSectionId": "F26-MATH220-A"
  },
  {
    "id": "S27-MATH427-A",
    "courseCode": "MATH427",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 30,
    "synthetic": true,
    "templateSectionId": "S27-MATH220-A"
  },
  {
    "id": "F26-MATH428-A",
    "courseCode": "MATH428",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 9,
    "synthetic": true,
    "templateSectionId": "F26-MATH220-A"
  },
  {
    "id": "S27-MATH428-A",
    "courseCode": "MATH428",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 30,
    "synthetic": true,
    "templateSectionId": "S27-MATH220-A"
  },
  {
    "id": "F26-MATH430-A",
    "courseCode": "MATH430",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 9,
    "synthetic": true,
    "templateSectionId": "F26-MATH220-A"
  },
  {
    "id": "S27-MATH430-A",
    "courseCode": "MATH430",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 30,
    "synthetic": true,
    "templateSectionId": "S27-MATH220-A"
  },
  {
    "id": "F26-MATH432-A",
    "courseCode": "MATH432",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 9,
    "synthetic": true,
    "templateSectionId": "F26-MATH220-A"
  },
  {
    "id": "S27-MATH432-A",
    "courseCode": "MATH432",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 30,
    "synthetic": true,
    "templateSectionId": "S27-MATH220-A"
  },
  {
    "id": "F26-MATH437-A",
    "courseCode": "MATH437",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 9,
    "synthetic": true,
    "templateSectionId": "F26-MATH220-A"
  },
  {
    "id": "S27-MATH437-A",
    "courseCode": "MATH437",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 30,
    "synthetic": true,
    "templateSectionId": "S27-MATH220-A"
  },
  {
    "id": "F26-MATH440-A",
    "courseCode": "MATH440",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 9,
    "synthetic": true,
    "templateSectionId": "F26-MATH220-A"
  },
  {
    "id": "S27-MATH440-A",
    "courseCode": "MATH440",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 30,
    "synthetic": true,
    "templateSectionId": "S27-MATH220-A"
  },
  {
    "id": "F26-MATH441-A",
    "courseCode": "MATH441",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 9,
    "synthetic": true,
    "templateSectionId": "F26-MATH220-A"
  },
  {
    "id": "S27-MATH441-A",
    "courseCode": "MATH441",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 30,
    "synthetic": true,
    "templateSectionId": "S27-MATH220-A"
  },
  {
    "id": "F26-MATH442-A",
    "courseCode": "MATH442",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 9,
    "synthetic": true,
    "templateSectionId": "F26-MATH220-A"
  },
  {
    "id": "S27-MATH442-A",
    "courseCode": "MATH442",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 30,
    "synthetic": true,
    "templateSectionId": "S27-MATH220-A"
  },
  {
    "id": "F26-MATH443-A",
    "courseCode": "MATH443",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 9,
    "synthetic": true,
    "templateSectionId": "F26-MATH220-A"
  },
  {
    "id": "S27-MATH443-A",
    "courseCode": "MATH443",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 30,
    "synthetic": true,
    "templateSectionId": "S27-MATH220-A"
  },
  {
    "id": "F26-MATH444-A",
    "courseCode": "MATH444",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 9,
    "synthetic": true,
    "templateSectionId": "F26-MATH220-A"
  },
  {
    "id": "S27-MATH444-A",
    "courseCode": "MATH444",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 30,
    "synthetic": true,
    "templateSectionId": "S27-MATH220-A"
  },
  {
    "id": "F26-MATH446-A",
    "courseCode": "MATH446",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 9,
    "synthetic": true,
    "templateSectionId": "F26-MATH220-A"
  },
  {
    "id": "S27-MATH446-A",
    "courseCode": "MATH446",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 30,
    "synthetic": true,
    "templateSectionId": "S27-MATH220-A"
  },
  {
    "id": "F26-MATH448-A",
    "courseCode": "MATH448",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 9,
    "synthetic": true,
    "templateSectionId": "F26-MATH220-A"
  },
  {
    "id": "S27-MATH448-A",
    "courseCode": "MATH448",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 30,
    "synthetic": true,
    "templateSectionId": "S27-MATH220-A"
  },
  {
    "id": "F26-MATH449-A",
    "courseCode": "MATH449",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 9,
    "synthetic": true,
    "templateSectionId": "F26-MATH220-A"
  },
  {
    "id": "S27-MATH449-A",
    "courseCode": "MATH449",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 30,
    "synthetic": true,
    "templateSectionId": "S27-MATH220-A"
  },
  {
    "id": "F26-MATH450-A",
    "courseCode": "MATH450",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 9,
    "synthetic": true,
    "templateSectionId": "F26-MATH220-A"
  },
  {
    "id": "S27-MATH450-A",
    "courseCode": "MATH450",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 30,
    "synthetic": true,
    "templateSectionId": "S27-MATH220-A"
  },
  {
    "id": "F26-MATH461-A",
    "courseCode": "MATH461",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 9,
    "synthetic": true,
    "templateSectionId": "F26-MATH220-A"
  },
  {
    "id": "S27-MATH461-A",
    "courseCode": "MATH461",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 30,
    "synthetic": true,
    "templateSectionId": "S27-MATH220-A"
  },
  {
    "id": "F26-MATH462-A",
    "courseCode": "MATH462",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 9,
    "synthetic": true,
    "templateSectionId": "F26-MATH220-A"
  },
  {
    "id": "S27-MATH462-A",
    "courseCode": "MATH462",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 30,
    "synthetic": true,
    "templateSectionId": "S27-MATH220-A"
  },
  {
    "id": "F26-CHEM100-A",
    "courseCode": "CHEM100",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Reyes",
    "days": [
      "Mon",
      "Wed"
    ],
    "startTime": "09:00",
    "endTime": "10:15",
    "location": "Turing Hall 100",
    "format": "in-person",
    "seatsTotal": 60,
    "seatsAvailable": 14,
    "synthetic": true,
    "templateSectionId": "F26-CS101-A"
  },
  {
    "id": "S27-CHEM100-A",
    "courseCode": "CHEM100",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Reyes",
    "days": [
      "Mon",
      "Wed"
    ],
    "startTime": "09:00",
    "endTime": "10:15",
    "location": "Turing Hall 100",
    "format": "in-person",
    "seatsTotal": 60,
    "seatsAvailable": 40,
    "synthetic": true,
    "templateSectionId": "S27-CS101-A"
  },
  {
    "id": "F26-CHEM110-A",
    "courseCode": "CHEM110",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Okafor",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "11:00",
    "endTime": "12:15",
    "location": "Turing Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 6,
    "synthetic": true,
    "templateSectionId": "F26-CS201-A"
  },
  {
    "id": "S27-CHEM110-A",
    "courseCode": "CHEM110",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Okafor",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "11:00",
    "endTime": "12:15",
    "location": "Turing Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 28,
    "synthetic": true,
    "templateSectionId": "S27-CS201-A"
  },
  {
    "id": "F26-CHEM111-A",
    "courseCode": "CHEM111",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Okafor",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "11:00",
    "endTime": "12:15",
    "location": "Turing Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 6,
    "synthetic": true,
    "templateSectionId": "F26-CS201-A"
  },
  {
    "id": "S27-CHEM111-A",
    "courseCode": "CHEM111",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Okafor",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "11:00",
    "endTime": "12:15",
    "location": "Turing Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 28,
    "synthetic": true,
    "templateSectionId": "S27-CS201-A"
  },
  {
    "id": "F26-CHEM115-A",
    "courseCode": "CHEM115",
    "term": "F26",
    "campus": "main",
    "instructor": "Prof. Delgado",
    "days": [
      "Mon",
      "Wed"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Commerce Hall 205",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 13,
    "synthetic": true,
    "templateSectionId": "F26-BUS201-A"
  },
  {
    "id": "F26-CHEM120-A",
    "courseCode": "CHEM120",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Okafor",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "11:00",
    "endTime": "12:15",
    "location": "Turing Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 6,
    "synthetic": true,
    "templateSectionId": "F26-CS201-A"
  },
  {
    "id": "S27-CHEM120-A",
    "courseCode": "CHEM120",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Okafor",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "11:00",
    "endTime": "12:15",
    "location": "Turing Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 28,
    "synthetic": true,
    "templateSectionId": "S27-CS201-A"
  },
  {
    "id": "F26-CHEM121-A",
    "courseCode": "CHEM121",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Okafor",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "11:00",
    "endTime": "12:15",
    "location": "Turing Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 6,
    "synthetic": true,
    "templateSectionId": "F26-CS201-A"
  },
  {
    "id": "S27-CHEM121-A",
    "courseCode": "CHEM121",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Okafor",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "11:00",
    "endTime": "12:15",
    "location": "Turing Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 28,
    "synthetic": true,
    "templateSectionId": "S27-CS201-A"
  },
  {
    "id": "F26-CHEM123-A",
    "courseCode": "CHEM123",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Reyes",
    "days": [
      "Mon",
      "Wed"
    ],
    "startTime": "09:00",
    "endTime": "10:15",
    "location": "Turing Hall 100",
    "format": "in-person",
    "seatsTotal": 60,
    "seatsAvailable": 14,
    "synthetic": true,
    "templateSectionId": "F26-CS101-A"
  },
  {
    "id": "S27-CHEM123-A",
    "courseCode": "CHEM123",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Reyes",
    "days": [
      "Mon",
      "Wed"
    ],
    "startTime": "09:00",
    "endTime": "10:15",
    "location": "Turing Hall 100",
    "format": "in-person",
    "seatsTotal": 60,
    "seatsAvailable": 40,
    "synthetic": true,
    "templateSectionId": "S27-CS101-A"
  },
  {
    "id": "F26-CHEM130-A",
    "courseCode": "CHEM130",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Reyes",
    "days": [
      "Mon",
      "Wed"
    ],
    "startTime": "09:00",
    "endTime": "10:15",
    "location": "Turing Hall 100",
    "format": "in-person",
    "seatsTotal": 60,
    "seatsAvailable": 14,
    "synthetic": true,
    "templateSectionId": "F26-CS101-A"
  },
  {
    "id": "S27-CHEM130-A",
    "courseCode": "CHEM130",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Reyes",
    "days": [
      "Mon",
      "Wed"
    ],
    "startTime": "09:00",
    "endTime": "10:15",
    "location": "Turing Hall 100",
    "format": "in-person",
    "seatsTotal": 60,
    "seatsAvailable": 40,
    "synthetic": true,
    "templateSectionId": "S27-CS101-A"
  },
  {
    "id": "F26-CHEM135-A",
    "courseCode": "CHEM135",
    "term": "F26",
    "campus": "main",
    "instructor": "Prof. Delgado",
    "days": [
      "Mon",
      "Wed"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Commerce Hall 205",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 13,
    "synthetic": true,
    "templateSectionId": "F26-BUS201-A"
  },
  {
    "id": "F26-CHEM141-A",
    "courseCode": "CHEM141",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Okafor",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "11:00",
    "endTime": "12:15",
    "location": "Turing Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 6,
    "synthetic": true,
    "templateSectionId": "F26-CS201-A"
  },
  {
    "id": "S27-CHEM141-A",
    "courseCode": "CHEM141",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Okafor",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "11:00",
    "endTime": "12:15",
    "location": "Turing Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 28,
    "synthetic": true,
    "templateSectionId": "S27-CS201-A"
  },
  {
    "id": "F26-CHEM154-A",
    "courseCode": "CHEM154",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Reyes",
    "days": [
      "Mon",
      "Wed"
    ],
    "startTime": "11:00",
    "endTime": "12:15",
    "location": "Turing Hall 100",
    "format": "in-person",
    "seatsTotal": 40,
    "seatsAvailable": 9,
    "synthetic": true,
    "templateSectionId": "F26-CS350-A"
  },
  {
    "id": "F26-CHEM154-B",
    "courseCode": "CHEM154",
    "term": "F26",
    "campus": "online",
    "instructor": "Dr. Reyes",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "16:00",
    "endTime": "17:15",
    "location": "Online — Live Sessions",
    "format": "online",
    "seatsTotal": 35,
    "seatsAvailable": 20,
    "synthetic": true,
    "templateSectionId": "F26-CS350-B"
  },
  {
    "id": "F26-CHEM203-A",
    "courseCode": "CHEM203",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Okafor",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "11:00",
    "endTime": "12:15",
    "location": "Turing Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 6,
    "synthetic": true,
    "templateSectionId": "F26-CS201-A"
  },
  {
    "id": "S27-CHEM203-A",
    "courseCode": "CHEM203",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Okafor",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "11:00",
    "endTime": "12:15",
    "location": "Turing Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 28,
    "synthetic": true,
    "templateSectionId": "S27-CS201-A"
  },
  {
    "id": "F26-CHEM205-A",
    "courseCode": "CHEM205",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Patel",
    "days": [
      "Mon",
      "Wed"
    ],
    "startTime": "13:00",
    "endTime": "14:15",
    "location": "Turing Hall 110",
    "format": "in-person",
    "seatsTotal": 50,
    "seatsAvailable": 22,
    "synthetic": true,
    "templateSectionId": "F26-CS210-A"
  },
  {
    "id": "F26-CHEM208-A",
    "courseCode": "CHEM208",
    "term": "F26",
    "campus": "main",
    "instructor": "Prof. Delgado",
    "days": [
      "Mon",
      "Wed"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Commerce Hall 205",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 13,
    "synthetic": true,
    "templateSectionId": "F26-BUS201-A"
  },
  {
    "id": "F26-CHEM210-A",
    "courseCode": "CHEM210",
    "term": "F26",
    "campus": "main",
    "instructor": "Prof. Delgado",
    "days": [
      "Mon",
      "Wed"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Commerce Hall 205",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 13,
    "synthetic": true,
    "templateSectionId": "F26-BUS201-A"
  },
  {
    "id": "F26-CHEM211-A",
    "courseCode": "CHEM211",
    "term": "F26",
    "campus": "main",
    "instructor": "Prof. Delgado",
    "days": [
      "Mon",
      "Wed"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Commerce Hall 205",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 13,
    "synthetic": true,
    "templateSectionId": "F26-BUS201-A"
  },
  {
    "id": "F26-CHEM213-A",
    "courseCode": "CHEM213",
    "term": "F26",
    "campus": "main",
    "instructor": "Prof. Nakamura",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "08:30",
    "endTime": "09:45",
    "location": "Commerce Hall 110",
    "format": "in-person",
    "seatsTotal": 55,
    "seatsAvailable": 19,
    "synthetic": true,
    "templateSectionId": "F26-ACC201-A"
  },
  {
    "id": "F26-CHEM215-A",
    "courseCode": "CHEM215",
    "term": "F26",
    "campus": "main",
    "instructor": "Prof. Delgado",
    "days": [
      "Mon",
      "Wed"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Commerce Hall 205",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 13,
    "synthetic": true,
    "templateSectionId": "F26-BUS201-A"
  },
  {
    "id": "F26-CHEM218-A",
    "courseCode": "CHEM218",
    "term": "F26",
    "campus": "north",
    "instructor": "Dr. Bennett",
    "days": [
      "Mon",
      "Wed"
    ],
    "startTime": "11:00",
    "endTime": "12:15",
    "location": "North Hall 120",
    "format": "in-person",
    "seatsTotal": 40,
    "seatsAvailable": 5,
    "synthetic": true,
    "templateSectionId": "F26-PSY210-A"
  },
  {
    "id": "F26-CHEM223-A",
    "courseCode": "CHEM223",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Okafor",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "11:00",
    "endTime": "12:15",
    "location": "Turing Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 6,
    "synthetic": true,
    "templateSectionId": "F26-CS201-A"
  },
  {
    "id": "S27-CHEM223-A",
    "courseCode": "CHEM223",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Okafor",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "11:00",
    "endTime": "12:15",
    "location": "Turing Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 28,
    "synthetic": true,
    "templateSectionId": "S27-CS201-A"
  },
  {
    "id": "F26-CHEM225-A",
    "courseCode": "CHEM225",
    "term": "F26",
    "campus": "main",
    "instructor": "Prof. Delgado",
    "days": [
      "Mon",
      "Wed"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Commerce Hall 205",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 13,
    "synthetic": true,
    "templateSectionId": "F26-BUS201-A"
  },
  {
    "id": "F26-CHEM233-A",
    "courseCode": "CHEM233",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Patel",
    "days": [
      "Mon",
      "Wed"
    ],
    "startTime": "13:00",
    "endTime": "14:15",
    "location": "Turing Hall 110",
    "format": "in-person",
    "seatsTotal": 50,
    "seatsAvailable": 22,
    "synthetic": true,
    "templateSectionId": "F26-CS210-A"
  },
  {
    "id": "F26-CHEM235-A",
    "courseCode": "CHEM235",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Patel",
    "days": [
      "Mon",
      "Wed"
    ],
    "startTime": "13:00",
    "endTime": "14:15",
    "location": "Turing Hall 110",
    "format": "in-person",
    "seatsTotal": 50,
    "seatsAvailable": 22,
    "synthetic": true,
    "templateSectionId": "F26-CS210-A"
  },
  {
    "id": "F26-CHEM245-A",
    "courseCode": "CHEM245",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Patel",
    "days": [
      "Mon",
      "Wed"
    ],
    "startTime": "13:00",
    "endTime": "14:15",
    "location": "Turing Hall 110",
    "format": "in-person",
    "seatsTotal": 50,
    "seatsAvailable": 22,
    "synthetic": true,
    "templateSectionId": "F26-CS210-A"
  },
  {
    "id": "F26-CHEM250-A",
    "courseCode": "CHEM250",
    "term": "F26",
    "campus": "main",
    "instructor": "Prof. Nakamura",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "08:30",
    "endTime": "09:45",
    "location": "Commerce Hall 110",
    "format": "in-person",
    "seatsTotal": 55,
    "seatsAvailable": 19,
    "synthetic": true,
    "templateSectionId": "F26-ACC201-A"
  },
  {
    "id": "F26-CHEM251-A",
    "courseCode": "CHEM251",
    "term": "F26",
    "campus": "main",
    "instructor": "Prof. Nakamura",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "08:30",
    "endTime": "09:45",
    "location": "Commerce Hall 110",
    "format": "in-person",
    "seatsTotal": 55,
    "seatsAvailable": 19,
    "synthetic": true,
    "templateSectionId": "F26-ACC201-A"
  },
  {
    "id": "F26-CHEM260-A",
    "courseCode": "CHEM260",
    "term": "F26",
    "campus": "main",
    "instructor": "Prof. Nakamura",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "08:30",
    "endTime": "09:45",
    "location": "Commerce Hall 110",
    "format": "in-person",
    "seatsTotal": 55,
    "seatsAvailable": 19,
    "synthetic": true,
    "templateSectionId": "F26-ACC201-A"
  },
  {
    "id": "F26-CHEM300-A",
    "courseCode": "CHEM300",
    "term": "F26",
    "campus": "main",
    "instructor": "Prof. Delgado",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "11:00",
    "endTime": "12:15",
    "location": "Commerce Hall 205",
    "format": "in-person",
    "seatsTotal": 40,
    "seatsAvailable": 16,
    "synthetic": true,
    "templateSectionId": "F26-BUS310-A"
  },
  {
    "id": "F26-CHEM301-A",
    "courseCode": "CHEM301",
    "term": "F26",
    "campus": "main",
    "instructor": "Prof. Delgado",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "11:00",
    "endTime": "12:15",
    "location": "Commerce Hall 205",
    "format": "in-person",
    "seatsTotal": 40,
    "seatsAvailable": 16,
    "synthetic": true,
    "templateSectionId": "F26-BUS310-A"
  },
  {
    "id": "F26-CHEM302-A",
    "courseCode": "CHEM302",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Okafor",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "11:00",
    "endTime": "12:15",
    "location": "Turing Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 6,
    "synthetic": true,
    "templateSectionId": "F26-CS201-A"
  },
  {
    "id": "S27-CHEM302-A",
    "courseCode": "CHEM302",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Okafor",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "11:00",
    "endTime": "12:15",
    "location": "Turing Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 28,
    "synthetic": true,
    "templateSectionId": "S27-CS201-A"
  },
  {
    "id": "F26-CHEM304-A",
    "courseCode": "CHEM304",
    "term": "F26",
    "campus": "north",
    "instructor": "Dr. Kim",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "13:00",
    "endTime": "14:15",
    "location": "North Hall 210",
    "format": "in-person",
    "seatsTotal": 35,
    "seatsAvailable": 0,
    "synthetic": true,
    "templateSectionId": "F26-CS360-A"
  },
  {
    "id": "F26-CHEM305-A",
    "courseCode": "CHEM305",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Okafor",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "09:00",
    "endTime": "10:15",
    "location": "Turing Hall 210",
    "format": "in-person",
    "seatsTotal": 40,
    "seatsAvailable": 11,
    "synthetic": true,
    "templateSectionId": "F26-CS301-A"
  },
  {
    "id": "F26-CHEM311-A",
    "courseCode": "CHEM311",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Okafor",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "09:00",
    "endTime": "10:15",
    "location": "Turing Hall 210",
    "format": "in-person",
    "seatsTotal": 40,
    "seatsAvailable": 11,
    "synthetic": true,
    "templateSectionId": "F26-CS301-A"
  },
  {
    "id": "F26-CHEM312-A",
    "courseCode": "CHEM312",
    "term": "F26",
    "campus": "north",
    "instructor": "Dr. Kim",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "13:00",
    "endTime": "14:15",
    "location": "North Hall 210",
    "format": "in-person",
    "seatsTotal": 35,
    "seatsAvailable": 0,
    "synthetic": true,
    "templateSectionId": "F26-CS360-A"
  },
  {
    "id": "F26-CHEM313-A",
    "courseCode": "CHEM313",
    "term": "F26",
    "campus": "main",
    "instructor": "Prof. Delgado",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "11:00",
    "endTime": "12:15",
    "location": "Commerce Hall 205",
    "format": "in-person",
    "seatsTotal": 40,
    "seatsAvailable": 16,
    "synthetic": true,
    "templateSectionId": "F26-BUS310-A"
  },
  {
    "id": "F26-CHEM315-A",
    "courseCode": "CHEM315",
    "term": "F26",
    "campus": "main",
    "instructor": "Prof. Delgado",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "11:00",
    "endTime": "12:15",
    "location": "Commerce Hall 205",
    "format": "in-person",
    "seatsTotal": 40,
    "seatsAvailable": 16,
    "synthetic": true,
    "templateSectionId": "F26-BUS310-A"
  },
  {
    "id": "F26-CHEM318-A",
    "courseCode": "CHEM318",
    "term": "F26",
    "campus": "main",
    "instructor": "Prof. Delgado",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "11:00",
    "endTime": "12:15",
    "location": "Commerce Hall 205",
    "format": "in-person",
    "seatsTotal": 40,
    "seatsAvailable": 16,
    "synthetic": true,
    "templateSectionId": "F26-BUS310-A"
  },
  {
    "id": "F26-CHEM319-A",
    "courseCode": "CHEM319",
    "term": "F26",
    "campus": "north",
    "instructor": "Dr. Bennett",
    "days": [
      "Mon",
      "Wed"
    ],
    "startTime": "11:00",
    "endTime": "12:15",
    "location": "North Hall 120",
    "format": "in-person",
    "seatsTotal": 40,
    "seatsAvailable": 5,
    "synthetic": true,
    "templateSectionId": "F26-PSY210-A"
  },
  {
    "id": "F26-CHEM325-A",
    "courseCode": "CHEM325",
    "term": "F26",
    "campus": "main",
    "instructor": "Prof. Delgado",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "11:00",
    "endTime": "12:15",
    "location": "Commerce Hall 205",
    "format": "in-person",
    "seatsTotal": 40,
    "seatsAvailable": 16,
    "synthetic": true,
    "templateSectionId": "F26-BUS310-A"
  },
  {
    "id": "F26-CHEM327-A",
    "courseCode": "CHEM327",
    "term": "F26",
    "campus": "main",
    "instructor": "Prof. Delgado",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "11:00",
    "endTime": "12:15",
    "location": "Commerce Hall 205",
    "format": "in-person",
    "seatsTotal": 40,
    "seatsAvailable": 16,
    "synthetic": true,
    "templateSectionId": "F26-BUS310-A"
  },
  {
    "id": "F26-CHEM329-A",
    "courseCode": "CHEM329",
    "term": "F26",
    "campus": "north",
    "instructor": "Dr. Bennett",
    "days": [
      "Mon",
      "Wed"
    ],
    "startTime": "11:00",
    "endTime": "12:15",
    "location": "North Hall 120",
    "format": "in-person",
    "seatsTotal": 40,
    "seatsAvailable": 5,
    "synthetic": true,
    "templateSectionId": "F26-PSY210-A"
  },
  {
    "id": "F26-CHEM330-A",
    "courseCode": "CHEM330",
    "term": "F26",
    "campus": "main",
    "instructor": "Prof. Osei",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "09:30",
    "endTime": "10:45",
    "location": "Commerce Hall 220",
    "format": "in-person",
    "seatsTotal": 40,
    "seatsAvailable": 8,
    "synthetic": true,
    "templateSectionId": "F26-BUS330-A"
  },
  {
    "id": "F26-CHEM335-A",
    "courseCode": "CHEM335",
    "term": "F26",
    "campus": "main",
    "instructor": "Prof. Delgado",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "11:00",
    "endTime": "12:15",
    "location": "Commerce Hall 205",
    "format": "in-person",
    "seatsTotal": 40,
    "seatsAvailable": 16,
    "synthetic": true,
    "templateSectionId": "F26-BUS310-A"
  },
  {
    "id": "F26-CHEM341-A",
    "courseCode": "CHEM341",
    "term": "F26",
    "campus": "north",
    "instructor": "Dr. Bennett",
    "days": [
      "Mon",
      "Wed"
    ],
    "startTime": "14:30",
    "endTime": "15:45",
    "location": "North Hall 118",
    "format": "in-person",
    "seatsTotal": 35,
    "seatsAvailable": 15,
    "synthetic": true,
    "templateSectionId": "F26-PSY340-A"
  },
  {
    "id": "F26-CHEM345-A",
    "courseCode": "CHEM345",
    "term": "F26",
    "campus": "main",
    "instructor": "Prof. Delgado",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "11:00",
    "endTime": "12:15",
    "location": "Commerce Hall 205",
    "format": "in-person",
    "seatsTotal": 40,
    "seatsAvailable": 16,
    "synthetic": true,
    "templateSectionId": "F26-BUS310-A"
  },
  {
    "id": "F26-CHEM355-A",
    "courseCode": "CHEM355",
    "term": "F26",
    "campus": "main",
    "instructor": "Prof. Delgado",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "11:00",
    "endTime": "12:15",
    "location": "Commerce Hall 205",
    "format": "in-person",
    "seatsTotal": 40,
    "seatsAvailable": 16,
    "synthetic": true,
    "templateSectionId": "F26-BUS310-A"
  },
  {
    "id": "F26-CHEM401-A",
    "courseCode": "CHEM401",
    "term": "F26",
    "campus": "main",
    "instructor": "Prof. Delgado",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "11:00",
    "endTime": "12:15",
    "location": "Commerce Hall 205",
    "format": "in-person",
    "seatsTotal": 40,
    "seatsAvailable": 16,
    "synthetic": true,
    "templateSectionId": "F26-BUS310-A"
  },
  {
    "id": "F26-CHEM402-A",
    "courseCode": "CHEM402",
    "term": "F26",
    "campus": "north",
    "instructor": "Dr. Bennett",
    "days": [
      "Mon",
      "Wed"
    ],
    "startTime": "11:00",
    "endTime": "12:15",
    "location": "North Hall 120",
    "format": "in-person",
    "seatsTotal": 40,
    "seatsAvailable": 5,
    "synthetic": true,
    "templateSectionId": "F26-PSY210-A"
  },
  {
    "id": "F26-CHEM403-A",
    "courseCode": "CHEM403",
    "term": "F26",
    "campus": "online",
    "instructor": "Dr. Alvarez",
    "days": [
      "Mon",
      "Wed"
    ],
    "startTime": "18:00",
    "endTime": "19:15",
    "location": "Online — Live Sessions",
    "format": "online",
    "seatsTotal": 40,
    "seatsAvailable": 17,
    "synthetic": true,
    "templateSectionId": "F26-CS420-A"
  },
  {
    "id": "F26-CHEM404-A",
    "courseCode": "CHEM404",
    "term": "F26",
    "campus": "north",
    "instructor": "Dr. Kim",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "13:00",
    "endTime": "14:15",
    "location": "North Hall 210",
    "format": "in-person",
    "seatsTotal": 35,
    "seatsAvailable": 0,
    "synthetic": true,
    "templateSectionId": "F26-CS360-A"
  },
  {
    "id": "F26-CHEM405-A",
    "courseCode": "CHEM405",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Singh",
    "days": [
      "Wed"
    ],
    "startTime": "17:00",
    "endTime": "19:45",
    "location": "Turing Hall 305",
    "format": "in-person",
    "seatsTotal": 30,
    "seatsAvailable": 12,
    "synthetic": true,
    "templateSectionId": "F26-CS410-A"
  },
  {
    "id": "S27-CHEM405-A",
    "courseCode": "CHEM405",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Singh",
    "days": [
      "Wed"
    ],
    "startTime": "17:00",
    "endTime": "19:45",
    "location": "Turing Hall 305",
    "format": "in-person",
    "seatsTotal": 30,
    "seatsAvailable": 22,
    "synthetic": true,
    "templateSectionId": "S27-CS410-A"
  },
  {
    "id": "F26-CHEM406-A",
    "courseCode": "CHEM406",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Singh",
    "days": [
      "Wed"
    ],
    "startTime": "17:00",
    "endTime": "19:45",
    "location": "Turing Hall 305",
    "format": "in-person",
    "seatsTotal": 30,
    "seatsAvailable": 12,
    "synthetic": true,
    "templateSectionId": "F26-CS410-A"
  },
  {
    "id": "S27-CHEM406-A",
    "courseCode": "CHEM406",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Singh",
    "days": [
      "Wed"
    ],
    "startTime": "17:00",
    "endTime": "19:45",
    "location": "Turing Hall 305",
    "format": "in-person",
    "seatsTotal": 30,
    "seatsAvailable": 22,
    "synthetic": true,
    "templateSectionId": "S27-CS410-A"
  },
  {
    "id": "F26-CHEM407-A",
    "courseCode": "CHEM407",
    "term": "F26",
    "campus": "online",
    "instructor": "Dr. Alvarez",
    "days": [
      "Mon",
      "Wed"
    ],
    "startTime": "18:00",
    "endTime": "19:15",
    "location": "Online — Live Sessions",
    "format": "online",
    "seatsTotal": 40,
    "seatsAvailable": 17,
    "synthetic": true,
    "templateSectionId": "F26-CS420-A"
  },
  {
    "id": "F26-CHEM408-A",
    "courseCode": "CHEM408",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Okafor",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "09:00",
    "endTime": "10:15",
    "location": "Turing Hall 210",
    "format": "in-person",
    "seatsTotal": 40,
    "seatsAvailable": 11,
    "synthetic": true,
    "templateSectionId": "F26-CS301-A"
  },
  {
    "id": "F26-CHEM409-A",
    "courseCode": "CHEM409",
    "term": "F26",
    "campus": "main",
    "instructor": "Prof. Delgado",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "11:00",
    "endTime": "12:15",
    "location": "Commerce Hall 205",
    "format": "in-person",
    "seatsTotal": 40,
    "seatsAvailable": 16,
    "synthetic": true,
    "templateSectionId": "F26-BUS310-A"
  },
  {
    "id": "F26-CHEM410-A",
    "courseCode": "CHEM410",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Singh",
    "days": [
      "Mon",
      "Wed"
    ],
    "startTime": "15:00",
    "endTime": "16:15",
    "location": "Turing Hall 120",
    "format": "in-person",
    "seatsTotal": 40,
    "seatsAvailable": 18,
    "synthetic": true,
    "templateSectionId": "F26-CS340-A"
  },
  {
    "id": "F26-CHEM411-A",
    "courseCode": "CHEM411",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Singh",
    "days": [
      "Wed"
    ],
    "startTime": "17:00",
    "endTime": "19:45",
    "location": "Turing Hall 305",
    "format": "in-person",
    "seatsTotal": 30,
    "seatsAvailable": 12,
    "synthetic": true,
    "templateSectionId": "F26-CS410-A"
  },
  {
    "id": "S27-CHEM411-A",
    "courseCode": "CHEM411",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Singh",
    "days": [
      "Wed"
    ],
    "startTime": "17:00",
    "endTime": "19:45",
    "location": "Turing Hall 305",
    "format": "in-person",
    "seatsTotal": 30,
    "seatsAvailable": 22,
    "synthetic": true,
    "templateSectionId": "S27-CS410-A"
  },
  {
    "id": "F26-CHEM412-A",
    "courseCode": "CHEM412",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Okafor",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "11:00",
    "endTime": "12:15",
    "location": "Turing Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 6,
    "synthetic": true,
    "templateSectionId": "F26-CS201-A"
  },
  {
    "id": "S27-CHEM412-A",
    "courseCode": "CHEM412",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Okafor",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "11:00",
    "endTime": "12:15",
    "location": "Turing Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 28,
    "synthetic": true,
    "templateSectionId": "S27-CS201-A"
  },
  {
    "id": "F26-CHEM413-A",
    "courseCode": "CHEM413",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Singh",
    "days": [
      "Wed"
    ],
    "startTime": "17:00",
    "endTime": "19:45",
    "location": "Turing Hall 305",
    "format": "in-person",
    "seatsTotal": 30,
    "seatsAvailable": 12,
    "synthetic": true,
    "templateSectionId": "F26-CS410-A"
  },
  {
    "id": "S27-CHEM413-A",
    "courseCode": "CHEM413",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Singh",
    "days": [
      "Wed"
    ],
    "startTime": "17:00",
    "endTime": "19:45",
    "location": "Turing Hall 305",
    "format": "in-person",
    "seatsTotal": 30,
    "seatsAvailable": 22,
    "synthetic": true,
    "templateSectionId": "S27-CS410-A"
  },
  {
    "id": "F26-CHEM414-A",
    "courseCode": "CHEM414",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Singh",
    "days": [
      "Wed"
    ],
    "startTime": "17:00",
    "endTime": "19:45",
    "location": "Turing Hall 305",
    "format": "in-person",
    "seatsTotal": 30,
    "seatsAvailable": 12,
    "synthetic": true,
    "templateSectionId": "F26-CS410-A"
  },
  {
    "id": "S27-CHEM414-A",
    "courseCode": "CHEM414",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Singh",
    "days": [
      "Wed"
    ],
    "startTime": "17:00",
    "endTime": "19:45",
    "location": "Turing Hall 305",
    "format": "in-person",
    "seatsTotal": 30,
    "seatsAvailable": 22,
    "synthetic": true,
    "templateSectionId": "S27-CS410-A"
  },
  {
    "id": "F26-CHEM416-A",
    "courseCode": "CHEM416",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Singh",
    "days": [
      "Wed"
    ],
    "startTime": "17:00",
    "endTime": "19:45",
    "location": "Turing Hall 305",
    "format": "in-person",
    "seatsTotal": 30,
    "seatsAvailable": 12,
    "synthetic": true,
    "templateSectionId": "F26-CS410-A"
  },
  {
    "id": "S27-CHEM416-A",
    "courseCode": "CHEM416",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Singh",
    "days": [
      "Wed"
    ],
    "startTime": "17:00",
    "endTime": "19:45",
    "location": "Turing Hall 305",
    "format": "in-person",
    "seatsTotal": 30,
    "seatsAvailable": 22,
    "synthetic": true,
    "templateSectionId": "S27-CS410-A"
  },
  {
    "id": "F26-CHEM417-A",
    "courseCode": "CHEM417",
    "term": "F26",
    "campus": "online",
    "instructor": "Dr. Alvarez",
    "days": [
      "Mon",
      "Wed"
    ],
    "startTime": "18:00",
    "endTime": "19:15",
    "location": "Online — Live Sessions",
    "format": "online",
    "seatsTotal": 40,
    "seatsAvailable": 17,
    "synthetic": true,
    "templateSectionId": "F26-CS420-A"
  },
  {
    "id": "F26-CHEM418-A",
    "courseCode": "CHEM418",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Singh",
    "days": [
      "Wed"
    ],
    "startTime": "17:00",
    "endTime": "19:45",
    "location": "Turing Hall 305",
    "format": "in-person",
    "seatsTotal": 30,
    "seatsAvailable": 12,
    "synthetic": true,
    "templateSectionId": "F26-CS410-A"
  },
  {
    "id": "S27-CHEM418-A",
    "courseCode": "CHEM418",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Singh",
    "days": [
      "Wed"
    ],
    "startTime": "17:00",
    "endTime": "19:45",
    "location": "Turing Hall 305",
    "format": "in-person",
    "seatsTotal": 30,
    "seatsAvailable": 22,
    "synthetic": true,
    "templateSectionId": "S27-CS410-A"
  },
  {
    "id": "F26-CHEM419-A",
    "courseCode": "CHEM419",
    "term": "F26",
    "campus": "north",
    "instructor": "Dr. Bennett",
    "days": [
      "Mon",
      "Wed"
    ],
    "startTime": "11:00",
    "endTime": "12:15",
    "location": "North Hall 120",
    "format": "in-person",
    "seatsTotal": 40,
    "seatsAvailable": 5,
    "synthetic": true,
    "templateSectionId": "F26-PSY210-A"
  },
  {
    "id": "F26-CHEM427-A",
    "courseCode": "CHEM427",
    "term": "F26",
    "campus": "online",
    "instructor": "Dr. Alvarez",
    "days": [
      "Mon",
      "Wed"
    ],
    "startTime": "18:00",
    "endTime": "19:15",
    "location": "Online — Live Sessions",
    "format": "online",
    "seatsTotal": 40,
    "seatsAvailable": 17,
    "synthetic": true,
    "templateSectionId": "F26-CS420-A"
  },
  {
    "id": "F26-CHEM430-A",
    "courseCode": "CHEM430",
    "term": "F26",
    "campus": "online",
    "instructor": "Dr. Alvarez",
    "days": [
      "Mon",
      "Wed"
    ],
    "startTime": "18:00",
    "endTime": "19:15",
    "location": "Online — Live Sessions",
    "format": "online",
    "seatsTotal": 40,
    "seatsAvailable": 17,
    "synthetic": true,
    "templateSectionId": "F26-CS420-A"
  },
  {
    "id": "F26-CHEM434-A",
    "courseCode": "CHEM434",
    "term": "F26",
    "campus": "main",
    "instructor": "Prof. Delgado",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "11:00",
    "endTime": "12:15",
    "location": "Commerce Hall 205",
    "format": "in-person",
    "seatsTotal": 40,
    "seatsAvailable": 16,
    "synthetic": true,
    "templateSectionId": "F26-BUS310-A"
  },
  {
    "id": "F26-CHEM435-A",
    "courseCode": "CHEM435",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Singh",
    "days": [
      "Mon",
      "Wed"
    ],
    "startTime": "15:00",
    "endTime": "16:15",
    "location": "Turing Hall 120",
    "format": "in-person",
    "seatsTotal": 40,
    "seatsAvailable": 18,
    "synthetic": true,
    "templateSectionId": "F26-CS340-A"
  },
  {
    "id": "F26-CHEM445-A",
    "courseCode": "CHEM445",
    "term": "F26",
    "campus": "main",
    "instructor": "Prof. Delgado",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "11:00",
    "endTime": "12:15",
    "location": "Commerce Hall 205",
    "format": "in-person",
    "seatsTotal": 40,
    "seatsAvailable": 16,
    "synthetic": true,
    "templateSectionId": "F26-BUS310-A"
  },
  {
    "id": "F26-CHEM448-A",
    "courseCode": "CHEM448",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Singh",
    "days": [
      "Wed"
    ],
    "startTime": "17:00",
    "endTime": "19:45",
    "location": "Turing Hall 305",
    "format": "in-person",
    "seatsTotal": 30,
    "seatsAvailable": 12,
    "synthetic": true,
    "templateSectionId": "F26-CS410-A"
  },
  {
    "id": "S27-CHEM448-A",
    "courseCode": "CHEM448",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Singh",
    "days": [
      "Wed"
    ],
    "startTime": "17:00",
    "endTime": "19:45",
    "location": "Turing Hall 305",
    "format": "in-person",
    "seatsTotal": 30,
    "seatsAvailable": 22,
    "synthetic": true,
    "templateSectionId": "S27-CS410-A"
  },
  {
    "id": "F26-CHEM449-A",
    "courseCode": "CHEM449",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Singh",
    "days": [
      "Wed"
    ],
    "startTime": "17:00",
    "endTime": "19:45",
    "location": "Turing Hall 305",
    "format": "in-person",
    "seatsTotal": 30,
    "seatsAvailable": 12,
    "synthetic": true,
    "templateSectionId": "F26-CS410-A"
  },
  {
    "id": "S27-CHEM449-A",
    "courseCode": "CHEM449",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Singh",
    "days": [
      "Wed"
    ],
    "startTime": "17:00",
    "endTime": "19:45",
    "location": "Turing Hall 305",
    "format": "in-person",
    "seatsTotal": 30,
    "seatsAvailable": 22,
    "synthetic": true,
    "templateSectionId": "S27-CS410-A"
  },
  {
    "id": "F26-CHEM460-A",
    "courseCode": "CHEM460",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Singh",
    "days": [
      "Wed"
    ],
    "startTime": "17:00",
    "endTime": "19:45",
    "location": "Turing Hall 305",
    "format": "in-person",
    "seatsTotal": 30,
    "seatsAvailable": 12,
    "synthetic": true,
    "templateSectionId": "F26-CS410-A"
  },
  {
    "id": "S27-CHEM460-A",
    "courseCode": "CHEM460",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Singh",
    "days": [
      "Wed"
    ],
    "startTime": "17:00",
    "endTime": "19:45",
    "location": "Turing Hall 305",
    "format": "in-person",
    "seatsTotal": 30,
    "seatsAvailable": 22,
    "synthetic": true,
    "templateSectionId": "S27-CS410-A"
  },
  {
    "id": "F26-CHEM461-A",
    "courseCode": "CHEM461",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Singh",
    "days": [
      "Wed"
    ],
    "startTime": "17:00",
    "endTime": "19:45",
    "location": "Turing Hall 305",
    "format": "in-person",
    "seatsTotal": 30,
    "seatsAvailable": 12,
    "synthetic": true,
    "templateSectionId": "F26-CS410-A"
  },
  {
    "id": "S27-CHEM461-A",
    "courseCode": "CHEM461",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Singh",
    "days": [
      "Wed"
    ],
    "startTime": "17:00",
    "endTime": "19:45",
    "location": "Turing Hall 305",
    "format": "in-person",
    "seatsTotal": 30,
    "seatsAvailable": 22,
    "synthetic": true,
    "templateSectionId": "S27-CS410-A"
  },
  {
    "id": "F26-CHEM473-A",
    "courseCode": "CHEM473",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Okafor",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "11:00",
    "endTime": "12:15",
    "location": "Turing Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 6,
    "synthetic": true,
    "templateSectionId": "F26-CS201-A"
  },
  {
    "id": "S27-CHEM473-A",
    "courseCode": "CHEM473",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Okafor",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "11:00",
    "endTime": "12:15",
    "location": "Turing Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 28,
    "synthetic": true,
    "templateSectionId": "S27-CS201-A"
  },
  {
    "id": "F26-CHEM488-A",
    "courseCode": "CHEM488",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Singh",
    "days": [
      "Wed"
    ],
    "startTime": "17:00",
    "endTime": "19:45",
    "location": "Turing Hall 305",
    "format": "in-person",
    "seatsTotal": 30,
    "seatsAvailable": 12,
    "synthetic": true,
    "templateSectionId": "F26-CS410-A"
  },
  {
    "id": "S27-CHEM488-A",
    "courseCode": "CHEM488",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Singh",
    "days": [
      "Wed"
    ],
    "startTime": "17:00",
    "endTime": "19:45",
    "location": "Turing Hall 305",
    "format": "in-person",
    "seatsTotal": 30,
    "seatsAvailable": 22,
    "synthetic": true,
    "templateSectionId": "S27-CS410-A"
  },
  {
    "id": "F26-STAT200-A",
    "courseCode": "STAT200",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Okafor",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "11:00",
    "endTime": "12:15",
    "location": "Turing Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 6,
    "synthetic": true,
    "templateSectionId": "F26-CS201-A"
  },
  {
    "id": "S27-STAT200-A",
    "courseCode": "STAT200",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Okafor",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "11:00",
    "endTime": "12:15",
    "location": "Turing Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 28,
    "synthetic": true,
    "templateSectionId": "S27-CS201-A"
  },
  {
    "id": "F26-STAT201-A",
    "courseCode": "STAT201",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Okafor",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "11:00",
    "endTime": "12:15",
    "location": "Turing Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 6,
    "synthetic": true,
    "templateSectionId": "F26-CS201-A"
  },
  {
    "id": "S27-STAT201-A",
    "courseCode": "STAT201",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Okafor",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "11:00",
    "endTime": "12:15",
    "location": "Turing Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 28,
    "synthetic": true,
    "templateSectionId": "S27-CS201-A"
  },
  {
    "id": "F26-STAT203-A",
    "courseCode": "STAT203",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Okafor",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "11:00",
    "endTime": "12:15",
    "location": "Turing Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 6,
    "synthetic": true,
    "templateSectionId": "F26-CS201-A"
  },
  {
    "id": "S27-STAT203-A",
    "courseCode": "STAT203",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Okafor",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "11:00",
    "endTime": "12:15",
    "location": "Turing Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 28,
    "synthetic": true,
    "templateSectionId": "S27-CS201-A"
  },
  {
    "id": "F26-STAT251-A",
    "courseCode": "STAT251",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Patel",
    "days": [
      "Mon",
      "Wed"
    ],
    "startTime": "13:00",
    "endTime": "14:15",
    "location": "Turing Hall 110",
    "format": "in-person",
    "seatsTotal": 50,
    "seatsAvailable": 22,
    "synthetic": true,
    "templateSectionId": "F26-CS210-A"
  },
  {
    "id": "F26-STAT300-A",
    "courseCode": "STAT300",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Okafor",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "09:00",
    "endTime": "10:15",
    "location": "Turing Hall 210",
    "format": "in-person",
    "seatsTotal": 40,
    "seatsAvailable": 11,
    "synthetic": true,
    "templateSectionId": "F26-CS301-A"
  },
  {
    "id": "F26-STAT301-A",
    "courseCode": "STAT301",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Okafor",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "11:00",
    "endTime": "12:15",
    "location": "Turing Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 6,
    "synthetic": true,
    "templateSectionId": "F26-CS201-A"
  },
  {
    "id": "S27-STAT301-A",
    "courseCode": "STAT301",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Okafor",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "11:00",
    "endTime": "12:15",
    "location": "Turing Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 28,
    "synthetic": true,
    "templateSectionId": "S27-CS201-A"
  },
  {
    "id": "F26-STAT302-A",
    "courseCode": "STAT302",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Okafor",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "09:00",
    "endTime": "10:15",
    "location": "Turing Hall 210",
    "format": "in-person",
    "seatsTotal": 40,
    "seatsAvailable": 11,
    "synthetic": true,
    "templateSectionId": "F26-CS301-A"
  },
  {
    "id": "F26-STAT303-A",
    "courseCode": "STAT303",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Singh",
    "days": [
      "Mon",
      "Wed"
    ],
    "startTime": "15:00",
    "endTime": "16:15",
    "location": "Turing Hall 120",
    "format": "in-person",
    "seatsTotal": 40,
    "seatsAvailable": 18,
    "synthetic": true,
    "templateSectionId": "F26-CS340-A"
  },
  {
    "id": "F26-STAT305-A",
    "courseCode": "STAT305",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Reyes",
    "days": [
      "Mon",
      "Wed"
    ],
    "startTime": "11:00",
    "endTime": "12:15",
    "location": "Turing Hall 100",
    "format": "in-person",
    "seatsTotal": 40,
    "seatsAvailable": 9,
    "synthetic": true,
    "templateSectionId": "F26-CS350-A"
  },
  {
    "id": "F26-STAT305-B",
    "courseCode": "STAT305",
    "term": "F26",
    "campus": "online",
    "instructor": "Dr. Reyes",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "16:00",
    "endTime": "17:15",
    "location": "Online — Live Sessions",
    "format": "online",
    "seatsTotal": 35,
    "seatsAvailable": 20,
    "synthetic": true,
    "templateSectionId": "F26-CS350-B"
  },
  {
    "id": "F26-STAT306-A",
    "courseCode": "STAT306",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Okafor",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "11:00",
    "endTime": "12:15",
    "location": "Turing Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 6,
    "synthetic": true,
    "templateSectionId": "F26-CS201-A"
  },
  {
    "id": "S27-STAT306-A",
    "courseCode": "STAT306",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Okafor",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "11:00",
    "endTime": "12:15",
    "location": "Turing Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 28,
    "synthetic": true,
    "templateSectionId": "S27-CS201-A"
  },
  {
    "id": "F26-STAT321-A",
    "courseCode": "STAT321",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Singh",
    "days": [
      "Mon",
      "Wed"
    ],
    "startTime": "15:00",
    "endTime": "16:15",
    "location": "Turing Hall 120",
    "format": "in-person",
    "seatsTotal": 40,
    "seatsAvailable": 18,
    "synthetic": true,
    "templateSectionId": "F26-CS340-A"
  },
  {
    "id": "F26-STAT335-A",
    "courseCode": "STAT335",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Reyes",
    "days": [
      "Mon",
      "Wed"
    ],
    "startTime": "11:00",
    "endTime": "12:15",
    "location": "Turing Hall 100",
    "format": "in-person",
    "seatsTotal": 40,
    "seatsAvailable": 9,
    "synthetic": true,
    "templateSectionId": "F26-CS350-A"
  },
  {
    "id": "F26-STAT335-B",
    "courseCode": "STAT335",
    "term": "F26",
    "campus": "online",
    "instructor": "Dr. Reyes",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "16:00",
    "endTime": "17:15",
    "location": "Online — Live Sessions",
    "format": "online",
    "seatsTotal": 35,
    "seatsAvailable": 20,
    "synthetic": true,
    "templateSectionId": "F26-CS350-B"
  },
  {
    "id": "F26-STAT344-A",
    "courseCode": "STAT344",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Okafor",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "09:00",
    "endTime": "10:15",
    "location": "Turing Hall 210",
    "format": "in-person",
    "seatsTotal": 40,
    "seatsAvailable": 11,
    "synthetic": true,
    "templateSectionId": "F26-CS301-A"
  },
  {
    "id": "F26-STAT404-A",
    "courseCode": "STAT404",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Okafor",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "09:00",
    "endTime": "10:15",
    "location": "Turing Hall 210",
    "format": "in-person",
    "seatsTotal": 40,
    "seatsAvailable": 11,
    "synthetic": true,
    "templateSectionId": "F26-CS301-A"
  },
  {
    "id": "F26-STAT405-A",
    "courseCode": "STAT405",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Singh",
    "days": [
      "Wed"
    ],
    "startTime": "17:00",
    "endTime": "19:45",
    "location": "Turing Hall 305",
    "format": "in-person",
    "seatsTotal": 30,
    "seatsAvailable": 12,
    "synthetic": true,
    "templateSectionId": "F26-CS410-A"
  },
  {
    "id": "S27-STAT405-A",
    "courseCode": "STAT405",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Singh",
    "days": [
      "Wed"
    ],
    "startTime": "17:00",
    "endTime": "19:45",
    "location": "Turing Hall 305",
    "format": "in-person",
    "seatsTotal": 30,
    "seatsAvailable": 22,
    "synthetic": true,
    "templateSectionId": "S27-CS410-A"
  },
  {
    "id": "F26-STAT406-A",
    "courseCode": "STAT406",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Singh",
    "days": [
      "Wed"
    ],
    "startTime": "17:00",
    "endTime": "19:45",
    "location": "Turing Hall 305",
    "format": "in-person",
    "seatsTotal": 30,
    "seatsAvailable": 12,
    "synthetic": true,
    "templateSectionId": "F26-CS410-A"
  },
  {
    "id": "S27-STAT406-A",
    "courseCode": "STAT406",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Singh",
    "days": [
      "Wed"
    ],
    "startTime": "17:00",
    "endTime": "19:45",
    "location": "Turing Hall 305",
    "format": "in-person",
    "seatsTotal": 30,
    "seatsAvailable": 22,
    "synthetic": true,
    "templateSectionId": "S27-CS410-A"
  },
  {
    "id": "F26-STAT416-A",
    "courseCode": "STAT416",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 9,
    "synthetic": true,
    "templateSectionId": "F26-MATH220-A"
  },
  {
    "id": "S27-STAT416-A",
    "courseCode": "STAT416",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Ito",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Newton Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 30,
    "synthetic": true,
    "templateSectionId": "S27-MATH220-A"
  },
  {
    "id": "F26-STAT443-A",
    "courseCode": "STAT443",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Singh",
    "days": [
      "Wed"
    ],
    "startTime": "17:00",
    "endTime": "19:45",
    "location": "Turing Hall 305",
    "format": "in-person",
    "seatsTotal": 30,
    "seatsAvailable": 12,
    "synthetic": true,
    "templateSectionId": "F26-CS410-A"
  },
  {
    "id": "S27-STAT443-A",
    "courseCode": "STAT443",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Singh",
    "days": [
      "Wed"
    ],
    "startTime": "17:00",
    "endTime": "19:45",
    "location": "Turing Hall 305",
    "format": "in-person",
    "seatsTotal": 30,
    "seatsAvailable": 22,
    "synthetic": true,
    "templateSectionId": "S27-CS410-A"
  },
  {
    "id": "F26-STAT445-A",
    "courseCode": "STAT445",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Okafor",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "11:00",
    "endTime": "12:15",
    "location": "Turing Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 6,
    "synthetic": true,
    "templateSectionId": "F26-CS201-A"
  },
  {
    "id": "S27-STAT445-A",
    "courseCode": "STAT445",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Okafor",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "11:00",
    "endTime": "12:15",
    "location": "Turing Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 28,
    "synthetic": true,
    "templateSectionId": "S27-CS201-A"
  },
  {
    "id": "F26-STAT447-A",
    "courseCode": "STAT447",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Singh",
    "days": [
      "Wed"
    ],
    "startTime": "17:00",
    "endTime": "19:45",
    "location": "Turing Hall 305",
    "format": "in-person",
    "seatsTotal": 30,
    "seatsAvailable": 12,
    "synthetic": true,
    "templateSectionId": "F26-CS410-A"
  },
  {
    "id": "S27-STAT447-A",
    "courseCode": "STAT447",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Singh",
    "days": [
      "Wed"
    ],
    "startTime": "17:00",
    "endTime": "19:45",
    "location": "Turing Hall 305",
    "format": "in-person",
    "seatsTotal": 30,
    "seatsAvailable": 22,
    "synthetic": true,
    "templateSectionId": "S27-CS410-A"
  },
  {
    "id": "F26-STAT449-A",
    "courseCode": "STAT449",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Singh",
    "days": [
      "Wed"
    ],
    "startTime": "17:00",
    "endTime": "19:45",
    "location": "Turing Hall 305",
    "format": "in-person",
    "seatsTotal": 30,
    "seatsAvailable": 12,
    "synthetic": true,
    "templateSectionId": "F26-CS410-A"
  },
  {
    "id": "S27-STAT449-A",
    "courseCode": "STAT449",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Singh",
    "days": [
      "Wed"
    ],
    "startTime": "17:00",
    "endTime": "19:45",
    "location": "Turing Hall 305",
    "format": "in-person",
    "seatsTotal": 30,
    "seatsAvailable": 22,
    "synthetic": true,
    "templateSectionId": "S27-CS410-A"
  },
  {
    "id": "F26-STAT450-A",
    "courseCode": "STAT450",
    "term": "F26",
    "campus": "online",
    "instructor": "Dr. Alvarez",
    "days": [
      "Mon",
      "Wed"
    ],
    "startTime": "18:00",
    "endTime": "19:15",
    "location": "Online — Live Sessions",
    "format": "online",
    "seatsTotal": 40,
    "seatsAvailable": 17,
    "synthetic": true,
    "templateSectionId": "F26-CS420-A"
  },
  {
    "id": "F26-STAT460-A",
    "courseCode": "STAT460",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Singh",
    "days": [
      "Wed"
    ],
    "startTime": "17:00",
    "endTime": "19:45",
    "location": "Turing Hall 305",
    "format": "in-person",
    "seatsTotal": 30,
    "seatsAvailable": 12,
    "synthetic": true,
    "templateSectionId": "F26-CS410-A"
  },
  {
    "id": "S27-STAT460-A",
    "courseCode": "STAT460",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Singh",
    "days": [
      "Wed"
    ],
    "startTime": "17:00",
    "endTime": "19:45",
    "location": "Turing Hall 305",
    "format": "in-person",
    "seatsTotal": 30,
    "seatsAvailable": 22,
    "synthetic": true,
    "templateSectionId": "S27-CS410-A"
  },
  {
    "id": "F26-STAT461-A",
    "courseCode": "STAT461",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Singh",
    "days": [
      "Wed"
    ],
    "startTime": "17:00",
    "endTime": "19:45",
    "location": "Turing Hall 305",
    "format": "in-person",
    "seatsTotal": 30,
    "seatsAvailable": 12,
    "synthetic": true,
    "templateSectionId": "F26-CS410-A"
  },
  {
    "id": "S27-STAT461-A",
    "courseCode": "STAT461",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Singh",
    "days": [
      "Wed"
    ],
    "startTime": "17:00",
    "endTime": "19:45",
    "location": "Turing Hall 305",
    "format": "in-person",
    "seatsTotal": 30,
    "seatsAvailable": 22,
    "synthetic": true,
    "templateSectionId": "S27-CS410-A"
  },
  {
    "id": "F26-DSCI100-A",
    "courseCode": "DSCI100",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Okafor",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "11:00",
    "endTime": "12:15",
    "location": "Turing Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 6,
    "synthetic": true,
    "templateSectionId": "F26-CS201-A"
  },
  {
    "id": "S27-DSCI100-A",
    "courseCode": "DSCI100",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Okafor",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "11:00",
    "endTime": "12:15",
    "location": "Turing Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 28,
    "synthetic": true,
    "templateSectionId": "S27-CS201-A"
  },
  {
    "id": "F26-DSCI200-A",
    "courseCode": "DSCI200",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Okafor",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "11:00",
    "endTime": "12:15",
    "location": "Turing Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 6,
    "synthetic": true,
    "templateSectionId": "F26-CS201-A"
  },
  {
    "id": "S27-DSCI200-A",
    "courseCode": "DSCI200",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Okafor",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "11:00",
    "endTime": "12:15",
    "location": "Turing Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 28,
    "synthetic": true,
    "templateSectionId": "S27-CS201-A"
  },
  {
    "id": "F26-DSCI220-A",
    "courseCode": "DSCI220",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Patel",
    "days": [
      "Mon",
      "Wed"
    ],
    "startTime": "13:00",
    "endTime": "14:15",
    "location": "Turing Hall 110",
    "format": "in-person",
    "seatsTotal": 50,
    "seatsAvailable": 22,
    "synthetic": true,
    "templateSectionId": "F26-CS210-A"
  },
  {
    "id": "F26-DSCI221-A",
    "courseCode": "DSCI221",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Okafor",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "11:00",
    "endTime": "12:15",
    "location": "Turing Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 6,
    "synthetic": true,
    "templateSectionId": "F26-CS201-A"
  },
  {
    "id": "S27-DSCI221-A",
    "courseCode": "DSCI221",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Okafor",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "11:00",
    "endTime": "12:15",
    "location": "Turing Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 28,
    "synthetic": true,
    "templateSectionId": "S27-CS201-A"
  },
  {
    "id": "F26-DSCI310-A",
    "courseCode": "DSCI310",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Okafor",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "11:00",
    "endTime": "12:15",
    "location": "Turing Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 6,
    "synthetic": true,
    "templateSectionId": "F26-CS201-A"
  },
  {
    "id": "S27-DSCI310-A",
    "courseCode": "DSCI310",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Okafor",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "11:00",
    "endTime": "12:15",
    "location": "Turing Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 28,
    "synthetic": true,
    "templateSectionId": "S27-CS201-A"
  },
  {
    "id": "F26-DSCI320-A",
    "courseCode": "DSCI320",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Okafor",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "11:00",
    "endTime": "12:15",
    "location": "Turing Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 6,
    "synthetic": true,
    "templateSectionId": "F26-CS201-A"
  },
  {
    "id": "S27-DSCI320-A",
    "courseCode": "DSCI320",
    "term": "S27",
    "campus": "main",
    "instructor": "Dr. Okafor",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "11:00",
    "endTime": "12:15",
    "location": "Turing Hall 210",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 28,
    "synthetic": true,
    "templateSectionId": "S27-CS201-A"
  },
  {
    "id": "F26-DSCI430-A",
    "courseCode": "DSCI430",
    "term": "F26",
    "campus": "main",
    "instructor": "Dr. Okafor",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "09:00",
    "endTime": "10:15",
    "location": "Turing Hall 210",
    "format": "in-person",
    "seatsTotal": 40,
    "seatsAvailable": 11,
    "synthetic": true,
    "templateSectionId": "F26-CS301-A"
  },
  {
    "id": "F26-BUS101-A",
    "courseCode": "BUS101",
    "term": "F26",
    "campus": "main",
    "instructor": "Prof. Whitfield",
    "days": [
      "Mon",
      "Wed"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Commerce Hall 100",
    "format": "in-person",
    "seatsTotal": 70,
    "seatsAvailable": 30
  },
  {
    "id": "F26-BUS201-A",
    "courseCode": "BUS201",
    "term": "F26",
    "campus": "main",
    "instructor": "Prof. Delgado",
    "days": [
      "Mon",
      "Wed"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Commerce Hall 205",
    "format": "in-person",
    "seatsTotal": 45,
    "seatsAvailable": 13
  },
  {
    "id": "F26-ACC201-A",
    "courseCode": "ACC201",
    "term": "F26",
    "campus": "main",
    "instructor": "Prof. Nakamura",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "08:30",
    "endTime": "09:45",
    "location": "Commerce Hall 110",
    "format": "in-person",
    "seatsTotal": 55,
    "seatsAvailable": 19
  },
  {
    "id": "F26-ECON101-A",
    "courseCode": "ECON101",
    "term": "F26",
    "campus": "main",
    "instructor": "Prof. Whitfield",
    "days": [
      "Mon",
      "Wed"
    ],
    "startTime": "10:00",
    "endTime": "11:15",
    "location": "Commerce Hall 130",
    "format": "in-person",
    "seatsTotal": 60,
    "seatsAvailable": 24
  },
  {
    "id": "F26-ECON102-A",
    "courseCode": "ECON102",
    "term": "F26",
    "campus": "main",
    "instructor": "Prof. Osei",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "13:00",
    "endTime": "14:15",
    "location": "Commerce Hall 130",
    "format": "in-person",
    "seatsTotal": 60,
    "seatsAvailable": 21
  },
  {
    "id": "F26-BUS310-A",
    "courseCode": "BUS310",
    "term": "F26",
    "campus": "main",
    "instructor": "Prof. Delgado",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "11:00",
    "endTime": "12:15",
    "location": "Commerce Hall 205",
    "format": "in-person",
    "seatsTotal": 40,
    "seatsAvailable": 16
  },
  {
    "id": "F26-BUS320-A",
    "courseCode": "BUS320",
    "term": "F26",
    "campus": "online",
    "instructor": "Prof. Nakamura",
    "days": [
      "Mon",
      "Wed"
    ],
    "startTime": "18:00",
    "endTime": "19:15",
    "location": "Online — Live Sessions",
    "format": "online",
    "seatsTotal": 40,
    "seatsAvailable": 22
  },
  {
    "id": "F26-BUS330-A",
    "courseCode": "BUS330",
    "term": "F26",
    "campus": "main",
    "instructor": "Prof. Osei",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "09:30",
    "endTime": "10:45",
    "location": "Commerce Hall 220",
    "format": "in-person",
    "seatsTotal": 40,
    "seatsAvailable": 8
  },
  {
    "id": "F26-PSY101-A",
    "courseCode": "PSY101",
    "term": "F26",
    "campus": "north",
    "instructor": "Dr. Bennett",
    "days": [
      "Mon",
      "Wed"
    ],
    "startTime": "09:00",
    "endTime": "10:15",
    "location": "North Hall 101",
    "format": "in-person",
    "seatsTotal": 65,
    "seatsAvailable": 20
  },
  {
    "id": "F26-PSY201-A",
    "courseCode": "PSY201",
    "term": "F26",
    "campus": "north",
    "instructor": "Dr. Ferreira",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "09:30",
    "endTime": "10:45",
    "location": "North Hall 115",
    "format": "in-person",
    "seatsTotal": 50,
    "seatsAvailable": 14
  },
  {
    "id": "F26-PSY210-A",
    "courseCode": "PSY210",
    "term": "F26",
    "campus": "north",
    "instructor": "Dr. Bennett",
    "days": [
      "Mon",
      "Wed"
    ],
    "startTime": "11:00",
    "endTime": "12:15",
    "location": "North Hall 120",
    "format": "in-person",
    "seatsTotal": 40,
    "seatsAvailable": 5
  },
  {
    "id": "F26-PSY301-A",
    "courseCode": "PSY301",
    "term": "F26",
    "campus": "north",
    "instructor": "Dr. Ferreira",
    "days": [
      "Mon",
      "Wed"
    ],
    "startTime": "13:00",
    "endTime": "14:15",
    "location": "North Hall 120",
    "format": "in-person",
    "seatsTotal": 35,
    "seatsAvailable": 10
  },
  {
    "id": "F26-PSY320-A",
    "courseCode": "PSY320",
    "term": "F26",
    "campus": "north",
    "instructor": "Dr. Ahmadi",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "13:00",
    "endTime": "14:15",
    "location": "North Hall 130",
    "format": "in-person",
    "seatsTotal": 35,
    "seatsAvailable": 12
  },
  {
    "id": "F26-PSY330-A",
    "courseCode": "PSY330",
    "term": "F26",
    "campus": "online",
    "instructor": "Dr. Ahmadi",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "17:00",
    "endTime": "18:15",
    "location": "Online — Live Sessions",
    "format": "online",
    "seatsTotal": 45,
    "seatsAvailable": 26
  },
  {
    "id": "F26-PSY340-A",
    "courseCode": "PSY340",
    "term": "F26",
    "campus": "north",
    "instructor": "Dr. Bennett",
    "days": [
      "Mon",
      "Wed"
    ],
    "startTime": "14:30",
    "endTime": "15:45",
    "location": "North Hall 118",
    "format": "in-person",
    "seatsTotal": 35,
    "seatsAvailable": 15
  },
  {
    "id": "F26-ENG101-A",
    "courseCode": "ENG101",
    "term": "F26",
    "campus": "main",
    "instructor": "Prof. Marsh",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "09:30",
    "endTime": "10:45",
    "location": "Humanities 140",
    "format": "in-person",
    "seatsTotal": 30,
    "seatsAvailable": 4
  },
  {
    "id": "F26-HIST105-A",
    "courseCode": "HIST105",
    "term": "F26",
    "campus": "online",
    "instructor": "Prof. Caldwell",
    "days": [
      "Mon"
    ],
    "startTime": "16:00",
    "endTime": "18:45",
    "location": "Online — Live Sessions",
    "format": "online",
    "seatsTotal": 50,
    "seatsAvailable": 31
  },
  {
    "id": "S27-PSY330-A",
    "courseCode": "PSY330",
    "term": "S27",
    "campus": "online",
    "instructor": "Dr. Ahmadi",
    "days": [
      "Tue",
      "Thu"
    ],
    "startTime": "17:00",
    "endTime": "18:15",
    "location": "Online — Live Sessions",
    "format": "online",
    "seatsTotal": 45,
    "seatsAvailable": 33
  }
];
