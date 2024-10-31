import { useState } from 'react'
import './App.css'

// function countInitial(){
//   console.log('run function');
//   return 4;
// }

function App() {
  const [state, setState] = useState({count: 4, theme: 'blue'})
  const count = state.count
  const theme = state.theme

  function incremenCount(){
    // setCount(prevcount => prevcount + 1);
    // console.log(count);
    setState(prevState => {
      return{
        ...prevState, count: prevState.count + 1
      }
    })
  }
  function decrementCount(){
    // setCount(prevcount => prevcount - 1);
    // console.log(count);
    setState(prevState => {
      return {
        ...prevState, count: prevState.count - 1
      }
    })
  }

  return (
    <>
     <button onClick={decrementCount}>-</button>
     <span>{count}</span>
     <span>{theme}</span>
     <button onClick={incremenCount}>+</button>
    </>
  )
}

export default App
