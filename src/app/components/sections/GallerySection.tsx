import { motion } from 'motion/react';
import { fadeInDown } from './animationVariants';

export interface GalleryCategory {
  name: string;
  images: string[];
}

interface GallerySectionProps {
  internalCategories: GalleryCategory[];
  externalCategories: GalleryCategory[];
  openCarouselGallery: (images: string[], categoryName: string) => void;
}

export default function GallerySection({ internalCategories, externalCategories, openCarouselGallery }: GallerySectionProps) {
  return (
    <section id="galeria" className="relative py-12 md:py-20 overflow-hidden bg-gradient-to-b from-[#FFF5F0] via-[#FFFAF7] to-[#FFF5F0]">
      {/* Background com gradiente e padrão */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F8F9FA] via-[#FFF5F0] to-[#FFF0E6]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#E8915B]/5 to-transparent" />

      {/* Elementos decorativos - reduzidos em mobile */}
      <div className="absolute top-0 left-0 w-48 md:w-96 h-48 md:h-96 bg-[#E8915B]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-48 md:w-96 h-48 md:h-96 bg-[#1E3C58]/5 rounded-full blur-3xl" />

      {/* Título centralizado dentro do container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 md:mb-16">
        <motion.div
          variants={fadeInDown}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1E3C58] mb-3 md:mb-4 px-2">
            Conheça Nossos Espaços
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600">
            Explore cada detalhe do seu futuro lar
          </p>
        </motion.div>
      </div>

      {/* Carrosséis full-width */}
      <div className="relative z-10 space-y-6 md:space-y-8">
        {/* Carrossel 1 - Interiores (movendo para ESQUERDA) */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-4 md:gap-6"
            animate={{ x: [0, -4060] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 120,
                ease: "linear",
              },
            }}
          >
            {[...internalCategories, ...internalCategories, ...internalCategories, ...internalCategories].map((category, index) => (
              <div
                key={index}
                className="relative flex-shrink-0 w-[280px] sm:w-[340px] md:w-[400px] h-[200px] sm:h-[240px] md:h-[280px] rounded-xl overflow-hidden group cursor-pointer border-2 border-transparent hover:border-[#E8915B] transition-all duration-300"
                onClick={() => openCarouselGallery(category.images, category.name)}
              >
                <img 
                  src={category.images[0]}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-3 md:p-4">
                  <div>
                    <span className="inline-block px-2 md:px-3 py-1 bg-[#E8915B] text-white text-xs font-semibold rounded-full mb-1 md:mb-2">
                      Interior • {category.images.length} {category.images.length === 1 ? 'Foto' : 'Fotos'}
                    </span>
                    <p className="text-white font-medium">{category.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
          
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#FFF5F0] to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#FFF5F0] to-transparent pointer-events-none z-10" />
        </div>

        {/* Carrossel 2 - Áreas Externas (movendo para DIREITA) */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{ x: [-4876, 0] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 140,
                ease: "linear",
              },
            }}
          >
            {[...externalCategories, ...externalCategories, ...externalCategories, ...externalCategories].map((category, index) => (
              <div
                key={index}
                className="relative flex-shrink-0 w-[400px] h-[280px] rounded-xl overflow-hidden group cursor-pointer border-2 border-transparent hover:border-[#1E3C58] transition-all duration-300"
                onClick={() => openCarouselGallery(category.images, category.name)}
              >
                <img
                  src={category.images[0]}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                  <div>
                    <span className="inline-block px-3 py-1 bg-[#1E3C58] text-white text-xs font-semibold rounded-full mb-2">
                      Área Externa • {category.images.length} {category.images.length === 1 ? 'Foto' : 'Fotos'}
                    </span>
                    <p className="text-white font-medium">{category.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
          
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#FFFAF7] to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#FFFAF7] to-transparent pointer-events-none z-10" />
        </div>
      </div>

      {/* Onda de transição Galeria → Plantas */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none">
        <svg className="relative w-full h-24" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path d="M0,50 C360,20 720,80 1080,50 C1260,35 1350,65 1440,50 L1440,100 L0,100 Z" fill="#FFF5F0" opacity="0.5" />
          <path d="M0,60 C360,30 720,90 1080,60 C1260,45 1350,75 1440,60 L1440,100 L0,100 Z" fill="#FFF5F0" />
        </svg>
      </div>
    </section>
  );
}
