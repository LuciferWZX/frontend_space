import { defineConfig } from 'vite';
import * as path from 'path';
import react from '@vitejs/plugin-react';
import UnoCSS from 'unocss/vite';
export default defineConfig({
  plugins: [UnoCSS(), react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  // publicDir: 'public',
});
