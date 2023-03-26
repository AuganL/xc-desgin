# 时间选择器
提供开始时间和结束时间选择联动，开始日期和结束日期联动

## 基础用法

  <div>
    <el-card>
      <br />
      <br />
      <xc-choose-time :startOptions="startOptions" @startChange="startChange" @endChange="endChange"></xc-choose-time>
      <br />
      <br />
      <xc-choose-date :disableToday="false" :startOptions="startOptions" @startChange="dateStartChange" @endChange="dateEndChange"></xc-choose-date>
    </el-card>
  </div>

<script  setup>
let startChange = (val) => {
  console.log('startChange', val)
}
let endChange = (val) => {
  console.log('endChange', val)
}
let dateStartChange = (val) => {
  console.log(val)
}
let dateEndChange = (val) => {
  console.log(val)
}
let startOptions = {
  // size: 'mini',
  // clearable: false
}
</script>

<style lang='scss' scoped>
</style>


### 代码示例

<details>
<summary>展开查看</summary>

  ``` html

   <div>
    <el-card>
      <br />
      <br />
      <xc-choose-time :startOptions="startOptions" @startChange="startChange" @endChange="endChange"></xc-choose-time>
      <br />
      <br />
      <xc-choose-date :disableToday="false" :startOptions="startOptions" @startChange="dateStartChange" @endChange="dateEndChange"></xc-choose-date>
    </el-card>
  </div>


  ```

  ``` js 

    <script  setup>
    let startChange = (val) => {
      console.log('startChange', val)
    }
    let endChange = (val) => {
      console.log('endChange', val)
    }
    let dateStartChange = (val) => {
      console.log(val)
    }
    let dateEndChange = (val) => {
      console.log(val)
    }
    let startOptions = {
      // size: 'mini',
      // clearable: false
    }
    </script>

  ```
  <br/>

</details>

## 时间选择器API

### props

| 属性 | 说明 | 类型 | 可选择 | 默认值 |
| :-------------  | :-------------  | :------------- | :-------------  | :------------- |
| startPlaceholder |开始时间的占位符 | String |  | 请选择开始时间 |
| endPlaceholder |结束时间的占位符 | String |  | 请选择结束时间 |
| startTimeStart |开始时间的开始选择 | String |  | 08:00 |
| startStep |开始时间的步进 | String |  | 00:30 |
| startTimeEnd |开始时间的结束选择 | String |  | 08:00 |
| endStep |结束时间的步进 | String |  | 00:30 |
| endTimeEnd |结束时间的结束选择 | String |  | 24:00 |

### 事件


| 事件名 | 说明 | 参数 |
| :-------------  | :-------------  | :------------- |
| startChange |开始时间变化时触发 | val:string,开始时间 |
| endChange  | 结束时间变化时触发 | val:string, 结束时间 |

## 日期选择器API

### props

| 属性 | 说明 | 类型 | 可选择 | 默认值 |
| :-------------  | :-------------  | :------------- | :-------------  | :------------- |
| startPlaceholder |开始时间的占位符 | String |  | 请选择开始时间 |
| endPlaceholder |结束时间的占位符 | String |  | 请选择结束时间 |
| disableToday |是否禁用选择今天之前的日期 | Boolean |  | true |

### 事件


| 事件名 | 说明 | 参数 |
| :-------------  | :-------------  | :------------- |
| startChange |开始时间变化时触发 | val:string,开始时间 |
| endChange  | 结束时间变化时触发 | val:string, 结束时间 |