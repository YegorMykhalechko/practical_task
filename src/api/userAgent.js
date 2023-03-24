import axios from 'axios'

export function getUserAgentData(userAgent, ip) {
  return axios.get(`${import.meta.env.VITE_SERVER_USER_AGENT_URL}ua=${userAgent}&ip=${ip}&api_key=${import.meta.env.VITE_USER_AGENT_API_KEY}`)
}
