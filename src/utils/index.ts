/*
 * @Author: xgh1055219 1119391382@qq.com
 * @Date: 2022-08-20 16:41:41
 * @LastEditors: xgh1055219 1119391382@qq.com
 * @LastEditTime: 2022-08-20 16:42:03
 * @FilePath: \typescriptd:\CodeHub\vue-vite\src\utils\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @description: 
 * @param {*} key
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