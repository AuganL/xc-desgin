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


