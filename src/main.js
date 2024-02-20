import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Gradient } from 'whatamesh'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'

import App from './App.vue'

const app = createApp(App)

app.use(createPinia())
app.use(autoAnimatePlugin)

app.mount('#app')

const gradient = new Gradient()

gradient.initGradient('#gradient-canvas')
