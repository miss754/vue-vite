import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
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
    alias:{
      '@': resolve(__dirname, 'src'),
      'views': resolve(__dirname, 'src/view'),
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
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
