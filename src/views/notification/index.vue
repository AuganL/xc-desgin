<!--
 * @Author: croy 
 * @Date: 2023-03-20 11:05:48
 * @LastEditors: croy 
 * @LastEditTime: 2023-03-22 17:35:15
 * @FilePath: /croyxi-ui-vite-ts/src/views/notification/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <xc-notification icon="ChatRound" :value="50">
      <template #default>
        <xc-list @clickItem="clickItem" @clickAction="clickAction" :list="list" :actions="actions"></xc-list>
      </template>
    </xc-notification>
    <br />
    <br />
    <xc-notification :value="50" :max="30">
      <template #default>
        <xc-list @clickItem="clickItem" @clickAction="clickAction" :list="list" :actions="actions"></xc-list>
      </template>
    </xc-notification>
    <br />
    <br />
    <xc-notification :value="50" isDot>
      <template #default>
        <xc-list @clickItem="clickItem" @clickAction="clickAction" :list="list" :actions="actions"></xc-list>
      </template>
    </xc-notification>
    <br />
    <br />
    <xc-notification :value="50">
      <template #default>
        <xc-list @clickItem="clickItem" @clickAction="clickAction" :list="list" :actions="actions"></xc-list>
      </template>
    </xc-notification>
  </div>
</template>

<script lang='ts' setup>

import { list, actions } from './data'

let clickItem = (val: any) => {
  console.log(val)
}
let clickAction = (val: any) => {
  console.log(val)
}
</script>

<style lang='scss' scoped>
</style>