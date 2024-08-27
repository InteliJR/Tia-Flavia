import React from 'react';

export default function Projects() {
  return (
    <div className="w-full h-full px-[120px] py-[72px] bg-[#F5F5F5] flex flex-col justify-start items-center gap-[80px] inline-flex">
      {/* Imagens de Esferas de Decoração */}
      <div className="absolute" style={{ left: '294px', top: '97px' }}>
        <img
          src='/sphere1.svg'  // Caminho para a primeira esfera
          alt="Esfera de Decoração"
          className="w-16 h-16"  // Ajuste o tamanho conforme necessário
        />
      </div>

      <div className="text-center">
        <h2 className="font-bold text-4xl text-[48px]">
          Projetos
        </h2>
      </div>
      <div className="flex justify-center items-start gap-12 w-full">
        {/* Botão 1 */}
        <button className="relative flex-1 flex flex-col justify-center items-center gap-6 inline-flex focus:outline-none group">
          <div className="w-[248px] h-[250px] bg-[#F2F2F2] rounded-[10px] border border-[#141414] flex flex-col justify-center items-center gap-6 group-hover:bg-[#11B4F8] transition-colors">
            <div className="relative w-[48px] h-[48px]">
              <img
                src='/icon2-hover.svg'
                className="w-14 h-14 absolute transition-opacity duration-300 group-hover:opacity-100"
                alt="Ícone padrão"
              />
              <img
                src='/icon2.svg'
                className="w-14 h-14 absolute transition-opacity duration-300 group-hover:opacity-0"
                alt="Ícone ao passar o mouse"
              />
            </div>
            <div className="flex flex-col justify-center items-center gap-3">
              <div className="w-full text-center text-[#595959] text-[24px] font-roboto font-bold leading-[33.6px] break-words group-hover:text-[#FAFAFA]">
                Hora de Comer
              </div>
              <div className="w-[234px] text-center text-[#595959] text-[16px] font-roboto leading-[24px] break-words group-hover:text-[#FAFAFA]">
                Atendimento emergencial
                <br />
                com cestas básicas
                <br />
                e kit de alimentos
              </div>
            </div>
          </div>
        </button>

        {/* Botão 2 */}
        <button className="relative flex-1 flex flex-col justify-center items-center gap-6 inline-flex focus:outline-none group">
          <div className="w-[248px] h-[250px] bg-[#F2F2F2] rounded-[10px] border border-[#141414] flex flex-col justify-center items-center gap-6 group-hover:bg-[#11B4F8] transition-colors">
            <div className="relative w-[48px] h-[48px]">
              <img
                src='/icon2-hover.svg'
                className="w-14 h-14 absolute transition-opacity duration-300 group-hover:opacity-100"
                alt="Ícone padrão"
              />
              <img
                src='/icon2.svg'
                className="w-14 h-14 absolute transition-opacity duration-300 group-hover:opacity-0"
                alt="Ícone ao passar o mouse"
              />
            </div>
            <div className="flex flex-col justify-center items-center gap-3">
              <div className="w-full text-center text-[#595959] text-[24px] font-roboto font-bold leading-[33.6px] break-words group-hover:text-[#FAFAFA]">
                Hora de Vestir
              </div>
              <div className="w-[234px] text-center text-[#595959] text-[16px] font-roboto leading-[24px] break-words group-hover:text-[#FAFAFA]">
                Entrega de roupas, calças e kits de banho para crianças de até 12 anos
              </div>
            </div>
          </div>
        </button>

        {/* Botão 3 */}
        <button className="relative flex-1 flex flex-col justify-start items-center gap-6 inline-flex focus:outline-none group">
          <div className="w-[248px] h-[250px] bg-[#F2F2F2] rounded-[10px] border border-[#141414] flex flex-col justify-center items-center gap-6 group-hover:bg-[#11B4F8] transition-colors">
            <div className="relative w-[48px] h-[48px]">
              <img
                src='/icon2-hover.svg'
                className="w-14 h-14 absolute transition-opacity duration-300 group-hover:opacity-100"
                alt="Ícone padrão"
              />
              <img
                src='/icon2.svg'
                className="w-14 h-14 absolute transition-opacity duration-300 group-hover:opacity-0"
                alt="Ícone ao passar o mouse"
              />
            </div>
            <div className="flex flex-col justify-center items-center gap-3">
              <div className="w-full text-center text-[#595959] text-[24px] font-roboto font-bold leading-[33.6px] break-words group-hover:text-[#FAFAFA]">
                Hora de Dormir
              </div>
              <div className="w-[239px] text-center text-[#595959] text-[16px] font-roboto leading-[24px] break-words group-hover:text-[#FAFAFA]">
                Com a chegada do inverno, dormir num barraco de madeira se torna um desafio.
              </div>
            </div>
          </div>
        </button>

        {/* Botão 4 */}
        <button className="relative flex-1 flex flex-col justify-start items-center gap-6 inline-flex focus:outline-none group">
          <div className="w-[248px] h-[250px] bg-[#F2F2F2] rounded-[10px] border border-[#141414] flex flex-col justify-center items-center gap-6 group-hover:bg-[#11B4F8] transition-colors">
            <div className="relative w-[48px] h-[48px]">
              <img
                src='/icon2-hover.svg'
                className="w-14 h-14 absolute transition-opacity duration-300 group-hover:opacity-100"
                alt="Ícone padrão"
              />
              <img
                src='/icon2.svg'
                className="w-14 h-14 absolute transition-opacity duration-300 group-hover:opacity-0"
                alt="Ícone ao passar o mouse"
              />
            </div>
            <div className="flex flex-col justify-start items-start gap-3">
              <div className="w-full text-center text-[#595959] text-[24px] font-roboto font-bold leading-[33.6px] break-words group-hover:text-[#FAFAFA]">
                Hora de Brincar
              </div>
              <div className="w-full text-center text-[#595959] text-[16px] font-roboto leading-[24px] break-words group-hover:text-[#FAFAFA]">
                Pelo direito das crianças serem CRIANÇAS!
                <br />
              </div>
            </div>
          </div>
        </button>
      </div>
      <img src='/arrow.svg' alt="Arrow"/>
    </div>
  );
}
