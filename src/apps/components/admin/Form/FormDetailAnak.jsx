/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import SourceStuntingAPI from '../../../api/resource/SourceStunting'
import Swal from 'sweetalert2'
import SourceUploader from '../../../api/resource/SourceUploader'
import { useNavigate } from 'react-router-dom'

const FormDetailAnak = ({ guid }) => {
  const navigate = useNavigate()

  const [nama, setNama] = useState('')
  const [image, setImage] = useState('')
  const [jenis_kelamin, setJenis_kelamin] = useState('')
  const [nama_ibu, setNama_ibu] = useState('')
  const [nama_ayah, setNama_ayah] = useState('')
  const [FILE_KTP_Ayah, setKtpAyah] = useState('')
  const [FILE_KTP_Ibu, setKtpIbu] = useState('')
  const [FILE_KK, setKK] = useState('')
  const [FILE_AKTA, setAkta] = useState('')
  const [alamat, setAlamat] = useState('')
  const [tempat_lahir, setTempatLahir] = useState('')
  const [tanggal_lahir, setTanggalLahir] = useState(new Date())
  const [NIK_Anak, setNIKAnak] = useState('')
  const [guidCompany, setGuidCompany] = useState('')

  const [activeTab, setActiveTab] = useState('detail')

  const switchToDetailTab = () => {
    setActiveTab('detail')
  }

  const switchToDocumentTab = () => {
    setActiveTab('document')
  }

  const jenisKelamin = ['Laki-laki', 'Perempuan']

  const getDataAnakByGuid = async () => {
    try {
      const response = await SourceStuntingAPI.getDataAnakByGuid(guid)
      setNama(response.nama)
      setImage(response.image)
      setJenis_kelamin(response.jenis_kelamin)
      setNama_ibu(response.nama_ibu)
      setNama_ayah(response.nama_ayah)
      setKtpAyah(response.FILE_KTP_Ayah)
      setKtpIbu(response.FILE_KTP_Ibu)
      setKK(response.FILE_KK)
      setAkta(response.FILE_AKTA)
      setAlamat(response.alamat)
      setTempatLahir(response.tempat_lahir)
      setTanggalLahir(response.tanggal_lahir)
      setNIKAnak(response.NIK_Anak)
      setGuidCompany(response.guidCompany)
    } catch (error) {
      console.log(error.response.data.message)
    }
  }

  const updateAnak = async (e) => {
    e.preventDefault()

    const data = {
      guid,
      nama,
      image,
      jenis_kelamin,
      nama_ibu,
      nama_ayah,
      FILE_KTP_Ayah,
      FILE_KTP_Ibu,
      FILE_KK,
      FILE_AKTA,
      alamat,
      tempat_lahir,
      tanggal_lahir,
      NIK_Anak,
      guidCompany
    }

    try {
      const response = await SourceStuntingAPI.updateDataAnak(guid, data)
      getDataAnakByGuid()
      Swal.fire(
        'Sukses',
        response,
        'success'
      )
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.response.data.message
      })
    }
  }

  const handleImageAnak = async (e) => {
    const image = e.target.files[0]

    const formData = new FormData()
    formData.append('foto', image)

    try {
      const response = await SourceUploader.uploadFoto(formData)
      Swal.fire(
        'Sukses',
        'Berhasil Update Foto Anak',
        'success'
      )
      setImage(response)
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.response.data.message
      })
    }
  }

  const handleImageKtpAyah = async (e) => {
    const image = e.target.files[0]

    const formData = new FormData()
    formData.append('foto', image)

    try {
      const response = await SourceUploader.uploadFoto(formData)
      Swal.fire(
        'Sukses',
        'Berhasil Update KTP Ayah',
        'success'
      )
      setKtpAyah(response)
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.response.data.message
      })
    }
  }

  const handleImageKtpIbu = async (e) => {
    const image = e.target.files[0]

    const formData = new FormData()
    formData.append('foto', image)

    try {
      const response = await SourceUploader.uploadFoto(formData)
      Swal.fire(
        'Sukses',
        'Berhasil Update KTP Ibu',
        'success'
      )
      setKtpIbu(response)
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.response.data.message
      })
    }
  }

  const handleImageKK = async (e) => {
    const image = e.target.files[0]

    const formData = new FormData()
    formData.append('foto', image)

    try {
      const response = await SourceUploader.uploadFoto(formData)
      Swal.fire(
        'Sukses',
        'Berhasil Update Kartu Keluarga',
        'success'
      )
      setKK(response)
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.response.data.message
      })
    }
  }

  const handleImageAkta = async (e) => {
    const image = e.target.files[0]

    const formData = new FormData()
    formData.append('foto', image)

    try {
      const response = await SourceUploader.uploadFoto(formData)
      Swal.fire(
        'Sukses',
        'Berhasil Update Akta Kelahiran',
        'success'
      )
      setAkta(response)
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.response.data.message
      })
    }
  }

  const updateValidasiAnak = async () => {
    const data = {
      guid,
      nama,
      image,
      jenis_kelamin,
      nama_ibu,
      nama_ayah,
      FILE_KTP_Ayah,
      FILE_KTP_Ibu,
      FILE_KK,
      FILE_AKTA,
      alamat,
      tempat_lahir,
      tanggal_lahir,
      is_valid: true,
      NIK_Anak,
      guidCompany
    }

    try {
      const response = await SourceStuntingAPI.updateDataAnak(guid, data)
      getDataAnakByGuid()
      Swal.fire(
        'Sukses',
        response,
        'success'
      )
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.response.data.message
      })
    }
  }

  const handleDeleteAnak = async () => {
    try {
      const response = await SourceStuntingAPI.deleteDataAnak(guid)
      Swal.fire(
        'Sukses',
        response,
        'success'
      )
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.response.data.message
      })
      console.log(error)
    }
  }

  const alert = () => {
    Swal.fire({
      icon: 'warning',
      title: 'Apakah Data Sudah Valid?',
      showCancelButton: true,
      confirmButtonText: 'Ya',
      cancelButtonText: 'Tidak Valid',
      confirmButtonColor: '#d33'
    }).then((result) => {
      if (result.isConfirmed) {
        updateValidasiAnak()
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        handleDeleteAnak()
        navigate('/data-anak')
      }
    })
  }

  useEffect(() => {
    getDataAnakByGuid()
  }, [])

  return (
    <div className='w-full p-3 mb-10'>
      <div className='flex gap-4 mb-4'>
        <button
          className={`p-2 rounded-md ${
            activeTab === 'detail' ? 'bg-yellow-400' : 'bg-gray-300'
          }`}
          onClick={switchToDetailTab}
        >
          Detail Anak
        </button>
        <button
          className={`p-2 rounded-md ${
            activeTab === 'document' ? 'bg-yellow-400' : 'bg-gray-300'
          }`}
          onClick={switchToDocumentTab}
        >
          Dokumen
        </button>
      </div>
      {activeTab === 'detail' && (
        <div className='w-full p-3 mb-10 flex justify-around'>
          <div
            className='grid grid-cols-3 gap-10'
          >
            <div
              className='flex flex-col gap-1 w-full'
            >
              <label className='font-bold'>Nama Anak</label>
              <input
                type='text'
                value={nama}
                className='border-black border-b py-2 w-72 outline-none'
                onChange={(e) => setNama(e.target.value)}
              />
            </div>

            <div
              className='flex flex-col gap-1 w-full'
            >
              <label className='font-bold'>Jenis Kelamin</label>
              <select
                onChange={(e) => setJenis_kelamin(e.target.value)}
                className='border-black border-b outline-none p-2'>
                <option readOnly>Pilih Jenis Kelamin</option>
                {
                  jenisKelamin.map((data, index) => (
                    <option
                      key={index}
                      value={data}
                      selected={data === jenis_kelamin}
                    >
                      {data}
                    </option>
                  ))
                }
              </select>
            </div>

            <div
              className='flex flex-col gap-1 w-full'
            >
              <label className='font-bold'>Nama Ayah</label>
              <input
                type='text'
                value={nama_ayah}
                onChange={(e) => setNama_ayah(e.target.value)}
                className='border-black border-b py-2 w-72 outline-none'
                placeholder='masukkan nama Ayah'
              />
            </div>

            <div
              className='flex flex-col gap-1 w-full'
            >
              <label className='font-bold'>Nama Ibu</label>
              <input
                type='text'
                value={nama_ibu}
                onChange={(e) => setNama_ibu(e.target.value)}
                className='border-black border-b py-2 w-72 outline-none'
                placeholder='masukkan nama Ibu'
              />
            </div>

            <div
              className='flex flex-col gap-1 w-full'
            >
              <label className='font-bold'>Alamat</label>
              <input
                type='text'
                value={alamat}
                onChange={(e) => setAlamat(e.target.value)}
                className='border-black border-b py-2 w-72 outline-none'
                placeholder='masukkan Alamat'
              />
            </div>

            <div
              className='flex flex-col gap-1 w-full'
            >
              <label className='font-bold'>Tempat Lahir</label>
              <input
                type='text'
                value={tempat_lahir}
                onChange={(e) => setTempatLahir(e.target.value)}
                className='border-black border-b py-2 w-72 outline-none'
                placeholder='masukkan tempat lahir'
              />
            </div>

            <div
              className='flex flex-col gap-1 w-full'
            >
              <label className='font-bold'>Tanggal Lahir</label>
              <input
                type='date'
                value={tanggal_lahir}
                onChange={(e) => setTanggalLahir(e.target.value)}
                className='border-black border-b py-2 w-72 outline-none'
                placeholder='masukkan tempat lahir'
              />
            </div>

            <div
              className='flex flex-col gap-1 w-full'
            >
              <label className='font-bold'>Nik Anak</label>
              <input
                type='text'
                value={NIK_Anak}
                onChange={(e) => setNIKAnak(e.target.value)}
                className='border-black border-b py-2 w-72 outline-none'
                placeholder='masukkan NIK Anak'
              />
            </div>

            <div></div>

            <button
              onClick={updateAnak}
              className='p-2 text-white h-10 mt-7 rounded-md bg-yellow-400 hover:bg-yellow-300 active:bg-yellow-500 transition-all ease-in-out duration-100'
            >
              Edit
            </button>
            <button
              onClick={alert}
              className='p-2 text-white h-10 mt-7 rounded-md bg-red-400 hover:bg-red-300 active:bg-red-500 transition-all ease-in-out duration-100'
            >
              Validasi
            </button>
          </div>
        </div>
      )}
      {activeTab === 'document' && (
        <div className='grid grid-cols-4 gap-4'>
          <div className='flex flex-col justify-start items-center gap-2'>
            <label className='font-bold'>Foto Anak</label>
            {image !== null && image !== '' && image !== 'N/A' && image !== 'profile.png'
              ? (
                <img
                  src={image}
                  className='w-60 h-60 object-cover object-center border'
                  alt='Foto Anak'
                />
                )
              : (
                <div className='w-60 h-60 bg-gray-200 flex justify-center items-center'>
                  <svg
                    className='w-24 h-24 text-gray-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
                )}
            <input
              type='file'
              accept='image/*'
              className='opacity-0 -mt-9'
              id='image-upload'
              onChange={handleImageAnak}
            />
            <label
              htmlFor='image-upload'
              className='text-center bg-yellow-300 cursor-pointer rounded-md px-2 py-1'
            >
              Edit Gambar Anak
            </label>
          </div>

          <div className='flex flex-col justify-start items-center gap-2'>
            <label className='font-bold'>Foto Ktp Ayah</label>
            {FILE_KTP_Ayah !== null && FILE_KTP_Ayah !== '' && FILE_KTP_Ayah !== 'N/A' && FILE_KTP_Ayah !== 'profile.png'
              ? (
                <img
                  src={FILE_KTP_Ayah}
                  className='w-60 h-60 object-cover object-center border'
                  alt='KTP Ayah'
                />
                )
              : (
                <div className='w-60 h-60 bg-gray-200 flex justify-center items-center'>
                  <svg
                    className='w-24 h-24 text-gray-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
                )}
            <input
              type='file'
              accept='image/*'
              className='opacity-0 -mt-9'
              id='image-uploaded-ktp-ayah'
              onChange={handleImageKtpAyah}
            />
            <label
              htmlFor='image-uploaded-ktp-ayah'
              className='text-center bg-yellow-300 cursor-pointer rounded-md px-2 py-1'
            >
              Edit KTP Ayah
            </label>
          </div>

          <div className='flex flex-col justify-start items-center gap-2'>
            <label className='font-bold'>Foto Ktp Ibu</label>
            {FILE_KTP_Ayah !== null && FILE_KTP_Ayah !== '' && FILE_KTP_Ayah !== 'N/A' && FILE_KTP_Ayah !== 'profile.png'
              ? (
                <img
                  src={FILE_KTP_Ibu}
                  className='w-60 h-60 object-cover object-center border'
                  alt='KTP Ayah'
                />
                )
              : (
                <div className='w-60 h-60 bg-gray-200 flex justify-center items-center'>
                  <svg
                    className='w-24 h-24 text-gray-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
                )}
            <input
              type='file'
              accept='image/*'
              className='opacity-0 -mt-9'
              id='image-uploaded-ktp-ibu'
              onChange={handleImageKtpIbu}
            />
            <label
              htmlFor='image-uploaded-ktp-ibu'
              className='text-center bg-yellow-300 cursor-pointer rounded-md px-2 py-1'
            >
              Edit KTP Ibu
            </label>
          </div>

          <div className='flex flex-col justify-start items-center gap-2'>
            <label className='font-bold'>Foto Kartu Keluarga</label>
            {FILE_KTP_Ayah !== null && FILE_KTP_Ayah !== '' && FILE_KTP_Ayah !== 'N/A' && FILE_KTP_Ayah !== 'profile.png'
              ? (
                <img
                  src={FILE_KK}
                  className='w-60 h-60 object-cover object-center border'
                  alt='KTP Ayah'
                />
                )
              : (
                <div className='w-60 h-60 bg-gray-200 flex justify-center items-center'>
                  <svg
                    className='w-24 h-24 text-gray-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
                )}
            <input
              type='file'
              accept='image/*'
              className='opacity-0 -mt-9'
              id='image-uploaded-kk'
              onChange={handleImageKK}
            />
            <label
              htmlFor='image-uploaded-kk'
              className='text-center bg-yellow-300 cursor-pointer rounded-md px-2 py-1'
            >
              Edit Kartu Keluarga
            </label>
          </div>

          <div className='flex flex-col justify-start items-center gap-2'>
            <label className='font-bold'>Foto Akta Kelahiran</label>
            {FILE_KTP_Ayah !== null && FILE_KTP_Ayah !== '' && FILE_KTP_Ayah !== 'N/A' && FILE_KTP_Ayah !== 'profile.png'
              ? (
                <img
                  src={FILE_AKTA}
                  className='w-60 h-60 object-cover object-center border'
                  alt='KTP Ayah'
                />
                )
              : (
                <div className='w-60 h-60 bg-gray-200 flex justify-center items-center'>
                  <svg
                    className='w-24 h-24 text-gray-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fillRule='evenodd'
                      d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
                )}
            <input
              type='file'
              accept='image/*'
              className='opacity-0 -mt-9'
              id='image-uploaded-akta'
              onChange={handleImageAkta}
            />
            <label
              htmlFor='image-uploaded-akta'
              className='text-center bg-yellow-300 cursor-pointer rounded-md px-2 py-1'
            >
              Edit Akta Kelahiran
            </label>
          </div>
        </div>
      )}
    </div>
  )
}

export default FormDetailAnak
