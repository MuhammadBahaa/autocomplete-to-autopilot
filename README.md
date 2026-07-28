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
  description: 'One or two sentences about what you did and learned.',
  resources: ['artifact name', { label: 'GitHub repo', url: 'https://github.com/...' }],
},
```

Optional per entry: `status: 'done' | 'progress' | 'planned'` adds a status pill (`planned` renders dimmed), `cvWorthy: true` adds a gold ★ badge, `attachment: { file, note, image }` adds a playful 📎 attachment chip — when `image` points to a file in [attachments/](attachments/), the card shows a clickable thumbnail that opens it full-size — and `certificate: { title, image }` shows a certificate as a framed image view on the card (click to zoom). Without them, entries are plain milestones.

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
