import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import AppClass from './AppClass.jsx'

createRoot(document.getElementById('myName')).render(
  <React.StrictMode>
     <App/>
     {/* <AppClass/> */}
  </React.StrictMode>
)
