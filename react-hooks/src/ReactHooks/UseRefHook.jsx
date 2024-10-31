import React, { useEffect, useState, useRef } from 'react'

const UseRefHook = () => {
    const [text, setText] = useState("");
    // const [rendercount, setRenderCount] = useState(0);
    const renderCount = useRef(0);
    const inputRef = useRef();
    const prevName = useRef('');

    function focus(){
        inputRef.current.focus();
    }
    useEffect(() => {
        // setRenderCount(prevRenderCount => prevRenderCount + 1);
        renderCount.current = renderCount.current + 1;
        prevName.current = text

    }, [text])
  return (
    <>
    <h1> useRef Hook </h1>
    <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
    <input type="text" value={text} ref={inputRef} onChange={(e) => setText(e.target.value)}/>
    <h4>My Name is: {text}</h4>
    <div> I rendered {renderCount.current} times </div>
    <button onClick={focus}> Focus </button>
    <div> My name is {text} and my previous name is {prevName.current}</div>
    </>
  )
}

export default UseRefHook