import axios from 'axios'
import API_ENDPOINT from '../global/api_endpoint'

const {
  GET_PROVINSI,
  GET_KOTA,
  GET_KECAMATAN,
  GET_KELURAHAN
} = API_ENDPOINT

class SourceRegion {
  static apiKey = 'vCxf5SpLoBwTChXRchM7izgO77rch6'

  static async getProvinsi () {
    const response = await axios.get(GET_PROVINSI, {
      headers: {
        'x-api-key': SourceRegion.apiKey
      }
    })
    return response.data.data
  }

  static async getKota (provinsiId) {
    const response = await axios.get(GET_KOTA(provinsiId), {
      headers: {
        'x-api-key': SourceRegion.apiKey
      }
    })
    return response.data.data
  }

  static async getKecamatan (kotaId) {
    const response = await axios.get(GET_KECAMATAN(kotaId), {
      headers: {
        'x-api-key': SourceRegion.apiKey
      }
    })
    return response.data.data
  }

  static async getKelurahan (kecamatanId) {
    const response = await axios.get(GET_KELURAHAN(kecamatanId), {
      headers: {
        'x-api-key': SourceRegion.apiKey
      }
    })
    return response.data.data
  }
}

export default SourceRegion
