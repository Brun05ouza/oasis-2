import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Eye, Shield, X } from 'lucide-react';
import { Button } from '@/app/components/Button';
import {
  HeaderSection,
  HeroSection,
  BenefitsSection,
  GallerySection,
  FloorPlansSection,
  LocationSection,
  AboutSection,
  ContactFormSection,
  FooterSection
} from '@/app/components/sections';

export default function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [previewModalOpen, setPreviewModalOpen] = useState(false);
  const [galleryModalOpen, setGalleryModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{ url: string; alt: string } | null>(null);
  const [plantGalleryOpen, setPlantGalleryOpen] = useState(false);
  const [currentPlantIndex, setCurrentPlantIndex] = useState(0);
  const [plantImages, setPlantImages] = useState<string[]>([]);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right');
  
  // Estados para galeria de carrossel
  const [carouselGalleryOpen, setCarouselGalleryOpen] = useState(false);
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0);
  const [carouselImages, setCarouselImages] = useState<string[]>([]);
  const [carouselCategoryName, setCarouselCategoryName] = useState('');
  
  // Estado para modal de vídeo
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  
  // Estados para questionário pós-formulário
  const [questionnaireOpen, setQuestionnaireOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [showSuccessScreen, setShowSuccessScreen] = useState(false);
  const [currentLeadId, setCurrentLeadId] = useState<string | null>(null);
  const [questionnaireData, setQuestionnaireData] = useState({
    relacionamento: '',
    investimento: '',
    cidade: '',
    dataNascimento: '',
    perfil: ''
  });
  
  // Estado para banner de cookies
  const [cookieAccepted, setCookieAccepted] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('cookieAccepted') === 'true';
    }
    return false;
  });

  const acceptCookies = () => {
    localStorage.setItem('cookieAccepted', 'true');
    setCookieAccepted(true);
  };

  // Detectar scroll para mudar o header
  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevenir scroll quando modal estiver aberto
  React.useEffect(() => {
    if (previewModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [previewModalOpen]);

  // Fechar modal com tecla ESC e navegar com setas
  React.useEffect(() => {
    const handleKeyboard = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && previewModalOpen) {
        setPreviewModalOpen(false);
      }
      if (e.key === 'Escape' && galleryModalOpen) {
        setGalleryModalOpen(false);
      }
      if (e.key === 'Escape' && plantGalleryOpen) {
        closePlantGallery();
      }
      if (e.key === 'Escape' && carouselGalleryOpen) {
        closeCarouselGallery();
      }
      if (e.key === 'Escape' && videoModalOpen) {
        setVideoModalOpen(false);
      }
      if (plantGalleryOpen) {
        if (e.key === 'ArrowRight') {
          nextPlant();
        }
        if (e.key === 'ArrowLeft') {
          prevPlant();
        }
      }
      if (carouselGalleryOpen) {
        if (e.key === 'ArrowRight') {
          nextCarousel();
        }
        if (e.key === 'ArrowLeft') {
          prevCarousel();
        }
      }
    };

    window.addEventListener('keydown', handleKeyboard);
    return () => window.removeEventListener('keydown', handleKeyboard);
  }, [previewModalOpen, galleryModalOpen, plantGalleryOpen, carouselGalleryOpen, videoModalOpen, currentPlantIndex, plantImages.length, currentCarouselIndex, carouselImages.length]);

  // Prevenir scroll quando modal de galeria estiver aberto
  React.useEffect(() => {
    if (galleryModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [galleryModalOpen]);

  // Categorias de áreas internas - agrupadas
  const internalCategories = [
    {
      name: 'Cozinha',
      images: [
        'https://wp.oasis2.com.br/wp-content/uploads/2026/02/GN-Oasis_2-Internas-Cozinha_01-scaled.png',
        'https://wp.oasis2.com.br/wp-content/uploads/2026/02/GN-Oasis_2-Internas-Cozinha_02-scaled.png',
        'https://wp.oasis2.com.br/wp-content/uploads/2026/02/GN-Oasis_2-Internas-Cozinha_03-scaled.png'
      ]
    },
    {
      name: 'Quarto Infantil',
      images: [
        'https://wp.oasis2.com.br/wp-content/uploads/2026/02/GN-Oasis_2-Internas-Infantil_01-scaled.png',
        'https://wp.oasis2.com.br/wp-content/uploads/2026/02/GN-Oasis_2-Internas-Infantil_02-scaled.png',
        'https://wp.oasis2.com.br/wp-content/uploads/2026/02/GN-Oasis_2-Internas-Infantil_03-scaled.png'
      ]
    },
    {
      name: 'Sala de Estar',
      images: [
        'https://wp.oasis2.com.br/wp-content/uploads/2026/02/GN-Oasis_2-Internas-Sala_01-scaled.png',
        'https://wp.oasis2.com.br/wp-content/uploads/2026/02/GN-Oasis_2-Internas-Sala_02-scaled.png',
        'https://wp.oasis2.com.br/wp-content/uploads/2026/02/GN-Oasis_2-Internas-Sala_03-scaled.png'
      ]
    },
    {
      name: 'Suíte',
      images: [
        'https://wp.oasis2.com.br/wp-content/uploads/2026/02/GN-Oasis_2-Internas-Suite_01-scaled.png',
        'https://wp.oasis2.com.br/wp-content/uploads/2026/02/GN-Oasis_2-Internas-Suite_02-scaled.png'
      ]
    },
    {
      name: 'Varanda',
      images: [
        'https://wp.oasis2.com.br/wp-content/uploads/2026/02/GN-Oasis_2-Internas-Varanda_01-scaled.png'
      ]
    }
  ];

  // Categorias de áreas externas - agrupadas
  const externalCategories = [
    {
      name: 'Piscina',
      images: [
        'https://wp.oasis2.com.br/wp-content/uploads/2026/02/GN-Oasis_2-Benfeitoria-Piscina_01-scaled.png',
        'https://wp.oasis2.com.br/wp-content/uploads/2026/02/GN-Oasis_2-Benfeitoria-Piscina_02-scaled.png'
      ]
    },
    {
      name: 'Academia',
      images: [
        'https://wp.oasis2.com.br/wp-content/uploads/2026/02/GN-Oasis_2-Benfeitoria-Academia_01-scaled.png',
        'https://wp.oasis2.com.br/wp-content/uploads/2026/02/GN-Oasis_2-Benfeitoria-Academia_02-scaled.png',
        'https://wp.oasis2.com.br/wp-content/uploads/2026/02/GN-Oasis_2-Benfeitoria-Academia_03-scaled.png'
      ]
    },
    {
      name: 'SPA',
      images: [
        'https://wp.oasis2.com.br/wp-content/uploads/2026/02/GN-Oasis_2-Benfeitoria-SPA_01-scaled.png',
        'https://wp.oasis2.com.br/wp-content/uploads/2026/02/GN-Oasis_2-Benfeitoria-SPA_02-scaled.png',
        'https://wp.oasis2.com.br/wp-content/uploads/2026/02/GN-Oasis_2-Benfeitoria-SPA_03-scaled.png',
        'https://wp.oasis2.com.br/wp-content/uploads/2026/02/GN-Oasis_2-Benfeitoria-SPA_04-scaled.png'
      ]
    },
    {
      name: 'Playground',
      images: [
        'https://wp.oasis2.com.br/wp-content/uploads/2026/02/GN-Oasis_2-Benfeitoria-Playground_01-scaled.png',
        'https://wp.oasis2.com.br/wp-content/uploads/2026/02/GN-Oasis_2-Benfeitoria-Playground_02-scaled.png'
      ]
    },
    {
      name: 'Brinquedoteca',
      images: [
        'https://wp.oasis2.com.br/wp-content/uploads/2026/02/GN-Oasis_2-Benfeitoria-Brinquedoteca_01-scaled.png',
        'https://wp.oasis2.com.br/wp-content/uploads/2026/02/GN-Oasis_2-Benfeitoria-Brinquedoteca_02-scaled.png',
        'https://wp.oasis2.com.br/wp-content/uploads/2026/02/GN-Oasis_2-Benfeitoria-Brinquedoteca_03-scaled.png'
      ]
    },
    {
      name: 'Salão de Festas',
      images: [
        'https://wp.oasis2.com.br/wp-content/uploads/2026/02/GN-Oasis_2-Benfeitoria-SalaoFestas_01-scaled.png',
        'https://wp.oasis2.com.br/wp-content/uploads/2026/02/GN-Oasis_2-Benfeitoria-SalaoFestas_02-scaled.png'
      ]
    },
    {
      name: 'Churrasqueira',
      images: [
        'https://wp.oasis2.com.br/wp-content/uploads/2026/02/GN-Oasis_2-Benfeitoria-Churrasqueira_01-scaled.png',
        'https://wp.oasis2.com.br/wp-content/uploads/2026/02/GN-Oasis_2-Benfeitoria-Churrasqueira_02-scaled.png',
        'https://wp.oasis2.com.br/wp-content/uploads/2026/02/GN-Oasis_2-Benfeitoria-Churrasqueira_03-scaled.png'
      ]
    },
    {
      name: 'Sauna',
      images: [
        'https://wp.oasis2.com.br/wp-content/uploads/2026/02/GN-Oasis_2-Benfeitoria-Sauna_01-scaled.png',
        'https://wp.oasis2.com.br/wp-content/uploads/2026/02/GN-Oasis_2-Benfeitoria-Sauna_02-scaled.png'
      ]
    },
    {
      name: 'Espaço Funcional',
      images: [
        'https://wp.oasis2.com.br/wp-content/uploads/2026/02/GN-Oasis_2-Benfeitoria-Funcional_01-scaled.png',
        'https://wp.oasis2.com.br/wp-content/uploads/2026/02/GN-Oasis_2-Benfeitoria-Funcional_02-scaled.png',
        'https://wp.oasis2.com.br/wp-content/uploads/2026/02/GN-Oasis_2-Benfeitoria-Funcional_03-scaled.png'
      ]
    },
    {
      name: 'Pergolado',
      images: [
        'https://wp.oasis2.com.br/wp-content/uploads/2026/02/GN-Oasis_2-Benfeitoria-Pergolado_01-scaled.png',
        'https://wp.oasis2.com.br/wp-content/uploads/2026/02/GN-Oasis_2-Benfeitoria-Pergolado_02-scaled.png'
      ]
    },
    {
      name: 'Recepção',
      images: [
        'https://wp.oasis2.com.br/wp-content/uploads/2026/02/GN-Oasis_2-Benfeitoria-Recepcao_01-scaled.png'
      ]
    }
  ];

  // Plantas por tipo de apartamento
  const plantas2Quartos = [
    'https://wp.oasis2.com.br/wp-content/uploads/2026/02/GN-Oasis_2-Humanizadas-Meio_Tipo-scaled.png',
    'https://wp.oasis2.com.br/wp-content/uploads/2026/02/GN-Oasis_2-Humanizadas-Meio_Varanda-01-scaled.png',
    'https://wp.oasis2.com.br/wp-content/uploads/2026/02/GN-Oasis_2-Humanizadas-Meio_Varanda-02-scaled.png',
    'https://wp.oasis2.com.br/wp-content/uploads/2026/02/GN-Oasis_2-Humanizadas-Meio_Varanda-03-scaled.png'
  ];

  const plantas3Quartos = [
    'https://wp.oasis2.com.br/wp-content/uploads/2026/02/GN-Oasis_2-Humanizadas-Ponta_Tipo-scaled.png',
    'https://wp.oasis2.com.br/wp-content/uploads/2026/02/GN-Oasis_2-Humanizadas-Ponta_Varanda-scaled.png'
  ];

  const plantasCobertura = [
    'https://wp.oasis2.com.br/wp-content/uploads/2026/02/GN-Oasis_2-Humanizadas-Meio_Cobertura-scaled.png',
    'https://wp.oasis2.com.br/wp-content/uploads/2026/02/GN-Oasis_2-Humanizadas-Ponta_Cobertura-scaled.png'
  ];

  const openPlantGallery = (images: string[]) => {
    setPlantImages(images);
    setCurrentPlantIndex(0);
    setPlantGalleryOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closePlantGallery = () => {
    setPlantGalleryOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextPlant = () => {
    setSlideDirection('right');
    setCurrentPlantIndex((prev) => (prev + 1) % plantImages.length);
  };

  const prevPlant = () => {
    setSlideDirection('left');
    setCurrentPlantIndex((prev) => (prev - 1 + plantImages.length) % plantImages.length);
  };

  // Funções para galeria do carrossel
  const openCarouselGallery = (images: string[], categoryName: string) => {
    setCarouselImages(images);
    setCarouselCategoryName(categoryName);
    setCurrentCarouselIndex(0);
    setCarouselGalleryOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeCarouselGallery = () => {
    setCarouselGalleryOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextCarousel = () => {
    setSlideDirection('right');
    setCurrentCarouselIndex((prev) => (prev + 1) % carouselImages.length);
  };

  const prevCarousel = () => {
    setSlideDirection('left');
    setCurrentCarouselIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <HeaderSection
        scrolled={scrolled}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        scrollToSection={scrollToSection}
      />

      <HeroSection
        scrollToSection={scrollToSection}
        setPreviewModalOpen={setPreviewModalOpen}
      />

      <BenefitsSection />

      <GallerySection
        internalCategories={internalCategories}
        externalCategories={externalCategories}
        openCarouselGallery={openCarouselGallery}
      />

      <FloorPlansSection
        plantas2Quartos={plantas2Quartos}
        plantas3Quartos={plantas3Quartos}
        plantasCobertura={plantasCobertura}
        openPlantGallery={openPlantGallery}
      />

      <LocationSection />

      <AboutSection setVideoModalOpen={setVideoModalOpen} />

      <ContactFormSection
        onSubmitSuccess={(leadId) => {
          setCurrentLeadId(leadId);
          setQuestionnaireOpen(true);
          setCurrentStep(1);
        }}
      />

      <FooterSection scrollToSection={scrollToSection} />

      {/* Preview Modal */}
      {previewModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setPreviewModalOpen(false)}
          className="fixed inset-0 bg-black/95 backdrop-blur-md z-[100] flex items-center justify-center p-3 sm:p-4 cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: "spring", duration: 0.4 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-3xl w-full cursor-default"
          >
            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setPreviewModalOpen(false)}
              className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 z-50 w-10 h-10 sm:w-12 sm:h-12 bg-[#E8915B] rounded-full flex items-center justify-center shadow-2xl hover:bg-[#D67E4F] transition-colors"
              aria-label="Fechar"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </motion.button>

            {/* Image Container */}
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://wp.oasis2.com.br/wp-content/uploads/2026/02/GN-Oasis_2-Fachada-Diurna_01-scaled.png"
                alt="Preview do Oasis Residencial"
                className="w-full h-auto max-h-[75vh] object-contain rounded-2xl"
              />
            </div>

            {/* Hint para fechar */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-white/60 text-center mt-4 text-sm"
            >
              Clique fora da imagem ou no X para fechar
            </motion.p>
          </motion.div>
        </motion.div>
      )}

      {/* Gallery Modal */}
      {galleryModalOpen && selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setGalleryModalOpen(false)}
          className="fixed inset-0 bg-black/95 backdrop-blur-md z-[100] flex items-center justify-center p-4 cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: "spring", duration: 0.5 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full cursor-default"
          >
            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setGalleryModalOpen(false)}
              className="absolute -top-4 -right-4 z-10 w-12 h-12 bg-[#E8915B] rounded-full flex items-center justify-center shadow-2xl hover:bg-[#D67E4F] transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </motion.button>

            {/* Image Container */}
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={selectedImage.url}
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[80vh] object-contain"
              />

              {/* Overlay com informações */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-6">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center gap-3"
                >
                  <Eye className="w-6 h-6 text-[#E8915B]" />
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {selectedImage.alt}
                  </h3>
                </motion.div>
              </div>
            </div>

            {/* Hint para fechar */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-white/60 text-center mt-4 text-sm"
            >
              Pressione ESC ou clique fora para fechar
            </motion.p>
          </motion.div>
        </motion.div>
      )}

      {/* Plant Gallery Modal */}
      {plantGalleryOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closePlantGallery}
          className="fixed inset-0 bg-black/95 backdrop-blur-md z-[100] flex items-center justify-center p-4 cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-6xl w-full cursor-default"
          >
            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={closePlantGallery}
              className="absolute -top-4 -right-4 z-50 w-14 h-14 bg-[#E8915B] rounded-full flex items-center justify-center shadow-2xl hover:bg-[#D67E4F] transition-colors"
            >
              <X className="w-7 h-7 text-white" />
            </motion.button>

            {/* Navigation Buttons */}
            {plantImages.length > 1 && (
              <>
                <motion.button
                  whileHover={{ scale: 1.1, x: -5 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={prevPlant}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-40 w-12 h-12 bg-[#E8915B]/90 rounded-full flex items-center justify-center shadow-xl hover:bg-[#E8915B] transition-colors"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1, x: 5 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={nextPlant}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-40 w-12 h-12 bg-[#E8915B]/90 rounded-full flex items-center justify-center shadow-xl hover:bg-[#E8915B] transition-colors"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </motion.button>
              </>
            )}

            {/* Image Container with Slide Animation */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white/5">
              <motion.div
                key={currentPlantIndex}
                initial={{
                  x: slideDirection === 'right' ? 300 : -300,
                  opacity: 0
                }}
                animate={{
                  x: 0,
                  opacity: 1
                }}
                exit={{
                  x: slideDirection === 'right' ? -300 : 300,
                  opacity: 0
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30
                }}
                className="relative"
              >
                <img
                  src={plantImages[currentPlantIndex]}
                  alt={`Planta ${currentPlantIndex + 1}`}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
              </motion.div>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-sm px-4 py-2 rounded-full">
                <p className="text-white font-medium text-sm">
                  {currentPlantIndex + 1} / {plantImages.length}
                </p>
              </div>
            </div>

            {/* Thumbnails */}
            {plantImages.length > 1 && (
              <div className="flex gap-2 justify-center mt-4 overflow-x-auto pb-2">
                {plantImages.map((img, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setSlideDirection(index > currentPlantIndex ? 'right' : 'left');
                      setCurrentPlantIndex(index);
                    }}
                    className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${index === currentPlantIndex
                      ? 'border-[#E8915B] scale-110'
                      : 'border-white/30 hover:border-white/60'
                      }`}
                  >
                    <img
                      src={img}
                      alt={`Miniatura ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    {index === currentPlantIndex && (
                      <div className="absolute inset-0 bg-[#E8915B]/20" />
                    )}
                  </motion.button>
                ))}
              </div>
            )}

            {/* Hint */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-white/60 text-center mt-4 text-sm"
            >
              Use as setas para navegar • Pressione ESC para fechar
            </motion.p>
          </motion.div>
        </motion.div>
      )}

      {/* Carousel Gallery Modal */}
      {carouselGalleryOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeCarouselGallery}
          className="fixed inset-0 bg-black/95 backdrop-blur-md z-[100] flex items-center justify-center p-4 cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-6xl w-full cursor-default"
          >
            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={closeCarouselGallery}
              className="absolute -top-4 -right-4 z-50 w-14 h-14 bg-[#E8915B] rounded-full flex items-center justify-center shadow-2xl hover:bg-[#D67E4F] transition-colors"
            >
              <X className="w-7 h-7 text-white" />
            </motion.button>

            {/* Navigation Buttons */}
            {carouselImages.length > 1 && (
              <>
                <motion.button
                  whileHover={{ scale: 1.1, x: -5 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={prevCarousel}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-40 w-12 h-12 bg-[#E8915B]/90 rounded-full flex items-center justify-center shadow-xl hover:bg-[#E8915B] transition-colors"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1, x: 5 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={nextCarousel}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-40 w-12 h-12 bg-[#E8915B]/90 rounded-full flex items-center justify-center shadow-xl hover:bg-[#E8915B] transition-colors"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </motion.button>
              </>
            )}

            {/* Image Container with Slide Animation */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white/5">
              <motion.div
                key={currentCarouselIndex}
                initial={{
                  x: slideDirection === 'right' ? 300 : -300,
                  opacity: 0
                }}
                animate={{
                  x: 0,
                  opacity: 1
                }}
                exit={{
                  x: slideDirection === 'right' ? -300 : 300,
                  opacity: 0
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30
                }}
                className="relative"
              >
                <img
                  src={carouselImages[currentCarouselIndex]}
                  alt={`${carouselCategoryName} ${currentCarouselIndex + 1}`}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
              </motion.div>

              {/* Image Counter & Category Name */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-sm px-6 py-3 rounded-full">
                <p className="text-white font-bold text-base mb-1">{carouselCategoryName}</p>
                <p className="text-white/80 font-medium text-sm text-center">
                  {currentCarouselIndex + 1} / {carouselImages.length}
                </p>
              </div>
            </div>

            {/* Thumbnails */}
            {carouselImages.length > 1 && (
              <div className="flex gap-2 justify-center mt-4 overflow-x-auto pb-2">
                {carouselImages.map((img, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setSlideDirection(index > currentCarouselIndex ? 'right' : 'left');
                      setCurrentCarouselIndex(index);
                    }}
                    className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${index === currentCarouselIndex
                      ? 'border-[#E8915B] scale-110'
                      : 'border-white/30 hover:border-white/60'
                      }`}
                  >
                    <img
                      src={img}
                      alt={`Miniatura ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    {index === currentCarouselIndex && (
                      <div className="absolute inset-0 bg-[#E8915B]/20" />
                    )}
                  </motion.button>
                ))}
              </div>
            )}

            {/* Hint */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-white/60 text-center mt-4 text-sm"
            >
              Use as setas para navegar • Pressione ESC para fechar
            </motion.p>
          </motion.div>
        </motion.div>
      )}

      {/* Questionnaire Modal */}
      {questionnaireOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100] flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-md w-full my-4"
          >
            <div className="bg-gradient-to-br from-[#1E3C58] to-[#0F172A] rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl border-2 border-[#E8915B]/30">
              {/* Step 1: Status de Relacionamento */}
              {currentStep === 1 && (
                <div className="space-y-4 sm:space-y-6">
                  <div className="text-center">
                    <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">Status de Relacionamento</h2>
                    <p className="text-[#E8915B] font-semibold text-sm sm:text-base">Passo 1 de 5</p>
                  </div>
                  
                  <div className="space-y-2 sm:space-y-3">
                    {['Solteiro(a)', 'Namorando', 'Noivo(a)', 'União estável / Casado(a)'].map((option) => (
                      <label
                        key={option}
                        className={`flex items-center gap-3 p-4 rounded-xl cursor-pointer transition-all ${
                          questionnaireData.relacionamento === option
                            ? 'bg-[#E8915B] border-2 border-[#E8915B]'
                            : 'bg-white/10 border-2 border-white/20 hover:border-[#E8915B]/50'
                        }`}
                      >
                        <input
                          type="radio"
                          name="relacionamento"
                          value={option}
                          checked={questionnaireData.relacionamento === option}
                          onChange={(e) => setQuestionnaireData({ ...questionnaireData, relacionamento: e.target.value })}
                          className="w-5 h-5 accent-[#E8915B]"
                        />
                        <span className="text-white font-medium">{option}</span>
                      </label>
                    ))}
                  </div>
                  
                  <div className="flex gap-3 mt-8">
                    <button
                      onClick={() => setCurrentStep(2)}
                      disabled={!questionnaireData.relacionamento}
                      className="flex-1 bg-[#E8915B] hover:bg-[#D67E4F] disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold py-4 px-6 rounded-xl transition-colors"
                    >
                      Próxima
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Investimento Mensal */}
              {currentStep === 2 && (
                <div className="space-y-4 sm:space-y-6">
                  <div className="text-center">
                    <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">Investimento Mensal</h2>
                    <p className="text-[#E8915B] font-semibold text-sm sm:text-base">Passo 2 de 5</p>
                  </div>
                  
                  <div className="space-y-2 sm:space-y-3">
                    {[
                      'Entre R$1000 e R$1700',
                      'Entre R$1701 e R$2500',
                      'Entre R$2501 e R$3500',
                      'Acima de R$3500'
                    ].map((option) => (
                      <label
                        key={option}
                        className={`flex items-center gap-3 p-4 rounded-xl cursor-pointer transition-all ${
                          questionnaireData.investimento === option
                            ? 'bg-[#E8915B] border-2 border-[#E8915B]'
                            : 'bg-white/10 border-2 border-white/20 hover:border-[#E8915B]/50'
                        }`}
                      >
                        <input
                          type="radio"
                          name="investimento"
                          value={option}
                          checked={questionnaireData.investimento === option}
                          onChange={(e) => setQuestionnaireData({ ...questionnaireData, investimento: e.target.value })}
                          className="w-5 h-5 accent-[#E8915B]"
                        />
                        <span className="text-white font-medium">{option}</span>
                      </label>
                    ))}
                  </div>
                  
                  <div className="flex gap-3 mt-8">
                    <button
                      onClick={() => setCurrentStep(1)}
                      className="px-6 py-4 border-2 border-white/30 text-white font-bold rounded-xl hover:border-[#E8915B] transition-colors"
                    >
                      Anterior
                    </button>
                    <button
                      onClick={() => setCurrentStep(3)}
                      disabled={!questionnaireData.investimento}
                      className="flex-1 bg-[#E8915B] hover:bg-[#D67E4F] disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold py-4 px-6 rounded-xl transition-colors"
                    >
                      Próxima
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Cidade de Residência */}
              {currentStep === 3 && (
                <div className="space-y-4 sm:space-y-6">
                  <div className="text-center">
                    <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">Cidade de Residência</h2>
                    <p className="text-[#E8915B] font-semibold text-sm sm:text-base">Passo 3 de 5</p>
                  </div>
                  
                  <input
                    type="text"
                    value={questionnaireData.cidade}
                    onChange={(e) => setQuestionnaireData({ ...questionnaireData, cidade: e.target.value })}
                    placeholder="Ex: Nova Iguaçu - RJ"
                    className="w-full px-6 py-4 bg-white/10 border-2 border-white/20 rounded-xl text-white placeholder-white/50 focus:border-[#E8915B] focus:outline-none transition-colors"
                  />
                  
                  <div className="flex gap-3 mt-8">
                    <button
                      onClick={() => setCurrentStep(2)}
                      className="px-6 py-4 border-2 border-white/30 text-white font-bold rounded-xl hover:border-[#E8915B] transition-colors"
                    >
                      Anterior
                    </button>
                    <button
                      onClick={() => setCurrentStep(4)}
                      disabled={!questionnaireData.cidade}
                      className="flex-1 bg-[#E8915B] hover:bg-[#D67E4F] disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold py-4 px-6 rounded-xl transition-colors"
                    >
                      Próxima
                    </button>
                  </div>
                </div>
              )}

              {/* Step 4: Data de Nascimento */}
              {currentStep === 4 && (
                <div className="space-y-4 sm:space-y-6">
                  <div className="text-center">
                    <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">Data de Nascimento</h2>
                    <p className="text-[#E8915B] font-semibold text-sm sm:text-base">Passo 4 de 5</p>
                  </div>
                  
                  <input
                    type="date"
                    value={questionnaireData.dataNascimento}
                    onChange={(e) => setQuestionnaireData({ ...questionnaireData, dataNascimento: e.target.value })}
                    className="w-full px-6 py-4 bg-white/10 border-2 border-white/20 rounded-xl text-white focus:border-[#E8915B] focus:outline-none transition-colors [color-scheme:dark]"
                  />
                  
                  <div className="flex gap-3 mt-8">
                    <button
                      onClick={() => setCurrentStep(3)}
                      className="px-6 py-4 border-2 border-white/30 text-white font-bold rounded-xl hover:border-[#E8915B] transition-colors"
                    >
                      Anterior
                    </button>
                    <button
                      onClick={() => setCurrentStep(5)}
                      disabled={!questionnaireData.dataNascimento}
                      className="flex-1 bg-[#E8915B] hover:bg-[#D67E4F] disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold py-4 px-6 rounded-xl transition-colors"
                    >
                      Próxima
                    </button>
                  </div>
                </div>
              )}

              {/* Step 5: Seu Perfil */}
              {currentStep === 5 && !showSuccessScreen && (
                <div className="space-y-4 sm:space-y-6">
                  <div className="text-center">
                    <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">Seu Perfil</h2>
                    <p className="text-[#E8915B] font-semibold text-sm sm:text-base">Passo 5 de 5</p>
                  </div>
                  
                  <div className="space-y-2 sm:space-y-3">
                    {['Morador', 'Investidor', 'Corretor'].map((option) => (
                      <label
                        key={option}
                        className={`flex items-center gap-3 p-4 rounded-xl cursor-pointer transition-all ${
                          questionnaireData.perfil === option
                            ? 'bg-[#E8915B] border-2 border-[#E8915B]'
                            : 'bg-white/10 border-2 border-white/20 hover:border-[#E8915B]/50'
                        }`}
                      >
                        <input
                          type="radio"
                          name="perfil"
                          value={option}
                          checked={questionnaireData.perfil === option}
                          onChange={(e) => setQuestionnaireData({ ...questionnaireData, perfil: e.target.value })}
                          className="w-5 h-5 accent-[#E8915B]"
                        />
                        <span className="text-white font-medium">{option}</span>
                      </label>
                    ))}
                  </div>
                  
                  <div className="flex gap-3 mt-8">
                    <button
                      onClick={() => setCurrentStep(4)}
                      className="px-6 py-4 border-2 border-white/30 text-white font-bold rounded-xl hover:border-[#E8915B] transition-colors"
                    >
                      Anterior
                    </button>
                    <button
                      onClick={async () => {
                        if (currentLeadId) {
                          try {
                            const { supabase } = await import('@/lib/supabase');
                            
                            const updateData = {
                              relationship_status: questionnaireData.relacionamento,
                              monthly_investment: questionnaireData.investimento,
                              current_city: questionnaireData.cidade,
                              birth_date: questionnaireData.dataNascimento || null,
                              profile_type: questionnaireData.perfil
                            };
                            
                            console.log('=== DEBUG: Dados do questionário ===');
                            console.log('Estado completo:', questionnaireData);
                            console.log('Cidade capturada:', questionnaireData.cidade);
                            console.log('Dados a serem salvos:', updateData);
                            console.log('Lead ID:', currentLeadId);
                            
                            const { data, error } = await supabase
                              .from('leads_oasis2')
                              .update(updateData)
                              .eq('id', currentLeadId)
                              .select();
                            
                            if (error) {
                              console.error('Erro ao salvar:', error);
                            } else {
                              console.log('Questionário salvo com sucesso!', data);
                            }
                          } catch (err) {
                            console.error('Erro ao salvar questionário:', err);
                          }
                        }
                        // Redireciona para a página de obrigado
                        window.location.href = '/obrigado';
                      }}
                      disabled={!questionnaireData.perfil}
                      className="flex-1 bg-[#10B981] hover:bg-[#059669] disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold py-4 px-6 rounded-xl transition-colors"
                    >
                      Confirmar Inscrição
                    </button>
                  </div>
                </div>
              )}

              {/* Success Screen */}
              {showSuccessScreen && (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="space-y-6 text-center py-8"
                >
                  {/* Success Icon */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="flex justify-center"
                  >
                    <div className="w-24 h-24 bg-gradient-to-br from-[#10B981] to-[#059669] rounded-full flex items-center justify-center shadow-2xl">
                      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </motion.div>

                  {/* Success Message */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="space-y-4"
                  >
                    <h2 className="text-3xl font-bold text-white">
                      Parabéns! 🎉
                    </h2>
                    <p className="text-xl text-[#E8915B] font-semibold">
                      Sua inscrição foi confirmada com sucesso!
                    </p>
                    <p className="text-white/80 text-lg max-w-md mx-auto px-4">
                      Obrigado por seu interesse no <span className="text-[#E8915B] font-semibold">Oasis Residencial</span>. 
                      Nossa equipe entrará em contato em breve para apresentar as melhores opções para você.
                    </p>
                  </motion.div>

                  {/* Decorative Elements */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="flex justify-center gap-2 pt-4"
                  >
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ y: 0 }}
                        animate={{ y: [-10, 0, -10] }}
                        transition={{ 
                          delay: 0.8 + i * 0.1, 
                          duration: 2, 
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="w-2 h-2 bg-[#E8915B] rounded-full"
                      />
                    ))}
                  </motion.div>

                  {/* Close Button */}
                  <motion.button
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setQuestionnaireOpen(false);
                      setShowSuccessScreen(false);
                      setCurrentStep(1);
                      setQuestionnaireData({
                        relacionamento: '',
                        investimento: '',
                        cidade: '',
                        dataNascimento: '',
                        perfil: ''
                      });
                    }}
                    className="mt-8 bg-gradient-to-r from-[#E8915B] to-[#D67E4F] hover:from-[#D67E4F] hover:to-[#B86C3D] text-white font-bold py-4 px-12 rounded-xl transition-all shadow-lg hover:shadow-xl"
                  >
                    Fechar
                  </motion.button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}

      {/* Video Modal */}
      {videoModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setVideoModalOpen(false)}
          className="fixed inset-0 bg-black/95 backdrop-blur-md z-[100] flex items-center justify-center p-4 cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full cursor-default"
          >
            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setVideoModalOpen(false)}
              className="absolute -top-4 -right-4 z-50 w-14 h-14 bg-[#E8915B] rounded-full flex items-center justify-center shadow-2xl hover:bg-[#D67E4F] transition-colors"
            >
              <X className="w-7 h-7 text-white" />
            </motion.button>

            {/* Video Container */}
            <div className="relative w-full bg-black rounded-2xl overflow-hidden shadow-2xl" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/KVty8Cw8PX0?autoplay=1"
                title="Oasis Residencial - Vídeo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Hint */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-white/60 text-center mt-4 text-sm"
            >
              Pressione ESC para fechar
            </motion.p>
          </motion.div>
        </motion.div>
      )}

      {/* WhatsApp Floating Button */}
      <motion.a
        href="https://wa.me/552126421203"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl z-50 hover:bg-[#1BA852] transition-colors"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contato via WhatsApp"
      >
        <svg 
          className="w-9 h-9" 
          fill="white" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </motion.a>

      {/* Cookie Banner */}
      {!cookieAccepted && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
          className="fixed bottom-0 left-0 right-0 bg-gray-900/95 backdrop-blur-md text-white py-4 px-4 sm:px-6 shadow-2xl z-50 border-t border-gray-700"
        >
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-start gap-3 flex-1">
              <div className="w-10 h-10 bg-[#E8915B] rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm sm:text-base text-gray-100 leading-relaxed">
                  Usamos cookies para melhorar sua experiência no site. Ao continuar navegando, você concorda com nossa{' '}
                  <a href="#" className="text-[#E8915B] hover:text-[#D67E4F] underline font-medium">Política de Privacidade</a>.
                </p>
              </div>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <Button
                onClick={acceptCookies}
                variant="primary"
                size="sm"
                className="whitespace-nowrap"
              >
                Aceitar Cookies
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}