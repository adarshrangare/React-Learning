import React, { useState } from 'react'

const Counter = () => {

    const [value, setValue] = useState(0)
 
  return (
    <>
    <div className=' font-bold text-4xl'>Counter</div>
    <p className='p-5'>Counter Value: {value} </p>

    <button className='px-8 py-4 m-2' onClick={()=>{
        setValue(value+1) 
        setValue(value+1)
        setValue(value+1)
        // Value will update only by one because...
        // Mutiple setValue without callback fn will go in batches,
        // and it updates the last value correspond to current value
        // it is using React fiber diff algo
        
        // To avoid this, setValue also gives callback function with previous value of varriable
        setValue((prevValue)=>prevValue+1);
        setValue((prevValue)=>prevValue+1);
        setValue((prevValue)=>prevValue+1);

        // COMMENT EITHER LINE 13-15 OR 22-24 FOR BETTER UNDERSTANIND
         
    
    }}>Increase to {value+1}</button>
    <button className='px-8 py-4 m-2' onClick={()=>{
        setValue(value-1)
    }}>Decrease to {value-1}</button>
    </>
    
  )
}

export default Counter