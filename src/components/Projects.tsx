import React, { useState } from 'react';
import ProjectHC from './ProjectHC'; // Importando o componente ProjectHC

interface ProjectContent {
  title: string;
  description: string;
  criteria: string;
  imageSrc: string;
  stats: {
    amount: string;
    description: string;
  };
}

const projectContents: { [key: number]: ProjectContent } = {
  1: {
    title: 'Hora de Comer',
    description: 'Atendimento emergencial com cestas básicas e kit de alimentos de pronto consumo.',
    criteria: 'Durante as visitas às famílias<li/>Através de encaminhamentos por líderes comunitários<li/>Por solicitação das famílias, via canal de comunicação direto com o Instituto.',
    imageSrc: '/horaDeComer.jpg',
    stats: {
      amount: '+600 kg',
      description: 'de alimentos doados todos os meses',
    },
  },
  2: {
    title: 'Hora de Vestir',
    description: 'Entrega de roupas, calças e kits de banho para crianças de até 12 anos.',
    criteria: 'Mapeamento durante as visitas periódicas;<li/>Aulas sobre higiene pessoal par crinças e mães;<li/>Apadrinhamento de crianças durante datas especiais.',
    imageSrc: '/horaDeVestir.jpg',
    stats: {
      amount: '+80 kits',
      description: 'de roupas e kits doados todos os meses',
    },
  },
  3: {
    title: 'Hora de Dormir',
    description: 'Com a chegada do inverno, dormir num barraco de madeira se torna um desafio.',
    criteria: 'Entrega de cobertores populares para revestimento térmico do sbarracos de madeira;<li/>Entrega de kits de cobertores, travisseiro e roupas de cama;<li/>Para crianças pequenas, entrega de pijamas.',
    imageSrc: '/horaDeDormir.jpg',
    stats: {
      amount: '+350 kits',
      description: 'por mês no inverno',
    },
  },
  4: {
    title: 'Hora de Brincar',
    description: 'Pelo direito das crianças serem CRIANÇAS!',
    criteria: 'Apadrinhamento de crianças em datas especiais;<li/>Visitas periódicas a sede do Instituto para acesso a brinquedoteca;<li/>Realização de eventos em parques de diversão.',
    imageSrc: '/horaDeBrincar.jpg',
    stats: {
      amount: '+450',
      description: 'crianças atendidas',
    },
  },
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const handleButtonClick = (projectId: number) => {
    setSelectedProject(projectId);
  };

  const currentContent = selectedProject !== null ? projectContents[selectedProject] : null;

  return (
    <div className="w-full h-full px-[120px] py-[72px] bg-[#F5F5F5] flex flex-col justify-start items-center gap-[80px] inline-flex">
      <div className="text-center">
        <h2 className="font-bold text-4xl text-[48px]">Projetos</h2>
      </div>
      <div className="flex justify-center items-start gap-12 w-full">
        {Object.keys(projectContents).map((key) => {
          const projectId = Number(key);
          const content = projectContents[projectId];
          return (
            <button
              key={projectId}
              className="relative flex-1 flex flex-col justify-center items-center gap-6 inline-flex focus:outline-none group"
              onClick={() => handleButtonClick(projectId)}
            >
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
                    {content.title}
                  </div>
                  <div className="w-[234px] text-center text-[#595959] text-[16px] font-roboto leading-[24px] break-words group-hover:text-[#FAFAFA]">
                    {content.description}
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>
      {currentContent && (
        <ProjectHC
          title={currentContent.title}
          description={currentContent.description}
          criteria={currentContent.criteria}
          imageSrc={currentContent.imageSrc}
          stats={currentContent.stats}
        />
      )}
    </div>
  );
}
