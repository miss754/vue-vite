/*
 * @Author: xgh1055219 1119391382@qq.com
 * @Date: 2022-08-20 16:41:41
 * @LastEditors: xgh1055219 1119391382@qq.com
 * @LastEditTime: 2022-08-21 14:27:09
 * @FilePath: \typescriptd:\CodeHub\vue-vite\src\utils\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import cookies from 'js-cookie';

const tools = {
  Router: { // 路由操作命名空间

  },
  Store: { // 状态管理操作命名空间

  },
  LocalStorage: { // 本地存储操作命名空间
    setItem(key: string, value: any): void {
      localStorage.setItem(key, JSON.stringify(value));
    },
    getItem(key: string) {
      const stValue = localStorage.getItem(key);
      try {
        return JSON.parse(stValue as string)
      } catch (e) {
        return stValue
      }
      // return localStorage.getItem(key) || '';
    },
    removeItem(key: string) {
      localStorage.removeItem(key);
    }
  },
  Cookie: { // cookie操作命名空间
    setItem(key: string, value: any) {
      cookies.set(key, value, { expires: 30 })
    },
    getItem(key: string, defaultValue?: any) {
      const stValue = cookies.get(key) || defaultValue;
      try {
        return JSON.parse(stValue)
      } catch (error) {
        return stValue;
      }
    },
    removeItem(key: string) {
      cookies.remove(key);
    }
  },
  Time: { // 日期时间操作命名空间

  },
  Dom: { // Dom元素操作命名空间

  }
}

export type ITools = typeof tools

export default tools;

/**
 * @description: 
 * @param {string} key
 * @param {any} options
 * @return {*}
 * @author: xgh1055219
 * @name: 
 */
function getDeepProps(key: string, options: any) {
  // 获取 options 对象的深层属性
  // 使用 key 作为索引
  key.split('.').reduce((pre, cru) => {
    if (pre) return pre[cru];
  }, options)
}

/**
 * @description: 
 * @param {string} key
 * @return {*}
 * @author: xgh1055219
 * @name: 
 */
function getStorage(key: string): string {
  return localStorage.getItem(key) || '';
}
/**
 * @description: 
 * @param {*} key
 * @param {*} value
 * @return {*}
 * @author: xgh1055219
 * @name: 
 */
function setStorage(key: string, value: string): void {
  localStorage.setItem(key, value);
}
/**
 * @description: 
 * @param {*} name
 * @param {*} value
 * @param {*} days
 * @return {*}
 * @author: xgh1055219
 * @name: 
 */
function setCookie(name: string, value: string, days: number): void {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 3600 * 1000));
  const expires = 'expires=' + date.toUTCString();
  alert(date.toUTCString())
  document.cookie = `${name}=${value};${expires}`;
}

function getCookie(name: string): string {
  const cookies = document.cookie.split('; ');
  const cookieParams: Record<string, string> = {}
  cookies.forEach(item => {
    const key = item.split('=')[0];
    const value = item.split('=')[1];
    cookieParams[key] = value;
  })
  return cookieParams[name] || '';
}

function clearCookie(name: string): void {
  const date = new Date(0)
  document.cookie = `${name}='';expires=${date}`
}