import React from 'react'
import FilterGroup from './FilterGroup';
import { filterTitleIcons } from '../../assets/Icons/filterTitleIcons';

const filter = [
  {
    title: "Bidang Studi",
    icon: filterTitleIcons.subject,
    options: [
      "Pemasaran",
      "Digital & Teknologi",
      "Pengembangan Diri",
      "Bisnis Manajemen"
    ]
  },
  {
    title: "Price",
    icon: filterTitleIcons.price,
    options: [
      "Semua",
      "Gratis",
      "Berbayar",
    ]
  },
  {
    title: "Durasi",
    icon: filterTitleIcons.clock,
    options: [
      "Semua",
      "Kurang dari 4 Jam",
      "4 - 8 Jam",
      "Lebih dari 8 Jam",
    ]
  },
];

function CoursesFilter() {

  const resetFilter = () => {

  }

  return (
    <div className='p-5 bg-white border border-[--border-color] rounded-lg flex flex-col gap-4'>
      <div className='flex justify-between'>
        <p className='text-lg font-semibold'>Filter</p>
        <button className='text-[--red-color] font-medium hover:opacity-80 duration-100' onClick={resetFilter}>Reset</button>
      </div>
      {filter.map((item) => (
        <FilterGroup
          icon={item.icon}
          title={item.title}
          options={item.options}
          key={item.title} />
      ))}
    </div>
  )
}

export default CoursesFilter