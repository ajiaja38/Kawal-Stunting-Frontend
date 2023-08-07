import React from 'react'
import Layout from './Layout'
import FormDetailAnak from '../../components/admin/Form/FormDetailAnak'
import { useParams } from 'react-router-dom'

const DetailDataAnak = () => {
  const { id } = useParams()
  return (
    <Layout>
      <div className='w-full flex gap-5'>
        <FormDetailAnak guid={id}/>
      </div>
    </Layout>
  )
}

export default DetailDataAnak
