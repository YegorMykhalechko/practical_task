import axios from 'axios'

export function getUserAgentData(userAgent, ip) {
  return axios.get(`${import.meta.env.VITE_SERVER_URL}/user-agent?apiKey=${import.meta.env.VITE_SERVER_API_KEY}`)
}
