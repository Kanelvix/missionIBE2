import React from 'react'
import logout from '../../assets/logout.svg'
import { NavLink } from 'react-router'

function ProfileMenu(props) {
  return (
    <>
      {props.menus.map((item) => (
        item.name === "Keluar" ? (
          <NavLink to={`/${item.toPage}`} key={item.name} onClick={props.onClick}>
            <div className='flex items-center cursor-pointer hover:bg-red-100 duration-300'>
                <p className='font-medium text-[--red-color] pl-3 pr-1 py-4'>{item.name}</p>
                <img src={logout} alt="" />
            </div>
          </NavLink>
        ) : (
          <NavLink to={`/${item.toPage}`} key={item.name} onClick={props.onClick}>
            <p className='font-medium px-3 py-4 border-b-[1px] cursor-pointer hover:text-[--dark-color] hover:bg-[--selected-color] duration-300'>{item.name}</p>
          </NavLink>
        )
      ))}
    </>
  )
}

export default ProfileMenu