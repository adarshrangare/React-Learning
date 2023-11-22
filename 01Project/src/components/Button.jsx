import React from 'react'
import '../App.css'
// import setColor from '../App'
import { useState } from 'react'
import App from '../App'
const Button = ({color,setColor}) => {
    // console.log(App);
    console.log(setColor);
  return (
    <>
        <button style={{backgroundColor:color}} onClick={()=>setColor(color)}>{color}</button>
    </>
  )
}

export default Button