import React from 'react'
import arrow from '../../assets/Arrows/green-arrow.svg'

function FilterTitle(props) {
  return (
    <div className='flex gap-4 p-4 cursor-pointer hover:bg-[--light-green-color] duration-300'
    onClick={props.onClick}>
      <div className='size-6 flex justify-center items-center'>
        <img src={props.icon} alt="" />
      </div>
      <p className='text-[--green-color] font-medium flex-1'>{props.title}</p>
      <div className='flex items-center justify-center size-6'>
        <img src={arrow} alt="" className={`duration-300 ${props.extended ? '' : 'rotate-180'}`} />
      </div>
    </div>
  )
}

export default FilterTitle