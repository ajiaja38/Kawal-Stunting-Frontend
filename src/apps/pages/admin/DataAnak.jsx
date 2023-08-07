import React, { useState, useEffect } from 'react'
import Layout from './Layout'
import TableAdmin from '../../components/admin/Table/TableAdmin'
import { useDispatch } from 'react-redux'
import { setDataAnak } from '../../redux/actions/actions'
import SourceStuntingAPI from '../../api/resource/SourceStunting'

const DataAnak = () => {
  const dispatch = useDispatch()
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)

  const dataAnak = async () => {
    try {
      const response = await SourceStuntingAPI.getDataAnak(currentPage)
      dispatch(setDataAnak(response.data))
      setTotalPages(response.totalPages)
    } catch (error) {
      console.log(error.response.data.message)
    }
  }

  useEffect(() => {
    dataAnak()
  }, [dispatch, currentPage])

  return (
    <Layout>
      <TableAdmin
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </Layout>
  )
}

export default DataAnak
