import React from 'react'
import SectionTitle from '../components/molecules/SectionTitle.jsx'
import CoursesFilter from '../components/organisms/CoursesFilter.jsx'

function Kategori() {

  return (
    <main className='py-16'>
      <div className='max-w-[75rem] flex mx-auto px-5 flex-col'>
        <SectionTitle
          heading="3"
          type="contents"
          fontSize="text-3xl"
          title="Koleksi Video Pembelajaran Unggulan"
          descFontWeight="normal"
          desc="Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!"
        />
        <div>
          <CoursesFilter />
        </div>
      </div>
    </main>

  )
}

export default Kategori