import React from 'react'
import Layout from './Layout'
import TablePosyandu from '../../components/admin/Table/TablePosyandu'
import MapsStunting from '../../components/admin/Maps/MapsStunting'

const Posyandu = () => {
  return (
    <Layout>
      <div className='w-full flex gap-5'>
        <TablePosyandu/>
        <MapsStunting/>
      </div>
    </Layout>
  )
}

export default Posyandu
