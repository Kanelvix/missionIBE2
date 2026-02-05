import React from 'react'

function SectionTitle(props) {
  return (
    <div 
      style={{
        textAlign: props.textAlign
      }}
      className='flex flex-col justify-center items-center gap-3'>
      {props.heading === "3" ? (
        <h3 
          style={{
            lineHeight: '1',
            width: '100%'
          }}
          className={`${props.type === "contents" ? "text-[#222325]" : "text-white"} ${props.fontSize} font-bold`}
        >
          {props.title}
        </h3>
      ) : (
        <h1
          style={{
            lineHeight: '1',
            width: '100%'
          }}
          className={`text-white font-bold px-5 ${props.fontSize}`}
        >
          {props.title}
        </h1>
      )}

      <p className={`${props.type === "contents" ? "text-[#333333AD]" : "text-white"} text-sm md:text-base w-full`}>{props.desc}</p>
    </div>
  )
}

export default SectionTitle