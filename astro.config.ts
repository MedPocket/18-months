import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";
import starlightImageZoom from "starlight-image-zoom";
import starlightLinksValidator from "starlight-links-validator";
import { sidebar } from "./astro.sidebar";
import { rehypeExternalLinks } from "./src/plugins/rehype-external-links";
import { remarkReadingTime } from "./src/plugins/remark-reading-time";

const site =
  process.env.NODE_ENV === "production"
    ? (process.env.SITE ?? "https://18-months.pages.dev")
    : "http://localhost:4321";
const base = process.env.BASE || "/";

export default defineConfig({
  site,
  base,
  markdown: {
    remarkPlugins: [remarkReadingTime],
    rehypePlugins: [rehypeExternalLinks()],
  },
  integrations: [
    starlight({
      routeMiddleware: "./src/routeData.ts",
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
      customCss: ["./src/styles/globals.css"],
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
