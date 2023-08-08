/* eslint-disable react/prop-types */
import React from 'react'

const CardDataSurveyor = ({ surveyor }) => {
  console.log(surveyor)
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
            <label>Nama Anak</label>
            <input
              value={surveyor.NAME}
              type='text'
              className='outline-none border-b-2 border-black p-2 mb-3 bg-white'
              placeholder='Masukkan Nama Lengkap Anak'
            />
          </div>

          <div className='flex flex-col'>
            <label>Deskripsi</label>
            <input
              value={surveyor.DESCRIPTION}
              type='text'
              className='outline-none border-b-2 border-black p-2 mb-3 bg-white'
              placeholder='Masukkan Nama Lengkap Anak'
            />
          </div>

          <div className='flex flex-col'>
            <label>Tipe Laporan</label>
            <input
              value={surveyor.REPORT_TYPES}
              type='text'
              className='outline-none border-b-2 border-black p-2 mb-3 bg-white'
              placeholder='Masukkan Nama Lengkap Anak'
            />
          </div>

          <div className='flex flex-col'>
            <label>Foto Anak</label>
            <input
              value={surveyor.IMAGE}
              type='text'
              className='outline-none border-b-2 border-black p-2 mb-3 bg-white'
              placeholder='Masukkan Nama Lengkap Anak'
            />
          </div>

          <div className='flex flex-col'>
            <label>Alamat</label>
            <input
              value={surveyor.ADDRESS}
              type='text'
              className='outline-none border-b-2 border-black p-2 mb-3 bg-white'
              placeholder='Masukkan Nama Lengkap Anak'
            />
          </div>

          <div className='flex flex-col'>
            <label>Provinsi</label>
            <input
              value={surveyor.AREA}
              type='text'
              className='outline-none border-b-2 border-black p-2 mb-3 bg-white'
              placeholder='Masukkan Nama Lengkap Anak'
            />
          </div>

          <div className='flex flex-col'>
            <label>Kabupaten</label>
            <input
              value={surveyor.DISTRICT}
              type='text'
              className='outline-none border-b-2 border-black p-2 mb-3 bg-white'
              placeholder='Masukkan Nama Lengkap Anak'
            />
          </div>

          <div className='flex flex-col'>
            <label>Longitude</label>
            <input
              value={surveyor.LONG}
              type='text'
              className='outline-none border-b-2 border-black p-2 mb-3 bg-white'
              placeholder='Masukkan Nama Lengkap Anak'
            />
          </div>

          <div className='flex flex-col'>
            <label>Latitude</label>
            <input
              value={surveyor.LAT}
              type='text'
              className='outline-none border-b-2 border-black p-2 mb-3 bg-white'
              placeholder='Masukkan Nama Lengkap Anak'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardDataSurveyor
