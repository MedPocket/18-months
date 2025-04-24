// @ts-check

import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";
import rehypeExternalLinks from "rehype-external-links";
import rehypeKatex from "rehype-katex";
import rehypeSlug from "rehype-slug";
import remarkMath from "remark-math";
import starlightImageZoom from "starlight-image-zoom";
import starlightLinksValidator from "starlight-links-validator";
import starlightSidebarTopics from "starlight-sidebar-topics";
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
            icon: "seti:notebook",
          },
          {
            label: "Sản Khoa",
            link: "/san-khoa/",
            icon: "open-book",
            items: [
              "san-khoa",
              "san-khoa/dac-diem-rau-thai",
              {
                label: "Xuất huyết tử cung trong thai kỳ",
                autogenerate: {
                  directory: "san-khoa/xuat-huyet-tu-cung-trong-thai-ky",
                },
              },
              {
                label: "Thai nghén thất bại sớm",
                autogenerate: {
                  directory: "san-khoa/thai-nghen-that-bai-som",
                },
              },
              "san-khoa/dem-cu-dong-thai",
              "san-khoa/dong-hoc-sieu-am-doppler",
              {
                label: "Chỉ số ối",
                autogenerate: {
                  directory: "san-khoa/chi-so-oi",
                },
              },
              "san-khoa/nhiem-trung-oi",
              "san-khoa/de-non",
              "san-khoa/dai-thao-duong-thai-ky",
              "san-khoa/tang-huyet-ap-thai-ky",
              "san-khoa/tuyen-giap-va-thai-ky",
              "san-khoa/viem-gan-b-va-thai-ky",
              "san-khoa/thieu-mau",
              "san-khoa/sga-iugr",
              {
                label: "Chuyển dạ",
                autogenerate: {
                  directory: "san-khoa/chuyen-da",
                },
              },
              {
                label: "Rau tiền đạo",
                autogenerate: {
                  directory: "san-khoa/rau-tien-dao",
                },
              },
              "san-khoa/rau-bong-non",
              "san-khoa/vo-tu-cung",
            ],
          },
          {
            label: "Phụ Khoa",
            link: "/phu-khoa/",
            icon: "seti:csv",
            items: ["phu-khoa"],
          },
          {
            label: "Hỗ trợ sinh sản",
            link: "/ho-tro-sinh-san/",
            icon: "pencil",
            items: ["ho-tro-sinh-san", "ho-tro-sinh-san/buong-trung-da-nang"],
          },
        ]),
        starlightImageZoom(),
        starlightLinksValidator(),
      ],
    }),
  ],
});
