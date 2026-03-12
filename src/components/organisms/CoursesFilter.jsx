import React from 'react'
import FilterGroup from './FilterGroup';
import { filterTitleIcons } from '../../assets/Icons/filterTitleIcons';

const filter = [
  {
    title: "Bidang Studi",
    key: "bidangStudi",
    icon: filterTitleIcons.subject,
    options: [
      "Bisnis",
      "Desain",
      "Pemasaran",
      "Pengembangan Diri",
    ]
  },
  {
    title: "Harga",
    key: "harga",
    icon: filterTitleIcons.price,
    options: [
      "Semua",
      "Gratis",
      "Berbayar",
    ]
  },
  {
    title: "Durasi",
    key: "durasi",
    icon: filterTitleIcons.clock,
    options: [
      "Semua",
      "Kurang dari 4 Jam",
      "4 - 8 Jam",
      "Lebih dari 8 Jam",
    ]
  },
];

function CoursesFilter({filters, setFilters, setCurrentPage}) {
  

  const resetFilter = () => {
    setFilters({
      bidangStudi: [],
      harga: "Semua",
      durasi: "Semua",
    })
  };

  return (
    <div className='p-5 bg-white border border-[--border-color] rounded-lg flex flex-col gap-4 h-max'>
      <div className='flex justify-between'>
        <p className='text-lg font-semibold'>Filter</p>
        <button className='text-[--red-color] font-medium hover:opacity-80 duration-100' onClick={resetFilter}>Reset</button>
      </div>
      {filter.map((item) => (
        <FilterGroup
          icon={item.icon}
          title={item.title}
          options={item.options}
          key={item.key}
          selected={filters[item.key]}
          setSelected={(value) => {
            setFilters(prev => ({
              ...prev,
              [item.key]: value
            }));
            setCurrentPage(1);
          }} />
      ))}
    </div>
  )
}

export default CoursesFilter