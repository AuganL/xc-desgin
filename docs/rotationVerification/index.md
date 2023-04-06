# 旋转验证码

<br/>
<div>
  <el-card>
    <el-button type="primary" @click="visible = true">点击验证</el-button>
    <el-dialog title="安全验证" v-model="visible" width="30%">
      <xc-rotate-verify
        src="https://v3.cn.vuejs.org/logo.png"
        @success="() => ElMessage.success('验证成功')"
        @fail="() => ElMessage.error('验证失败')"
      ></xc-rotate-verify>
    </el-dialog>
  </el-card>
</div>

<script  setup>
import { ElMessage } from 'element-plus'
import { ref } from 'vue'

const visible = ref(false)
</script>



### 代码示例

<details>
<summary>展开查看</summary>

  ``` html

   <div>
  <el-card>
    <el-button type="primary" @click="visible = true">点击验证</el-button>
    <el-dialog title="安全验证" v-model="visible" width="30%">
      <xc-rotate-verify
        src="https://v3.cn.vuejs.org/logo.png"
        @success="() => ElMessage.success('验证成功')"
        @fail="() => ElMessage.error('验证失败')"
      ></xc-rotate-verify>
    </el-dialog>
  </el-card>
</div>


  ```

  ``` js 

    <script  setup>
import { ElMessage } from 'element-plus'
import { ref } from 'vue'

const visible = ref(false)
</script>

  ```
  <br/>

</details>


## 旋转验证码组件API

### props

| 属性 | 说明 | 类型 | 可选择 | 默认值 |
| :-------------  | :-------------  | :------------- | :-------------  | :---------- |
| title |验证组件标题| string | 可选 | 安全验证 | 
| titleSize	 | 标题字体大小 | number | 可选 | 14 | 
| titleColor | 标题颜色 | string | | #999  | 
| desc |描述 | string | 可选 | 拖动滑块使图片角度为正 | 
| descSize |描述文本大小 |  string | 可选 | 16 | 
| descColor	 | 描述文本颜色| number | 可选  | #333 |
| bgColor |背景颜色 | string |  可选| - |
| barWidth	 | 宽度| number | 可选  | 45 |
| barHeight	 | 高度| number | 可选  | 270 |
| barBgColor	 |背景颜色 | string | 可选  | rgba(86,119,252,1)	|
| barColor	 |bar字体颜色 | string | 可选  | #5677fc		|
| angle	 |图片默认旋转角度（取值范围： -330deg < angle < -30deg 或 30deg < angle < 330deg) | number | 可选  | 30	|
| errorRange	 |误差访问 | number | 可选  | 5	|
| src	 |图片路径 | string | 必填  | -	|



### 事件
| 事件名 | 说明 | 参数 |
| :-------------  | :-------------  | :------------- |
| success	 | 验证成功的回调 | - |
| fail	 |验证失败的回调 | - |
