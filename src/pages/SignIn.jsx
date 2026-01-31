import React from 'react'

import '../App.css'

import Navbar from '../components/navbar'
import Card from '../components/card'

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
      <Navbar />
      <Card
        title="Masuk ke Akun"
        text="Yuk, lanjutin belajarmu di videobelajar."
        type="text"
        fields={signinField}
        btnText1="Daftar"
        btnText2="Masuk"
      />
    </>
  )
}

export default Signin;