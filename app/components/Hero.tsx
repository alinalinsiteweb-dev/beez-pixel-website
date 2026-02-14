export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-white pt-20 pb-20 md:pt-32 md:pb-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Transformă-ți viziunea în <span className="text-blue-600">realitate digitală</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              La Beez Pixel, creăm site-uri web profesionale, optimizate pentru SEO, cu hosting și domenii de top. Soluții digitale complete pentru afacerea ta.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition text-lg">
                Solicită Ofertă
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition text-lg">
                Descoperă Serviciile
              </button>
            </div>
          </div>

          {/* Visual Element */}
          <div className="flex items-center justify-center">
            <div className="relative w-full h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl transform rotate-3"></div>
              <div className="absolute inset-0 bg-white rounded-2xl shadow-xl flex items-center justify-center overflow-hidden">
                <div className="grid grid-cols-2 gap-4 p-8">
                  {["Design", "SEO", "Hosting", "Domenii"].map((item, i) => (
                    <div
                      key={i}
                      className="bg-blue-600 text-white p-6 rounded-xl text-center font-bold text-lg"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
