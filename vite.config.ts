import path from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
import stylelintPlugin from 'vite-plugin-stylelint'
import svgLoader from 'vite-svg-loader'
import { visualizer } from 'rollup-plugin-visualizer'
import ViteRestart from 'vite-plugin-restart'
import Components from 'unplugin-vue-components/vite'
// ElementPlusResolver,
// AntDesignVueResolver,
// VantResolver,
// HeadlessUiResolver,
// ElementUiResolver
import {} from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eslintPlugin(),
    stylelintPlugin({ fix: true }),
    svgLoader(),
    // 打包分析插件
    visualizer(),
    ViteRestart({
      // 通过这个插件，在修改vite.config.js文件则不需要重新运行也生效配置
      restart: ['vite.config.js'],
    }),
    // 原先引用组件的时候需要在目标文件里面import相关组件，现在就可以直接使用无需在目标文件import了
    Components({
      dirs: ['src/components'], // 目标文件夹
      extensions: ['vue'], // 文件类型
      dts: 'src/components.d.ts', // 输出文件，里面都是一些import的组件键值对
      // ui库解析器，也可以自定义，需要安装相关UI库
      resolvers: [
        // VantResolver(),
        // ElementPlusResolver(),
        // AntDesignVueResolver(),
        // HeadlessUiResolver(),
        // ElementUiResolver()
      ],
    }),
    AutoImport({
      imports: ['vue'],
      dts: 'src/auto-import.d.ts',
    }),
  ],
  resolve: {
    alias: {
      '@': path.join(process.cwd(), './src'),
    },
  },
})
