# 快速开始
因为我们当前组件库是基于element-plus 二次封装的，所有在项目当中必须确保已经安装和正确使用了element-plus， [element-plus安装使用指南](https://element-plus.gitee.io/zh-CN/guide/installation.html)

## 全局引入

- 在项目目录里安装xc-desgin
  - npm安装: ``` npm i xc-desgin ``` 
  - cnpm安装: ``` cnpm i xc-desgin ```
  - yarn安装: ``` yarn add xc-desgin ```
  - 在main.ts文件当中写入以下代码(需要将element-plus也一起引入):
``` js
    import { createApp } from 'vue'
    import App from './App.vue'

    import ElementPlus from 'element-plus'
    import 'element-plus/dist/index.css'

    import xcDesgin from 'xc-desgin';
    import 'xc-desgin/index.css';

    const app = createApp(App);
    app.use(ElementPlus).use(xcDesgin).mount('#app');
```
## 按需引入

- 在项目目录里安装xc-desgin
  - npm安装: ``` npm i xc-desgin ``` 
  - cnpm安装: ``` cnpm i xc-desgin ```
  - yarn安装: ``` yarn add xc-desgin ```
  - 在main.ts文件当中写入以下代码(需要将element-plus也一起引入):
``` js 
    import { createApp } from 'vue'
    import App from './App.vue'
    import ElementPlus from 'element-plus'
    import 'element-plus/dist/index.css'

    import xcCalendar from 'xc-desgin/xcCalendar';
    import 'xc-desgin/index.css';
    const app = createApp(App);
    app.use(router).use(Antd).use(ElementPlus).use(xcCalendar).mount('#app');
```