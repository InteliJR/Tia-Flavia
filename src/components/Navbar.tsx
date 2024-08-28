import { useState, useEffect } from 'react';

type SectionId = 'home' | 'about' | 'projects' | 'testimonials' | 'donate';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id: SectionId) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop && scrollTop > 100) {
        // User is scrolling down and has passed 100px from the top
        setIsVisible(false);
      } else {
        // User is scrolling up
        setIsVisible(true);
      }
      setLastScrollTop(scrollTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <div>
      <header
        className={`fixed top-0 left-0 w-full p-6 md:px-36 bg-header z-20 transition-transform duration-300 ${
          isVisible ? 'transform translate-y-0' : 'transform -translate-y-full'
        }`}
      >
        {!isOpen && (
          <div 
            className="flex gap-5 justify-between w-full whitespace-nowrap max-w-[1265px] md:max-w-full"
            onClick={() => scrollToSection('home')}
          >
            <img 
              src="/logo.png" 
              alt="Liberty Logo" 
              className="shrink-0 max-w-full scale-125 w-32 md:w-48 lg:w-52 cursor-pointer" 
            />
          </div>
        )}

        <div className="md:hidden z-30">
          <button onClick={toggleMenu} className="text-pink-600 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>

        <div className={`fixed top-0 left-0 w-full h-full md:h-auto transition-transform transform ${isOpen ? 'translate-x-0 bg-white' : 'translate-x-full'} md:bg-transparent md:relative md:flex md:gap-4 md:translate-x-0 z-10`}>
          <div className="flex flex-col justify-center items-center h-full md:h-auto md:flex-row md:justify-end gap-8 md:gap-4">
            <div 
              className="text-black text-2xl md:text-base font-normal px-8 py-2 cursor-pointer hover:text-pink-600"
              onClick={() => scrollToSection('home')}
            >
              Home
            </div>
            <div 
              className="text-black text-2xl md:text-base font-normal px-8 py-2 cursor-pointer hover:text-pink-600"
              onClick={() => scrollToSection('about')}
            >
              Sobre nós
            </div>
            <div 
              className="text-black text-2xl md:text-base font-normal px-8 py-2 cursor-pointer hover:text-pink-600"
              onClick={() => scrollToSection('projects')}
            >
              Projetos
            </div>
            <div 
              className="text-black text-2xl md:text-base font-normal px-8 py-2 cursor-pointer hover:text-pink-600"
              onClick={() => scrollToSection('testimonials')}
            >
              Depoimentos
            </div>
            <div 
              className="text-black text-2xl md:text-base font-normal px-8 py-2 cursor-pointer hover:text-pink-600"
              onClick={() => scrollToSection('donate')}
            >
              Faça parte
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
