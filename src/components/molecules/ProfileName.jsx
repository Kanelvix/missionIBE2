import React from 'react'

function ProfileName(props) {
  return (
    <div className='flex items-center gap-2'>
      <img src={props.pfp} alt="" className='size-10 rounded-lg' />
      <div>
        <p className='font-medium text-[#222325]'>Jenna Ortega</p>
        <p className='text-[#333333AD] text-sm'>Senior Accountant di <span className='font-bold'>Gojek</span></p>
      </div>
    </div>
  )
}

export default ProfileName