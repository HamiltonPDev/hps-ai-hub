---
name: "Claude Haiku 4.6"
provider: "Anthropic"
cost: "Very cheap — classify/search"
bestFor: "Commit messages, boilerplate, classification, quick automation"
tier: automation
category: "automation"
isFree: false
omoCategory:
  - quick
comparable: "GPT-4o-mini for automation"
speed: "~200 tok/s"
contextWindow: "200k"
usedBy: []
docsUrl: "https://docs.anthropic.com"
---

The automation tier. Haiku handles mechanical tasks — commit message generation, file renaming, boilerplate scaffolding, classification, and quick search. High call volume, low cost per call.

Implied for HPS-YOLO security classification tasks where speed matters more than depth. The routing rule: if a task is mechanical and doesn't require reasoning, Haiku handles it.

Low cost per token. That's the trade. You get speed and volume; you give up depth. Perfect for the tasks that don't need depth.
