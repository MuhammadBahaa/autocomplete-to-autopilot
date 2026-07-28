# Header Stats Strip ("The Toolbox") Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Show totals of what the timeline produced (skills, plugins, agents, commands, scripts, courses) as a tile row at the top of the page, summed from a new optional per-milestone `stats` field.

**Architecture:** `milestones.js` entries gain an optional `stats: { skills: 2, ... }` object (data). The inline script in `index.html` sums recognized keys across all entries and renders a tile grid between the tagline and the month nav, with a count-up animation (presentation). The Milestone Composer gets a "What did this build?" row of six number inputs so new/edited entries carry the field from day one (capture). Spec: `docs/superpowers/specs/2026-07-28-stats-strip-design.md`.

**Tech Stack:** Dependency-free static HTML/CSS/ES5-style JS. No frameworks, no build step, no new files. Node is used only for verification one-liners and the existing `tools/build-composer.mjs`.

## Global Constraints

- Recognized stats keys, exactly: `skills`, `plugins`, `agents`, `commands`, `scripts`, `courses`.
- Canonical key order everywhere (data, tiles, composer): skills, plugins, agents, commands, scripts, courses.
- Values must be positive integers; zero/negative/non-numeric/unknown keys are **silently ignored** at render time — the page must never break on bad stats.
- A zero-total category renders no tile; if all totals are zero the strip renders nothing and the page looks exactly like today.
- No stats chips on timeline cards. No new files. No new dependencies.
- Match the existing inline-script style: `var`, `function`, no arrow functions, no `let`/`const` in `index.html` and `composer-template.html`.
- Repo commit style: short sentence summaries (see `git log`); every commit ends with the `Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>` trailer.
- The dev server for verification is the `milestones` entry in `.claude/launch.json` (serves repo root on port 4173). Use the browser-pane tools, never `python3 -m http.server` via Bash.

---

### Task 1: Seed `stats` data and document the field in milestones.js

**Files:**
- Modify: `milestones.js` (template comment ~line 23, plus 12 entries)

**Interfaces:**
- Consumes: nothing.
- Produces: `window.MILESTONES[i].stats` — optional plain object, subset of the six keys, positive-integer values. Tasks 2 and 3 rely on this exact shape and on the seeded totals `skills 6, plugins 2, agents 3, commands 5, scripts 7, courses 2`.

- [ ] **Step 1: Document `stats` in the template comment**

In the header comment of `milestones.js`, directly after the `certificate:` bullet (the lines ending `Upload it via the Milestone Composer.`), add:

```
     stats: { skills: 1, plugins: 1, agents: 1, commands: 3, scripts: 4,
       courses: 1 } — what this milestone itself produced; any subset of
       those six keys, positive whole numbers only. The page sums every
       entry's stats into the toolbox strip at the top. Leave it out for
       milestones that didn't build anything countable, and don't repeat
       counts already claimed by another entry.
```

- [ ] **Step 2: Add `stats` to 12 entries**

For each entry below (find it by its exact `title:`), insert the given line **directly after its `description: '…',` line**, 4-space indented, keeping every other field untouched:

| Entry title | Line to insert |
|---|---|
| `AI and Developer Productivity course` | `    stats: { courses: 1 },` |
| `Claude skills and plugins course` | `    stats: { courses: 1 },` |
| `Android Figma extractor refactor` | `    stats: { agents: 1 },` |
| `Platform-agnostic Figma Design QA skill` | `    stats: { skills: 1 },` |
| `Android code-versus-Figma comparison skill` | `    stats: { skills: 1 },` |
| `Neo Android translations plugin` | `    stats: { plugins: 1 },` |
| `Neo translations skill` | `    stats: { skills: 1 },` |
| `Translation environment setup skill` | `    stats: { skills: 1 },` |
| `Translation commands and read-only agent` | `    stats: { agents: 1, commands: 5 },` |
| `Translation automation scripts` | `    stats: { scripts: 7 },` |
| `Life OS master-agent design` | `    stats: { agents: 1 },` |
| `ReadCraft Plugin Released` | `    stats: { skills: 2, plugins: 1 },` |

