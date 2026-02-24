/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly CONTENT_ISLAND_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
