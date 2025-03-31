import './assets/reset.css'

import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import { router } from './routes/index'
const app = createApp(App)

app.use(createPinia())

app.use(router).mount('#app')
