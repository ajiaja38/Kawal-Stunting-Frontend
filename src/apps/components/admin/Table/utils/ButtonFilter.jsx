import React from 'react'

const ButtonFilter = () => {
  return (
    <button className='bg-main hover:bg-secondary active:bg-main transition-all ease-in-out text-white p-2 rounded-lg flex gap-1 justify-center items-center'>
      Filter
      <i className="fa-solid fa-filter"></i>
    </button>
  )
}

export default ButtonFilter
