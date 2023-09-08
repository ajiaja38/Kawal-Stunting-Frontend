/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'
import Swal from 'sweetalert2'
import SourceSurveyor from '../../../api/resource/SourceSurvey'
import Pagination from '../Table/Pagination'

const FormHistory = ({ guid, nama }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [dataSurvey, setDataSurvey] = useState([])

  const getHistorSurveyDetailAnak = async () => {
    try {
      const response = await SourceSurveyor.getAllDataSurveyPaginateWithGuidAnak(guid, currentPage)
      console.log(response)
      setTotalPages(response.totalPages)
      setDataSurvey(response.dataSurvey)
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.response.data.message
      })
    }
  }

  const formatDate = (inputDate) => {
    const date = new Date(inputDate)
    const year = date.getFullYear()
    const month = date.getMonth()
    const day = date.getDate()

    const monthNames = [
      'Januari',
      'Februari',
      'Maret',
      'April',
      'Mei',
      'Juni',
      'Juli',
      'Agustus',
      'September',
      'Oktober',
      'November',
      'Desember'
    ]

    const formattedMonth = monthNames[month]
    const formattedDay = day < 10 ? `0${day}` : day

    return `${formattedDay} ${formattedMonth} ${year}`
  }

  useEffect(() => {
    getHistorSurveyDetailAnak()
  }, [guid, currentPage])

  return (
    <div>
      <h3 className='font-semibold'>History Survey {nama}</h3>
      {dataSurvey
        ? (
          <div className="w-full mt-3">
            <div
              className="
              bg-gray-50
              shadow-lg
              border
              rounded-lg
              p-3
              overflow-y-auto
              w-full
            "
            >
              <table className="min-w-full divide-y-2 overflow-auto divide-gray-200 text-sm">
                <thead>
                  <tr>
                    <th className="whitespace-nowrap px-4 py-2 text-left font-semibold text-gray-900">
                      No
                    </th>
                    <th className="whitespace-nowrap px-4 py-2 text-left font-semibold text-gray-900">
                      Berat Badan
                    </th>
                    <th className="whitespace-nowrap px-4 py-2 text-left font-semibold text-gray-900">
                      Tinggi Badan
                    </th>
                    <th className="whitespace-nowrap px-4 py-2 text-left font-semibold text-gray-900">
                      Lingkar Kepala
                    </th>
                    <th className="whitespace-nowrap px-4 py-2 text-left font-semibold text-gray-900">
                      Keterangan
                    </th>
                    <th className="whitespace-nowrap px-4 py-2 text-left font-semibold text-gray-900">
                      Tanggal
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                  {dataSurvey.map((data, index) => (
                    <tr
                      key={index}
                      className="hover:bg-white transition-all ease-in-out"
                    >
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700 font-semibold text-left">
                        {index + 1 + (currentPage - 1) * 30}.
                      </td>
                      <td className="whitespace-normal px-4 py-2 text-gray-700">
                        {data.dataSurvey.berat_badan === 0 ? '-' : `${data.dataSurvey.berat_badan} Kg`}
                      </td>
                      <td className="whitespace-normal px-4 py-2 text-gray-700">
                        {data.dataSurvey.tinggi_badan === 0 ? '-' : `${data.dataSurvey.tinggi_badan} Cm`}
                      </td>
                      <td className="whitespace-normal px-4 py-2 text-gray-700">
                        {data.dataSurvey.lingkar_kepala === 0 ? '-' : `${data.dataSurvey.lingkar_kepala} Cm`}
                      </td>
                      <td className="whitespace-normal px-4 py-2 text-gray-700">
                        {data.dataSurvey.catatan === '' ? '-' : data.dataSurvey.catatan}
                      </td>
                      <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                        {formatDate(data.updatedAt)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
          )
        : (
            <div className='mt-3'>Belum pernah dilakukan survey untuk data anak ini</div>
          )
      }
    </div>
  )
}

export default FormHistory
