# 倒计时
<br/>
<p>
  该组件实现了对用户传入一个时长然后继续倒计时计数的组件，组件默认拥有自己的结构样式，在不存在插槽注入的情况下默认渲染。当插槽注入的时候，组件内部会通过ref创建一个响应式对象defaultSlots来存放被注入的插槽。
</p>
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



### 代码示例

<details>
<summary>展开查看</summary>

  ``` html

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


  ```
  <br/>

  ``` js

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

  ```

  ``` css

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

  ```

</details>

## 倒计时组件API

### props

| 属性 | 说明 | 类型 | 可选择 | 默认值 |
| :-------------  | :-------------  | :------------- | :-------------  | :---------- |
| time |倒计时时长 （毫秒） | number | 必填 | 0 | 
| separator	 | - | string | 可选 | colon | 
| separatorSize |字体大小 | number 或 string | 可选 | 16 | 
| separatorColor |字体颜色 | string | 可选 | #000 | 
| gutter | | number 或 string | 可选 | 0 | 
| showDays |是否展示日期 | Boolean | 可选  | false |
| showHours |是否展示小时 | Boolean |  可选| true |
| showMinutes	 |是否显示分钟 | Boolean |  可选| true |
| showSeconds |是否显示秒 | Boolean | 可选 | true |
| start |是否自动开始 | Boolean | 可选 | true |

### 事件


| 事件名 | 说明 | 参数 |
| :-------------  | :-------------  | :------------- |
| startChange |开始时间变化时触发 | val:string,开始时间 |
| endChange  | 结束时间变化时触发 | val:string, 结束时间 |# 日期选择器
