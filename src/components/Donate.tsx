export default function Donate() {

  const handleRedirect = () => {
    window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSeYUBS9MSnIGuPOTORnDsxnVpWVPVOJ4oeHyGztzyKJv1xZgQ/viewform?usp=sf_link";
  };

  const handleCopyPixKey = () => {
    const pixKey = "47.287.235/0001-70";
    navigator.clipboard.writeText(pixKey)
      .then(() => {
        alert("PIX key copied to clipboard!");
      })
      .catch(err => {
        console.error("Failed to copy PIX key: ", err);
      });
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center min-h-screen p-6 md:px-36 bg-donate">
        <div className="flex flex-col lg:flex-row justify-center lg:justify-center items-center py-16 text-white w-full text-center lg:text-left">
          <p className="text-3xl md:text-5xl">Faça parte como doador!</p>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center w-full lg:space-x-10 space-y-10 lg:space-y-0">
          {/* First Card */}
          <div className="flex flex-col justify-between items-center py-10 px-8 lg:px-12 rounded-[40px] bg-[#F4EDAA] text-center lg:text-left lg:w-[40%]">
            <p className="font-bold text-[#2E2E2E] mb-6 text-lg lg:text-xl">
              Se interessou e quer ajudar?
            </p>
            <img 
              src="/donateqr.png" 
              alt="Doe agora"
              className="w-full cursor-pointer"
            />
            {/* PIX Key with Copy Functionality */}
            <div className="relative group">
              <p 
                className="text-[#2E2E2E] font-semibold mt-4 cursor-pointer hover:text-gray-700"
                onClick={handleCopyPixKey}
              >
                PIX: 47.287.235/0001-70
              </p>
              {/* Tooltip for desktop (shown on hover) */}
              <span className="hidden lg:block absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 text-sm bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                Clique para copiar
              </span>
            </div>
          </div>

          {/* Second Card */}
          <div className="flex flex-col justify-between items-center py-10 px-8 lg:px-12 rounded-[40px] bg-[#F4EDAA] text-center lg:text-left lg:w-[40%]">
            <p className="text-black font-bold mb-4 text-lg lg:text-xl">
              Quer se tornar um voluntário?
            </p>
            <button 
              type="submit" 
              className="w-full py-4 bg-[#EE8DB3] text-black rounded-2xl border-[1px] border-[#E13377] hover:bg-pink-600 transition-colors"
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
