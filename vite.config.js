import { fileURLToPath, URL } from 'node:url'


import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VitePluginBrowserSync from 'vite-plugin-browser-sync'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Mini-project-converter/',
  plugins: [
    vue(),
    VitePluginBrowserSync()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
