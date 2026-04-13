---
index: 5
name: "Tools & MCPs"
responsibility: "Pluggable tool surface: Supabase, GitHub, Home Assistant, Vercel, Cloudflare, Exa, Context7, grep_app"
components:
  - "@supabase/mcp"
  - "@github/mcp"
  - "home-assistant"
  - "@vercel/mcp"
  - "@cloudflare/mcp"
  - "Exa"
  - "Context7"
  - "grep_app"
relatedAgents: []
diagramAscii: |
  LAYER 5 — TOOLS & MCPs
  @supabase/mcp    Schema, RLS, realtime events
  @github/mcp      PR creation, CI, issue management
  home-assistant   Entity control, automation, Aqara
  @vercel/mcp      Deploy triggers, env, function logs
  @cloudflare/mcp  DNS, workers, KV management
  Exa              Real-time web search (omo built-in)
  Context7         Official library docs (omo + gentle-ai)
  grep_app         GitHub code search (omo built-in)
    + Skill-embedded MCPs (spin up on-demand per task)
---

Every external integration exposed as an MCP tool. Supabase for database operations, GitHub for CI/CD, Home Assistant for IoT, Vercel and Cloudflare for deployment infrastructure. Exa, Context7, and grep_app provide real-time search and documentation access.

Skill-embedded MCPs spin up on demand — each domain skill can bundle its own tool surface.
