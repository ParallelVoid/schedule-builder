const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

function fixture(state = { studentId: 'S1001', plan: [] }) {
  let saved = JSON.stringify(state);
  const events = [];
  const context = vm.createContext({
    localStorage: { getItem: () => saved, setItem: (_, value) => { saved = value; } },
    window: { dispatchEvent: event => events.push(event.type) },
    CustomEvent: class { constructor(type) { this.type = type; } }
  });
  for (const file of ['data.js', 'app.js', 'schedule-tools.js']) {
    vm.runInContext(fs.readFileSync(path.join(__dirname, '../js', file), 'utf8'), context);
  }
  return { context, events, state: () => JSON.parse(saved),
    call: (name, input = {}) => vm.runInContext('ScheduleTools', context).execute(name, input).then(value => JSON.parse(JSON.stringify(value))) };
}

test('context omits personal details, grades, and notes but includes current planning data', async () => {
  const app = fixture({ studentId: 'S1001', preferences: { notes: 'private note' }, plan: [] });
  const result = await app.call('get_schedule_context');
  assert.equal(result.program.id, 'cs');
  assert.ok(result.completedCourseCodes.includes('CS201'));
  assert.doesNotMatch(JSON.stringify(result), /Alex|S1001|private note|grade/);
});

test('tools require an identified student and validate input without changing state', async () => {
  const app = fixture({});
  assert.match((await app.call('get_schedule_context')).error, /Identify/);
  for (const input of [null, [], { courseCount: '3' }, { courseCount: 7 }, { days: ['Saturday'] },
    { earliestStart: '25:00' }, { earliestStart: '17:00', latestEnd: '09:00' }, { extra: true }]) {
    assert.equal((await app.call('suggest_schedules', input)).ok, false);
  }
  assert.deepEqual(app.state(), {});
});

test('search normalizes spaced course codes and reports missing prerequisites when requested', async () => {
  const app = fixture({ studentId: 'S1002' });
  assert.equal((await app.call('search_course_sections', { query: 'cs 301' })).count, 0);
  const result = await app.call('search_course_sections', { query: 'cs 301', eligibleOnly: false });
  assert.equal(result.count, 1);
  assert.equal(result.sections[0].eligible, false);
  assert.match(result.sections[0].problems.join(), /Missing prerequisites/);
});

test('preview rejects unknown IDs, conflicts, duplicates, wrong term/campus and completed courses', async () => {
  const app = fixture();
  for (const sectionIds of [['unknown'], ['S27-CS410-A'], ['F26-CS101-A'],
    ['F26-CS350-A', 'F26-CS350-B'], ['F26-CS360-A']]) {
    assert.equal((await app.call('preview_schedule', { sectionIds })).valid, false);
  }
  const business = fixture({ studentId: 'S1003' });
  const result = await business.call('preview_schedule', { sectionIds: ['F26-BUS201-A', 'F26-ECON101-A'] });
  assert.equal(result.valid, false);
  assert.equal(result.conflicts.length, 1);
  assert.deepEqual(app.state().plan, []);
});

test('drafts are read-only, degree-relevant, eligible and conflict-free for every demo student', async () => {
  for (const studentId of ['S1001', 'S1002', 'S1003', 'S1004']) {
    const app = fixture({ studentId, plan: [] });
    const result = await app.call('suggest_schedules', { courseCount: 2 });
    assert.equal(result.found, true, studentId);
    for (const draft of result.suggestions) {
      assert.equal(draft.sectionIds.length, 2);
      assert.equal(draft.valid, true);
      assert.equal((await app.call('preview_schedule', { sectionIds: draft.sectionIds })).valid, true);
    }
    assert.deepEqual(app.state().plan, []);
    assert.equal(app.events.length, 0);
  }
});

