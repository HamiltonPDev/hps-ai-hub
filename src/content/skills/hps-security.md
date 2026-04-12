---
name: hps-security
domain: cybersecurity
description: "OWASP Top 10 patterns to reject, GDPR PII detection rules, Supabase key patterns (never in client code), SQL injection via Prisma raw, security baseline for all endpoints."
installed: false
isHpsDomain: true
priority: critical
---

Security is a cross-cutting concern enforced in every coding session. This skill embeds OWASP Top 10 rejection patterns — no inline SQL, no eval, no unvalidated redirects. GDPR PII detection rules flag any field that stores personal data without explicit consent tracking. Supabase keys (service_role, anon) must never appear in client-side code — the skill flags any import of `SUPABASE_SERVICE_ROLE_KEY` outside server contexts. Prisma raw queries are flagged for SQL injection review. Every API endpoint must validate auth, rate-limit, and sanitize input as a baseline.

Note: The agent `hps-security` (in the agents collection) orchestrates security review workflows. This skill provides inline coding knowledge patterns. Different purpose, same slug across collections — pre-authorized per meta-design §4 R12.
