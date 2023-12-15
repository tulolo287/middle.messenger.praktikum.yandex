import cssnanoPlugin from 'cssnano';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import vitePluginHandlebarsPrecompile from './vite-plugin-handelbars-precompile.ts';

export default defineConfig({
  server: {
    port: 3000,
  },
  root: resolve(__dirname, 'src'),

  css: {
    postcss: {
      plugins: [cssnanoPlugin],
    },
  },
  plugins: [vitePluginHandlebarsPrecompile()],
});
