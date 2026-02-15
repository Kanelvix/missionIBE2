import React from 'react'

function FilterOption(props) {
  return (
    <div>
      {props.title === "Bidang Studi"
      ? <label className='flex items-center mx-4 my-1 cursor-pointer'>
          <div className='relative size-5 shrink-0 bg-[--light-green-color] rounded-md'>
            <input type="checkbox" className='absolute peer size-full opacity-0'
            checked={props.selected.includes(props.value)}
            onChange={() => {
              if (props.selected.includes(props.value)) {
                props.setSelected(
                  props.selected.filter(v => v !== props.value)
                )
              } else {
                props.setSelected([...props.selected, props.value])
              }
            }} />
            <span className='
            size-full absolute border-2 border-[--green-color] rounded-md
            after:content-[""] after:absolute after:left-1 after:bottom-1
            after:w-0 after:h-0 after:border-r-[3px] after:border-b-[3px] after:border-[--green-color] after:rotate-45
            after:opacity-0 after:duration-100
            peer-checked:after:w-2 peer-checked:after:h-3 peer-checked:after:opacity-100'></span>
          </div>
          <p className='ml-8 select-none text-nowrap hover:text-[--green-color] duration-300 w-full'>{props.option}</p>
        </label>
      : <label className='flex items-center mx-4 my-1 cursor-pointer'>
          <div className='relative size-5 shrink-0 bg-[--light-green-color] rounded-full'>
            <input type="radio" className='absolute peer inset-0 opacity-0' name={props.name.toLowerCase()} value={props.value}
            checked={props.selected === props.value}
            onChange={() => props.setSelected(props.value)} />
            <span className='
              size-full relative block
              border-2 border-[--green-color]
              rounded-full
              after:content-[""]
              after:absolute
              after:inset-0
              after:w-0 after:h-0 after:bg-[--green-color]
              after:m-auto
              after:rounded-full
              after:transition-all
              peer-checked:after:w-3
              peer-checked:after:h-3
            '></span>
          </div>
          <p className='ml-8 select-none text-nowrap duration-300 hover:text-[--green-color] w-full'>{props.option}</p>
        </label>
      }
    </div>
  )
}

export default FilterOption