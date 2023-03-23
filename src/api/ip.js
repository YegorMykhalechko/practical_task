import axios from 'axios'

export function getIpData() {
  return axios.get(`https://ipwhois.app/json/`)
}
