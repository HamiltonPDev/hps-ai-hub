---
name: hps-devops
domain: devops
description: "Vercel project config, Cloudflare worker deploy pattern, Hetzner server naming, GitHub Actions workflow structure, environment variable naming convention."
installed: false
isHpsDomain: true
priority: important
---

DevOps covers deployment and CI/CD across three platforms. Vercel hosts Next.js frontends with project-level environment variables and preview deployments per PR. Cloudflare Workers deploy Hono APIs via wrangler with a `wrangler.toml` per service. Hetzner servers follow the `hps-{service}-{region}` naming convention. GitHub Actions workflows use a standard three-job structure: lint, test, deploy — with environment-specific secrets. Environment variables follow `{SERVICE}_{CONTEXT}_{KEY}` naming (e.g., `SUPABASE_PROD_URL`).
