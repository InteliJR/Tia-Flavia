export default function Testimonials() {
  return (
    <div className="w-full min-h-screen px-4 py-12 lg:px-[120px] lg:py-[72px] bg-[#EE8DB3] flex flex-col justify-center items-center gap-6 lg:gap-[80px]">
      <div className="text-center lg:text-left">
        <h2 className="font-bold text-3xl lg:text-4xl">
          Depoimentos
        </h2>
        <br />
        <p className="text-[16px] lg:text-[18px]">
          Veja como o Instituto Tia Flávia têm mudado a vida de muitas
          <br className="hidden lg:block" />
          crianças e famílias inteiras com o amor de Deus
        </p>
      </div>
      <div className="flex flex-col lg:flex-row justify-center lg:justify-start items-center lg:items-start gap-6 lg:gap-[32px] w-full">
        <div className="w-full flex flex-col justify-center lg:justify-start items-center lg:items-start gap-4 lg:gap-8">

          <div className="flex justify-center lg:justify-start items-center gap-1">
            <img src='/star.svg' className="w-5 h-[19px]" />
            <img src='/star.svg' className="w-5 h-[19px]" />
            <img src='/star.svg' className="w-5 h-[19px]" />
            <img src='/star.svg' className="w-5 h-[19px]" />
            <img src='/star.svg' className="w-5 h-[19px]" />
          </div>

          <div className="px-6 py-4 bg-[#D9D9D9] rounded-[10px] text-center lg:text-left">
            <h2 className="text-[#111111] text-[18px] lg:text-[20px] font-poppins font-bold leading-[28px] break-words">
              “Com a ajuda da Tia Flávia, agora a Ana Heloísa (filha) tem roupinhas novas e cobertores novinhos pro inverno.”
            </h2>
          </div>
          <div className="flex flex-col justify-center lg:justify-start items-center lg:items-start gap-2 lg:gap-4">
            <img src="/avatar1.svg" className="w-12 h-12 lg:w-14 lg:h-14" />
            <div className="flex flex-col justify-center lg:justify-start items-center lg:items-start">
              <div className="text-[#111111] text-[14px] lg:text-[16px] font-poppins font-semibold leading-6 break-words">
                Jânia Rodrigues
              </div>
              <div className="text-[#111111] text-[14px] lg:text-[16px] font-poppins font-normal leading-6 break-words text-center lg:text-left">
                Mãe da Ana Heloisa, <br /> Bairro Jardim Itapuã
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col justify-center lg:justify-start items-center lg:items-start gap-4 lg:gap-8">

          <div className="flex justify-center lg:justify-start items-center gap-1">
            <img src='/star.svg' className="w-5 h-[19px]" />
            <img src='/star.svg' className="w-5 h-[19px]" />
            <img src='/star.svg' className="w-5 h-[19px]" />
            <img src='/star.svg' className="w-5 h-[19px]" />
            <img src='/star.svg' className="w-5 h-[19px]" />
          </div>

          <div className="px-6 py-4 bg-[#D9D9D9] rounded-[10px] text-center lg:text-left">
            <h2 className="text-[#111111] text-[18px] lg:text-[20px] font-poppins font-bold leading-[28px] break-words">
              “A tia Flávia deu uma nova boneca pra minha irmã e um carrinho pra mim. Agora a gente pode brincar, tô muito feliz com os brinquedos.”
            </h2>
          </div>
          <div className="flex flex-col justify-center lg:justify-start items-center lg:items-start gap-2 lg:gap-4">
            <img src="/avatar2.svg" className="w-12 h-12 lg:w-14 lg:h-14" />
            <div className="flex flex-col justify-center lg:justify-start items-center lg:items-start">
              <div className="text-[#111111] text-[14px] lg:text-[16px] font-poppins font-semibold leading-6 break-words">
                João Pedro
              </div>
              <div className="text-[#111111] text-[14px] lg:text-[16px] font-poppins font-normal leading-6 break-words text-center lg:text-left">
                Filho da Suzana, <br /> irmão da Renata, <br /> Bairro Altos de Itá
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col justify-center lg:justify-start items-center lg:items-start gap-4 lg:gap-8">

          <div className="flex justify-center lg:justify-start items-center gap-1">
            <img src='/star.svg' className="w-5 h-[19px]" />
            <img src='/star.svg' className="w-5 h-[19px]" />
            <img src='/star.svg' className="w-5 h-[19px]" />
            <img src='/star.svg' className="w-5 h-[19px]" />
            <img src='/star.svg' className="w-5 h-[19px]" />
          </div>

          <div className="px-6 py-4 bg-[#D9D9D9] rounded-[10px] text-center lg:text-left">
            <h2 className="text-[#111111] text-[18px] lg:text-[20px] font-poppins font-bold leading-[28px] break-words">
              “Esse projeto é muito lindo, tem como ver a alegria no sorriso das mães e das crianças, quando ganham um brinquedo.”
            </h2>
          </div>
          <div className="flex flex-col justify-center lg:justify-start items-center lg:items-start gap-2 lg:gap-4">
            <img src="/avatar3.svg" className="w-12 h-12 lg:w-14 lg:h-14" />
            <div className="flex flex-col justify-center lg:justify-start items-center lg:items-start">
              <div className="text-[#111111] text-[14px] lg:text-[16px] font-poppins font-semibold leading-6 break-words">
                Júlio César
              </div>
              <div className="text-[#111111] text-[14px] lg:text-[16px] font-poppins font-normal leading-6 break-words text-center lg:text-left">
                Voluntário do projeto desde 2021, <br /> São Paulo
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
