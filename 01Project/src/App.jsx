import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button'
import ColorBar from './components/ColorBar'

function App() {
  const [rang,setColor] = useState("lightgreen");
  
  return (

    <>
    
    <div className='main' style={{backgroundColor:rang}}></div>
      
      <ColorBar className="colorBar" func={setColor}/>

    </>

  
    
  )
}

export default App;


