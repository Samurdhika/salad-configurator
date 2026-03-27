export function Footer() {
  return (
    <footer className="bg-[#A2D135] text-white w-full px-10 py-12 mt-12">
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 items-start">
        
        {/* Logo */}
        <div className="flex items-center justify-center md:justify-start">
          <div className="border-2 border-white rounded-full px-6 py-4 text-2xl italic">
            Fresh
          </div>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-bold">Ota yhteyttä</h3>

          <p className="font-semibold">Pedersöre</p>
          <p>+358 6-781 2411</p>

          <p className="font-semibold mt-2">Seinäjoki</p>
          <p>+358 6-781 2470</p>

          <p className="mt-3">Asiakaspalvelu arkisin 7 – 15</p>

          <a href="#" className="mt-2 underline">Kaikki yhteystiedot →</a>
          <a href="#" className="underline">Tietosuojaseloste →</a>
          <a href="#" className="underline">Tietosuojakäytäntö →</a>
        </div>

        {/* Social */}
        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-bold">Seuraa meitä</h3>

          <p>Fresh</p>
          <p>SalaattiMestari</p>
          <p>Hetki</p>
        </div>

        {/* Branding */}
        <div className="flex flex-col items-center md:items-end gap-4">
          <p className="text-sm text-right">
            Fresh Pro verkkokauppa ammattilaisille →
          </p>

          <div className="bg-white w-24 h-24 flex items-center justify-center text-black font-bold">
            Oiva
          </div>
        </div>

      </div>
    </footer>
  );
}
