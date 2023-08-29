import React, { useState, useEffect } from 'react'
import loginLogo from '../../../assets/image/login-logo.png'
import logo from '../../../assets/image/Kawal-stunting-favicon.png'
import logoMerge from '../../../assets/image/pt_pkn.png'
import { Link, useNavigate } from 'react-router-dom'
import SourceAuthAPI from '../../api/resource/SourceAuth'
import Swal from 'sweetalert2'

const LoginPage = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [token, setToken] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const data = { email, password }
      const response = await SourceAuthAPI.loginNest(data)
      localStorage.setItem('token', response)
      setToken(response)
      Swal.fire(
        'Sukses!',
        'Berhasil Login!',
        'success'
      )
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.response.data.message
      })
      console.log(error.response.data.message)
    }
  }

  useEffect(() => {
    if (token) {
      navigate('/dashboard')
    }
  }, [token, navigate])

  return (
    <div className='w-full h-screen grid grid-cols-2 gap-2 place-items-center'>

      <div className='w-full h-full bg-main flex justify-center items-center'>
        <img
          src={loginLogo}
          alt='Login Logo'
          className='w-[80%]'
        />
      </div>

      <div className='w-full h-full flex justify-center items-center'>
        <div className='w-[33rem] p-2'>
          <header className='w-[27rem] flex justify-center items-center gap-1 mb-6'>
            <h1 className='text-main text-xl font-bold text-right'>Kawal Stunting</h1>
            <img
              src={logo}
              className='w-11'
            />
            <img
              src={logoMerge}
              className='w-72'
            />
          </header>
          <main className='p-2 grid grid-cols-1 gap-4'>
            <h2 className='font-bold text-5xl'>Login</h2>
            <h3 className='font-bold text-sm'>
              Belum Punya Akun?
              <Link><span className='text-main hover:text-secondary'> Registrasi Disini</span></Link>
            </h3>
            <form onSubmit={handleLogin}>
              <div className='mt-3 flex flex-col gap-2'>
                <label className='font-bold'>E-Mail</label>
                <input
                  type='text'
                  placeholder='Masukkan Email Anda'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className='outline-none ring-2 ring-main focus:ring-[#333333] p-4 rounded-full transition-all ease-in-out duration-200'
                />
              </div>

              <div className='mt-3 flex flex-col gap-2'>
                <label className='font-bold'>Password</label>
                <input
                  type='password'
                  placeholder='Masukkan Password Anda'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className='outline-none ring-2 ring-main focus:ring-[#333333] p-4 rounded-full transition-all ease-in-out duration-200'
                />
                <span className='font-bold text-sm text-right hover:text-main'>
                  <Link>*Lupa Password</Link>
                </span>
              </div>

              <button
                className='bg-gray-900 hover:bg-gray-700 active:bg-gray-900 text-white w-full rounded-full p-4 mt-7 transition-all ease-in-out duration-100'
              >
                Login
              </button>

            </form>
          </main>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
