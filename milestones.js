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
     stats: { skills: 1, plugins: 1, agents: 1, commands: 3, scripts: 4,
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
    title: 'Cursor-based agent workflows',
    date: 'Apr 2026 - May 2026',
    description: 'Used Cursor Pro for repository-aware coding, custom-agent experimentation, automated bug handling, documentation generation, testing workflows and multi-repository agent automation.',
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
    title: 'Company engineering harness contribution',
    date: 'Jun 2026 - Present',
    description: 'Contributed to improving the engineering harness used at CoorB and Neo by building reusable agent skills, commands, scripts and contextual workflows for Android engineering, Figma review and localization.',
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
    description: 'Created the coorb-neo-android plugin to centralize and automate translation workflows for the Neo Android project.',
    stats: { plugins: 1 },
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
    stats: { scripts: 7 },
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
];
