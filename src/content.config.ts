// src/content.config.ts
// Defines all 6 content collections for the HPS AI Hub.
// Source of truth: sdd/content-migration-meta/design (engram #93)
//                + sdd/content-migration-0-schema-foundation/design (this file)
// MUST NOT be modified by downstream sub-changes except via ADDITIVE optional fields.
// Required-field changes are forbidden (schema invariant §2 in engram #93).

import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// ─── 1. layers ────────────────────────────────────────────────────────────
// 9 items, ordered 0..8. Source: hpsAiOperationSystem.html §01.
const layers = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/layers' }),
  schema: z.object({
    index: z.number().int().min(0).max(8),               // 0..8 (file prefix matches)
    name: z.string(),                                    // "Intelligence Layer"
    responsibility: z.string(),                          // one-sentence role
    components: z.array(z.string()).default([]),         // tools/models named in layer
    model: z.string().optional(),                        // primary model slug, xref -> models
    relatedAgents: z.array(z.string()).default([]),      // agent slugs referenced
    diagramAscii: z.string().optional(),                 // optional ASCII fragment
  }),
});

// ─── 2. agents ────────────────────────────────────────────────────────────
// 19 items. Source: hpsAiOperationSystem.html §03.
const agents = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/agents' }),
  schema: z.object({
    // Identity
    name: z.string(),
    role: z.string(),
    description: z.string(),

    // Model wiring
    model: z.string(),                                   // human-readable e.g. "Claude Opus 4.7"
    modelSlug: z.string().optional(),                    // slug xref -> models
    modelAlternative: z.string().optional(),             // slug OR human-readable fallback

    // Classification
    category: z.enum([
      'orchestration',
      'planning',
      'execution',
      'worker',
      'domain-specialist',
      'security',
      'read-only',
    ]).optional(),
    tier: z.enum([
      'planning',
      'execution',
      'worker',
      'domain',
      'security',
    ]).optional(),
    source: z.enum(['omo', 'agency-agents', 'hps-custom']).default('omo'),

    // Capabilities
    domains: z.array(z.string()).default([]),            // domain slugs (xref -> domains)
    tools: z.array(z.string()).default([]),              // MCP names / tool keys
    trigger: z.string().optional(),                      // e.g. "ultrawork" or "/start-work"
    readOnly: z.boolean().default(false),
  }),
});

// ─── 3. models ────────────────────────────────────────────────────────────
// 17 items: 6 paid (§02) + 11 free/budget (§11). Source: hpsAiOperationSystem.html §02+§11.
const models = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/models' }),
  schema: z.object({
    // Identity
    name: z.string(),
    provider: z.string(),
    cost: z.string(),
    bestFor: z.string(),

    // Routing
    tier: z.enum(['architecture', 'implementation', 'automation', 'free']),
    category: z.string(),                                // legacy free-text (kept for sort compat)
    isFree: z.boolean().default(false),
    omoCategory: z.array(z.enum([
      'visual-engineering',
      'ultrabrain',
      'deep',
      'writing',
      'quick',
      'artistry',
      'multimodal',
    ])).default([]),

    // Comparisons / metadata
    comparable: z.string().optional(),
    speed: z.string().optional(),
    contextWindow: z.string().optional(),
    usedBy: z.array(z.string()).default([]),             // agent slugs xref -> agents

    // External
    docsUrl: z.string().url().optional(),
  }),
});

// ─── 4. skills ────────────────────────────────────────────────────────────
// 12 items. Source: hpsAiOperationSystem.html §10.
const skills = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/skills' }),
  schema: z.object({
    name: z.string(),
    domain: z.enum([
      'fullstack',
      'proptech',
      'iot',
      'cybersecurity',
      'ml',
      'analytics',
      'automation',
      'devops',
      'marketing',
      'business-ops',
    ]),
    description: z.string(),
    installed: z.boolean().default(false),
    isHpsDomain: z.boolean().default(true),
    bundledMcp: z.string().optional(),
    priority: z.enum(['critical', 'important', 'nice-to-have']).optional(),
  }),
});

// ─── 5. domains ───────────────────────────────────────────────────────────
// 8 items: 6 real + 2 stubs (Marketing, Business Ops) with comingSoon: true.
// Source: hpsAiOperationSystem.html §07.
const domains = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/domains' }),
  schema: z.object({
    name: z.string(),
    icon: z.string(),
    color: z.enum(['build', 'operate', 'grow', 'secure']),  // MUST match Pill.astro enum
    order: z.number().int().min(1),                         // LOCKED: required, 1-indexed (Amendment 2)
    subtitle: z.string(),
    stack: z.array(z.string()).default([]),

    // Cross-references (slug-based)
    agents: z.array(z.string()).default([]),
    skills: z.array(z.string()).default([]),
    mcps: z.array(z.string()).default([]),

    // Operational metadata
    modelBias: z.string().optional(),
    sessionCommand: z.string().optional(),
    comingSoon: z.boolean().default(false),

    // Nested workflow steps
    workflowSteps: z.array(z.object({
      index: z.number().int().min(1),
      title: z.string(),
      description: z.string(),
      tags: z.array(z.string()).default([]),             // agent or model slugs
    })).default([]),
  }),
});

// ─── 6. news ──────────────────────────────────────────────────────────────
// AI feed content. Schema unchanged from pre-migration state.
const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    excerpt: z.string(),
    tags: z.array(z.string()).default([]),
    source: z.string().optional(),
  }),
});

export const collections = {
  layers,
  agents,
  models,
  skills,
  domains,
  news,
};
