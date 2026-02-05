import React from 'react'
import Hero from '../components/organisms/Hero'
import CourseSection from '../components/organisms/CourseSection'

function HomePage() {
  return (
    <main className='flex flex-col items-center justify-center mt-24 mx-5 gap-16'>
      <Hero />
      <CourseSection />
    </main>
  )
}

export default HomePage