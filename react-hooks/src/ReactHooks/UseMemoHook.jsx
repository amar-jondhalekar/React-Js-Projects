import React, { useState } from 'react'

const UseMemoHook = () => {
  const [number, setNumber] = useState(1);
  const [text, setText] = useState('');

  // using 
  return (
    <>
    <h2> Expensive Calculate Result: </h2>
    <input type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value))}/>
    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder='type here without delay'/>
    </>
  )
}

export default UseMemoHook