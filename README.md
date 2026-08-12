# AI Milestones — from autocomplete to autopilot

My personal AI learning journey, tracked milestone by milestone on a single page.

**Live site:** https://muhammadbahaa.github.io/autocomplete-to-autopilot/

Designed in [Claude Design](https://claude.ai/design/p/d4541bde-cccb-4a71-b04d-52e697066dc4) (`AI Milestones v2.dc.html`, kept in [design/](design/) for reference) and implemented as a dependency-free static page: no build step, no framework — just `index.html` + `milestones.js`.

## Add a milestone

All data lives in one file: [milestones.js](milestones.js). Open it, copy the template from the comment at the top, paste it at the bottom of the list, fill it in, save. That's it — the page renders everything else (numbering, month navigation, counters) automatically.

```js
{
  title: 'What you achieved',
  date: '23 Jul 2026',            // day is optional: 'Jul 2026' works too
  description: 'Two or three sentences about what you did and learned.',
},
```

**House rules for every entry:**

- **Description length is 3 to 5 lines** as rendered on the card — roughly 200–440 characters. Shorter than 200 reads thin; longer than 440 spills past five lines. Line count is measured at desktop width, so a phone wraps the same text to more lines and that's fine.
- **A milestone about a single skill is titled `<skill-name> Skill`**, using the skill's own name (`daily-review Skill`, `clean-architecture Skill`). Release, packaging and course entries keep a descriptive title.

Optional per entry: `status: 'done' | 'progress' | 'planned'` adds a status pill (`planned` renders dimmed), `cvWorthy: true` adds a gold ★ badge, `attachment: { file, note, image }` shows the screenshot as a clickable thumbnail that opens full-size (`image` must point to a file in [attachments/](attachments/); `file` only names it for the alt text), `certificate: { title, image }` shows a certificate as a framed image view on the card (click to zoom), and `stats: { skills: 2, plugins: 1 }` counts what the milestone itself produced (keys: skills, plugins, agents, commands, mcps, courses) and feeds the toolbox strip at the top of the page — leave it out for milestones that built nothing countable. Without them, entries are plain milestones.

The toolbox strip also shows a Certificates tile, counted straight from the `certificate` fields — upload one and the tile goes up on its own, so there is nothing to enter by hand.

Three ways to do it, pick whichever is closest to hand:

1. **Ask Claude Code** — "add a milestone: finished X on date Y, it's CV-worthy". It edits, commits and pushes; the site updates itself.
2. **GitHub web editor** — open `milestones.js` on github.com, press the ✏️ pencil, paste a filled-in template, commit. Works from any device, deploys in ~1 minute.
3. **Local editor** — edit the file, then `git commit` and `git push`.

## Display options

At the top of `milestones.js`:

- `accentColor` — `'#8B6CFF'` (default), `'#FF6B4A'`, `'#2FD6A0'`, or `'#FF4D9D'`
- `newestFirst` — `true` shows the latest milestone at the top

## Run locally

Open `index.html` in a browser, or:

```bash
python3 -m http.server 4173
```

## Publish

Already set up: the repo is `MuhammadBahaa/autocomplete-to-autopilot` and every push to `main` redeploys the site automatically via GitHub Pages. (One-time setup was `gh repo create … --public --source . --push` followed by `gh api repos/…/pages -X POST -f "source[branch]=main" -f "source[path]=/"`.)
