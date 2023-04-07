<!--
 * @Author: xgh1055219 1119391382@qq.com
 * @Date: 2022-02-27 17:55:54
 * @LastEditors: xgh1055219 1119391382@qq.com
 * @LastEditTime: 2023-01-15 18:28:06
 * @FilePath: \typescriptd:\CodeHub\vue-vite\src\components\HelloWorld.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
import { ref } from 'vue'


const { msg, id, title } = defineProps<{
  msg: string,
  id: number,
  title: string,
}>()
const count = ref(0);
/**
 * @description: 
 * @param {*} uid
 * @return {*}
 * @author: xgh1055219
 * @name: 
 */
function getName(uid: string) {
  return uid;
}
const vFocus = {
  mounted(el: HTMLElement, binding: any, vnode: any) {
    alert(1)
    el.focus()
  }
}
</script>

<template>
  <h1>{{ msg }}</h1>

  <h1>{{ id }}</h1>

  <h1>{{ title }}</h1>

  <button type="button" @click="count++">count is: {{ count }}</button>

  <input type="text" placeholder="请输入名称" v-focus>
</template>

<style scoped lang="scss">
a {
  color: $blue;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
