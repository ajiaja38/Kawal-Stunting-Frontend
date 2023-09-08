import CONFIG from './config'

const { BASE_URL, BASE_URL_V2, BASE_URL_REGION } = CONFIG

const API_ENDPOINT = {
  LOGIN: `${BASE_URL}/admin/login`,
  GET_DATA_ANAK_PAGINATE: (guid, page) => `${BASE_URL}/population/${guid}/${page}/7`,
  GET_DATA_ANAK_PAGINATE_SURVEYED: `${BASE_URL}/population/all`,
  GET_DATA_ANAK_BY_GUID: (guid) => `${BASE_URL}/population/guid/${guid}/1/10`,
  GET_MAPS: (guid) => `${BASE_URL}/population/maps/${guid}`,
  GET_ALL_DATA_SURVEYOR: `${BASE_URL}/report/company`,
  GET_DATA_ANAK_AND_SURVEYOR: `${BASE_URL}/population/process`,
  PROCESS_DATA_ANAK_AND_SURVEYOR: `${BASE_URL}/population/process-survey`,
  GET_PROVINSI: `${BASE_URL_REGION}/provinsi`,
  GET_KOTA: (provinsiId) => `${BASE_URL_REGION}/kota?provinsi_id=${provinsiId}`,
  GET_KECAMATAN: (kabupatenId) => `${BASE_URL_REGION}/kecamatan?kota_id=${kabupatenId}`,
  GET_KELURAHAN: (kecamatanId) => `${BASE_URL_REGION}/kelurahan?kecamatan_id=${kecamatanId}`
}

const API_ENDPOINT_NEST = {
  GET_ALL_DATA_ANAK_PAGINATE: (search, guid, page) => `${BASE_URL_V2}/anak/paginate/${guid}?search=${search}&page=${page}&limit=30`,
  DATA_ANAK_BY_GUID: (guid) => `${BASE_URL_V2}/anak/${guid}`,
  UPLOADER: `${BASE_URL_V2}/uploader`,
  AUTHENTICATION: `${BASE_URL_V2}/auth/loginAdmin`,
  COMPANY: `${BASE_URL_V2}/company`,
  GET_ALL_DATA_SURVEY_BY_COMPANY: (page) => `${BASE_URL_V2}/survey/getByCompanyId?page=${page}&limit=30`
}

export {
  API_ENDPOINT,
  API_ENDPOINT_NEST
}
