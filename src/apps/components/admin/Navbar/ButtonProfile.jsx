import React from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const ButtonProfile = () => {
  const navigate = useNavigate()

  const alert = () => {
    Swal.fire({
      icon: 'warning',
      title: 'Anda Ingin Logout?',
      showCancelButton: true,
      confirmButtonText: 'Logout',
      confirmButtonColor: '#d33'
    }).then((result) => {
      if (result.isConfirmed) {
        handleLogout()
      }
    })
  }

  const handleLogout = () => {
    navigate('/')
    localStorage.removeItem('token')
  }

  return (
    <button
      onClick={alert}
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
