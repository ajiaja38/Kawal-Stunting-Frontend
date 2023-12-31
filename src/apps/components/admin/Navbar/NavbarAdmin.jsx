import React from 'react'
import logo from '../../../../assets/image/Kawal-stunting-favicon.png'
import ButtonProfile from './ButtonProfile'
import { NavLink } from 'react-router-dom'
import jwtDecode from 'jwt-decode'
import { CompanyGuid } from '../../../api/resource/GuidCompany'

const NavbarAdmin = () => {
  const { COMPANY_GUID } = jwtDecode(localStorage.getItem('token'))
  const { itg } = CompanyGuid

  return (
    <div className='bg-white py-4 px-16 shadow-md sticky top-0 flex justify-between items-center text-sm z-[9999999]'>
      <div className='flex justify-center items-center gap-7'>
        <header className='w-24 flex justify-center items-center gap-1'>
          <h1 className='text-main font-semibold text-right'>Kawal Stunting</h1>
          <img
            src={logo}
            className='w-8'
          />
        </header>

        <NavLink to='/dashboard' className='navbar p-1'>
          <h2>Dashboard</h2>
        </NavLink>

        <NavLink to='/data-anak' className='navbar p-1'>
          <h2>Data Anak</h2>
        </NavLink>

        <NavLink to='/data-surveyor' className='navbar p-1'>
          <h2>Data Survey</h2>
        </NavLink>

        <NavLink to='/grafik' className='navbar p-1'>
          <h2>Grafik</h2>
        </NavLink>

      </div>

      <div className='flex items-center gap-3'>
      <h1 className='font-bold'>
        {COMPANY_GUID === itg ? 'KKN ITG GARUT' : 'PT.PKN'}
      </h1>
      <ButtonProfile/>
      </div>
    </div>
  )
}

export default NavbarAdmin
