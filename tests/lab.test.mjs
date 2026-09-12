import assert from 'node:assert/strict';
import { missions, services, initial, defaults, requirements, applyConfig, validate, advance } from '../app/lab.ts';

let stages = 0;
let choices = 0;
for (const mission of missions) {
  let session = initial(mission);
  for (const task of mission.tasks) {
    let winners = 0;
    for (const choice of task.choices) {
      const config = { ...defaults(task.service), ...session.resources[task.service]?.config, ...requirements(mission, session.step)[task.service], ...choice.config };
      const attempt = applyConfig(session, task.service, 'test-resource', config);
      if (validate(mission, attempt).length === 0) winners++;
      const repaired = applyConfig(attempt, task.service, 'test-resource', { ...config, ...requirements(mission, session.step)[task.service] });
      assert.deepEqual(validate(mission, repaired), [], `${mission.id}: repair ${task.title}`);
      choices++;
    }
    assert.equal(winners, 1, `${mission.id}: exactly one correct choice`);
    session = applyConfig(session, task.service, 'test-resource', { ...defaults(task.service), ...session.resources[task.service]?.config, ...task.require });
    assert.deepEqual(validate(mission, session), [], `${mission.id}: practical ${task.title}`);
    for (const [id, config] of Object.entries(requirements(mission, session.step))) {
      for (const [key, value] of Object.entries(config)) {
        assert.ok(services[id].fields.find(f => f.key === key)?.options.some(o => o[0] === value));
      }
    }
    stages++;
    session = advance(mission, session);
  }
}
assert.equal(missions.length, 11);
assert.equal(stages, 33);
assert.equal(choices, 99);
console.log(`PASS: ${missions.length} missions, ${stages} practical stages, ${choices} choices and recovery paths`);
