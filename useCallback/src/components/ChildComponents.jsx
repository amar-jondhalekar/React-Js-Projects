import React from 'react'

const ChildComponents = (props) => {
    console.log("Child component go re-render again");
  return (
    <div>
        <button>
            {props.buttonName}
        </button>
    </div>
  )
}

export default ChildComponents