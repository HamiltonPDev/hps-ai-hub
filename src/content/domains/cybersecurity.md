---
name: "Cybersecurity"
icon: "🔐"
color: secure
subtitle: "GDPR-safe tenant data, OWASP audits on real HPS code, HBO Cyber study using your own codebase"
stack:
  - OWASP
  - GDPR
  - GGA
  - Supabase RLS
  - Vercel
  - Cloudflare
order: 6
agents:
  - hps-security
  - oracle
skills:
  - hps-security
  - hps-devops
mcps:
  - context7
modelBias: "Claude Haiku for fast pre-tool checks, Opus for analysis"
sessionCommand: "/session-cybersecurity"
comingSoon: false
workflowSteps:
  - index: 1
    title: "HPS-YOLO classifier — pre-tool security check"
    description: "Before every file write or bash execution, Claude Haiku classifies the action: LOW (auto-approve) / MEDIUM (prompt) / HIGH (block + explain). Inspired directly by CC's leaked classifyYoloAction(). Runs in <100ms, costs ~0.001¢. Your own security layer, not Anthropic's telemetry."
    tags:
      - hps-security
  - index: 2
    title: "GDPR compliance for tenant data"
    description: "Your 24 tenants include Latin Americans in regularization processes — highly sensitive data. hps-security agent scans every Supabase query and API response for PII exposure: names, document numbers, immigration status, payment history. GGA hook blocks commits that log PII to console or return it in unprotected API routes."
    tags:
      - hps-security
  - index: 3
    title: "HBO Cybersecurity study sessions"
    description: "Gemini Pro reads your course materials and textbooks (full PDFs in one context). Oracle agent explains concepts in depth. Build CTF challenge solutions with Hephaestus. Your real proptech codebase serves as the case study — understanding vulnerabilities in code you actually wrote is the best way to learn."
    tags:
      - oracle
      - hps-security
  - index: 4
    title: "Security review before every deployment"
    description: "Before any Vercel/Cloudflare deploy, Oracle + hps-security run: OWASP Top 10 scan, secret detection (Supabase keys, Stripe keys, Anthropic keys), Supabase RLS policy validation, Hono route auth coverage check. Results go to GitHub PR as a comment. No manual security review step."
    tags:
      - oracle
      - hps-security
---

**Problem**: 24 tenants include people in immigration-regularization processes — highly sensitive PII that cannot leak via console logs, unprotected API routes, or unpatched OWASP vulnerabilities. Meanwhile, HBO Cybersecurity study needs real case material and synthetic textbook examples don't build intuition like auditing production code does. **Solution**: `/session-cybersecurity` enforces HPS-YOLO pre-tool classification (<100ms Haiku check before any file write), runs OWASP + GDPR audits on HPS code itself (turning study material into production hardening), and blocks PII leaks at commit time via GGA.

The session loads `hps-security` and `hps-devops` skills, activates the GGA git hook for secret scanning, and configures Oracle as the security reviewer with Haiku as the fast pre-tool classifier.
