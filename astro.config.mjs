import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  site: process.env.CI
    ? 'https://medpocket.github.io'
    : 'http://localhost:4321',
  base: '/18-months',
  integrations: [
    starlight({
      title: '18 Months',
      customCss: ['./src/styles/global.css'],
      social: {
        github: 'https://github.com/MedPocket/18-months',
      },
      sidebar: [
        {
          label: 'Ghi Chú',
          autogenerate: {
            directory: 'notes',
          },
        },
        {
          label: 'Nhật Ký',
          autogenerate: {
            directory: 'diary',
          },
        },
      ],
      pagination: false,
    }),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
})
