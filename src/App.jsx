import { useState } from 'react'
import Button from './components/Button.jsx'
import './App.css'
import {Navbar} from './components/index.js'
import {Outlet} from 'react-router-dom'

function App() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default App
