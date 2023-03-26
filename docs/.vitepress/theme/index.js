// .vitepress/theme/index.js

import DefaultTheme from "vitepress/theme";
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import xcDesgin from 'xc-desgin'
import "element-plus/dist/index.css";
import 'xc-desgin/index.css'

export default {
  ...DefaultTheme,
  enhanceApp: async ({ app, router, siteData, isServer }) => {
    app.use(ElementPlus)
    app.use(xcDesgin)
    // app.use(ElementPlusIconsVue)
  },
  ssr: {
    noExternal: ['element-plus', '@element-plus/icons-vue','xc-desgin']
  }
};

