
import { createApp } from 'vue'
import './assets/main.css'
import './assets/base.css'
import router from './router'
import App from './App.vue'

createApp(App)
    .use(router)
    .mount('#app') 
