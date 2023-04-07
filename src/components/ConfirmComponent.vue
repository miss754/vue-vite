<!--
 * @Author: xgh1055219 1119391382@qq.com
 * @Date: 2022-08-21 14:27:44
 * @LastEditors: xgh1055219 1119391382@qq.com
 * @LastEditTime: 2022-08-27 20:26:05
 * @FilePath: \typescriptd:\CodeHub\vue-vite\src\components\Loading.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div v-if="isShow" class="loading">
    <div class="loading-content">
      <div class="title">{{ title }}</div>
      <div class="content">
        <span class="iconfont icon-zhankaicaidan"></span>
        {{ content }}
      </div>
      <div class="footer">
        <van-button type="primary">主要按钮</van-button>
        <van-button type="default">默认按钮</van-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// const emit = defineEmits(['confirmCallBack', 'cancelCallBack'])
const props = defineProps({
  title: {
    type: String,
    default: '标题'
  },
  content: {
    type: String,
    default: '你确定要删除吗？'
  },
  confirmBtnText: {
    type: String,
    default: '确定'
  },
  cancelBtnText: {
    type: String,
    default: '取消'
  },
  type: {
    type: String,
    default: 'waring'
  },
  showConfirmBtn: {
    type: Boolean,
    default: true
  },
  showCancelBtn: {
    type: Boolean,
    default: true
  },
})

console.log(props, 'props')

const isShow = ref(true);

console.log('xxxxxxxxxx')


</script>

<style scoped lang="scss">
.loading {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

  &-content {
    width: 400px;
    height: 200px;
    background-color: #fff;
    border-radius: 2px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

    .title {
      padding: 12px 28px 10px 28px;
      font-size: 18px;
      line-height: 25px;
      color: #030303;
      border-bottom: 1px solid #96979b;
    }

    .content {
      font-size: 16px;
      line-height: 21px;
      color: #5e5f64;
      padding: 16px 24px 24px 24px;

    }
  }
}
</style>