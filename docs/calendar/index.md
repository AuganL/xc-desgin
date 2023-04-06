# 日历组件

<p>
该组件通过项目中引入的fullcalendar这个JavaScript第三方库来实现日历组件。	
对于该组件的实现，首先需要创建一个dom元素为funcalendar所创建的日历对象提供一个可挂载的dom节点。
在组件内部通过定义renderCalendar函数来构建日历。实现函数获取用来挂载日历的dom节点对象，判断该节点对象是否存在，如果存在的情况下，通过实例化Calendar日历类，将节点对象传入构造函数。将日历的配置选项对象传入构造函数。
</p>

  <!-- <xc-calendar style="width:800px;height:600px" :events="events" :eventContent="eventContent" @date-click="dateClick"></xc-calendar> -->

<script  setup>
import { ref } from 'vue';

let events = ref([
  {
    title: '购物',
    start: '2021-11-11 10:00:00',
    end: '2021-11-11 12:00:00',
    editable: true
  },
  {
    title: '学习',
    start: '2021-11-15 08:00:00',
    end: '2021-11-15 16:00:00'
  }
])
let dateClick = (info) => {
  let event = {
    start: `${info.dateStr} 12:00:00`,
    end: `${info.dateStr} 13:00:00`,
    title: '吃饭'
  }
  events.value.push(event)
  console.log(info)
}

let eventContent = (arg) => {
  let el = document.createElement('div')
  let timeTextArr = arg.timeText.split(' - ')
  let start = timeTextArr[0].replace('上午', '').replace('下午', '').replace('时', '')
  let end = timeTextArr[1].replace('上午', '').replace('下午', '').replace('时', '')
  el.innerHTML = `
        <img src="src/assets/logo.png" style="width:20px;height:20px;">
         <div>开始时间: ${start}</div>
         <div>结束时间: ${end}</div>
         <div>标题: ${arg.event._def.title}</div>
        `
  return {
    domNodes: [el]
  }
}
</script>

### 代码示例

<details>
<summary>展开查看</summary>

  ``` html

    <xc-calendar 
        style="width:800px;height:600px" 
        :events="events" 
        :eventContent="eventContent" 
        @date-click="dateClick">
    </xc-calendar>


  ```

  ``` js 

   <script  setup>
import { ref } from 'vue';

let events = ref([
  {
    title: '购物',
    start: '2021-11-11 10:00:00',
    end: '2021-11-11 12:00:00',
    editable: true
  },
  {
    title: '学习',
    start: '2021-11-15 08:00:00',
    end: '2021-11-15 16:00:00'
  }
])
let dateClick = (info) => {
  let event = {
    start: `${info.dateStr} 12:00:00`,
    end: `${info.dateStr} 13:00:00`,
    title: '吃饭'
  }
  events.value.push(event)
  console.log(info)
}

let eventContent = (arg) => {
  let el = document.createElement('div')
  let timeTextArr = arg.timeText.split(' - ')
  let start = timeTextArr[0].replace('上午', '').replace('下午', '').replace('时', '')
  let end = timeTextArr[1].replace('上午', '').replace('下午', '').replace('时', '')
  el.innerHTML = `
        <img src="src/assets/logo.png" style="width:20px;height:20px;">
         <div>开始时间: ${start}</div>
         <div>结束时间: ${end}</div>
         <div>标题: ${arg.event._def.title}</div>
        `
  return {
    domNodes: [el]
  }
}
</script>
  ```
  <br/>

</details>


## 日历组件API

### props

| 属性          | 说明               | 类型                           | 可选择 | 默认值       |
| :------------ | :----------------- | :----------------------------- | :----- | :----------- |
| initialView   | 视图模式           | String                         | 必填   | dayGridMonth |
| buttonText    | 按钮文字           | Object                         | 可选   | -            |
| headerToolbar | 头部工具栏         | Object                         | 可选   | -            |
| footerToolbar | 底部工具栏         | Object                         | 可选   | -            |
| events        | 日历事件           | Array as PropType<EventItem[]> | 可选   | （）=> []    |
| eventContent  | 自定义渲染内容方法 | Boolean                        | 可选   |              |


### 事件


| 事件名      | 说明                           | 参数 |
| :---------- | :----------------------------- | :--- |
| date-click  | 点击日历的某一天执行的回调函数 | -    |
| event-click | 点击日历上的时间               | -    |

