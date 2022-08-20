/*
 * @Author: xgh1055219 1119391382@qq.com
 * @Date: 2022-08-20 20:59:55
 * @LastEditors: xgh1055219 1119391382@qq.com
 * @LastEditTime: 2022-08-20 21:51:13
 * @FilePath: \typescriptd:\CodeHub\vue-vite\src\config\language.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const tbLanguage: Record<string, string | string[]> = {}

export const initLanguage = () => {
  import.meta.globEager('@/locales/*')
}

export const getLocal = () => {
  return 'zh_CN'
}


type ILanguageFiles = {
  [path: string]: {
    default: Record<string, string | string[]>
  }
}

/* 
  {
    'zh_CN.ts': {
      default: {
        'Index': '主页'
      }
    }
  }
 */
export const mergeLanguage = (languageFiles: ILanguageFiles) => {
  const stLocaleLanguage = getLocal()
}

export const language = () => {

}

export const changeLanguage = () => {

}