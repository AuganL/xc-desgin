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
  
  <style lang="less" scoped>
  .flex {
    display: flex;
    div {
      margin-right: 10px;
    }
  }
  </style>
  