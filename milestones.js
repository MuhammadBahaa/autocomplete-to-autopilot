/* =============================================================
   YOUR MILESTONES LIVE HERE — this is the only file you edit.
   Add new entries at the BOTTOM of the list (newest last).

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
    title: 'Claude Code adoption',
    date: 'Jun 2026 - Present',
    description: 'Adopted Claude Pro and Claude Code as core engineering tools. Practised CLAUDE.md project initialization, file-based context, plan mode, implementation mode, terminal workflows, documentation lookup and repository-level development.',
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
    title: 'Ledger-first Figma extraction',
    date: 'Jun 2026',
    description: 'Introduced a ledger-only operating mode for extracting structured Figma information before implementation. The workflow standardized token rules, asset handling, string extraction and build-ready design brief generation.',
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
    title: 'Translation environment setup skill',
    date: 'Jun 2026 - Jul 2026',
    description: 'Created a setup and repair skill that checks whether the translation environment is correctly configured and fixes missing or invalid setup requirements.',
    stats: { skills: 1 },
  },
  {
    title: 'Translation automation scripts',
    date: 'Jun 2026 - Jul 2026',
    description: 'Implemented scripts for environment checking, repository setup, CSV retrieval, translation search, CSV validation, local Android string generation and merge-request creation.',
  },
  {
    title: 'Neo merge-request and remote-config skills',
    date: '15 Jun 2026',
    description: 'Grew the Neo Android plugin past translations into everyday app work. One skill opens or updates a merge request through a fixed description template, refusing to run from a protected branch or from the wrong checkout, and blocking a push until unit tests and static analysis pass. Another captures the project’s remote-config pattern so a new feature flag lands with the correct default, the right accessor type for its value and a named handoff for the server-side key — the part that is easy to forget and leaves a flag dead on arrival.',
    stats: { skills: 2, commands: 2 },
  },
  {
    title: 'Multi-agent engineering workflow',
    date: 'Jul 2026 - Present',
    description: 'Started structuring engineering workflows that assign different tasks to Claude, Codex and Copilot according to their strengths, instead of expecting one agent to handle planning, implementation, review and validation equally well.',
  },
  {
    title: 'Notion as an AI knowledge layer',
    date: 'Jul 2026',
    description: 'Adopted Notion Plus and Notion AI and positioned Notion as the knowledge and planning layer for a personal Life OS supported by AI agents.',
  },
  {
    title: 'Life OS master-agent design',
    date: 'Jul 18, 2026',
    description: 'Designed a Life OS master agent with Notion as the planning layer. The design covers course planning, work planning, daily and weekly planning, reviews, replanning, startup behaviour and confirmation requirements before making changes.',
    stats: { agents: 1 },
  },
  {
    title: 'Life OS implementation plan',
    date: 'Jul 18, 2026',
    description: 'Created an implementation plan for the Life OS agent with verified Notion mappings, seven operating modes, confirmation-gated writes, Todoist as the execution layer and evaluation scenarios for planning and replanning workflows.',
  },
  {
    title: 'Day and week planning skills',
    date: 'Jul 21, 2026',
    description: 'Turned the Life OS design into a working planning plugin sitting on top of the Notion knowledge layer: four skills that build a realistic day from calendar and task inputs, rebuild the remainder of a day after a delay or an interruption, close the day by deciding which unfinished work is a deliberate carryover, and plan a week as three priorities with time actually attached. What made them useful was refusing to flatter the input — an overloaded day is shown as trade-offs rather than a schedule where everything fits, and a review treats a missed block as evidence for the next plan rather than a verdict on the last one.',
    stats: { skills: 4, plugins: 1 },
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
  },
];
