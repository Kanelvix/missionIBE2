import React from 'react'
import stars from '../../assets/Rating.svg'

function RatingStars() {
  return (
    <div className='flex gap-2 items-center'>
      <div className='flex justify-center items-center'>
        <img src={stars} alt="" />
      </div>
      <p className='underline text-sm font-medium'>3.5 (86)</p>
    </div>
  )
}

export default RatingStars