/*
 * @Author: croy 
 * @Date: 2023-03-23 22:03:00
 * @LastEditors: croy 
 * @LastEditTime: 2023-03-23 23:23:43
 * @FilePath: /xc-desgin-doc/docs/src/.vuepress/config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const { description } = require('../../package')

module.exports = {
  text: 'XC-Desgin-UI组件库API使用文档',
  description: description,
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    displayAllHeaders:true,
    lastUpdated: false,
    // aside: false,
    // 头部导航
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'Config',
        link: '/config/'
      },
      {
        text: 'StephenX-hertz',
        link: 'https://auganl.github.io',
      },
      {
        text: 'VuePress',
        link: 'https://v1.vuepress.vuejs.org'
      }
    ],
    // 侧边导航
    sidebar:[
      {
        text: '指南',   // 必要的
        link: '/intor/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
      },
      {
        text: '组件',   // 必要的
        link: '/packages/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
      },
      {
        text: '快速开始',  
        link: '/fastStart/',     
        collapsable: false, 
        sidebarDepth: 1,    
      },
      {
        text: 'Icon 图标',  
        link: '/Icon/',     
        collapsable: false, 
        sidebarDepth: 1,    
      },
      {
        text: '省市区选择器',  
        link: '/provincialMunicipalSelector/',     
        collapsable: false, 
        sidebarDepth: 1,    
      },{
        text: '趋势标记',  
        link: '/trendMrker/',     
        collapsable: false, 
        sidebarDepth: 1,    
      },{
        text: '倒计时',  
        link: '/countdown/',     
        collapsable: false, 
        sidebarDepth: 1,    
      },{
        text: '时间选择器',  
        link: '/timeSelector/',     
        collapsable: false, 
        sidebarDepth: 1,    
      },{
        text: '日期选择器',  
        link: '/dateSelector/',     
        collapsable: false, 
        sidebarDepth: 1,    
      },{
        text: '数据列表',  
        link: '/list/',     
        collapsable: false, 
        sidebarDepth: 1,    
      },{
        text: '旋转验证码',  
        link: '/rotationVerification/',     
        collapsable: false, 
        sidebarDepth: 1,    
      },{
        text: '滑块验证码',  
        link: '/sliderVerification/',     
        collapsable: false, 
        sidebarDepth: 1,    
      },{
        text: '通知菜单',  
        link: '/notificationMenu/',     
        collapsable: false, 
        sidebarDepth: 1,    
      },{
        text: '导航菜单',  
        link: '/navigationMenu/',     
        collapsable: false, 
        sidebarDepth: 1,    
      },{
        text: '城市选择器',  
        link: '/citySelector/',     
        collapsable: false, 
        sidebarDepth: 1,    
      },{
        text: '进度条',  
        link: '/progressBar/',     
        collapsable: false, 
        sidebarDepth: 1,    
      },{
        text: '日历组件',  
        link: '/calendar/',     
        collapsable: false, 
        sidebarDepth: 1,    
      },{
        text: '配置化表单',  
        link: '/configuredForm/',     
        collapsable: false, 
        sidebarDepth: 1,    
      },{
        text: '弹出框表单',  
        link: '/popUpForm/',     
        collapsable: false, 
        sidebarDepth: 1,    
      },{
        text: '表格',  
        link: '/table/',     
        collapsable: false, 
        sidebarDepth: 1,    
      },
    ]
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    'demo-container'
  ]
}
