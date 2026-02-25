import React from 'react'
import courses from '../../data/courses.js'
import ProductsRow from '../molecules/ProductRow.jsx'

function ProductList() {
  return (
    <div className='bg-white p-5 rounded-lg border border-[--border-color] overflow-auto'>
      <p className='font-semibold text-[--dark-color] text-xl mb-4'>Daftar Produk {`(${courses.length})`}</p>
      <table>
        <thead className='text-[--base-color] bg-[--light-gray-color] border-b border-[--border-color]'>
          <tr>
            <th className='p-2'>Produk</th>
            <th className='p-2'>Harga</th>
            <th className='p-2'>Mentor</th>
            <th className='p-2'>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((item) => (
            <ProductsRow key={item.id} title={item.title} desc={item.desc} price={item.price} mentor={item.name} role={item.role} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ProductList