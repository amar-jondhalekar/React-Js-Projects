import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function incremenCount(){
    setCount(prevcount => prevcount + 1);
    console.log(count);
  }
  function decrementCount(){
    setCount(prevcount => prevcount - 1);
    console.log(count);
  }

  return (
    <>
     <button onClick={decrementCount}>-</button>
     <span>{count}</span>
     <button onClick={incremenCount}>+</button>
    </>
  )
}

export default App
