---
name: "Full-Stack Development"
icon: "⚡"
color: build
subtitle: "Next.js 15 · Prisma · Supabase · Hono · Flutter · Vercel · Cloudflare · Docuseal"
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

The full-stack domain covers the primary development workflow: building and maintaining the HPS app suite (4 Flutter apps), the Hono API layer with Prisma ORM, and the Next.js admin dashboards. It also includes the Posada's Schoonmaken cleaning company invoice automation.

The `/session-fullstack` command loads all four core skills (hps-flutter, hps-hono, hps-nextjs, hps-supabase), wires up Supabase and Vercel MCPs, and configures Codex as the primary executor with Sonnet for code review.
