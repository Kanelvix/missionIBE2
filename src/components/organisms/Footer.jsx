import React from 'react'
import logo from '../../../public/logo-videobelajar.svg';
import FooterLinks from '../molecules/FooterLinks'
import { socialMediasIcons } from '../../assets/Icons/socialMedias';
import SocialMediaButtons from '../molecules/SocialMediaButtons';

const footerLinks = [
  {
    title: "Kategori",
    links: [
      "Digital & Teknologi",
      "Pemasaran",
      "Manajemen Bisnis",
      "Pengembangan Diri",
      "Desain",
    ],
  },
  {
    title: "Perusahan",
    links: [
      "Tentang Kami",
      "FAQ",
      "Kebijakan Privasi",
      "Ketentuan Layanan",
      "Bantuan",
    ],
  },
  {
    title: "Komunitas",
    links: [
      "Tips Sukses",
      "Blog",
    ],
  },
];

const socialMedias = [
  {
    name: "linkedIn",
    img: socialMediasIcons.linkedin
  },
  {
    name: "facebook",
    img: socialMediasIcons.facebook
  },
  {
    name: "instagram",
    img: socialMediasIcons.instagram
  },
  {
    name: "twitter",
    img: socialMediasIcons.twitter
  },
]


function Footer() {
  return (
    <footer className='bg-white p-5 md:p-14 flex flex-col items-center justify-center border-t-[1px] border-[--border-color]'>
      <div className='max-w-7xl w-full flex flex-col gap-4'>
        <div className='flex flex-col gap-4  md:flex-row md:gap-10 md:justify-between'>
          <div className='flex flex-col gap-4 max-w-96'>
            <div>
              <img src={logo} alt="" />
            </div>
            <div className='flex flex-col gap-2'>
              <p className='font-bold text-sm md:text-lg text-[--dark-color]'>Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!</p>
              <p className='text-sm md:text-base'>Jl. Usman Effendi No. 50 Lowokwaru, Malang</p>
              <p className='text-sm md:text-base'>+62-877-7123-1234</p>
            </div>
          </div>
          <div className='flex flex-col md:flex-row gap-3 md:gap-12'>
            {footerLinks.map((col, i) => (
              <FooterLinks 
                title={col.title} 
                links={col.links} 
                key={i} />
            ))}
          </div>
        </div>

        <div className='h-[1px] w-full bg-[--border-color] md:mt-8'></div>

        <div className='flex flex-col-reverse gap-3 md:flex-row md:items-center md:justify-between'>
          <p className='font-medium'>@2023 Gerobak Sayur All Rights Reserved.</p>
          <SocialMediaButtons socialMedias={socialMedias} />
        </div>
      </div>
    </footer>
  )
}

export default Footer