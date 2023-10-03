import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'

// https://astro.build/config
export default defineConfig({
  site: 'https://18-months.vercel.app',
  integrations: [
    starlight({
      title: '18 Months',
      logo: {
        src: './src/assets/logo.svg',
      },
      social: {
        github: 'https://github.com/MedPocket/18-months',
      },
      sidebar: [
        {
          label: 'Nhật Ký',
          autogenerate: { directory: 'nhat-ky' },
        },
        {
          label: 'Công Việc',
          autogenerate: { directory: 'cong-viec' },
        },
      ],
      pagination: false,
    }),
  ],
})
