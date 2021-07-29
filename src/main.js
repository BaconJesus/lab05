import { createApp, reactive } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'nprogress/nprogress.css'

//create a reactive obj
const GStore = reactive({ flashMessage: '' })
createApp(App).use(store).use(router).provide('GStore', GStore).mount('#app')
