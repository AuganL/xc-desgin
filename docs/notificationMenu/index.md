# 通知菜单


  <div>
    <xc-notification icon="RightBold" :value="50">
      <template #default>
        <xc-list @clickItem="clickItem" @clickAction="clickAction" :list="list" :actions="actions"></xc-list>
      </template>
    </xc-notification>
    <br />
    <br />
    <xc-notification :value="50" :max="30">
      <template #default>
        <xc-list @clickItem="clickItem" @clickAction="clickAction" :list="list" :actions="actions"></xc-list>
      </template>
    </xc-notification>
    <br />
    <br />
    <xc-notification :value="50" isDot>
      <template #default>
        <xc-list @clickItem="clickItem" @clickAction="clickAction" :list="list" :actions="actions"></xc-list>
      </template>
    </xc-notification>
    <br />
    <br />
    <xc-notification :value="50">
      <template #default>
        <xc-list @clickItem="clickItem" @clickAction="clickAction" :list="list" :actions="actions"></xc-list>
      </template>
    </xc-notification>
  </div>

<script  setup>

import { list, actions } from './data.js'

let clickItem = (val) => {
  console.log(val)
}
let clickAction = (val) => {
  console.log(val)
}
</script>

### 代码示例

<details>
<summary>展开查看</summary>

  ``` html

  <div>
    <xc-notification icon="RightBold" :value="50">
      <template #default>
        <xc-list @clickItem="clickItem" @clickAction="clickAction" :list="list" :actions="actions"></xc-list>
      </template>
    </xc-notification>
    <br />
    <br />
    <xc-notification :value="50" :max="30">
      <template #default>
        <xc-list @clickItem="clickItem" @clickAction="clickAction" :list="list" :actions="actions"></xc-list>
      </template>
    </xc-notification>
    <br />
    <br />
    <xc-notification :value="50" isDot>
      <template #default>
        <xc-list @clickItem="clickItem" @clickAction="clickAction" :list="list" :actions="actions"></xc-list>
      </template>
    </xc-notification>
    <br />
    <br />
    <xc-notification :value="50">
      <template #default>
        <xc-list @clickItem="clickItem" @clickAction="clickAction" :list="list" :actions="actions"></xc-list>
      </template>
    </xc-notification>
  </div>


  ```

  ``` js 

    script  setup>

import { list, actions } from './data.js'

let clickItem = (val) => {
  console.log(val)
}
let clickAction = (val) => {
  console.log(val)
}
</script>
  ```
  <br/>

</details>


## 数据列表API

### props

| 属性 | 说明 | 类型 | 可选择 | 默认值 |
| :-------------  | :-------------  | :------------- | :-------------  | :---------- |
| icon |显示的图标| string | 可选 | Bell | 
| value	 | 通知数量 | [String, Number] | 可选 | - | 
| max | 最大值 | number |可选 |  -  | 
| isDot | 是否显示小圆点 | boolean | 可选 | false | 

