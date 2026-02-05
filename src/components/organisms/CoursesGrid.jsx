import React from 'react'
import CoursesCard from './CoursesCard'

function CoursesGrid(props) {
  return (
    <section className='grid gap-6'>
      <CoursesCard
        img={props.img}
        pfp={props.pfp}
      />
      <CoursesCard
        img={props.img}
        pfp={props.pfp}
      />
      <CoursesCard
        img={props.img}
        pfp={props.pfp}
      />
    </section>
  )
}

export default CoursesGrid