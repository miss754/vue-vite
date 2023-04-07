/*
 * @Author: xgh1055219 1119391382@qq.com
 * @Date: 2022-08-25 21:12:02
 * @LastEditors: xgh1055219 1119391382@qq.com
 * @LastEditTime: 2022-08-26 23:44:12
 * @FilePath: \typescriptd:\CodeHub\vue-vite\src\utils\useMountComponent.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Component, createApp } from "vue";
import ConfirmComponent from '@/components/ConfirmComponent.vue';

export function useMountComponent(rootComponent: Component) {
  const app = createApp(rootComponent)
  const container = document.createElement('div')
  document.body.appendChild(container)
  return {
    instance: app.mount(container),
    unmount() {
      app.unmount()
      document.body.removeChild(container)
    }
  }
}

type IType = 'default' | 'warning' | 'danger' | 'success'

export interface IOptions {
  title: string;
  content: string,
  confirmBtnText: string,
  cancelBtnText: string,
  type: IType,
  showConfirmBtn: boolean,
  showCancelBtn: boolean,
  confirmCallBack: () => Promise<any>;
  cancelCallBack: () => Promise<any>
}


export function confirmDialog(options: IOptions) {
  const mountNode = document.createElement('div')
  document.body.appendChild(mountNode)

  const vm = createApp(ConfirmComponent, {
    ...options,
    unmount() {
      setTimeout(() => {
        vm.unmount();
        document.body.removeChild(mountNode)
      })
    }
  })
  vm.mount(mountNode)
}