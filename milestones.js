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
     description: 'One or two sentences about what you did and learned.',
   },

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
    description: 'Completed the LinkedIn Learning course AI and Developer Productivity, covering the practical application of artificial intelligence across everyday software development work — assisted code generation, refactoring, review, documentation and testing — and how those capabilities translate into developer productivity rather than novelty. The useful framing was treating each area as a specific kind of friction a model can absorb: the scaffolding and boilerplate that would otherwise be typed out by hand, a second pass over a change before a human reviewer sees it, and the documentation and test coverage that tend to be written last and trimmed first. Early enough in the timeline to set the expectation that AI belongs inside the normal development loop rather than alongside it.',
    stats: { courses: 1 },
    certificate: {
      title: 'AI and Developer Productivity',
      image: 'attachments/ai-and-developer-productivity-certificate.jpg',
    },
  },
  {
    title: 'Discovery of agent skills',
    date: 'Late Mar 2026',
    description: 'Discovered the agent skill concept and began moving beyond large context files toward reusable, focused instructions that agents could load only when a specific workflow was required.',
  },
  {
    title: 'Getting started with Cursor',
    date: '4 Apr 2026',
    description: 'Signed up for Cursor Pro and started coding in it alongside GitHub Copilot. Anysphere’s AI-native fork of VS Code added Tab autocomplete, Cmd+K inline edits and codebase-aware chat next to Copilot’s inline completions. It was also the first real step toward context awareness: instead of pasting a snippet into a chat window, the editor could index the repository and pull in the files, symbols and documentation a change actually touched — and the quality of an answer turned out to depend less on the wording of the prompt than on what the model was allowed to see.',
    attachment: {
      file: 'welcome-to-cursor.eml',
      note: 'Receipt attached — no going back after this one.',
      image: 'attachments/welcome-to-cursor.png',
    },
  },
  {
    title: 'Moving in with Claude',
    date: '4 Jun 2026',
    description: 'Subscribed to Claude Pro. The welcome email promised a first commit within five minutes — an accurate forecast, judging by the rest of this timeline.',
    attachment: {
      file: 'welcome-to-claude-code.eml',
      note: '“Your Claude Code journey starts now.” — it really did. 🚀',
      image: 'attachments/welcome-to-claude-code.png',
    },
  },
  {
    title: 'Claude Cowork, Code, Skills and Plugins course',
    date: 'Jun 29, 2026',
    description: 'Completed the Udemy course Claude - Master Claude Cowork, Claude Code, Skills & Plugins, continuing the same practical thread: putting AI inside real engineering work rather than beside it. The course covered Claude Code as a terminal-based agentic coding tool, skills as focused instructions an agent loads only when a workflow calls for them, plugins as distributable bundles of skills, commands, agents and MCP servers, and Cowork as an agentic workspace for everyday tasks outside the editor. The lasting value was less the tools themselves than the structure around them — AI-assisted code review, engineering workflow automation, reusable skills and plugins, agentic development workflows and automating daily tasks with Cowork.',
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
    title: 'Platform-agnostic Figma Design QA skill',
    date: 'Jun 2026',
    description: 'Created a platform-agnostic Figma Design QA skill that reviews designs before code implementation. It identifies Arabic and English inconsistencies, legacy tokens, missing tokens, unmappable values and other designer-side issues.',
    stats: { skills: 1 },
  },
  {
    title: 'Android code-versus-Figma comparison skill',
    date: 'Jun 2026',
    description: 'Created a read-only skill that compares Android XML or Jetpack Compose implementations against Figma. It produces separate reports for designer-side issues and code-versus-design mismatches.',
    stats: { skills: 1 },
  },
  {
    title: 'Neo Android translations plugin',
    date: 'Jun 2026 - Jul 2026',
    description: 'Created the Android translations plugin to centralize and automate translation workflows for the Neo Android project. Alongside the skills it bundles slash commands for adding and updating strings and a read-only extractor agent whose only job is to report where a given piece of copy already exists across the shared translation file, so the decision to reuse or create is made against evidence rather than a guess.',
    stats: { plugins: 1, agents: 1, commands: 3 },
  },
  {
    title: 'Neo translations skill',
    date: 'Jun 2026 - Jul 2026',
    description: 'Built a local-first translation skill with target-branch validation, duplicate detection, Arabic and Hindi drafting, Babelish synchronization and merge-request creation.',
    stats: { skills: 1 },
  },
  {
    title: 'Multi-agent engineering workflow',
    date: 'Jul 2026 - Present',
    description: 'Started structuring engineering workflows that assign different tasks to Claude, Codex and Copilot according to their strengths, instead of expecting one agent to handle planning, implementation, review and validation equally well.',
  },
  {
    title: 'Fixing at the right scope',
    date: 'Jul 21, 2026',
    description: 'Split a general engineering skill out of the client plugin, since the judgement it encodes was never client-specific. Given a root cause that is already understood, it decides where the fix belongs — and guards against the tempting one-line change to a shared utility that repairs one screen while quietly changing behaviour for every other caller and hiding the local mistake that actually caused the bug. It also insists on reading the history of shared lines before touching them, and limits tidying to lines the fix already changes.',
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
    description: 'The idea had been waiting since 8 June, when a design-versus-implementation review was done by hand on a single Android screen and produced a table so dense it needed a second, plainer table to explain itself. Two things came out of that afternoon and both survived into the shipped plugin: that the review was a repeatable process rather than a one-off, and that designer-side issues belong in a list of their own, apart from code-side ones, because the two go to different people. This milestone closed the loop \u2014 the last missing skill, one that builds a design system from source files, and all three packaged into a single installable plugin. The packaging turned out to be the harder half. Each skill had grown up quietly assuming the repository around it, and making them install standalone meant hunting down every one of those assumptions and cutting it. Writing a skill and making a skill portable are two different disciplines, and only the second one gets tested by someone else installing it.',
    stats: { skills: 1, plugins: 1 },
  },
  {
    title: 'Built and shipped an MCP platform',
    date: '5 Aug 2026',
    description: 'The idea started on 16 June with a small want: the design-review comment the Figma QA skill already produced should be posted by a server, not by a step inside a skill. Chasing that meant writing a custom action for a Figma MCP server and learning what one actually is from the inside \u2014 and once that was clear, running the whole thing stopped looking out of reach. This is where it landed: a reusable service foundation carrying figma-craft as its first server, deployed behind a Traefik edge. The part worth keeping was the authentication. A shared bearer token has to be handed out, rotated, and eventually leaks \u2014 so the login moved into the browser over OAuth instead, and a client now connects with a URL and nothing else. Removing a class of problem beats managing it, and that only became obvious after building the version that managed it.',
    stats: { mcps: 1 },
  },
  {
    title: 'A Clean Architecture skill that adapts to whatever project it lands in',
    date: '9 Aug 2026',
    description: 'The starting point was a rulebook for building mobile features the way Uncle Bob describes them — layers, use cases, repositories, dependencies pointing inward. Writing that down was never the hard part. The ask was that it work in any project, on the first install, without a paragraph of setup explaining which packages that project happens to use. So the skill studies before it builds: it detects the stack, reads which library already fills each role, and looks at how the codebase has been building features until now — its own guidance first, then its history, then the code itself. From there the rule is that the project’s conventions win and the skill’s defaults lose; the only things it refuses to bend are the boundaries. It was worth proving rather than assuming. The same feature request, on the same deliberately messy app, without the skill: an HTTP client and a cache sitting inside a state holder, raw JSON where the screen should have had a model. With it: a domain layer that imports nothing, the offline policy written down in one place where it can be tested, and not a single new package added. The part worth keeping came last, and from being told the skill was overstepping. When an entire codebase is built on a shape that breaks the rules, quietly building one correct island is not neutrality — it leaves a corner that matches nothing around it, and someone else has to live there. So it stops and asks now, once, with the cost of both answers on the table, and writes down which one was chosen. Knowing a rule turns out to be the easy half; knowing which decisions were never yours to make is the other one.',
    stats: { skills: 1 },
  },
  {
    title: 'Neo merge-request and remote-config skills',
    date: '15 Jun 2026',
    description: 'Grew the Neo Android plugin past translations into everyday app work. One skill opens or updates a merge request through a fixed description template, refusing to run from a protected branch or from the wrong checkout, and blocking a push until unit tests and static analysis pass. Another captures the project’s remote-config pattern so a new feature flag lands with the correct default, the right accessor type for its value and a named handoff for the server-side key — the part that is easy to forget and leaves a flag dead on arrival.',
    stats: { skills: 2 },
  },
  {
    title: 'Translation setup split out into its own skill',
    date: 'Jun 2026 - Jul 2026',
    description: 'The translation workflow kept failing for reasons that had nothing to do with translation: an expired token, a VPN that was not connected, a missing clone, a script mirror that had drifted off its release tag. So the environment moved out of the workflow and into a skill of its own. It checks five things in dependency order, repairs the safe ones itself — the clone, the local git exclude, the script mirror — and for the rest names the exact fix instead of failing with a stack trace. It is idempotent on purpose, so the honest answer to “is this broken?” is to run it again. Splitting it out was the part worth keeping: a workflow skill that also owns its environment ends up spending most of its instructions on the day the environment is wrong, which is never the day it was written for.',
    stats: { skills: 1 },
  },
  {
    title: 'Planning skills that argue with an overloaded day',
    date: '17 Jul 2026 - 21 Jul 2026',
    description: 'Four skills for the work that happens before any code: closing a day, planning a week, building a day out of calendar and task inputs, and rebuilding the rest of one after a delay or an interruption. They arrived in that order, which was not the order I expected — the review and the weekly pass came first, and the day-builder that feeds them came four days later. What they share is a refusal to flatter the input. An overloaded day comes back as trade-offs and a “does not fit today” list rather than a schedule where everything somehow fits; capacity is counted after breaks, transitions and a real buffer; a week is three outcomes with hours attached instead of a wish list, and everything else is parked out loud rather than quietly dropped. A missed block is treated as evidence for the next plan, not a verdict on the last one. The rule that took longest to get right had nothing to do with planning: nothing is written to a calendar, a task list or a plan file until the exact content has been shown and approved in a later turn, and every write is read back before it counts as done. Being told up front to “just save it” is intent, not approval of something nobody has seen yet.',
    stats: { skills: 4 },
  },
  {
    title: 'One command from empty folder to a shop on the Play Store',
    date: '28 Jul 2026',
    description: 'Mauve’s ApoApp ships one Android app as many branded pharmacy shops, each with its own submodule, build flavour, signing key, Firebase app and Play listing. Standing a new one up was a day of order-dependent work where a single missed step surfaced much later as a broken build or an unmergeable branch. This skill collapses it into one command: scaffold the submodule and its assets, create the remote project, register the Firebase app, generate the signing key, push, wire it into the base app, open the merge request, build the bundle and upload it — stopping only at the few steps a human genuinely has to do in a console. The same skill covers the smaller job too: rebranding one existing shop’s icons, splash, colours, strings and endpoint. Two things stuck. The pipeline has to fail loudly at the moment a branch is cut from the wrong base, because three steps later the same mistake arrives disguised as a merge conflict and gets debugged as one. And a one-command workflow still owes you an honest account of what it did not do — every run ends with a table of the real values it produced, with the manual leftovers as their own flagged rows.',
    stats: { skills: 1 },
  },
  {
    title: 'Clean Architecture released as a one-command install',
    date: '10 Aug 2026',
    description: 'A day after the skill was finished it went out publicly through the marketplace — free, open, and installed with a single command that works across Claude Code, Codex, Cursor, Copilot and Gemini CLI instead of only the agent it happened to be written on. Announcing it forced a plainer account of what it actually does, because the flattering version was easy to write and would not have survived anyone installing it. Not a skill that writes Clean Architecture at a project; one that reads the repository first and lets the project’s conventions win, holds exactly one rule that never bends — dependencies point inward — and stops to ask when the codebase around it already breaks that rule. Flutter, Android, iOS, React Native and Node ship as known stacks, and anything else it learns from the code in front of it. Publishing was also the real test of the portability work: a skill isn’t portable because its author says so, it’s portable the first time it lands in a repository nobody planned for.',
    attachment: {
      file: 'clean-architecture-skill-released.png',
      note: 'One command, five agents, zero setup paragraphs. 🚀',
      image: 'attachments/clean-architecture-skill-released.png',
    },
  },
];
