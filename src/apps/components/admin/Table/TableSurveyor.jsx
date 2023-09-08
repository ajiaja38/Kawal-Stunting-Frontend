/* eslint-disable react/prop-types */
import React from 'react'
import { useSelector } from 'react-redux'
import Pagination from './Pagination'

const TableSurveyor = ({ totalPages, currentPage, setCurrentPage }) => {
  const { dataSurveyByCompany } = useSelector((state) => state.data)

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

  return (
    <div className="w-full">
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
                Nama Surveyor
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-left font-semibold text-gray-900">
                Nama Anak
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-left font-semibold text-gray-900">
                Deskripsi
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-left font-semibold text-gray-900">
                Tanggal
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {dataSurveyByCompany.map((data, index) => (
              <tr
                key={index}
                className="hover:bg-white transition-all ease-in-out"
              >
                <td className="whitespace-nowrap px-4 py-2 text-gray-700 font-semibold text-center">
                  {index + 1 + (currentPage - 1) * 30}.
                </td>
                <td className="whitespace-normal px-4 py-2 text-gray-700">
                  {data.namaSurveyor}
                </td>
                <td className="whitespace-normal px-4 py-2 text-gray-700">
                  {data.namaAnak}
                </td>
                <td className="whitespace-normal px-4 py-2 text-gray-700">
                  {data.dataSurvey.catatan}
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
}

export default TableSurveyor
