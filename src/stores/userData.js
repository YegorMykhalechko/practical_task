import { defineStore } from 'pinia'
import { getIpData } from '@/api/ip'
import { notify } from '@kyvg/vue3-notification'
import { getUserAgentData } from '@/api/userAgent'

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
        notify({
          title: 'Oooops',
          text: err,
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
          text: err,
          type: 'error',
          duration: 3000
        })
      }
    },

    async getUserAgentData() {
      try {
        const res = await getUserAgentData(window.navigator.userAgent, this.userData.ip)
        this.userData = { ...this.userData, ...res.data }
      } catch (err) {
        notify({
          title: 'Oooops',
          text: err,
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
