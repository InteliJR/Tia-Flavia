import React from 'react'

export default function Home() {

  const handleRedirect = () => {
    window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSeYUBS9MSnIGuPOTORnDsxnVpWVPVOJ4oeHyGztzyKJv1xZgQ/viewform?usp=sf_link";
  };


  return (
    <div className='bg-[#EE8DB3] flex items-center justify-center p-6'>
      <div className='flex flex-col py-20 px-10'>
        <h2 className='font-bold text-4xl'>
          O amor de Deus
          <br />
          cuidando das
          <br />
          crianças em todas
          as horas
        </h2>

        <div className='flex items-center justify-left py-6'>
          <div>
            <button type='submit' className='bg-[#DB247C] rounded-full text-white py-2 px-6' onClick={handleRedirect}>
              Faça parte!
            </button>
          </div>

          <div>
            <p className='text-lg px-6'>
              +5.000 crianças impactadas
              <br />
              com a ajuda da comunidade.
            </p>
          </div>
        </div>
      </div>
      <div >
        <img src='/image_home.png' />
      </div>
    </div>
  )
}
