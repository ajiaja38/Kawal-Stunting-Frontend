/* eslint-disable react/prop-types */
import React from 'react'
import NavbarAdmin from '../../components/admin/Navbar/NavbarAdmin'

const Layout = ({ children }) => {
  return (
    <>
      <NavbarAdmin/>
      <div className='flex flex-col justify-center items-center overflow-hidden'>
        <main className='w-full md:w-[79rem] mt-10'>
          {/* <div className='mb-5'>
            <h1>Stunting {'>'} Desa Sukabanjar</h1>
          </div> */}
          { children }
        </main>
      </div>
    </>
  )
}

export default Layout
