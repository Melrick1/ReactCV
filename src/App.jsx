import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Navigation from './components/Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navigation/>
    </>
  )
}

export default App
