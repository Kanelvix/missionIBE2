import React from 'react'

function CourseTitle(props) {
  return (
    <div className='flex flex-col'>
      <p className='font-bold text-[#222325] text-lg'>{props.title}</p>
      <p className='font-medium text-[#333333AD]'>{props.desc}</p>
    </div>
  )
}

export default CourseTitle