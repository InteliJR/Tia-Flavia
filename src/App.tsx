import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Donate from './components/Donate'
import { useNavigate } from 'react-router-dom'

export default function App() {
  const navigate = useNavigate()
  return (
    <div className='font-bold text-3xl' >
      <Navbar />
      <Donate />
      <Footer />
    </div>
  )
}
