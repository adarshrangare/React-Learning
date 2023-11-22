import { Class } from '@mui/icons-material'
import React from 'react'
import '../App.css'
import Button from './Button'

const ColorBar = ({func}) => {
  return (
    <>
        <div className='btnContainer'>
        <Button color="green" setColor={func}/>
        <Button color="red" setColor={func}/>
        <Button color="yellow" setColor={func}/>
        <Button color="blue" setColor={func}/>
        <Button color="white" setColor={func}/>
        <Button color="olive" setColor={func}/>
        <Button color="black" setColor={func}/>
        <Button color="grey" setColor={func}/>
        <Button color="orange" setColor={func}/>
        <Button color="maroon" setColor={func}/>
        <Button color="teal" setColor={func}/>
        <Button color="skyblue" setColor={func}/>
        <Button color="lightgreen" setColor={func}/>
        
        </div>
    </>
  )
}

export default ColorBar