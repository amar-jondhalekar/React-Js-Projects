import React, { useContext, useState } from 'react'
import './App.css'
import UseStateHook from './ReactHooks/UseStateHook'
import UseMemoHook from './ReactHooks/UseMemoHook'
import UseRefHook from './ReactHooks/UseRefHook'
import UseContextHook from './ReactHooks/UseContextHook'

// function countInitial(){
//   console.log('run function');
//   return 4;
// }
const ThemeContext = useContext();
function App() {
  return(
    <>
    <div> React Hooks </div>
    <UseStateHook/>
    <UseMemoHook/>
    <UseRefHook/>
    <UseContextHook/>
    <UseContextHook/>
    </>
  )
}

export default App
