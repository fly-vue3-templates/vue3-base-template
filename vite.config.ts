import path from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
import stylelintPlugin from 'vite-plugin-stylelint'
import svgLoader from 'vite-svg-loader'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), eslintPlugin(), stylelintPlugin({ fix: true }), svgLoader()],
  resolve: {
    alias: {
      '@': path.join(process.cwd(), './src'),
    },
  },
})
