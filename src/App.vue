<!--
 * @Author: xgh1055219 1119391382@qq.com
 * @Date: 2022-08-19 22:47:06
 * @LastEditors: xgh1055219 1119391382@qq.com
 * @LastEditTime: 2022-08-20 17:33:41
 * @FilePath: \typescriptd:\CodeHub\vue-vite\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from '@/components/HelloWorld.vue'
const theme = {
  color: 'red',
  fontSize: '30px'
}
</script>

<template>
  <span class="iconfont icon-shezhi"></span>
  <span class="iconfont icon-weibiaoti-2-08"></span>
  <span class="iconfont icon-zhankaicaidan"></span>
  <span class="iconfont icon-icon-settings"></span>
  <div>GFGGGGGF挂号费脚后跟经过</div>
  <div>var()函数</div>
  <h1 class="title">Hello World</h1>
  <p class="content">The content color is red</p>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
</template>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

div {
  color: $red;
}

span {
  color: var(--var-cyan-color);
}

.title {
  color: v-bind('theme.color');
}

.content {
  font-size: v-bind('theme.fontSize');
  color: var(--color, #2774c2);
}
</style>
