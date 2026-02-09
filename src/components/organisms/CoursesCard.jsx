import React from 'react'
import CourseTitle from '../molecules/CourseTitle'
import ProfileName from '../molecules/ProfileName'
import RatingStars from '../molecules/RatingStars'
import Price from '../atoms/Price'

function CoursesCard(props) {
  return (
    <div className='p-4 md:p-5 bg-white border-[1px] border-[--border-color] flex flex-col gap-2 md:gap-4 rounded-lg  md:min-h-[426px] cursor-pointer hover:shadow-[0_0_10px_rgba(0,0,0,0.25)] duration-300 hover:relative hover:-translate-y-1'>
      <div className='flex items-center gap-3 md:gap-4 md:flex-col'>

        <div className='size-20 md:w-full md:h-48 flex justify-center items-center overflow-hidden rounded-lg'>
          <img src={props.img} alt="" className='size-full object-cover' />
        </div>

        <div className='flex flex-col flex-1 h-full justify-between gap-2 md:gap-4 w-full'>
          <CourseTitle 
            title={props.title} 
            desc={props.desc} />
          <ProfileName pfp={props.pfp} name={props.name} role={props.role} company={props.company} />
        </div>

      </div>
      
      <div className='flex justify-between items-center'>
        <RatingStars rating={props.rating} totalReview={props.totalReview} />
        <Price price={`Rp ${props.price}`} />
      </div>
    </div>
  )
}

export default CoursesCard