test('default load targets 12 credits, including profiles saved with the old course-count preference', async () => {
  for (const preferences of [undefined, { desiredCourseCount: 3 }]) {
    const app = fixture({ studentId: 'S1004', plan: [], preferences });
    assert.equal((await app.call('get_schedule_context')).preferences.desiredCredits, 12);
    const result = await app.call('suggest_schedules');
    assert.equal(result.targetCredits, 12);
    assert.equal(result.found, true);
    assert.equal(result.suggestions[0].totalCredits, 12);
    assert.ok(result.suggestions.every(draft => draft.totalCredits >= 12 && draft.valid));
    assert.deepEqual(app.state().plan, []);
  }
});

test('credit targets use actual mixed course credits, honor saved loads and never underfill', async () => {
  const app = fixture({ studentId: 'S1001', preferences: { desiredCredits: 9 }, plan: [] });
  assert.equal((await app.call('suggest_schedules')).targetCredits, 9);
  const result = await app.call('suggest_schedules', { targetCredits: 12 });
  assert.equal(result.suggestions[0].totalCredits, 14); // Available CS courses are 4+3+4+3; no exact 12.
  assert.ok(result.suggestions.every(draft => draft.totalCredits >= 12));
  assert.equal((await app.call('suggest_schedules', { targetCredits: 18 })).found, false);
  assert.equal((await app.call('suggest_schedules', { targetCredits: 12, courseCount: 3 })).ok, false);
  assert.equal((await app.call('suggest_schedules', { targetCredits: -1 })).ok, false);
  assert.equal((await app.call('suggest_schedules', { courseCount: 2 })).suggestions[0].sectionIds.length, 2);
});

test('hard time/day constraints include every meeting; impossible requests do not relax them', async () => {
  const app = fixture();
  const result = await app.call('suggest_schedules', { courseCount: 2, days: ['Mon', 'Wed'], earliestStart: '10:00', latestEnd: '17:00' });
  assert.equal(result.found, true);
  for (const draft of result.suggestions) for (const section of draft.sections) {
    assert.ok(section.days.every(day => ['Mon', 'Wed'].includes(day)));
    assert.ok(section.startTime >= '10:00' && section.endTime <= '17:00');
  }
  assert.equal((await app.call('suggest_schedules', { courseCount: 3, days: ['Fri'] })).found, false);
  assert.equal((await app.call('suggest_schedules', { courseCodes: ['CS410'], courseCount: 1 })).found, false);
});

test('search explores alternate sections to accommodate mandatory courses', async () => {
  const app = fixture();
  // Force CS301 to collide with CS350-A. CS350-B remains a feasible alternative.
  vm.runInContext(`Object.assign(sections.find(s => s.id === 'F26-CS301-A'), { days: ['Mon', 'Wed'], startTime: '11:00', endTime: '12:15' })`, app.context);
  const result = await app.call('suggest_schedules', { courseCount: 2, courseCodes: ['cs 301', 'CS350'] });
  assert.equal(result.found, true);
  assert.ok(result.suggestions[0].sectionIds.includes('F26-CS350-B'));
});

test('asynchronous sections are not excluded by time constraints', async () => {
  const app = fixture();
  vm.runInContext(`Object.assign(sections.find(s => s.id === 'F26-CS350-B'), { days: [], startTime: '', endTime: '' })`, app.context);
  const result = await app.call('suggest_schedules', { courseCount: 1, courseCodes: ['CS350'], earliestStart: '23:00', format: 'online' });
  assert.equal(result.found, true);
  assert.deepEqual(result.suggestions[0].sectionIds, ['F26-CS350-B']);
});

test('apply is atomic, rejects stale edits, and refreshes the UI only after saving', async () => {
  const app = fixture();
  assert.equal((await app.call('apply_schedule', { sectionIds: ['unknown'], expectedPlan: [] })).ok, false);
  assert.deepEqual(app.state().plan, []);
  assert.equal((await app.call('apply_schedule', { sectionIds: ['F26-CS301-A'], expectedPlan: [] })).ok, true);
  assert.deepEqual(app.events, ['schedule-plan-changed']);
  assert.match((await app.call('apply_schedule', { sectionIds: ['F26-CS350-A'], expectedPlan: [] })).error, /plan changed/);
  assert.deepEqual(app.state().plan, ['F26-CS301-A']);
});

