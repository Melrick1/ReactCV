import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Navigation from './components/Nav/Nav.jsx'
import Hero from './components/Hero/Hero.jsx'
import About from './components/About/About.jsx'
import Resume from './components/Resume/Resume.jsx'

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
