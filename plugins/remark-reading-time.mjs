import getReadingTime from "reading-time";
import { toString as mdToString } from "mdast-util-to-string";

export const remarkReadingTime =
  () =>
  (tree, { data }) => {
    if (!data.astro) data.astro = {};
    if (!data.astro.frontmatter) data.astro.frontmatter = {};

    const textOnPage = mdToString(tree);
    const readingTime = getReadingTime(textOnPage);

    data.astro.frontmatter.minutesRead = readingTime.text;
  };
