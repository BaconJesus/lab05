import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import GStore from './store'
import 'nprogress/nprogress.css'

//create a reactive obj

createApp(App).use(router).provide('GStore', GStore).mount('#app')
