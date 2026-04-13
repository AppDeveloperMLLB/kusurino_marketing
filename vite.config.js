import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'

export default defineConfig({
  base: '/kusurino_marketing/',
  plugins: [
    vue(),
    vuetify({ autoImport: true }),
  ],
  build: {
    outDir: 'docs',
  },
})
