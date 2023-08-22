/* eslint-disable react/prop-types */
import React from 'react'
import ButtonAddData from './utils/ButtonAddData'
import { Link } from 'react-router-dom'
// import Pagination from './Pagination'
import { useSelector } from 'react-redux'
import SearchForm from '../Form/SearchForm'
import ButtonFilter from './utils/ButtonFilter'

const TableAdmin = ({ totalPages, currentPage, setCurrentPage }) => {
  const { dataAnak } = useSelector((state) => state.data)

  return (
    <div className='w-full mb-10'>

      <div className='text-right mb-2 flex gap-2 justify-end'>
        <SearchForm/>
        <ButtonFilter/>
        <ButtonAddData/>
      </div>

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
                Foto
              </th>
              <th
                className="whitespace-nowrap px-4 py-2 text-left font-semibold text-gray-900"
              >
                Nama Anak
              </th>
              <th
                className="whitespace-nowrap px-4 py-2 text-left font-semibold text-gray-900"
              >
                Tanggal Lahir
              </th>
              <th
                className="whitespace-nowrap px-4 py-2 text-left font-semibold text-gray-900"
              >
                Nama Ibu
              </th>
              <th
                className="whitespace-nowrap px-4 py-2 text-left font-semibold text-gray-900"
              >
                Lokasi
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
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700 font-semibold text-center">{index + 1}</td>
                  <td className="whitespace-normal px-4 py-2 text-gray-700">
                    <img
                      src='http://absensi-selfie.pptik.id/data/kehadiran/image/SURVEYOR-1e9108da-a458-4f29-b7a2-bf37c88fc4cf1691808160-PPTIK.png'
                      alt='foto anak'
                      className='rounded-full w-14 h-14 object-cover object-center shadow-sm'
                    />
                  </td>
                  <td className="whitespace-normal px-4 py-2 text-gray-700">{data.NAME}</td>
                  <td className="whitespace-normal px-4 py-2 text-gray-700">-</td>
                  <td className="whitespace-normal px-4 py-2 text-gray-700">-</td>
                  <td className="whitespace-normal px-4 py-2 text-gray-700">-</td>
                  <td className="whitespace-nowrap px-4 py-2 text-center">
                    <div className='flex gap-2 justify-center items-center'>
                      <Link to={`/data-anak/${data.GUID}`}>
                        <button
                          className="inline-block rounded transition-all ease-in-out bg-main hover:bg-secondary active:bg-main px-4 py-2 text-xs font-medium text-white"
                        >
                          Detail
                        </button>
                      </Link>
                      <button
                        className="inline-block rounded transition-all ease-in-out bg-red-500 hover:bg-red-200 active:bg-red-500 px-4 py-2 text-xs font-medium text-white"
                      >
                        Hapus
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
      {/* <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      /> */}
    </div>
  )
}

export default TableAdmin
