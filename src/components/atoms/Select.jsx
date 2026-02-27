import React from 'react'

function Select(props) {
  return (
    <div className='h-12 p-3 rounded-lg border-2 border-[--border-color] w-full flex items-center'>
      <select name="option" id="option" className=' outline-none w-full cursor-pointer' onChange={props.onChange} value={props.value}>
        {props.options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Select;