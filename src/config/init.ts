/*
 * @Author: xgh1055219 1119391382@qq.com
 * @Date: 2022-08-20 19:02:37
 * @LastEditors: xgh1055219 1119391382@qq.com
 * @LastEditTime: 2022-08-25 21:04:16
 * @FilePath: \typescriptd:\CodeHub\vue-vite\src\config\init.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import app from './app';
import tools from '@/utils/Tools';
// import { customPlugins } from '@/plugins/plugins';
import { language, initLanguage } from '@/config/language'
import { initLoginUserInfo } from '@/controller/AppCtl'

type IGlobalValsKey = 'app' | 'language' | 'tools' | 'ajax' | 'customPlugins';
type IGlobalVals = {
  [key in IGlobalValsKey]?: any
}

const iGloablVars: IGlobalVals = {
  app, // 全局应用对象，包含一些全局数据和方法
  tools, // 全局工具库对象，包含一些公用方法
  language, // 全局语言包 支持函数
  // customPlugins,
}
Object.keys(iGloablVars).forEach(stKey => {
  (window as any)[stKey as IGlobalValsKey] = iGloablVars[stKey as IGlobalValsKey]
})

// 初始化系统的实现，导出初始化系统配置信息，供之入口处调用
export const initApp = async () => {

  // 初始化基础业务相关的信息
  await initLoginUserInfo()

  // 加载基础平台的语言包
  // import.meta.glob 不支持以变量的方式加载数据
  // 因此只有全部加载，然后再过滤不需要的语言包内容
  initLanguage()

  // 初始化各业务模块
  const iAllEntry = import.meta.globEager('../bmode/*/entry.ts')
  for (const path in iAllEntry) {
    const iEntryFile = iAllEntry[path]
    iEntryFile && iEntryFile.entryInit && await iEntryFile.entryInit()
  }
}
