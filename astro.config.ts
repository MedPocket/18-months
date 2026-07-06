import { satteri } from "@astrojs/markdown-satteri";
import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";
import starlightImageZoom from "starlight-image-zoom";
import starlightLinksValidator from "starlight-links-validator";

import { sidebar } from "./config/sidebar";
import { satteriExternalLinks } from "./src/plugins/satteri-external-links";
import { satteriReadingTime } from "./src/plugins/satteri-reading-time";

const site =
  process.env.NODE_ENV === "production"
    ? (process.env.SITE ?? "https://18-months.pages.dev")
    : "http://localhost:4321";

let base = process.env.BASE || "/";
if (base !== "/" && !base.startsWith("/")) base = "/" + base;
if (base !== "/" && !base.endsWith("/")) base = base + "/";

export default defineConfig({
  site,
  base,
  markdown: {
    processor: satteri({
      mdastPlugins: [satteriReadingTime],
      hastPlugins: [satteriExternalLinks],
    }),
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
        Sidebar: "./src/components/Sidebar.astro",
        PageTitle: "./src/components/PageTitle.astro",
        Footer: "./src/components/Footer.astro",
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
      sidebar,
      plugins: [starlightImageZoom(), starlightLinksValidator({ errorOnRelativeLinks: false })],
    }),
  ],
});
