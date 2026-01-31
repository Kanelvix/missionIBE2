import videoBelajar from '../assets/logo-videobelajar.svg'
import avatar from '../assets/Avatar.png'

function Navbar() {
  return (
    <>
      <div className='flex h-20 items-center justify-between w-full bg-white border-b-[1px] border-b-[#F1F1F1] fixed top-0 right-0 left-0 px-6 shadow-lg shadow-[#22232526] md:shadow-none'>
        <div className='flex items-center cursor-pointer'>
          <img src={videoBelajar} alt="Logo" />
        </div>

        <div className='hidden md:flex items-center gap-5'>
          <p className='cursor-pointer duration-100 hover:text-black'>Kategori</p>
          <img src={avatar} alt="profile" className='size-11 cursor-pointer' />
        </div>
      </div>
    </>
  )
}

export default Navbar;