import React from 'react'

const Child = ({changeColor}) => {
  return (
    <div>Child
        <button onClick={() => {
        changeColor('red')
    }}> Changed default color to Red </button>
    </div>
  )
}

export default Child