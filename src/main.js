import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

//Plugins
import { ApiPlugin } from './plugins/axios'

//Styles
import "@/assets/main.scss";

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ApiPlugin, {
    baseUrl: `${import.meta.env.VITE_SERVER_URL}/api`,
});

app.mount('#app')
