/*
 * @Author: xgh1055219 1119391382@qq.com
 * @Date: 2022-08-21 18:39:28
 * @LastEditors: xgh1055219 1119391382@qq.com
 * @LastEditTime: 2022-08-21 19:26:19
 * @FilePath: \typescriptd:\CodeHub\vue-vite\src\bmode\blog\entry.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import syscfg from "./config/syscfg"
const stModuleName = syscfg.module

export const entryInit = async () => {
  // 如果未开启当前业务i模块，终止初始化处理
  if (!app.checkBmoIsEnable(stModuleName)) {

  }

  // 初始化当前模块的语言包
  app.getAppCtl().mergeLanguage(import.meta.globEager('./locales/*'))
  console.log(language('Blog'), 'Blog');
  debugger


  //  初始化当前模块的配置信息

  // 初始化当前模块的状态管理信息

  // 初始化当前模块的路由信息
}

export default {}