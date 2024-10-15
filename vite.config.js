import path from 'path';
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  base: '/vuepagestutorial.io/',
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      /*'@': fileURLToPath(new URL('./src', import.meta.url))*/
      '@': path.resolve(__dirname, 'src'),
    }
  }
})
