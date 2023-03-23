import { defineStore } from 'pinia'
import { getIpData } from '@/api/ip'
import { notify } from '@kyvg/vue3-notification'

export const useUserDataStore = defineStore('zipData', {
  state: () => ({
    userData: null
  }),
  actions: {
    async getIpData() {
      try {
        const res = await getIpData()
        this.userData = res.data
        this.$router.push({ path: 'data' })
      } catch (err) {
        notify({
          title: 'Oooops',
          text: err,
          type: 'error',
          duration: 3000
        })
      }
    },

    clearZipData() {
      this.zipData = null
    }
  }
})
