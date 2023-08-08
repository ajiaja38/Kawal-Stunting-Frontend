import React, { useEffect, useState } from 'react'
import Layout from './Layout'
import TableSurveyor from '../../components/admin/Table/TableSurveyor'
import { useDispatch } from 'react-redux'
import { setDataSurvey } from '../../redux/actions/actions'
import SourceSurveyor from '../../api/resource/SourceSurvey'
import jwtDecode from 'jwt-decode'

const DataSurveyor = () => {
  const dispatch = useDispatch()
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)

  const token = localStorage.getItem('token')
  const { company } = jwtDecode(token)

  const getAllDataSurvey = async () => {
    try {
      const data = {
        page: currentPage,
        limit: 5,
        company
      }

      const response = await SourceSurveyor.getAllDataSurvey(data)
      dispatch(setDataSurvey(response.data))
      setTotalPages(response.totalPages)
    } catch (error) {
      console.log(error.response.data.message)
    }
  }

  useEffect(() => {
    getAllDataSurvey()
  }, [dispatch, currentPage])
  return (
    <Layout>
      <TableSurveyor
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </Layout>
  )
}

export default DataSurveyor
