export default function Services() {
  const services = [
    {
      icon: "🎨",
      title: "Web Design Profesional",
      description: "Design modern, responsive și atractiv care reprezintă identitatea brandului tău.",
    },
    {
      icon: "🔍",
      title: "Optimizare SEO",
      description: "Strategie SEO completă pentru a-ți îmbunătăți clasamentul în motoarele de căutare.",
    },
    {
      icon: "🌐",
      title: "Hosting Web",
      description: "Servere rapide, sigure și fiabile cu suport tehnic 24/7 pentru site-ul tău.",
    },
    {
      icon: "📝",
      title: "Domenii",
      description: "Înregistrare de domenii cu prețuri competitive și gestionare simplă.",
    },
  ];

  return (
    <section id="servicii" className="py-20 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Serviciile Noastre
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Soluții digitale complete adaptate nevoilor afacerii tale
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-blue-50 p-8 rounded-xl hover:shadow-lg transition transform hover:-translate-y-2 duration-300"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
