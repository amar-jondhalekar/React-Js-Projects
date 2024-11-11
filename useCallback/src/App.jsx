import { useCallback, useState } from 'react'
import './App.css'
import ChildComponents from './components/ChildComponents';

function App() {
  const [count, setCount] = useState(0)

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, []);

  return (
    <div>
      <div>
      Count: {count}
      </div>
      <div>
      <button onClick={handleClick}> Increment </button>
      <div>
        <br /><br />
        <ChildComponents onClick={handleClick} buttonName="Click me"/>
      </div>
      </div>
    </div>
  )
}

export default App
