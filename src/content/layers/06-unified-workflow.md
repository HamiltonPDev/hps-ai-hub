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
    Models:    Sonnet    Opus      Sonnet  Opus    Sonnet
    Persists to Engram — survives sessions, compaction, tool switches

    EXECUTION (OmO — category routing):
    /sdd-apply → Atlas reads tasks → delegates by category:
    ├── visual-engineering → Gemini 3.1 Pro
    ├── ultrabrain         → GPT-5.4
    ├── deep               → GPT-5.4 / Codex
    ├── writing            → Gemini Flash
    ├── quick              → Qwen 3 / GPT-5.4 Mini (FREE)
    └── unspecified        → Sonnet 4.6
    + Hash-anchored edits (68.3% success) + Wisdom accumulation

    MODES:
    Ralph Loop   — persistent execution, no stop until 100% done
    ULW          — ultrawork, agent figures it out, no planning
    /session-X   — domain presets (proptech, cyber, iot, marketing...)
    /compose X+Y — multi-domain session combining skills + MCPs
---

Every feature, fix, and exploration runs through one pipeline. SDD handles planning — explore, propose, spec, design, tasks — persisted to Engram so nothing is lost across sessions. OmO handles execution — Atlas reads the task list, delegates by category to the optimal model.

Four modes: Ralph Loop for persistent execution, ULW for unplanned ultrawork, /session-X for domain presets, /compose for multi-domain sessions.
