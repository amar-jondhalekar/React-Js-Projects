import React, { useRef, useState } from 'react'

const UseRefHook = () => {
    const [count, setCount] = useState(0);
    const ref = useRef(0);

    const calPrint = () => {
        setCount(count + 1);
        ref.current++;

        console.log("State Count", count);
        console.log("Ref Count", ref.current);
    }
    // const inputEl = document.getElementById('myInput');
    const inputRef = useRef(null);

    const handleSubmit = () => {
        const value = inputRef.current.value;
        inputRef.current.style.backgroundColor = 'silver';
        inputRef.current.focus();
        console.log(value);
        console.log(inputRef.current);
    };

  return (
    <div> UseRefHook
    <input type="text" ref={inputRef} id="inputEl"/>
    <button onClick={handleSubmit}>Focus</button>

    <h2>Count: {count}</h2>
    <h2>Count: {ref.current}</h2>
    <button onClick={calPrint}> CalIncremenet </button>
    </div>
  );
};
export default UseRefHook