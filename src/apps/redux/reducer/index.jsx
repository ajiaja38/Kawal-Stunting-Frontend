const initialState = {
  dataAnak: [],
  maps: [],
  dataSurvey: [],
  dataSurveyByCompany: [],
  selectedProvinsi: null,
  selectedKota: null,
  selectedKecamatan: null,
  selectedKelurahan: null
}

const stateReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DATA_ANAK':
      return {
        ...state,
        dataAnak: action.payload
      }
    case 'SET_MAPS':
      return {
        ...state,
        maps: action.payload
      }
    case 'SET_DATA_SURVEY':
      return {
        ...state,
        dataSurvey: action.payload
      }
    case 'SET_DATA_SURVEY_BY_COMPANY':
      return {
        ...state,
        dataSurveyByCompany: action.payload
      }
    case 'SET_PROVINSI':
      return {
        ...state,
        selectedProvinsi: action.payload
      }
    case 'SET_KOTA':
      return {
        ...state,
        selectedKota: action.payload
      }
    case 'SET_KECAMATAN':
      return {
        ...state,
        selectedKecamatan: action.payload
      }
    case 'SET_KELURAHAN':
      return {
        ...state,
        selectedKelurahan: action.payload
      }
    default:
      return state
  }
}

export default stateReducer
