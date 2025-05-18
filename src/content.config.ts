import { SITE } from "@/config";
import { feedLoader } from "@ascorbic/feed-loader";
import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const commonContentSchema = z.object({
  type: z.string(),
  title: z.string(),
  description: z.string().nullish(),
  pubDatetime: z.date(),
  modDatetime: z.date().nullish(),
  tags: z.array(z.string()).default(["others"]),
  draft: z.boolean().optional().default(false),
});

export type CommonContent = z.infer<typeof commonContentSchema>;

const blog = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./data/blog" }),
  schema: ({ image }) =>
    commonContentSchema.extend({
      type: z.literal("posts").catch("posts"),
      author: z.string().default(SITE.author),
      featured: z.boolean().optional(),
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
  loader: glob({ pattern: "**/*.md", base: "./data/talks" }),
  schema: ({ image }) =>
    commonContentSchema.extend({
      type: z.literal("talks").catch("talks"),
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
  loader: glob({ pattern: "**/*.md", base: "./data/projects" }),
  schema: ({ image }) =>
    commonContentSchema.extend({
      type: z.literal("projects").catch("projects"),
      is_finished: z.boolean().default(false),
      ogImage: image()
        .refine(img => img.width >= 1200 && img.height >= 630, {
          message: "OpenGraph image must be at least 1200 X 630 pixels!",
        })
        .or(z.string())
        .optional(),
    }),
});

const soundcloud = defineCollection({
  loader: feedLoader({
    url: "https://feeds.soundcloud.com/users/soundcloud:users:2409674/sounds.rss",
  }),
});

export const collections = { blog, talks, projects, soundcloud };
