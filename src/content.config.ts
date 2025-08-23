import { file, glob } from "astro/loaders";
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

const authorSchema = z.object({
  id: z.number(),
  name: z.string(),
  slug: z.string(),
});

const blog = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/blog" }),
  schema,
});

const authors = defineCollection({
  loader: file("./src/authors.json"),
  schema: authorSchema,
});

export type Post = z.infer<typeof schema>;
export type Author = z.infer<typeof authorSchema>;

export const collections = { blog, authors };
