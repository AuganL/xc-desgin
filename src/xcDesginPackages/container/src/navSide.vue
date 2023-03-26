<template>
    <xc-menu :collapse="collapse" :data="data" router :defaultActive="$route.path"></xc-menu>
  </template>
  
  <script lang='ts' setup>
  import xcMenu from '../../menu/src/index.vue'
  let props = defineProps<{
    collapse: boolean
  }>()
  
  let data = [
    {
      icon: 'HomeFilled',
      name: '首页',
      index: '/'
    },
    {
      icon: 'Check',
      name: '图标选择器',
      index: '/chooseIcon'
    },
    {
      icon: 'Location',
      name: '省市区选择',
      index: '/chooseArea'
    },
    {
      icon: 'Sort',
      name: '趋势标记',
      index: '/trend'
    },
    {
      icon: 'Sort',
      name: '倒计时组件',
      index: '/countdown'
    },
    {
      icon: 'Timer',
      name: '时间选择',
      index: '/chooseTime'
    },
    {
      icon: 'Timer',
      name: '数据列表',
      index: '/dataList'
    },
    {
      icon: 'Timer',
      name: '旋转验证码组件',
      index: '/rotateVerify'
    },
    {
      icon: 'Timer',
      name: '滑块验证码组件',
      index: '/slideVerify'
    },
    {
      icon: 'Bell',
      name: '通知菜单',
      index: '/notification'
    },
    {
      icon: 'Menu',
      name: '导航菜单',
      index: '/menu'
    },
    {
      icon: 'TurnOff',
      name: '城市选择',
      index: '/chooseCity'
    },
    {
      icon: 'DArrowRight',
      name: '进度条',
      index: '/progress'
    },
    {
      icon: 'ScaleToOriginal',
      name: '日历',
      index: '/calendar'
    },
    {
      icon: 'Setting',
      name: '表单',
      index: '/form'
    },
    {
      icon: 'Setting',
      name: '弹出框表单',
      index: '/modalForm'
    },
    {
      icon: 'ShoppingBag',
      name: '表格',
      index: '/table'
    }
  ]
  </script>
  
  <style lang='scss' scoped>
  </style>