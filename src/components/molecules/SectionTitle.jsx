import React from 'react'

function SectionTitle(props) {
  return (
    <div 
      style={{
        textAlign: props.textAlign
      }}
      className='flex flex-col justify-center items-center px-36 gap-6'>
      {props.heading === "3" ? (
        <h3 
          style={{
            fontSize: props.fontSize
          }}
          className={`${props.type === "contents" ? "text-[#222325]" : "text-white"} font-bold`}
        >
          {props.title}
        </h3>
      ) : (
        <h1
          style={{
            fontSize: props.fontSize,
            lineHeight: '1'
          }}
          className='text-white font-bold'
        >
          {props.title}
        </h1>
      )}

      <p className={props.type === "contents" ? "text-[#333333AD]" : "text-white"}>{props.desc}</p>
    </div>
  )
}

export default SectionTitle