import { defineStore } from 'pinia'
import { useHttpRefferUtm } from '@/composables/useHttpRefferUtm'

export const useHttpRefferStore = defineStore('httpRefferData', {
  state: () => ({
    httpRefferData: null
  }),
  actions: {
    getHttpRefferData() {
      this.httpRefferData = useHttpRefferUtm(document.referrer)
    }
  }
})
