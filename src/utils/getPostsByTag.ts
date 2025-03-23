import type { CommonContent } from "@/content.config";
import getSortedPosts from "./getSortedPosts";
import { slugifyAll } from "./slugify";

function getPostsByTag<T extends { id: string; data: CommonContent }>(
  posts: T[],
  tag: string
) {
  return getSortedPosts(
    posts.filter((post) => slugifyAll(post.data.tags).includes(tag))
  );
}

export default getPostsByTag;
