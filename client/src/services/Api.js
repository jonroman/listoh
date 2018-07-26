import axios from 'axios'

// NOTE baseURL: `http://localhost:8081`
import ENV from '../../../setup/environment'
let baseURL = 'http://10.0.3.21:' + ENV.port.server

export default() => {
  return axios.create({
    baseURL: baseURL
  })
}
