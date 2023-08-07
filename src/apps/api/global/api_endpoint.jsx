import CONFIG from './config'

const { BASE_URL, BASE_URL_REGION } = CONFIG

const API_ENDPOINT = {
  LOGIN: `${BASE_URL}/admin/login`,
  GET_DATA_ANAK_PAGINATE: (guid, page) => `${BASE_URL}/population/${guid}/${page}/7`,
  GET_DATA_ANAK_BY_GUID: (guid) => `${BASE_URL}/population/guid/${guid}/1/10`,
  GET_MAPS: (guid) => `${BASE_URL}/population/maps/${guid}`,
  GET_ALL_DATA_SURVEYOR: `${BASE_URL}/report/all-survey`,
  GET_PROVINSI: `${BASE_URL_REGION}/provinsi`,
  GET_KOTA: (provinsiId) => `${BASE_URL_REGION}/kota?provinsi_id=${provinsiId}`,
  GET_KECAMATAN: (kabupatenId) => `${BASE_URL_REGION}/kecamatan?kota_id=${kabupatenId}`,
  GET_KELURAHAN: (kecamatanId) => `${BASE_URL_REGION}/kelurahan?kecamatan_id=${kecamatanId}`
}

export default API_ENDPOINT
