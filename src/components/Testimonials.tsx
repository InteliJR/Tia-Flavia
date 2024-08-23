import React from 'react';

export default function Testimonials() {
  return (
    <div className="w-full h-full px-[120px] py-[72px] bg-[#EE8DB3] flex flex-col justify-start items-center gap-[80px] inline-flex">
      <div className="text-center">
        <h2 className="font-bold text-4xl text-[48px]">
        Depoimentos
        </h2>
        <br />
        <p className='text-[18px]'>
          Veja como o Instituto Tia Flávia têm mudado a vida de muitas
          <br />
          crianças e famílias inteiras com o amor de Deus
        </p>
      </div>
      <div>
        <div className="flex gap-[32px]">
          <div className="w-full h-full flex flex-col justify-start items-start gap-8 inline-flex">

          <div className="flex justify-start items-start gap-1 inline-flex">
            <img src='/star.svg' className="w-5 h-[19px]"/>
            <img src='/star.svg' className="w-5 h-[19px]"/>
            <img src='/star.svg' className="w-5 h-[19px]"/>
            <img src='/star.svg' className="w-5 h-[19px]"/>
            <img src='/star.svg' className="w-5 h-[19px]"/>
          </div>

          <div className="px-6 py-4 bg-[#D9D9D9] rounded-[10px]">
            <h2 className="text-[#111111] text-[20px] font-poppins font-bold leading-[28px] break-words">
              “Com a ajuda da Tia Flávia, agora a Ana Heloísa (filha) tem roupinhas novas e cobertores novinhos pro inverno.”
            </h2>
          </div>
          <div className="flex flex-col justify-start items-start gap-4">
            <img src="/avatar1.svg" className="w-14 h-14" />
            <div className="flex flex-col justify-start items-start">
              <div className="text-[#111111] text-[16px] font-poppins font-semibold leading-6 break-words">
                Jânia Rodrigues
              </div>
              <div className="text-[#111111] text-[16px] font-poppins font-normal leading-6 break-words">
                Mãe da Ana Heloisa, <br /> Bairro Jardim Itapuã
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-full flex flex-col justify-start items-start gap-8 inline-flex">

          <div className="flex justify-start items-start gap-1 inline-flex">
            <img src='/star.svg' className="w-5 h-[19px]"/>
            <img src='/star.svg' className="w-5 h-[19px]"/>
            <img src='/star.svg' className="w-5 h-[19px]"/>
            <img src='/star.svg' className="w-5 h-[19px]"/>
            <img src='/star.svg' className="w-5 h-[19px]"/>
          </div>

          <div className="px-6 py-4 bg-[#D9D9D9] rounded-[10px]">
            <h2 className="text-[#111111] text-[20px] font-poppins font-bold leading-[28px] break-words">
              “A tia Flávia deu uma nova boneca pra minha irmã e um carrinho pra mim. Agora a gente pode brincar, tô muito feliz com os brinquedos.”
            </h2>
          </div>
          <div className="flex flex-col justify-start items-start gap-4">
            <img src="/avatar2.svg" className="w-14 h-14" />
            <div className="flex flex-col justify-start items-start">
              <div className="text-[#111111] text-[16px] font-poppins font-semibold leading-6 break-words">
                João Pedro
              </div>
              <div className="text-[#111111] text-[16px] font-poppins font-normal leading-6 break-words">
                Filho da Suzana,  <br /> irmão da Renata,   <br /> Bairro Altos de Itá
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full flex flex-col justify-start items-start gap-8 inline-flex">

          <div className="flex justify-start items-start gap-1 inline-flex">
            <img src='/star.svg' className="w-5 h-[19px]"/>
            <img src='/star.svg' className="w-5 h-[19px]"/>
            <img src='/star.svg' className="w-5 h-[19px]"/>
            <img src='/star.svg' className="w-5 h-[19px]"/>
            <img src='/star.svg' className="w-5 h-[19px]"/>
          </div>

          <div className="px-6 py-4 bg-[#D9D9D9] rounded-[10px]">
            <h2 className="text-[#111111] text-[20px] font-poppins font-bold leading-[28px] break-words">
              “Esse projeto é muito lindo, tem como ver a alegria no sorriso das mães e das crianças, quando ganham um brinquedo.”
            </h2>
          </div>
          <div className="flex flex-col justify-start items-start gap-4">
            <img src="/avatar3.svg" className="w-14 h-14" />
            <div className="flex flex-col justify-start items-start">
              <div className="text-[#111111] text-[16px] font-poppins font-semibold leading-6 break-words">
                Júlio César
              </div>
              <div className="text-[#111111] text-[16px] font-poppins font-normal leading-6 break-words">
                Voluntário do projeto desde 2021, <br /> São Paulo
              </div>
            </div>
          </div>
        </div>

        </div>
      </div>
    </div>
  )
}