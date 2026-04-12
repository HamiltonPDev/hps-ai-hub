---
name: hps-iot-aqara
domain: iot
description: "Aqara Hub M3 + U200 API patterns, SmartThings scene/device API, Home Assistant YAML conventions, Hetzner server config, n8n webhook JSON structure, PIN rotation logic."
installed: false
isHpsDomain: true
bundledMcp: "home-assistant"
priority: nice-to-have
---

The IoT stack centres on Aqara Hub M3 and U200 smart lock for property access control. This skill covers the Aqara API patterns for device registration and status polling, SmartThings scene and device API for automation triggers, and Home Assistant YAML conventions for entity naming and automation structure. The Hetzner server runs the Home Assistant instance. n8n webhooks bridge IoT events to business logic. PIN rotation logic generates time-limited access codes for guests tied to booking dates.
