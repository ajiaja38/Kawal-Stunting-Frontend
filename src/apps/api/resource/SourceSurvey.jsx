import axios from 'axios'
import API_ENDPOINT from '../global/api_endpoint'

const { GET_ALL_DATA_SURVEYOR, GET_DATA_ANAK_AND_SURVEYOR, PROCESS_DATA_ANAK_AND_SURVEYOR } = API_ENDPOINT

class SourceSurveyor {
  static async getAllDataSurvey (data) {
    const response = await axios.post(GET_ALL_DATA_SURVEYOR, data)
    return response.data
  }

  static async getDataAnakAndSurveyor (data) {
    const response = await axios.post(GET_DATA_ANAK_AND_SURVEYOR, data)
    return response.data
  }

  static async processDataAnak (data) {
    const response = await axios.post(PROCESS_DATA_ANAK_AND_SURVEYOR, data)
    return response.data.message
  }
}

export default SourceSurveyor
