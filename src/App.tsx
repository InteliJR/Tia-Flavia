import React from 'react'
import Home from './components/Home'
import { useNavigate } from 'react-router-dom'

export default function App() {
  const navigate = useNavigate()
  return (
    <div className='font-bold text-3xl' >
      Hello World!
      <Home />
    </div>
  )
}
