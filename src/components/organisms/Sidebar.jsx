import React from 'react'
import videoBelajar from '../../../public/logo-videobelajar.svg';
import DashboardTabs from '../molecules/DashboardTabs';
import { NavLink } from 'react-router';


const sideTabs = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon:
      <path d="M20 11h-6c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-8c0-.55-.45-1-1-1m-1 8h-4v-6h4zm-9-4H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1m-1 4H5v-2h4zM20 3h-6c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1m-1 4h-4V5h4zm-9-4H4c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1m-1 8H5V5h4z"></path>
  },
  {
    title: "Products",
    path: "products",
    icon:
      <path d="M3 16c0 .34.18.67.47.85l8 5a1.01 1.01 0 0 0 1.06 0l8-5c.29-.18.47-.5.47-.85V8c0-.34-.18-.67-.47-.85l-8-5c-.32-.2-.74-.2-1.06 0l-8 5c-.29.18-.47.5-.47.85zm2-6.53 6 3.6v6.13l-6-3.75zm8 9.73v-6.13l6-3.6v5.98zM12 4.18l5.84 3.65-5.84 3.5-5.84-3.5z"></path>
  },
]

function Sidebar() {
  return (
    <div className='md:fixed bg-white border-r border-[--border-color] top-0 left-0 right-0 md:right-auto md:bottom-0 flex flex-col gap-3 md:gap-6 justify-between shadow-sm md:shadow-none pb-2 md:pb-0 z-50'>
      <NavLink to={'/homepage'} className='flex justify-center cursor-pointer py-4 md:py-6 px-10 border-b border-[#F5F5F5] hover:opacity-80 duration-300 w-full'>
        <img src={videoBelajar} alt="" className='h-7 md:h-8' />
      </NavLink>
      <div className='flex flex-col gap-2 mx-5 flex-1'>
        {sideTabs.map((item) => (
          <DashboardTabs title={item.title} key={item.title} icon={item.icon} path={item.path} />
        ))}
      </div>
      <div className='hidden md:block text-center border-t border-[--light-gray-color] p-4'>
        <p className='text-sm'>© 2024 Admin Panel</p>
      </div>
    </div>
  )
}

export default Sidebar