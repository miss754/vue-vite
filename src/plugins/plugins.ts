/*
 * @Author: xgh1055219 1119391382@qq.com
 * @Date: 2022-08-20 23:47:14
 * @LastEditors: xgh1055219 1119391382@qq.com
 * @LastEditTime: 2022-08-25 22:08:44
 * @FilePath: \typescriptd:\CodeHub\vue-vite\src\plugins\plugins.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { App, createApp } from "vue"
import ConfirmComponent from '@/components/ConfirmComponent.vue';

let $vm

export interface IOptions {
  title: string;
  content: string,
  confirmBtnText: string,
  cancelBtnText: string,
  confirmBtnColor: string,
  showConfirmBtn: boolean,
  showCancelBtn: boolean,
  clickMaskToClose: boolean,
}

const defaultsOptions = {
  title: '提示',
  content: '内容',
  confirmBtnText: '确定',
  cancelBtnText: '取消',
  confirmBtnColor: '#409EFF',
  showConfirmBtn: true,
  showCancelBtn: true,
  clickMaskToClose: false,
}
export class DefaultOptions implements IOptions {
  title = '提示';
  content = '内容';
  confirmBtnText = '确定';
  cancelBtnText = '取消';
  confirmBtnColor = '#409EFF';
  showConfirmBtn = true;
  showCancelBtn = true;
  clickMaskToClose = false;
}

const initInstance = () => {
  const app = createApp(ConfirmComponent)
  const container = document.createElement('div')
  $vm = app.mount(container)
  document.body.appendChild(container)
}

export default {
  install: (app: App, options: any = {}) => {
    console.log(options, 'options');

    // 注入一个全局可用的 $translate() 方法
    app.config.globalProperties.$translate = (key: string) => {
      // 获取 `options` 对象的深层属性
      // 使用 `key` 作为索引
      return key.split('.').reduce((o, i) => {
        if (o) return o[i]
      }, options)
    }
  }
}

export const customPlugins = {
  showConfirm(option: IOptions = new DefaultOptions()) {
    console.log('DefaultOptions', option)
    const vm = createApp(ConfirmComponent, defaultsOptions)
    const container = document.createElement('div')
    document.body.appendChild(container)
    debugger
  }
}

export type ICustomPlugins = typeof customPlugins


