/* eslint-disable react/prop-types */
import React from 'react'
import NavbarAdmin from '../../components/admin/Navbar/NavbarAdmin'

const Layout = ({ children }) => {
  return (
    <>
      <NavbarAdmin/>
      <div className='flex flex-col justify-center items-center overflow-hidden'>
        <main className='w-full md:w-[70rem] mt-10'>
          { children }
        </main>
      </div>
    </>
  )
}

export default Layout
