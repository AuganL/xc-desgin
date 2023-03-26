<!--
 * @Author: croy 
 * @Date: 2023-03-20 10:45:05
 * @LastEditors: croy 
 * @LastEditTime: 2023-03-22 16:09:50
 * @FilePath: /croyxi-ui-vite-ts/src/views/icon.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <xc-choose-area @change="change"></xc-choose-area>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const change = (e:any) =>{
  console.log(e);
}
</script>

<style lang="scss" scoped></style>
