---
name: "Home Automation / Domotica"
icon: "🏡"
color: operate
subtitle: "Aqara Hub M3 · U200 lock · SmartThings API · Home Assistant · Hono API · n8n · Hetzner"
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

The IoT domain manages the smart-home infrastructure across all Sevilla properties. An Aqara Hub M3 + U200 smart lock per apartment, SmartThings as the cloud API layer, Home Assistant running on a Hetzner VPS for local automations, and n8n orchestrating webhook-driven workflows between them.

The `/session-iot` command loads hps-iot-aqara and hps-n8n skills, wires up the Hetzner MCP, and primes the agent with the full device inventory and automation YAML templates. Gemini Pro handles the API-doc reading (1M context), Codex handles implementation.
