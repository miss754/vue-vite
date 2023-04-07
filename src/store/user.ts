/*
 * @Author: xgh1055219 1119391382@qq.com
 * @Date: 2023-01-15 19:29:38
 * @LastEditors: xgh1055219 1119391382@qq.com
 * @LastEditTime: 2023-01-15 20:00:46
 * @FilePath: \typescriptd:\CodeHub\vue-vite\src\store\user.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineStore } from "pinia";
import { ref } from "vue";

// export const useUserStore = defineStore("user", {
//   state: () => {
//     return {
//       userName: "zhangsan",
//     }
//   },
//   actions: {
//     updataName(name: string) {
//       console.log("修改用户名", name);

//       this.userName = name;
//     }
//   }
// });

// 组合式函数
export const useUserStore = defineStore("user", () => {
  const userName = ref("zhangsan")

  function updataName(name: string) {
    console.log("修改用户名", name);
    userName.value = name;
  }

  return {
    userName,
    updataName
  }
});