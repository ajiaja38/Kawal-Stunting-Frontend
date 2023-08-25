import axios from 'axios'
import { API_ENDPOINT, API_ENDPOINT_NEST } from '../global/api_endpoint'

const { LOGIN } = API_ENDPOINT
const { AUTHENTICATION } = API_ENDPOINT_NEST

class SourceAuthAPI {
  static async login (data) {
    const response = await axios.post(LOGIN, data)
    return response.data.data
  }

  static async loginNest (data) {
    const response = await axios.post(AUTHENTICATION, data)
    return response.data.accessToken
  }
}

export default SourceAuthAPI
