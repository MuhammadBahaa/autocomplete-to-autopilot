// Builds the Milestone Composer artifact HTML from composer-template.html,
// baking in a snapshot of milestones.js (window.EXISTING) so the artifact's
// "Edit existing" tab reflects the current data, plus this repo's absolute path
// so the "Open in Claude Code" button can deep-link a session rooted here.
//
// Usage: node tools/build-composer.mjs <output.html>
// Then republish the output to the existing artifact URL.
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const src = readFileSync(new URL('../milestones.js', import.meta.url), 'utf8');
const windowShim = {};
new Function('window', src)(windowShim);
const milestones = windowShim.MILESTONES || [];

const projectDir = resolve(dirname(fileURLToPath(import.meta.url)), '..');

let html = readFileSync(new URL('composer-template.html', import.meta.url), 'utf8');
html = html.replace('/*__DATA__*/[]', JSON.stringify(milestones));
html = html.replace('__SNAPSHOT_META__', `${milestones.length} milestones · snapshot ${new Date().toISOString().slice(0, 10)}`);
html = html.replace("'__PROJECT_DIR__'", JSON.stringify(projectDir));

const out = process.argv[2];
if (!out) { console.error('usage: node tools/build-composer.mjs <output.html>'); process.exit(1); }
writeFileSync(out, html);
console.log(`built ${out} (${milestones.length} entries)`);
