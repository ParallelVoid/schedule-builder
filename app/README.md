# Course Selection Helper — Demo

A static, front-end-only demo of an academic advising assistant. Pure HTML/CSS/vanilla JS —
no build step, no backend, no database, no external API calls. All data lives in
`js/data.js` and every calculation (requirement progress, prerequisite checks, scoring,
schedule conflicts) runs in the browser.

## Running it

Because the pages load each other's JS/CSS as separate files, some browsers restrict
`localStorage` when you open `index.html` directly via `file://`. For the most reliable
demo, serve the folder with any static file server, for example:

```
python3 -m http.server 8080
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
| Alex Chen | S1001 | On track, clean recommendations |
| Priya Patel | S1002 | Missing-prerequisite warnings |
| Jordan Lee | S1003 | Schedule-conflict warnings |
| Morgan Diaz | S1004 | Behind on specific required courses, senior year |

You can also use **Manual Selection** on the landing page to build a fresh "Guest"
profile with no completed courses.

## Editing the data

Everything is in `js/data.js`:

- `campuses`, `terms`, `programs` — the basic catalog scaffolding
- `requirements` — degree requirement categories per program (`specific` = every course
  listed is required; `choose` = pick `count` courses from the list)
- `courses` — the full course catalog, including `prerequisites` and `areas` (used to
  match student interests)
- `sections` — where/when each course is actually offered, per term
- `students` — sample student records with completed courses

Add a new student, course, or requirement by adding an entry to the relevant array — no
other file needs to change for the data to show up in the UI.

## File structure

```
index.html            Identify student (by ID or manual selection)
profile.html           Profile summary + course-planning preferences
recommendations.html   Ranked, explained recommendations
schedule.html          Weekly calendar, plan builder, compare, finalize
css/styles.css         Shared styles
js/data.js             All embedded demo data
js/app.js              Shared helpers (state, lookups, requirement/prereq/schedule math)
js/profile.js           profile.html logic
js/recommendations.js   Recommendation scoring engine + rendering
js/schedule.js          Schedule builder logic
js/schedule-tools.js    Validated planning tools shared by the UI and WebMCP
js/webmcp.js            Browser tool registration and lifecycle
js/schedule-assistant.js Availability, comparisons, explanations, swaps and undo UI
tests/                 Dependency-free Node regression tests
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

### Browser support

This follows the [WebMCP draft](https://webmachinelearning.github.io/webmcp/)
as of August 26, 2026: `document.modelContext.registerTool()` with an
`AbortSignal` for registration cleanup. Earlier implementations exposing
`navigator.modelContext` / `unregisterTool()` are also supported. Feature detection
handles unsupported browsers and registration failures without breaking the app.
Serve on localhost or HTTPS for browser testing; availability depends on your
browser's experimental feature support and agent integration. A “tools ready”
status means tools registered, not that an assistant is connected.

There is no polyfill, external AI request, API key, MCP server process, or embedded
chatbot. An assistant needs browser-side WebMCP support to discover and invoke
these tools; a conventional backend MCP client cannot connect directly to them.
Tools are registered only on `schedule.html`, after a student has been selected.

### Tools

| Tool | Behavior |
|---|---|
| `get_schedule_context` | Read program, requirements, completed course codes, preferences, term/campus and plan. |
| `search_course_sections` | Search eligible sections by code/title/interest; optional day, time and format constraints; `eligibleOnly: false` includes explanations for blocked sections. |
| `suggest_schedules` | Generate drafts without saving. Defaults to the saved credit load or 12 credits. Accepts `targetCredits` (1–24) or exact `courseCount` (1–6), mandatory `courseCodes`, `days`, `earliestStart`, `latestEnd`, and `format`. |
| `preview_schedule` | Check `sectionIds` and return meetings, credits, eligibility problems and conflicts without saving. |
| `apply_schedule` | Replace the plan using `sectionIds` and an `expectedPlan` snapshot. Rejects stale snapshots and invalid plans. An empty list clears the plan. |
| `add_schedule_section` | Add a `sectionId` without introducing invalid sections or conflicts. |
| `remove_schedule_section` | Remove a `sectionId`, even from an invalid plan, and report remaining problems. |
| `set_unavailable_times` | Save weekly commitment blocks; requires `unavailableTimes` and the previous `expectedUnavailableTimes` list. |
| `compare_schedules` | Compare 2–5 labeled `{ sectionIds }` options by gaps, campus days, class days, early starts or evening meetings. |
| `explain_schedule_section` | Explain eligibility, degree fit, actual preference score and trade-offs for a section in the current or supplied plan. |
| `find_schedule_swaps` | Preview replacements for one planned section; optionally keep meetings within the original times or filter by `courseCode`. |
| `swap_schedule_section` | Apply one validated replacement atomically using `sectionId`, `replacementSectionId` and `expectedPlan`. |
| `get_schedule_history` | Read the ten most recent plan snapshots, newest first, including manual edits. |
| `undo_schedule_change` | Restore the immediately previous plan using `expectedPlan`, if still valid under current constraints. |

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
await ScheduleTools.execute("set_unavailable_times", {
  unavailableTimes: [...context.unavailableTimes,
    { day: "Tue", startTime: "12:00", endTime: "24:00", label: "Busy" }],
  expectedUnavailableTimes: context.unavailableTimes
});
const drafts = await ScheduleTools.execute("suggest_schedules", {});
// Review drafts before apply_schedule; inspect get_schedule_history to undo later.
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

All writes affect only the browser's demo `plan`. There is no enrollment or agent
finalization tool. Names, student IDs, grades and free-text notes are omitted from
the tool context. Course/section outputs are marked as untrusted content. The
catalog and seat counts are static demo data from `js/data.js`, **not** the scraped
`courses.json` or live university registration data. Other tabs reload the schedule
when shared session state changes. A plan edit clears any old finalize message.

### Verification

From this `app` directory, with Node.js 18 or newer:

```sh
node --test tests/*.test.cjs
```

Tests exercise the real demo data, eligibility and conflict checks, hard constraints,
alternate sections, draft immutability, stale-plan protection, cancellation/storage
errors, weekly availability boundaries, complete-schedule metrics, explanations,
atomic swaps, persistent/scoped undo history, and mocked current/legacy/unsupported
WebMCP registration and cleanup.
Native assistant interoperability still requires a WebMCP-enabled browser.
