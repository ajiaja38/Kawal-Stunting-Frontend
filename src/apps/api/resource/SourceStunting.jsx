import axios from 'axios'
import API_ENDPOINT from '../global/api_endpoint'

const {
  GET_DATA_ANAK_PAGINATE,
  GET_DATA_ANAK_PAGINATE_SURVEYED,
  GET_DATA_ANAK_BY_GUID,
  GET_MAPS
} = API_ENDPOINT

class SourceStuntingAPI {
  static async getDataAnak (guid, page) {
    const response = await axios.get(GET_DATA_ANAK_PAGINATE(guid, page))
    return response.data
  }

  static async getDataAnakHasilSurvey (data) {
    const response = await axios.post(GET_DATA_ANAK_PAGINATE_SURVEYED, data)
    return response.data
  }

  static async getDataAnakByGuid (guid) {
    const response = await axios.get(GET_DATA_ANAK_BY_GUID(guid))
    return response.data.data
  }

  static async getDataForMaps (guid) {
    const response = await axios.get(GET_MAPS(guid))
    return response.data.data
  }
}

export default SourceStuntingAPI
