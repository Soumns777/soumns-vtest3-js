import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index';

import './app.scss'
import 'virtual:uno.css'

createApp(App).use(router).mount('#app')



