import React from 'react'
import MyNavbar from '../myNavbar/MyNavbar'
const MainLayout = ({children}) => {
  return (
    <>
      <MyNavbar/>
      {children}

    </>
  )
}

export default MainLayout;