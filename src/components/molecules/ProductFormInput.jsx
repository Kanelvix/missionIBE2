import React from 'react'
import Input from '../atoms/Input'

function ProductFormInput( {title, type, required, placeholder} ) {
  return (
    <div className={title==="Deskripsi" ? 'md:col-span-2' : ''}>
      <p className='text-[--dark-color]' >{title}<span className={`text-[--red-color] ${required ? '' : 'hidden'}`}> *</span></p>
      <Input type={type} required={required} placeholder={placeholder} />
    </div>
  )
}

export default ProductFormInput