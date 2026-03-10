import React, { useEffect, useReducer } from 'react'
import ProductFormInput from '../molecules/ProductFormInput'
import ProductFormSelect from '../molecules/ProductFormSelect'
import { postCourse, putCourse } from '../../services/courses'

const inputs = [
  {
    title: "Judul Produk",
    type: "text",
    required: true,
    placeholder: "Enter Product Title",
    data: "title"
  },
  {
    title: "Harga (IDR)",
    type: "number",
    required: true,
    placeholder: "200000",
    data: "price"
  },
  {
    title: "Nama Mentor",
    type: "text",
    required: true,
    placeholder: "John Doe",
    data: "name"
  },
  {
    title: "Role Mentor",
    type: "text",
    required: true,
    placeholder: "Senior Frontend Developer",
    data: "role"
  },
  {
    title: "Company",
    type: "text",
    required: false,
    placeholder: "Tokopedia",
    data: "company"
  },
  {
    title: "Category",
    type: "select",
    required: false,
    placeholder: "Desain",
    data: "category"
  },
  {
    title: "Foto Mentor",
    type: "url",
    required: false,
    placeholder: "Mentor's photo URL",
    data: "pfp"
  },
  {
    title: "URL Foto",
    type: "url",
    required: true,
    placeholder: "Product's photo URL",
    data: "thumbnail"
  },
  {
    title: "Deskripsi",
    type: "text",
    required: false,
    placeholder: "Product's details",
    data: "desc"
  },
]

const defaultForm = {
  title: "",
  category: "Bisnis",
  desc: "",
  price: "",
  rating: 0,
  totalReview: 0,
  pfp: "",
  thumbnail: "",
  name: "",
  role: "",
  company: "",
}

const action = (state, action) => {
  switch(action.type) {
    case "change_field" : {
      return {
        ...state,
        [action.field]: action.value,
      };
    }

    case "set_all_fields": {
      return action.payload;
    }

    default: {
      return state;
    }

    case "reset" : {
      return defaultForm;
    }
  }
}

function AddProductForm({fetchCourses, editing, setEditing}) {
  const [data, setData] = useReducer(action, defaultForm);


  useEffect(() => {
    if (editing) {
      setData({
        type: "set_all_fields",
        payload: editing
      });
    }
  }, [editing])

  const updateCourse = async(data) => {
    try {
      await putCourse(data);
      fetchCourses();
    } catch {
      console.log('failed update');
    }
  }

  const createCourse = async(data) => {
    try {
      await postCourse(data);
      fetchCourses();
    } catch{
      console.log('failed')
    }    
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (editing) {
      updateCourse(data);
      setEditing(null);
    } else {
      createCourse(data);
    }
    setData({type:"reset"})
  }

  return (
    <form onSubmit={handleSubmit} className='bg-white border border-[--border-color] p-5 rounded-lg flex flex-col gap-5'>
      <p className='font-semibold text-[--dark-color] text-xl py-2 border-b border-[--border-color]'>{editing ? 'Perbarui Produk' : 'Tambah Produk Baru'}</p>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 border-b pb-5'>
        {
          inputs.map((item)=>(
            item.title === "Category" 
            ? <ProductFormSelect
              title={item.title}
              key={item.title}
              value={data[item.data]}
              onChange={(e) =>
                setData({
                type: "change_field",
                field: item.data,
                value: e.target.value
              })} /> 
            : <ProductFormInput 
              title={item.title}
              type={item.type}
              required={item.required}
              key={item.title}
              placeholder={item.placeholder}
              value={data[item.data]}
              onChange={(e) =>
                setData({
                  type: "change_field",
                  field: item.data,
                  value: e.target.value
                })} 
              />
          ))
        }
        
      </div>
      <div className='w-max self-end'>
        <button className='bg-[--blue-color] text-white hover:bg-[--darker-blue-color] h-10 rounded-lg font-medium text-sm md:text-base cursor-pointer w-full px-8 duration-300 active:bg-[--blue-color]' type='submit'>{editing ? 'Perbarui Produk' : 'Tambah Produk'}</button>
      </div>
    </form>
  )
}

export default AddProductForm