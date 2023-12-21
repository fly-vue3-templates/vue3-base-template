import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from './store'
import 'virtual:svg-icons-register'
import 'virtual:uno.css'

createApp(App).use(store).mount('#app')
