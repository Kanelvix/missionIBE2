import React, { useState } from 'react'
import ProductsRow from '../molecules/ProductRow.jsx'
import Pagination from './Pagination.jsx'
import { deleteCourse } from '../../services/courses.js';
import { useLocation } from 'react-router';

function ProductList({loading, data, setEditing, fetchCourses}) {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  const handleDelete = async(id) => {
    await deleteCourse(id);
    fetchCourses();
  }

  const onEdit = (item) => {
    setEditing(item);
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  const lastRow = currentPage * rowsPerPage;
  const firstRow = lastRow - rowsPerPage;
  const currentRows = data.slice(firstRow, lastRow);

  const location = useLocation();

  return (
    <div className='bg-white p-5 rounded-lg border border-[--border-color] overflow-auto'>
      <p className='font-semibold text-[--dark-color] text-xl mb-4'>Daftar Produk {`(${data.length})`}</p>
      {
        loading ? <p className='font-semibold'>Loading...</p> : (
          <table className='w-full'>
            <thead className='text-[--base-color] bg-[--light-gray-color] border-b border-[--border-color]'>
              <tr>
                <th className='p-2'>Produk</th>
                <th className='p-2'>Harga</th>
                <th className='p-2'>Mentor</th>
                <th className='p-2'>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {currentRows.map((item) => (
                <ProductsRow key={item.id} title={item.title} desc={item.desc} price={item.price} mentor={item.name} role={item.role} onEdit={() => onEdit(item)} handleDelete={() => handleDelete(item.id)} />
              ))}
            </tbody>
          </table>
        )
      }
      <Pagination
        totalCourses={data.length}
        coursesPerPage={rowsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        location = {location.pathname}
      />
    </div>
  )
}

export default ProductList