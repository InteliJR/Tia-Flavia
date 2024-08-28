import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Donate from './components/Donate'
import AboutUs from './components/AboutUs'
import Home from './components/Home'
import Testimonials from './components/Testimonials'
import Projects from './components/Projects'

export default function App() {

  return (
    <div className='text-md w-screen' >
      <Navbar />
      <Home/>
      <AboutUs />
      <Projects />
      <Testimonials />
      <Donate />
      <Footer />
    </div>
  )
}
