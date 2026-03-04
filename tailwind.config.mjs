/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ultramarine: '#00A4EF',
        'teal-blue': '#30D5C8',
        'electric-orange': '#FF9500'
      }
    }
  }
}
