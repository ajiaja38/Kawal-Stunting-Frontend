/* eslint-disable react/prop-types */
import React from 'react'
import ReactPaginate from 'react-paginate'

const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected + 1)
  }

  return (
    <div className='my-5 flex justify-center'>
      <ReactPaginate
        pageCount={totalPages}
        pageRangeDisplayed={2}
        marginPagesDisplayed={1}
        onPageChange={handlePageChange}
        forcePage={currentPage - 1}
        containerClassName={'pagination flex justify-start w-fit rounded-md p-2'}
        activeClassName={'bg-gray-900 text-white'}
        previousLabel={<span className="px-2"><i className="fa-solid fa-backward"></i></span>}
        nextLabel={<span className="px-2"><i className="fa-solid fa-forward"></i></span>}
        breakClassName={'border-r border-gray-300'}
        breakLinkClassName={'px-2'}
        pageClassName={'border-r border-gray-300'}
        pageLinkClassName={'px-2'}
      />
    </div>
  )
}

export default Pagination
