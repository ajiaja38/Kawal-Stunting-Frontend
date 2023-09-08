import React, { useEffect, useState } from 'react'
import Layout from './Layout'
import TableSurveyor from '../../components/admin/Table/TableSurveyor'
import { useDispatch } from 'react-redux'
import { setDataSurveyByCompany } from '../../redux/actions/actions'
import SourceSurveyor from '../../api/resource/SourceSurvey'
import Swal from 'sweetalert2'

const DataSurveyor = () => {
  const dispatch = useDispatch()
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)

  const getAllDataSurveyByCompany = async () => {
    try {
      const response = await SourceSurveyor.getAllDataSurveyPaginate(currentPage)
      dispatch(setDataSurveyByCompany(response.dataSurvey))
      setTotalPages(response.totalPages)
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.response.data.message
      })
    }
  }

  useEffect(() => {
    getAllDataSurveyByCompany()
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
