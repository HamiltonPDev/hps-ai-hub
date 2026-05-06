---
name: "Claude Haiku 4.5"
provider: "Anthropic"
cost: "Very cheap — classify/search"
bestFor: "Commit messages, boilerplate, classification, quick automation, Librarian/Explore fallback"
tier: automation
category: "automation"
isFree: false
omoCategory:
  - quick
comparable: "GPT-5.4-mini for automation"
speed: "~200 tok/s"
contextWindow: "200k"
usedBy:
  - librarian
  - explore
docsUrl: "https://docs.anthropic.com"
---

The automation tier. Haiku 4.5 handles mechanical tasks — commit message generation, file renaming, boilerplate scaffolding, classification, and quick search. High call volume, low cost per call.

Used as a fallback for Librarian and Explore (after GPT-5.4-mini-fast and MiniMax M2.7), and implied for HPS-YOLO security classification tasks where speed matters more than depth. The routing rule: if a task is mechanical and doesn't require reasoning, Haiku handles it.

Low cost per token. That's the trade. You get speed and volume; you give up depth. Perfect for the tasks that don't need depth.
