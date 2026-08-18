import { satteri } from "@astrojs/markdown-satteri";
import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";
import starlightImageZoom from "starlight-image-zoom";
import starlightLinksValidator from "starlight-links-validator";

import { sidebar } from "./config/sidebar";
import { satteriExternalLinks } from "./src/plugins/satteri-external-links";
import { satteriMermaid } from "./src/plugins/satteri-mermaid";
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
    syntaxHighlight: {
      type: "shiki",
      excludeLangs: ["mermaid"],
    },
    processor: satteri({
      mdastPlugins: [satteriReadingTime],
      hastPlugins: [satteriExternalLinks, satteriMermaid],
    }),
  },
  integrations: [
    starlight({
      routeMiddleware: "./src/routeData.ts",
      title: "18 Months",
      head: [
        {
          tag: "script",
          attrs: {
            async: true,
            src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2837724975096238",
            crossorigin: "anonymous",
          },
        },
        {
          tag: "script",
          attrs: {
            type: "module",
          },
          content: `
            import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs';

            function renderMermaid() {
              const elements = document.querySelectorAll('.mermaid');
              if (elements.length === 0) return;

              const isDark = document.documentElement.dataset.theme === 'dark' ||
                (!('theme' in document.documentElement.dataset) && window.matchMedia('(prefers-color-scheme: dark)').matches);

              mermaid.initialize({
                startOnLoad: false,
                theme: isDark ? 'dark' : 'default',
                securityLevel: 'loose',
              });

              mermaid.run({
                nodes: Array.from(elements),
              });
            }

            document.addEventListener('DOMContentLoaded', renderMermaid);
            document.addEventListener('astro:page-load', renderMermaid);

            // Re-render when theme changes
            const observer = new MutationObserver((mutations) => {
              mutations.forEach((mutation) => {
                if (mutation.attributeName === 'data-theme') {
                  renderMermaid();
                }
              });
            });
            observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
          `,
        },
      ],
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
      },
      customCss: ["./src/styles/globals.css", "./src/styles/mermaid.css"],
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
