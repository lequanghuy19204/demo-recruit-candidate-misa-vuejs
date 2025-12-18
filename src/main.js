import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/commons.css'
import './assets/css/icons.css'
import './assets/css/modal-add-candidate.css'
import './assets/css/style.css'
import './assets/css/toast.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
