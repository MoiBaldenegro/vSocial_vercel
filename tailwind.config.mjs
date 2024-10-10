/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./src/components/**/*.{astro,js}", // Incluye todas las rutas en components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: "class",
};
