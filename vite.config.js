import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@config': resolve(__dirname, 'config'),
      '@global': resolve(__dirname, 'global')
    }
  },
  server: {
    port: 3000
  }
});
