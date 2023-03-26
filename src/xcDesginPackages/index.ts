/*
 * @Author: croy 
 * @Date: 2023-03-19 11:18:50
 * @LastEditors: croy 
 * @LastEditTime: 2023-03-23 17:09:18
 * @FilePath: /croyxi-ui-vite-ts/src/XcroyUI/xcDesginPackages/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { App } from 'vue'
import './styles/base.scss'
import './styles/ui.scss'
import chooseArea from './chooseArea'
import chooseIcon from './chooseIcon'
import trend from './trend'
import notification from './notification'
import list from './list'
// import menu from './menu'
import chooseTime from './chooseTime'
import chooseDate from './chooseDate'
import progress from './progress'
import chooseCity from './chooseCity'
import form from './form'
import modalForm from './modalForm'
import table from './table'
import calendar from './calendar'
import countdown from './countdown'
import dataList from './dataList'
import rotateVerify from './rotateVerify'
import slideVerify from './slideVerify'

const components = [
  chooseArea,
  chooseIcon,
  trend,
  notification,
  list,
  // menu,
  chooseTime,
  chooseDate,
  chooseCity,
  progress,
  form,
  modalForm,
  table,
  calendar,
  countdown,
  dataList,
  rotateVerify,
  slideVerify
]

const xcDesgin = {
  install(app: App) {
    components.map(item => {
      app.use(item)
    })
  }
}

export default xcDesgin;
