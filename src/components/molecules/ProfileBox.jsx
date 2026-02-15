import React, { useEffect, useRef, useState } from 'react'
import avatar from '../../assets/Avatar.png';
import menuIcon from '../../assets/menu.svg';
import ProfileMenu from '../molecules/ProfileMenu';
import { NavLink, useLocation } from 'react-router';


const profileMenus = [
  {
    name: "Kategori",
    toPage: "kategori"
  },
  {
    name: "Profil Saya",
    toPage: "profil"
  },
  {
    name: "Kelas Saya",
    toPage: "kelas"
  },
  {
    name: "Pesanan Saya",
    toPage: "pesanan"
  },
  {
    name: "Keluar",
    toPage: "login"
  },
];

function ProfileBox() {
  const [open, setOpen] = useState(false);
  const [isMd, setIsMd] = useState(false);

  const location = useLocation();

  const menuRef = useRef();

  useEffect(() => {
    const checkScreen = () => {
      setIsMd(window.innerWidth >= 768)
    }

    checkScreen()
    window.addEventListener('resize', checkScreen)

    return() => window.removeEventListener('resize', checkScreen)
  }, [])

  useEffect(() => {
    let handler = (e) => {
      if(!menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handler)
    return() => {document.removeEventListener("mousedown", handler)}
  }, [])

  const filteredMenus = isMd
    ? profileMenus.filter(item => item.name !== "Kategori")
    : profileMenus

  const openCloseProfile = () => {
    setOpen(!open);
  }

  return (
    <div ref={menuRef}>
      {/* MOBILE */}
      <div
        className='md:hidden cursor-pointer size-8 rounded-full flex justify-center items-center'
        onClick={openCloseProfile}>
        <img src={menuIcon} alt="" />
      </div>

      {/* DESKTOP */}
      <div className='hidden md:flex items-center gap-5'>
        <NavLink
          to='/kategori'
          className={`
            cursor-pointer duration-300
            ${location.pathname === '/kategori'
              ? 'text-[--green-color] hover:text-[#2c9437] font-medium'
              : 'text-[--base-color] hover:text-black'}
          `}
          onClick={() => setOpen(false)}
        >Kategori</NavLink>
        <img src={avatar} alt="profile" className='size-11 cursor-pointer hover:opacity-85 active:opacity-100 duration-300'
        onClick={openCloseProfile} />
      </div>

      <div 
        className={`
          fixed md:w-52 top-[4.875rem] md:top-20 border-t-[1px] border-[--border-color] md:border-none inset-x-0 md:right-5 md:inset-auto
          bg-white shadow-lg rounded-b-md
          overflow-hidden origin-top transition-transform duration-300
        ${open===true ? 'scale-y-100' : 'scale-y-0'}
        `}
      >
        <ProfileMenu menus={filteredMenus} onClick={() => setOpen(false)} />
      </div>
    </div>
  )
}

export default ProfileBox