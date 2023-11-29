import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import tailwind from '@astrojs/tailwind'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'

// https://astro.build/config
export default defineConfig({
  site: process.env.CI
    ? 'https://medpocket.github.io'
    : 'http://localhost:4321',
  base: '/18-months',
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
  integrations: [
    starlight({
      title: '18 Months',
      customCss: ['./src/styles/globals.css', './src/styles/katex.min.css'],
      social: {
        github: 'https://github.com/MedPocket/18-months',
      },
      editLink: {
        baseUrl: 'https://github.com/MedPocket/18-months/tree/main',
      },
      sidebar: [
        {
          label: 'Bệnh Học Sản Khoa',
          autogenerate: {
            directory: 'benh-hoc-san-khoa',
          },
        },
        {
          label: 'Case Study',
          autogenerate: {
            directory: 'case-study',
          },
        },
        {
          label: 'Liên Quan',
          autogenerate: {
            directory: 'lien-quan',
          },
        },
        /* {
          label: 'Nhật Ký',
          autogenerate: {
            directory: 'nhat-ky',
          },
        }, */
      ],
      pagination: false,
    }),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
})
