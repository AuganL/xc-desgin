<!--
 * @Author: croy 
 * @Date: 2023-03-20 11:00:28
 * @LastEditors: croy 
 * @LastEditTime: 2023-03-22 15:17:38
 * @FilePath: /croyxi-ui-vite-ts/src/views/trend.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <el-divider>正常趋势</el-divider>
    <div class="flex">
      <div>
        <xc-trend text="营业额"></xc-trend>
      </div>
      <div>
        <xc-trend text="销售额" type="down"></xc-trend>
      </div>
    </div>
    <br />
    <el-divider>颜色翻转</el-divider>
    <div class="flex">
      <div><xc-trend text="销售额" reverseColor></xc-trend></div>
      <div><xc-trend text="营业额" type="down" reverseColor></xc-trend></div>
    </div>
    <br />
    <el-divider>自定义图标颜色</el-divider>
    <div class="flex">
      <div>
        <xc-trend text="营业额" upIconColor="blue"></xc-trend>
      </div>
      <div>
        <xc-trend text="销售额" type="down" downIconColor="#123456"></xc-trend>
      </div>
    </div>

    <br />
    <el-divider>自定义文字颜色</el-divider>
    <div class="flex">
      <div><xc-trend text="营业额" upTextColor="blue"></xc-trend></div>
      <div><xc-trend text="销售额" type="down" downTextColor="yellow"></xc-trend></div>
    </div>
    <br />
    <el-divider>自定义图标</el-divider>
    <div class="flex">
      <div><xc-trend upIcon="CaretTop">营业额</xc-trend></div>
      <div><xc-trend type="down" downIcon="CaretBottom">销售额</xc-trend></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
  div {
    margin-right: 10px;
  }
}
</style>