test('add is idempotent and rejects duplicate course sections; removal repairs invalid plans', async () => {
  const app = fixture();
  assert.equal((await app.call('add_schedule_section', { sectionId: 'F26-CS350-A' })).ok, true);
  assert.equal((await app.call('add_schedule_section', { sectionId: 'F26-CS350-A' })).ok, true);
  assert.equal((await app.call('add_schedule_section', { sectionId: 'F26-CS350-B' })).ok, false);
  assert.equal(app.state().plan.length, 1);
  const broken = fixture({ studentId: 'S1001', plan: ['unknown', 'F26-CS350-A', 'F26-CS350-B'] });
  assert.equal((await broken.call('remove_schedule_section', { sectionId: 'unknown' })).ok, true);
  assert.equal((await broken.call('remove_schedule_section', { sectionId: 'F26-CS350-B' })).valid, true);
});

test('cancellation and localStorage failure do not report successful mutations', async () => {
  const app = fixture();
  const tool = vm.runInContext('ScheduleTools.tools.find(t => t.name === "add_schedule_section")', app.context);
  assert.equal((await tool.execute({ sectionId: 'F26-CS301-A' }, { signal: { aborted: true } })).ok, false);
  vm.runInContext('localStorage.setItem = () => { throw new Error("Storage blocked"); }', app.context);
  assert.match((await app.call('add_schedule_section', { sectionId: 'F26-CS301-A' })).error, /Storage blocked/);
  assert.deepEqual(app.state().plan, []);
  assert.equal(app.events.length, 0);
});

async function browserFixture(mode, failAt = -1) {
  const app = fixture();
  const nodes = new Map();
  const handlers = {};
  const registered = new Map();
  let registrations = 0;
  const modelContext = { registerTool: async (tool, { signal }) => {
    if (registrations++ === failAt) throw new Error('Registration denied');
    registered.set(tool.name, tool);
    if (mode !== 'legacy') signal.addEventListener('abort', () => registered.delete(tool.name));
  }, unregisterTool: name => registered.delete(name) };
  app.context.AbortController = AbortController;
  app.context.console = { warn() {} };
  app.context.navigator = mode === 'legacy' ? { modelContext } : {};
  app.context.document = {
    ...(mode === 'native' ? { modelContext } : {}),
    getElementById: id => {
      if (!nodes.has(id)) nodes.set(id, { textContent: '', addEventListener() {} });
      return nodes.get(id);
    }
  };
  app.context.window.addEventListener = (name, handler) => { handlers[name] = handler; };
  vm.runInContext(fs.readFileSync(path.join(__dirname, '../js/webmcp.js'), 'utf8'), app.context);
  await new Promise(resolve => setImmediate(resolve));
  return { ...app, nodes, handlers, registered };
}

test('current and legacy WebMCP APIs register callable tools and clean up across page restore', async () => {
  for (const mode of ['native', 'legacy']) {
    const app = await browserFixture(mode);
    assert.equal(app.registered.size, 14);
    const result = await app.registered.get('get_schedule_context').execute({});
    assert.equal(result.program.id, 'cs');
    app.handlers.pagehide();
    assert.equal(app.registered.size, 0);
    app.handlers.pageshow({ persisted: true });
    await new Promise(resolve => setImmediate(resolve));
    assert.equal(app.registered.size, 14);
  }
});

test('unsupported browsers degrade gracefully and registration failure removes partial tools', async () => {
  const unsupported = await browserFixture('unsupported');
  assert.match(unsupported.nodes.get('webmcp-status').textContent, /not available/);
  const failed = await browserFixture('native', 2);
  assert.equal(failed.registered.size, 0);
  assert.match(failed.nodes.get('webmcp-status').textContent, /could not be registered/);
});

