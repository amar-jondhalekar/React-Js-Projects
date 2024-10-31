import React, { createContext } from 'react'
import Provider from '../components/Provider';

const ThemeContext = createContext();
const UseContextHook = () => {
   
  return (
    <>
    <h1> useContext Hook </h1>
    <Provider/>
    </>
  )
}

export default UseContextHook