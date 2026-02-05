import React from 'react'
import SectionTitle from '../molecules/SectionTitle'
import CoursesCard from './CoursesCard'
import CoursesGrid from './CoursesGrid'
import { thumb1 } from '../../assets/thumbnails'
import { pfp1 } from '../../assets/photo-profiles'


function CourseSection() {
  return (
    <div className='w-full'>
      <SectionTitle 
        textAlign="left"
        heading="3"
        fontSize="text-2xl md:text-[2rem]"
        type="contents"
        title="Koleksi Video Pembelajaran Unggulan"
        desc="Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!"
      />
      <CoursesGrid
        img={thumb1}
        pfp={pfp1}
      />
    </div>
  )
}

export default CourseSection