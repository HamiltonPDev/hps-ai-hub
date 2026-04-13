---
index: 4
name: "Memory System"
responsibility: "KAIROS replication via Engram SQLite+FTS5, nightly consolidation, per-directory AGENTS.md"
components:
  - "Engram"
  - "HPS-Dream"
  - "AGENTS.md"
  - "Wisdom Notepad"
model: "claude-haiku-46"
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
