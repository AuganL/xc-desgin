<!--
 * @Author: croy 
 * @Date: 2023-03-23 17:08:28
 * @LastEditors: croy 
 * @LastEditTime: 2023-03-23 17:08:43
 * @FilePath: /xc-desgin-ui/src/views/slideVerify/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <el-card>
    <div style="background: #f8f8f8">
      <div class="flex">
        <xc-slide-verify ref="slideVerify" @success="success"></xc-slide-verify>
        <br />
        <div class="ml-2">
          <el-button type="primary" size="small" @click="reset">重置</el-button>
        </div>
      </div>
    </div>
  </el-card>
</template>

<script lang="ts" setup>
import { ElMessage } from 'element-plus'
import { ref } from 'vue'

const slideVerify = ref<any>(null)

const success = () => {
  ElMessage.success('验证成功')
}
const reset = () => {
  slideVerify.value.reset()
}
</script>

<style lang="scss" scoped></style>
