import React, { useState } from 'react'

const UseStateHook = () => {
    const[count, setCount] = useState(0);
    // let count = 0;

    const plus = () => {
        // count++;
        // setCount(count + 1);
        // Also get previous value or data and when we use setCount then updating value by 3 times
        setCount((prevCount) => prevCount + 1)
        setCount((prevCount) => prevCount + 1)
        setCount((prevCount) => prevCount + 1)
        console.log(count);
    }
    const sub = () => {
        // count--;
        setCount(count - 1);
        console.log(count);
    }
  return (
    <div>
        <h2>useStateHook</h2>
        <button onClick={sub}>-</button>
        <p>{count}</p>
        <button onClick={plus}>+</button>
    </div>
  )
}

export default UseStateHook