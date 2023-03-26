/*
 * @Author: croy 
 * @Date: 2023-03-23 17:08:59
 * @LastEditors: croy 
 * @LastEditTime: 2023-03-23 17:09:07
 * @FilePath: /xc-desgin-ui/src/xcDesginPackages/slideVerify/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import type { App } from 'vue'
import slideVerify from './src/index.vue'


export default {
  install(app: App) {
    app.component('xc-slide-verify', slideVerify)
  }
}