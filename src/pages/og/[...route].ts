// For details, see: Https://hideoo.dev/notes/starlight-og-images

import { OGImageRoute } from "astro-og-canvas";
import { getCollection, type CollectionEntry } from "astro:content";

const entries = await getCollection("docs");

type OGPageData = Pick<CollectionEntry<"docs">["data"], "title" | "description">;

const pages: Record<string, { data: OGPageData }> = Object.fromEntries(
  entries.map(({ data, id }) => [
    id,
    { data: { title: data.title, description: data.description } },
  ]),
);

export const { getStaticPaths, GET } = await OGImageRoute({
  pages,
  param: "route",
  getImageOptions: (_path, page) => {
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
          families: ["DejaVuSans"],
        },
        description: {
          families: ["DejaVuSans"],
        },
      },
      fonts: ["./src/assets/font/DejaVuSans.ttf"],
    };
  },
});
