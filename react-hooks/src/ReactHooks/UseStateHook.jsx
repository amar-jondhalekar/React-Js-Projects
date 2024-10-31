import React from 'react'
import { useState } from 'react'

const UseStateHook = () => {
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
      <h1> useState Hook </h1>
       <button onClick={decrementCount}>-</button>
       <span>{count}</span>
       <span>{theme}</span>
       <button onClick={incremenCount}>+</button>
      </>
    )
}

export default UseStateHook