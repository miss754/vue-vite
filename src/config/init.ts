/*
 * @Author: xgh1055219 1119391382@qq.com
 * @Date: 2022-08-20 19:02:37
 * @LastEditors: xgh1055219 1119391382@qq.com
 * @LastEditTime: 2022-08-20 20:42:51
 * @FilePath: \typescriptd:\CodeHub\vue-vite\src\config\init.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import app from './app';
import tools from '@/utils/Tools';

type IGlobalValsKey = 'app' | 'language' | 'tools' | 'ajax';
type IGlobalVals = {
  [key in IGlobalValsKey]?: any
}

const iGloablVars: IGlobalVals = {
  app, // 全局应用对象，包含一些全局数据和方法
  tools, // 全局工具库对象，包含一些公用方法
}
Object.keys(iGloablVars).forEach(stKey => {
  (window as any)[stKey as IGlobalValsKey] = iGloablVars[stKey as IGlobalValsKey]
})

export const initApp = async () => {

}
