import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Donate from './components/Donate';
import AboutUs from './components/AboutUs';
import Home from './components/Home';
import Testimonials from './components/Testimonials';
import Projects from './components/Projects';

export default function App() {

  return (
    <div className='text-md w-screen'>
      <Navbar />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <AboutUs />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="donate">
        <Donate />
      </section>
      <Footer />
    </div>
  );
}
