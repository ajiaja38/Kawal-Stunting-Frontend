import axios from 'axios'
import API_ENDPOINT from '../global/api_endpoint'

const { GET_ALL_DATA_SURVEYOR } = API_ENDPOINT

class SourceSurveyor {
  static async getAllDataSurvey (data) {
    const response = await axios.post(GET_ALL_DATA_SURVEYOR, data)
    return response.data
  }
}

export default SourceSurveyor
