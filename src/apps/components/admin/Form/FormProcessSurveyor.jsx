/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import SourceSurveyor from '../../../api/resource/SourceSurvey'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const FormProcessSurveyor = ({ child, guidReport }) => {
  const navigate = useNavigate()

  const [NAME, setNAME] = useState(null)
  const [FATHER_NAME, setFatherName] = useState(null)
  const [MOTHER_NAME, setMotherName] = useState(null)
  const [PROFILE_PHOTO, setProfileFoto] = useState(null)
  const [ADDRESS, setAddress] = useState(null)
  const [WARD, setWard] = useState(null)
  const [SUBDISTRICT, setSubDistrict] = useState(null)
  const [REGENCY, setRegency] = useState(null)
  const [PROVINCE, setProvince] = useState(null)
  const [DATE_BIRTH, setDateBirth] = useState(null)
  const [KK, setKK] = useState(null)
  const [NIK, setNIK] = useState(null)
  const [POSYANDU, setPosyandu] = useState(null)
  const [AGE, setAge] = useState(null)
  const [WEIGHT, setWeight] = useState(null)
  const [BIRTH_WEIGHT, setBirthWeight] = useState(null)
  const [HEIGHT, setHeight] = useState(null)
  const [BORN_HEIGHT, setBornHeight] = useState(null)
  const [STUNTING, setStunting] = useState(false)

  useEffect(() => {
    setNAME(child.NAME)
    setFatherName(child.FATHER_NAME)
    setMotherName(child.MOTHER_NAME)
    setProfileFoto(child.PROFILE_PHOTO)
    setAddress(child.ADDRESS)
    setWard(child.WARD)
    setSubDistrict(child.SUBDISTRICT)
    setRegency(child.REGENCY)
    setProvince(child.PROVINCE)
    setDateBirth(child.DATE_BIRTH)
    setKK(child.KK)
    setNIK(child.NIK)
    setPosyandu(child.POSYANDU)
    setAge(child.AGE)
    setWeight(child.WEIGHT)
    setBirthWeight(child.BIRTH_WEIGHT)
    setHeight(child.HEIGHT)
    setBornHeight(child.BORN_HEIGHT)
    setStunting(child.STUNTING)
    console.log(child)
  }, [child])

  const handleProcess = async (e) => {
    e.preventDefault()
    try {
      const data = {
        ID: child._id,
        GUID_REPORT: guidReport,
        ...child,
        KK,
        NIK,
        NAME,
        DATE_BIRTH,
        FATHER_NAME,
        MOTHER_NAME,
        PROVINCE,
        REGENCY,
        SUBDISTRICT,
        WARD,
        ADDRESS,
        POSYANDU,
        PROFILE_PHOTO,
        AGE,
        BIRTH_WEIGHT,
        BORN_HEIGHT,
        HEIGHT,
        WEIGHT,
        STUNTING
      }
      const response = await SourceSurveyor.processDataAnak(data)
      console.log(response)
      navigate('/data-surveyor')
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.response.data.message
      })
    }
  }

  return (
    <div>
      <h1 className='text-center mb-5 font-bold text-lg'>Data Anak</h1>
      <form
        onSubmit={handleProcess}
        className='w-[30rem] border rounded-lg shadow-lg p-7 mb-7 grid grid-cols-1 gap-7'>
        <div className='flex flex-col gap-1'>
          <label>Foto Profil Anak</label>
          <img
            src={`https://absensi-selfie.pptik.id/data/kehadiran/image/${child.PROFILE_PHOTO}`}
            className='w-40 h-44 object-cover object-center border rounded-lg'
            alt='profile anak'
          />
        </div>

        <div className='flex flex-col gap-1'>
          <label>Nama Lengkap Anak</label>
          <input
            value={NAME}
            onChange={(e) => setNAME(e.target.value)}
            type='text'
            className='outline-none border-b-2 border-black p-2 mb-3'
            placeholder='Masukkan Nama Lengkap Anak'
          />
        </div>

        <div className='flex flex-col gap-1'>
          <label>Nama Ayah</label>
          <input
            value={FATHER_NAME}
            onChange={(e) => setFatherName(e.target.value)}
            type='text'
            className='outline-none border-b-2 border-black p-2 mb-3'
            placeholder='Masukkan Nama Ayah Dari Anak'
          />
        </div>

        <div className='flex flex-col gap-1'>
          <label>Nama Ibu</label>
          <input
            value={MOTHER_NAME}
            onChange={(e) => setMotherName(e.target.value)}
            type='text'
            className='outline-none border-b-2 border-black p-2 mb-3'
            placeholder='Masukkan Nama Ibu Dari Anak'
          />
        </div>

        <div className='flex flex-col gap-1'>
          <label>Foto Anak</label>
          <input
            value={PROFILE_PHOTO}
            onChange={(e) => setProfileFoto(e.target.value)}
            type='text'
            className='outline-none border-b-2 border-black p-2 mb-3'
            placeholder='Masukkan Gambar Anak'
          />
        </div>

        <div className='flex flex-col gap-1'>
          <label>Alamat</label>
          <input
            value={ADDRESS}
            onChange={(e) => setAddress(e.target.value)}
            type='text'
            className='outline-none border-b-2 border-black p-2 mb-3'
            placeholder='Masukkan Alamat'
          />
        </div>

        <div className='flex flex-col gap-1'>
          <label>Desa</label>
          <input
            value={WARD}
            onChange={(e) => setWard(e.target.value)}
            type='text'
            className='outline-none border-b-2 border-black p-2 mb-3'
            placeholder='Masukkan Kecamatan'
          />
        </div>

        <div className='flex flex-col gap-1'>
          <label>Kecamatan</label>
          <input
            value={SUBDISTRICT}
            onChange={(e) => setSubDistrict(e.target.value)}
            type='text'
            className='outline-none border-b-2 border-black p-2 mb-3'
            placeholder='Masukkan Kecamatan'
          />
        </div>

        <div className='flex flex-col gap-1'>
          <label>Kabupaten</label>
          <input
            value={REGENCY}
            onChange={(e) => setRegency(e.target.value)}
            type='text'
            className='outline-none border-b-2 border-black p-2 mb-3'
            placeholder='Masukkan Kabupaten'
          />
        </div>

        <div className='flex flex-col gap-1'>
          <label>Provinsi</label>
          <input
            value={PROVINCE}
            onChange={(e) => setProvince(e.target.value)}
            type='text'
            className='outline-none border-b-2 border-black p-2 mb-3'
            placeholder='Masukkan Provinsi'
          />
        </div>

        <div className='flex flex-col gap-1'>
          <label>Tanggal Lahir</label>
          <input
            value={DATE_BIRTH}
            onChange={(e) => setDateBirth(e.target.value)}
            type='text'
            className='outline-none border-b-2 border-black p-2'
            placeholder='Masukkan Tanggal Lahir Anak'
          />
        </div>

        <div className='flex flex-col gap-1'>
          <label>Umur</label>
          <input
            value={AGE}
            onChange={(e) => setAge(e.target.value)}
            type='text'
            className='outline-none border-b-2 border-black p-2 mb-3'
            placeholder='Masukkan Umur Anak'
          />
        </div>

        <div className='flex flex-col gap-1'>
          <label>Kartu Keluarga</label>
          <input
            value={KK}
            onChange={(e) => setKK(e.target.value)}
            type='text'
            className='outline-none border-b-2 border-black p-2'
            placeholder='Masukkan NIK'
          />
        </div>

        <div className='flex flex-col gap-1'>
          <label>NIK</label>
          <input
            value={NIK}
            onChange={(e) => setNIK(e.target.value)}
            type='text'
            className='outline-none border-b-2 border-black p-2'
            placeholder='Masukkan NIK'
          />
        </div>

        <div className='flex flex-col gap-1'>
          <label>Posyandu</label>
          <input
            value={POSYANDU}
            onChange={(e) => setPosyandu(e.target.value)}
            type='text'
            className='outline-none border-b-2 border-black p-2 mb-3'
            placeholder='Masukkan Posyandu Anak'
          />
        </div>

        <div className='flex flex-col gap-1'>
          <label>Berat Badan (Kg)</label>
          <input
            value={WEIGHT}
            onChange={(e) => setWeight(e.target.value)}
            type='text'
            className='outline-none border-b-2 border-black p-2 mb-3'
            placeholder='Masukkan Berat Badan Anak'
          />
        </div>

        <div className='flex flex-col gap-1'>
          <label>Berat Badan Saat Lahir (Kg)</label>
          <input
            value={BIRTH_WEIGHT}
            onChange={(e) => setBirthWeight(e.target.value)}
            type='text'
            className='outline-none border-b-2 border-black p-2 mb-3'
            placeholder='Masukkan Berat Badan Anak Saat Lahir'
          />
        </div>

        <div className='flex flex-col gap-1'>
          <label>Tinggi Badan (cm)</label>
          <input
            value={HEIGHT}
            onChange={(e) => setHeight(e.target.value)}
            type='text'
            className='outline-none border-b-2 border-black p-2 mb-3'
            placeholder='Masukkan Berat Badan Anak'
          />
        </div>

        <div className='flex flex-col gap-1'>
          <label>Tinggi Badan Saat Lahir (cm)</label>
          <input
            value={BORN_HEIGHT}
            onChange={(e) => setBornHeight(e.target.value)}
            type='text'
            className='outline-none border-b-2 border-black p-2 mb-3'
            placeholder='Masukkan Tinggi Badan Anak Saat Lahir'
          />
        </div>

        <div className='flex flex-col gap-1'>
          <label>Lingkar Kepala (Cm)</label>
          <input
            type='text'
            className='outline-none border-b-2 border-black p-2 mb-3'
            placeholder='Masukkan Lingkar Kepala anak'
          />
        </div>

        <div className='flex flex-col gap-1'>
          <label>Suhu Tubuh ({<spa>&#8451;</spa>})</label>
          <input
            type='text'
            className='outline-none border-b-2 border-black p-2 mb-3'
            placeholder='Masukkan Suhu Tubuh Anak'
          />
        </div>

        <div className='flex flex-col gap-1'>
          <label>Stunting</label>
          <select
            value={STUNTING || false}
            onChange={(e) => setStunting(e.target.value)}
            className='outline-none border-b-2 border-black p-2'
          >
            <option readOnly>Pilih Kondisi</option>
            <option value={true}>Iya</option>
            <option value={false}>Tidak</option>
          </select>
        </div>

        <div>
          <button className='bg-main hover:bg-secondary active:bg-main transition-all ease-in-out duration-100 p-2 rounded-md text-white w-full mt-10'>
            Proses
          </button>
        </div>
      </form>
    </div>
  )
}

export default FormProcessSurveyor
