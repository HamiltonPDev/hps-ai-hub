---
name: "Proptech — Sevilla PMS & Casa Brunelli"
icon: "🏠"
color: build
subtitle: "Next.js 15 · Supabase · Prisma · Stripe SEPA · Resend · Docuseal · n8n · Flutter"
stack:
  - Next.js 15
  - Supabase
  - Prisma
  - Stripe SEPA
  - Resend
  - Docuseal
  - n8n
  - Flutter
order: 1
agents:
  - prometheus
  - hps-proptech
  - hps-iot
skills:
  - hps-sevilla-pms
  - hps-casa-brunelli
  - hps-iot-aqara
  - hps-fiscal-es
mcps:
  - supabase
  - context7
modelBias: "Gemini Pro for long docs, Opus for fiscal rules"
sessionCommand: "/session-proptech"
comingSoon: false
workflowSteps:
  - index: 1
    title: "New feature for Sevilla PMS"
    description: "Type 'plan [feature description]' → Prometheus interviews you about scope, edge cases, LAU compliance, tenant data implications → outputs spec → Oracle reviews security → Hephaestus (Codex) implements in parallel workers."
    tags:
      - prometheus
      - hps-proptech
  - index: 2
    title: "Aqara lock PIN automation (contract → PIN → lock)"
    description: "Trigger: new Docuseal contract signed → n8n webhook fires → hps-iot generates PIN → Hono API pushes to Aqara via SmartThings → Supabase records it → HPS Tenant Flutter app receives notification. The full IoT chain is implemented once, stored to Engram, never re-explained."
    tags:
      - hps-iot
  - index: 3
    title: "Spanish fiscal compliance check (Modelo 100 / IRPF)"
    description: "Gemini Pro reads the full Modelo 100 guide + LAU text + your rental contract templates. hps-proptech agent validates your income calculations (50% IRPF reduction, zona tensionada status). Output: checklist + any corrections needed before your tax filing."
    tags:
      - hps-proptech
  - index: 4
    title: "Casa Brunelli seasonal pricing & Stripe SEPA"
    description: "hps-proptech skill knows the Casa Brunelli stack (Next.js 14 + Stripe + Docuseal). When you ask to modify seasonal pricing logic, it already knows the schema, the admin dashboard layout, and the Stripe webhook structure. No context re-injection."
    tags:
      - hps-proptech
---

The proptech domain covers two active real-estate projects: **Sevilla PMS** (6 apartments, 24 rooms in Seville) and **Casa Brunelli** (seasonal rental in Italy). Both share a Next.js + Supabase + Prisma stack, with Stripe SEPA for EU payments, Docuseal for digital contracts, and n8n for automation workflows.

Every session starts with `/session-proptech` which loads the hps-proptech skill, configures Supabase MCP with the correct project, and primes the agent with your property schemas and fiscal rules. The skill file carries the full context: Spanish LAU rental law, IRPF deduction rules, zona tensionada status, and the Aqara lock integration chain.

Prometheus handles planning, Oracle reviews security, and Codex executes implementation — all wired through the four workflow steps below.
