/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import SourceStuntingAPI from '../../../api/resource/SourceStunting'

const FormDetailAnak = ({ guid }) => {
  const [namaLengkap, setNamaLengkap] = useState('')
  const [namaAyah, setNamaAyah] = useState('')
  const [namaIbu, setNamaIbu] = useState('')
  const [gender, setGender] = useState('')
  const [tanggalLahir, setTanggalLahir] = useState('')
  const [fotoAnak, setFotoAnak] = useState('')
  const [desa, setDesa] = useState('')
  const [kecamatan, setKecamatan] = useState('')
  const [kabupaten, setKabupaten] = useState('')
  const [provinsi, setProvinsi] = useState('')

  const getDataAnakByGuid = async () => {
    try {
      const response = await SourceStuntingAPI.getDataAnakByGuid(guid)
      console.log(response[0])
      setNamaLengkap(response[0].NAME)
      setNamaAyah(response[0].FATHER_NAME)
      setNamaIbu(response[0].MOTHER_NAME)
      setGender(response[0].GENDER)
      setTanggalLahir(response[0].DATE_BIRTH)
      setFotoAnak(response[0].PROFILE_PHOTO)
      setDesa(response[0].WARD)
      setKecamatan(response[0].SUBDISTRICT)
      setKabupaten(response[0].REGENCY)
      setProvinsi(response[0].PROVINCE)
    } catch (error) {
      console.log(error.response.data.message)
    }
  }

  useEffect(() => {
    getDataAnakByGuid()
  }, [])

  return (
    <div className='w-full p-3 mb-10 flex justify-around'>
      <form className='flex flex-col gap-8'>
        <div
          className='flex flex-col gap-1 w-full'
        >
          <label className='font-bold'>Nama Lengkap</label>
          <input
            type='text'
            value={namaLengkap}
            className='border-black border-b py-2 w-96 outline-none'
          />
        </div>

        <div
          className='flex flex-col gap-1 w-full'
        >
          <label className='font-bold'>Nama Ayah</label>
          <input
            type='text'
            value={namaAyah}
            className='border-black border-b py-2 w-96 outline-none'
          />
        </div>

        <div
          className='flex flex-col gap-1 w-full'
        >
          <label className='font-bold'>Nama Ibu</label>
          <input
            type='text'
            value={namaIbu}
            className='border-black border-b py-2 w-96 outline-none'
          />
        </div>

        <div
          className='flex flex-col gap-1 w-full'
        >
          <label className='font-bold'>Alamat</label>
          <input
            type='text'
            value={`Desa ${desa}, Kec.${kecamatan}, ${kabupaten}, PROV.${provinsi}`}
            className='border-black border-b py-2 w-96 outline-none'
          />
        </div>

        <div
          className='flex flex-col gap-1 w-full'
        >
          <label className='font-bold'>Jenis Kelamin</label>
          <input
            type='text'
            value={gender}
            className='border-black border-b py-2 w-96 outline-none'
          />
        </div>

        <div
          className='flex flex-col gap-1 w-full'
        >
          <label className='font-bold'>Tanggal Lahir</label>
          <input
            type='text'
            value={tanggalLahir}
            className='border-black border-b py-2 w-96 outline-none'
          />
        </div>

        {/* <button
          className='p-2 text-white rounded-md bg-yellow-400 hover:bg-yellow-300 active:bg-yellow-500 transition-all ease-in-out duration-100'
        >
          Edit
        </button> */}
      </form>
      <div className='flex flex-col justify-start items-center gap-2'>
        <label className='font-bold'>Foto Anak</label>
        <img
          src={`http://absensi-selfie.pptik.id/data/kehadiran/image/${fotoAnak}`}
          className='w-80'
        />
      </div>
    </div>
  )
}

export default FormDetailAnak
