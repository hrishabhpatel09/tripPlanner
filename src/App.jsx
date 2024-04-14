import { useState } from 'react'
import Button from './components/Button.jsx'
import './App.css'
import {Navbar,NavMenu} from './components/index.js'
import {Outlet} from 'react-router-dom'
import { useRef } from 'react'
import {Provider} from 'react-redux'
import {store} from './store/store.js'
import { useSelector } from 'react-redux'
function App() {
  const navRef = useRef(null)
  return (
    <Provider store={store}>
      <Navbar ref={navRef}/>  
      <Outlet/>
    </Provider>
  )
}

export default App
