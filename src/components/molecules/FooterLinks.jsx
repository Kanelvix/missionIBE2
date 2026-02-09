import React, { useState } from 'react'
import arrow from '../../assets/arrow.svg'

function FooterLinks(props) {
  const [expanded, setexpanded] = useState(false);

  const expandedList = () => {
    if (window.innerWidth >= 768) return
    setexpanded(!expanded)
  }

  return (
    <div
      className={`flex flex-col
      justify-start items-start gap-3
      cursor-pointer md:cursor-auto
      transition-all duration-300
      md:max-h-none
      ${expanded ? 'max-h-96' : 'max-h-6'}`}
      onClick={expandedList}
    >
      <div className={`flex items-center justify-between w-full pb-1 border-[--border-color] ${expanded ? 'border-b' : ''}`}>
        <h4 className='font-bold'>{props.title}</h4>
        <div 
          className={`
            size-6 flex items-center justify-center cursor-pointer rounded-full md:hidden duration-300
            ${expanded ? 'rotate-90' : ''}
          `}>
          <img src={arrow} alt="" />
        </div>
      </div>

      <ul
        className={
          `flex flex-col gap-3 w-full
          overflow-hidden origin-top transition-all duration-300
          md:opacity-100
          ${expanded ? 'opacity-100' : 'opacity-0'}
        `}
      >
        {props.links.map((item, i) => (
          <li key={i} 
            className='text-[--base-color] font-medium cursor-pointer
            hover:opacity-80 active:opacity-100
          '>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FooterLinks