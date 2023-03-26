import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../views/Layout/index.vue'
import login from '../views/Login.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      component: login
    },
    {
      path: '/',
      component: Layout,
      redirect: '/label1',
      children: [
        {
          path: '/label1',
          component: () => import("../views/componentsViews/icon/index.vue")
        },
        {
          path: "/packages",
          component: () => import("../views/componentsViews/packages/index.vue")
        },
        {
          path: "/fastStart",
          component: () => import("../views/componentsViews/fastStart/index.vue")
        },
        {
          path: "/Icon",
          component: () => import("../views/componentsViews/Icon/index.vue")

        },
        {
          path: "/provincialMunicipalSelector",
          component: () => import("../views/componentsViews/provincialMunicipalSelector/index.vue")

        },
        {
          path: "/trendMrker",
          component: () => import("../views/componentsViews/trendMrker/index.vue")

        },
        {
          path: "/countdown",
          component: () => import("../views/componentsViews/countdown/index.vue")

        },
        {
          path: "/timeSelector",
          component: () => import("../views/componentsViews/timeSelector/index.vue")

        },
        {
          path: "/dateSelector",
          component: () => import("../views/componentsViews/dateSelector/index.vue")

        },
        {
          path: "/list",
          component: () => import("../views/componentsViews/list/index.vue")

        },
        {
          path: "/rotationVerification",
          component: () => import("../views/componentsViews/rotationVerification/index.vue")

        },
        {
          path: "/sliderVerification",
          component: () => import("../views/componentsViews/sliderVerification/index.vue")

        },
        {
          path: "/notificationMenu",
          component: () => import("../views/componentsViews/notificationMenu/index.vue")

        },
        {
          path: "/navigationMenu",
          component: () => import("../views/componentsViews/navigationMenu/index.vue")

        },
        {
          path: "/citySelector",
          component: () => import("../views/componentsViews/citySelector/index.vue")

        },
        {
          path: "/progressBar",
          component: () => import("../views/componentsViews/progressBar/index.vue")

        },
        {
          path: "/calendar",
          component: () => import("../views/componentsViews/calendar/index.vue")

        },
        {
          path: "/configuredForm",
          component: () => import("../views/componentsViews/configuredForm/index.vue")

        },
        {
          path: "/popUpForm",
          component: () => import("../views/componentsViews/popUpForm/index.vue")

        },
        {
          path: "/table",
          component: () => import("../views/componentsViews/table/index.vue")

        },
      ]
    },
  ],
})

router.beforeEach((to, _, next) => {
  document.title = 'By ste.croy 💡 xc-desgin-ui'
  next()
})

export default router
