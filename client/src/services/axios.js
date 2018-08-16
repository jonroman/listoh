import axios from 'axios'

// NOTE baseURL: `http://localhost:8081`
import ENV from '../../../setup/environment.js'
let baseURLPORT = ENV.baseURL + ':' + ENV.port.server

console.log('***** baseURLORT ', baseURLPORT)

export default() => {
  return axios.create({
    baseURL: baseURLPORT,
    withCredentials: true
  })
}