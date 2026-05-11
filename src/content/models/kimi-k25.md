---
name: "Kimi K2.6"
provider: "Moonshot / Kimi Code"
cost: "$19/mo (Kimi Code subscription)"
bestFor: "Sisyphus alt orchestrator, budget agent coordination"
tier: free
category: "budget-orchestration"
isFree: false
omoCategory: []
comparable: "Sonnet for orchestration"
usedBy:
  - sisyphus
  - sisyphus-junior
---

Subscription orchestration model from Moonshot AI. Kimi K2.6 is the primary Sisyphus alternative when running OmO without Anthropic — paired with the $19/mo Kimi Code subscription, it sits at the head of the Sisyphus / Prometheus opencode-go fallback chain (Kimi K2.6 → GPT-5.5 medium → GLM-5.1). OmO v4.0.0 bumped the chain head from `kimi-k2.5` to `kimi-k2.6` (`src/shared/model-requirements.ts`).

Use case: primary orchestrator if you skip the Anthropic subscription, or fallback head when Opus tokens are exhausted. Also primary for Atlas and Sisyphus-Junior fallback chains.
