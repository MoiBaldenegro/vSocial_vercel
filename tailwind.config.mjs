/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./src/components/**/*.{astro,js}", // Incluye todas las rutas en components
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-linear":
          "linear-gradient(191deg, rgba(136,58,234,1) 0%, rgba(182,138,237,1) 100%)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
