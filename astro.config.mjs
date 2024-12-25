// @ts-check

import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import rehypeKatex from 'rehype-katex';
import rehypeSlug from 'rehype-slug';
import remarkMath from 'remark-math';
import rehypeExternalLinks from 'rehype-external-links';
import { rehypeAutolink } from './plugins/rehype-autolink';
import { remarkReadingTime } from './plugins/remark-reading-time';
import starlightLinksValidator from 'starlight-links-validator';

// https://docs.netlify.com/configure-builds/environment-variables/#read-only-variables
const site =
  process.env.CONTEXT !== 'production' && process.env.DEPLOY_PRIME_URL
    ? process.env.DEPLOY_PRIME_URL
    : 'https://18-months.netlify.app';

// https://astro.build/config
export default defineConfig({
  site,
  markdown: {
    remarkPlugins: [remarkMath, remarkReadingTime],
    rehypePlugins: [
      rehypeSlug,
      ...rehypeAutolink(),
      rehypeKatex,
      [
        rehypeExternalLinks,
        {
          target: '_blank',
          rel: ['nofollow', 'noopener'],
        },
      ],
    ],
  },
  integrations: [
    starlight({
      title: '18 Months',
      logo: {
        src: '/src/assets/logo.png',
        replacesTitle: true,
      },
      customCss: [
        './src/styles/globals.css',
        './src/styles/headings.css',
        'katex/dist/katex.min.css',
      ],
      social: {
        github: 'https://github.com/MedPocket/18-months',
      },
      editLink: {
        baseUrl: 'https://github.com/MedPocket/18-months/tree/main',
      },
      components: {
        Head: './src/components/Head.astro',
        Footer: './src/components/Footer.astro',
        PageTitle: './src/components/PageTitle.astro',
      },
      sidebar: [
        {
          label: 'Trang chủ',
          link: '/',
        },
        {
          label: 'Sản Khoa',
          collapsed: true,
          autogenerate: {
            directory: 'san-khoa',
          },
        },
        {
          label: 'Phụ Khoa',
          collapsed: true,
          autogenerate: {
            directory: 'phu-khoa',
          },
        },
      ],
      pagination: true,
      lastUpdated: true,
      plugins: [starlightLinksValidator()],
    }),
  ],
});
