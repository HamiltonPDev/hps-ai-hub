---
index: 6
name: "Unified Workflow"
responsibility: "SDD planning (gentle-ai) + OmO execution (category routing) with hash-anchored edits"
components:
  - "/sdd-new"
  - "explore"
  - "propose"
  - "spec"
  - "design"
  - "tasks"
  - "/sdd-apply"
  - "Atlas"
  - "Ralph Loop"
  - "ULW"
  - "/session-X"
  - "/compose"
model: "claude-sonnet-46"
relatedAgents:
  - "atlas"
  - "prometheus"
  - "metis"
diagramAscii: |
  LAYER 6 — UNIFIED WORKFLOW (SDD Planning + OmO Execution)
    PLANNING (SDD — gentle-ai):
    /sdd-new → explore → propose → spec → design → tasks
    Models:    Sonnet    Opus 4.7  Sonnet  Opus 4.7  Sonnet
    Persists to Engram — survives sessions, compaction, tool switches

    OPTIONAL ENHANCED PHASES (LARGE/INITIATIVE tier):
    sdd-interview     → Prometheus (Opus 4.7) — clarification before propose
    sdd-gap-analyze   → Metis (Opus 4.7)      — scope creep, AI-slop, gaps
    sdd-plan-review   → Momus (GPT-5.5 xhigh) — [OKAY]/[REJECT] gate
                       (or Hyperplan v3.18+ for INITIATIVE — 5-agent council)

    EXECUTION (OmO — category routing):
    /sdd-apply → Atlas (Sonnet 4.6) reads tasks → delegates by category:
    ├── visual-engineering → Gemini 3.1 Pro high
    ├── artistry           → Gemini 3.1 Pro high (gated)
    ├── ultrabrain         → GPT-5.5 xhigh
    ├── deep               → GPT-5.5 medium
    ├── writing            → Gemini 3 Flash
    ├── quick              → GPT-5.4-mini
    ├── unspecified-high   → Claude Opus 4.7 max
    └── unspecified-low    → Claude Sonnet 4.6
    + Hash-anchored edits (LINE#hash, 68.3% success) + Wisdom accumulation

    MODES:
    Ralph Loop   — persistent execution, max 100 iterations, exits on <promise>
    ULTRAWORK    — agent figures it out, no planning, max 500 iter + Oracle gate
    /session-X   — domain presets (proptech, cyber, iot, marketing, ml...)
    /compose X+Y — multi-domain session combining skills + MCPs
---

Every feature, fix, and exploration runs through one pipeline. SDD handles planning — explore, propose, spec, design, tasks — persisted to Engram so nothing is lost across sessions. OmO handles execution — Atlas reads the task list, delegates by category to the optimal model.

For LARGE and INITIATIVE-tier changes, three optional enhanced phases activate: `sdd-interview` (Prometheus), `sdd-gap-analyze` (Metis), and `sdd-plan-review` (Momus or Hyperplan council). These are pipeline gates, not pipeline replacements — canonical SDD remains the spine.

Four execution modes: Ralph Loop for persistent execution (max 100 iterations), ULTRAWORK for unplanned autonomous work (max 500 iterations with Oracle verification gate), `/session-X` for domain presets, `/compose` for multi-domain sessions.
