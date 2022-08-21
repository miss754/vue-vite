/*
 * @Author: xgh1055219 1119391382@qq.com
 * @Date: 2022-08-20 18:58:13
 * @LastEditors: xgh1055219 1119391382@qq.com
 * @LastEditTime: 2022-08-21 16:28:29
 * @FilePath: \typescriptd:\CodeHub\vue-vite\src\global.d.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { IApp } from '@/config/app';
import { ITools } from '@/utils/Tools';
import { IFnLanguage } from './config/language';
import { ILoading } from '@/plugins/plugins'

declare global {
  declare namespace GlobaleType {
    type IKey = string | number;
    type IRecord = Record<IKey, any>;
  }

  const app: IApp
  const tools: ITools
  const language: IFnLanguage

  interface Window {
    app: IApp; // 全局app对象，挂载一些全局数据和方法
    tools: ITools; // 全局工具库对象，包含一些公用方法
    language: IFnLanguage; // 全局语言包 支持函数
    loading: ILoading;
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    app: IApp;
    tools: ITools;
    language: IFnLanguage;
    loading: ILoading;
  }
}

export { }
