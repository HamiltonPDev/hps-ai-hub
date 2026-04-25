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
    ├── Prometheus    Strategic planner    → Claude Opus
    ├── Metis         Gap analyzer         → Claude Opus
    └── Momus         Plan reviewer        → GPT-5.5

    EXECUTION:
    └── Atlas         Conductor            → Claude Sonnet
        Reads plan, delegates by category, accumulates wisdom

    WORKERS (category-routed):
    ├── Sisyphus-Jr   Task executor        → Claude Sonnet
    ├── Oracle        Architecture         → GPT-5.5
    ├── Explore       Codebase grep        → Grok Code
    ├── Librarian     Docs / OSS           → Gemini 3 Flash
    └── Frontend      UI/UX specialist     → Gemini 3.1 Pro
---

Three tiers of intelligence. Planning agents (Prometheus, Metis, Momus) analyze and strategize with the most capable models. Atlas conducts execution by reading the plan and delegating by category. Workers handle the actual implementation — each optimized for their domain with the most cost-effective model.
