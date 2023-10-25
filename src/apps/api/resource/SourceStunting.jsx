import axios from 'axios'
import { API_ENDPOINT, API_ENDPOINT_NEST } from '../global/api_endpoint'

const {
  GET_DATA_ANAK_PAGINATE,
  GET_DATA_ANAK_PAGINATE_SURVEYED,
  GET_MAPS
} = API_ENDPOINT

const {
  GET_ALL_DATA_ANAK_PAGINATE,
  DATA_ANAK_BY_GUID,
  DOWNLOAD_DATA_ANAK
} = API_ENDPOINT_NEST

class SourceStuntingAPI {
  static async getDataAnak (guid, page) {
    const response = await axios.get(GET_DATA_ANAK_PAGINATE(guid, page))
    return response.data
  }

  static async getAllDataAnakPaginate (search, guid, page) {
    const response = await axios.get(GET_ALL_DATA_ANAK_PAGINATE(search, guid, page))
    return response.data.data
  }

  static async getDataAnakHasilSurvey (data) {
    const response = await axios.post(GET_DATA_ANAK_PAGINATE_SURVEYED, data)
    return response.data
  }

  static async getDataAnakByGuid (guid) {
    const response = await axios.get(DATA_ANAK_BY_GUID(guid))
    return response.data.data
  }

  static async getDataForMaps (guid) {
    const response = await axios.get(GET_MAPS(guid))
    return response.data.data
  }

  static async updateDataAnak (guid, data) {
    const response = await axios.put(DATA_ANAK_BY_GUID(guid), data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    return response.data.message
  }

  static async deleteDataAnak (guid) {
    const response = await axios.delete(DATA_ANAK_BY_GUID(guid))
    return response.data.message
  }

  static async downloadDataAnak () {
    const response = await axios.get(DOWNLOAD_DATA_ANAK, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
      responseType: 'arraybuffer'
    })

    const blob = new Blob([response.data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })
    return blob
  }
}

export default SourceStuntingAPI
