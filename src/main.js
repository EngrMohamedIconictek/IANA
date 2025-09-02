import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import 'primeicons/primeicons.css'
import 'iconoir/css/iconoir.css'
import primeVue from "./plugins/primvue/primvue";

const app = createApp(App)
primeVue.init(app);
app.use(router)
app.mount('#app')