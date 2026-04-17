---
name: "Machine Learning / Deep Learning"
icon: "🧠"
color: build
subtitle: "Semantic skill search, RAG over your own codebase, and time-series ML on real rental data"
stack:
  - Python
  - sqlite-vec
  - scikit-learn
  - pandas
  - ONNX
  - text-embedding-3-small
order: 4
agents:
  - hps-ml
skills:
  - hps-ml-python
mcps: []
modelBias: "Gemini Pro for approach, Claude for architecture"
sessionCommand: "/session-ml"
comingSoon: false
workflowSteps:
  - index: 1
    title: "Semantic skill search (SKILL_SEARCH replication)"
    description: "The biggest gap from the CC leak. Embed all your HPS SKILL.md files with text-embedding-3-small. At session start, run vector search on the task description → inject top-3 most relevant skills automatically. No more manual skill prefixing."
    tags:
      - hps-ml
  - index: 2
    title: "Rental pattern analysis (time-series)"
    description: "Use Gemini Pro to suggest appropriate ML approaches for your rental data. Claude designs the model architecture. Codex implements using pandas/scikit-learn. Your 6 apartments × 24 rooms × historical payment data = enough to predict late payments, seasonal occupancy, maintenance needs."
    tags:
      - hps-ml
  - index: 3
    title: "RAG on your own codebase (codebase intelligence)"
    description: "The Semantic Memory Graph from Part 1 vision: embed all your TypeScript, Dart, and Python files. Build a vector index. When the agent asks 'which files handle payment processing?', it queries the index instead of grepping — dramatically faster and more accurate than LSP alone."
    tags:
      - hps-ml
---

**Problem**: the CC leak killed SKILL_SEARCH — the feature that auto-picked relevant skills at session start. Manual skill prefixing is tedious and forgettable. Separately, 6 apartments × 24 rooms × years of payment data is enough to predict late payments and seasonal occupancy, but that ML work never happens because it's not in the daily loop. **Solution**: `/session-ml` rebuilds SKILL_SEARCH with text-embedding-3-small + sqlite-vec, turns the HPS codebase into a vector index for smarter agent lookups (no more grep fallback), and runs scheduled pandas / scikit-learn jobs on real rental data.

The session loads `hps-ml-python` and configures the Python toolchain with sqlite-vec for local vector storage. Gemini Pro proposes ML approaches, Claude designs architectures, Codex implements.
