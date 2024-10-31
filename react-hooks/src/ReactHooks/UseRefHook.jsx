import React, { useEffect, useState, useRef } from 'react'

const UseRefHook = () => {
    const [text, setText] = useState("");
    // const [rendercount, setRenderCount] = useState(0);
    const renderCount = useRef(0);

    useEffect(() => {
        // setRenderCount(prevRenderCount => prevRenderCount + 1);
        renderCount.current = renderCount.current + 1;

    })
  return (
    <>
    <h2> UseRef Hook </h2>
    <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
    <h4>My Name is: {text}</h4>
    <div> I rendered {renderCount.current} times </div>
    </>
  )
}

export default UseRefHook