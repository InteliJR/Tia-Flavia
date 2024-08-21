import { FaFacebookF, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-header py-20">
      <div className="container mx-auto px-4">
        <hr className="border-black mb-10" />
        <div className="flex justify-between gap-x-4 items-center flex-wrap">
          <div className='flex justify-start gap-x-4 items-center flex-wrap'>
            <div className="text-sm font-normal me-4">
              © 2024 · Todos os direitos reservados.
            </div>
            <div className="text-sm font-normal underline cursor-pointer">
            Política de Privacidade
            </div>
            <div className="text-sm font-normal underline cursor-pointer">
            Termos e Condições
            </div>
            <div className="text-sm font-normal underline cursor-pointer">
            Política de Cookies
            </div>
          </div>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com" className="font-bold hover:text-gray-800">
              <FaFacebookF size={18} />
            </a>
            <a href="https://www.instagram.com" className="font-bold hover:text-gray-800">
              <FaInstagram size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

