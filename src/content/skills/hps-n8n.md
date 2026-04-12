---
name: hps-n8n
domain: automation
description: "n8n workflow patterns, credential naming conventions, webhook URL structure, error handling nodes, Supabase trigger to n8n to external service chain template."
installed: false
isHpsDomain: true
priority: nice-to-have
---

n8n is the automation backbone connecting Supabase events to external services. This skill enforces workflow patterns — every workflow starts with a trigger node (webhook, cron, or Supabase trigger), passes through a validation node, then fans out to action nodes. Credential names follow the `{service}-{environment}` pattern. Webhook URLs use a predictable `https://{host}/webhook/{workflow-slug}` structure. Error handling nodes catch failures and route to a Slack notification channel. The canonical chain is Supabase trigger → n8n → external service (Stripe, Resend, Aqara).
