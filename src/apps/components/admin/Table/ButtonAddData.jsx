import React from 'react'
import { Link } from 'react-router-dom'

const ButtonAddData = () => {
  return (
    <Link to={'/data-anak/add'}>
      <button
        className='
          p-2 rounded-full
          text-white bg-main hover:bg-secondary active:bg-main
          transition-all ease-in-out duration-150
        '
      >
        Tambah Data
      </button>
    </Link>
  )
}

export default ButtonAddData
