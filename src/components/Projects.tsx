import React from 'react'

export default function Projects() {
  return (
    <div className="w-full h-full px-[120px] py-[72px] bg-[#F5F5F5] flex flex-col justify-start items-center gap-[80px] inline-flex">
      <div className="text-center">
        <h2 className="font-bold text-4xl text-[48px]">
        Projetos
        </h2>
      </div>
    <div className="flex justify-center items-start gap-12 w-full">
      <div className="flex-1 flex flex-col justify-center items-center gap-6 inline-flex">
        <div className="w-[248px] h-[250px] bg-[#F2F2F2] rounded-[10px] border border-[#141414] flex flex-col justify-center items-center gap-6">
          <div className="relative w-[48px] h-[48px]">
            <img src='icon2.svg' className="w-14 h-14 left-1.5 top-1 absolute"/>
          </div>
          <div className="flex flex-col justify-center items-center gap-3">
            <div className="w-full text-center text-[#595959] text-[24px] font-roboto font-bold leading-[33.6px] break-words">
              Hora de Comer
            </div>
            <div className="w-[234px] text-center text-[#595959] text-[16px] font-roboto leading-[24px] break-words">
              Atendimento emergencial 
              <br />
              com cestas básicas
              <br />
              e kit de alimentos
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-center items-center gap-6 inline-flex">
        <div className="w-[248px] h-[250px] bg-[#F2F2F2] rounded-[10px] border border-[#141414] flex flex-col justify-center items-center gap-6">
          <div className="relative w-[48px] h-[48px]">
            <img src='icon2.svg' className="w-14 h-14 left-1.5 top-1 absolute"/>
          </div>
          <div className="flex flex-col justify-center items-center gap-3">
            <div className="w-full text-center text-[#595959] text-[24px] font-roboto font-bold leading-[33.6px] break-words">
              Hora de Vestir
            </div>
            <div className="w-[234px] text-center text-[#595959] text-[16px] font-roboto leading-[24px] break-words">
              Entrega de roupas, calças e kits de banho para crianças de até 12 anos
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-start items-center gap-6 inline-flex">
        <div className="w-[248px] h-[250px] bg-[#F2F2F2] rounded-[10px] border border-[#141414] flex flex-col justify-center items-center gap-6">
          <div className="relative w-[48px] h-[48px]">
            <img src='icon2.svg' className="w-14 h-14 left-1.5 top-1 absolute"/>
          </div>
          <div className="flex flex-col justify-center items-center gap-3">
            <div className="w-full text-center text-[#595959] text-[24px] font-roboto font-bold leading-[33.6px] break-words">
              Hora de Dormir
            </div>
            <div className="w-[239px] text-center text-[#595959] text-[16px] font-roboto leading-[24px] break-words">
              Com a chegada do inverno, dormir num barraco de madeira se torna um desafio.
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-start items-center gap-6 inline-flex">
        <div className="w-[248px] h-[250px] bg-[#F2F2F2] rounded-[10px] border border-[#141414] flex flex-col justify-center items-center gap-6">
          <div className="relative w-[48px] h-[48px]">
            <img src='icon2.svg' className="w-14 h-14 left-1.5 top-1 absolute"/>
          </div>
          <div className="flex flex-col justify-start items-start gap-3">
            <div className="w-full text-center text-[#595959] text-[24px] font-roboto font-bold leading-[33.6px] break-words">
              Hora de Brincar
            </div>
            <div className="w-full text-center text-[#595959] text-[16px] font-roboto leading-[24px] break-words">
              Pelo direito das crianças serem CRIANÇAS!
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
      
    </div>
  )
}
