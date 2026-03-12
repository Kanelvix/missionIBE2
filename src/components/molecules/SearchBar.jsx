import React from 'react'
import Input from '../atoms/Input'
import search from '../../assets/search.svg'

function SearchBar({setSearch, setCurrentPage}) {
  return (
    <div className='relative flex-1 md:max-w-56'>
      <Input placeholder="Cari Kelas" type="search" setSearch={setSearch} inputType={'search'} setCurrentPage={setCurrentPage} />
      <div className='absolute size-6 top-1/2 -translate-y-1/2 right-4 flex items-center justify-center'>
        <img src={search} alt="" />
      </div>
    </div>
  )
}

export default SearchBar