import { SITE } from "@/config";
import type { CommonContent } from "@/content.config";

function postFilter<T extends { data: CommonContent }>({ data }: T) {
  const isPublishTimePassed =
    Date.now() >
    new Date(data.pubDatetime).getTime() - SITE.scheduledPostMargin;
  return import.meta.env.DEV || isPublishTimePassed;
}

export default postFilter;
