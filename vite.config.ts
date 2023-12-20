import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
import stylelintPlugin from 'vite-plugin-stylelint'
import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), eslintPlugin(), stylelintPlugin({ fix: true })],
  resolve: {
    alias: {
      '@': path.join(process.cwd(), './src'),
    },
  },
})
