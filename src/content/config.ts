import { defineCollection,z } from "astro:content";

const coursesCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        img: z.string(),
    })
})

export const collections = {
    'courses':coursesCollection
}