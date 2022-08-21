<!--
 * @Author: xgh1055219 1119391382@qq.com
 * @Date: 2022-08-21 14:27:44
 * @LastEditors: xgh1055219 1119391382@qq.com
 * @LastEditTime: 2022-08-21 14:55:18
 * @FilePath: \typescriptd:\CodeHub\vue-vite\src\components\Loading.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div v-if="isShow" class="loading">
    <div class="loading-content">Loading...</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';


const isShow = ref(false);

const show = () => {
  isShow.value = true;
  debugger
  setInterval(() => {
    isShow.value = false;
  }, 1000)
}

const closed = () => {
  isShow.value = false;
}
defineExpose({
  isShow,
  show,
  closed,
})

</script>

<style scoped lang="scss">
.loading {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;

  &-content {
    font-size: 30px;
    color: #fff;
  }
}
</style>