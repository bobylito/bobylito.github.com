import type { CommonContent } from "@/content.config";

type GroupKey = string | number | symbol;

interface GroupFunction<T> {
  (item: T, index?: number): GroupKey;
}

const getPostsByGroupCondition = <T extends { data: CommonContent }>(
  posts: T[],
  groupFunction: GroupFunction<T>
) => {
  const result: Record<GroupKey, T[]> = {};
  for (let i = 0; i < posts.length; i++) {
    const item = posts[i];
    const groupKey = groupFunction(item, i);
    if (!result[groupKey]) {
      result[groupKey] = [];
    }
    result[groupKey].push(item);
  }
  return result;
};

export default getPostsByGroupCondition;
