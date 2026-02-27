import React from 'react'
import ProductsRow from '../molecules/ProductRow.jsx'
import axios from 'axios'

function ProductList({loading, data, setEditing, fetchCourses}) {
  const deleteCourse = async(id) => {
    await axios.delete(`https://699fde8d3188b0b1d536fff8.mockapi.io/api/v1/courses/${id}`)
    fetchCourses();
  }

  const onEdit = (item) => {
    setEditing(item);
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
  
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
              {data.map((item) => (
                <ProductsRow key={item.id} title={item.title} desc={item.desc} price={item.price} mentor={item.name} role={item.role} onEdit={() => onEdit(item)} handleDelete={() => deleteCourse(item.id)} />
              ))}
            </tbody>
          </table>
        )
      }
    </div>
  )
}

export default ProductList