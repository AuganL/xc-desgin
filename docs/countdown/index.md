# 倒计时

<div>
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
</div>

<script setup >
import { onMounted, ref } from 'vue'

// 3小时毫秒表示
let time = ref(1000 * 60 * 60 * 3)
let start = ref(false)

let handleChange = (val) => {
  // console.log(val)
}
let handleEnd = () => {
  // console.log('end')
}
</script>

<style scoped >
.demo {
  margin-bottom: 20px;
  
}
.dome .dome-title {
    padding: 10px;
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
