import React from 'react'

const Child = (props) => {
  return (
    <div>
        <p> From Parent To Children </p>
        <h2>{props.name}</h2>
        <h2>{props.color}</h2>
    </div>
  )
}

export default Child