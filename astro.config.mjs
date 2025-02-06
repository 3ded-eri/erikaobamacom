// @ts-check
import { defineConfig } from 'astro/config';

import preact from '@astrojs/preact';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://erikaobama.com',
  integrations: [preact(), tailwind()],
  i18n: {
    locales: ["en", "ja"],
    defaultLocale: "en",
      routing: {
        prefixDefaultLocale: true
    }
  }
});