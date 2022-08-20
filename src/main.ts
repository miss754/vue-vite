/*
 * @Author: xgh1055219 1119391382@qq.com
 * @Date: 2022-02-27 17:55:54
 * @LastEditors: xgh1055219 1119391382@qq.com
 * @LastEditTime: 2022-08-20 20:48:54
 * @FilePath: \typescriptd:\CodeHub\vue-vite\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import App from './App.vue'
import { initApp } from './config/init';

import '@/assets/styles/index.scss';
import "@/assets/fonts/iconfont.css";
import tools from './utils/Tools';

(async () => {

  initApp()

  const uiApp = createApp(App);

  // 注册全局组件

  // 向跟组件绑定全局变量
  uiApp.config.globalProperties.app = window.app
  uiApp.config.globalProperties.tools = window.tools

  // 初始化状态管理与路由，并渲染跟组件
  uiApp.mount('#app')
})()

