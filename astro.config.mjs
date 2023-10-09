import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'

// https://astro.build/config
export default defineConfig({
  site: process.env.CI
    ? 'https://medpocket.github.io'
    : 'http://localhost:4321',
  base: '/18-months',
  integrations: [
    starlight({
      title: '18 Months',
      social: {
        github: 'https://github.com/MedPocket/18-months',
      },
      sidebar: [
        {
          label: 'Nhật Ký',
          autogenerate: { directory: 'nhat-ky' },
        },
        {
          label: 'Ghi Chú',
          autogenerate: { directory: 'ghi-chu' },
        },
      ],
      pagination: false,
    }),
  ],
})
