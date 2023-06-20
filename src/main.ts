import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { createPinia } from "pinia";

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import router from './router'

import i18n from './language/index.js'

import store from './store'

let app = createApp(App);
app.use(createPinia())
app.use(ElementPlus)
app.use(router)
app.use(i18n)
app.use(store)
app.mount('#app')
