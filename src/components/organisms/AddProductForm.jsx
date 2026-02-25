import React from 'react'
import ProductFormInput from '../molecules/ProductFormInput'
import Button from '../atoms/Button'

const inputs = [
  {
    title: "Judul Produk",
    type: "text",
    required: true,
    placeholder: "Enter Product Title"
  },
  {
    title: "Harga (IDR)",
    type: "number",
    required: true,
    placeholder: "200000"
  },
  {
    title: "Nama Mentor",
    type: "text",
    required: true,
    placeholder: "John Doe"
  },
  {
    title: "Role Mentor",
    type: "text",
    required: true,
    placeholder: "Senior Frontend Developer"
  },
  {
    title: "Company",
    type: "text",
    required: false,
    placeholder: "Tokopedia"
  },
  {
    title: "URL Foto",
    type: "url",
    required: false,
    placeholder: "Product's photo URL"
  },
  {
    title: "Deskripsi",
    type: "text",
    required: false,
    placeholder: "Product's details"
  },
]

function AddProductForm() {
  return (
    <div className='bg-white border border-[--border-color] p-5 rounded-lg flex flex-col gap-5'>
      <p className='font-semibold text-[--dark-color] text-xl py-2 border-b border-[--border-color]'>Tambah Produk Baru</p>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 border-b pb-5'>
        {
          inputs.map((item)=>(
            <ProductFormInput title={item.title} type={item.type} required={item.required} key={item.title} placeholder={item.placeholder} />
          ))
        }
      </div>
      <div className='w-max self-end'>
        <button className='bg-[--blue-color] text-white hover:bg-[--darker-blue-color] h-10 rounded-lg font-medium text-sm md:text-base cursor-pointer w-full px-8 duration-300 active:bg-[--blue-color]'>Tambah Produk</button>
      </div>
    </div>
  )
}

export default AddProductForm