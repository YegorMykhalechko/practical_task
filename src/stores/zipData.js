import { defineStore } from 'pinia'
import { getZipData } from '@/api/zip'

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
        console.log(err)
      }
    },

    clearZipData() {
      this.zipData = null
    }
  }
})
