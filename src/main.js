import { createApp } from 'vue'
import App from './App.vue'

import configureApp from './config'

const app = createApp(App)

configureApp(app)

app.mount('#app')
