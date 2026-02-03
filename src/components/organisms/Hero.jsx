import React from 'react'
import Button from '../atoms/Button'
import SectionTitle from '../molecules/SectionTitle'

function Hero() {
  return (
    /** edit the width again */
    <section className={`
      w-full 
      bg-[#000000cc]
      bg-[url("/background/65edb9e6d25fa2121b31a4ad14c9ebd02127f629.jpg")]
      bg-no-repeat bg-center bg-cover bg-blend-darken
      flex justify-center rounded-lg
    `}>

      <div className='max-w-7xl w-full px-6 py-14 flex flex-col justify-between items-center gap-6'>
        
        <SectionTitle 
          textAlign="center"
          fontSize="3rem"
          title="Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!"
          desc="Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat berpartisipasi dalam latihan interaktif yang akan meningkatkan pemahaman Anda."
        />

        <div>
          <Button color="#FFFFFF" bg="#3ECF4C" text="Temukan Video Course untuk Dipelajari!" />
        </div>
        
      </div>
    </section>
  )
}

export default Hero


// e0f71e25cc34e79e1f52284620dbea34fb453966.jpg