import React from 'react'

export default function AboutUs() {
  return (
    <div className='bg-[#74D3FB] flex flex-row text-2xl gap-x-24 items-center justify-center'>
      <div className='w-2/5'>
        <img src="/logo_tia_flavia.png" alt="Logo" className="w-full" />
      </div>

      <div className='bg-[#F2F2F2] py-16 px-6 flex flex-col items-center justify-center rounded-lg w-2/5  text-center'>
        <h2 className='font-bold text-5xl'>SOBRE NÓS</h2>
        <br />
        <p className='font-bold'>
          “Mais vale um dia feliz que todos
          os outros dias tristes”
          <br />
          Tia Flávia
        </p>
        <br />
        <p>
          Nascido na pandemia, o Instutito Tia
          Flávia atua, desde 2020, com crianças em
          situação de vulnerabilidade social nas
          favelas de Cidade Tiradentes, periferia de
          São Paulo, levando provisão em meio a
          escassez.
          <br />
          <br />
          (Breve descrição da ONG, sua história e a motivação da fundadora.)
        </p>
      </div>
    </div>
  )
}