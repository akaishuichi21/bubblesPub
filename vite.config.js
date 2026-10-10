import { defineConfig } from 'vite';

export default defineConfig({
  // Relative URLs work under any GitHub Pages repository name.
  base: './',
  build: { outDir: 'docs' },
});
