import React, { useEffect, useState } from 'react'
import AddProductForm from '../components/organisms/AddProductForm'
import ProductList from '../components/organisms/ProductList'
import axios from 'axios';

function Products() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [editing, setEditing] = useState(null);

  const fetchCourses = () => {
    axios.get('https://699fde8d3188b0b1d536fff8.mockapi.io/api/v1/courses')
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
  
  return (
    <section className='px-4 md:ml-72 flex flex-col gap-8 py-6g'>
      <div>
        <p className='text-3xl text-[--dark-color] font-bold'>Product Management</p>
      </div>
      <AddProductForm fetchCourses={fetchCourses} editing={editing} setEditing={setEditing} />
      <ProductList loading={loading} data={data} setEditing={setEditing} />
    </section>
  )
}

export default Products