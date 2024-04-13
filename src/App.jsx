import { useState } from 'react'
import Button from './components/Button.jsx'
import './App.css'
import {Navbar} from './components/index.js'
import {Outlet} from 'react-router-dom'
import { useRef } from 'react'

function App() {
  const navRef = useRef(null)
  return (
    <>
    <Navbar ref={navRef}/>
    <Outlet/>
    </>
  )
}

export default App
