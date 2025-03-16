import { generateOgImageForPost } from "@/utils/generateOgImages";
import { slugifyStr } from "@/utils/slugify";
import type { APIRoute } from "astro";
import { getCollection, type CollectionEntry } from "astro:content";

export async function getStaticPaths() {
  const posts = await getCollection("talks").then(p =>
    p.filter(({ data }) => !data.ogImage)
  );

  return posts.map(post => ({
    params: { slug: slugifyStr(post.data.title) },
    props: post,
  }));
}

export const GET: APIRoute<CollectionEntry<"talks">> = async ({ props }) =>
  new Response(await generateOgImageForPost(props), {
    headers: { "Content-Type": "image/png" },
  });
