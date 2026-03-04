import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    hero: z.string().optional(),
    status: z.enum(['planned', 'in-progress', 'done']),
    stats: z.object({
      gain: z.string(),
      dataset: z.string(),
      tools: z.array(z.string())
    }),
    radar: z.array(z.object({
      metric: z.string(),
      value: z.number()
    })),
    color: z.string()
  })
});

export const collections = { projects, narratives, journey, stack, dashboard };