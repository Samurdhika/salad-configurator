import {Link} from "react-router-dom";

export function SummaryBar() {
  return (
    <div className="bg-zinc-800 rounded-[3rem] p-8 text-white w-full flex flex-col md:flex-row gap-8 shadow-xl">
      
      {/* Left */}
      <div className="flex-1 bg-[#3a3a3a] rounded-3xl p-6 min-h-[150px] shadow-inner">
        <p className="text-lg font-semibold">Valitut ainesosat</p>
         <Link to= "/print">
        <button className="bg-white text-black font-bold py-2 px-6 rounded-full hover:border-4 hover:border-[#6B8E24] transition">
            Tulosta resepti ja tilauspohja
          </button>
          </Link>
      </div>

      {/* Right */}
      <div className="flex-1 flex flex-col justify-center items-center gap-6">
        
        <div className="bg-white text-black font-black text-2xl py-3 w-32 rounded-full shadow-md text-center">
          0 g
        </div>

        <div className="bg-white text-black font-black text-2xl py-3 w-32 rounded-full shadow-md text-center">
          €0.00
        </div>

       

      </div>

    </div>
  );
}