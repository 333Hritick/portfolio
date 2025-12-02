import { Award, X } from 'lucide-react';
import { useState } from 'react';

const certificates = [
  {
    title: 'App Development Certificate',
    issuer: 'Ensino Research And Devlopment Private Limited',
    image: '/images/appdevelopment.jpg',
  },
  {
    title: 'HTML Training',
    issuer: 'IIT Bombay',
    image: '/images/html.jpg',
  },
  {
    title: 'Java Training',
    issuer: 'IIT Bombay',
    image: '/images/java.jpg',
  },
  {
    title: 'Linux Training',
    issuer: 'IIT Bombay',
    image: '/images/Linux.jpg',
  },
  {
    title: 'Web Devlopment',
    issuer: 'CodSoft',
    image: '/images/webdevlopment.jpg',
  },
  {
    title: 'c++',
    issuer: 'CodSoft',
    image: '/images/c++.jpg',
  },
];

export function Gallery() {
  const [selectedCert, setSelectedCert] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Certificates & Achievements
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My journey of continuous learning and professional development
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={index}
              onClick={() => setSelectedCert(index)}
              className="group cursor-pointer relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-start gap-2 mb-2">
                    <Award size={20} className="flex-shrink-0 mt-1" />
                    <h3 className="font-bold text-lg leading-tight">{cert.title}</h3>
                  </div>
                  <p className="text-sm text-gray-200">{cert.issuer}</p>
                </div>
              </div>

              <div className="p-4 bg-white">
                <h3 className="font-semibold text-gray-900 mb-1">{cert.title}</h3>
                <p className="text-sm text-gray-600">{cert.issuer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedCert !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedCert(null)}
        >
          <button
            onClick={() => setSelectedCert(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
          >
            <X size={32} />
          </button>

          <div className="max-w-4xl w-full">
            <img
              src={certificates[selectedCert].image}
              alt={certificates[selectedCert].title}
              className="w-full h-auto rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="mt-6 text-center text-white">
              <h3 className="text-2xl font-bold mb-2">
                {certificates[selectedCert].title}
              </h3>
              <p className="text-gray-300">{certificates[selectedCert].issuer}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
