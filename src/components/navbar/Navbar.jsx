import React from 'react'
import styles from './navbar.module.css'
import Headings from '../headings/Headings';

const Navbar = () => {
  return (
    <>
    <div className ={`${styles.texture}`}>
        
      <Headings 
        variant="h1"
        text="Spring"/>    
            
    </div>
    </>
  )
}

export default Navbar;