import { createRouter, createWebHistory } from 'vue-router'
import { useZipDataStore } from '../stores/zipData'
import HomeView from '../views/HomeView.vue'
import DataView from '../views/DataView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/data',
      name: 'data',
      component: DataView,
      // beforeEnter: (to, from, next) => {
      //   const zipStore = useZipDataStore()
      //   if (!zipStore.zipData) {
      //     next({ name: 'home' })
      //   } else next()
      // }
    }
  ]
})

export default router
