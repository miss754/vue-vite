/*
 * @Author: xgh1055219 1119391382@qq.com
 * @Date: 2022-08-20 18:04:18
 * @LastEditors: xgh1055219 1119391382@qq.com
 * @LastEditTime: 2022-08-20 18:28:43
 * @FilePath: \typescriptd:\CodeHub\vue-vite\src\config\syscfg.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export interface IBModName {
  name: string; // 模块名称
  enable: boolean; // 是否启用
}
export interface ISysCfg {
  baseUrl: string; // 主机地址 和 监听端口
  BModNames: IBModName[]; // 业务模块列表
}

const sysCfg: ISysCfg = {
  baseUrl: 'http://192.168.1.101:8080',
  BModNames: [
    {
      name: 'blog',
      enable: false,
    }
  ]
}

export default sysCfg;