import React, { useState } from 'react'
import Child from './Child';

const Parent = () => {
    const[color, setColor] = useState('default');
    const changeColor = (color) => {
        setColor(color);
    }
  return (
    <div>
        {"this is parent component color:"+color}
        <Child changeColor={changeColor}/>
    </div>
  )
}

export default Parent