import { defineCollection, z } from 'astro:content';

// Define the posts collection schema
const posts = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.string().transform((str: string) => new Date(str)),
        slug: z.string().optional(),
    }),
});

export const collections = {
    posts,
};

