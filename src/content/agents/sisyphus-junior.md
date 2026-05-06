---
name: Sisyphus-Junior
role: lightweight task executor
description: Lightweight executor for simple tasks. Default model is Claude Sonnet 4.6 with a fallback chain through Kimi K2.5, GPT-5.5 medium, and MiniMax M2.7. Cannot re-delegate — prevents infinite loops. Used for category-routed work where full Sisyphus orchestration is overkill.
model: Claude Sonnet 4.6
modelSlug: claude-sonnet-46
category: worker
source: omo
domains: []
tools: []
readOnly: false
---

Lightweight executor for simple, well-scoped tasks. Default model is Claude Sonnet 4.6 with fallbacks to Kimi K2.5, GPT-5.5 medium, MiniMax M2.7, and big-pickle. Cannot re-delegate — prevents infinite loops. Sisyphus-Junior is the workhorse for category-routed work where full Sisyphus orchestration would be overkill, particularly for the `quick` and `unspecified-low` categories.
