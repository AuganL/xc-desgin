/*
 * @Author: croy 
 * @Date: 2023-03-19 12:45:22
 * @LastEditors: croy 
 * @LastEditTime: 2023-03-23 17:09:34
 * @FilePath: /croyxi-ui-vite-ts/src/router/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Container from '../xcDesginPackages/container/src/index.vue'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Container,
    children: [
      {
        path: '/',
        component: Home
      },
      {
        path: '/chooseIcon',
        component: () => import('../views/icon.vue')
      },
      {
        path: '/chooseArea',
        component: () => import('../views/chooseArea.vue')
      },
      {
        path: '/trend',
        component: () => import('../views/trend.vue')
      },
      {
        path: '/countdown',
        component: () => import('../views/countdown/index.vue')
      }, {
        path: '/dataList',
        component: () => import('../views/dataList/index.vue')
      },
      {
        path: '/notification',
        component: () => import('../views/notification/index.vue')
      }, {
        path: '/rotateVerify',
        component: () => import('../views/rotateVerify/index.vue')
      },
      {
        path: '/slideVerify',
        component: () => import('../views/slideVerify/index.vue')
      },
      {
        path: '/menu',
        component: () => import('../views/menu/index.vue')
      },
      {
        path: '/chooseTime',
        component: () => import('../views/chooseTime/index.vue')
      },
      {
        path: '/progress',
        component: () => import('../views/progress/index.vue')
      },
      {
        path: '/chooseCity',
        component: () => import('../views/chooseCity/index.vue')
      },
      {
        path: '/form',
        component: () => import('../views/form/index.vue')
      },
      {
        path: '/modalForm',
        component: () => import('../views/modalForm/index.vue')
      },
      {
        path: '/table',
        component: () => import('../views/table/index.vue')
      },
      {
        path: '/calendar',
        component: () => import('../views/calendar/index.vue')
      }
    ]
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router