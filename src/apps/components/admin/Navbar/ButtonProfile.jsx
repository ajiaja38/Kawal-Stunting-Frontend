import React from 'react'
import { useNavigate } from 'react-router-dom'

const ButtonProfile = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    navigate('/')
    localStorage.removeItem('token')
  }

  return (
    <button
      onClick={handleLogout}
      className='
        bg-main hover:bg-secondary active:bg-main
        transition-all ease-in-out duration-100
        rounded-full
        py-2 px-4
        text-white
      '
    >
      Logout
    </button>
  )
}

export default ButtonProfile
