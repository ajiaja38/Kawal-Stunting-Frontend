/* eslint-disable react/prop-types */
import React from 'react'
// import ButtonAddData from './utils/ButtonAddData'
import { Link } from 'react-router-dom'
import Pagination from './Pagination'
import { useSelector } from 'react-redux'
import SearchForm from '../Form/SearchForm'
// import ButtonFilter from './utils/ButtonFilter'

const TableAdmin = ({ setSearch, totalPages = 1, currentPage = 1, setCurrentPage }) => {
  const { dataAnak } = useSelector((state) => state.data)

  return (
    <div className='w-full mb-10'>

      <div className='text-right mb-2 flex gap-2 justify-end'>
        <SearchForm setSearch={setSearch}/>
        {/* <ButtonFilter/> */}
        {/* <ButtonAddData/> */}
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
                Status
              </th>
              <th
                className="whitespace-nowrap px-4 py-2 text-center font-semibold text-gray-900"
              >
                Aksi
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
          {dataAnak === undefined
            ? (
              <tr>
                <td colSpan="7" className="px-4 py-2 text-center text-gray-700">
                  Tidak ada data anak yang tersedia.
                </td>
              </tr>
              )
            : (
                dataAnak.map((data, index) => (
                <tr
                  key={index}
                  className='hover:bg-white transition-all ease-in-out'
                >
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700 font-semibold text-center">{index + 1 + (currentPage - 1) * 30}.</td>
                  <td className="whitespace-normal px-4 py-2 text-gray-700">
                    {
                      data.image !== null && data.image !== '' && data.image !== 'N/A' && data.image !== 'profile.png'
                        ? <img
                            src={data.image}
                            alt='foto anak'
                            className='rounded-full w-12 h-12 object-cover object-center shadow-sm'
                          />
                        : <svg
                            className="w-12 h-12 p-1 bg-gray-300 rounded-full text-white -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path
                              fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd">
                            </path>
                          </svg>
                    }
                  </td>
                  <td className="whitespace-normal px-4 py-2 text-gray-700">{data.nama}</td>
                  <td className="whitespace-normal px-4 py-2 text-gray-700">{data.tanggal_lahir}</td>
                  <td className="whitespace-normal px-4 py-2 text-gray-700">{data.nama_ibu}</td>
                  <td className="whitespace-normal px-4 py-2 text-gray-700">{data.alamat}</td>
                  <td className="whitespace-normal px-4 py-2 text-center text-gray-700">{
                    data.is_valid
                      ? <span className='bg-green-400 rounded-full px-2 w-28 text-center text-white inline-block'>Valid</span>
                      : <span className='bg-red-400 rounded-full px-2 w-28 text-center text-white inline-block'>Belum Valid</span>
                  }</td>
                  <td className="whitespace-nowrap px-4 py-2 text-center">
                    <div className='flex gap-2 justify-center items-center'>
                      <Link to={`/data-anak/${data.guid}`}>
                        <button
                          className='inline-block rounded transition-all ease-in-out bg-main hover:bg-secondary active:bg-main  px-4 py-2 text-xs font-medium text-white'
                        >
                          Detail
                        </button>
                      </Link>
                    </div>
                  </td>
                </tr>
                ))
              )}
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
