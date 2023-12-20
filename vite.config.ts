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
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import viteCompression from 'vite-plugin-compression'
import viteImagemin from 'vite-plugin-imagemin'

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
    createSvgIconsPlugin({
      // 指定要缓存的文件夹
      iconDirs: [path.resolve(process.cwd(), 'src/assets/svg')],
      // 指定symbolId格式
      symbolId: 'icon-[dir]-[name]',
    }),
    viteCompression(), // 会多出一些.gz文件，如xxx.js.gz
    viteImagemin({
      gifsicle: {
        // gif图片压缩
        optimizationLevel: 3, // 选择1到3之间的优化级别
        interlaced: false, // 隔行扫描gif进行渐进式渲染
        // colors: 2 // 将每个输出GIF中不同颜色的数量减少到num或更少。数字必须介于2和256之间。
      },
      optipng: {
        // png
        optimizationLevel: 7, // 选择0到7之间的优化级别
      },
      mozjpeg: {
        // jpeg
        quality: 20, // 压缩质量，范围从0(最差)到100(最佳)。
      },
      pngquant: {
        // png
        quality: [0.8, 0.9], // Min和max是介于0(最差)到1(最佳)之间的数字，类似于JPEG。达到或超过最高质量所需的最少量的颜色。如果转换导致质量低于最低质量，图像将不会被保存。
        speed: 4, // 压缩速度，1(强力)到11(最快)
      },
      svgo: {
        // svg压缩
        plugins: [
          {
            name: 'removeViewBox',
          },
          {
            name: 'removeEmptyAttrs',
            active: false,
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.join(process.cwd(), './src'),
    },
  },
})
