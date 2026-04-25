> [!NOTE]
> This is a **portfolio showcase** of my personal AI Operating System — a public
> record of how I combine AI tools across eight domains. The site scaffolding is
> MIT-licensed — fork it, learn from it, remix it. The methodology, agent names,
> and configs are my personal workflow documented openly so others can adapt
> ideas, not copy wholesale.

> [!TIP]
> Want to build your own? Start with the [Architecture](/architecture) overview,
> then read the [Workflow](/workflow) and [Agent Roster](/agents). Everything is
> sourced from public tools (Engram, gentle-ai, agent-teams-lite, OmO) you can
> install yourself.

# hps-ai-hub

The published reference for the **HPS AI Operating System** — a unified workflow for one solo developer managing eight professional domains with multi-model routing, 100+ specialist agents, and persistent memory across sessions.

This site is the *plano* — the blueprint. It's not the product. When the real work starts (OmO config, HPS domain skills, KAIROS cron, domain sessions, MCP integrations), this is where you come back to remember what you decided and why.

Reference aesthetics: [ccleaks.com](https://ccleaks.com), Stripe Press, Paul Graham essays, [sive.rs](https://sive.rs).

## Status

**`v0.3.0` — Path B complete. 21 pages live.**

The full site has shipped: 12 core reference pages (index, architecture, agents, models, manifesto, ecosystem, setup, runtime, reference, roadmap, skills, workflow, domains) + 4 tools deep-dives (OmO, Engram, gentle-ai, Agent Teams Lite, GGA) + coming-soon + 404. All content migrated from the master `../hpsAiOperationSystem.html`. Atomic design component system in place — atoms, molecules, organisms. Dark editorial design with Fraunces display headers and warm amber accent throughout.

## Stack

- **Astro 6.1.4** — static-first with React 19 islands where interactivity is real
- **Tailwind CSS 4** — tokens declared in `@theme` directive (no `tailwind.config.js`)
- **astro-icon + @iconify-json/lucide** — icon system
- **TypeScript**
- **Node ≥ 22.12.0**
- **Deploy target**: [hps-ai-hub.vercel.app](https://hps-ai-hub.vercel.app)

## Design language

- **Dark-only editorial**. No light mode.
- **3-layer token architecture** (primitive → semantic → component) declared in `src/styles/global.css`
- **Typography**: Fraunces (display only, `h1`/`h2`), DM Sans (body), JetBrains Mono (code). Fraunces is scoped narrowly to stay precious.
- **Warm amber accent** `oklch(70% 0.12 55)` / `#c08845` — an anti-default choice over system blue
- **Four domain families** — `build`, `operate`, `grow`, `secure` — confined to `Pill.astro` via `[data-domain]` attribute selectors. Zero leakage into navigation, chrome, or page backgrounds.
- **Atomic design components**: atoms (`Button`, `Eyebrow`, `FeatureCard`, `StatCard`, `TerminalChrome`), molecules (`CTASection`, `FeatureGrid`, `Hero`, `StatsRow`), organisms (`Terminal`, `DomainSection`, `WorkflowDiagram`).
- **Scoped CSS** via Astro `<style>` blocks with `var(--token)` references — zero Tailwind utility classes in components. Each component reads as HTML + semantic class names + CSS in one place. That is deliberate teaching value.

All contrast ratios verified against WCAG 2.1 AA. Primary text: 17.5:1 (AAA). Amber accent: 8.8:1. Domain colors: 5.2–7.8:1.

## Development

```bash
npm install          # install dependencies
npm run dev          # dev server at localhost:4321
npm run astro check  # type + component validation
```

`npm run build` is intentionally left to the deploy target. Not part of the local workflow.

## Project structure

```
src/
├── layouts/
│   └── BaseLayout.astro           page shell: Google Fonts, IntersectionObserver
├── components/
│   ├── atoms/
│   │   ├── Button.astro           CTA button atom
│   │   ├── Eyebrow.astro          section label / eyebrow text
│   │   ├── FeatureCard.astro      icon + title + body card atom
│   │   ├── StatCard.astro         metric display atom
│   │   └── TerminalChrome.astro   terminal frame chrome
│   ├── molecules/
│   │   ├── CTASection.astro       call-to-action section
│   │   ├── FeatureGrid.astro      grid of FeatureCards
│   │   ├── Hero.astro             page hero with eyebrow + headline
│   │   └── StatsRow.astro         row of StatCards
│   ├── organisms/
│   │   ├── Terminal.astro         full terminal block with content
│   │   ├── DomainSection.astro    domain-tagged content section
│   │   └── WorkflowDiagram.astro  SDD pipeline visual
│   ├── Nav.astro                  sticky hairline nav with backdrop blur
│   ├── Footer.astro               flat hairline footer
│   ├── Icon.astro                 astro-icon wrapper
│   └── Pill.astro                 9-line domain label atom
├── pages/
│   ├── index.astro                landing manifesto
│   ├── architecture.astro         9-layer HPS OS architecture
│   ├── agents.astro               100+ specialist agents
│   ├── models.astro               multi-model routing strategy
│   ├── manifesto.astro            principles and philosophy
│   ├── ecosystem.astro            tool ecosystem overview
│   ├── setup.astro                environment setup guide
│   ├── runtime.astro              daily runtime loop
│   ├── reference.astro            quick reference
│   ├── roadmap.astro              roadmap + changelog
│   ├── skills.astro               skill system overview
│   ├── workflow.astro             SDD + OmO unified workflow
│   ├── domains.astro              8 professional domains
│   ├── omo.astro                  OmO (oh-my-openagent) deep-dive
│   ├── engram.astro               Engram persistent memory deep-dive
│   ├── gentle-ai.astro            gentle-ai ecosystem configurator deep-dive
│   ├── agent-teams-lite.astro     Agent Teams Lite orchestration deep-dive
│   ├── gga.astro                  GGA (Gentleman Guardian Angel) deep-dive
│   ├── coming-soon.astro          priority waitlist for upcoming features
│   ├── explore.astro              interactive ecosystem graph
│   ├── news.astro                 changelog
│   └── 404.astro
├── content/
│   ├── agents/                    content collection — 100+ agent definitions
│   ├── domains/                   content collection — 8 domain descriptors
│   ├── layers/                    content collection — 9 architecture layers
│   ├── models/                    content collection — model metadata + routing
│   ├── news/                      content collection — changelog entries
│   └── skills/                    content collection — skill definitions
├── styles/
│   └── global.css                 3-layer Tailwind 4 @theme token system
└── content.config.ts              Zod schemas for content collections
```

## How this site is built — Spec-Driven Development

Every change goes through a seven-phase pipeline before any code is written:

```
explore → propose → [spec ∥ design] → tasks → apply → verify → archive
```

Each phase is a fresh-context sub-agent with a specific role and read/write contract. Decisions persist to **Engram** across sessions via topic keys (`sdd/{change-name}/{phase}`). Skills load on-demand from the skill registry (`~/.claude/skills/` + `~/.config/opencode/skills/`).

**Model routing per phase** (from `hpsAiOperationSystem.html` §06 Unified Workflow):

| Phase | Model | Why |
|---|---|---|
| explore | Sonnet | Reads code, structural not architectural |
| propose | **Opus** | Architectural decisions, scope, tradeoffs |
| spec | Sonnet | Given/When/Then acceptance criteria |
| design | **Opus** | Architecture decisions, token values, contrast math |
| tasks | Sonnet | Mechanical breakdown |
| apply | Sonnet (Claude Code) / OmO category-routed (OpenCode) | Implementation |
| verify | Sonnet | Implementation vs spec validation |
| archive | Haiku | Copy and close |

In OpenCode + OmO, the `apply` phase delegates to Atlas who category-routes work to specialist workers (Gemini 3.1 Pro for visual-engineering, GPT-5.5 for deep, Codex for execution, Gemini Flash for writing, Qwen 3 Coder 480B FREE for quick).

The full SDD workflow for `v0.1.0` is persisted to Engram under topic keys `sdd/minimalist-theme-redesign/*` — nine phase observations from `explore` through `archive`.

This is not vibe coding. It is engineering with AI agents.

## References

- **Master doc**: `../hpsAiOperationSystem.html` — 3998 lines, 15 sections (Layer 0 through Layer 8 + CC Leaks + Daily Loop + Skills + Free Models + Roadmap + AI Chat + Quick Reference + Setup)
- **SDD framework**: [gentle-ai](https://github.com/Gentleman-Programming/gentle-ai) — Go-based ecosystem configurator, ships SDD skills + Engram integration across 8 host agents · see [/gentle-ai](https://hps-ai-hub.vercel.app/gentle-ai)
- **Persistent memory**: [Engram](https://github.com/Gentleman-Programming/engram) — SQLite + FTS5, MCP server, cross-session · see [/engram](https://hps-ai-hub.vercel.app/engram)
- **OpenCode runtime**: [opencode.ai](https://opencode.ai)
- **OmO orchestration**: [oh-my-openagent](https://github.com/code-yeongyu/oh-my-openagent) — 3-layer architecture (Prometheus/Metis/Momus → Atlas → category-routed workers) · see [/omo](https://hps-ai-hub.vercel.app/omo)
- **GGA code review**: Gentleman Guardian Angel — pre-commit hook, provider-agnostic AI review · see [/gga](https://hps-ai-hub.vercel.app/gga)

## License

MIT · Hamilton Posada · HPS Proptech & Solutions B.V. · Amsterdam & Sevilla
