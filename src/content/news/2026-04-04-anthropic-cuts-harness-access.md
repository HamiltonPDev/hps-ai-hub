---
title: "Anthropic Cuts Third-Party Harness Access"
date: 2026-04-04
excerpt: "Anthropic blocks third-party harness access, forcing HPS OS to pivot from Claude Code harness wrappers to an api-direct integration strategy."
tags:
  - api-direct
  - anthropic
  - pivot
source: "engram #32 — gentle-ai deep-dive session"
---

Anthropic shut down third-party harness access on April 4, effectively killing any workflow that depended on wrapping Claude Code through external runners. The HPS OS responded the same day by locking decision B5: all future integrations go api-direct through the Anthropic SDK, no intermediary harness layers. This forced a full audit of the toolchain and accelerated the adoption of gentle-ai as the primary API wrapper.
