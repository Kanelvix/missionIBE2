import React from 'react'

function Select(props) {
  return (
    <div className='h-12 p-3 rounded-lg border-2 border-[#3A35411F] w-full flex items-center'>
      <select name="option" id="option" className=' outline-none w-full cursor-pointer'>
        {props.options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Select;