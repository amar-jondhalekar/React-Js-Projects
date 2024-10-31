import { createContext, useState } from 'react'
import './App.css'
import ChildA from './components/ChildA';

// Step 1: create context 
// const UserContext = createContext();
// Step 2: wrap all the child inside a provider 
// Step 3: pass value 
// Step 4: go to consumer and consume value
const ThemeContext = createContext();

function App(){
  // const [user, setUser] = useState({name:"Amar"});
  const [theme, setTheme] = useState('light');
  return(
    <>
    <ThemeContext.Provider value={theme}>
      <div id='container'>
      <ChildA/>
      </div>
    </ThemeContext.Provider>
    </>
    // <>
    // <UserContext.Provider value={user}>
    //   <ChildA/>
    // </UserContext.Provider>
    // </>
  )
}

export default App
export {ThemeContext}