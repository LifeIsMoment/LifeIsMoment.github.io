import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const notes = defineCollection({
 loader: glob({ base: './src/content/notes', pattern: '**/*.{md,mdx}' }),
 schema: z.object({
   title: z.string(),
   description: z.string(),
   date: z.coerce.date(),
   category: z.string(),
   status: z.string(),
   published_paper: z.boolean().default(false),
 })
});
export const collections = { notes };
