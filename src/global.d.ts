/*
 * @Author: xgh1055219 1119391382@qq.com
 * @Date: 2022-08-20 18:58:13
 * @LastEditors: xgh1055219 1119391382@qq.com
 * @LastEditTime: 2022-08-20 20:49:25
 * @FilePath: \typescriptd:\CodeHub\vue-vite\src\global.d.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { IApp } from '@/config/app';
import { ITools } from '@/utils/Tools';

declare global {
  declare namespace GlobaleType {
    type IKey = string | number;
    type IRecord = Record<IKey, any>;
  }

  const app: IApp
  const tools: ITools

  interface Window {
    app: IApp; // 全局app对象，挂载一些全局数据和方法
    tools: ITools; // 全局工具库对象，包含一些公用方法
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    app: IApp;
    tools: ITools
  }
}

export { }