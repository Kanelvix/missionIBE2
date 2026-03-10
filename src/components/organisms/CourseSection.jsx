import React, { useEffect, useState } from 'react'
import SectionTitle from '../molecules/SectionTitle'
import CoursesGrid from './CoursesGrid'
import CategoryTabs from '../molecules/CategoryTabs'
import { getCourses } from '../../services/courses'


function CourseSection() {
  const [activeTab, setActiveTab] = useState("Semua Kelas")

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchCourses = () => {
    getCourses()
    .then((response) => {
      setData(response.data);
    }).catch((error) => {
      console.log("error", error);
    }).finally(() => {
      setLoading(false);
    })
  }

  useEffect(() => {
    fetchCourses();
  }, []);

  const filteredCourses =
    activeTab === "Semua Kelas"
      ? data
      : data.filter(course => course.category === activeTab)

  return (
    <div className='w-full flex flex-col gap-6 md:gap-8'>
      <SectionTitle 
        textAlign="left"
        heading="3"
        fontSize="text-2xl md:text-[2rem]"
        type="contents"
        title="Koleksi Video Pembelajaran Unggulan"
        desc="Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!"
      />
      <div className='w-full'>
        <CategoryTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      <CoursesGrid data={filteredCourses} loading={loading} />
    </div>
  )
}

export default CourseSection