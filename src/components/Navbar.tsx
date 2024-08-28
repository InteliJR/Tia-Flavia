import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <header className="flex justify-between items-center p-6 md:px-36 bg-header relative z-20">
        {/* Logo - Hidden when menu is open */}
        {!isOpen && (
          <div 
            className="flex gap-5 justify-between w-full whitespace-nowrap max-w-[1265px] md:max-w-full"
            onClick={() => navigate('/')}
          >
            <img 
              src="/logo.png" 
              alt="Liberty Logo" 
              className="shrink-0 max-w-full scale-125 w-32 md:w-48 lg:w-52 cursor-pointer" 
            />
          </div>
        )}

        {/* Hamburger menu button */}
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

        {/* Menu items */}
        <div className={`fixed top-0 left-0 w-full h-full md:h-auto transition-transform transform ${isOpen ? 'translate-x-0 bg-white' : 'translate-x-full'} md:bg-transparent md:relative md:flex md:gap-4 md:translate-x-0 z-10`}>
          <div className="flex flex-col justify-center items-center h-full md:h-auto md:flex-row md:justify-end gap-8 md:gap-4">
            <div 
              className="text-black text-2xl md:text-base font-normal px-8 py-2 cursor-pointer hover:text-pink-600"
              onClick={() => {
                navigate('/login');
                setIsOpen(false);
              }}
            >
              Home
            </div>
            <div 
              className="text-black text-2xl md:text-base font-normal px-8 py-2 cursor-pointer hover:text-pink-600"
              onClick={() => {
                navigate('/login');
                setIsOpen(false);
              }}
            >
              Sobre nós
            </div>
            <div 
              className="text-black text-2xl md:text-base font-normal px-8 py-2 cursor-pointer hover:text-pink-600"
              onClick={() => {
                navigate('/login');
                setIsOpen(false);
              }}
            >
              Projetos
            </div>
            <div 
              className="text-black text-2xl md:text-base font-normal px-8 py-2 cursor-pointer hover:text-pink-600"
              onClick={() => {
                navigate('/login');
                setIsOpen(false);
              }}
            >
              Depoimentos
            </div>
            <div 
              className="text-black text-2xl md:text-base font-normal px-8 py-2 cursor-pointer hover:text-pink-600"
              onClick={() => {
                navigate('/login');
                setIsOpen(false);
              }}
            >
              Faça parte
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
