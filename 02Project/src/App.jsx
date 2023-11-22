import { useState, useCallback, useEffect,useRef } from "react";



function App() {
  const [length, setLength] = useState(8);
  const [numbers, setNumbers] = useState(false);
  const [character, setCharacter] = useState(false)
  const [password, setPassword] = useState("");

  // UseRef

  const passwordRef = useRef(null)

  const passwordGenrator = useCallback(()=>{
    let genratedPassword = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    str = numbers && character ? str+"0123456789"+"@$_#^+-=" : numbers ? str+"0123456789" : character ? str+"@$_#^+-=" : str;

    for(let i=0;i<length;i++){

         let index = Math.floor(Math.random()*str.length)
         
         genratedPassword+= str.charAt(index);
        //  console.log(pass);

        setPassword(genratedPassword);

    }

  },[length,numbers, character, setPassword])



  // useCallback(func, depandencyArry[])
  
  // passwordGenrator();

  // useEffect(callbackFunc, Dependency)

  useEffect(()=>{

    passwordGenrator();

  },[length,numbers,character,passwordGenrator])


  const copyPasswordToClipboard =  useCallback(()=>{

    console.log(password);
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)

  },[password])


  return (
   
    <>
      <h1 className="text-4xl font-bold text-white text-center">Password Generator</h1>
      <div className="w-full max-w-md mx-auto p-4 px-6 text-red-500 bg-gray-700 rounded-xl ">

          <div className="flex gap-0 shadow-lg overflow-hidden rounded-xl bg-slate-500">

              <input 
              type="text"
              value={password} 
              placeholder="Genrated Password"   
              readOnly  
              ref={passwordRef}         
              className="border-none outline-none px-4 py-2 text-green-600 w-[80%]"
              />
            <button
            onClick={copyPasswordToClipboard}
            className="text-white font-bold w-[20%] shink-0 px-3 py-1 bg-blue-600"

            >
              Copy
            </button>


          </div>

        <div className="flex text-sm text-white gap-x-4 mt-5 mx-2 items-center justify-between">

            <div className="flex justify-center items-center gap-2 text-green-200">
              <input 
              type="range" 
              id="length"
              min={8}
              max={50}
              minLength={8}
              maxLength={100}
              
              className="cursor-pointer"
              onInput={(e)=>setLength(e.target.value)}
              />
              <label htmlFor="length" className="font-bold text-base" >Length: ({length})</label>
            </div>
          <input 
          type="checkbox"
          id="numbers"
          value={numbers}
           onInput={(e)=>setNumbers((prev)=> !prev)}
          className="w-4"
          />
          <label htmlFor="numbers" className="ml-[-10px]">Number</label>
          <input 
          type="checkbox"
          id="character"
          value={character}
           onInput={(e)=>setCharacter((prev)=> !prev)}
          className="w-4"
          />
          <label htmlFor="character" className="ml-[-10px]">Special Characters</label>
        </div>

        


      </div>

    </>
  )
}

export default App
