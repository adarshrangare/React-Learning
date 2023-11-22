import {useState} from 'react';

function Counter(){

    // let count = 5;

    function incValue(){
        console.log("increase");
        
        if(count==20){
            return;
        }

        count+=1;
        console.log("value:",count);
        setCounter(count)
    }
    function decValue(){
        console.log("decrease");
        if(count == -20){
            return;
        }
        count-=1;
        console.log("value:",count);
        setCounter(count)
    }

    // Use State Hook
    // const [first, setfirst] = useState(second)
    const defaultVal = 0;
    let [count,setCounter] = useState(defaultVal)

    

    return (
        <>
            <h1> Counter</h1>
            <h2> Counter Value: {count}</h2>
            <button onClick={incValue}> Increase Value</button>
            <br/> <br />
            <button onClick={decValue}> Decrease Value</button>
        </>

    )
}
export default Counter;