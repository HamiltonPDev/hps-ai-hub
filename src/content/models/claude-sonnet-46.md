---
name: "Claude Sonnet 4.6"
provider: "Anthropic"
cost: "Claude Pro €23/mo"
bestFor: "Feature development, debugging, test writing, PR generation"
tier: implementation
category: "daily-driver"
isFree: false
omoCategory:
  - writing
  - deep
comparable: "Codex (GPT-5.3) for daily coding"
speed: "~120 tok/s"
contextWindow: "200k"
usedBy:
  - atlas
  - hps-proptech
  - hps-security
  - hps-marketing
docsUrl: "https://docs.anthropic.com"
---

The daily driver. Sonnet handles the implementation layer — feature development, debugging sessions, test generation, and pull request workflows. It balances quality and cost across the broadest task surface in the stack.

Atlas (executor), HPS-Proptech, HPS-Security, and HPS-Marketing domain agents all run on Sonnet. It's the model that ships code every day.

When the task is "build this feature" or "write these tests," Sonnet is the answer. Not Opus (overkill), not Haiku (underpowered for implementation).
