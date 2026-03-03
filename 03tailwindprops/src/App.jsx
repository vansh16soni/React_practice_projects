import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {

  return (
    <>
    <h1 className="text-center text-amber-100 bg-amber-900 rounded-2xl">HI this side vansh</h1>
      <Card username="HEmu" btn="Hanji" />
      <Card />
    </>
  )
}

export default App
