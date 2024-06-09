import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import { rehypeHeadingIds } from '@astrojs/markdown-remark'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import rehypeExternalLinks from 'rehype-external-links'

// https://astro.build/config
export default defineConfig({
  site: process.env.CI
    ? 'https://medpocket.github.io'
    : 'http://localhost:4321',
  base: '/18-months',
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [
      rehypeHeadingIds,
      [rehypeAutolinkHeadings, { behavior: 'append' }],
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
        'katex/dist/katex.min.css',
        './src/styles/headings.css',
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
      pagination: true,
      lastUpdated: true,
    }),
  ],
})
