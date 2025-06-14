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
          content: {
            type: "element",
            tagName: "svg",
            properties: {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 20 20",
              width: "0.75em",
              height: "0.75em",
              fill: "currentColor",
              "aria-hidden": "true",
              focusable: "false",
              className: ["external-link-icon"],
            },
            children: [
              {
                type: "element",
                tagName: "path",
                properties: {
                  d: "M1.5 3.5V14.5H12.5V10H14V15C14 15.5523 13.5523 16 13 16H1C0.447716 16 0 15.5523 0 15V3C0 2.44772 0.447715 2 1 2H6V3.5H1.5Z",
                },
              },
              {
                type: "element",
                tagName: "path",
                properties: {
                  d: "M15.9217 1.17828L7.01473 10.0853L5.95407 9.02462L14.8611 0.117624L15.9217 1.17828Z",
                },
              },
              {
                type: "element",
                tagName: "path",
                properties: {
                  d: "M7.5 0H16V1.5H7.5V0Z",
                },
              },
              {
                type: "element",
                tagName: "path",
                properties: {
                  d: "M16 0L16 8.5L14.5 8.5L14.5 -6.55671e-08L16 0Z",
                },
              },
            ],
          },
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
      defaultLocale: "root",
      locales: {
        root: {
          label: "Vietnam",
          lang: "vi",
        },
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
