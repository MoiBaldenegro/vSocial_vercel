import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
  output: "server",
  integrations: [tailwind()],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  adapter: vercel(),
  /*
  vite: {
    ssr: {
      external: ["node:crypto", "node:process", "node:buffer"],
      build: {
        minify: false,
      },
    },
  },
  */
});
