import React from 'react';

export default function Project() {
  return (
    <div className="#f4f4f4">
      <div className="w-full max-w-[1083px] h-auto px-16 py-8 bg-[#f4f4f4] rounded-[15px] shadow border-4 border-[#11b3f8] flex flex-col md:flex-row justify-center items-center gap-4">
        {/* Informação Principal */}
        <div className="flex-1 flex flex-col justify-center items-start gap-4">
          <div className="w-full flex flex-col justify-start items-start gap-3">
            <h2 className="text-[#11b3f8] text-2xl md:text-3xl font-bold font-['Poppins'] leading-tight">Hora de Comer</h2>
            <p className="text-[#141414] text-base font-normal font-['Poppins'] leading-normal">
              Atendimento emergencial com cestas básicas e kit de alimentos de pronto consumo.
            </p>
          </div>
          <div className="w-full flex flex-col justify-start items-start gap-2">
            <h3 className="text-[#11b3f8] text-base font-semibold font-['Poppins'] leading-normal">Critérios para atendimento:</h3>
            <p className="text-[#141414] text-base font-normal font-['Poppins'] leading-normal">
              Durante as visitas às famílias<br />
              Através de encaminhamentos por líderes comunitários<br />
              Por solicitação das famílias, via canal de comunicação direto com o Instituto.
            </p>
          </div>
        </div>
        
        {/* Estatísticas */}
        <div className="flex-1 flex flex-col justify-center items-center gap-3">
          <div className="text-center">
            <div className="text-[#11b3f8] text-4xl md:text-5xl font-bold font-['Poppins'] leading-tight">+600 kg</div>
            <p className="text-[#111111] text-xl font-normal font-['Poppins'] leading-9">de alimentos doados todos os meses</p>
          </div>
        </div>

        {/* Imagem */}
        <div className="flex-1">
          <img className="w-full max-w-[286px] h-auto rounded-[20px]" src="/horaDeComer.jpg" alt="Placeholder" />
        </div>
      </div>

      {/* Esferas de Decoração */}
      {/* <div className="flex flex-wrap justify-center items-center gap-4">
        <div className="w-[30px] h-[30px] bg-[#74d3fb] rounded-full" />
        <div className="w-10 h-10 bg-[#ee8db3] rounded-full" />
        <div className="w-[30px] h-[30px] bg-[#74d3fb] rounded-full" />
        <div className="w-[50px] h-[50px] bg-[#196ca8] rounded-full" />
        <div className="w-[65px] h-[65px] bg-[#db247c] rounded-full" />
        <div className="w-10 h-10 bg-[#ee8db3] rounded-full" />
      </div> */}
    </div>
  );
}
