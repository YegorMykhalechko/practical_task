import { useLoaderStore } from '@/stores/loader'

export function useAxios(axios) {
  const storeLoader = useLoaderStore()
  axios.defaults.showLoader = true
  axios.interceptors.request.use(
    (config) => {
      if (config.showLoader) {
        storeLoader.pending()
      }
      return config
    },
    (error) => {
      if (error.config.showLoader) {
        storeLoader.done()
      }
      return Promise.reject(error)
    }
  )
  axios.interceptors.response.use(
    (response) => {
      if (response.config.showLoader) {
        storeLoader.done()
      }

      return response
    },
    (error) => {
      let response = error.response

      if (response.config.showLoader) {
        storeLoader.done()
      }

      return Promise.reject(error)
    }
  )
}
