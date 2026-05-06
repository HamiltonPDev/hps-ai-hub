---
name: Librarian
role: docs specialist (READ-ONLY)
description: Reads OSS documentation, library references, API specs. Primary model is GPT-5.4-mini-fast with MiniMax M2.7 highspeed and Claude Haiku 4.5 as budget fallbacks. Called by Atlas when a worker needs external context. Bundles Context7 MCP for live framework docs.
model: GPT-5.4-mini-fast
modelSlug: gpt-54-mini-fast
modelAlternative: minimax-m27
category: read-only
source: omo
domains: []
tools: [context7]
readOnly: true
---

Reads OSS documentation, library references, API specs. Primary model is GPT-5.4-mini-fast for speed and cost efficiency, falling back through MiniMax M2.7 highspeed → MiniMax M2.7 → Claude Haiku 4.5 → GPT-5.4-nano. Called by Atlas when a worker needs external context. Bundles Context7 MCP for live framework docs.
