import React, { useMemo, useState } from 'react'

const UseMemoHook = () => {
  const [number, setNumber] = useState(1);
  const [text, setText] = useState('');

  // Using useMemo to memoize the result of the calculation
  const largeCalculation = useMemo(() => {
    console.log("Calculating...");
    let sum = 0;
    for(let i = 0; i <= 1000000; i++){
      sum += number;
    }
    return sum;
  }, [number, text]) // Only re-runs when 'number' changes
  // using 
  return (
    <>
    <h1> useMemo Hook </h1>
    <h2> Expensive Calculate Result: {largeCalculation}</h2>
    <input type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value))}/>
    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder='type here without delay'/>
    </>
  )
}

export default UseMemoHook