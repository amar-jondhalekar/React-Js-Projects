import React, { useReducer } from 'react'

const reducer = (state, action) => {
    switch(action.type){
        case "Increment":
            return{ ...state, count: state.count + 1};
        case "Decrement":
            return{ ...state, count: state.count - 1};
        case "Toggle_Hidden":
            return{ ...state, hidden: !state.hidden};
        default:
            return state;
    }
};
const UseReducerHook = () => {
    // const [count, setCount] = useState(0);
    // const [hidden, setHidden] = useState(false);

    const[state, dispatch] = useReducer(reducer, {count: 0, hidden: false});

  return (
    <div className='useReducer'>UseReducerHook
    <h1>Count: {state.count}</h1>
        <button onClick={
            // () => setCount(count + 1)
            () => {
                dispatch({type: "Increment"})
            }
        }>Increment</button>
        <button onClick={
            // () => setCount(count -1)
            () => {
                dispatch({type: "Decrement"});
            }
        }>Decrement</button>
        <button onClick={
            // () => setHidden(!hidden)
            () => {
                dispatch({type: 'Toggle_Hidden'});
                dispatch({type: "Decrement"});
            }
        }>Hide</button>
        {state.hidden ? <h1>Hidden</h1> : <h1>Not Hidden</h1>}
    </div>
  )
}

export default UseReducerHook