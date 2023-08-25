import axios from 'axios'
import { API_ENDPOINT_NEST } from '../global/api_endpoint'

const { UPLOADER } = API_ENDPOINT_NEST

class SourceUploader {
  static async uploadFoto (data) {
    console.log(data)
    const response = await axios.post(UPLOADER, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'multipart/form-data'
      }
    })
    return response.data.data
  }
}

export default SourceUploader
