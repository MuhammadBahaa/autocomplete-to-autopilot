/* =============================================================
   YOUR MILESTONES LIVE HERE — this is the only file you edit.
   Order in this file doesn't matter — the page sorts every entry by
   its own `date` string at render time, so just add new entries
   anywhere (the bottom is the easiest place to find again).

   Copy this template, paste it just above the closing ]; and
   fill it in:

   {
     title: 'What you achieved',
     date: '23 Jul 2026',            // day is optional: 'Jul 2026' works too
     description: 'Two or three sentences about what you did and learned.',
   },

   HOUSE RULES — these hold for every entry:
     · description length: 3 to 5 lines as rendered on the card, which is
       roughly 200-440 characters. Under 200 reads thin, over 440 spills past
       five lines. (Line count is measured at desktop width; a phone wraps
       the same text to more lines, and that's expected.)
     · a milestone whose subject is a single skill is titled
       'Create <skill-name> Skill' — the skill's own name in the middle,
       e.g. 'Create daily-review Skill'. Release, packaging and course
       entries keep a descriptive title.

   Optional per entry:
     status: 'done' | 'progress' | 'planned' — adds a status pill
       ('planned' renders dimmed).
     cvWorthy: true — adds the gold ★ CV-worthy badge.
     attachment: { file: 'welcome.eml', note: 'a playful caption',
       image: 'attachments/pic.png' } — shows the screenshot as a
       thumbnail at the card's bottom; click to open it full-size.
       image is required (file only names it for the alt text, and
       a missing image file drops the whole block).
     certificate: { title: 'Course name', image: 'attachments/cert.jpg' }
       — shows the certificate as a framed image view on the card
       (click to zoom). Upload it via the Milestone Composer. Each one
       also counts toward the Certificates tile in the toolbox strip —
       that tile is derived from this field, so there is no certificate
       key in stats.
     stats: { skills: 1, plugins: 1, agents: 1, commands: 3, mcps: 4,
       courses: 1 } — what this milestone itself produced; any subset of
       those six keys, positive whole numbers only. The page sums every
       entry's stats into the toolbox strip at the top. Leave it out for
       milestones that didn't build anything countable, and don't repeat
       counts already claimed by another entry.
   ============================================================= */

window.CONFIG = {
  accentColor: '#8B6CFF', // designer options: '#8B6CFF' | '#FF6B4A' | '#2FD6A0' | '#FF4D9D'
  newestFirst: false,     // true = show the latest milestone at the top
};

