import React, { useState, useEffect } from 'react'
import Layout from './Layout'
import TableAdmin from '../../components/admin/Table/TableAdmin'
import { useDispatch } from 'react-redux'
import { setDataAnak } from '../../redux/actions/actions'
import SourceStuntingAPI from '../../api/resource/SourceStunting'
import jwtDecode from 'jwt-decode'

const DataAnak = () => {
  const dispatch = useDispatch()
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)

  const token = localStorage.getItem('token')
  const { company } = jwtDecode(token)

  const dataAnak = async (company) => {
    try {
      const response = await SourceStuntingAPI.getDataAnak(company, currentPage)
      dispatch(setDataAnak(response.data))
      setTotalPages(response.totalPages)
    } catch (error) {
      console.log(error.response.data.message)
    }
  }

  useEffect(() => {
    dataAnak(company)
  }, [company, dispatch, currentPage])

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