test('unavailable times exclude matching meetings everywhere without removing existing courses', async () => {
  const app = fixture({ studentId: 'S1001', plan: ['F26-CS350-B'] });
  const blocks = [{ day: 'Tue', startTime: '12:00', endTime: '24:00', label: 'Busy' }];
  const saved = await app.call('set_unavailable_times', { unavailableTimes: blocks, expectedUnavailableTimes: [] });
  assert.equal(saved.ok, true);
  assert.equal(saved.plan.valid, false);
  assert.deepEqual(app.state().plan, ['F26-CS350-B']);
  assert.ok((await app.call('search_course_sections', { query: 'CS350' })).sections.every(s => s.id !== 'F26-CS350-B'));
  assert.equal((await app.call('preview_schedule', { sectionIds: ['F26-CS350-B'] })).valid, false);
  const drafts = await app.call('suggest_schedules', { courseCount: 1, courseCodes: ['CS350'] });
  assert.ok(drafts.suggestions.every(draft => !draft.sectionIds.includes('F26-CS350-B')));
  assert.equal((await app.call('apply_schedule', { sectionIds: ['F26-CS350-B'], expectedPlan: ['F26-CS350-B'] })).ok, false);
});

test('availability accepts adjacent times, validates overnight blocks, and rejects stale updates', async () => {
  const app = fixture();
  const blocks = [{ day: 'Mon', startTime: '12:15', endTime: '15:00' }];
  await app.call('set_unavailable_times', { unavailableTimes: blocks, expectedUnavailableTimes: [] });
  assert.equal((await app.call('preview_schedule', { sectionIds: ['F26-CS350-A', 'F26-CS340-A'] })).valid, true);
  assert.equal((await app.call('set_unavailable_times', { unavailableTimes: [], expectedUnavailableTimes: [] })).ok, false);
  for (const block of [ { day: 'Mon', startTime: '23:00', endTime: '02:00' },
    { day: 'Tue', startTime: '12:00', endTime: '12:00' }, { day: 'Tue', startTime: '12:00', endTime: '25:00' }]) {
    assert.equal((await app.call('set_unavailable_times', { unavailableTimes: [block], expectedUnavailableTimes: blocks })).ok, false);
  }
  assert.deepEqual(app.state().unavailableTimes, blocks);
});

test('availability snapshots survive JSON field reordering between UI and WebMCP', async () => {
  const app = fixture({ studentId: 'S1001', plan: [], unavailableTimes: [{ day: 'Tue', startTime: '12:00', endTime: '24:00', label: 'Busy' }] });
  const result = await app.call('set_unavailable_times', { unavailableTimes: [],
    expectedUnavailableTimes: [{ label: 'Busy', endTime: '24:00', startTime: '12:00', day: 'Tue' }] });
  assert.equal(result.ok, true);
  assert.deepEqual(app.state().unavailableTimes, []);
});

test('comparison calculates exact weekly gaps and separates online meetings from campus days', async () => {
  const app = fixture();
  const result = await app.call('compare_schedules', { schedules: [
    { label: 'Two campus days', sectionIds: ['F26-CS350-A', 'F26-CS340-A'] },
    { label: 'Four class days', sectionIds: ['F26-CS350-B', 'F26-CS340-A'] }
  ] });
  assert.equal(result.schedules[0].metrics.gapMinutes, 330);
  assert.equal(result.schedules[0].metrics.classMinutes, 300);
  assert.equal(result.schedules[0].metrics.campusDays, 2);
  assert.equal(result.schedules[1].metrics.campusDays, 2);
  assert.equal(result.schedules[1].metrics.daysWithClasses, 4);
  assert.equal(result.schedules[1].metrics.gapMinutes, 0);
  assert.equal(result.schedules[1].metrics.eveningMeetings, 2);
  assert.equal(result.recommendedIndex, 1);
  assert.deepEqual(app.state().plan, []);
});

