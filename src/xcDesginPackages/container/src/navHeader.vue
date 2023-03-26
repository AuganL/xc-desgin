<!--
 * @Author: croy 
 * @Date: 2023-03-19 13:12:00
 * @LastEditors: croy 
 * @LastEditTime: 2023-03-19 13:14:14
 * @FilePath: /croyxi-ui-vite-ts/src/XcroyUI/packages/container/src/navHeader.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="header">
      <span @click="toggle">
        <el-icon-expand v-if="collapse"></el-icon-expand>
        <el-icon-fold v-else></el-icon-fold>
      </span>
    </div>
  </template>
  
  <script lang='ts' setup>
  let props = defineProps<{
    collapse: boolean
  }>()
  let emits = defineEmits(['update:collapse'])
  let toggle = () => {
    // 需要修改父组件的数据
    emits('update:collapse', !props.collapse)
  }
  </script>
  
  <style lang='scss' scoped>
  .header {
    height: 60px;
    padding: 0 20px;
    display: flex;
    align-items: center;
  }
  svg {
    width: 1em;
    height: 1em;
  }
  </style>