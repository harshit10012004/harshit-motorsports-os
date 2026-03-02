/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
      extend: {
        colors: {
          ultramarine: { 50: '#EEF2FF', 400: '#93C5FD', 500: '#3B82F6', 600: '#2563EB', 900: '#1E3A8A' },
          teal: { 400: '#2DD4BF', 500: '#14B8A6', 600: '#0D9488', 900: '#0F472A' },
          graphite: { 50: '#F8FAFC', 900: '#0F172A', 950: '#020617' }
        },
        backdropBlur: { xs: '2px' },
        boxShadow: { glass: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', glow: '0 0 20px rgba(20, 184, 166, 0.3)' },
        animation: { 'scanline': 'scanline 3s infinite linear', 'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite' },
        keyframes: {
          scanline: { '0%': { transform: 'translateY(-100%)' }, '100%': { transform: 'translateY(100vh)' } }
        }
      }
    },
    plugins: []
  }
  