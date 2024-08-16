import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <div>
      <header className="flex justify-between items-center p-6 md:px-36 bg-header">
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
        <div className="flex gap-4">
          <div 
            className="justify-center text-base font-normal px-4 md:px-8 py-2 my-auto cursor-pointer hover:text-pink-600 whitespace-nowrap"
            onClick={() => navigate('/login')}
          >
            Home
          </div>
          <div 
            className="justify-center text-base font-normal px-4 md:px-8 py-2 my-auto cursor-pointer hover:text-pink-600 whitespace-nowrap"
            onClick={() => navigate('/login')}
          >
            Sobre nós
          </div>
          <div 
            className="justify-center text-base font-normal px-4 md:px-8 py-2 my-auto cursor-pointer hover:text-pink-600 whitespace-nowrap"
            onClick={() => navigate('/login')}
          >
            Projetos
          </div>
          <div 
            className="justify-center text-base font-normal px-4 md:px-8 py-2 my-auto cursor-pointer hover:text-pink-600 whitespace-nowrap"
            onClick={() => navigate('/login')}
          >
            Depoimentos
          </div>
          <div 
            className="justify-center text-base font-normal px-4 md:px-8 py-2 my-auto cursor-pointer hover:text-pink-600 whitespace-nowrap"
            onClick={() => navigate('/login')}
          >
            Faça parte
          </div>
        </div>
      </header>
    </div>
  );
  
}
