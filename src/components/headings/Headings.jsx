import React from 'react'
import styles from "./headings.module.css"



const Headings = ({variant, text,className}) => {
    const variants = {
        h1: "heading-h1",
        p: "heading-p",
        h2: "heading-h2",
        h3: "heading-h3",
        h4: "heading-h4",
    }

  return (
    <div className={`${styles[variants[variant]]} ${styles[className]}`}>{text}</div>
  )
}

export default Headings