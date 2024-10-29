import React from 'react'
import Child from './Child'

const Parent = () => {
    const color = "Red";
  return (
    <Child name="Amar Jondhalekar" color={color}/>
  )
}

export default Parent