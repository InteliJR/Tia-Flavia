export default function Donate() {

  const handleRedirect = () => {
    window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSeYUBS9MSnIGuPOTORnDsxnVpWVPVOJ4oeHyGztzyKJv1xZgQ/viewform?usp=sf_link";
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center min-h-screen p-6 md:px-36 bg-donate">
        <div className="flex flex-col lg:flex-row justify-center lg:justify-center items-center py-16 text-white w-full text-center lg:text-left">
          <p className="text-3xl md:text-5xl">Faça parte como doador!</p>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-10 w-full space-y-10 lg:space-y-0">
          <div className="flex flex-col justify-center items-center py-16 lg:py-32 px-8 lg:px-16 rounded-[40px] bg-[#F4EDAA] text-center lg:text-left lg:w-[40%]">
            <p className="font-bold text-[#2E2E2E] mb-6 text-lg lg:text-xl">
              Se interessou e quer ajudar?
            </p>
            <button 
                type="submit" 
                className="w-full py-4 bg-[#EE8DB3] text-white rounded-2xl border-[1px] border-[#E13377] hover:bg-pink-600 transition-colors"
              >
                Doe agora!
              </button>
          </div>

          <div className="flex flex-col justify-center items-center py-16 lg:py-32 px-8 lg:px-16 rounded-[40px] border-r-[2px] border-t-[2px] border-b-[2px] border-white text-center lg:text-left lg:w-[40%]">
            <p className="text-white font-bold mb-4 text-lg lg:text-xl">
              Quer se tornar um voluntário?
            </p>
            <button 
                type="submit" 
                className="w-full py-4 bg-[#EE8DB3] text-white rounded-2xl border-[1px] border-[#E13377] hover:bg-pink-600 transition-colors"
                onClick={handleRedirect}
              >
                Entrar!
              </button>
          </div>

        </div>
      </div>
    </div>
  );
}
