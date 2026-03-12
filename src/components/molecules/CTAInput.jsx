import React from 'react'
import Button from '../atoms/Button'

function CTAInput() {
  return (
    <div className='flex flex-col gap-4 w-72 md:w-full relative'>
      <input type="email" className='text-center md:text-left h-10 md:h-14 rounded-lg border-none outline-none p-3 md:pr-40 md:pl-8 w-full placeholder:text-[--base-color]' placeholder='Masukkan Emailmu' />
      
      <div className='md:absolute right-2 top-2'>
        <Button color="white" bg="#FFBD3A" text="Subscribe" />
      </div>
    </div>
  )
}

export default CTAInput