---
index: 1
name: "Agent Runtimes"
responsibility: "Dual-harness runtime: OpenCode (primary TUI) + Claude Code (secondary + OMC)"
components:
  - "OpenCode"
  - "OmO plugin"
  - "Claude Code"
  - "OMC plugin"
  - "Codex CLI"
  - "oh-my-codex"
relatedAgents: []
diagramAscii: |
  LAYER 1 — AGENT RUNTIMES (dual-harness)
  OpenCode     Primary TUI + client/server + OmO plugin
  Claude Code  Secondary + OMC plugin (Team Mode, tmux workers)
  Codex CLI    Deep executor + oh-my-codex ($team, $ralph)
---

Two runtimes, one interface pattern. OpenCode runs as the primary TUI with OmO orchestration built in. Claude Code serves as secondary harness with OMC plugin for Team Mode and tmux-based parallel workers. Codex CLI handles deep autonomous execution.
