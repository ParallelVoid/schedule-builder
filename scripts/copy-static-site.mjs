import { cpSync, copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const source = new URL('../app/', import.meta.url);
const destination = new URL('../dist/client/', import.meta.url);

mkdirSync(destination, { recursive: true });
for (const page of [
  'index.html',
  'profile.html',
  'recommendations.html',
  'schedule.html',
]) {
  copyFileSync(new URL(page, source), new URL(page, destination));
}

for (const directory of ['css', 'js']) {
  cpSync(new URL(`${directory}/`, source), new URL(`${directory}/`, destination), {
    recursive: true,
  });
}

console.log(`Copied Termwise static pages to ${join('dist', 'client')}`);
