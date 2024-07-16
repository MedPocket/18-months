import starlight from '@astrojs/starlight'
import { defineConfig } from 'astro/config'
import starlightThemeRapide from 'starlight-theme-rapide'
import rehypeKatex from 'rehype-katex'
import rehypeSlug from 'rehype-slug'
import remarkMath from 'remark-math'
import rehypeExternalLinks from 'rehype-external-links'
import { rehypeAutolink } from './plugins/rehype-autolink'

// https://astro.build/config
export default defineConfig({
  site: process.env.CI
    ? 'https://medpocket.github.io'
    : 'http://localhost:4321',
  base: '/18-months',
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [
      rehypeSlug,
      ...rehypeAutolink(),
      rehypeKatex,
      [
        rehypeExternalLinks,
        {
          target: '_blank',
          rel: ['nofollow', 'noopener'],
          content: { type: 'text', value: ' ↗' },
        },
      ],
    ],
  },
  experimental: {
    contentCollectionCache: true,
  },
  integrations: [
    starlight({
      title: '18 Months',
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
      plugins: [starlightThemeRapide()],
      pagination: true,
      lastUpdated: true,
    }),
  ],
})