No other entry gets a `stats` field. (Key order inside each object follows the canonical order — the spec's seeding table lists the same numbers.)

- [ ] **Step 3: Verify the file parses and totals are exact**

Run from the repo root:

```bash
node -e "
const { readFileSync } = require('fs');
const w = {};
new Function('window', readFileSync('milestones.js', 'utf8'))(w);
const totals = {};
for (const m of w.MILESTONES) for (const [k, v] of Object.entries(m.stats || {})) totals[k] = (totals[k] || 0) + v;
console.log(w.MILESTONES.length, JSON.stringify(totals));
"
```

Expected output (entry count unchanged at 31; totals exact):

```
31 {"courses":2,"agents":3,"skills":6,"plugins":2,"commands":5,"scripts":7}
```

If the numbers differ, a seed line landed on the wrong entry — fix before continuing.

- [ ] **Step 4: Verify the site still renders (stats are inert for now)**

Start the preview (`preview_start` with name `milestones`), open `http://localhost:4173/`, confirm via `read_page` that the timeline renders all entries and the header counter still says `31 milestones`, and `read_console_messages` shows no errors. The current renderer ignores unknown fields, so nothing visible changes in this task.

- [ ] **Step 5: Commit**

```bash
git add milestones.js
git commit -m "$(cat <<'EOF'
Seed per-milestone stats and document the stats field

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>
EOF
)"
```

---

### Task 2: Render the toolbox strip in index.html

**Files:**
- Modify: `index.html` (CSS in the `<style>` block, one container div in the header, one JS block at the end of the IIFE)

**Interfaces:**
- Consumes: `window.MILESTONES[i].stats` from Task 1; existing `esc()` helper and `data` array inside the IIFE.
- Produces: a `#stats` container that gets `class="stats"` and tile markup only when at least one total is positive. No API surface for later tasks.

- [ ] **Step 1: Add the strip CSS**

In the `<style>` block, directly after the `.tagline { … }` rule (before `nav {`), add:

```css
  .stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(96px, 1fr)); gap: 10px; margin-top: 26px; }
  .stat {
    background: #1C1630; border: 1px solid #35294F; border-radius: 14px;
    padding: 14px 8px 12px; text-align: center;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, .04);
  }
  .stat-num {
    display: block; font-family: 'Bricolage Grotesque', sans-serif; font-weight: 800;
    font-size: 28px; line-height: 1; color: #F1ECFA; font-variant-numeric: tabular-nums;
  }
  .stat-label {
    display: block; margin-top: 6px; font-family: 'Spline Sans Mono', monospace;
    font-size: 11px; letter-spacing: .1em; text-transform: uppercase; color: #8F85A6;
  }
```

- [ ] **Step 2: Add the container to the header**

Directly after the tagline line

```html
      <p class="tagline">Every milestone is a step closer.</p>
```

add:

```html
      <div id="stats"></div>
```

Deliberately class-less and empty: with no tiles it has zero visual footprint (the `hidden` attribute would lose to `display: grid`, so the class is only added by JS when there is something to show).

- [ ] **Step 3: Add aggregation + render + count-up JS**

Inside the inline IIFE in `index.html`, directly after the unlock-counter block (the `if (anyStatus) { … } else { … }` at the end) and before the closing `})();`, add:

```js
  var STAT_LABELS = [
    ['skills', 'Skills'], ['plugins', 'Plugins'], ['agents', 'Agents'],
    ['commands', 'Commands'], ['scripts', 'Scripts'], ['courses', 'Courses']
  ];
  var statTotals = {};
  data.forEach(function (m) {
    var st = m.stats;
    if (!st || typeof st !== 'object') return;
    STAT_LABELS.forEach(function (pair) {
      var v = st[pair[0]];
      if (typeof v === 'number' && isFinite(v) && v > 0 && Math.floor(v) === v) {
        statTotals[pair[0]] = (statTotals[pair[0]] || 0) + v;
      }
    });
  });
  var statTiles = STAT_LABELS.filter(function (pair) { return statTotals[pair[0]] > 0; });
  var statsEl = document.getElementById('stats');
  if (statTiles.length && statsEl) {
    statsEl.className = 'stats';
    statsEl.innerHTML = statTiles.map(function (pair) {
      return '<div class="stat">' +
        '<span class="stat-num" data-total="' + statTotals[pair[0]] + '">0</span>' +
        '<span class="stat-label">' + esc(pair[1]) + '</span></div>';
    }).join('');
    var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    Array.prototype.forEach.call(statsEl.querySelectorAll('.stat-num'), function (el) {
      var total = parseInt(el.getAttribute('data-total'), 10);
      if (reduceMotion || !window.requestAnimationFrame) { el.textContent = total; return; }
      var start = null;
      function tick(ts) {
        if (start === null) start = ts;
        var t = Math.min(1, (ts - start) / 800);
        el.textContent = Math.round(total * (1 - Math.pow(1 - t, 3)));
        if (t < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    });
  }
```

- [ ] **Step 4: Verify in the browser**

Reload `http://localhost:4173/` in the preview, then check:

1. `read_page`: six tiles appear between the tagline and the "Jump to" nav, in order Skills, Plugins, Agents, Commands, Scripts, Courses.
2. After the ~0.8 s count-up, `javascript_tool` returns the final numbers:
   ```js
   Array.from(document.querySelectorAll('#stats .stat-num')).map(e => e.textContent).join(',')
   ```
   Expected: `"6,2,3,5,7,2"`.
3. `read_console_messages` (onlyErrors): none.
4. `resize_window` preset mobile: tiles wrap to a 2–3 column grid, no horizontal scroll; restore desktop after.
5. Take a `computer` screenshot for the final report.

Reduced-motion note: the skip path (`reduceMotion` → set final value immediately) can't be toggled from the preview pane; it is covered by the explicit branch above — confirm by reading the code that no `requestAnimationFrame` runs on that path.

- [ ] **Step 5: Verify the empty state degrades to today's page**

The guard is `if (statTiles.length && statsEl)`. Confirm with a throwaway check that strips stats at runtime — run `javascript_tool`:

```js
(function () {
  var d = window.MILESTONES.map(function (m) { var c = Object.assign({}, m); delete c.stats; return c; });
  return d.some(function (m) { return m.stats; });
})()
```

Expected: `false` (proving `stats` is only additive data), and visually the container `#stats` with no class occupies no space — check `javascript_tool`: `document.getElementById('stats').getBoundingClientRect().height` **before** this task's Step 3 ran would be `0`; after, with tiles, it is `> 0`. (If a quick real check is wanted: temporarily comment out one seeded `stats:` line, reload, confirm that tile total drops accordingly, then restore.)

- [ ] **Step 6: Commit**

```bash
git add index.html
git commit -m "$(cat <<'EOF'
Render the toolbox stats strip in the header

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>
EOF
)"
```

---

### Task 3: Capture stats in the Milestone Composer

**Files:**
- Modify: `tools/composer-template.html` (CSS, one form field block, JS: `fields`, `statsPairs()`, `fieldLines()`, `buildRaw()`, `fillForm()`)

**Interfaces:**
- Consumes: the `stats` object shape from Task 1 (via the baked `window.EXISTING` snapshot).
- Produces: composer requests that include a `stats (what this built …)` line, and raw entries that include `stats: { … },` after `description`. No later task depends on names introduced here.

- [ ] **Step 1: Add the row CSS**

In the `<style>` block of `tools/composer-template.html`, directly after the `.row2 { … }` rule and its `@media` line, add:

```css
  .stats-row { display: grid; grid-template-columns: repeat(auto-fit, minmax(88px, 1fr)); gap: 8px; }
  .stat-input { display: flex; flex-direction: column; }
  .stat-input input { text-align: center; padding: 8px 6px; }
  .stat-input label { margin: 4px 0 0; text-align: center; }
```

- [ ] **Step 2: Add the form field block**

Between the description field's closing `</div>` (the one after the `Don't polish it yourself…` hint) and the `<div class="row2">` holding the attachment label/caption, add:

```html
        <div class="field">
          <label>What did this build? <span class="soft">(optional — feeds the toolbox strip at the top of the site)</span></label>
          <div class="stats-row">
            <span class="stat-input"><input id="f-st-skills" type="number" min="0" step="1" placeholder="0"><label for="f-st-skills">skills</label></span>
            <span class="stat-input"><input id="f-st-plugins" type="number" min="0" step="1" placeholder="0"><label for="f-st-plugins">plugins</label></span>
            <span class="stat-input"><input id="f-st-agents" type="number" min="0" step="1" placeholder="0"><label for="f-st-agents">agents</label></span>
            <span class="stat-input"><input id="f-st-commands" type="number" min="0" step="1" placeholder="0"><label for="f-st-commands">commands</label></span>
            <span class="stat-input"><input id="f-st-scripts" type="number" min="0" step="1" placeholder="0"><label for="f-st-scripts">scripts</label></span>
            <span class="stat-input"><input id="f-st-courses" type="number" min="0" step="1" placeholder="0"><label for="f-st-courses">courses</label></span>
          </div>
          <p class="hint">Count only what this milestone itself produced — leave 0 if it's already counted on another milestone.</p>
        </div>
```

- [ ] **Step 3: Wire the JS**

Five surgical edits inside the composer's IIFE:

a) Extend the `fields` array (draft persistence, input→render wiring, and the Clear button all key off it). **Append at the end** so old localStorage drafts (6 items, key `milestone-composer-draft-v3`) keep restoring by index — no key bump needed:

```js
  var fields = ['f-title', 'f-date', 'f-desc', 'f-att-file', 'f-att-note', 'f-cert-title',
    'f-st-skills', 'f-st-plugins', 'f-st-agents', 'f-st-commands', 'f-st-scripts', 'f-st-courses'];
```

b) Add the key list and collector, directly after the `certRepoPath()` function:

```js
  var STAT_KEYS = ['skills', 'plugins', 'agents', 'commands', 'scripts', 'courses'];
  function statsPairs() {
    var pairs = [];
    STAT_KEYS.forEach(function (k) {
      var n = parseInt(val('f-st-' + k), 10);
      if (n > 0) pairs.push([k, n]);
    });
    return pairs;
  }
```

(`parseInt('') → NaN`, and `NaN > 0` is false, so empty inputs are skipped; the `min="0"` attribute plus the `> 0` guard drop negatives.)

c) In `fieldLines()`, before the final `return lines;`, add:

```js
    var sp = statsPairs();
    if (sp.length) {
      lines.push('stats (what this built — add as a stats: {} field on the entry): ' +
        sp.map(function (p) { return p[0] + '=' + p[1]; }).join(', '));
    }
```

d) In `buildRaw()`, directly after the `out.push('  description: …');` line, add (placement matches the seeded field order — stats right after description):

```js
    var sp = statsPairs();
    if (sp.length) {
      out.push('  stats: { ' + sp.map(function (p) { return p[0] + ': ' + p[1]; }).join(', ') + ' },');
    }
```

e) In `fillForm(m)`, add at the end of the function body:

```js
    STAT_KEYS.forEach(function (k) {
      $('f-st-' + k).value = (m.stats && m.stats[k]) || '';
    });
```

(`|| ''` keeps absent/zero values as empty inputs. Zeroing every stat on an entry that already has some produces no request line — Claude then leaves the stored stats untouched, which matches the edit request's "only apply what actually changed". Removal stays a plain-English ask.)

- [ ] **Step 4: Build a preview copy and verify in the browser**

`.gitignore` does **not** cover a repo-root preview file — it must be deleted before committing.

```bash
node tools/build-composer.mjs composer-preview.html
```

Expected: `built composer-preview.html (31 entries)`.

Open `http://localhost:4173/composer-preview.html` in the preview pane, then:

1. **New entry emits stats:** `form_input` title `Test`, skills `2`, commands `1`. The "Raw milestones.js entry" panel (`#out-raw`) must contain the line `  stats: { skills: 2, commands: 1 },` after the description line, and "The request that gets copied" (`#out-request`) must contain `stats (what this built — add as a stats: {} field on the entry): skills=2, commands=1`.
2. **No stats → no field:** clear the two numbers; `#out-raw` must contain no `stats:` line.
3. **Edit round-trip:** switch to "📋 Edit existing", pick `ReadCraft Plugin Released`; the inputs must prefill skills `2`, plugins `1`, and `#out-raw` must show `  stats: { skills: 2, plugins: 1 },`.
4. `read_console_messages` (onlyErrors): none.

Then remove the preview file:

```bash
rm composer-preview.html
```

- [ ] **Step 5: Commit (template only — confirm the preview file is gone)**

```bash
git status --short
```

Expected: only `M tools/composer-template.html`. Then:

```bash
git add tools/composer-template.html
git commit -m "$(cat <<'EOF'
Composer: capture what each milestone built (stats field)

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>
EOF
)"
```

---

### Task 4: Document in README, ship, republish the Composer artifact

**Files:**
- Modify: `README.md` (the "Optional per entry" paragraph in "Add a milestone")

**Interfaces:**
- Consumes: everything above, complete and committed.
- Produces: live site + refreshed Composer artifact.

- [ ] **Step 1: Document `stats` in the README**

In the "Optional per entry" paragraph of `README.md`, extend the sentence listing optional fields with one more clause before the final "Without them, entries are plain milestones.":

```
`stats: { skills: 2, plugins: 1 }` counts what the milestone itself produced (keys: skills, plugins, agents, commands, scripts, courses) and feeds the toolbox strip at the top of the page — leave it out for milestones that built nothing countable,
```

- [ ] **Step 2: Commit**

```bash
git add README.md
git commit -m "$(cat <<'EOF'
README: document the stats field and toolbox strip

Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>
EOF
)"
```

- [ ] **Step 3: Push (this deploys the live site)**

```bash
git push origin main
```

- [ ] **Step 4: Verify the live site**

GitHub Pages redeploys in ~1–2 minutes. Then:

```bash
curl -s https://muhammadbahaa.github.io/autocomplete-to-autopilot/milestones.js | grep -cE '^    stats:'
```

Expected: `12`. If `0`, wait a minute and retry — Pages may still be building. Optionally open the live URL in the preview pane and confirm the strip shows 6 / 2 / 3 / 5 / 7 / 2.

- [ ] **Step 5: Rebuild and republish the Composer artifact**

The Composer is published as a Claude artifact (see the note in `tools/build-composer.mjs`: "republish the output to the existing artifact URL").

1. Build the final snapshot into the session scratchpad: `node tools/build-composer.mjs "<scratchpad>/milestone-composer.html"` — expected `built … (31 entries)`.
2. Find the existing artifact with the Artifact tool, `action: "list"` — look for the Milestone Composer entry and note its URL.
3. Publish the built file with the Artifact tool, passing that `url` so the link stays the same (title stays "Milestone Composer — AI Milestones" from the file's `<title>`; keep the favicon it was last published with — if unknown, use `✍️` and keep it stable from now on).
4. If no existing artifact is found in the list, stop and report it to the user with the built file attached instead of minting a new URL on your own.

- [ ] **Step 6: Final report**

Report: live URL check result, the strip screenshot from Task 2, the artifact URL, and the seeded totals (6 skills, 2 plugins, 3 agents, 5 commands, 7 scripts, 2 courses) with a reminder that any count can be corrected by editing one line in `milestones.js`.
