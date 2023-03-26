/*
 * @Author: croy 
 * @Date: 2023-03-22 17:06:43
 * @LastEditors: croy 
 * @LastEditTime: 2023-03-22 17:28:07
 * @FilePath: /xc-desgin-ui/src/xcDesginPackages/hooks/useCopy/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 复制文本


import { ElMessage } from 'element-plus'
// 复制文本
export const useCopy = (text: string) => {
  // 创建输入框
  let input = document.createElement('input')
  // 给输入框value赋值
  input.value = text
  // 追加到body里面去
  document.body.appendChild(input)
  // 选择输入框的操作
  input.select()
  // 执行复制操作
  document.execCommand('Copy')
  // 删除加入的输入框
  document.body.removeChild(input)
  // 提示用户
  ElMessage.success('复制成功')
}
