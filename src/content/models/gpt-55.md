---
name: "GPT-5.5"
provider: "OpenAI"
cost: "$5 / 1M in, $30 / 1M out"
bestFor: "Multi-modal reasoning, code generation, research synthesis"
tier: architecture
category: "flagship"
isFree: false
omoCategory:
  - ultrabrain
  - deep
comparable: "Claude Opus 4.7 for reasoning"
speed: "~90 tok/s"
contextWindow: "1M"
usedBy:
  - oracle
  - hephaestus
  - momus
  - multimodal-looker
docsUrl: "https://platform.openai.com/docs"
---

The second architecture-tier brain. GPT-5.5 runs Oracle (researcher), Hephaestus (autonomous builder), Momus (code reviewer), and Multimodal-Looker. It's the OpenAI counterpart to Opus — same tier, different vendor, complementary strengths.

Oracle uses it for research synthesis and deep code analysis. Hephaestus uses it for autonomous implementation runs. Momus uses it for adversarial code review. Multimodal-Looker uses it for visual analysis.

The multi-vendor strategy is deliberate: no single provider dependency. If Anthropic goes down, the GPT-5.5 agents keep working.
