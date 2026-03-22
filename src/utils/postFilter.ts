import { SITE } from "@/config";
import type { CommonContent } from "@/content.config";

function postFilter<T extends { data: CommonContent }>(
  { data }: T,
  onlyPublished: boolean
) {
  if (import.meta.env.DEV) return true;
  const isPublishTimePassed =
    Date.now() >
    new Date(data.pubDatetime).getTime() - SITE.scheduledPostMargin;
  const isPublished = onlyPublished ? !data.draft : true;
  return isPublishTimePassed && isPublished;
}

export default postFilter;
