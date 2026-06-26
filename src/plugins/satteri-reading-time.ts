import getReadingTime from "reading-time";
import { defineMdastPlugin } from "satteri";

export const satteriReadingTime = defineMdastPlugin({
  name: "reading-time",
  text(node, ctx) {
    if (ctx.data.astro && (ctx.data.astro as any).frontmatter.minutesRead) {
      return;
    }
    let rootNode: any = node;
    while (ctx.parent(rootNode)) {
      rootNode = ctx.parent(rootNode);
    }
    const textOnPage = ctx.textContent(rootNode);
    const readingTime = getReadingTime(textOnPage);
    if (!ctx.data.astro) (ctx.data as any).astro = { frontmatter: {} };
    const astro = ctx.data.astro as any;
    if (!astro.frontmatter) astro.frontmatter = {};
    astro.frontmatter.minutesRead = readingTime.text; // e.g. "3 min read"
  },
});
