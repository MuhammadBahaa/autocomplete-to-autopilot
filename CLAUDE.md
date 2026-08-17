# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A single-page timeline of one person's AI learning journey, live at
https://muhammadbahaa.github.io/autocomplete-to-autopilot/. It is dependency-free
static HTML: no framework, no `package.json`, no build step, no tests, no linter.
`index.html` renders whatever `milestones.js` exports and nothing else; every
other file is support.

## Shipping

Work directly on `main` and push there. Every push to `main` redeploys the site
through GitHub Pages automatically — there is no release step and no workflow to
trigger. It goes live in roughly 20 seconds.

Don't assume the deploy landed; check it:

```bash
curl -s "https://muhammadbahaa.github.io/autocomplete-to-autopilot/milestones.js?cb=$RANDOM" | grep 'the new title'
```

Grep the code form, never the bare key name. The header comment inside
`milestones.js` documents every optional key, so `grep cvWorthy` matches that
comment on *any* deploy and reports success against the copy already live.
Anchor on the indented code and check the count instead —
`grep -c '^    cvWorthy: true,'` — or match on new prose that exists nowhere else.

## Run locally

```bash
python3 -m http.server 4173     # then open http://localhost:4173
```

Nothing to build, lint or test. The one gate worth running is
`node --check milestones.js` — a stray quote there blanks the entire page,
because the renderer reads `window.MILESTONES` and has no fallback.

## milestones.js is the whole database

One array of plain objects, and the only file that normally changes. The header
comment in it is the authoritative spec; `README.md` says the same thing for
humans. Both must be updated together when a convention changes.

Rules that are easy to get wrong:

- **Order in the file is meaningless.** `index.html` sorts every entry by its own
  `date` string at render time, so new entries go at the bottom. Ranges anchor on
  their start (`'Jan 2026 - Apr 2026'` → Jan); `Late`/`Early`/`Mid` nudge a
  month-only date to day 25/5/15.
- **Same-date entries fall back to array position** (`Array#sort` is stable). Two
  entries on one day are ordered by where they sit in the file — the only case
  where file position matters.
- **Descriptions run 3–5 rendered lines**, about 200–440 characters. Count before
  committing; under 200 reads thin, over 440 spills past five lines.
- **A milestone whose subject is one skill is titled `Create <skill-name> Skill`**
  using the skill's own name (`Create daily-review Skill`). Release, packaging,
  course and MCP entries keep a descriptive title.
- **`stats` counts what the milestone itself produced**, and feeds the toolbox
  strip. Omit it for entries that learned or adopted something rather than
  building it, and never repeat a count another entry already claims.
- **Certificates are counted from the `certificate` field itself**, never from
  `stats` — there is no `certificates` stat key.
- **`cvWorthy: true` is deliberately scarce.** It prints the gold ★ badge and
  turns that entry's dot on the timeline rail accent-coloured. Six entries carry
  it — the measurable delivery, the production tooling, the first public release,
  the team adoption, the platform, the public distribution. It marks shipped
  outcomes, not good days; spreading it further is what would break it. The badge
  text lives in `index.html` and reads "★ Turning point", so relabelling it is a
  one-string change there, not a data change. The data key is still `cvWorthy`,
  which no longer matches the label — don't "fix" one to match the other without
  asking; renaming the key touches `index.html`, every marked entry and all three
  rule files.

## Attachments and certificates

Images referenced from `milestones.js` live in `attachments/`. A missing file is
not fatal: the card drops the block via `onerror`, so a broken path fails
silently and can sit unnoticed. `attachments/welcome-to-cursor.png` is referenced
and missing today.

Certificates usually arrive as PDF. Render the first page to a JPG 1600px wide to
match the existing ones, and keep the source PDF beside it:

```python
import pymupdf
d = pymupdf.open(SRC); p = d[0]; z = 1600 / p.rect.width
p.get_pixmap(matrix=pymupdf.Matrix(z, z)).save(OUT)   # d.save(OUT_PDF) for the source
```

## The Milestone Composer artifact

`tools/composer-template.html` + `tools/build-composer.mjs` produce a standalone
page the owner uses to draft entries away from an editor. It **bakes in a
snapshot of `milestones.js`**, so it goes stale the moment that file changes:

```bash
node tools/build-composer.mjs /tmp/milestone-composer.html
```

Then publish that file to the existing artifact
`https://claude.ai/code/artifact/afb51228-cb61-464c-b882-bd2c71271692`, passing
the URL so it updates in place instead of spawning a second artifact.

The build script derives `PROJECT_DIR` from wherever it runs, and the composer's
"Open in Claude Code" button deep-links to that path. The correct value is the
owner's machine — `/Users/muhammad.bahaa/StudioProjects/AI Milestones`. Building
from a cloud session bakes in the container path instead, which silently breaks
the button; patch it back before publishing.

The composer's polish prompt also restates the house rules, so a rule change
means editing three files: `milestones.js`, `README.md`, and the `POLISH` string
in `tools/composer-template.html`.

## open.html

The protocol hand-off for the Composer's launch button — an artifact iframe
cannot navigate to a `claude://` URL, so it links here and this page does the
hand-off. The page is public and deliberately accepts only `claude://code/new?…`
and `claude://resume?session=<uuid>`. Keep that allowlist whole; widening it
turns the page into an open redirect into arbitrary URL schemes.

## Other directories

- `design/` — the original Claude Design export the page was implemented from.
- `docs/superpowers/` — the plan and spec behind the stats strip, kept for
  reference rather than as live documentation.
