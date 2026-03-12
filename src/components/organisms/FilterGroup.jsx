import React, { useEffect, useState } from 'react'
import FilterTitle from '../molecules/FilterTitle'
import FilterOption from '../molecules/FilterOption'

function FilterGroup(props) {
  const [extended, setExtended] = useState(false);
  const [isMd, setIsMd] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMd(window.innerWidth >= 768)
    }

    checkScreen()
    window.addEventListener('resize', checkScreen)

    return() => window.removeEventListener('resize', checkScreen)
  }, [])

  const handleExtend = () => {
    setExtended(!extended);
  }

  const isExtended = isMd ? true : extended;

  return (
    <div className={`flex flex-col border border-[--border-color] rounded-lg
    `}>
      <FilterTitle 
        icon={props.icon}
        title={props.title}
        onClick={handleExtend}
        extended={isExtended}
      />
      <div className={`
        flex flex-col gap-3 overflow-hidden transition-all duration-300
        ${isExtended ? 'max-h-96 opacity-100 mb-4 mt-2' : 'max-h-0 opacity-0'}`
      }>
        {props.options.map((option, i) => (
          <FilterOption option={option} key={i} title={props.title} name={props.title} value={option} selected={props.selected} setSelected={props.setSelected} />
        ))}
      </div>
    </div>
  )
}

export default FilterGroup