import axios from 'axios'
import API_ENDPOINT from '../global/api_endpoint'

const { LOGIN } = API_ENDPOINT

class SourceAuthAPI {
  static async login (data) {
    const response = await axios.post(LOGIN, data)
    return response.data.data
  }
}

export default SourceAuthAPI
