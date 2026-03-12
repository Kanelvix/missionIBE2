import React, { useEffect, useRef, useState } from 'react'
import dropdown from '../../assets/dropdown-arrow.svg'
import OptionList from '../atoms/OptionList'


const list = [
  "Harga Rendah",
  "Harga Tinggi",
  "A to Z",
  "Z to A",
  "Rating Tertinggi",
  "Rating Terendah"
]

function Sorter({sorter, setSorter, setCurrentPage}) {
  const [open, setOpen] = useState(false);

  const sorterRef = useRef();

  const openDropDown = () => {
    setOpen(!open);
  }

  const selectSorter = (value) => {
    setSorter(value);
    setCurrentPage(1);
  }

  useEffect(() => {
    let handler = (e) => {
      if(!sorterRef.current.contains(e.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handler)
    return() => {document.removeEventListener("mousedown", handler)}
  }, [])

  return (
    <div className='relative flex-1 md:max-w-max' onClick={openDropDown} ref={sorterRef}>
      <div className='h-12 bg-white border border-[--border-color] rounded-lg p-3 relative cursor-pointer select-none'>
        <p className='font-medium selected-option text-nowrap pr-9'>{sorter}</p>
        <div className='absolute size-6 flex justify-center items-center top-1/2 -translate-y-1/2 right-3'>
          <img src={dropdown} className={`transition-all duration-300 ${open ? '-rotate-180' : ''}`} alt="" />
        </div>
      </div>
      <ul className={`
        bg-white rounded-lg border border-[--border-color] absolute z-30 top-14 right-0 transition-all duration-300 w-full md:w-auto shadow-lg overflow-hidden
        ${open ? 'opacity-100 max-h-96' : 'opacity-0 -translate-y-2 max-h-0'}
      `}>
        {list.map((item, i) => (
          <OptionList option={item} key={i} onSelect={selectSorter} />
        ))}
      </ul>
    </div>
  )
}

export default Sorter