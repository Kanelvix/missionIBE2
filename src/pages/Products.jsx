import React, { useEffect, useState } from 'react'
import AddProductForm from '../components/organisms/AddProductForm'
import ProductList from '../components/organisms/ProductList'
import { getCourses } from '../services/courses';
import { useDispatch, useSelector } from 'react-redux';
import { setCourses } from '../store/redux/courseSlice';

function Products() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.courses.items);
  const [loading, setLoading] = useState(data.length === 0);
  const [editing, setEditing] = useState(null);

  const fetchCourses = () => {
    getCourses()
    .then((response) => {
      dispatch(setCourses(response.data));
    }).catch((error) => {
      console.log("error", error);
    }).finally(() => {
      setLoading(false);
    })
  }

  useEffect(() => {
    if (data.length === 0) {
      fetchCourses();
    }
  }, []);
  
  return (
    <section className='px-4 md:ml-72 flex flex-col gap-8 py-6'>
      <div>
        <p className='text-3xl text-[--dark-color] font-bold'>Product Management</p>
      </div>
      <AddProductForm
        editing={editing}
        setEditing={setEditing}
      />
      <ProductList
        loading={loading}
        setEditing={setEditing}
      />
    </section>
  )
}

export default Products