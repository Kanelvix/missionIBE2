// import PrevNextBtn from '../atoms/PrevNextBtn';

// const Pagination = ( {totalCourses, coursesPerPage, setCurrentPage, currentPage} ) => {
//   let pages = [];

//   for(let i = 1; i<= Math.ceil(totalCourses/coursesPerPage); i++) {
//     pages.push(i);
//   }

//   return (
//     <div className='flex gap-1 md:gap-2 justify-end'>
//       <PrevNextBtn setCurrentPage={setCurrentPage} currentPage={currentPage} totalPages={pages.length} />
//       {
//         pages.map((page, i) => {
//           return <button 
//             key={i}
//             onClick={() => setCurrentPage(page)}
//             className={`
//               text-sm font-semibold size-10 flex justify-center items-center rounded
//               ${page === currentPage ? 'bg-[--yellow-color] text-white' : 'text-[--base-color] hover:bg-[--light-yellow-color] hover:text-white duration-300 transition-all'}
//             `}
//           >{page}</button>
//         })
//       }
//       <PrevNextBtn dir="right" setCurrentPage={setCurrentPage} currentPage={currentPage} totalPages={pages.length} />
//     </div>
//   )