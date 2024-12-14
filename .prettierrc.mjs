/** @type {import('prettier').Config} */
export default {
  printWidth: 80,
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  endOfLine: 'lf',
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: ['*.md', '*.mdx'],
      options: {
        printWidth: 80,
      },
    },
  ],
};
