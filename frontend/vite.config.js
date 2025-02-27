import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  build: {
    outDir: 'public',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) return id;
          // Otherwise, try to bundle the file into a separate chunk
          const chunks = [];
          for (const module of id.match(/[^/]+/g)) {
            const chunk = `chunk_${module}`;
            if (!chunks.includes(chunk)) {
              chunks.push(chunk);
            }
          }
          return chunks;
        },
      },
    },
  },
});