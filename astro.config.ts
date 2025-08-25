import { loadEnv } from "vite";
import { defineConfig, envField } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import preact from "@astrojs/preact";

// import node from "@astrojs/node";

const { SECRET } = loadEnv(
  process.env.NODE_ENV ?? "development",
  process.cwd(),
  "",
);

console.log(SECRET);

export default defineConfig({
  site: "https://astro-tutorial-wheat-nine.vercel.app",
  integrations: [preact()],
  // output: "server",

  vite: {
    plugins: [tailwindcss()] as any[],
  },

  redirects: {
    "/about": "/blog",
  },

  prefetch: {
    defaultStrategy: "viewport",
    prefetchAll: true,
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

  // i18n: {
  //   locales: [
  //     "en",
  //     "ru",
  //     {
  //       path: "fr",
  //       codes: ["fr", "fr-BR", "fr-CA"],
  //     },
  //   ],
  //   defaultLocale: "en",
  //   routing: {
  //     prefixDefaultLocale: false,
  //     redirectToDefaultLocale: true,
  //   },
  //   fallback: {
  //     ru: "en",
  //   },
  //   domains: {
  //     ru: "https://astro-tutorial-wheat-nine.vercel.app",
  //   },
  // },

  // adapter: node({
  //   mode: "standalone",
  // }),
});
