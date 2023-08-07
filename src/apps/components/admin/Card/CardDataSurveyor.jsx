/* eslint-disable react/prop-types */
import React from 'react'

const CardDataSurveyor = ({ surveyor }) => {
  return (
    <div className='w-full'>
      <h1 className='text-center mb-5 font-bold text-lg'>Data Survey</h1>
      <div className='border rounded-lg shadow-lg p-7 mb-7 w-full flex gap-5'>
        <div className='flex flex-col gap-1'>
          <label className='text-center font-bold'>Foto Survey</label>
          <img
            src={`http://absensi-selfie.pptik.id/${surveyor.IMAGE}`}
            className='w-44 h-44 object-cover object-center rounded-lg shadow-lg'
          />
        </div>
        <div className='p-5 w-full grid grid-cols-1 gap-3'>
          <div className='flex flex-col'>
            <label>Nama Surveyor</label>
            <input
              value={surveyor.NAME}
              type='text'
              className='outline-none border-b-2 border-black p-2 mb-3 bg-white'
              placeholder='Masukkan Nama Lengkap Anak'
              disabled
            />
          </div>

          <div className='flex flex-col'>
            <label>Provinsi</label>
            <input
              value={surveyor.AREA}
              type='text'
              className='outline-none border-b-2 border-black p-2 mb-3 bg-white'
              placeholder='Masukkan Nama Lengkap Anak'
              disabled
            />
          </div>

          <div className='flex flex-col'>
            <label>Kecamatan</label>
            <input
              value={surveyor.DISTRICT}
              type='text'
              className='outline-none border-b-2 border-black p-2 mb-3 bg-white'
              placeholder='Masukkan Nama Lengkap Anak'
              disabled
            />
          </div>

          <div className='flex flex-col'>
            <label>Latitude</label>
            <input
              value={surveyor.LAT}
              type='text'
              className='outline-none border-b-2 border-black p-2 mb-3 bg-white'
              placeholder='Masukkan Nama Lengkap Anak'
              disabled
            />
          </div>

          <div className='flex flex-col'>
            <label>Latitude</label>
            <input
              value={surveyor.LONG}
              type='text'
              className='outline-none border-b-2 border-black p-2 mb-3 bg-white'
              placeholder='Masukkan Nama Lengkap Anak'
              disabled
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardDataSurveyor
