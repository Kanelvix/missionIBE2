import React from 'react'
import arrow from '../../assets/Arrows/pagination.svg'

function PrevNextBtn( {dir, setCurrentPage, currentPage, totalPages, location} ) {

  const nextPage = () => {
    if (currentPage < totalPages){
      setCurrentPage(currentPage + 1);
    }
  }

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  return (
    <button
    className={`
      flex justify-center items-center transition-all rounded
      ${location === '/products'
        ? 'size-7 text-[--base-color] bg-[--light-gray-color-2] hover:text-[--dark-color] hover:bg-[--light-gray-color] border-2'
        : 'bg-[--selected-color] hover:bg-[--hover-color] active:bg-[--selected-color] size-10'
      }
    `}
    onClick={dir === "right" ? nextPage : prevPage}>
      <img src={arrow} alt="" className={dir === "right" ? 'rotate-180' : ''} />
    </button>
  )
}

export default PrevNextBtn