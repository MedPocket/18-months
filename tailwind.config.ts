import type { Config } from 'tailwindcss'
import starlightPlugin from '@astrojs/starlight-tailwind'
import colors from 'tailwindcss/colors'

const config: Config = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // used for links and current item highlighting
        accent: colors.green,
        // used for background colors and borders
        gray: colors.zinc,
      },
    },
  },
  plugins: [starlightPlugin()],
}

export default config
