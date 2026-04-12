---
name: hps-supabase
domain: fullstack
description: "Schema conventions, RLS policy patterns, Edge Function structure, realtime subscription patterns, storage bucket naming, Supabase auth flow in Next.js and Flutter."
installed: false
isHpsDomain: true
bundledMcp: "supabase"
priority: important
---

Supabase is the persistence and auth layer across all HPS projects. This skill enforces schema conventions — snake_case tables, RLS on every table with no exceptions, Edge Functions for server-side logic that can't run in Next.js middleware. Realtime subscriptions follow a channel-per-entity pattern. Storage buckets use kebab-case with project prefixes. Auth flow integrates with both Next.js (server-side session via cookies) and Flutter (Supabase Flutter client with deep link callbacks).
