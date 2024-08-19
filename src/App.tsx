import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Donate from './components/Donate'
import { useNavigate } from 'react-router-dom'
import AboutUs from './components/AboutUs'

export default function App() {
  const navigate = useNavigate()
  return (
    <div className='font-bold text-3xl' >
      <Navbar />
      <AboutUs />
      <Donate />
      <Footer />
    </div>
  )
}
