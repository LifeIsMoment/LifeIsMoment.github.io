import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
 site: 'https://lifeismoment.github.io',
 output: 'static',
 build: { format: 'file' },
 integrations: [mdx()],
});
