import React from 'react'

export default function AboutUs() {
  return (
    <div className='bg-[#74D3FB] flex flex-col md:flex-row text-2xl gap-x-8 md:gap-x-24 items-center justify-center py-12 px-6'>
      <div className='w-full md:w-2/5 mb-8 md:mb-0'>
        <img src="/logo_tia_flavia.png" alt="Logo" className="w-full max-w-sm mx-auto" />
      </div>

      <div className='bg-[#F2F2F2] py-12 md:py-16 px-8 md:px-12 flex flex-col items-center justify-center rounded-lg w-full md:w-1/2 text-center'>
        <h2 className='font-bold text-4xl md:text-5xl'>SOBRE NÓS</h2>
        <br />
        <p className='font-bold'>
          “Mais vale um dia feliz que todos
          os outros dias tristes”
          <br />
          Tia Flávia
        </p>
        <br />
        <p>
          Nascido na pandemia, o Instituto Tia
          Flávia atua, desde 2020, com crianças em
          situação de vulnerabilidade social nas
          favelas de Cidade Tiradentes, periferia de
          São Paulo, levando provisão em meio a
          escassez.
          <br />
        </p>
      </div>
    </div>
  )
}
