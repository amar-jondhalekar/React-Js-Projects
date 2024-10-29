import React, { useEffect, useState } from 'react'

const UseEffectHook = () => {
    const [text, setText] = useState("posts");
    const [data, setData] = useState(null);
    console.log(text);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${text}`)
        .then((response) => response.json())
        .then((json) => setData(json));
    }, [text])

    console.log(data);
  return (
    <div>
      <h2>useEffect</h2>
        <button onClick={() => { setText('posts')}}>Posts</button>
        <button onClick={() => { setText('users')}}>Users</button>
        <button onClick={() => { setText('comments')}}>Comments</button>
        {
          data?.map((value, i) => (
            <pre key={i}>
              {JSON.stringify(value)}
            </pre>
          ))
        }
    </div>
  )
}

export default UseEffectHook