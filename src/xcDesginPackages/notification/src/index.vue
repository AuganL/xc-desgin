<!--
 * @Author: croy 
 * @Date: 2023-03-20 11:04:05
 * @LastEditors: croy 
 * @LastEditTime: 2023-03-22 14:25:00
 * @FilePath: /croyxi-ui-vite-ts/src/XcroyUI/packages/notification/src/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <el-popover popper-class="notification-popper-class" placement="bottom" :width="300" trigger="click">
    <template #default>
      <slot></slot>
    </template>
    <template #reference>
      <el-badge style="cursor: pointer;" :value="value" :max="max" :is-dot="isDot">
        <component :is="`el-icon-${toLine(icon)}`"></component>
      </el-badge>
    </template>
  </el-popover>
</template>

<script lang='ts' setup>
import { toLine } from "../../utils";
let props = defineProps({
  // 显示的图标
  icon: {
    type: String,
    default: 'Bell'
  },
  // 通知数量
  value: {
    type: [String, Number],
    default: ''
  },
  // 最大值
  max: {
    type: Number
  },
  // 是否显示小圆点
  isDot: {
    type: Boolean,
    default: false
  },
})
</script>

<style lang='scss' scoped>
svg {
  width: 1.5em;
  height: 1.5em;
}
</style>