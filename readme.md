# Termwise — the WebMCP schedule builder

![Termwise banner](public/og.png)

This project was developed for [OpenAI's WebMCP Challenge](https://webmcp.devpost.com/).

## Demo video

[![Watch the Termwise demo on YouTube](https://img.youtube.com/vi/IAl7dKv-Zw4/maxresdefault.jpg)](https://youtu.be/IAl7dKv-Zw4)

## Running it

Because the pages load each other's JS/CSS as separate files, some browsers restrict
`localStorage` when you open `index.html` directly via `file://`. For the most reliable
demo, serve the folder with any static file server, for example:

```
python3 -m http.server 8080 --directory app
```

Then open `http://localhost:8080/index.html`.

(Opening `index.html` directly usually works fine in Chrome and Firefox too — just use
a local server if you notice the app "forgetting" the student between pages.)

## Demo flow

**Identify → Profile & Preferences → Recommendations → Schedule**

On the landing page, use the **"Try a demo student"** list for a one-click way to load a
scenario, or type a student ID directly (S1001–S1004).

| Student | ID | What it demonstrates |
|---|---|---|
| Peter Parker | S1001 | On track, clean recommendations |
| Nathan Drake | S1002 | Missing-prerequisite warnings |
| Philip Fry | S1003 | Schedule-conflict warnings |
| Han Solo | S1004 | Senior close to graduation who needs specific required courses |

You can also use **Manual Selection** on the landing page to build a fresh "Guest"
profile with no completed courses.

## Editing the data

The browser-ready data is split into two files:

- `app/js/course-data.js` — all course definitions and course offerings
- `campuses`, `terms`, `programs` in `app/js/data.js` — the basic catalog scaffolding
- `requirements` — degree requirement categories per program (`specific` = every course
  listed is required; `choose` = pick `count` courses from the list)
- `students` — sample student records with completed courses

The 256 undergraduate CPSC, MATH, CHEM, STAT, and DSCI definitions retain their source titles,
descriptions, credits, prerequisite text, and corequisite text. Since `courses.json` contains no section
records, every scraped course has synthetic demo offerings inherited from its closest
legacy course. `templateCourseCode`, `templateSectionId`, and `synthetic` preserve that
provenance; instructors, schedules, rooms, formats, and seat counts are not live data.

## File structure

```
app/index.html            Identify student (by ID or manual selection)
app/profile.html          Profile summary + course-planning preferences
app/recommendations.html  Ranked, explained recommendations
app/schedule.html         Weekly calendar, plan builder, compare, finalize
app/css/styles.css        Shared styles
app/js/course-data.js     Full course catalog and course offerings
app/js/data.js            Terms, programs, requirements and demo students
app/js/app.js             Shared helpers (state, lookups, requirement/prereq/schedule math)
app/js/theme.js           Persistent system/light/dark theme selection
app/js/profile.js         profile.html logic
app/js/recommendations.js Recommendation scoring engine + rendering
app/js/schedule.js        Schedule builder logic
app/js/schedule-tools.js  Validated planning tools shared by the UI and WebMCP
app/js/webmcp.js          Browser tool registration and lifecycle
app/js/schedule-assistant.js Availability, comparisons, explanations, swaps and undo UI
app/tests/                Dependency-free Node regression tests
```

## WebMCP-assisted scheduling

Identify a student, save preferences, then open **Schedule**. The **Plan with an
assistant** panel reports whether the browser exposes WebMCP. Use a compatible
browser assistant while this page is open, for example:

- “Build three courses toward my degree, with no classes before 10 AM.”
- “Find online sections whose prerequisites I've completed.”
- “Preview CS301 and CS350 together, then add a third degree course.”

**Preview suggested schedules** also works without WebMCP or an AI assistant.
It generates up to three drafts from saved preferences, defaulting to **12 credits**.
The credit-load selector offers 6, 9, 12, 15, or 18 credits. Profiles saved before
credit targets were introduced also default to 12 credits until changed.
Drafts meet or exceed the target, with the closest credit totals ranked first;
an exact target is preferred when feasible. Review the courses and
meeting times, then select **Use this draft** to replace the current local plan.
The calendar, credit total, comparison and course list update immediately.

### Tools

The browser exposes five tools. Related workflows are optional parameters on the
same tools used by the UI; the former standalone tool names are no longer registered
or callable.

| Tool | Behavior and optional parameters |
|---|---|
| `get_schedule_context` | Read program, requirements, completed courses, preferences, term/campus, unavailable times and plan. `includeHistory: true` adds `history` with the ten most recent plan snapshots, newest first. |
| `search_course_sections` | Search by code/title/interest; optional day, time, format and `unavailableTimes` constraints. `eligibleOnly: false` includes blocked sections with explanations. |
| `suggest_schedules` | Generate drafts using `targetCredits` (1–24) or exact `courseCount` (1–6), mandatory `courseCodes`, days, times, format and optional `unavailableTimes`. Alternatively, `replaceSectionId` previews swaps, optionally narrowed by `courseCode` or `sameTimeOnly` and the same hard constraints. Swap mode cannot use load or `courseCodes` options. |
| `preview_schedule` | Validate `sectionIds` (defaults to current plan) and return meetings, credits, metrics and conflicts. `explainSectionId` adds an `explanation` against that plan. Alternatively, `schedules` compares 2–5 labeled `{ sectionIds }` options with optional `rankBy`; cannot combine with `sectionIds` or `explainSectionId`. Optional `unavailableTimes` applies to either mode. |
| `apply_schedule` | Choose at most one plan change: `sectionIds` replaces/clears, `addSectionId`, `removeSectionId`, `swap: { sectionId, replacementSectionId }`, or `undo: true`. Every plan change requires `expectedPlan`. Optional `unavailableTimes` saves commitments, alone or with a plan change except undo, and requires `expectedUnavailableTimes`. Combined changes save atomically. |

On search, suggest and preview, `unavailableTimes` replaces saved blocks **for that
request only**. Omit it to use saved blocks; pass `[]` to try without them. These
tools remain read-only. Responses with an override include `unavailableTimes` and
the saved `expectedUnavailableTimes` snapshot for a later explicit save.
On apply, the same parameter persists the complete list; preserve existing blocks
when adding one. Availability-only saves keep current courses and flag conflicts.
Removal can repair an invalid plan and reports remaining problems. Other plan
edits must be valid; adding an existing section without new commitments is a no-op.
Conflicting modes and parameters without their required companion are rejected.

### Migrating existing calls

| Former tool | Replacement |
|---|---|
| `set_unavailable_times` | `suggest_schedules({ unavailableTimes, ... })` for a request-only constraint; `apply_schedule({ unavailableTimes, expectedUnavailableTimes })` to save it. |
| `compare_schedules` | `preview_schedule({ schedules, rankBy })` |
| `explain_schedule_section` | `preview_schedule({ explainSectionId, sectionIds })`; read `result.explanation`. |
| `find_schedule_swaps` | `suggest_schedules({ replaceSectionId, courseCode, sameTimeOnly })` |
| `add_schedule_section` / `remove_schedule_section` | `apply_schedule({ addSectionId, expectedPlan })` / `apply_schedule({ removeSectionId, expectedPlan })` |
| `swap_schedule_section` | `apply_schedule({ swap: { sectionId, replacementSectionId }, expectedPlan })` |
| `get_schedule_history` | `get_schedule_context({ includeHistory: true })`; read `result.history`. |
| `undo_schedule_change` | `apply_schedule({ undo: true, expectedPlan })` |

### Commitments, comparisons, swaps and undo

The Schedule page exposes all five workflows without requiring an AI assistant:

- Expand **Unavailable times** to add or remove weekly blocks. For an all-afternoon
  commitment, use e.g. Tuesday `12:00` to `24:00`. Blocks use local campus time;
  split overnight commitments into separate days. Up to 20 blocks are stored.
  Existing courses are kept and conflicts are flagged. Search, drafts, swap
  previews and plan validation respect these blocks; recommendations also exclude
  blocked sections. Use neutral labels if details are private: block labels are
  exposed through the planning context. These are hard constraints, unlike the
  soft preferred-day/time settings or unenforced profile notes.
- **Preview suggested schedules** shows metrics on every draft and compares the
  drafts with the current plan. Choose the comparison priority to find fewer gaps,
  campus days, class days, early starts or evening meetings. A low metric is not
  a blanket recommendation: differing credit loads and invalid plans are flagged.
- **Why?** beside a course shows prerequisite status, requirement fit, the scoring
  breakdown, preference mismatches and conflicts. Drafts can also be explained
  against their proposed plan, including electives that exceed remaining slots.
- **Swap** previews a replacement while keeping every other section unchanged.
  Select the same-time checkbox to keep the new meetings entirely inside the old
  meeting windows. Core-course searches retain the course code; elective options
  share a degree requirement category. Review the new credit total before applying.
- **Undo last plan change** restores one snapshot, including changes from manual
  controls. Swaps create one snapshot, not a remove/add pair. History survives
  reloads and is limited to ten changes. No-ops create no snapshots. Changing the
  student, term or campus clears history and unavailable times to prevent leaking
  another planning context. Undo leaves preferences and commitments intact and
  refuses to restore a plan that is now blocked or otherwise invalid.

Comparison metrics use actual meeting times, not rounded calendar slots. Campus
days count only in-person meetings; class days include synchronous online classes.
Weekly gaps sum the time between merged class intervals within each day. They may
contain work or other commitments, so they are not guaranteed free time. Early
meetings start before 09:00; evening meetings end after 17:00. Asynchronous courses
add credits but no scheduled meetings. Travel time is not estimated.

Example browser-assistant flow for “I work Tuesdays after noon”:

```js
const context = await ScheduleTools.execute("get_schedule_context", {});
const drafts = await ScheduleTools.execute("suggest_schedules", {
  unavailableTimes: [...context.unavailableTimes,
    { day: "Tue", startTime: "12:00", endTime: "24:00", label: "Busy" }]
});
// No state has changed. After the student chooses a draft and requests saving:
if (drafts.found) {
  await ScheduleTools.execute("apply_schedule", {
    sectionIds: drafts.suggestions[0].sectionIds,
    expectedPlan: drafts.expectedPlan,
    unavailableTimes: drafts.unavailableTimes,
    expectedUnavailableTimes: drafts.expectedUnavailableTimes
  });
}
// get_schedule_context({ includeHistory: true }) reads history;
// apply_schedule({ undo: true, expectedPlan }) restores the previous plan.
```

Typical agent flow: read context → search or suggest → preview → apply when the
student requests the change. Pass `expectedPlan` from the suggestion result (or
`plan.sectionIds` from fresh context) to `apply_schedule`. Mutating tools return
`ok`; validation failures return `ok: false` with an `error`. Preview returns
`valid`, `problems` and `conflicts`; suggestions return `found` and `suggestions`.

For local development you can invoke the same callbacks in the page console:

```js
const drafts = await ScheduleTools.execute("suggest_schedules", {
  targetCredits: 12,
  earliestStart: "10:00",
  days: ["Mon", "Tue", "Wed", "Thu"]
});
console.log(drafts); // Read-only. Review before applying a draft.
```

Explicit constraints are strict: every meeting must fit allowed days and start/end
limits in local campus time. Saved day/time/format preferences are ranking hints,
not exclusions. Asynchronous sections have no meeting constraints. Suggestions
include requested courses and fill remaining slots with degree courses, skip full
sections, require prerequisites already completed, and check alternative sections
to avoid collisions. They never return fewer credits than the target, and use at
most six courses. Explicit `courseCount` requests still require that exact count
and replace the credit target for that request; do not pass both load options.
Search is bounded at 50,000 nodes; `truncated` reports an incomplete search.

All writes affect only the browser's demo plan, unavailable times and local plan history. There is no enrollment or agent
finalization tool. Names, student IDs, grades and free-text notes are omitted from
the tool context. Course/section outputs are marked as untrusted content. The
course definitions come from `courses.json`; offerings and seat counts are synthetic
demo data in `app/js/course-data.js`, **not** live university registration data. Other tabs reload the schedule
when shared session state changes. A plan edit clears any old finalize message.

### Verification

From the repository root, with Node.js 18 or newer:

```sh
node --test app/tests/*.test.cjs
```

Tests exercise the real demo data, eligibility and conflict checks, hard constraints,
alternate sections, draft immutability, stale-plan protection, cancellation/storage
errors, weekly availability boundaries, complete-schedule metrics, explanations,
atomic plan/availability saves, request-only availability, consolidated UI calls,
atomic swaps, persistent/scoped undo history, and mocked current/legacy/unsupported
WebMCP registration and cleanup.
Native assistant interoperability still requires a WebMCP-enabled browser.
