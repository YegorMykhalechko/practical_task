import { defineStore } from 'pinia'
import { getZipData } from '@/api/zip'
import { notify } from '@kyvg/vue3-notification'

export const useZipDataStore = defineStore('zipData', {
  state: () => ({
    zipData: null
  }),
  actions: {
    async getZipData(zip) {
      try {
        const res = await getZipData(zip.value)
        this.zipData = res.data
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
