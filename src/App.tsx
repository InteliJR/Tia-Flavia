import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Donate from './components/Donate'
import { useNavigate } from 'react-router-dom'
import AboutUs from './components/AboutUs'
import Home from './components/Home'

export default function App() {
  const navigate = useNavigate()
  return (
    <div className='text-md' >
      <Navbar />
      <Home/>
      <AboutUs />
      <Donate />
      <Footer />
    </div>
  )
}
