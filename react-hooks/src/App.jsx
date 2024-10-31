import React, { useState } from 'react'
import './App.css'
import UseStateHook from './ReactHooks/UseStateHook'
import UseMemoHook from './ReactHooks/UseMemoHook'
import UseRefHook from './ReactHooks/UseRefHook'
import UseContextHook from './ReactHooks/UseContextHook'

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
    <UseRefHook/>
    <UseContextHook/>
    </>
  )
}

export default App
