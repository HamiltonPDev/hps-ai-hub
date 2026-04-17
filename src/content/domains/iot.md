---
name: "Home Automation / Domotica"
icon: "🏡"
color: operate
subtitle: "Control smart homes without 20 open tabs: Aqara + SmartThings + Home Assistant + n8n in one session"
stack:
  - Aqara Hub M3
  - SmartThings API
  - Home Assistant
  - Hono API
  - n8n
  - Hetzner
order: 2
agents:
  - hps-iot
skills:
  - hps-iot-aqara
  - hps-n8n
mcps:
  - supabase
  - context7
modelBias: "Gemini Pro (1M context for API docs)"
sessionCommand: "/session-iot"
comingSoon: false
workflowSteps:
  - index: 1
    title: "New IoT automation design"
    description: "Gemini Pro reads entire SmartThings API docs + Aqara developer docs + Home Assistant YAML reference in one prompt (1M context). Produces a verified integration plan. Codex then writes the Hono API endpoint, Supabase trigger, and n8n workflow YAML."
    tags:
      - hps-iot
  - index: 2
    title: "Hetzner / Home Assistant server management"
    description: "Hetzner MCP server is wired into OpenCode. You can ask 'check if Home Assistant is healthy' or 'restart the mqtt broker' or 'update the zigbee2mqtt config' directly from the terminal, no SSH context switching."
    tags:
      - hps-iot
  - index: 3
    title: "n8n workflow generation"
    description: "hps-iot skill knows your n8n webhook structure and your Supabase schema. Ask 'create an n8n workflow that triggers when a tenant misses rent payment' → Codex generates the full n8n JSON export, ready to import. No manual node-building."
    tags:
      - hps-iot
---

**Problem**: integrating Aqara locks with SmartThings cloud, wiring n8n webhooks to Home Assistant, and managing a Hetzner-hosted server usually means 20 open browser tabs and constant context-switching between four API docs. **Solution**: `/session-iot` loads every doc into a 1M-context Gemini Pro session, wires the Hetzner MCP, and lets one agent design, code, and deploy the full integration chain without leaving the terminal.

Behind the scenes: Aqara Hub M3 + U200 smart lock per apartment, SmartThings as the cloud API layer, Home Assistant on a Hetzner VPS for local automations, and n8n orchestrating webhook-driven workflows. The session loads `hps-iot-aqara` and `hps-n8n` skills pre-primed with the device inventory and automation YAML templates. Gemini Pro reads API docs (1M context), Codex implements.
