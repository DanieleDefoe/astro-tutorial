/// <reference path="../.astro/types.d.ts" />

declare namespace astroHTML.JSX {
  interface HTMLAttributes {
    "data-test-id"?: string;
  }
}

interface ImportMetaEnv {
  readonly PUBLIC_API_URL: string;
  readonly SECRET: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
