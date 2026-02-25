import React from 'react'

function ProfileName(props) {
  return (
    <div className='flex items-center gap-2'>
      <img src={props.pfp} alt="" className='size-9 md:size-10 rounded-lg' />
      <div>
        <p className='font-medium text-[--dark-color]'>{props.name}</p>
        <p className='text-sm limit-one-line'>{props.role} {props.company !== '' ? <span>di <span className='font-bold'>{props.company}</span></span> : ''}</p>
      </div>
    </div>
  )
}

export default ProfileName