import React from 'react'
import ProductsRow from '../molecules/ProductRow.jsx'

function ProductList({loading, data, setEditing}) {
  
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
                <ProductsRow key={item.id} title={item.title} desc={item.desc} price={item.price} mentor={item.name} role={item.role} onEdit={() => setEditing(item)} />
              ))}
            </tbody>
          </table>
        )
      }
    </div>
  )
}

export default ProductList