/*
 * @Author: xgh1055219 1119391382@qq.com
 * @Date: 2022-08-20 20:59:55
 * @LastEditors: xgh1055219 1119391382@qq.com
 * @LastEditTime: 2022-08-21 18:04:04
 * @FilePath: \typescriptd:\CodeHub\vue-vite\src\config\language.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { get, isArray, isEmpty } from 'lodash'

const stLocalStorageName = 'locale'; // 存储语言环境字段的名称
const tbLanguage: Record<string, string | string[]> = {} // 缓存语言包内容索引表

export const initLanguage = () => {
  const modules = import.meta.globEager('../locales/*') as ILanguageFiles
  console.log(modules);
  mergeLanguage(modules)
}

export const getLocal = () => {
  const stDefaultLocale = 'zh_CN'
  let stLanguage = stDefaultLocale

  // 1.优先从登录者自定义信息中获取语言环境
  stLanguage = get(app.getAppCtl().getLoginUser(), 'cust.locale')
  // 2.其次从本地存储中获取
  stLanguage = stLanguage || tools.LocalStorage.getItem(stLocalStorageName)
  // 3.最终使用默认语言包
  stLanguage = stLanguage || stDefaultLocale
  return stLanguage
}


type ILanguageFiles = {
  [path: string]: {
    default: Record<string, string | string[]>
  }
}

const languagess: ILanguageFiles = {
  zh_CN: {
    default: {

    }
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
  console.log(languageFiles, 'languageFiles')
  const stLocaleLanguage = getLocal()
  for (const path in languageFiles) {
    if (path.indexOf(stLocaleLanguage) === -1) {
      continue
    }

    const { default: iLanguageFileItem } = languageFiles[path]
    for (const key in iLanguageFileItem) {
      tbLanguage[key] = iLanguageFileItem[key]
    }
  }
}

export type IFnLanguage = (key: string, option?: { index?: number, default?: string }) => string
export const language: IFnLanguage = (key: string, option = {}) => {
  const mixValue = tbLanguage[key]

  if (isArray(mixValue)) {
    return mixValue[option.index || 0] || option.default || key
  }

  return mixValue || option.default || key
}

export const changeLanguage = (stLocale: string) => {
  // 如果用户一登陆，那么需要调用API更新用户自定义语言环境信息

  // 在本地缓存最新的语言包
  tools.LocalStorage.setItem(stLocalStorageName, stLocale)
  // 重新加载页面
  document.location.reload()
}