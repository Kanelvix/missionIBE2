import React from 'react'

import '../App.css'
import Card from '../components/organisms/Card'

const signinField = [
  {
    name: "name",
    label: "Nama Lengkap",
    type: "text",
    placeholder: "John Doe"
  },
  {
    name: "email",
    label: "E-Mail",
    type: "email",
    placeholder: "JohnDoe@gmail.com"
  },
  {
    name: "gender",
    label: "Jenis Kelamin",
    type: "select",
    options: [ 
      "Wanita", "Pria"
    ]
  },
  {
    name: "phone",
    label: "No. Hp",
    type: "phone"
  },
  {
    name: "password",
    label: "Kata Sandi",
    type: "password",
    placeholder: "Password"
  },
  {
    name: "passwordConfirmation",
    label: "Konfirmasi Kata Sandi",
    type: "password",
    placeholder: "Password"
  }
];


function Signin() {
  return (
    <>
      <div className='min-h-screen flex items-center justify-center px-5'>
        <Card
          title="Pendaftaran Akun"
          text="Yuk, daftarkan akunmu sekarang juga!"
          fields={signinField}
          btnText1="Daftar"
          btnText2="Masuk"
          options={signinField}
          toPage="login"
        />
      </div>
    </>
  )
}

export default Signin;