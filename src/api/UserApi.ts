/*
 * @Author: xgh1055219 1119391382@qq.com
 * @Date: 2022-08-21 15:53:51
 * @LastEditors: xgh1055219 1119391382@qq.com
 * @LastEditTime: 2022-08-21 18:22:05
 * @FilePath: \typescriptd:\CodeHub\vue-vite\src\api\UserApi.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export interface IUser {
  id: number;
  name: string;
}

export default {
  getUserInfo(): Promise<IUser> {
    return Promise.resolve({
      id: 1,
      name: 'zs'
    })
  }
}