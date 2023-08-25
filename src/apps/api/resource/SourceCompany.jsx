import axios from 'axios'
import { API_ENDPOINT_NEST } from '../global/api_endpoint'

const { COMPANY } = API_ENDPOINT_NEST

class SourceCompany {
  static async getAllCompany () {
    const response = await axios.get(COMPANY, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    return response.data.data
  }
}

export default SourceCompany
