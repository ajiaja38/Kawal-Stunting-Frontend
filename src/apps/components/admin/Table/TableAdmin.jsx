/* eslint-disable react/prop-types */
import React from 'react'
// import ButtonAddData from './ButtonAddData'
import { Link } from 'react-router-dom'
import Pagination from './Pagination'
import { useSelector } from 'react-redux'

const TableAdmin = ({ totalPages, currentPage, setCurrentPage }) => {
  const { dataAnak } = useSelector((state) => state.data)

  return (
    <div className='w-full'>

      {/* <div className='text-right mb-2'>
        <ButtonAddData/>
      </div> */}

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
                Nama Lengkap
              </th>
              <th
                className="whitespace-nowrap px-4 py-2 text-left font-semibold text-gray-900"
              >
                Tanggal Lahir
              </th>
              <th
                className="whitespace-nowrap px-4 py-2 text-left font-semibold text-gray-900"
              >
                Nama Ayah
              </th>
              <th
                className="whitespace-nowrap px-4 py-2 text-left font-semibold text-gray-900"
              >
                Alamat
              </th>
              <th
                className="whitespace-nowrap px-4 py-2 text-center font-semibold text-gray-900"
              >
                Aksi
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {
              dataAnak.map((data, index) => (
                <tr
                  key={index}
                  className='hover:bg-white transition-all ease-in-out'
                >
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700 font-semibold text-center">{index + 1 + (currentPage - 1) * 5}</td>
                  <td className="whitespace-normal px-4 py-2 text-gray-700">{data.NAME}</td>
                  <td className="whitespace-normal px-4 py-2 text-gray-700">{data.DATE_BIRTH}</td>
                  <td className="whitespace-normal px-4 py-2 text-gray-700">{data.FATHER_NAME}</td>
                  <td className="whitespace-normal px-4 py-2 text-gray-700">{data.ADDRESS}</td>
                  <td className="whitespace-nowrap px-4 py-2 text-center flex justify-center items-center gap-2">
                    <Link to={`/data-anak/${data.GUID}`}>
                      <button
                        className="inline-block rounded transition-all ease-in-out bg-main hover:bg-secondary active:bg-main px-4 py-2 text-xs font-medium text-white"
                      >
                        Detail
                      </button>
                    </Link>
                    {/* <button
                      className="inline-block rounded transition-all ease-in-out bg-red-500 hover:bg-red-200 active:bg-red-500 px-4 py-2 text-xs font-medium text-white"
                    >
                      Hapus
                    </button> */}
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

export default TableAdmin
