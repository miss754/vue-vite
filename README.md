# vue-vite

### 环境依赖版本
node：v14.15.4
vite：^2.8.0
vue：^3.2.25
typescript：^4.5.4
pinia：^2.0.12
vue-router：^4.0.14
vueuse：^8.2.0
eslint：^8.12.0
prettier：^2.6.1
commitizen：^4.2.4
husky：^7.0.4

一. 初始化项目：按步骤提示初始化
1.使用 vite-cli 命令
# pnpm
pnpm create vite

# npm
npm init vite@latest

# yarn
yarn create vite


2.输入项目名：
? Project name:  vite-vue3-ts-pinia


3.选择一个框架（vue）

? Select a framework: » - Use arrow-keys. Return to submit.
     vanilla // 原生js
 >   vue     // 默认就是 vue3
     react   // react
     preact  // 轻量化react框架
     lit     // 轻量级web组件
     svelte  // svelte框架

4.使用 typescript
? Select a variant: › - Use arrow-keys. Return to submit.
     vue
 ❯   vue-ts

5.启动项目
cd vite-vue3-ts-pinia && pnpm install && pnpm run dev

#### 也可以快速初始化（建议使用）：
# pnpm
pnpm create vite project-name -- --template vue-ts

# npm 6.x
npm init vite@latest project-name --template vue-ts
 
# npm 7+, 需要额外的双横线：
npm init vite@latest project-name -- --template vue-ts
 
# yarn
yarn create vite project-name --template vue-ts


二.代码质量风格的统一

1.集成eslint
1).安装eslint   
yarn add eslint eslint-plugin-vue --save-dev

由于 ESLint 默认使用 Espree 进行语法解析，无法识别 TypeScript 的一些语法，故我们需要安装 @typescript-eslint/parser 替代掉默认的解析器
yarn add @typescript-eslint/parser --save-dev

安装对应的插件 @typescript-eslint/eslint-plugin 它作为 eslint 默认规则的补充，提供了一些额外的适用于 ts 语法的规则。
yarn add @typescript-eslint/eslint-plugin --save-dev

2).创建配置文件 .eslintrc.js 或 .eslintrc.json, 
详情见: .eslintrc.js

3).创建忽略文件：.eslintignore
node_modules/
dist/
index.html

4).命令行式运行：修改 package.json
{
    ...
    "scripts": {
        ...
        "eslint:comment": "使用 ESLint 检查并自动修复 src 目录下所有扩展名为 .js 和 .vue 的文件",
        "eslint": "eslint --ext .js,.vue --ignore-path .gitignore --fix src",
    }
    ...
}

2.集成 prettier
1).安装
yarn add prettier eslint-config-prettier eslint-plugin-prettier --save-dev

2).创建配置文件： prettier.config.js 或 .prettierrc.js
详情见: prettier.config.js

3).修改 .eslintrc.js 配置
module.exports = {
    ...

    extends: [
        'plugin:vue/vue3-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'plugin:prettier/recommended'
    ],

    ...
};

4).命令行式运行：修改 package.json

{
    ...
    "scripts": {
        ...
        "prettier:comment": "自动格式化当前目录下的所有文件",
        "prettier": "prettier --write"
    }
    ...
}

三.集成 pinia
1.安装pinia
yarn add pinia --save

2.新建 src/store 目录并在其下面创建 index.ts，导出 store

 import { createPinia } from 'pinia'

 const store = createPinia()

 export default store

3.在 main.ts 中引入并使用

 import { createApp } from 'vue'
 import App from './App.vue'
 import store from './store'
 ​
 // 创建vue实例
 const app = createApp(App)
 ​
 // 挂载pinia
 app.use(store)
 ​
 // 挂载实例
 app.mount('#app');

4.定义State： 在 src/store 下面创建一个 user.ts
