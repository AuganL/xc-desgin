<!--
 * @Author: croy 
 * @Date: 2023-03-22 16:39:06
 * @LastEditors: croy 
 * @LastEditTime: 2023-03-22 17:16:32
 * @FilePath: /xc-desgin-ui/src/App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts"></script>

<template>
  <router-view></router-view>
</template>

<style lang='scss'>

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
}
@import "./styles/base";
@import "./styles/ui";
.notification-popper-class {
  padding: 0 !important;
}
</style>
