---
name: hps-hono
domain: fullstack
description: "Hono middleware chain, JWT auth pattern, Prisma query conventions, Cloudflare Workers deploy config, error response format, Zod validation schemas."
installed: false
isHpsDomain: true
priority: important
---

Hono powers lightweight API services deployed to Cloudflare Workers. This skill enforces the middleware chain order — CORS, auth, validation, handler. JWT auth uses a shared secret rotated via environment variables. Prisma queries follow the repository pattern with typed returns. Error responses use a consistent `{ error: string, code: number }` shape. All request/response bodies are validated with Zod schemas defined adjacent to the route handler.
