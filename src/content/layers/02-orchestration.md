---
index: 2
name: "Orchestration"
responsibility: "OmO 3-layer architecture: Planning → Execution → Workers"
components:
  - "Prometheus"
  - "Metis"
  - "Momus"
  - "Atlas"
  - "Sisyphus-Jr"
  - "Oracle"
  - "Explore"
  - "Librarian"
  - "Frontend"
model: "claude-sonnet-46"
relatedAgents:
  - "prometheus"
  - "metis"
  - "momus"
  - "atlas"
  - "sisyphus-junior"
  - "oracle"
  - "explore"
  - "librarian"
  - "frontend"
diagramAscii: |
  LAYER 2 — ORCHESTRATION (OmO 3-layer architecture)
    PLANNING:
    ├── Prometheus    Strategic planner    → Claude Opus 4.7 max
    ├── Metis         Plan consultant      → Claude Opus 4.7 max
    └── Momus         Plan reviewer        → GPT-5.5 xhigh

    EXECUTION:
    └── Atlas         Conductor            → Claude Sonnet 4.6
        Reads plan, delegates by category, accumulates wisdom

    WORKERS (category-routed):
    ├── Sisyphus-Jr   Task executor        → Claude Sonnet 4.6
    ├── Hephaestus    Deep worker (5-phase)→ GPT-5.5 medium
    ├── Oracle        Architecture         → GPT-5.5 high
    ├── Explore       Codebase grep        → GPT-5.4-mini-fast
    ├── Librarian     Docs / OSS           → GPT-5.4-mini-fast (MiniMax M2.7 fallback)
    ├── Multimodal-Looker  Image/UI       → GPT-5.5 medium
    └── Frontend      UI/UX specialist     → Gemini 3.1 Pro
---

Three tiers of intelligence. Planning agents (Prometheus, Metis, Momus) analyze and strategize with Opus 4.7 max for deep architectural reasoning and GPT-5.5 xhigh for adversarial review. Atlas conducts execution on Sonnet 4.6, reading the plan and delegating by category. Workers handle the actual implementation — Hephaestus (GPT-5.5) for autonomous deep work in 5 phases, Sisyphus-Junior (Sonnet 4.6) for lightweight tasks, Multimodal-Looker (GPT-5.5) for image/UI analysis, Frontend (Gemini 3.1 Pro) for design work, and Explore + Librarian (GPT-5.4-mini-fast) for codebase navigation and documentation lookups.

For INITIATIVE-tier work, the planning layer can additionally invoke **Hyperplan** (OmO v4.0.0+, off by default — opt in via `team_mode.enabled: true`) — a 5-agent adversarial council with role-to-model bias mapping (skeptic/Sonnet, validator/Opus 4.7, researcher/GPT-5.5 medium, architect/GPT-5.5 xhigh, creative/Gemini 3.1 Pro) over 3 debate rounds. Hyperplan complements canonical SDD, it does not replace it.

**Per-agent opencode-go fallback heads** (OmO v4.0.0 `src/shared/model-requirements.ts`):

| Agent group | Primary | opencode-go fallback head |
|---|---|---|
| Sisyphus, Prometheus | Opus 4.7 | `kimi-k2.6` (then `glm-5.1`) |
| Hephaestus, Metis, Oracle, Momus | GPT-5.5 / Opus 4.7 | `glm-5.1` |
| Librarian, Explore | GPT-5.4-mini-fast | `qwen3.5-plus` (was `minimax-m2.7-highspeed`) |
