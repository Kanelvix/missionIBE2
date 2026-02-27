import React, { useEffect, useState } from 'react'
import SectionTitle from '../components/molecules/SectionTitle'
import DashboardCards from '../components/molecules/DashboardCards'
import axios from 'axios'

function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const stats = [
    {
      icon: 
        <path d="M21 6H7.05L5.94 2.68A1 1 0 0 0 4.99 2h-3v2h2.28l3.54 10.63A2 2 0 0 0 9.71 16h7.59a2 2 0 0 0 1.87-1.3l2.76-7.35c.11-.31.07-.65-.11-.92A1 1 0 0 0 21 6m-3.69 8H9.72l-2-6h11.84zM10 18a2 2 0 1 0 0 4 2 2 0 1 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 1 0 0-4"></path>,
      color: "green",
      title: "Total Orders",
      quantity: 512
    },
    {
      icon: 
        <path d="M3 16c0 .34.18.67.47.85l8 5a1.01 1.01 0 0 0 1.06 0l8-5c.29-.18.47-.5.47-.85V8c0-.34-.18-.67-.47-.85l-8-5c-.32-.2-.74-.2-1.06 0l-8 5c-.29.18-.47.5-.47.85zm2-6.53 6 3.6v6.13l-6-3.75zm8 9.73v-6.13l6-3.6v5.98zM12 4.18l5.84 3.65-5.84 3.5-5.84-3.5z"></path>,
      color: "purple",
      title: "Total Products",
      quantity: data.length
    },
  ]

  useEffect(() => {
    axios.get('https://699fde8d3188b0b1d536fff8.mockapi.io/api/v1/courses')
    .then((response) => {
      setData(response.data);
    }).catch((error) => {
      console.log("error", error);
    }).finally(() => {
      setLoading(false);
    })
  }, []);

  return (
    <section className='px-4 md:ml-72'>
      <div className='py-4 my-2'>
        <SectionTitle heading="3" title="Dashboard" type="contents" fontSize="text-2xl" desc="Selamat datang kembali!" descFontWeight="normal" />
      </div>
      <div className='flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {stats.map((item) => (
          <DashboardCards icon={item.icon} title={item.title} key={item.title} quantity={loading ? '...' : item.quantity} color={item.color} />
        ))}
      </div>
    </section>
  )
}

export default Dashboard