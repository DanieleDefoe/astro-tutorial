import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import preact from "@astrojs/preact";

export default defineConfig({
  site: "https://astro-tutorial-wheat-nine.vercel.app",
  integrations: [preact()],
  vite: {
    plugins: [tailwindcss()],
  },
});
