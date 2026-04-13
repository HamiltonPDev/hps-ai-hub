---
index: 7
name: "CI/CD & Security"
responsibility: "Commit-gate AI review, pre-tool-call safety classification, AST bash safety, GitHub Actions"
components:
  - "GGA"
  - "HPS-YOLO"
  - "Dippy"
  - "GitHub Actions"
model: "claude-haiku-46"
relatedAgents:
  - "hps-security"
diagramAscii: |
  LAYER 7 — CI/CD & SECURITY
  GGA            Every commit → AI review against AGENTS.md
  HPS-YOLO       Pre-tool-call classifier (Haiku, ~0.001¢/check)
  Dippy          AST-based bash safety (180★, 14K tests, replaces custom build)
  GitHub Actions OpenCode agent runs on PR/CI events
---

Security at every gate. GGA reviews every commit against AGENTS.md conventions. HPS-YOLO classifies tool calls before execution — Haiku-powered at ~0.001¢ per check. Dippy provides AST-based bash safety analysis. GitHub Actions triggers OpenCode agents on PR and CI events.
