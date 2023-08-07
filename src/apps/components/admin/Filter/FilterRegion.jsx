/* eslint-disable react/prop-types */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  setSelectedProvinsi,
  setSelectedKota,
  setSelectedKecamatan,
  setSelectedKelurahan
} from '../../../redux/actions/actions'

const FilterRegion = ({ provinsi, kota, kecamatan, kelurahan }) => {
  const dispatch = useDispatch()
  const { selectedProvinsi } = useSelector((state) => state.data)
  const { selectedKota } = useSelector((state) => state.data)
  const { selectedKecamatan } = useSelector((state) => state.data)
  const { selectedKelurahan } = useSelector((state) => state.data)

  const getProvinsiById = (id) => {
    const prov = provinsi.find((prov) => prov.id === id)
    return prov ? prov.name : ''
  }

  const getKotaById = (id) => {
    const city = kota.find((city) => city.id === id)
    return city ? city.name : ''
  }

  const getKemacatanById = (id) => {
    const district = kecamatan.find((district) => district.id === id)
    return district ? district.name : ''
  }

  const getKelurahanById = (id) => {
    const village = kelurahan.find((village) => village.id === id)
    return village ? village.name : ''
  }

  const handleProvinsiSelected = (e) => {
    const selectedProvinsi = e.target.value
    dispatch(setSelectedProvinsi(selectedProvinsi))
    dispatch(setSelectedKota(null))
    dispatch(setSelectedKecamatan(null))
    dispatch(setSelectedKelurahan(null))
  }

  const handleKotaSelected = (e) => {
    const selectedKota = e.target.value
    dispatch(setSelectedKota(selectedKota))
    dispatch(setSelectedKecamatan(null))
    dispatch(setSelectedKelurahan(null))
  }

  const handleKecamatanSelected = (e) => {
    const selectedKecamatan = e.target.value
    dispatch(setSelectedKecamatan(selectedKecamatan))
    dispatch(setSelectedKelurahan(null))
  }

  const handleKelurahanSelected = (e) => {
    const selectedKelurahan = e.target.value
    dispatch(setSelectedKelurahan(selectedKelurahan))
  }

  return (
    <div>
      <div className='flex gap-3 text-white mb-5 outline-none'>
        <select
          className='bg-main py-2 px-3 w-36 rounded-md'
          onChange={handleProvinsiSelected}
          value={selectedProvinsi || ''}
        >
          <option readOnly>Provinsi</option>
          {
            provinsi.map((prov) => (
              <option
                key={prov.id}
                value={prov.id}
              >
                {prov.name}
              </option>
            ))
          }
        </select>

        <select
          disabled={!selectedProvinsi || selectedProvinsi === 'Provinsi'}
          className='bg-main py-2 px-3 w-36 rounded-md'
          onChange={handleKotaSelected}
          value={selectedKota || ''}
        >
          <option readOnly>Kabupaten</option>
          {
            kota.map((city) => (
              <option
                key={city.id}
                value={city.id}
              >
                {city.name}
              </option>
            ))
          }
        </select>

        <select
          disabled={!selectedKota}
          className='bg-main py-2 px-3 w-36 rounded-md'
          onChange={handleKecamatanSelected}
          value={selectedKecamatan || ''}
        >
          <option readOnly>Kecamatan</option>
          {
            kecamatan.map((district) => (
              <option
                key={district.id}
                value={district.id}
              >
                {district.name}
              </option>
            ))
          }
        </select>

        <select
          disabled={!selectedKecamatan}
          className='bg-main py-2 px-3 w-36 rounded-md'
          onChange={handleKelurahanSelected}
        >
          <option readOnly>Kelurahan</option>
          {
            kelurahan.map((village) => (
              <option
                key={village.id}
                value={village.id}
              >
                {village.name}
              </option>
            ))
          }
        </select>
      </div>

      <div className='mb-5 flex items-center gap-2'>
        <i className="fa-solid fa-location-crosshairs text-lg"></i>
        {
          selectedProvinsi
            ? <span>{getProvinsiById(selectedProvinsi)}</span>
            : <span>Informasi Geografis</span>
        }
        { selectedKota && <span> <i className="fa-solid fa-angle-right mr-1"></i> {getKotaById(selectedKota)}</span> }
        { selectedKecamatan && <span> <i className="fa-solid fa-angle-right mr-1"></i> {getKemacatanById(selectedKecamatan)}</span> }
        { selectedKelurahan && <span> <i className="fa-solid fa-angle-right mr-1"></i> {getKelurahanById(selectedKelurahan)}</span> }
      </div>
    </div>
  )
}

export default FilterRegion
