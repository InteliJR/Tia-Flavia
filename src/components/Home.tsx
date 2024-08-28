import React from 'react';

export default function Home() {

  const handleRedirect = () => {
    window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSeYUBS9MSnIGuPOTORnDsxnVpWVPVOJ4oeHyGztzyKJv1xZgQ/viewform?usp=sf_link";
  };

  return (
    <div className='bg-[#EE8DB3] flex items-center w-full justify-center p-6 min-h-screen'>
      <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between w-full max-w-screen-xl'>
        <div className='flex flex-col py-10 px-6 lg:px-10'>
          <h2 className='font-bold text-3xl lg:text-4xl leading-snug'>
            O amor de Deus
            <br />
            cuidando das
            <br />
            crianças em todas
            as horas
          </h2>

          <div className='flex flex-col lg:flex-row items-start lg:items-center justify-start py-6'>
            <button type='submit' className='bg-[#DB247C] rounded-full text-white py-2 px-6 mb-4 lg:mb-0 lg:mr-6' onClick={handleRedirect}>
              Faça parte!
            </button>
            <p className='text-lg'>
              +5.000 crianças impactadas
              <br />
              com a ajuda da comunidade.
            </p>
          </div>
        </div>
        <div className='flex justify-center'>
          <img src='/image_home.png' className='max-w-full h-auto' alt='Crianças sendo cuidadas' />
        </div>
      </div>
    </div>
  );
}
