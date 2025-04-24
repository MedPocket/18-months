// @ts-check

import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";
import rehypeExternalLinks from "rehype-external-links";
import rehypeKatex from "rehype-katex";
import rehypeSlug from "rehype-slug";
import remarkMath from "remark-math";
import starlightSidebarTopics from "starlight-sidebar-topics";
import starlightImageZoom from "starlight-image-zoom";
import starlightLinksValidator from "starlight-links-validator";
import { remarkReadingTime } from "./src/plugins/remark-reading-time.mjs";

// https://docs.netlify.com/configure-builds/environment-variables/#read-only-variables
const site =
  process.env.CONTEXT !== "production" && process.env.DEPLOY_PRIME_URL
    ? process.env.DEPLOY_PRIME_URL
    : "https://18-months.netlify.app";

// https://astro.build/config
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
          rel: ["nofollow", "noopener"],
        },
      ],
    ],
  },
  integrations: [
    starlight({
      title: "18 Months",
      logo: {
        src: "/src/assets/logo.png",
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
      plugins: [
        starlightSidebarTopics([
          {
            label: "Trang Chủ",
            link: "/",
            icon: "open-book",
          },
          {
            label: "Sản Khoa",
            link: "/san-khoa/",
            icon: "seti:notebook",
            items: ["san-khoa", "san-khoa/dac-diem-rau-thai"],
          },
          {
            label: "Phụ Khoa",
            link: "/phu-khoa/",
            icon: "seti:csv",
            items: ["phu-khoa"],
          },
        ]),
        starlightImageZoom(),
        starlightLinksValidator(),
      ],
    }),
  ],
});
