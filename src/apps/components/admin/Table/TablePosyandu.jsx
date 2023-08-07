import React from 'react'
import Pagination from './Pagination'
import ButtonAddData from './ButtonAddData'
import posyandu from '../../../api/dataDummyPosyandu'
import { Link } from 'react-router-dom'

const TablePosyandu = () => {
  return (
    <div className='w-[50rem]'>

      <div className='text-right'>
        <ButtonAddData/>
      </div>

      <div className='
        bg-gray-100
        shadow-sm
        border
        rounded-lg
        p-3
        mt-4
        overflow-y-auto
        w-full
      '>
        <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
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
              posyandu.map((data, index) => (
                <tr
                  key={index}
                  className='hover:bg-white transition-all ease-in-out'
                >
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700 font-semibold text-center">{index + 1}</td>
                  <td className="whitespace-normal px-4 py-2 text-gray-700">{data.nama}</td>
                  <td className="whitespace-normal px-4 py-2 text-gray-700">{data.alamat}</td>
                  <td className="whitespace-nowrap px-4 py-2 text-center">
                    <Link>
                      <button
                        className="inline-block rounded transition-all ease-in-out bg-main hover:bg-secondary active:bg-main px-4 py-2 text-xs font-medium text-white"
                      >
                        Detail
                      </button>
                    </Link>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
      <Pagination/>
    </div>
  )
}

export default TablePosyandu
