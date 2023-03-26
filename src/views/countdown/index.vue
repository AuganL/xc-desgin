<!--
 * @Author: croy 
 * @Date: 2023-03-23 11:31:08
 * @LastEditors: croy 
 * @LastEditTime: 2023-03-23 15:38:21
 * @FilePath: /xc-desgin-ui/src/views/countdown/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <el-card>
    <div class="demo">
      <div class="demo-title">基础用法</div>
      <div class="demo-item">
        <xc-countdown :time="time" @change="handleChange" @end="handleEnd"></xc-countdown>
      </div>
    </div>

    <div class="demo">
      <div class="demo-title">分隔符为中文</div>
      <div class="demo-item">
        <xc-countdown separator="zh" :time="time"></xc-countdown>
      </div>
    </div>

    <div class="demo">
      <div class="demo-title">手动触发</div>
      <div class="demo-item">
        <xc-countdown separator="zh" :time="time" :start="start"></xc-countdown>
        <el-button type="primary" size="small" @click="start = true">start</el-button>
      </div>
    </div>

    <div class="demo">
      <div class="demo-title">自定义样式</div>
      <div class="demo-item">
        <xc-countdown :time="time">
          <template #default="{ timeData }">
            <span class="block">{{ timeData.hours }}</span>
            <span class="colon">:</span>
            <span class="block">{{ timeData.minutes }}</span>
            <span class="colon">:</span>
            <span class="block">{{ timeData.seconds }}</span>
          </template>
        </xc-countdown>
      </div>
    </div>
  </el-card>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

// 3小时毫秒表示
let time = ref<number>(1000 * 60 * 60 * 3)
let start = ref(false)

let handleChange = (val: number) => {
  // console.log(val)
}
let handleEnd = () => {
  // console.log('end')
}
</script>

<style scoped lang="scss">
.demo {
  margin-bottom: 20px;
  &-title {
    padding: 10px;
  }
}
.colon {
  display: inline-block;
  margin: 0 4px;
  color: #2cee0a;
}
.block {
  display: inline-block;
  width: 22px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  background-color: #ee0a24;
}
</style>
