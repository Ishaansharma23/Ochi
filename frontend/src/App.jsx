import { useState } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'

function App() {
  

  return (
    <>
      <div className='w-full h-screen text-white'>
       <Navbar />
       <LandingPage />
       <Marquee />
       <About />
      </div>
    </>
  )
}

export default App
