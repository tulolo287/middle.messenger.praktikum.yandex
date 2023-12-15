import cssnanoPlugin from 'cssnano';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import vitePluginHandlebarsPrecompile from './vite-plugin-handelbars-precompile.ts';

export default defineConfig({
  server: {
    port: 3000,
  },
  root: resolve(__dirname, 'src'),
  build: {
    outDir: resolve(__dirname, 'dist'),
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
      },
    },
  },
  css: {
    postcss: {
      plugins: [cssnanoPlugin],
    },
  },
  plugins: [vitePluginHandlebarsPrecompile()],
});
