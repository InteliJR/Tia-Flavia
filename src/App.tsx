import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { useNavigate } from 'react-router-dom'

export default function App() {
  const navigate = useNavigate()
  return (
    <div className='font-bold text-3xl' >
      <Navbar />
      <div className='p-44'></div>
      <Footer />
    </div>
  )
}
