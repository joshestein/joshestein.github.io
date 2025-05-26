// @ts-check
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://joshestein.github.io",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [mdx()],
});