test('comparison flags different loads, ignores empty/invalid options for ranking, and handles async classes', async () => {
  const app = fixture();
  vm.runInContext(`Object.assign(sections.find(s => s.id === 'F26-CS420-A'), { days: [], startTime: '', endTime: '' })`, app.context);
  const result = await app.call('compare_schedules', { schedules: [
    { sectionIds: [] }, { sectionIds: ['unknown'] }, { sectionIds: ['F26-CS420-A'] }, { sectionIds: ['F26-CS350-A'] }
  ], rankBy: 'campusDays' });
  assert.equal(result.recommendedIndex, 2);
  assert.equal(result.schedules[2].metrics.daysWithClasses, 0);
  assert.equal(result.schedules[2].metrics.asynchronousCourses, 1);
  assert.equal(result.schedules[2].metrics.earliestStart, null);
  assert.match(result.tradeOffs.join(), /Credit loads differ/);
  assert.equal((await app.call('compare_schedules', { schedules: [] })).ok, false);
});

test('overlapping classes do not double-count minutes or create negative gaps', async () => {
  const app = fixture();
  vm.runInContext(`Object.assign(sections.find(s => s.id === 'F26-CS340-A'), { startTime: '11:30', endTime: '12:45' })`, app.context);
  const plan = await app.call('preview_schedule', { sectionIds: ['F26-CS350-A', 'F26-CS340-A'] });
  assert.equal(plan.valid, false);
  assert.equal(plan.metrics.gapMinutes, 0);
  assert.equal(plan.metrics.classMinutes, 210);
});

test('section explanations expose the real score and both preference and degree trade-offs', async () => {
  const app = fixture({ studentId: 'S1001', plan: ['F26-CS340-A', 'F26-CS420-A'],
    preferences: { priority: 'electives', interests: ['data'], days: ['Tue'], timeOfDay: 'morning', format: 'online' } });
  const result = await app.call('explain_schedule_section', { sectionId: 'F26-CS340-A' });
  assert.equal(result.section.fit.score, result.section.fit.scoreBreakdown.reduce((sum, item) => sum + item.points, 0));
  assert.ok(result.section.fit.reasons.some(reason => reason.includes('data')));
  assert.ok(result.tradeOffs.some(reason => reason.includes('preferred days')));
  assert.ok(result.tradeOffs.some(reason => reason.includes('online')));
  const extra = await app.call('explain_schedule_section', { sectionId: 'F26-CS410-A' });
  assert.equal(extra.section.eligible, false);
  assert.ok(extra.tradeOffs.some(reason => reason.includes('already cover')));
});

test('swap previews preserve other courses and same-time searches respect every meeting window', async () => {
  const app = fixture({ studentId: 'S1001', plan: ['F26-CS350-A', 'F26-CS340-A'] });
  const options = await app.call('find_schedule_swaps', { sectionId: 'F26-CS340-A' });
  assert.ok(options.alternatives.some(option => option.replacementSectionId === 'F26-CS420-A'));
  assert.ok(options.alternatives.every(option => option.sectionIds[0] === 'F26-CS350-A'));
  assert.equal((await app.call('find_schedule_swaps', { sectionId: 'F26-CS340-A', sameTimeOnly: true })).alternatives.length, 0);
  vm.runInContext(`Object.assign(sections.find(s => s.id === 'F26-CS420-A'), { startTime: '15:15', endTime: '16:00' })`, app.context);
  assert.equal((await app.call('find_schedule_swaps', { sectionId: 'F26-CS340-A', sameTimeOnly: true })).alternatives[0].replacementSectionId, 'F26-CS420-A');
  assert.deepEqual(app.state().plan, ['F26-CS350-A', 'F26-CS340-A']);
});

