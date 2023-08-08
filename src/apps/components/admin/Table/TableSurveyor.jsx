/* eslint-disable react/prop-types */
import React from 'react'
import { useSelector } from 'react-redux'
import Pagination from './Pagination'
import { Link } from 'react-router-dom'

const TableSurveyor = ({ totalPages, currentPage, setCurrentPage }) => {
  const { dataSurvey } = useSelector((state) => state.data)

  return (
    <div className='w-full'>

      <div className='
        bg-gray-50
        shadow-lg
        border
        rounded-lg
        p-3
        overflow-y-auto
        w-full
      '>
        <table className="min-w-full divide-y-2 overflow-auto divide-gray-200 text-sm">
          <thead>
            <tr>
              <th
                className="whitespace-nowrap px-4 py-2 text-left font-semibold text-gray-900"
              >
                No
              </th>
              <th
                className="whitespace-nowrap px-4 py-2 text-left font-semibold text-gray-900"
              >
                Surveyor
              </th>
              <th
                className="whitespace-nowrap px-4 py-2 text-left font-semibold text-gray-900"
              >
                Nama
              </th>
              <th
                className="whitespace-nowrap px-4 py-2 text-left font-semibold text-gray-900"
              >
                Tipe Laporan
              </th>
              <th
                className="whitespace-nowrap px-4 py-2 text-left font-semibold text-gray-900"
              >
                Deskripsi
              </th>
              <th
                className="whitespace-nowrap px-4 py-2 text-left font-semibold text-gray-900"
              >
                Foto
              </th>
              <th
                className="whitespace-nowrap px-4 py-2 text-center font-semibold text-gray-900"
              >
                Status
              </th>
              <th
                className="whitespace-nowrap px-4 py-2 text-center font-semibold text-gray-900"
              >
                Proses
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {
              dataSurvey.map((data, index) => (
                <tr
                  key={index}
                  className='hover:bg-white transition-all ease-in-out'
                >
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700 font-semibold text-center">{index + 1 + (currentPage - 1) * 10}.</td>
                  <td className="whitespace-normal px-4 py-2 text-gray-700">{data.SURVEYOR}</td>
                  <td className="whitespace-normal px-4 py-2 text-gray-700">{data.NAME}</td>
                  <td className="whitespace-normal px-4 py-2 text-gray-700">{data.REPORT_TYPES}</td>
                  <td className="whitespace-normal px-4 py-2 text-gray-700">{data.DESCRIPTION}</td>
                  <td className="whitespace-normal px-4 py-2 text-gray-700">
                    <img
                      src={`https://absensi-selfie.pptik.id/${data.IMAGE}`}
                      className='w-20 h-14 object-center object-cover'
                    />
                  </td>
                  <td className="whitespace-normal text-sm text-center px-4 py-2 text-gray-700">
                    {
                      data.PROCESS
                        ? (<p className='bg-green-300 w-32 p-1 inline-block rounded-full'>Sudah Di Proses</p>)
                        : (<p className='bg-red-200 w-32 p-1 inline-block rounded-full'>Belum Di Proses</p>)
                    }
                  </td>
                  <td className="whitespace-normal text-center px-4 py-2 text-gray-700">
                    <Link to={`/data-surveyor/process/${data.GUID_REPORT}/${data.GUID_RESULT}/${data.NAME}`}>
                      <button
                        disabled={!!data.PROCESS}
                        className=' text-white rounded-md bg-main hover:bg-secondary active:bg-main p-2 transition-all ease-linear duration-100'
                      >
                        Proses
                      </button>
                    </Link>
                  </td>
                </tr>
              ))
            }
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
