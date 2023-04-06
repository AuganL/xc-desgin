import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

import xcDesgin from 'xc-desgin'
import 'xc-desgin/index.css'

import "./util/axios.config"
const app = createApp(App);


app.use(router)
app.use(Antd)
app.use(xcDesgin)
app.use(ElementPlus)
app.mount('#app')
