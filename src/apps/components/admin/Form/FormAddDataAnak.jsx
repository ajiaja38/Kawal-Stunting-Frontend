import React from 'react'

const FormAddDataAnak = () => {
  return (
    <div className='w-full pb-10 flex justify-center items-center'>
      <div className='p-6 w-3/4 bg-white rounded-md shadow-lg border'>
        <h1 className='text-2xl font-bold'>
          Tambah Data Anak
        </h1>
        <form className='mt-5 grid grid-cols-2 gap-5'>
          <div className='flex flex-col gap-2'>
            <label>Nama Lengkap</label>
            <input
              type='text'
              className='outline-none border-b-2 border-black p-2'
              placeholder='Masukkan Nama Lengkap Anak'
            />
          </div>

          <div className='flex flex-col gap-2'>
            <label>Nama Ayah</label>
            <input
              type='text'
              className='outline-none border-b-2 border-black p-2'
              placeholder='Masukkan Nama Ayah dari Anak'
            />
          </div>

          <div className='flex flex-col gap-2'>
            <label>Nama Ibu</label>
            <input
              type='text'
              className='outline-none border-b-2 border-black p-2'
              placeholder='Masukkan Nama Ibu dari Anak'
            />
          </div>

          <div className='flex flex-col gap-2'>
            <label>Alamat</label>
            <input
              type='text'
              className='outline-none border-b-2 border-black p-2'
              placeholder='Masukkan Alamat Anak'
            />
          </div>

          <div className='flex flex-col gap-2'>
            <label>Jenis Kelamin</label>
            <select className='outline-none border-b-2 border-black p-2'>
              <option>Laki-Laki</option>
              <option>Perempuan</option>
            </select>
          </div>

          <div className='flex flex-col gap-1'>
            <label>Tanggal Lahir</label>
            <input
              type='date'
              className='outline-none border-b-2 border-black p-2'
              placeholder='Masukkan Tanggal Lahir Anak'
            />
          </div>

          <div className='flex flex-col gap-2'>
            <label>Foto Anak</label>
            <input
              type='file'
              className='outline-none border-b-2 border-black p-2'
              placeholder='Pilih Foto Anak'
            />
          </div>

          <div className=''>
            <button className='bg-main hover:bg-secondary active:bg-main transition-all ease-in-out duration-100 p-2 rounded-md text-white w-full mt-10'>
              Tambah Data Anak
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default FormAddDataAnak
