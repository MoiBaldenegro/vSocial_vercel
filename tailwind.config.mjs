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
      backgroundColor: {
        "custom-bg-dark": "#111827",
      },

      screens: {
        "md-lg-0": "2400px", // Nuevo breakpoint entre 768px y 1024px
        "md-lg-1": "2050px", // Nuevo breakpoint entre 768px y 1024px
        "md-lg-2": "1750px", // Nuevo breakpoint entre 768px y 1024px
        "md-lg-3": "1500px", // Nuevo breakpoint entre 768px y 1024px
        "md-lg-4": "1200px", // Nuevo breakpoint entre 768px y 1024px
        "md-lg-5": "980px", // Nuevo breakpoint entre 768px y 1024px
        "md-lg-6": "700px", // Nuevo breakpoint entre 768px y 1024px
        "md-lg-7": "350px", // Nuevo breakpoint entre 768px y 1024px
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
