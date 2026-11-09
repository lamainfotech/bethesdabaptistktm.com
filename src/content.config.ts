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
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      meetingTime: z.string().optional(),
      leader: z.string().optional(),
      placeholder: z.boolean().optional(),
      order: z.number().default(0),
      image: image(),
    }),
});

// One file per language (en.md, ne.md) holding the home page text and photos.
const home = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/home' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      heroTitle: z.string(),
      heroText: z.string(),
      heroImage: image(),
      heroImageAlt: z.string(),
      heroPrimaryButton: z.string(),
      heroSecondaryButton: z.string(),
      quote: z.string().optional(),
      quoteSource: z.string().optional(),
      serviceTimesTitle: z.string(),
      serviceTimes: z.string(),
      serviceTimesPlaceholder: z.boolean().optional(),
      serviceTimesLink: z.string().optional(),
      locationTitle: z.string(),
      locationLink: z.string().optional(),
      beliefsTitle: z.string(),
      beliefsText: z.string().optional(),
      beliefsLink: z.string(),
      ministriesTitle: z.string(),
      ministriesText: z.string().optional(),
      visitTitle: z.string(),
      visitText: z.string(),
      visitButton: z.string(),
      visitImage: image(),
      visitImageAlt: z.string(),
    }),
});

const sermons = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/sermons' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    youtubeUrl: z.url().optional(),
  }),
});

export const collections = { faith, covenant, ministries, sermons, home };
