import React from 'react'

function OptionList(props) {
  return (
    <li className='p-3 hover:bg-[--selected-color] hover:text-[--dark-color] duration-300 cursor-pointer text-sm font-medium text-[--base-color] text-nowrap md:pr-10' onClick={() => props.onSelect(props.option)}>
      {props.option}
    </li>
  )
}

export default OptionList