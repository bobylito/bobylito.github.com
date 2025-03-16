import { SITE } from "@/config";
import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const commonContentSchema = z.object({
  title: z.string(),
  description: z.string().nullish(),
  pubDatetime: z.date(),
  modDatetime: z.date().nullish(),
  tags: z.array(z.string()).default(["others"]),
});

export type CommonContent = z.infer<typeof commonContentSchema>;

const blog = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/data/blog" }),
  schema: ({ image }) =>
    commonContentSchema.extend({
      author: z.string().default(SITE.author),
      featured: z.boolean().optional(),
      draft: z.boolean().optional(),
      ogImage: image()
        .refine(img => img.width >= 1200 && img.height >= 630, {
          message: "OpenGraph image must be at least 1200 X 630 pixels!",
        })
        .or(z.string())
        .optional(),
      canonicalURL: z.string().optional(),
      editPost: z
        .object({
          disabled: z.boolean().optional(),
          url: z.string().optional(),
          text: z.string().optional(),
          appendFilePath: z.boolean().optional(),
        })
        .optional(),
    }),
});

const talks = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/talks" }),
  schema: ({ image }) =>
    commonContentSchema.extend({
      source_file: z.string().optional(),
      pdf_file: z.string(),
      ogImage: image()
        .refine(img => img.width >= 1200 && img.height >= 630, {
          message: "OpenGraph image must be at least 1200 X 630 pixels!",
        })
        .or(z.string())
        .optional(),
    }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/projects" }),
  schema: ({ image }) =>
    commonContentSchema.extend({
      ogImage: image()
        .refine(img => img.width >= 1200 && img.height >= 630, {
          message: "OpenGraph image must be at least 1200 X 630 pixels!",
        })
        .or(z.string())
        .optional(),
    }),
});

export const collections = { blog, talks, projects };
