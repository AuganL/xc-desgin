<!--
 * @Author: croy 
 * @Date: 2023-03-22 01:27:39
 * @LastEditors: croy 
 * @LastEditTime: 2023-03-22 16:08:25
 * @FilePath: /croyxi-ui-vite-ts/src/views/chooseTime/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <xc-choose-time :startOptions="startOptions" @startChange="startChange" @endChange="endChange"></xc-choose-time>
    <br />
    <br />
    <xc-choose-date :disableToday="false" :startOptions="startOptions" @startChange="dateStartChange" @endChange="dateEndChange"></xc-choose-date>
  </div>
</template>

<script lang='ts' setup>

interface endValue {
  startTime: string,
  endTime: string
}
interface dateEndValue {
  startDate: Date,
  endDate: Date
}
let startChange = (val: string) => {
  console.log('startChange', val)
}
let endChange = (val: endValue) => {
  console.log('endChange', val)
}
let dateStartChange = (val: Date) => {
  console.log(val)
}
let dateEndChange = (val: dateEndValue) => {
  console.log(val)
}
let startOptions = {
  // size: 'mini',
  // clearable: false
}
</script>

<style lang='scss' scoped>
</style>