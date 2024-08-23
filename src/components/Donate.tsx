import React from 'react'

export default function Donate() {

  const handleRedirect = () => {
    window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSeYUBS9MSnIGuPOTORnDsxnVpWVPVOJ4oeHyGztzyKJv1xZgQ/viewform?usp=sf_link";
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center p-6 md:px-36 bg-donate">
        <div className='flex justify-between items-center py-16 text-white'>
          <p className='text-5xl'>Faça parte como doador!</p>
        </div>

        <div className='flex justify-between items-center space-x-10'>
          <div className='flex flex-col justify-center items-center py-24 px-8 rounded-[40px] bg-[#F4EDAA]'>
            <p className='font-bold text-[#2E2E2E] mb-6'>
              Se interessou e quer ajudar?
            </p>
            <button 
                type="submit" 
                className="w-full py-4 bg-[#EE8DB3] text-white rounded-2xl border-[1px] border-[#E13377] hover:bg-pink-600 transition-colors"
              >
                Doe agora!
              </button>
          </div>


          <div className='flex flex-col justify-center items-center py-24 px-8 rounded-[40px] border-r-[1px] border-t-[1px] border-b-[1px] border-[#43C3FA] '>
            <p className='text-white font-bold mb-4'>
              Quer se tornar um voluntário?
            </p>
            <button 
                type="submit" 
                className="w-full py-4 bg-[#EE8DB3] text-white rounded-2xl border-[1px] border-[#E13377] hover:bg-pink-600 transition-colors"
                onClick={handleRedirect}
              >
                Entrar!
              </button>
          </div>

        </div>
      </div>
      
    </div>
  )
}
