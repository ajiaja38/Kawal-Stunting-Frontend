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
  const [search, setSearch] = useState('')

  const token = localStorage.getItem('token')
  const { COMPANY_GUID } = jwtDecode(token)

  const dataAnak = async (COMPANY_GUID) => {
    try {
      console.log(search)
      const response = await SourceStuntingAPI.getAllDataAnakPaginate(search, COMPANY_GUID, currentPage)
      dispatch(setDataAnak(response.Anak))
      setTotalPages(response.totalPages)
    } catch (error) {
      console.log(error.response.data.message)
    }
  }

  useEffect(() => {
    dataAnak(COMPANY_GUID)
  }, [search, COMPANY_GUID, dispatch, currentPage])

  return (
    <Layout>
      <TableAdmin
        setSearch={setSearch}
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </Layout>
  )
}

export default DataAnak
