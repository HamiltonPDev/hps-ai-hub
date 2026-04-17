---
name: "Full-Stack Development"
icon: "⚡"
color: build
subtitle: "Ship Next.js + Flutter features without re-explaining the HPS stack every session"
stack:
  - Next.js 15
  - Prisma
  - Supabase
  - Hono
  - Flutter
  - Vercel
  - Cloudflare
  - Docuseal
order: 5
agents:
  - hephaestus
  - hps-analytics
skills:
  - hps-flutter
  - hps-hono
  - hps-nextjs
  - hps-supabase
mcps:
  - supabase
  - context7
modelBias: "Sonnet for code, Gemini for UI"
sessionCommand: "/session-fullstack"
comingSoon: false
workflowSteps:
  - index: 1
    title: "Flutter app feature (HPS Clean/Owner/Tenant/Invest)"
    description: "hps-flutter skill knows your 4-app architecture, colour system (teal/navy/green/orange), Riverpod state patterns, Supabase Flutter client auth. Say 'add push notification for late rent payment to HPS Tenant' → Hephaestus (Codex) implements the full feature: Supabase function, n8n trigger, Flutter widget."
    tags:
      - hephaestus
  - index: 2
    title: "Hono API endpoint + Prisma migration"
    description: "hps-hono skill knows your Hono middleware patterns, JWT auth structure, Prisma schema conventions. Ask 'add a GET /api/tenants/:id/payment-history endpoint' → Codex writes the handler, schema migration, and integration test. Vercel MCP triggers deployment."
    tags:
      - hephaestus
  - index: 3
    title: "Posada's Schoonmaken invoice automation"
    description: "Your cleaning company automation (Python + GitHub Actions + e-boekhouden SOAP API + Google Calendar). hps-analytics can run Gemini Pro against the e-boekhouden API docs to validate your SOAP calls. Codex maintains the invoice generation script. Zero manual invoice work."
    tags:
      - hps-analytics
---

**Problem**: re-explaining the HPS stack (Next.js 15 + Hono + Prisma + Supabase + 4 Flutter apps) to a fresh session costs 15 minutes every time. Multiply that across a week of shipping and the friction becomes the blocker. **Solution**: `/session-fullstack` loads four skill files that already know your auth patterns, Riverpod state conventions, Hono middleware structure, e-boekhouden SOAP calls, and Vercel deployment config. New features ship in one session — zero stack context re-injection.

The session covers the primary HPS development workflow: the 4-app Flutter suite (Clean/Owner/Tenant/Invest), the Hono API layer with Prisma ORM, the Next.js admin dashboards, and the Posada's Schoonmaken invoice automation (Python + GitHub Actions). Codex is the primary executor, Sonnet handles code review, Gemini Pro reads long API docs when needed.
