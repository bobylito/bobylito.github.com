import kebabcase from "lodash.kebabcase";

export const slugifyStr = kebabcase;
export const slugifyAll = (arr: string[]) => arr.map(slugifyStr);
