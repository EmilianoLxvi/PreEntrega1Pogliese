import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import ItemlistContainer from './components/ItemListContainer/ItemListContainer'
import { getFabUtilityClass } from '@mui/material'


function App() {
  const greeting="bievenidos"
  

  return (
    <>
    <Navbar/>
    <ItemlistContainer  greeting={greeting}  />

    </>
  )
}

export default App
