import React from 'react'
import SectionTitle from '../components/molecules/SectionTitle'
import AddProductForm from '../components/organisms/AddProductForm'
import ProductList from '../components/organisms/ProductList'

function Products() {
  return (
    <section className='px-4 md:ml-72 flex flex-col gap-8 py-6g'>
      <div>
        <p className='text-3xl text-[--dark-color] font-bold'>Product Management</p>
      </div>
      <AddProductForm />
      <ProductList />
    </section>
  )
}

export default Products