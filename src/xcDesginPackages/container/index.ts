/*
 * @Author: croy 
 * @Date: 2023-03-19 13:10:32
 * @LastEditors: croy 
 * @LastEditTime: 2023-03-22 15:08:13
 * @FilePath: /croyxi-ui-vite-ts/src/XcroyUI/packages/container/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { App } from 'vue'
import container from './src/index.vue'

// 让这个组件可以通过use的形式使用
export default {
  install(app: App) {
    app.component('xc-choose-time', container)
  }
}