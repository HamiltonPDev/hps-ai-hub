---
name: "GLM-5.1"
provider: "Z.AI"
cost: "$10/mo (GLM Coding Plan)"
bestFor: "Sisyphus alt orchestrator, budget orchestration"
tier: free
category: "budget-orchestration"
isFree: false
omoCategory: []
comparable: "Opus 4.7 for orchestration"
usedBy:
  - sisyphus
  - prometheus
  - metis
---

Subscription orchestration model from Z.AI (Zhipu). GLM-5.1 is the secondary Sisyphus alternative — paired with the $10/mo GLM Coding Plan, it sits in the Sisyphus opencode-go fallback chain after Kimi K2.6 and GPT-5.5 medium, and acts as the opencode-go fallback head for Hephaestus, Metis, Oracle, and Momus. OmO v4.0.0 bumped the chain head from `glm-5` to `glm-5.1` (`src/shared/model-requirements.ts`).

Use case: ultra-budget tier when running OmO without Anthropic and Kimi is rate-limited. Zero affiliation, just personal recommendation per the OmO maintainer.
