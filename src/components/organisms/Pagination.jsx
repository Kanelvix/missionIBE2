import React from 'react'
import PrevNextBtn from '../atoms/PrevNextBtn';

function Pagination( {totalCourses, coursesPerPage, setCurrentPage, currentPage, location} ) {
  const maxVisiblePages = 4;
  const totalPages = Math.ceil(totalCourses/coursesPerPage);

  let startPage = Math.max(
    1, currentPage - Math.floor(maxVisiblePages/2)
  );

  let endPage = startPage + maxVisiblePages;

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }

  const pages = [];

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <div className={`flex ${location === '/products' ? 'gap-3 justify-center' : 'gap-1 md:gap-2 justify-end'}`}>
      <PrevNextBtn setCurrentPage={setCurrentPage} currentPage={currentPage} totalPages={pages.length} location={location} />
      {
        pages.map((page, i) => {
          return <button 
            key={i}
            onClick={() => setCurrentPage(page)}
            className={`rounded flex justify-center items-center transition-all 
              ${
                location === '/products'
                ? `size-7 font-medium border-2
                ${page === currentPage 
                  ? 'bg-[--light-blue-color] text-[--blue-color]' 
                  : 'text-[--base-color] bg-[--light-gray-color-2] hover:text-[--dark-color] hover:bg-[--light-gray-color]'}`
                : `text-sm font-semibold size-10
                ${page === currentPage
                  ? 'bg-[--yellow-color] text-white'
                  : 'text-[--base-color] hover:bg-[--light-yellow-color-2] hover:text-white'}
              `}
            `}
          >{page}</button>
        })
      }
      <PrevNextBtn dir="right" setCurrentPage={setCurrentPage} currentPage={currentPage} totalPages={totalPages} location={location} />
    </div>
  )
}

export default Pagination