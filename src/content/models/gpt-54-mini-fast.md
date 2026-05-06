---
name: "GPT-5.4-mini-fast"
provider: "OpenAI"
cost: "Cheap — fast read tasks"
bestFor: "Codebase grep, doc lookups, fast read paths"
tier: automation
category: "fast-read"
isFree: false
omoCategory:
  - quick
comparable: "Claude Haiku 4.5 for speed"
speed: "Optimized for low latency"
contextWindow: "200k"
usedBy:
  - librarian
  - explore
docsUrl: "https://platform.openai.com/docs"
---

The fast-read tier. GPT-5.4-mini-fast is OmO's primary model for Librarian (docs/code search) and Explore (codebase grep) — tuned for high-throughput, low-latency read operations where depth is unnecessary and speed wins.

It sits at the head of a fallback chain that degrades through MiniMax M2.7 highspeed → MiniMax M2.7 → Claude Haiku 4.5 → GPT-5.4-nano. The intentional design: never block on a slow read; always have something cheap and fast to fall through to.

Not auto-upgraded by OmO's migration map (cost-tier pick — preserved on purpose alongside `gpt-5.4-mini` and `gpt-5.4-nano`).
