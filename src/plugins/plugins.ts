/*
 * @Author: xgh1055219 1119391382@qq.com
 * @Date: 2022-08-20 23:47:14
 * @LastEditors: xgh1055219 1119391382@qq.com
 * @LastEditTime: 2022-08-21 14:59:00
 * @FilePath: \typescriptd:\CodeHub\vue-vite\src\plugins\plugins.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { App, createVNode, render } from "vue"
import Loading from '@/components/Loading.vue';

export default {
  install: (app: App, options: any) => {
    // 将Loading插件转成虚拟Dom
    const vnode = createVNode(Loading)
    // 转成真实dom 第一个参数是dom  第二个参数是挂载点
    render(vnode, document.body)
    app.config.globalProperties.loading = {
      show: () => vnode.component?.exposed?.show,
      closed: () => vnode.component?.exposed?.closed,
    }
  }
}

export type ILoading = {
  show: () => void;
  closed: () => void;
}

