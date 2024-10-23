export default function Media() {
    return (
        <div className='relative bg-[#F9E79F] flex flex-col md:flex-row text-2xl gap-x-4 md:gap-x-16 min-h-screen items-center justify-center py-8 px-16 overflow-hidden'> 
            {/* Bolinhas decorativas */}
            <div className="absolute top-10 left-10 w-40 h-40 bg-[#FFEAA7] rounded-full z-0"></div> 
            <div className="absolute top-1/3 left-5 w-16 h-16 bg-[#FFBE76] rounded-full z-0"></div>
            <div className="absolute bottom-20 right-20 w-32 h-32 bg-[#FF7979] rounded-full z-0"></div>
            <div className="absolute bottom-5 right-5 w-10 h-10 bg-[#F9CA24] rounded-full z-0"></div>

            {/* Nova bola grande no canto inferior esquerdo */}
            <div className="absolute bottom-[-100px] left-[-100px] w-96 h-96 bg-[#FF7979] rounded-full z-0"></div>

            {/* Duas novas bolinhas */}
            <div className="absolute top-20 right-40 w-20 h-20 bg-[#FFBE76] rounded-full z-0"></div>
            <div className="absolute bottom-10 left-40 w-24 h-24 bg-[#FF7979] rounded-full z-0"></div>

            <div className='relative z-10 w-full md:w-2/5 mb-8 md:mb-0 text-left mt-[-100px]'>
                <h1 className='font-extrabold text-5xl md:text-6xl text-[#2C3E50] drop-shadow-lg'>
                    Instituto Tia Flavia na <span className="underline decoration-blue-500">mídia</span>
                </h1>
                <p className='mt-4 text-lg font-semibold text-[#34495E] underline decoration-[#FF7979] underline-offset-4'>
                    Veja o trabalho do Instituto Tia Flavia sendo reconhecido na mídia
                </p>
            </div>

            {/* Contêiner dos vídeos e títulos */}
            <div className='relative z-10 flex flex-col md:flex-row gap-8 justify-center items-center w-full md:w-3/5'>
                {/* Contêiner de cada vídeo e título */}
                <div className='flex flex-col items-center text-center'>
                    <h2 className='text-xl font-bold text-[#2C3E50] mb-4'>Entrevista com Tia Flávia</h2> {/* Tamanho do texto reduzido */}
                    <iframe
                        width="400"
                        height="250"
                        src="https://www.youtube.com/embed/gclJMimDHzY"
                        title="YouTube Video 1"
                        className="rounded-lg"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>

                <div className='flex flex-col items-center text-center'>
                    <h2 className='text-xl font-bold text-[#2C3E50] mb-4'>Trabalho Social nas Comunidades</h2> {/* Tamanho do texto reduzido */}
                    <iframe
                        width="400"
                        height="250"
                        src="https://www.youtube.com/embed/3vO8ig3pcfw"
                        title="YouTube Video 2"
                        className="rounded-lg"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    );
}
