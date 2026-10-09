import { readFileSync } from 'node:fs';
import { defineConfig } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';

const { version } = JSON.parse(readFileSync(new URL('./package.json', import.meta.url), 'utf-8'));

const description =
  'Antonio Jaramillo Fanta — Frontend web developer specialized in Vue.js, React and modern web technologies.';

export default defineConfig({
  plugins: [pluginVue()],
  source: {
    define: {
      __APP_VERSION__: JSON.stringify(version),
    },
  },
  html: {
    template: './index.html',
    title: 'Antonio Jaramillo - Portfolio',
    favicon: './public/favicon.png',
    meta: {
      description,
      'theme-color': '#020917',
    },
    templateParameters: {
      description,
    },
  },
});
