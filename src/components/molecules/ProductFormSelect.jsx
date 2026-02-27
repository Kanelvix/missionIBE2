import React from 'react'
import Select from '../atoms/Select'

const options = [
  "Bisnis",
  "Desain",
  "Pemasaran",
  "Pengembangan Diri"
]

function ProductFormSelect( {title, onChange, value} ) {
  return (
    <div>
      <p className='text-[--dark-color]'>{title}<span className='text-[--red-color]'> *</span></p>
      <Select options={options} onChange={onChange} value={value} />
    </div>
  )
}

export default ProductFormSelect