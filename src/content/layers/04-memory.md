---
index: 4
name: "Memory System"
responsibility: "KAIROS replication via Engram SQLite+FTS5, nightly consolidation, per-directory AGENTS.md"
components:
  - "Engram"
  - "HPS-Dream"
  - "AGENTS.md"
  - "Wisdom Notepad"
model: "claude-haiku-45"
relatedAgents: []
diagramAscii: |
  LAYER 4 — MEMORY SYSTEM (KAIROS replication)
  Engram         SQLite + FTS5 · MCP server · cross-session
  HPS-Dream      Nightly cron → Orient → Gather → Consolidate → Prune
  AGENTS.md      Hierarchical, per-directory (via /init-deep)
  Wisdom Notepad .sisyphus/notepads/ — learnings, decisions, issues
---

Persistent memory that survives sessions, compaction, and tool switches. Engram stores observations in SQLite with FTS5 full-text search, accessible via MCP from any runtime. HPS-Dream runs nightly consolidation — orient, gather, consolidate, prune — keeping memory lean and relevant.

AGENTS.md files provide hierarchical context per directory. Wisdom Notepad captures learnings, decisions, and open issues in `.sisyphus/notepads/`.

**Engram v1.15.10 mechanics HPS depends on**:
- `recovery_token` — when `mem_save` hits an ambiguous-project error, Engram returns a 5-minute in-memory token. HPS retries `mem_save` with `project + project_choice_reason: "user_selected_after_ambiguous_project" + recovery_token` instead of guessing.
- `capture_prompt` parameter — `mem_save` best-effort captures the originating user prompt when MCP already has prompt context for the same project + session. SDD orchestrator artifacts pass `capture_prompt: false` so automated saves don't pollute the prompt history.
- `mem_compare` and `mem_doctor` — diagnose stale or contradictory observations before they surface as wrong-direction context.

Pin Engram `>= 1.15.10` in hps-ai-os — earlier versions silently drop ambiguous-project saves with no recovery path.
