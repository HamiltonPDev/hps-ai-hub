---
name: "Business Analytics"
icon: "📊"
color: grow
subtitle: "Rental portfolio KPIs · Supabase queries · ZOE University prep · HPS Owner dashboard"
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

The analytics domain powers business intelligence across all HPS properties and supports Hamilton's ZOE University Business Analytics Master's programme. It connects to Supabase for rental data queries, generates weekly KPI reports for the HPS Owner Flutter dashboard, and provides study session support using Gemini Pro for long-form reading.

The `/session-analytics` command loads hps-fiscal-es for Spanish tax calculations and primes the agent with portfolio schemas, occupancy models, and cost-tracking templates.
