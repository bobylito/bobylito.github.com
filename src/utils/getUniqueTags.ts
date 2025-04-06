import type { CommonContent } from "@/content.config";
import postFilter from "./postFilter";
import { slugifyStr } from "./slugify";

interface Tag {
  tag: string;
  tagName: string;
  count: number;
}

type Content = {
  data: CommonContent;
};

export function getUniqueTags(posts: Content[]): Tag[] {
  const tags = posts
    .filter(postFilter)
    .flatMap((post) => post.data.tags)
    .map((tag) => ({ tag: slugifyStr(tag), tagName: tag }));

  const uniqueTags = tags
    .filter(
      (value, index, self) =>
        self.findIndex((tag) => tag.tag === value.tag) === index
    )
    .map((tag) => ({
      ...tag,
      count: tags.filter((t) => t.tagName === tag.tagName).length,
    }))
    .sort((tagA, tagB) => tagA.tag.localeCompare(tagB.tag));

  return uniqueTags;
}
