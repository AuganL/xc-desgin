# 城市选择器
  <xc-choose-city></xc-choose-city>

### 代码示例

<details>
<summary>展开查看</summary>

  ``` html

   <xc-choose-city></xc-choose-city>

  ```
  <br/>

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