test('swap is atomic, validates before writing, and creates a single undo step', async () => {
  const before = ['F26-CS301-A', 'F26-CS350-A'];
  const app = fixture({ studentId: 'S1001', plan: before });
  assert.equal((await app.call('swap_schedule_section', { sectionId: 'F26-CS350-A', replacementSectionId: 'unknown', expectedPlan: before })).ok, false);
  assert.equal(app.state().planHistory, undefined);
  assert.equal((await app.call('swap_schedule_section', { sectionId: 'F26-CS350-A', replacementSectionId: 'F26-CS350-B', expectedPlan: before })).ok, true);
  assert.deepEqual(app.state().plan, ['F26-CS301-A', 'F26-CS350-B']);
  assert.equal(app.state().planHistory.length, 1);
  assert.equal((await app.call('swap_schedule_section', { sectionId: 'F26-CS350-A', replacementSectionId: 'F26-CS340-A', expectedPlan: before })).ok, false);
  assert.equal((await app.call('undo_schedule_change', { expectedPlan: app.state().plan })).ok, true);
  assert.deepEqual(app.state().plan, before);
  assert.equal(app.state().planHistory.length, 0);
});

test('undo respects later manual edits, persists across reload, and rejects stale callers', async () => {
  const app = fixture();
  await app.call('add_schedule_section', { sectionId: 'F26-CS301-A' });
  vm.runInContext(`setState({ plan: ['F26-CS301-A', 'F26-CS350-A'] })`, app.context);
  const restoredSession = fixture(app.state());
  assert.equal((await restoredSession.call('get_schedule_history')).entries[0].source, 'manual');
  assert.equal((await restoredSession.call('undo_schedule_change', { expectedPlan: ['F26-CS301-A'] })).ok, false);
  assert.equal((await restoredSession.call('undo_schedule_change', { expectedPlan: restoredSession.state().plan })).ok, true);
  assert.deepEqual(restoredSession.state().plan, ['F26-CS301-A']);
  assert.equal((await restoredSession.call('undo_schedule_change', { expectedPlan: restoredSession.state().plan })).ok, true);
  assert.deepEqual(restoredSession.state().plan, []);
});

test('undo never restores a newly blocked plan or crosses student/term boundaries', async () => {
  const app = fixture();
  await app.call('add_schedule_section', { sectionId: 'F26-CS350-A' });
  await app.call('remove_schedule_section', { sectionId: 'F26-CS350-A' });
  await app.call('set_unavailable_times', { unavailableTimes: [{ day: 'Mon', startTime: '10:00', endTime: '14:00' }], expectedUnavailableTimes: [] });
  assert.equal((await app.call('undo_schedule_change', { expectedPlan: [] })).ok, false);
  assert.equal(app.state().planHistory.length, 2);
  vm.runInContext(`setState({ selectedTerm: 'S27' })`, app.context);
  assert.equal((await app.call('get_schedule_history')).entries.length, 0);
  assert.deepEqual(app.state().unavailableTimes, []);
  assert.equal((await app.call('undo_schedule_change', { expectedPlan: [] })).ok, false);
});

test('history is capped at ten changes, no-ops do not add snapshots, and failed writes remain atomic', async () => {
  const app = fixture();
  for (let i = 0; i < 6; i++) {
    await app.call('add_schedule_section', { sectionId: 'F26-CS350-A' });
    await app.call('remove_schedule_section', { sectionId: 'F26-CS350-A' });
  }
  assert.equal(app.state().planHistory.length, 10);
  await app.call('remove_schedule_section', { sectionId: 'F26-CS350-A' });
  const before = app.state();
  assert.equal(before.planHistory.length, 10);
  vm.runInContext('localStorage.setItem = () => { throw new Error("Storage blocked"); }', app.context);
  assert.equal((await app.call('undo_schedule_change', { expectedPlan: [] })).ok, false);
  assert.deepEqual(app.state(), before);
});
