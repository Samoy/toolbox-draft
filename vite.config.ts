import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import {
  themePreprocessorPlugin,
  themePreprocessorHmrPlugin,
} from '@zougt/vite-plugin-theme-preprocessor'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  mode: process.env.NODE_ENV,
  plugins: [
    vue(),
    Components({
      resolvers: [AntDesignVueResolver({ importStyle: 'less' })],
    }),
    // 创建动态主题切换
    themePreprocessorPlugin({
      less: {
        multipleScopeVars: [
          {
            scopeName: 'theme-light',
            path: path.resolve('src/style/light.less'),
          },
          {
            scopeName: 'theme-dark',
            path: path.resolve('src/style/dark.less'),
          },
        ],
      },
    }),
    themePreprocessorHmrPlugin(),
  ],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        additionalData: '@import "./src/style/index.less";',
      },
    },
  },
  optimizeDeps: {
    exclude: ['@zougt/vite-plugin-theme-preprocessor/dist/browser-utils'],
  },
  resolve: {
    alias: {
      '@': './src',
      '@assets': './src/assets',
      '@components': './src/components',
    },
  },
})
