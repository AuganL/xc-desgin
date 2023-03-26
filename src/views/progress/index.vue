<!--
 * @Author: croy 
 * @Date: 2023-03-22 01:31:42
 * @LastEditors: croy 
 * @LastEditTime: 2023-03-22 16:09:36
 * @FilePath: /croyxi-ui-vite-ts/src/views/progress/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <xc-progress isAnimate :percentage="60"></xc-progress>
    <br />
    <xc-progress  isAnimate status="success" :stroke-width="20" :percentage="60"></xc-progress>
    <br />
    <xc-progress :time="5000" type="circle" isAnimate :percentage="60"></xc-progress>
  </div>
</template>

<script lang='ts' setup>
</script>

<style lang='scss' scoped>
</style>