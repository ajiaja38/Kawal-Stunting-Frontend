/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React from 'react'

const FormDokument = ({ image, FILE_KTP_Ayah, FILE_KTP_Ibu, FILE_KK, FILE_AKTA, handleImageAnak, handleImageKtpAyah, handleImageKtpIbu, handleImageKK, handleImageAkta, handleShowImage }) => {
  return (
    <div className='grid grid-cols-4 gap-4'>
      <div className='flex flex-col justify-start items-center gap-2'>
        <label className='font-bold'>Foto Anak</label>
        {image !== null && image !== '' && image !== 'N/A' && image !== 'profile.png'
          ? (
            <img
              src={image}
              className='w-60 h-60 object-cover object-center border'
              alt='Foto Anak'
              onClick={() => handleShowImage(image)}
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
              onClick={() => handleShowImage(FILE_KTP_Ayah)}
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
        {FILE_KTP_Ibu !== null && FILE_KTP_Ibu !== '' && FILE_KTP_Ibu !== 'N/A' && FILE_KTP_Ibu !== 'profile.png'
          ? (
            <img
              src={FILE_KTP_Ibu}
              className='w-60 h-60 object-cover object-center border'
              alt='KTP Ibu'
              onClick={() => handleShowImage(FILE_KTP_Ibu)}
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
        {FILE_KK !== null && FILE_KK !== '' && FILE_KK !== 'N/A' && FILE_KK !== 'profile.png'
          ? (
            <img
              src={FILE_KK}
              className='w-60 h-60 object-cover object-center border'
              alt='KK'
              onClick={() => handleShowImage(FILE_KK)}
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
        {FILE_AKTA !== null && FILE_AKTA !== '' && FILE_AKTA !== 'N/A' && FILE_AKTA !== 'profile.png'
          ? (
            <img
              src={FILE_AKTA}
              className='w-60 h-60 object-cover object-center border'
              alt='KTP Ayah'
              onClick={() => handleShowImage(FILE_AKTA)}
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
  )
}

export default FormDokument
