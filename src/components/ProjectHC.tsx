import React from 'react';

interface ProjectHCProps {
  title: string;
  description: string;
  criteria: string;
  imageSrc: string;
  stats: {
    amount: string;
    description: string;
  };
}

const ProjectHC: React.FC<ProjectHCProps> = ({ title, description, criteria, imageSrc, stats }) => {
  return (
    <div className="relative bg-[#f4f4f4] overflow-hidden z-40">
      <div className="w-full max-w-[1083px] h-auto px-16 py-8 bg-[#f4f4f4] rounded-[15px] shadow border-4 border-[#11b3f8] flex flex-col md:flex-row justify-center items-center gap-4">
        {/* Informação Principal */}
        <div className="flex-1 flex flex-col justify-center items-start gap-4">
          <div className="w-full flex flex-col justify-start items-start gap-3">
            <h2 className="text-[#11b3f8] text-2xl md:text-3xl font-bold font-['Poppins'] leading-tight">{title}</h2>
            <p className="text-[#141414] text-base font-normal font-['Poppins'] leading-normal" dangerouslySetInnerHTML={{ __html: description }} />
          </div>
          <div className="w-full flex flex-col justify-start items-start gap-2">
            <h3 className="text-[#11b3f8] text-base font-semibold font-['Poppins'] leading-normal">Critérios para atendimento:</h3>
            <ul className="list-disc pl-5 text-[#141414] text-base font-normal font-['Poppins'] leading-normal">
              <li dangerouslySetInnerHTML={{ __html: criteria}} />
            </ul>
          </div>
        </div>

        {/* Estatísticas */}
        <div className="flex-1 flex flex-col justify-center items-center gap-3">
          <div className="text-center">
            <div className="text-[#11b3f8] text-4xl md:text-5xl font-bold font-['Poppins'] leading-tight">{stats.amount}</div>
            <p className="text-[#111111] text-xl font-normal font-['Poppins'] leading-9">{stats.description}</p>
          </div>
        </div>

        {/* Imagem */}
        <div className="flex-1">
          <img className="w-full max-w-[286px] h-auto rounded-[20px]" src={imageSrc} alt={title} />
        </div>
      </div>

     
    </div>
  );
};

export default ProjectHC;
