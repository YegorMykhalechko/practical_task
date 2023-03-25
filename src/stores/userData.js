import { defineStore } from 'pinia'
import { getIpData } from '@/api/ip'
import { notify } from '@kyvg/vue3-notification'
import { getUserAgentData } from '@/api/userAgent'
import { useErrorHandle } from '@/composables/useErrorHandle'

export const useUserDataStore = defineStore('userData', {
  state: () => ({
    userData: null
  }),
  actions: {
    async getUserData() {
      try {
        await this.getIpData()
        await this.getUserAgentData()
      } catch (err) {
        console.log(useErrorHandle(err))
        notify({
          title: 'Oooops',
          text: useErrorHandle(err),
          type: 'error',
          duration: 3000
        })
      }
    },

    async getIpData() {
      try {
        const res = await getIpData()
        this.userData = res.data
      } catch (err) {
        notify({
          title: 'Oooops',
          text: useErrorHandle(err),
          type: 'error',
          duration: 3000
        })
      }
    },

    async getUserAgentData() {
      try {
        const res = await getUserAgentData()
        this.userData = { ...this.userData, ...res.data }
      } catch (err) {
        notify({
          title: 'Oooops',
          text: useErrorHandle(err),
          type: 'error',
          duration: 3000
        })
      }
    },

    clearUserData() {
      this.userData = null
    }
  }
})
