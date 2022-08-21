/*
 * @Author: xgh1055219 1119391382@qq.com
 * @Date: 2022-08-21 15:47:47
 * @LastEditors: xgh1055219 1119391382@qq.com
 * @LastEditTime: 2022-08-21 19:15:05
 * @FilePath: \typescriptd:\CodeHub\vue-vite\src\controller\AppCtl.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import userApiModel, { IUser } from '@/api/UserApi'
import { changeLanguage, mergeLanguage } from '@/config/language'

let iLoginUser: IUser = {} as IUser

export const initLoginUserInfo = async () => {
  if (tools.Cookie.getItem('token')) {
    iLoginUser = await userApiModel.getUserInfo()
  }
  console.log(iLoginUser, 'iLoginUser')
}

export default {
  getLoginUser(): IUser {
    return iLoginUser
  },
  changeLanguage,
  mergeLanguage,
}