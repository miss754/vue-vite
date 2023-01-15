/*
 * @Author: xgh1055219 1119391382@qq.com
 * @Date: 2023-01-15 18:47:21
 * @LastEditors: xgh1055219 1119391382@qq.com
 * @LastEditTime: 2023-01-15 19:15:44
 * @FilePath: \typescriptd:\CodeHub\vue-vite\.eslintrc.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
  parser: 'vue-eslint-parser',

  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },

  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],

  rules: {
    // override/add rules settings here, such as:
  }
};