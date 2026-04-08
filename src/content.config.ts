import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const agents = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/agents' }),
  schema: z.object({
    name: z.string(),
    model: z.string(),
    role: z.string(),
    category: z.string().optional(),
    domains: z.array(z.string()),
    readOnly: z.boolean().default(false),
  }),
});

const models = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/models' }),
  schema: z.object({
    name: z.string(),
    provider: z.string(),
    cost: z.string(),
    category: z.string(),
    bestFor: z.string(),
  }),
});

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    excerpt: z.string(),
    tags: z.array(z.string()),
    source: z.string().optional(),
  }),
});

export const collections = { agents, models, news };