window.MILESTONES = [
  {
    title: 'AI assistants as shortcuts',
    date: '2025 - Jan 2026',
    description: 'Used Copilot, Gemini and ChatGPT as day-to-day shortcuts for generating code, answering technical questions, rewriting communication and accelerating individual development tasks. At this stage, AI was mainly a faster assistant rather than part of a structured engineering workflow.',
  },
  {
    title: 'Context-aware AI engineering',
    date: 'Jan 2026 - Apr 2026',
    description: 'Moved from isolated prompts to context-aware AI work by giving agents real repository, architecture and business context. Used this approach while driving a large cards refactor covering broad and deeply connected parts of the application, which reached testing with only two reported bugs.',
  },
  {
    title: 'AI and Developer Productivity course',
    date: 'Mar 15, 2026',
    description: 'Completed the LinkedIn Learning course, covering AI across everyday development work — assisted code generation, refactoring, review, documentation and testing. The useful framing was treating each area as a specific kind of friction a model can absorb: the boilerplate that would otherwise be typed by hand, the second pass before a human reviewer sees a change, and the tests and docs that get written last and trimmed first.',
    stats: { courses: 1 },
    certificate: {
      title: 'AI and Developer Productivity',
      image: 'attachments/ai-and-developer-productivity-certificate.jpg',
    },
  },
  {
    title: 'Discovery of context files',
    date: '1 Apr 2026',
    description: 'Started understanding the idea of writing project context into a file the agent reads on its own — .cursorrules in Cursor, CLAUDE.md for Claude Code. Applied it on the ApoApp project, where the stack, the conventions and the build steps stopped being re-explained in every prompt and started living in the repository. The instructions became part of the project rather than part of each conversation.',
  },
  {
    title: 'Discovery of agent skills',
    date: '10 Apr 2026',
    description: 'Discovered the agent skill concept and began moving beyond large context files toward reusable, focused instructions an agent loads only when a specific workflow calls for them. The shift was from telling a model everything up front to letting it pull in what the task actually needs.',
  },
  {
    title: 'Getting started with Cursor',
    date: '4 Apr 2026',
    description: 'Signed up for Cursor Pro and started coding in it alongside GitHub Copilot, adding Tab autocomplete, Cmd+K inline edits and codebase-aware chat. It was the first real step toward context awareness: the editor could index the repository instead of working from a pasted snippet — and answer quality turned out to depend less on the wording of the prompt than on what the model was allowed to see.',
    attachment: {
      file: 'welcome-to-cursor.eml',
      note: 'Receipt attached — no going back after this one.',
      image: 'attachments/welcome-to-cursor.png',
    },
  },
  {
    title: 'Moving in with Claude',
    date: '4 Jun 2026',
    description: 'Subscribed to Claude Pro and started working in Claude Code from the terminal. The welcome email promised a first commit within five minutes — an accurate forecast, judging by how much of the rest of this timeline ended up being built with it.',
    attachment: {
      file: 'welcome-to-claude-code.eml',
      note: '“Your Claude Code journey starts now.” — it really did. 🚀',
      image: 'attachments/welcome-to-claude-code.png',
    },
  },
  {
    title: 'Claude Cowork, Code, Skills and Plugins course',
    date: 'Jun 29, 2026',
    description: 'Completed the Udemy course, continuing the same practical thread: putting AI inside real engineering work rather than beside it. It covered Claude Code as a terminal-based agentic tool, skills as focused instructions loaded only when a workflow calls for them, plugins as distributable bundles, and Cowork for everyday tasks outside the editor. The structure around the tools mattered more than the tools.',
    stats: { courses: 1 },
    certificate: {
      title: 'Claude - Master Claude Cowork, Claude Code, Skills & Plugins',
      image: 'attachments/claude-master-claude-cowork-claude-code-skills-plugins-course-certificate.jpg',
    },
  },
  {
    title: 'Android Figma extractor refactor',
    date: 'Jun 2026',
    description: 'Revamped the Android Figma design extractor into a generic, reusable and ledger-first workflow. Reduced the main agent body from roughly 298 lines to about 104 lines and moved approximately 210 lines of detailed guidance into four focused reference files.',
    stats: { agents: 1 },
  },
  {
    title: 'Create figma-design-qa Skill',
    date: 'Jun 2026',
    description: 'Reviews a Figma design before any code is written, on any platform. Flags Arabic/English parity gaps, legacy and missing tokens, unmappable values and accessibility minimums — and can post the issues back onto the frames.',
    stats: { skills: 1 },
  },
  {
    title: 'Create figma-implementation-qa Skill',
    date: 'Jun 2026',
    description: 'Compares existing UI code against its Figma design, with the stack detected from the repo. Read-only until the fixes are approved, and it reports designer-side issues apart from code-side ones, because the two go to different people.',
    stats: { skills: 1 },
  },
  {
    title: 'Neo Android translations plugin',
    date: 'Jun 2026 - Jul 2026',
    description: 'Created the Android translations plugin to centralize and automate translation workflows for the Neo Android project. Alongside the skills it bundles slash commands for adding and updating strings and a read-only extractor agent whose only job is to report where a given piece of copy already exists across the shared translation file, so the decision to reuse or create is made against evidence rather than a guess.',
    stats: { plugins: 1, agents: 1, commands: 3 },
  },
  {
    title: 'Create neo-translations Skill',
    date: 'Jun 2026 - Jul 2026',
    description: 'Manages user-facing strings through the shared central translations file: checks whether a string already exists before adding one, drafts the other languages, and generates the Android strings.xml locally.',
    stats: { skills: 1 },
  },
  {
    title: 'Multi-agent engineering workflow',
    date: 'Jul 2026 - Present',
    description: 'Started structuring engineering workflows that assign different tasks to Claude, Codex and Copilot according to their strengths, instead of expecting one agent to handle planning, implementation, review and validation equally well.',
  },
  {
    title: 'Create fixing-at-the-right-scope Skill',
    date: 'Jul 21, 2026',
    description: 'Split out of the client plugin, since the judgement was never client-specific. Given a root cause already understood, it decides where the fix belongs — and pushes back on the one-line change to shared code that repairs one screen and quietly changes every other caller.',
    stats: { skills: 1, plugins: 1 },
  },
  {
    title: 'ReadCraft Plugin Released',
    date: 'Jul 22, 2026',
    description: 'Released the plugin publicly, built around two core capabilities: reviewing skills and plugins with technical improvement suggestions, and helping people read and review complex English skill files more easily. Announced the release publicly, which turned a design concept into a distributed, installable product.',
    stats: { skills: 2, plugins: 1 },
    attachment: {
      file: 'release-announcement.png',
      note: 'Shipped it, then said it out loud. 🚀',
      image: 'attachments/readcraft-plugin-released.jpg',
    },
  },
  {
    title: 'Figma skills merged into the shared engineering harness',
    date: 'Jul 30, 2026',
    description: 'The Figma agent revamp — the rebuilt extraction agent, the platform-agnostic design-QA skill and the Android code-versus-Figma comparison skill — finally merged into the team’s shared engineering harness after riding through repeated rebases since mid-June. What had been sitting on a personal branch became something every plugin on the harness, and every engineer using it, could pull in directly.',
    attachment: {
      file: 'engineering-harness-repo.png',
      note: 'Four contributors deep now — not exactly a personal branch anymore.',
      image: 'attachments/engineering-harness-repo.png',
    },
  },
  {
    title: 'Figma MCP comment workflow',
    date: '21 Jun 2026',
    description: 'Joined the small team building a Figma MCP server, contributing the piece that posts design-review comments straight back onto Figma frames from inside the coding workflow — closing the loop between implementation and design feedback without switching over to the Figma app.',
    stats: { mcps: 1 },
    attachment: {
      file: 'figma-mcp-comments.png',
      note: 'Three names on the contributors list — this one included.',
      image: 'attachments/figma-mcp-comments.png',
    },
  },
  {
    title: 'Figma craft packaged as an installable plugin',
    date: '4 Aug 2026',
    description: 'The idea had waited since 8 June, when a design-versus-implementation review done by hand produced a table so dense it needed a second table to explain itself. Two things survived into the shipped plugin: the review was a repeatable process, and designer-side issues belong in a list of their own because they go to different people. Packaging was the harder half \u2014 each skill had quietly assumed the repository around it.',
    stats: { skills: 1, plugins: 1 },
  },
  {
    title: 'Built and shipped an MCP platform',
    date: '5 Aug 2026',
    description: 'Started on 16 June with a small want: the design-review comment the Figma QA skill already produced should be posted by a server, not by a step inside a skill. It landed as a reusable service foundation carrying figma-craft as its first server, behind a Traefik edge. The part worth keeping was the auth \u2014 a shared bearer token eventually leaks, so login moved into the browser over OAuth and a client now connects with a URL and nothing else.',
    stats: { mcps: 1 },
  },
  {
    title: 'Create clean-architecture Skill',
    date: '9 Aug 2026',
    description: 'Implements or refactors a feature in Clean Architecture layers on any stack. It reads the project’s own conventions first and lets them win; the one rule it never bends is that dependencies point inward, and it stops to ask when the codebase already breaks it.',
    stats: { skills: 1 },
  },
  {
    title: 'Create neo-create-mr Skill',
    date: '15 Jun 2026',
    description: 'Pushes the current app branch and opens or updates a merge request through a fixed description template. Refuses to run from a protected branch, and blocks the push until unit tests and static analysis pass.',
    stats: { skills: 1 },
  },
  {
    title: 'Create neo-remote-config Skill',
    date: '15 Jun 2026',
    description: 'Captures the app’s remote-config pattern so a new feature flag lands with the right default, the right accessor type, and a named handoff for the server-side key — the step that is easy to forget and leaves a flag dead on arrival.',
    stats: { skills: 1 },
  },
  {
    title: 'Create neo-translations-setup Skill',
    date: 'Jun 2026 - Jul 2026',
    description: 'Sets up or repairs the translations environment: credentials, VPN reach, auth, the local clone and the pinned scripts. Idempotent, and it fixes the safe checks itself instead of only reporting them.',
    stats: { skills: 1 },
  },
  {
    title: 'Create daily-review Skill',
    date: '17 Jul 2026',
    description: 'Closes the day. Sorts unfinished work into carry forward, reschedule, delegate or drop instead of rolling all of it into tomorrow, and treats a missed block as evidence for the next plan rather than a verdict on the last one.',
    stats: { skills: 1 },
  },
  {
    title: 'Create week-planner Skill',
    date: '17 Jul 2026',
    description: 'Plans the week as three outcomes with hours attached, not a wish list. Everything else is parked out loud, and when commitments pass roughly 60% of the available time the scope gets cut before the week starts.',
    stats: { skills: 1 },
  },
  {
    title: 'Create plan-your-day Skill',
    date: '21 Jul 2026',
    description: 'Turns calendar and task inputs into a day that actually fits. Capacity is counted after breaks, transitions and buffer, and overflow goes into a visible “does not fit today” list rather than being compressed away.',
    stats: { skills: 1 },
  },
  {
    title: 'Create replan-your-day Skill',
    date: '21 Jul 2026',
    description: 'Rebuilds the rest of the day after a delay, interruption or cancellation, moving only what the new constraint requires. Protected transitions and buffer survive the rebuild — work is dropped before they are.',
    stats: { skills: 1 },
  },
  {
    title: 'Create shop-creation Skill',
    date: '10 Apr 2026',
    description: 'The first skill built here, written the same day the concept clicked. One command takes an empty folder to a live shop for Mauve’s ApoApp: scaffold, remote project, Firebase, signing key, wire-up, merge request, build and Play upload. It also covers rebranding an existing shop. Building one explained what a skill is for better than reading about it did.',
    stats: { skills: 1 },
  },
  {
    title: 'Clean Architecture released as a one-command install',
    date: '10 Aug 2026',
    description: 'A day after the skill was finished it went out publicly through the marketplace — free, open, and installed with one command across Claude Code, Codex, Cursor, Copilot and Gemini CLI rather than only the agent it was written on. Announcing it forced a plainer account of what it does, because the flattering version would not have survived anyone installing it. Publishing was the real test of the portability work.',
    attachment: {
      file: 'clean-architecture-skill-released.png',
      note: 'One command, five agents, zero setup paragraphs. 🚀',
      image: 'attachments/clean-architecture-skill-released.png',
    },
  },
  {
    title: 'Discovered MCP, starting with Mauve GitLab',
    date: '15 Apr 2026',
    description: 'Discovered the Model Context Protocol and put it to work through a GitLab server pointed at Mauve’s instance, so issues, merge requests and pipelines could be read from inside the editor instead of pasted in by hand. Reading about the protocol explained far less than watching an agent go and fetch its own context for the first time.',
  },
  {
    title: 'OpenAI Codex Masterclass course',
    date: 'Aug 16, 2026',
    description: 'Completed the Udemy masterclass on OpenAI Codex — 11.5 hours on the agent that already shares the rotation with Claude and Copilot. Taking it deliberately rather than picking it up in passing was the point: splitting work across agents only holds up if each one’s defaults, strengths and failure modes are known first-hand instead of assumed from the one used most.',
    stats: { courses: 1 },
    certificate: {
      title: 'The Complete OpenAI Codex Masterclass 2026',
      image: 'attachments/the-complete-openai-codex-masterclass-2026-certificate.jpg',
    },
  },
];
