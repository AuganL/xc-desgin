# 进度条
可动态加载的进度条，支持自定义。
<br/>
  <div>
    <el-card>
      <xc-progress isAnimate :percentage="60"></xc-progress>
      <br />
      <xc-progress isAnimate status="success" :stroke-width="20" :percentage="60"></xc-progress>
      <br />
      <xc-progress :time="5000" type="circle" isAnimate :percentage="60"></xc-progress>
    </el-card>
  </div>



### 代码示例

<details>
<summary>展开查看</summary>

  ``` html

     <div>
    <el-card>
      <xc-progress isAnimate :percentage="60"></xc-progress>
      <br />
      <xc-progress isAnimate status="success" :stroke-width="20" :percentage="60"></xc-progress>
      <br />
      <xc-progress :time="5000" type="circle" isAnimate :percentage="60"></xc-progress>
    </el-card>
  </div>

  ```
  <br/>

</details>

## API

### props

| 属性 | 说明 | 类型 | 可选择 | 默认值 |
| :-------------  | :-------------  | :------------- | :-------------  | :------------- |
| percentage |进度条进度 | Number | 必填 | - |
| isAnimate |是否有动画效果 | Boolean |  | false |
| time |动画时长(毫秒) | Number |  | 3000 |

继承`element-plus` `progress`组件的所有属性