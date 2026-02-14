export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "TechStore Pro",
      category: "E-commerce",
      image: "https://images.unsplash.com/photo-1460925895917-aeb19be489c7?w=500&h=300&fit=crop",
      description: "Platform e-commerce modern cu integrare plăți",
    },
    {
      id: 2,
      title: "Beauty Salon Online",
      category: "Business Local",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
      description: "Site pentru salon de frumusețe cu sistem rezervări",
    },
    {
      id: 3,
      title: "DigitalMarketing Agency",
      category: "Agency",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
      description: "Site agență marketing optimizat SEO",
    },
    {
      id: 4,
      title: "Restaurant Menu Digital",
      category: "Horeca",
      image: "https://images.unsplash.com/photo-1495195134817-aeb325a55b65?w=500&h=300&fit=crop",
      description: "Portofoliu digital pentru restaurante",
    },
  ];

  return (
    <section id="portofoliu" className="py-20 md:py-32 bg-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Portofoliul Nostru
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Proiecte realizate pentru clienți din diverse industrii
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 group"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
                <div className="absolute inset-0 bg-blue-600 bg-opacity-0 group-hover:bg-opacity-30 transition duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition duration-300 font-bold text-lg">
                    Vizualizează
                  </span>
                </div>
              </div>
              <div className="p-6">
                <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold mb-3">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition text-lg">
            Vezi Toate Proiectele
          </button>
        </div>
      </div>
    </section>
  );
}
