import React from 'react'

export default function Donate() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center p-6 md:px-36 bg-donate">
        <div className='flex justify-between items-center py-16 text-white'>
          <p className='text-5xl'>Faça parte como doador!</p>
        </div>
        <div className='flex justify-between items-center'>
          <div className='flex flex-col justify-center items-center py-24 px-8 rounded-[40px] bg-[#F4EDAA]'>
            <p className='font-semibold text-[#2E2E2E] mb-6'>
              Se interessou e quer ajudar?
            </p>
            <button 
                type="submit" 
                className="w-full py-4 bg-[#EE8DB3] text-white rounded-2xl border-[1px] border-[#E13377] hover:bg-pink-600 transition-colors"
              >
                Doe agora!
              </button>
          </div>
          <div className="flex flex-col justify-center items-center p-8 rounded-[40px] border-r-[1px] border-t-[1px] border-b-[1px] border-[#43C3FA] w-full max-w-xl">
            <h2 className="text-white font-semibold mb-4">Quer se tornar um voluntário?</h2>
            
            <form className="space-y-4">
              <div>
                <label className="font-normal text-2xl text-white">Nome:</label>
                <input 
                  type="text" 
                  className="w-full p-2 rounded-lg focus:outline-none border-[1px] border-black focus:border-blue-400"
                  
                />
              </div>

              <div>
                <label className="font-normal text-2xl text-white">Email:</label>
                <input 
                  type="email" 
                  className="w-full p-2 rounded-lg focus:outline-none border-[1px] border-black focus:border-blue-400"
                  
                />
              </div>

              <div>
                <label className="font-normal text-2xl text-white">Telefone:</label>
                <input 
                  type="tel" 
                  className="w-full p-2 rounded-lg focus:outline-none border-[1px] border-black focus:border-blue-400"
                  
                />
              </div>

              <div>
                <label className="font-normal text-2xl text-white">Projeto de interesse:</label>
                <input 
                  type="text" 
                  className="w-full p-2 rounded-lg focus:outline-none border-[1px] border-black focus:border-blue-400"
                  
                />
              </div>

              <button 
                type="submit" 
                className="w-full py-4 bg-[#EE8DB3] text-white rounded-2xl border-[1px] border-[#E13377] hover:bg-pink-600 transition-colors"
              >
                Enviar
              </button>
            </form>
          </div>
         
        </div>
      </div>
      
    </div>
  )
}
