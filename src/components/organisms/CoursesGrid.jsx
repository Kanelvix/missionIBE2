import React from 'react'
import CoursesCard from './CoursesCard'

function CoursesGrid(props) {
  return (
    <section className='grid gap-5 md:gap-6 md:grid-cols-2 lg:grid-cols-3 '>
      {props.courses.map((item) => (
        <CoursesCard 
          img={item.thumbnail}
          title={item.title}
          desc={item.desc}
          key={item.id}
          pfp={item.pfp}
          price={item.price}
          rating={item.rating}
          totalReview={item.totalReview}
          name={item.name}
          role={item.role}
          company={item.company}
        />
      ))}
    </section>
  )
}

export default CoursesGrid