import Card from './components/Card'
import './App.css'
import Counter from './components/Counter'

function App() {
  
  const myObj = {name:"Adarsh",city:"Indore"}
  const myArray = [1,2,3,4]

  return (
    <>

      <Counter/>

      <h1 className='mb-4 bg-cyan-400 text-2xl text-green-500 p-4 rounded-2xl cursor-pointer hover:text-red-400'>Testing</h1>

      <Card name="Adarsh" propObj = {myObj} propArr={myArray}/>

      <Card name="Apple"/>
    </>
  )
}

export default App
