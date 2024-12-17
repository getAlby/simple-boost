import { defineConfig } from 'vite';

export default defineConfig({
  root: 'docs', // Set the root directory to `docs`
  server: {
    watch: {
      usePolling: true, // Enable polling for environments that need it
    },
  },
  build: {
    outDir: 'dist', // Define output directory for built files
  },
});
