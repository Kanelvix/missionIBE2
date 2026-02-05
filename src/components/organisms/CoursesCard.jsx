import React from 'react'
import SectionTitle from '../molecules/SectionTitle'
import CourseTitle from '../molecules/CourseTitle'
import ProfileName from '../molecules/ProfileName'
import RatingStars from '../molecules/RatingStars'
import Price from '../atoms/Price'

function CoursesCard(props) {
  return (
    <div className='p-5 bg-white border-[1px] border-[#3A35411F] flex flex-col gap-4 rounded-lg md:min-w-96 md:min-h-[426px]'>
      <div className='max-h-48 flex justify-center items-center overflow-hidden rounded-lg'>
        <img src={props.img} alt="" />
      </div>
      <CourseTitle title="Big 4 Auditor Financial Analyst" desc="Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan..." />
      <ProfileName pfp={props.pfp} />
      <div className='flex justify-between items-center'>
        <RatingStars />
        <Price />
      </div>
    </div>
  )
}

export default CoursesCard