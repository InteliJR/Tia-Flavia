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
      <section id="home" className="min-h-screen lg:min-h-screen">
        <Home />
      </section>
      <section id="about" className="min-h-screen lg:min-h-screen">
        <AboutUs />
      </section>
      <section id="projects" className="min-h-screen lg:min-h-screen">
        <Projects />
      </section>
      <section id="testimonials" className="min-h-screen lg:min-h-screen">
        <Testimonials />
      </section>
      <section id="donate" className="min-h-screen lg:min-h-screen">
        <Donate />
      </section>
      <Footer />
    </div>
  );
}
