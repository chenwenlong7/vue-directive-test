import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import Directives from './directives'

const app = createApp(App)
app.use(Directives)

app.mount('#app')
