// @ts-check
import { defineConfig } from 'astro/config';

import preact from '@astrojs/preact';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://3ded-eri.github.io',
  base: 'erikaobamacom',
  integrations: [preact(), tailwind()],
  i18n: {
    locales: ["en", "ja"],
    defaultLocale: "en",
      routing: {
        prefixDefaultLocale: true
    }
  }
});