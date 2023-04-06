# 滑块验证码

<div>
  <el-card>
      <div class="flex">
        <xc-slide-verify ref="slideVerify" @success="success"></xc-slide-verify>
        <br />
        <div class="ml-2">
          <el-button type="primary" size="small" @click="reset">重置</el-button>
        </div>
      </div>
  </el-card>
</div>

<script setup>
import { ElMessage } from 'element-plus'
import { ref } from 'vue'

const slideVerify = ref(null)

const success = () => {
  ElMessage.success('验证成功')
}
const reset = () => {
  slideVerify.value.reset()
}
</script>

### 代码示例

<details>
<summary>展开查看</summary>

  ``` html

   <div>
  <el-card>
      <div class="flex">
        <xc-slide-verify ref="slideVerify" @success="success"></xc-slide-verify>
        <br />
        <div class="ml-2">
          <el-button type="primary" size="small" @click="reset">重置</el-button>
        </div>
      </div>
  </el-card>
</div>


  ```

  ``` js 

    <script setup>
import { ElMessage } from 'element-plus'
import { ref } from 'vue'

const slideVerify = ref(null)

const success = () => {
  ElMessage.success('验证成功')
}
const reset = () => {
  slideVerify.value.reset()
}
</script>

  ```
  <br/>

</details>


## 数据列表API

### props

| 属性 | 说明 | 类型 | 可选择 | 默认值 |
| :-------------  | :-------------  | :------------- | :-------------  | :---------- |
| tip |滑块占位符| string | 可选 | 拖动滑块验证 | 
| slideWidth	 | 滑块条宽度 | number | 可选 | 300 | 
| slideHeight | 滑块条高度 | number |可选 | 30  | 
| bgColor |滑块背景颜色 | string | 可选 | #E9E9E9 | 
| activeBgColor |验证之后的滑块背景颜色 |  string | 可选 | #19be6b | 
| iconColor	 | 图标颜色| string | 可选  | #cbcbcb |
| activeIconColor |验证成功之后图标颜色 | string |  可选| #19be6b |
| iconSize	 | 图标大小 | string | 可选  | 14 |
| fontSize	 | 字体大小| string | 可选  | 14 |
| successIcon	 |成功图标 | string | 可选  | CircleCheck	|


### 事件
| 事件名 | 说明 | 参数 |
| :-------------  | :-------------  | :------------- |
| success	 | 验证成功的回调 | - |
| fail	 |验证失败的回调 | - |


