import type { Root } from "mdast";
import { toString as mdToString } from "mdast-util-to-string";
import getReadingTime from "reading-time";
import type { Plugin } from "unified";

interface AstroRemarkData {
  astro: {
    frontmatter: Record<string, unknown>;
  };
}

export const remarkReadingTime: Plugin<[], Root> = () => {
  return (tree: Root, file) => {
    const data = file.data as Partial<AstroRemarkData>;
    if (!data.astro) data.astro = { frontmatter: {} };
    if (!data.astro.frontmatter) data.astro.frontmatter = {};

    const textOnPage = mdToString(tree);

    const readingTime = getReadingTime(textOnPage);

    data.astro.frontmatter.minutesRead = readingTime.text;
  };
};
