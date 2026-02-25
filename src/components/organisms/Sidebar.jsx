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
  {
    title: "Users",
    path: "users",
    icon:
      <path d="M10 13H8c-2.76 0-5 2.24-5 5v1c0 .55.45 1 1 1h10c.55 0 1-.45 1-1v-1c0-2.76-2.24-5-5-5m-5 5c0-1.65 1.35-3 3-3h2c1.65 0 3 1.35 3 3zm7.73-11.49c-.08-.22-.19-.42-.3-.62v-.01c-.69-1.14-1.93-1.89-3.42-1.89-2.28 0-4 1.72-4 4s1.72 4 4 4c1.49 0 2.73-.74 3.42-1.89v-.01c.12-.2.22-.4.3-.62.02-.06.03-.12.05-.18.06-.17.11-.34.15-.52.05-.25.07-.51.07-.78s-.03-.53-.07-.78c-.03-.18-.09-.35-.15-.52-.02-.06-.03-.12-.05-.18M9 10c-1.18 0-2-.82-2-2s.82-2 2-2 2 .82 2 2-.82 2-2 2m6 0q-.165 0-.33-.03c-.22.66-.56 1.27-.98 1.81.41.13.84.22 1.31.22 2.28 0 4-1.72 4-4s-1.72-4-4-4c-.47 0-.9.09-1.31.22.43.53.76 1.14.98 1.81.11-.01.21-.03.33-.03 1.18 0 2 .82 2 2s-.82 2-2 2m1 3h-1.11c.6.58 1.08 1.27 1.44 2.03C17.83 15.2 19 16.46 19 18h-2v1c0 .35-.07.69-.18 1H20c.55 0 1-.45 1-1v-1c0-2.76-2.24-5-5-5"></path>
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