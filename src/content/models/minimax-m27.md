---
name: "MiniMax M2.7"
provider: "MiniMax"
cost: "Cheap"
bestFor: "Librarian/Explore fallback, content curation, multimodal-looker fallback"
tier: free
category: "budget-content"
isFree: false
omoCategory: []
comparable: "Budget alternative for read-fast paths"
usedBy:
  - librarian
  - explore
  - multimodal-looker
---

Budget content model. MiniMax M2.7 (Vercel-served) sits in the fallback chain for Librarian and Explore (after GPT-5.4-mini-fast, before Claude Haiku 4.5) and as a fallback for Multimodal-Looker.

**OmO v4.0.0 change**: the opencode-go provider's fast-read fallback head moved from `minimax-m2.7-highspeed` to `qwen3.5-plus`. The Vercel-served MiniMax M2.7 entry stays in HPS routing — only opencode-go's specific routing changed (`src/shared/model-requirements.ts`).

Good enough for structured content work where deep reasoning isn't required. The Librarian and Explore tasks are well-defined and repetitive, making a budget model the right fit when GPT-5.4-mini-fast is rate-limited or unavailable.
