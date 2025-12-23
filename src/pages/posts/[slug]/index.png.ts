import { generateOgImageForPost } from "@/utils/generateOgImages";
import { slugifyStr } from "@/utils/slugify";
import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export async function getStaticPaths() {
  const posts = await getCollection("blog").then(p =>
    p.filter(({ data }) => !data.draft && !data.ogImage)
  );

  return posts.map(post => ({
    params: { slug: slugifyStr(post.id) },
    props: post,
  }));
}

export const GET: APIRoute = async ({ props }) =>
  new Response(
    await generateOgImageForPost({
      description: props.data.description,
      title: props.data.title,
    }),
    {
      headers: { "Content-Type": "image/png" },
    }
  );
