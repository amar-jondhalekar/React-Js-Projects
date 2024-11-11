import React from 'react'

const ChildComponents = React.memo(
    (props) => {
        console.log("Child component go re-render again");
      return (
        <div>
            <button
            onClick={props.onClick}
            >
                {props.buttonName}
            </button>
        </div>
      )
    }
)

export default ChildComponents