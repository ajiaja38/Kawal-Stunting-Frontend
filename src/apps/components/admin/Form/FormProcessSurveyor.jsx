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
  const [ADDRESS, setAddress] = useState(null)
  const [DATE_BIRTH, setDateBirth] = useState(null)
  const [KK, setKK] = useState(null)
  const [NIK, setNIK] = useState(null)
  const [EDUCATION, setEducation] = useState(null)
  const [POSYANDU, setPosyandu] = useState(null)
  const [AGE, setAge] = useState(null)
  const [WEIGHT, setWeight] = useState(null)
  const [BIRTH_WEIGHT, setBirthWeight] = useState(null)
  const [HEIGHT, setHeight] = useState(null)
  const [BORN_HEIGHT, setBornHeight] = useState(null)
  const [STUNTING, setStunting] = useState(false)
  const [STATUS, setStatus] = useState(false)

  useEffect(() => {
    setNAME(child.NAME)
    setFatherName(child.FATHER_NAME)
    setMotherName(child.MOTHER_NAME)
    setAddress(child.ADDRESS)
    setDateBirth(child.DATE_BIRTH)
    setKK(child.KK)
    setNIK(child.NIK)
    setEducation(child.EDUCATION)
    setPosyandu(child.POSYANDU)
    setAge(child.AGE)
    setWeight(child.WEIGHT)
    setBirthWeight(child.BIRTH_WEIGHT)
    setHeight(child.HEIGHT)
    setBornHeight(child.BORN_HEIGHT)
    setStunting(child.STUNTING)
    setStatus(child.STATUS)
    console.log(child._id)
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
        STATUS,
        DATE_BIRTH,
        FATHER_NAME,
        MOTHER_NAME,
        EDUCATION,
        ADDRESS,
        POSYANDU,
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
          <label>Nama Lengkap</label>
          <input
            value={NAME || ''}
            onChange={(e) => setNAME(e.target.value)}
            type='text'
            className='outline-none border-b-2 border-black p-2 mb-3'
            placeholder='Masukkan Nama Lengkap Anak'
          />
        </div>

        <div className='flex flex-col gap-1'>
          <label>Nama Ayah</label>
          <input
            value={FATHER_NAME || ''}
            onChange={(e) => setFatherName(e.target.value)}
            type='text'
            className='outline-none border-b-2 border-black p-2 mb-3'
            placeholder='Masukkan Nama Ayah Dari Anak'
          />
        </div>

        <div className='flex flex-col gap-1'>
          <label>Nama Ibu</label>
          <input
            value={MOTHER_NAME || ''}
            onChange={(e) => setMotherName(e.target.value)}
            type='text'
            className='outline-none border-b-2 border-black p-2 mb-3'
            placeholder='Masukkan Nama Ibu Dari Anak'
          />
        </div>

        <div className='flex flex-col gap-1'>
          <label>Alamat</label>
          <input
            value={ADDRESS || ''}
            onChange={(e) => setAddress(e.target.value)}
            type='text'
            className='outline-none border-b-2 border-black p-2 mb-3'
            placeholder='Masukkan Alamat'
          />
        </div>

        <div className='flex flex-col gap-1'>
          <label>Tanggal Lahir</label>
          <input
            value={DATE_BIRTH || ''}
            onChange={(e) => setDateBirth(e.target.value)}
            type='text'
            className='outline-none border-b-2 border-black p-2'
            placeholder='Masukkan Tanggal Lahir Anak'
          />
        </div>

        <div className='flex flex-col gap-1'>
          <label>Status</label>
          <input
            value={STATUS || ''}
            onChange={(e) => setStatus(e.target.value)}
            type='text'
            className='outline-none border-b-2 border-black p-2'
            placeholder='Masukkan Status'
          />
        </div>

        <div className='flex flex-col gap-1'>
          <label>Umur</label>
          <input
            value={AGE || ''}
            onChange={(e) => setAge(e.target.value)}
            type='text'
            className='outline-none border-b-2 border-black p-2 mb-3'
            placeholder='Masukkan Umur Anak'
          />
        </div>

        <div className='flex flex-col gap-1'>
          <label>Kartu Keluarga</label>
          <input
            value={KK || ''}
            onChange={(e) => setKK(e.target.value)}
            type='text'
            className='outline-none border-b-2 border-black p-2'
            placeholder='Masukkan NIK'
          />
        </div>

        <div className='flex flex-col gap-1'>
          <label>NIK</label>
          <input
            value={NIK || ''}
            onChange={(e) => setNIK(e.target.value)}
            type='text'
            className='outline-none border-b-2 border-black p-2'
            placeholder='Masukkan NIK'
          />
        </div>

        <div className='flex flex-col gap-1'>
          <label>Pendidikan</label>
          <input
            value={EDUCATION || ''}
            onChange={(e) => setEducation(e.target.value)}
            type='text'
            className='outline-none border-b-2 border-black p-2 mb-3'
            placeholder='Masukkan Pendidikan Anak'
          />
        </div>

        <div className='flex flex-col gap-1'>
          <label>Posyandu</label>
          <input
            value={POSYANDU || ''}
            onChange={(e) => setPosyandu(e.target.value)}
            type='text'
            className='outline-none border-b-2 border-black p-2 mb-3'
            placeholder='Masukkan Posyandu Anak'
          />
        </div>

        <div className='flex flex-col gap-1'>
          <label>Berat Badan</label>
          <input
            value={`${WEIGHT || 0} Kg`}
            onChange={(e) => setWeight(e.target.value)}
            type='text'
            className='outline-none border-b-2 border-black p-2 mb-3'
            placeholder='Masukkan Berat Badan Anak'
          />
        </div>

        <div className='flex flex-col gap-1'>
          <label>Berat Badan Saat Lahir</label>
          <input
            value={`${BIRTH_WEIGHT || ''} Kg`}
            onChange={(e) => setBirthWeight(e.target.value)}
            type='text'
            className='outline-none border-b-2 border-black p-2 mb-3'
            placeholder='Masukkan Berat Badan Anak Saat Lahir'
          />
        </div>

        <div className='flex flex-col gap-1'>
          <label>Tinggi Badan</label>
          <input
            value={`${HEIGHT || 0} Cm`}
            onChange={(e) => setHeight(e.target.value)}
            type='text'
            className='outline-none border-b-2 border-black p-2 mb-3'
            placeholder='Masukkan Berat Badan Anak'
          />
        </div>

        <div className='flex flex-col gap-1'>
          <label>Tinggi Badan Saat Lahir</label>
          <input
            value={`${BORN_HEIGHT || 0} Cm`}
            onChange={(e) => setHeight(e.target.value)}
            type='text'
            className='outline-none border-b-2 border-black p-2 mb-3'
            placeholder='Masukkan Tinggi Badan Anak Saat Lahir'
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
