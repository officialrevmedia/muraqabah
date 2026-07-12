import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Research & Reflections articles live in src/content/articles as Markdown.
 * Religious content must not be published until reviewStatus is 'reviewed'
 * and the reviewer field names the reviewing scholar. Set draft: true to
 * keep an article out of the build entirely.
 */
const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum([
      'Sacred Knowledge', 'Hadith', 'Quran', 'Spirituality', 'Character',
      'Community and Khidmah', 'Course Notes', 'Scholar Reflections',
      'Announcements', 'Impact Reports'
    ]),
    author: z.string(),
    reviewer: z.string().default('Pending scholarly review'),
    reviewStatus: z.enum(['reviewed', 'pending']).default('pending'),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    readingTime: z.string(),
    heroImage: z.string(),
    heroAlt: z.string(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false)
  })
});

export const collections = { articles };
