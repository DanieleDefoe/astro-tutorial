import { loadEnv } from "vite";
import { defineConfig, envField } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import preact from "@astrojs/preact";

const { SECRET } = loadEnv(
  process.env.NODE_ENV ?? "development",
  process.cwd(),
  "",
);

console.log(SECRET);

export default defineConfig({
  site: "https://astro-tutorial-wheat-nine.vercel.app",
  integrations: [preact()],
  vite: {
    plugins: [tailwindcss()] as any,
  },
  redirects: {
    "/about": "/blog",
  },
  env: {
    validateSecrets: true,
    schema: {
      SECRET: envField.string({ context: "server", access: "secret" }),
      PUBLIC_API_URL: envField.string({
        context: "client",
        access: "public",
        default: "https://api.example.com",
        url: true,
      }),
    },
  },
});
