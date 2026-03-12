import React, { useEffect, useState } from 'react'
import SectionTitle from '../components/molecules/SectionTitle.jsx'
import CoursesFilter from '../components/organisms/CoursesFilter.jsx'
import CoursesGrid from '../components/organisms/CoursesGrid.jsx'
import { useLocation } from 'react-router'
import SearchBar from '../components/molecules/SearchBar.jsx'
import Sorter from '../components/molecules/Sorter.jsx'
import Pagination from '../components/organisms/Pagination.jsx'
import { getCourses } from '../services/courses.js'

function Kategori() {
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
  
  const [currentPage, setCurrentPage] = useState(1);
  const [coursesPerPage, setCoursesPerPage] = useState(9);
  const [filters, setFilters] = useState({
    bidangStudi: [],
    harga: "Semua",
    durasi: "Semua",
  });
  const [sorter, setSorter] = useState("Urutkan");
  const [search, setSearch] = useState("");

  const filteredCourses = data.filter((courses) => {
    const matchSubject =
      filters.bidangStudi.length === 0 ||
      filters.bidangStudi.includes(courses.category);

    const matchPrice =
      filters.harga === "Semua" ||
      (filters.harga === "Gratis" && courses.price === 0) ||
      (filters.harga === "Berbayar" && courses.price > 0);

    const matchDuration =
      filters.durasi === "Semua" ||
      (filters.durasi === "Kurang dari 4 Jam" && courses.durasi < 4) ||
      (filters.durasi === "4 - 8 Jam" && courses.durasi >= 4 && courses.durasi <= 8) ||
      (filters.durasi === "Lebih dari 8 Jam" && courses.durasi > 8);

    const matchSearch =
      search === "" ||
      courses.title.toLowerCase().includes(search.toLowerCase());

    return matchSubject && matchPrice && matchDuration && matchSearch;
  }).sort((a, b) => {
    switch(sorter) {
      case "Harga Rendah": return a.price - b.price;
      case "Harga Tinggi": return b.price - a.price;
      case "A to Z": return a.title.localeCompare(b.title);
      case "Z to A": return b.title.localeCompare(a.title);
      case "Rating Tertinggi": return b.rating - a.rating;
      case "Rating Terendah": return a.rating - b.rating;
    }
  })

  const lastCourseIndex = currentPage * coursesPerPage;
  const firstCourseIndex = lastCourseIndex - coursesPerPage;
  const currentCourse = filteredCourses.slice(firstCourseIndex, lastCourseIndex);

  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setCoursesPerPage(6);
      } else {
        setCoursesPerPage(9);
      }
    }

    handleResize();
    window.addEventListener('resize', handleResize);

    return() => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <main className='py-16'>
      <div className='max-w-[75rem] flex mx-auto px-5 flex-col gap-9'>
        <SectionTitle
          heading="3"
          type="contents"
          fontSize="text-3xl"
          title="Koleksi Video Pembelajaran Unggulan"
          descFontWeight="normal"
          desc="Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!"
        />
        <div className='flex flex-col md:flex-row gap-6 md:gap-10'>
          <CoursesFilter filters={filters} setFilters={setFilters} setCurrentPage={setCurrentPage} />
          <div className='flex flex-col gap-6 md:gap-8'>
            <div className='flex gap-4 justify-end'>
              <Sorter sorter={sorter} setSorter={setSorter} setCurrentPage={setCurrentPage} />
              <SearchBar setSearch={setSearch} setCurrentPage={setCurrentPage} />
            </div>
            <CoursesGrid data={currentCourse} location={location.pathname} loading={loading} />
            <Pagination totalCourses={filteredCourses.length} coursesPerPage={coursesPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Kategori