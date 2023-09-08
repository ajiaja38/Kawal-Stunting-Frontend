/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import SourceStuntingAPI from '../../../api/resource/SourceStunting'
import Swal from 'sweetalert2'
import SourceUploader from '../../../api/resource/SourceUploader'
import { useNavigate } from 'react-router-dom'
import FormDokument from './FormDokument'
import FormHistory from './FormHistory'

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
  const [is_valid, setIsvalid] = useState(false)

  const [activeTab, setActiveTab] = useState('detail')

  const switchToDetailTab = () => {
    setActiveTab('detail')
  }

  const switchToDocumentTab = () => {
    setActiveTab('document')
  }

  const switchToHsitoryTab = () => {
    setActiveTab('history')
  }

  const jenisKelamin = ['Laki-laki', 'Perempuan']

  const getDataAnakByGuid = async () => {
    try {
      const response = await SourceStuntingAPI.getDataAnakByGuid(guid)
      console.log(response)
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
      setIsvalid(response.is_valid)
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

  const handleShowImage = (url) => {
    Swal.fire({
      html: /* html */`
      <div style="display: flex; align-items: center; justify-content: center;">
        <img src="${url}" style="object-fit: cover; width: 80%; height: 20rem;">
      </div>`,
      showConfirmButton: false
    })
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
        <button
          className={`p-2 rounded-md ${
            activeTab === 'history' ? 'bg-yellow-400' : 'bg-gray-300'
          }`}
          onClick={switchToHsitoryTab}
        >
          History
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
             disabled={!!is_valid}
              onClick={alert}
              className={`p-2 text-white h-10 mt-7 rounded-md ${is_valid ? 'bg-gray-300' : 'bg-main hover:bg-secondary active:bg-main'} transition-all ease-in-out duration-100`}
            >
              { is_valid ? 'Data Sudah Valid' : 'Validasi' }
            </button>
          </div>
        </div>
      )}
      {activeTab === 'document' && (
        <FormDokument
          image={image}
          FILE_KTP_Ayah={FILE_KTP_Ayah}
          FILE_KTP_Ibu={FILE_KTP_Ibu}
          FILE_KK={FILE_KK}
          FILE_AKTA={FILE_AKTA}
          handleImageAnak={handleImageAnak}
          handleImageKtpAyah={handleImageKtpAyah}
          handleImageKtpIbu={handleImageKtpIbu}
          handleImageKK={handleImageKK}
          handleImageAkta={handleImageAkta}
          handleShowImage={handleShowImage}
        />
      )}
      {activeTab === 'history' && (
        <FormHistory guid={guid} nama={nama}/>
      )}
    </div>
  )
}

export default FormDetailAnak
