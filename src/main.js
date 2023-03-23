import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import Notifications from '@kyvg/vue3-notification'

//Styles
import "@/assets/main.scss";

const app = createApp(App)
const pinia = createPinia();

pinia.use(({store}) => {
    store.$router = markRaw(router)
})

app.use(pinia)
app.use(router)
app.use(Notifications)

app.mount('#app')
