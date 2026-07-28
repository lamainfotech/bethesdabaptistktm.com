import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const faith = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/faith' }),
  schema: z.object({
    title: z.string(),
    locale: z.enum(['en', 'ne']),
    translationPending: z.boolean().optional(),
  }),
});

const covenant = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/covenant' }),
  schema: z.object({
    title: z.string(),
    locale: z.enum(['en', 'ne']),
    translationPending: z.boolean().optional(),
  }),
});

const ministries = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/ministries' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    placeholder: z.boolean().optional(),
    order: z.number().default(0),
  }),
});

const sermons = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/sermons' }),
  schema: z.object({
    title: z.string(),
    speaker: z.string().optional(),
    date: z.coerce.date().optional(),
    mediaUrl: z.string().optional(),
  }),
});

export const collections = { faith, covenant, ministries, sermons };
