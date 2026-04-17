---
name: "Business Analytics"
icon: "📊"
color: grow
subtitle: "Turn rental data + ZOE Master's coursework into actionable dashboards and study material"
stack:
  - Supabase
  - ZOE University
  - Flutter
order: 3
agents:
  - hps-analytics
skills:
  - hps-fiscal-es
mcps:
  - supabase
modelBias: "Gemini Pro for course reading, Claude Sonnet for synthesis"
sessionCommand: "/session-analytics"
comingSoon: false
workflowSteps:
  - index: 1
    title: "Portfolio analytics report generation"
    description: "hps-analytics agent queries your Supabase tables (via MCP) → calculates occupancy rate, payment on-time rate, maintenance cost per unit, income per room → formats as JSON → feeds HPS Owner Flutter dashboard. Run weekly, results stored to Engram."
    tags:
      - hps-analytics
  - index: 2
    title: "ZOE Business Analytics Master's prep"
    description: "Use Gemini Pro to read full course syllabi and textbooks. Claude synthesises into study materials. Ask domain-specific questions. Build practice datasets from your Sevilla rental data (anonymised) for coursework. Your real data is your best learning tool."
    tags:
      - hps-analytics
  - index: 3
    title: "API cost optimisation tracking"
    description: "hps-analytics tracks your model spend per project, per agent, per session. Web search costs $0.01/query (CC leak confirmed). Each model's token cost is tracked. Monthly report: where is your money going, which tasks can be routed cheaper."
    tags:
      - hps-analytics
---

**Problem**: rental KPIs live in Supabase queries that nobody runs weekly, ZOE Business Analytics Master's coursework needs real data to ground it, and API costs run untracked until the bill hits. **Solution**: `/session-analytics` queries Supabase via MCP for weekly portfolio KPIs (feeds the HPS Owner Flutter dashboard), synthesises ZOE course materials using Gemini Pro's 1M context, and logs model spend per project — so you catch a task routed to Opus when Sonnet would have done.

The session loads `hps-fiscal-es` for Spanish tax calculations and primes the agent with portfolio schemas (24 rooms across 6 apartments), occupancy models, and cost-tracking templates.
