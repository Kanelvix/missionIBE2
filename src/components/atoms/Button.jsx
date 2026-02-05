import React from 'react'

function Button(props) {
  return (
    <button 
      style={{
        color: props.color,
        backgroundColor: props.bg
      }}
      className='h-10 rounded-lg font-medium text-sm md:text-base cursor-pointer hover:opacity-80 duration-100 flex justify-center items-center w-full px-6 active:opacity-100'
    >
      {props.text}
    </button>
  )
}

export default Button