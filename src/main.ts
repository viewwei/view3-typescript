import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "../promise"
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import "@/styles/index.scss"
import "@/icons/index"
import i18 from "./i18n"
import svg from "@/components/svgComponent/index.vue"
createApp(App)
.use(i18)
.component("svg-icon",svg)
.use(store)
.use(ElementPlus)
.use(router)
.mount('#app')
