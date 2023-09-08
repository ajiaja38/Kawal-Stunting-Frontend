import axios from 'axios'
import { API_ENDPOINT, API_ENDPOINT_NEST } from '../global/api_endpoint'

const { GET_ALL_DATA_SURVEYOR, GET_DATA_ANAK_AND_SURVEYOR, PROCESS_DATA_ANAK_AND_SURVEYOR } = API_ENDPOINT
const { GET_ALL_DATA_SURVEY_BY_COMPANY, GET_HISTORY_SURVEY_BY_GUID_ANAK } = API_ENDPOINT_NEST

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

  static async getAllDataSurveyPaginate (page) {
    const response = await axios.get(GET_ALL_DATA_SURVEY_BY_COMPANY(page), {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    return response.data.data
  }

  static async getAllDataSurveyPaginateWithGuidAnak (guid, page) {
    const response = await axios.get(GET_HISTORY_SURVEY_BY_GUID_ANAK(guid, page), {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    return response.data.data
  }
}

export default SourceSurveyor
