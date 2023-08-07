export const setDataAnak = (dataAnak) => ({
  type: 'SET_DATA_ANAK',
  payload: dataAnak
})

export const setDataMaps = (maps) => ({
  type: 'SET_MAPS',
  payload: maps
})

export const setDataSurvey = (dataSurvey) => ({
  type: 'SET_DATA_SURVEY',
  payload: dataSurvey
})

export const setSelectedProvinsi = (provinsi) => ({
  type: 'SET_PROVINSI',
  payload: provinsi
})

export const setSelectedKota = (kota) => ({
  type: 'SET_KOTA',
  payload: kota
})

export const setSelectedKecamatan = (kecamatan) => ({
  type: 'SET_KECAMATAN',
  payload: kecamatan
})

export const setSelectedKelurahan = (kelurahan) => ({
  type: 'SET_KELURAHAN',
  payload: kelurahan
})
