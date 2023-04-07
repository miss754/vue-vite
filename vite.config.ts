/*
 * @Author: xgh1055219 1119391382@qq.com
 * @Date: 2022-02-27 17:55:54
 * @LastEditors: xgh1055219 1119391382@qq.com
 * @LastEditTime: 2023-04-08 00:23:50
 * @FilePath: \typescriptd:\CodeHub\vue-vite\vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import OptimizationPersist from 'vite-plugin-optimize-persist'
import PkgConfig from 'vite-plugin-package-config'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    PkgConfig(),
    OptimizationPersist(),
  ],
  server: {
    // 服务器主机名，如果允许外部访问，可设置为"0.0.0.0"
    host: '0.0.0.0',
    port: 9999, // 服务器端口号
    open: false, // 是否自动打开浏览器
    // 代理
    proxy: {
      '/api': {
        target: 'http://xxx.xxx.xx',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      'views': resolve(__dirname, 'src/view'),
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
  },
  build: {
    terserOptions: {
      compress: {
        drop_console: true, // 正式环境过滤console.log()
        drop_debugger: true // 正式环境过滤debugger
      }
    }
  },
  css: {
    // 引入全局 scss
    preprocessorOptions: {
      //define global scss variable
      scss: {
        additionalData: '@import "@/assets/styles/variables.scss";',
      },
    },
    // 引入 autoprefixer css样式加前缀
    postcss: {
      plugins: [
        require('autoprefixer')
      ]
    }
  }
})