import axios from 'axios'

export function getIpData() {
  return axios.get(`${import.meta.env.VITE_SERVER_IP_URL}`)
}
