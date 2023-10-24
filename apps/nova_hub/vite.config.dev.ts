import { defineConfig } from 'vite';
import * as path from 'path';
import react from '@vitejs/plugin-react';
import UnoCSS from 'unocss/vite';
export default defineConfig({
  plugins: [UnoCSS(), react()],
  define: {
    __TOKEN__: JSON.stringify('auth'),
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        },
      },
    },
  },
  // publicDir: 'public',
});
