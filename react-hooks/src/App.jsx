import React, { useState } from 'react'
import './App.css'
import UseStateHook from './ReactHooks/UseStateHook'
import UseMemoHook from './ReactHooks/UseMemoHook'

// function countInitial(){
//   console.log('run function');
//   return 4;
// }

function App() {
  return(
    <>
    <div> React Hooks </div>
    <UseStateHook/>
    <UseMemoHook/>
    </>
  )
}

export default App