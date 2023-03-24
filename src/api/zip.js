import axios from 'axios'

export function getZipData(zip) {
  return axios.get(`${import.meta.env.VITE_SERVER_ZIP_URL}/${zip}`)
}
