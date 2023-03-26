/*
 * @Author: croy 
 * @Date: 2023-03-22 16:39:06
 * @LastEditors: croy 
 * @LastEditTime: 2023-03-23 11:30:36
 * @FilePath: /xc-desgin-ui/src/main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
// import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import * as Icons from '@element-plus/icons-vue'
// import { toLine } from './utils'
import xcDesgin from './xcDesginPackages'
import './mock'
const app = createApp(App)


for (let i in Icons) {
  // 注册全部组件
  app.component(`ElIcon${i}`, (Icons as any)[i])
}

app.use(router).use(xcDesgin)
// app.use(createPinia())
app.use(ElementPlus, {
  locale: zhCn,
})
app.mount('#app')
