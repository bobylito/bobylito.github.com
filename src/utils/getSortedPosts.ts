import type { CommonContent } from "@/content.config";
import postFilter from "./postFilter";

function getSortedPosts<T extends { id: string; data: CommonContent }>(
  posts: T[],
  onlyPublished: boolean = false
): T[] {
  return posts
    .filter(p => postFilter(p, onlyPublished))
    .sort(
      (a, b) =>
        Math.floor(
          new Date(b.data.modDatetime ?? b.data.pubDatetime).getTime() / 1000
        ) -
        Math.floor(
          new Date(a.data.modDatetime ?? a.data.pubDatetime).getTime() / 1000
        )
    );
}

export default getSortedPosts;
