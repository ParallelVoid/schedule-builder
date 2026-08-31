Build a polished web application demo for a **University Course Selection Helper**. The goal is to demonstrate how a university student could use an intelligent assistant to choose courses for an upcoming term.

## Technology & Architecture

This must be a **simple static HTML/CSS/JavaScript application**.

* Use standard **HTML pages**
* Use **vanilla JavaScript only**
* Use standard CSS
* Do **not** use React, Vue, Angular, Svelte, or other JavaScript frameworks
* Do **not** use TypeScript
* Do **not** require Node.js, npm, or a build process
* Do **not** build a backend
* Do **not** use a database
* Do **not** implement authentication
* Do **not** make external API calls
* The demo should run by opening the HTML files in a browser or through a simple static web server
* Keep the code straightforward and easy for a developer to understand and modify

Use multiple HTML pages where appropriate, with shared CSS and vanilla JavaScript files. For example:

* `index.html` — student identification
* `profile.html` — student profile
* `recommendations.html` — course recommendations
* `schedule.html` — course schedule/final plan

Navigation between pages can use standard links and/or `localStorage` to maintain demo state.

## 1. Demo Data Architecture

This is a **front-end demo only**.

All demo data should be **embedded directly in the application as JSON objects/arrays**. Do not retrieve data from a backend or external service.

Create structured JSON data for:

* Student profiles
* Courses
* Degree/major requirements
* Completed courses
* Course prerequisites
* Course sections and availability
* Class meeting times
* Campuses
* Academic terms

The vanilla JavaScript code should use this embedded JSON as its data source throughout the demo.

Keep the JSON data clearly separated from the UI and application logic where practical, so that it is easy to modify.

For example, create a dedicated JavaScript data file such as:

`data.js`

containing objects/arrays such as:

```javascript
const students = [...];
const courses = [...];
const programs = [...];
const requirements = [...];
const terms = [...];
const campuses = [...];
```

Make the data easy to find and modify so that additional students, courses, majors, and requirements can be added later without changing the application logic.

Include enough realistic mock data to demonstrate different scenarios, including:

* A student with straightforward course recommendations
* A student missing prerequisites
* A student with schedule conflicts
* A student who needs specific courses to satisfy degree requirements

## 2. Initial Page

Create a clean landing/input page with two ways to identify the student.

### Option A — Student ID

* Student ID input
* "Load Student Profile" button
* When submitted, search the embedded `students` JSON data
* If a matching student is found, load their profile
* If no student is found, display a helpful error message

### Option B — Manual Selection

Provide:

* Campus
* Academic term
* Major/program
* Year of study

Include a prominent **"Start Course Planning"** button.

## 3. Student Profile

After the student is identified, display a profile summary containing:

* Student name
* Student ID
* Major/program
* Year of study
* Campus
* Completed courses
* Current credits
* Remaining degree requirements

All information should be retrieved from the embedded JSON data.

Use vanilla JavaScript to calculate or derive relevant information where appropriate rather than hard-coding the results.

## 4. Course-Planning Preferences

Allow the student to specify:

* Desired number of courses or credits
* Required courses vs. electives
* Areas/subjects of interest
* Preferred days/times
* Online vs. in-person preference
* Other scheduling constraints

## 5. Course Recommendations

Provide a **"Generate Recommendations"** action.

Use the embedded JSON data and client-side vanilla JavaScript logic to generate recommendations.

Display a ranked list of recommended courses.

For every recommendation, show:

* Course code
* Course name
* Credits
* Instructor
* Meeting times
* Location/campus
* Availability
* Whether prerequisites are satisfied
* Why this course is recommended

For example:

> Recommended because it satisfies a remaining degree requirement, fits your preferred schedule, and you have completed all prerequisites.

Clearly flag:

* Missing prerequisites
* Schedule conflicts
* Courses that do not count toward the student's degree
* Other important warnings

## 6. Recommendation Logic

Implement the recommendation logic in vanilla JavaScript.

Recommendations should take into account factors such as:

1. Whether the course satisfies a remaining degree requirement
2. Whether prerequisites have been completed
3. Whether the course is available in the selected term
4. Whether the course is offered at the student's campus
5. Schedule conflicts
6. Student's preferred schedule
7. Student's subject/area interests
8. Desired course load
9. Required vs. elective status

Show the user **why** a course received its recommendation.

The goal is not to create a sophisticated AI model. For this demo, use clear, deterministic client-side rules operating on the embedded JSON data.

## 7. Build My Schedule

Let the student:

* Add recommended courses
* Remove courses
* Compare courses
* See total credits
* See a weekly calendar/schedule
* See schedule conflicts automatically
* Review a final recommended course plan

Include a clear **"Finalize Plan"** button, but do not actually register the student for courses.

## 8. Demo Experience

Make the application feel realistic and polished:

* Use realistic mock university/course data
* Include several sample student profiles in the embedded JSON
* Include different scenarios that demonstrate the recommendation logic
* Include empty, loading, and error states
* Make recommendation reasoning easy to understand
* Use responsive design for desktop and tablet
* Keep the interface simple enough that a demo user can understand the workflow immediately

Consider including a **"Try Demo Student"** or sample student selector so that a presenter can quickly demonstrate the application without manually entering data.

## 9. File Structure

Keep the project simple and organized. A suggested structure is:

```text
/
├── index.html
├── profile.html
├── recommendations.html
├── schedule.html
├── css/
│   └── styles.css
└── js/
    ├── data.js
    ├── app.js
    ├── profile.js
    ├── recommendations.js
    └── schedule.js
```

Adjust the structure if needed, but keep it simple and framework-free.

## 10. Important Constraints

The final application must:

* Be built with **HTML + CSS + vanilla JavaScript**
* Use **no JavaScript frameworks**
* Use **no backend**
* Use **no database**
* Use **no authentication**
* Use **no external APIs**
* Use **embedded JSON/mock data**
* Perform all demo calculations and recommendation logic in the browser
* Be easy to run as a static website
* Be easy to modify by editing the JSON data

The overall user flow should be:

**Identify Student → Review Profile → Set Preferences → Get Recommendations → Build Schedule → Review Final Plan**

The visual design should feel modern, trustworthy, and appropriate for a university advising/product demo.
