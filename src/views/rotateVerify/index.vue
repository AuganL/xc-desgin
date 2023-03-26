<!--
 * @Author: croy 
 * @Date: 2023-03-23 17:05:24
 * @LastEditors: croy 
 * @LastEditTime: 2023-03-23 17:05:32
 * @FilePath: /xc-desgin-ui/src/views/rotateVerify/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
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
</template>

<script lang="ts" setup>
import { ElMessage } from 'element-plus'
import { ref } from 'vue'

const visible = ref<boolean>(false)
</script>

<style lang="scss" scoped></style>
