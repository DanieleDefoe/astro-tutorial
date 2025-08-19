import { glob } from "astro/loaders";
import { z, defineCollection } from "astro:content";

const schema = z.object({
  title: z.string(),
  pubDate: z.date(),
  description: z.string(),
  author: z.string(),
  image: z.object({
    url: z.string(),
    alt: z.string(),
  }),
  tags: z.array(z.string()),
});

const blog = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/blog" }),
  schema,
});

export type Post = z.infer<typeof schema>;

export const collections = { blog };
