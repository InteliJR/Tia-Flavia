import { FaFacebookF, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-header py-10 md:py-20">
      <div className="container mx-auto px-4">
        <hr className="border-black mb-6 md:mb-10" />
        <div className="flex flex-col md:flex-row justify-between gap-y-4 md:gap-x-4 items-center">
          <div className="flex flex-col md:flex-row justify-start gap-y-2 md:gap-x-4 items-center text-center md:text-left">
            <div className="text-sm font-normal">
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
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://www.instagram.com/institutotiaflavia/" className="font-bold hover:text-gray-800">
              <FaInstagram size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
