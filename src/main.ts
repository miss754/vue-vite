/*
 * @Author: xgh1055219 1119391382@qq.com
 * @Date: 2022-02-27 17:55:54
 * @LastEditors: xgh1055219 1119391382@qq.com
 * @LastEditTime: 2023-01-15 19:27:58
 * @FilePath: \typescriptd:\CodeHub\vue-vite\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import App from './App.vue'
import { initApp } from './config/init';
import store from './store';

import vant from 'vant'
import 'vant/lib/index.css'

import plugins from './plugins/plugins';

import '@/assets/styles/index.scss';
import "@/assets/fonts/iconfont.css";

(async () => {

  // 初始化系统基础配置信息(保证所有模块的基础数据加载完成后，才创建UI)
  // 全局变量(app)，语言包(language)，axios，tools的定义
  // 异步加载基础模块的配置信息
  //   1).加载系统当前的状态信息

  //   2).加载登录用户的个人信息

  // 异步加载业务模块，并完成基本的初始化

  initApp()

  // 初始化UI
  const uiApp = createApp(App);

  // 使用插件
  uiApp.use(plugins, {
    greeting: {
      hello: 'Bonjour!'
    }
  })

  console.log(uiApp);


  // 注册全局组件

  // 向根组件绑定全局变量
  uiApp.config.globalProperties.app = window.app
  uiApp.config.globalProperties.tools = window.tools
  uiApp.config.globalProperties.language = window.language
  // uiApp.config.globalProperties.customPlugins = window.customPlugins

  // 初始化状态管理与路由，并渲染跟组件
  uiApp.use(store).mount('#app')
})()

