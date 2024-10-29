import React, { useEffect, useState } from 'react'

const initialData = () => {
    console.log('Hello, Amar!');
    return 0;
}
const UseStateHook = () => {
                                        // if initialData() directly pass then it will render every time when count button click 
    const[count, setCount] = useState(() => initialData()); // when we pass as callback then initialData() will run only once
    // let count = 0;

    const plus = () => {
        // count++;
        // setCount(count + 1);
        // Also get previous value or data and when we use setCount then updating value by 3 times
        setCount((prevCount) => prevCount + 1)
        // setCount((prevCount) => prevCount + 1)
        // setCount((prevCount) => prevCount + 1)
        console.log(count);
    }
    const sub = () => {
        // count--;
        setCount(count - 1);
        console.log(count);
    }

    useEffect(() => {
        // Function logic will be written here
        console.log("count", count); 

        return() => {
        // this is cleanup function 
        }
    }, [
        // count, when we add count here it will not render or watch function logic in useEffect 
        // this is dependency array
    ])
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