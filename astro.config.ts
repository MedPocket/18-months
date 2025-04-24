// astro.config.ts

import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";
import rehypeExternalLinks from "rehype-external-links";
import rehypeKatex from "rehype-katex";
import rehypeSlug from "rehype-slug";
import remarkMath from "remark-math";
import starlightImageZoom from "starlight-image-zoom";
import starlightLinksValidator from "starlight-links-validator";
import { sidebar } from "./astro.sidebar";
import { remarkReadingTime } from "./src/plugins/remark-reading-time.mjs";

// Determine site URL based on environment
const site =
  process.env.CF_PAGES_BRANCH && process.env.CF_PAGES_BRANCH !== "main"
    ? `https://${process.env.CF_PAGES_URL}`
    : "https://18-months.pages.dev";

export default defineConfig({
  site,
  markdown: {
    remarkPlugins: [remarkMath, remarkReadingTime],
    rehypePlugins: [
      rehypeSlug,
      rehypeKatex,
      [
        rehypeExternalLinks,
        {
          target: "_blank",
          rel: ["nofollow", "noopener", "noreferrer"],
        },
      ],
    ],
  },
  integrations: [
    starlight({
      title: "18 Months",
      logo: {
        src: "/src/assets/logo.png",
        alt: "18 Months Logo",
        replacesTitle: true,
      },
      components: {
        Head: "./src/components/Head.astro",
        Footer: "./src/components/Footer.astro",
        PageTitle: "./src/components/PageTitle.astro",
      },
      customCss: ["./src/styles/globals.css", "katex/dist/katex.min.css"],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/MedPocket/18-months",
        },
      ],
      editLink: {
        baseUrl: "https://github.com/MedPocket/18-months/tree/main",
      },
      pagination: true,
      lastUpdated: true,
      plugins: [sidebar, starlightImageZoom(), starlightLinksValidator()],
    }),
  ],
});
