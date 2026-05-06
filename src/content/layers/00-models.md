---
index: 0
name: "Models"
responsibility: "6 providers, auto-routed by category"
components:
  - "Claude Opus 4.7"
  - "Claude Sonnet 4.6"
  - "Claude Haiku 4.5"
  - "GPT-5.5"
  - "GPT-5.4-mini-fast"
  - "Gemini 3.1 Pro"
  - "Gemini 3 Flash"
  - "MiniMax M2.7"
  - "Kimi K2.5"
  - "GLM-5"
  - "Qwen 3 Coder 480B"
  - "DeepSeek V3/R1"
  - "Llama 3.3 70B"
  - "Groq inference"
relatedAgents: []
diagramAscii: |
  LAYER 0 — MODELS (auto-routed by category)
    PAID / SUBSCRIPTION TIER:
    Claude Opus 4.7      Architecture, orchestration, planning (max variant)
    Claude Sonnet 4.6    Implementation, conducting, specs
    Claude Haiku 4.5     Fast search, triage, YOLO classifier
    GPT-5.5              Deep autonomous work, ultrabrain (xhigh/high/medium)
    GPT-5.4-mini-fast    Codebase grep, doc lookups (Librarian/Explore)
    Gemini 3.1 Pro       Visual-engineering, research, 1M context
    Gemini 3 Flash       Writing, docs, quick lookups
    MiniMax M2.7         Documentation, content fallback
    Kimi K2.5            Sisyphus alt orchestrator ($19/mo Kimi Code)
    GLM-5                Sisyphus alt orchestrator ($10/mo GLM Coding Plan)
    FREE / BUDGET TIER (via OpenCode 75+ providers):
    Qwen 3 Coder 480B    (Cerebras/Groq)    · FREE · best open-source for code
    DeepSeek V3/R1       (DeepSeek API)      · ~$0.14/MTok · deep reasoning
    Llama 3.3 70B        (Groq/Ollama)       · FREE · general implementation
    Groq inference       (Groq)              · FREE · ultra-fast, 500 tok/s
---

The foundation layer. Paid subscription models handle architecture (Opus 4.7), implementation (Sonnet 4.6), automation (Haiku 4.5), deep reasoning (GPT-5.5), and visual work (Gemini 3.1 Pro). MiniMax M2.7, Kimi K2.5, and GLM-5 cover budget-tier orchestration alternatives. Free models via OpenCode's 75+ provider integrations cover code generation, deep reasoning, and ultra-fast inference at zero cost.

Every model is auto-routed by category — the right model for the right task, no manual selection. OmO dev branch is the source of truth for assignments (`src/shared/model-requirements.ts`).
