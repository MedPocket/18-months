// For details, see: Https://hideoo.dev/notes/starlight-og-images

import { getCollection } from "astro:content";
import { OGImageRoute } from "astro-og-canvas";

const entries = await getCollection("docs");

const pages = Object.fromEntries(entries.map(({ data, id }) => [id, { data }]));

export const { getStaticPaths, GET } = OGImageRoute({
  pages,
  param: "route",
  getImageOptions: (_path, page: (typeof pages)[number]) => {
    return {
      title: page.data.title,
      description: page.data.description,
      border: { width: 32, side: "inline-start" },
      padding: 80,
      bgImage: {
        path: "./src/pages/og/_background-image.png",
      },
      font: {
        title: {
          families: ["Inter"],
        },
        description: {
          families: ["Inter"],
        },
      },
      fonts: [
        "https://cdn.jsdelivr.net/npm/inter-font@3.19.0/ttf/Inter-Regular.ttf",
      ],
    };
  },
});
