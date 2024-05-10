import React from 'react'
import Navbar from '../components/navbar/Navbar'
import LoginForm from '../components/login/LoginForm'
const LoginPage = () => {
  return (
    <>
      <Navbar/>
        <h1 className='text-orange-400 m-[200px] bg-black'> ciao sono la login page</h1>  
        <LoginForm/>
    </>
  )
}

export default LoginPage