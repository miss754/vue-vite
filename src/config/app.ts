/*
 * @Author: xgh1055219 1119391382@qq.com
 * @Date: 2022-08-20 18:03:10
 * @LastEditors: xgh1055219 1119391382@qq.com
 * @LastEditTime: 2022-08-20 19:33:10
 * @FilePath: \typescriptd:\CodeHub\vue-vite\src\config\app.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import sysCfg, { ISysCfg, IBModName } from './syscfg';
const app = {
  // 获取系统配置信息
  getConfig<T>(key: keyof ISysCfg): T {
    return sysCfg[key] as unknown as T
  },

  // 判断是否启用指定的业务模块
  checkBmoIsEnable(BModName: string) {
    const bmodNames: Array<IBModName> = this.getConfig<Array<IBModName>>('BModNames');
    return bmodNames.find(item => BModName === item.name)?.enable
  }
}

export type IApp = typeof app
export default app