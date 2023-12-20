import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Navigation from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Resume from './components/Resume'

function App() {
  return (
    <>
      <Navigation/>
      <main className='content'>
        <Hero/>
        <About/>
        <Resume/>
      </main>
    </>
  )
}

export default App
