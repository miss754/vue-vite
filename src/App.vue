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
  <span class="iconfont icon-settings"></span>
  <div>GFGGGGGF挂号费</div>
  <span>var()函数</span>
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
div{
  color: $red;
}
span {
  color: var(--var-cyan-color);
}
.title{
  color: v-bind('theme.color');
}
.content{
  font-size: v-bind('theme.fontSize');
  color: var(--color, #2774c2);
}
</style>
