---
name: "Machine Learning / Deep Learning"
icon: "🧠"
color: build
subtitle: "Vector embeddings · Skill search · RAG · Rental pattern analysis · Tenant scoring"
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

The ML/DL domain is the intelligence-building layer of the operation system. It addresses three capabilities: semantic skill search (replicating the SKILL_SEARCH feature lost in the CC leak), rental pattern analysis using time-series ML on actual property data, and RAG-based codebase intelligence using vector embeddings.

The `/session-ml` command loads hps-ml-python and configures the Python toolchain with sqlite-vec for local vector storage. Gemini Pro proposes ML approaches, Claude designs architectures, and Codex implements in pandas/scikit-learn.
