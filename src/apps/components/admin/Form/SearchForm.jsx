/* eslint-disable react/prop-types */
import React from 'react'

const SearchForm = ({ setSearch }) => {
  return (
    <input
      type='text'
      className='border rounded-lg outline-none p-2 '
      placeholder='Cari Nama Anak'
      onChange={(e) => setSearch(e.target.value)}
    />
  )
}

export default SearchForm
