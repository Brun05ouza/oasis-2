import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Home, 
  Waves, 
  Shield, 
  Calendar,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  Award,
  Building2,
  CheckCircle2,
  Leaf,
  ChevronLeft,
  ChevronRight,
  Play,
  Menu,
  X,
  TrendingUp,
  Sparkles,
  Target,
  Sofa,
  Trees,
  DollarSign,
  Clock,
  Users,
  Eye,
  ShoppingBag,
  Fuel,
  GraduationCap,
  Dumbbell,
  Pill,
  Bus,
  Train,
  Landmark,
  Hospital,
  MessageCircle
} from 'lucide-react';
import { Button } from '@/app/components/Button';
import { FeatureCard } from '@/app/components/FeatureCard';
import { TestimonialCard } from '@/app/components/TestimonialCard';
import { CertificationBadge } from '@/app/components/CertificationBadge';
import { ContactForm } from '@/app/components/ContactForm';

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

  // Variantes de animação para scroll
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const fadeInDown = {
    hidden: { opacity: 0, y: -40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const cardReveal = {
    hidden: {
      opacity: 0,
      scale: 0.85,
      rotateY: -10,
      y: 40
    },
    visible: (custom: number) => ({
      opacity: 1,
      scale: 1,
      rotateY: 0,
      y: 0,
      transition: {
        duration: 0.7,
        delay: custom * 0.2,
        ease: [0.16, 1, 0.3, 1],
        scale: { duration: 0.6 },
        rotateY: { duration: 0.8 }
      }
    })
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

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
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
        ? 'bg-white/95 backdrop-blur-md shadow-lg'
        : 'backdrop-blur-[4px] bg-black/10'
        }`}>
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <div className="flex items-center gap-2">
              <img
                src={scrolled 
                  ? "https://wp.oasis2.com.br/wp-content/uploads/2026/02/ID_Oasis2-02.png"
                  : "https://wp.oasis2.com.br/wp-content/uploads/2026/02/Logo-Laranja-e-branco.png"
                }
                alt="Oasis Residencial Logo"
                className="h-14 sm:h-16 md:h-20 w-auto object-contain transition-all duration-300"
              />
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className={`hover:text-[#E8915B] transition-colors font-medium text-sm xl:text-base ${scrolled ? 'text-gray-800' : 'text-white'}`}>
                Home
              </button>
              <button onClick={() => scrollToSection('imoveis')} className={`hover:text-[#E8915B] transition-colors font-medium text-sm xl:text-base ${scrolled ? 'text-gray-800' : 'text-white'}`}>
                Benefícios
              </button>
              <button onClick={() => scrollToSection('plantas')} className={`hover:text-[#E8915B] transition-colors font-medium text-sm xl:text-base ${scrolled ? 'text-gray-800' : 'text-white'}`}>
                Plantas
              </button>
              <button onClick={() => scrollToSection('galeria')} className={`hover:text-[#E8915B] transition-colors font-medium text-sm xl:text-base ${scrolled ? 'text-gray-800' : 'text-white'}`}>
                Lazer
              </button>
              <button onClick={() => scrollToSection('localizacao')} className={`hover:text-[#E8915B] transition-colors font-medium text-sm xl:text-base ${scrolled ? 'text-gray-800' : 'text-white'}`}>
                Localização
              </button>
              <Button variant="primary" size="sm" onClick={() => scrollToSection('formulario')} className="text-sm">
                Entre em Contato
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className={`lg:hidden transition-colors p-2 ${scrolled ? 'text-gray-800' : 'text-white'}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white shadow-xl border-t border-gray-100"
          >
            <div className="px-6 py-6 space-y-1">
              <button 
                onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setMobileMenuOpen(false); }} 
                className="block w-full text-left py-3.5 px-4 text-gray-800 font-medium rounded-lg hover:bg-[#FFF5F0] hover:text-[#E8915B] transition-all duration-200 border-b border-gray-100"
              >
                Home
              </button>
              <button 
                onClick={() => { scrollToSection('imoveis'); setMobileMenuOpen(false); }} 
                className="block w-full text-left py-3.5 px-4 text-gray-800 font-medium rounded-lg hover:bg-[#FFF5F0] hover:text-[#E8915B] transition-all duration-200 border-b border-gray-100"
              >
                Benefícios
              </button>
              <button 
                onClick={() => { scrollToSection('plantas'); setMobileMenuOpen(false); }} 
                className="block w-full text-left py-3.5 px-4 text-gray-800 font-medium rounded-lg hover:bg-[#FFF5F0] hover:text-[#E8915B] transition-all duration-200 border-b border-gray-100"
              >
                Plantas
              </button>
              <button 
                onClick={() => { scrollToSection('galeria'); setMobileMenuOpen(false); }} 
                className="block w-full text-left py-3.5 px-4 text-gray-800 font-medium rounded-lg hover:bg-[#FFF5F0] hover:text-[#E8915B] transition-all duration-200 border-b border-gray-100"
              >
                Lazer
              </button>
              <button 
                onClick={() => { scrollToSection('localizacao'); setMobileMenuOpen(false); }} 
                className="block w-full text-left py-3.5 px-4 text-gray-800 font-medium rounded-lg hover:bg-[#FFF5F0] hover:text-[#E8915B] transition-all duration-200 border-b border-gray-100"
              >
                Localização
              </button>
              <div className="pt-4">
                <Button 
                  variant="primary" 
                  className="w-full text-base py-4 shadow-lg" 
                  onClick={() => { scrollToSection('formulario'); setMobileMenuOpen(false); }}
                >
                  Entre em Contato
              </Button>
              </div>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://wp.oasis2.com.br/wp-content/uploads/2026/02/degrade-2-1.jpg"
            alt="Oasis Residencial - Fachada"
            className="w-full h-full object-cover object-center scale-105"
            style={{ objectPosition: 'center 40%' }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 w-full flex items-center justify-center min-h-screen">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white z-10 text-center max-w-4xl"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight px-2"
            >
              <span className="block text-white drop-shadow-2xl mb-1 md:mb-2">
                O Desfrutar de
              </span>
              <span className="block bg-gradient-to-r from-[#E8915B] to-[#F0A574] bg-clip-text text-transparent drop-shadow-lg">
                Novos Começos
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="max-w-3xl mx-auto mb-8 md:mb-10 px-4"
            >
              <p className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-light text-white/95 drop-shadow-lg mb-3 md:mb-4 leading-relaxed">
                Viva a experiência de <span className="font-semibold text-white">novos começos</span>
              </p>
              <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-[#E8915B] to-transparent mx-auto my-4 md:my-6"></div>
              <p className="text-sm xs:text-base sm:text-lg lg:text-xl text-white/85 leading-relaxed">
                Um conceito inovador de bem-estar, onde <span className="font-semibold">conforto, segurança e lazer</span> se unem em perfeita harmonia para você e sua família
              </p>
            </motion.div>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center px-4">
              <Button variant="primary" size="lg" onClick={() => scrollToSection('formulario')} className="w-full sm:w-auto text-sm md:text-base">
                Entrar em contato
              </Button>
              <motion.button
                onClick={() => setPreviewModalOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 md:w-14 md:h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors border-2 border-white/40 flex-shrink-0"
                aria-label="Visualizar projeto"
              >
                <Eye className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </motion.button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white/10 border-white text-white hover:bg-white hover:text-[#1E3C58] backdrop-blur-sm text-sm md:text-base" onClick={() => scrollToSection('plantas')}>
                Ver Tipologias
              </Button>
            </div>
          </motion.div>
            </div>
      </section>

      {/* Benefícios Diretos Section */}
      <section id="imoveis" className="relative pt-20 md:pt-32 pb-24 md:pb-40 bg-gradient-to-b from-[#FFF1E6] via-[#FFF5EE] to-[#FFE8D9] overflow-hidden">
        {/* Onda decorativa no topo do background */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative w-full h-16 md:h-24" viewBox="0 0 1440 100" preserveAspectRatio="none">
            <path d="M0,50 C360,80 720,20 1080,50 C1260,65 1350,35 1440,50 L1440,0 L0,0 Z" fill="#FFF1E6" />
          </svg>
        </div>
        
        {/* Elementos decorativos sutis - reduzidos em mobile */}
        <div className="absolute top-20 right-4 md:right-10 w-48 md:w-96 h-48 md:h-96 bg-gradient-to-br from-[#F0A574]/6 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-20 md:bottom-40 left-4 md:left-10 w-64 md:w-[500px] h-64 md:h-[500px] bg-gradient-to-tr from-[#E8915B]/6 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-48 md:w-64 h-48 md:h-64 bg-gradient-to-bl from-[#FDBA74]/8 to-transparent rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInDown}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mb-12 md:mb-16 px-4"
          >
            <motion.div
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
            viewport={{ once: true }}
              className="inline-block mb-3 md:mb-4"
            >
              <span className="px-4 md:px-6 py-2 bg-gradient-to-r from-[#E8915B] to-[#F0A574] text-white text-xs md:text-sm font-semibold rounded-full shadow-lg">
                Vantagens Exclusivas
              </span>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1E3C58] mb-4 md:mb-6 px-2">
              Benefícios Diretos
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Descubra as vantagens exclusivas que tornam o Oásis Residencial a escolha perfeita para o seu novo começo. <span className="font-semibold text-[#E8915B]">Qualidade, conforto e condições imperdíveis</span> esperam por você.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-30px" }}
          >
            {/* Card 1 */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: [1, 1.03], y: -8 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center border-t-4 border-[#E8915B]"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#E8915B] to-[#F0A574] rounded-full flex items-center justify-center mb-4 md:mb-6 shadow-md">
                <Shield className="w-8 h-8 md:w-10 md:h-10 text-white" />
          </div>
              <h3 className="text-lg md:text-xl font-bold text-[#1E3C58] mb-3 md:mb-4 leading-snug">
                Qualidade de Vida e Conforto<br className="hidden sm:inline" /> Garantidos
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Viva em um ambiente projetado para o seu bem-estar, com acabamentos de alto padrão, áreas de lazer completas e a segurança que sua família merece, tudo em um só lugar.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: [1, 1.03], y: -8 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center border-t-4 border-[#E8915B]"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#E8915B] to-[#F0A574] rounded-full flex items-center justify-center mb-4 md:mb-6 shadow-md">
                <DollarSign className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-[#1E3C58] mb-3 md:mb-4 leading-snug">
                Condições de Pagamento<br className="hidden sm:inline" /> Exclusivas
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Aproveite a oportunidade de adquirir seu imóvel com condições facilitadas, financiamento pela Caixa, uso do FGTS e uma negociação flexível que cabe no seu orçamento.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: [1, 1.03], y: -8 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center border-t-4 border-[#E8915B]"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#E8915B] to-[#F0A574] rounded-full flex items-center justify-center mb-4 md:mb-6 shadow-md">
                <Home className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-[#1E3C58] mb-3 md:mb-4 leading-snug">
                Arquitetura Moderna e<br className="hidden sm:inline" /> Funcional
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Nossos apartamentos contam com plantas inteligentes que otimizam os espaços, integrando ambientes e proporcionando o máximo de conforto e funcionalidade para o seu dia a dia.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Onda de transição Benefícios → Galeria */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none">
          <svg className="relative w-full h-24" viewBox="0 0 1440 100" preserveAspectRatio="none">
            <path d="M0,50 C360,80 720,20 1080,50 C1260,65 1350,35 1440,50 L1440,100 L0,100 Z" fill="#FFF5F0" opacity="0.5" />
            <path d="M0,60 C360,90 720,30 1080,60 C1260,75 1350,45 1440,60 L1440,100 L0,100 Z" fill="#FFF5F0" />
          </svg>
        </div>
      </section>

      {/* Galeria Section */}
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
               animate={{
                 x: [0, -4060],
               }}
               transition={{
                 x: {
                   repeat: Infinity,
                   repeatType: "loop",
                   duration: 120,
                   ease: "linear",
                 },
               }}
             >
              {/* Duplicar categorias para efeito infinito */}
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
            
            {/* Gradientes de fade nas bordas */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#FFF5F0] to-transparent pointer-events-none z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#FFF5F0] to-transparent pointer-events-none z-10" />
            </div>

          {/* Carrossel 2 - Áreas Externas (movendo para DIREITA) */}
          <div className="relative overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{
                x: [-4876, 0],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 140,
                  ease: "linear",
                },
              }}
            >
              {/* Duplicar categorias para efeito infinito */}
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
            
            {/* Gradientes de fade nas bordas */}
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

      {/* Opções de Apartamentos Section */}
      <section id="plantas" className="relative py-20 overflow-hidden bg-gradient-to-b from-white via-[#FFF5F0] to-[#FFEDD5]">
        {/* Ondas decorativas no topo */}
        <div className="absolute top-0 left-0 w-full h-40 overflow-hidden pointer-events-none opacity-25">
          <svg className="w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="#F0A574" fillOpacity="0.12" d="M0,96 C80,120 160,140 240,144 C320,148 400,136 480,128 C560,120 640,116 720,112 C800,108 880,104 960,112 C1040,120 1120,140 1200,144 C1280,148 1360,136 1400,130 L1440,124 L1440,0 L0,0 Z" />
          </svg>
        </div>

        {/* Background com gradiente laranja suave */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#FFF5F0] to-[#FFEDD5]" />

        {/* SVGs Vazados - Substituindo os círculos */}

        {/* SVG Vazado - Topo Esquerdo */}
          <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
            x: [0, -20, 0],
            y: [0, -10, 0]
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-20 -left-20 w-96 h-96 opacity-5 pointer-events-none"
        >
          <img src="/assets/Ativo 2.svg" alt="" className="w-full h-full" />
          </motion.div>

        {/* SVG Vazado - Inferior Direito */}
          <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 1.12, 1],
            x: [0, 15, 0],
            y: [0, 20, 0]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-20 -right-20 w-96 h-96 opacity-5 pointer-events-none"
        >
          <img src="/assets/Ativo 2.svg" alt="" className="w-full h-full" />
          </motion.div>

        {/* SVG Vazado - Centro Direito */}
            <motion.div
          animate={{
            rotate: [0, -360],
            scale: [1, 1.08, 1],
            x: [0, 10, 0]
          }}
          transition={{
            duration: 26,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/3 right-1/4 w-64 h-64 opacity-5 pointer-events-none"
        >
          <img src="/assets/Ativo 2.svg" alt="" className="w-full h-full" />
            </motion.div>

        {/* SVG Animado - Superior Direito */}
            <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
            x: [0, 20, 0],
            y: [0, -20, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-10 right-10 w-80 h-80 opacity-5 pointer-events-none"
        >
          <img src="/assets/Ativo 2.svg" alt="" className="w-full h-full" />
            </motion.div>

        {/* SVG Animado - Inferior Esquerdo */}
            <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 1.15, 1],
            x: [0, -15, 0],
            y: [0, 15, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 left-20 w-72 h-72 opacity-5 pointer-events-none"
        >
          <img src="/assets/Ativo 2.svg" alt="" className="w-full h-full" />
            </motion.div>

        {/* SVG Animado - Centro Topo */}
            <motion.div
          animate={{
            rotate: [0, -360],
            scale: [1, 1.08, 1],
            y: [0, -25, 0]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-10 left-1/2 -translate-x-1/2 w-64 h-64 opacity-5 pointer-events-none"
        >
          <img src="/assets/Ativo 2.svg" alt="" className="w-full h-full" />
            </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeInDown}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1E3C58] mb-4">
              Plantas e Tipologias
            </h2>
            <p className="text-xl text-gray-700">
              Escolha a planta ideal para o seu estilo de vida
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              custom={0}
              variants={cardReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{
                y: -10,
                boxShadow: "0 25px 50px rgba(249, 115, 22, 0.3)",
                borderColor: "rgba(249, 115, 22, 0.5)",
                transition: { duration: 0.2 }
              }}
              transition={{ duration: 0.15 }}
              className="bg-white rounded-2xl overflow-hidden shadow-xl border-2 border-transparent"
            >
              <img
                src="https://images.unsplash.com/photo-1758448511320-05d7d28f4298?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnQlMjBmbG9vciUyMHBsYW58ZW58MXx8fHwxNzY5OTUyMDE4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Planta 2 quartos"
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">2 Quartos</h3>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#10B981]" />
                    <span>65m² privativos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#10B981]" />
                    <span>2 dormitórios com armários</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#10B981]" />
                    <span>Sacada com churrasqueira</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#10B981]" />
                    <span>1 vaga de garagem</span>
                  </li>
                </ul>
                <Button
                  variant="secondary"
                  className="w-full"
                  onClick={() => openPlantGallery(plantas2Quartos)}
                >
                  Ver Plantas
                </Button>
              </div>
            </motion.div>

            <motion.div
              custom={1}
              variants={cardReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{
                y: -10,
                boxShadow: "0 25px 50px rgba(249, 115, 22, 0.3)",
                borderColor: "rgba(249, 115, 22, 0.5)",
                transition: { duration: 0.2 }
              }}
              transition={{ duration: 0.15 }}
              className="bg-white rounded-2xl overflow-hidden shadow-xl border-2 border-transparent"
            >
              <img
                src="https://images.unsplash.com/photo-1654506012740-09321c969dc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGFydG1lbnQlMjBpbnRlcmlvciUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzcwMDE3MzE2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Planta 3 quartos"
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">3 Quartos</h3>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#10B981]" />
                    <span>85m² privativos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#10B981]" />
                    <span>3 dormitórios sendo 1 suíte</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#10B981]" />
                    <span>Varanda gourmet ampla</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#10B981]" />
                    <span>2 vagas de garagem</span>
                  </li>
                </ul>
                <Button
                  variant="secondary"
                  className="w-full"
                  onClick={() => openPlantGallery(plantas3Quartos)}
                >
                  Ver Plantas
                </Button>
              </div>
            </motion.div>

            {/* Card Cobertura */}
            <motion.div
              custom={2}
              variants={cardReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{
                y: -10,
                boxShadow: "0 25px 50px rgba(249, 115, 22, 0.3)",
                borderColor: "rgba(249, 115, 22, 0.5)",
                transition: { duration: 0.2 }
              }}
              transition={{ duration: 0.15 }}
              className="bg-white rounded-2xl overflow-hidden shadow-xl border-2 border-transparent"
            >
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxwZW50aG91c2V8ZW58MHx8fHwxNzM4NTg4MTI2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Cobertura"
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Cobertura</h3>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#10B981]" />
                    <span>120m² privativos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#10B981]" />
                    <span>3 dormitórios sendo 2 suítes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#10B981]" />
                    <span>Terraço privativo com piscina</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#10B981]" />
                    <span>3 vagas de garagem</span>
                  </li>
                </ul>
                <Button
                  variant="secondary"
                  className="w-full"
                  onClick={() => openPlantGallery(plantasCobertura)}
                >
                  Ver Plantas
                </Button>
          </div>
            </motion.div>
          </div>
        </div>

        {/* Onda de transição Plantas → Localização */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none">
          <svg className="relative w-full h-32" viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path d="M0,50 C360,80 720,20 1080,50 C1260,65 1350,35 1440,50 L1440,120 L0,120 Z" fill="#FFF5F0" opacity="0.7" />
            <path d="M0,65 C360,95 720,35 1080,65 C1260,80 1350,50 1440,65 L1440,120 L0,120 Z" fill="#FFFBF7" opacity="0.9" />
            <path d="M0,80 C360,110 720,50 1080,80 C1260,95 1350,65 1440,80 L1440,120 L0,120 Z" fill="#FFFBF7" />
          </svg>
        </div>
      </section>

       {/* Localização Privilegiada Section - Design Ultra Moderno */}
       <section id="localizacao" className="relative py-28 overflow-hidden bg-gradient-to-b from-[#FFF5F0] via-[#FFFBF7] to-[#FFF5F0]">
         {/* Padrão de ondas decorativas no topo */}
         <div className="absolute top-0 left-0 w-full h-40 overflow-hidden pointer-events-none opacity-30">
           <svg className="w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
             <path fill="#FDBA74" fillOpacity="0.1" d="M0,96 C80,120 160,140 240,144 C320,148 400,136 480,128 C560,120 640,116 720,112 C800,108 880,104 960,112 C1040,120 1120,140 1200,144 C1280,148 1360,136 1400,130 L1440,124 L1440,0 L0,0 Z" />
           </svg>
         </div>

        {/* Background sofisticado com gradiente diagonal */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFF7ED] via-[#FFFFFF] to-[#FFEDD5]" />

        {/* Padrão de grid sutil */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #4A8FC4 1px, transparent 1px),
              linear-gradient(to bottom, #4A8FC4 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        />

        {/* Elementos decorativos em camadas */}
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-gradient-to-br from-[#F0A574]/12 via-[#FDBA74]/6 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute top-20 right-40 w-[400px] h-[400px] bg-gradient-to-br from-[#FED7AA]/15 to-transparent rounded-full blur-2xl" />

        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#BFDBFE]/15 via-[#93C5FD]/8 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s' }} />
        <div className="absolute bottom-20 left-40 w-[350px] h-[350px] bg-gradient-to-tr from-[#93C5FD]/12 to-transparent rounded-full blur-2xl" />

        {/* Formas geométricas abstratas */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-[#FDBA74]/25 rounded-2xl rotate-12 blur-sm" />
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 border-2 border-[#93C5FD]/25 rounded-full blur-sm" />
        <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-gradient-to-br from-[#A7F3D0]/15 to-transparent rounded-lg rotate-45 blur-sm" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header da seção */}
          <motion.div
            variants={fadeInDown}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1E3C58] mb-6">
              Localização Privilegiada
            </h2>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Cercado por uma <span className="font-semibold text-[#E8915B]">infraestrutura completa</span> que oferece conveniência e qualidade de vida para você e sua família
            </p>
          </motion.div>

          {/* Layout: Cards + Mapa lado a lado */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Pontos de Interesse - Grid 3x3 - Lado Esquerdo */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="grid grid-cols-3 gap-3">
                {/* Shopping */}
                <motion.div
                  whileHover={{ y: -4, scale: 1.03 }}
                  className="group bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#E8915B]/30 flex flex-col"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#E8915B] to-[#F0A574] rounded-xl flex items-center justify-center mb-2 mx-auto group-hover:scale-110 transition-transform shadow-md">
                    <ShoppingBag className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-gray-800 font-bold text-xs text-center mb-2 leading-tight min-h-[32px] flex items-center justify-center">Shopping N. Iguaçu</h4>
                  <div className="flex items-center justify-center mt-auto">
                    <span className="px-2 py-1 bg-[#E8915B]/10 text-[#E8915B] rounded-full text-xs font-bold">300m</span>
                  </div>
                </motion.div>

                {/* Posto */}
                <motion.div
                  whileHover={{ y: -4, scale: 1.03 }}
                  className="group bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#E8915B]/30 flex flex-col"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#E8915B] to-[#F0A574] rounded-xl flex items-center justify-center mb-2 mx-auto group-hover:scale-110 transition-transform shadow-md">
                    <Fuel className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-gray-800 font-bold text-xs text-center mb-2 leading-tight min-h-[32px] flex items-center justify-center">Posto de Gasolina</h4>
                  <div className="flex items-center justify-center mt-auto">
                    <span className="px-2 py-1 bg-[#E8915B]/10 text-[#E8915B] rounded-full text-xs font-bold">400m</span>
                  </div>
                </motion.div>

                {/* Escola */}
                <motion.div
                  whileHover={{ y: -4, scale: 1.03 }}
                  className="group bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#E8915B]/30 flex flex-col"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#E8915B] to-[#F0A574] rounded-xl flex items-center justify-center mb-2 mx-auto group-hover:scale-110 transition-transform shadow-md">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-gray-800 font-bold text-xs text-center mb-2 leading-tight min-h-[32px] flex items-center justify-center">Escola Maple Bear</h4>
                  <div className="flex items-center justify-center mt-auto">
                    <span className="px-2 py-1 bg-[#E8915B]/10 text-[#E8915B] rounded-full text-xs font-bold">600m</span>
                  </div>
                </motion.div>

                {/* Academia */}
                <motion.div
                  whileHover={{ y: -4, scale: 1.03 }}
                  className="group bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#E8915B]/30 flex flex-col"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#E8915B] to-[#F0A574] rounded-xl flex items-center justify-center mb-2 mx-auto group-hover:scale-110 transition-transform shadow-md">
                    <Dumbbell className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-gray-800 font-bold text-xs text-center mb-2 leading-tight min-h-[32px] flex items-center justify-center">Academia</h4>
                  <div className="flex items-center justify-center mt-auto">
                    <span className="px-2 py-1 bg-[#E8915B]/10 text-[#E8915B] rounded-full text-xs font-bold">750m</span>
                  </div>
                </motion.div>

                {/* Farmácia */}
                <motion.div
                  whileHover={{ y: -4, scale: 1.03 }}
                  className="group bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#E8915B]/30 flex flex-col"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#E8915B] to-[#F0A574] rounded-xl flex items-center justify-center mb-2 mx-auto group-hover:scale-110 transition-transform shadow-md">
                    <Pill className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-gray-800 font-bold text-xs text-center mb-2 leading-tight min-h-[32px] flex items-center justify-center">Farmácia</h4>
                  <div className="flex items-center justify-center mt-auto">
                    <span className="px-2 py-1 bg-[#E8915B]/10 text-[#E8915B] rounded-full text-xs font-bold">800m</span>
                  </div>
                </motion.div>

                {/* Rodoviária */}
                <motion.div
                  whileHover={{ y: -4, scale: 1.03 }}
                  className="group bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#E8915B]/30 flex flex-col"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#E8915B] to-[#F0A574] rounded-xl flex items-center justify-center mb-2 mx-auto group-hover:scale-110 transition-transform shadow-md">
                    <Bus className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-gray-800 font-bold text-xs text-center mb-2 leading-tight min-h-[32px] flex items-center justify-center">Rodoviária</h4>
                  <div className="flex items-center justify-center mt-auto">
                    <span className="px-2 py-1 bg-[#E8915B]/10 text-[#E8915B] rounded-full text-xs font-bold">1km</span>
                  </div>
                </motion.div>

                {/* Estação de Trem */}
                <motion.div
                  whileHover={{ y: -4, scale: 1.03 }}
                  className="group bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#E8915B]/30 flex flex-col"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#E8915B] to-[#F0A574] rounded-xl flex items-center justify-center mb-2 mx-auto group-hover:scale-110 transition-transform shadow-md">
                    <Train className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-gray-800 font-bold text-xs text-center mb-2 leading-tight min-h-[32px] flex items-center justify-center">Estação de Trem</h4>
                  <div className="flex items-center justify-center mt-auto">
                    <span className="px-2 py-1 bg-[#E8915B]/10 text-[#E8915B] rounded-full text-xs font-bold">1.8km</span>
                  </div>
                </motion.div>

                {/* Prefeitura */}
                <motion.div
                  whileHover={{ y: -4, scale: 1.03 }}
                  className="group bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#E8915B]/30 flex flex-col"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#E8915B] to-[#F0A574] rounded-xl flex items-center justify-center mb-2 mx-auto group-hover:scale-110 transition-transform shadow-md">
                    <Landmark className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-gray-800 font-bold text-xs text-center mb-2 leading-tight min-h-[32px] flex items-center justify-center">Prefeitura</h4>
                  <div className="flex items-center justify-center mt-auto">
                    <span className="px-2 py-1 bg-[#E8915B]/10 text-[#E8915B] rounded-full text-xs font-bold">2.6km</span>
                  </div>
                </motion.div>

                {/* Hospital */}
                <motion.div
                  whileHover={{ y: -4, scale: 1.03 }}
                  className="group bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#E8915B]/30 flex flex-col"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#E8915B] to-[#F0A574] rounded-xl flex items-center justify-center mb-2 mx-auto group-hover:scale-110 transition-transform shadow-md">
                    <Hospital className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-gray-800 font-bold text-xs text-center mb-2 leading-tight min-h-[32px] flex items-center justify-center">Hospital</h4>
                  <div className="flex items-center justify-center mt-auto">
                    <span className="px-2 py-1 bg-[#E8915B]/10 text-[#E8915B] rounded-full text-xs font-bold">6.6km</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Mapa - Lado Direito */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white sticky top-8">
                <iframe
                  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Av.+Luz,+698+-+Luz,+Nova+Iguaçu+-+RJ,+26256-180&zoom=15"
                  width="100%"
                  height="650"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização Oasis Residencial"
                  className="relative z-0"
                ></iframe>

                {/* Overlay com endereço */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="absolute bottom-4 left-4 right-4 bg-white rounded-2xl shadow-2xl overflow-hidden"
                >
                  <div className="p-4 flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#E8915B] to-[#F0A574] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 text-base mb-1">Oásis Residencial</h4>
                        <p className="text-gray-600 text-xs leading-relaxed">
                          Av. Ivani Vigne Babo, s/n<br />
                          Bairro da Luz, Nova Iguaçu - RJ
                        </p>
                      </div>
                    </div>
                    <motion.a
                      href="https://www.google.com/maps/dir/?api=1&destination=Av.+Luz,+698+-+Luz,+Nova+Iguaçu+-+RJ,+26256-180"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-4 py-2.5 bg-gradient-to-r from-[#E8915B] to-[#D67E4F] text-white rounded-xl font-bold text-sm shadow-lg hover:shadow-xl hover:from-[#D67E4F] hover:to-[#B86C3D] transition-all flex items-center justify-center gap-2"
                    >
                      <MapPin className="w-4 h-4" />
                      Ver Rota
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Onda de transição Localização → Nossa História */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none">
          <svg className="relative w-full h-32" viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path d="M0,40 C360,10 720,70 1080,40 C1260,25 1350,55 1440,40 L1440,120 L0,120 Z" fill="#FFEDD5" opacity="0.6" />
            <path d="M0,60 C360,30 720,90 1080,60 C1260,45 1350,75 1440,60 L1440,120 L0,120 Z" fill="#FFF1E6" opacity="0.85" />
            <path d="M0,80 C360,50 720,110 1080,80 C1260,65 1350,95 1440,80 L1440,120 L0,120 Z" fill="#FFF8F3" />
          </svg>
        </div>
      </section>

      {/* Nossa História Section */}
      <section className="py-20 bg-gradient-to-br from-[#FFF8F3] via-[#FFF1E6] to-[#FFEDD5] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Título Principal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1E3C58] mb-6">
              Confiança e Tradição
            </h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto">
              Com mais de 15 anos de história, a Gênesis Empreendimentos é sinônimo de excelência e compromisso, transformando projetos em sonhos realizados com mais de 1.500 lares entregues.
            </p>
          </motion.div>

          {/* Conteúdo Principal */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg leading-relaxed text-gray-700">
                Somos uma construtora e incorporadora com mais de 15 anos de história. Inspirados pelas soluções mais inovadoras e atuais, buscamos sempre entregar as melhores opções e facilidades para quem sonha com seu novo lar. Já ajudamos mais de 5.000 famílias a conquistarem o sonho da casa própria.
              </p>

              {/* Cards de Estatísticas */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-white backdrop-blur-sm border border-[#E8915B]/20 rounded-xl p-4 text-center shadow-lg hover:shadow-xl hover:border-[#E8915B]/40 transition-all duration-300"
                >
                  <div className="text-[#E8915B] mb-2">
                    <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                </div>
                  <div className="font-bold text-[#1E3C58]">+5000 mil famílias</div>
                  <div className="text-xs text-gray-600 mt-1">impactadas</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-white backdrop-blur-sm border border-[#E8915B]/20 rounded-xl p-4 text-center shadow-lg hover:shadow-xl hover:border-[#E8915B]/40 transition-all duration-300"
                >
                  <div className="text-[#E8915B] mb-2">
                    <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                  <div className="font-bold text-[#1E3C58]">98% de aprovação</div>
                  <div className="text-xs text-gray-600 mt-1">dos clientes</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="bg-white backdrop-blur-sm border border-[#E8915B]/20 rounded-xl p-4 text-center shadow-lg hover:shadow-xl hover:border-[#E8915B]/40 transition-all duration-300"
                >
                  <div className="text-[#E8915B] mb-2">
                    <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                </div>
                  <div className="font-bold text-[#1E3C58]">15 anos de história</div>
                  <div className="text-xs text-gray-600 mt-1">de excelência</div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div
                onClick={() => setVideoModalOpen(true)}
                className="relative bg-gradient-to-br from-white via-[#FFF5F0] to-[#FFE8D9] rounded-3xl p-8 border border-[#E8915B]/20 shadow-2xl overflow-hidden group cursor-pointer hover:shadow-[0_20px_60px_-15px_rgba(249,115,22,0.3)] transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-tl from-[#E8915B]/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="relative rounded-2xl shadow-2xl overflow-hidden">
                    <img
                      src="https://wp.oasis2.com.br/wp-content/uploads/2026/02/Design-sem-nome-scaled.png"
                      alt="Oasis Residencial - Vídeo"
                      className="rounded-2xl w-full"
                    />
                    {/* Gradiente escuro no rodapé */}
                    <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-black/70 via-black/30 to-transparent rounded-b-2xl pointer-events-none"></div>
              </div>
                  {/* Ícone de Play */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-[#E8915B] rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
          </div>
        </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Cards de Certificações */}
            <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            <div className="relative bg-white border border-[#E8915B]/20 rounded-2xl p-6 text-center hover:shadow-xl hover:border-[#E8915B]/40 transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
              <div className="relative w-20 h-20 mx-auto mb-4">
                <div className="absolute -inset-4 flex items-center justify-center opacity-40 pointer-events-none animate-spin" style={{animationDuration: '20s'}}>
                  <img
                    src="/assets/Ativo 2.svg"
                    alt=""
                    className="w-28 h-28 object-contain"
                  />
                </div>
                <img
                  src="https://wp.oasis2.com.br/wp-content/uploads/2026/02/Icone-01-nivelA-1.png"
                  alt="Nível A"
                  className="relative w-full h-full object-contain"
                />
                </div>
              <h3 className="text-[#E8915B] font-bold text-lg mb-2">NÍVEL A</h3>
              <p className="text-gray-600 text-sm">Certificação de Qualidade</p>
                </div>

            <div className="relative bg-white border border-[#E8915B]/20 rounded-2xl p-6 text-center hover:shadow-xl hover:border-[#E8915B]/40 transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
              <div className="relative w-20 h-20 mx-auto mb-4">
                <div className="absolute -inset-4 flex items-center justify-center opacity-40 pointer-events-none animate-spin" style={{animationDuration: '20s'}}>
                  <img
                    src="/assets/Ativo 2.svg"
                    alt=""
                    className="w-28 h-28 object-contain"
                  />
                </div>
                <img
                  src="https://wp.oasis2.com.br/wp-content/uploads/2026/02/Icone-01-pbqph-1.png"
                  alt="PBQP-H"
                  className="relative w-full h-full object-contain"
                />
                </div>
              <h3 className="text-[#E8915B] font-bold text-lg mb-2">PBQP-H</h3>
              <p className="text-gray-600 text-sm">Programa Brasileiro de Qualidade</p>
              </div>

            <div className="relative bg-white border border-[#E8915B]/20 rounded-2xl p-6 text-center hover:shadow-xl hover:border-[#E8915B]/40 transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
              <div className="relative w-20 h-20 mx-auto mb-4">
                <div className="absolute -inset-4 flex items-center justify-center opacity-40 pointer-events-none animate-spin" style={{animationDuration: '20s'}}>
                  <img
                    src="/assets/Ativo 2.svg"
                    alt=""
                    className="w-28 h-28 object-contain"
                  />
                </div>
                <img
                  src="https://wp.oasis2.com.br/wp-content/uploads/2026/02/Icone-01-caixa1.png"
                  alt="Caixa"
                  className="relative w-full h-full object-contain"
                />
              </div>
              <h3 className="text-[#E8915B] font-bold text-lg mb-2">CAIXA</h3>
              <p className="text-gray-600 text-sm">Parceiro Oficial</p>
            </div>

            <div className="relative bg-white border border-[#E8915B]/20 rounded-2xl p-6 text-center hover:shadow-xl hover:border-[#E8915B]/40 transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
              <div className="relative w-20 h-20 mx-auto mb-4">
                <div className="absolute -inset-4 flex items-center justify-center opacity-40 pointer-events-none animate-spin" style={{animationDuration: '20s'}}>
                  <img
                    src="/assets/Ativo 2.svg"
                    alt=""
                    className="w-28 h-28 object-contain"
                  />
                </div>
                <img
                  src="https://wp.oasis2.com.br/wp-content/uploads/2026/02/Icone-01-iso90011.png"
                  alt="ISO 9001"
                  className="relative w-full h-full object-contain"
                />
              </div>
              <h3 className="text-[#E8915B] font-bold text-lg mb-2">ISO 9001</h3>
              <p className="text-gray-600 text-sm">Qualidade Certificada</p>
            </div>
            </motion.div>
          </div>

        {/* Onda de transição Nossa História → Formulário */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none">
          <svg className="relative w-full h-24" viewBox="0 0 1440 100" preserveAspectRatio="none">
            <path d="M0,50 C360,80 720,20 1080,50 C1260,65 1350,35 1440,50 L1440,100 L0,100 Z" fill="#FAFAFA" opacity="0.5" />
            <path d="M0,60 C360,90 720,30 1080,60 C1260,75 1350,45 1440,60 L1440,100 L0,100 Z" fill="#FAFAFA" />
          </svg>
        </div>
      </section>

      {/* Formulário de Contato Section */}
      <section id="formulario" className="pt-20 pb-32 bg-gradient-to-b from-[#FAFAFA] via-[#F5F5F5] to-[#F0F0F0] relative overflow-hidden">
        {/* Ondas decorativas no topo */}
        <div className="absolute top-0 left-0 w-full h-40 overflow-hidden pointer-events-none opacity-20">
          <svg className="w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="#9CA3AF" fillOpacity="0.1" d="M0,96 C80,120 160,140 240,144 C320,148 400,136 480,128 C560,120 640,116 720,112 C800,108 880,104 960,112 C1040,120 1120,140 1200,144 C1280,148 1360,136 1400,130 L1440,124 L1440,0 L0,0 Z" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1E3C58] mb-4">
              Fale Conosco
            </h2>
            <p className="text-xl text-gray-600">
              Preencha o formulário e nossa equipe entrará em contato
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <ContactForm onSubmitSuccess={(leadId) => {
              setCurrentLeadId(leadId);
              setQuestionnaireOpen(true);
              setCurrentStep(1);
            }} />
          </div>
        </div>

        {/* Onda de transição Formulário → Footer */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none" style={{ lineHeight: 0 }}>
          <svg className="relative w-full h-32" viewBox="0 0 1440 120" preserveAspectRatio="none" style={{ display: 'block', verticalAlign: 'bottom' }}>
            <defs>
              <linearGradient id="footerGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#1F2937', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#000000', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <path d="M0,60 C360,30 720,90 1080,60 C1260,45 1350,75 1440,60 L1440,120 L0,120 Z" fill="url(#footerGradient)" opacity="0.3" />
            <path d="M0,70 C360,40 720,100 1080,70 C1260,55 1350,85 1440,70 L1440,120 L0,120 Z" fill="url(#footerGradient)" opacity="0.6" />
            <path d="M0,80 C360,50 720,110 1080,80 C1260,65 1350,95 1440,80 L1440,120 L0,120 Z" fill="url(#footerGradient)" />
          </svg>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="bg-gradient-to-b from-gray-900 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-16 mb-16">
            {/* Logo e Descrição */}
            <div className="md:col-span-1 space-y-6">
              <img
                src="https://wp.oasis2.com.br/wp-content/uploads/2026/02/SR-GN-Int-Logo-Horizontal-azulbranco.png"
                alt="Gênesis Empreendimentos"
                className="h-14 w-auto"
              />
              <p className="text-gray-300 text-sm leading-7">
                A Gênesis Empreendimentos é sinônimo de excelência na transformação de cada projeto em uma história de sucesso e nossa principal missão é realizar sonhos.
              </p>
            </div>

            {/* Contato */}
            <div className="space-y-6">
              <h3 className="font-bold text-xl mb-6 text-[#E8915B] border-b-2 border-[#E8915B] pb-2 inline-block">Contato</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 mt-0.5 flex-shrink-0 text-[#E8915B]" />
                  <span className="text-sm text-gray-300 leading-6">
                    Av. Ivani Vigne Babo, s/n<br />
                    (Antiga Av. Luz)<br />
                    Bairro da Luz, Nova Iguaçu - RJ
                  </span>
                </div>
                <a href="tel:+552126421203" className="flex items-center gap-4 text-gray-300 hover:text-[#E8915B] transition-colors group">
                  <Phone className="w-6 h-6 text-[#E8915B] group-hover:scale-110 transition-transform" />
                  <span className="text-sm">(21) 2642-1203</span>
                </a>
                <a href="mailto:comercial@genesisempreendimentos.com.br" className="flex items-center gap-4 text-gray-300 hover:text-[#E8915B] transition-colors group break-all">
                  <Mail className="w-6 h-6 flex-shrink-0 text-[#E8915B] group-hover:scale-110 transition-transform" />
                  <span className="text-sm">comercial@genesisempreendimentos.com.br</span>
                </a>
              </div>
            </div>

            {/* Navegação */}
            <div className="space-y-6">
              <h3 className="font-bold text-xl mb-6 text-[#E8915B] border-b-2 border-[#E8915B] pb-2 inline-block">Navegação</h3>
              <div className="space-y-4">
                <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="block text-gray-300 hover:text-[#E8915B] hover:translate-x-2 transition-all text-sm text-left">
                  → Home
                </button>
                <button onClick={() => scrollToSection('beneficios')} className="block text-gray-300 hover:text-[#E8915B] hover:translate-x-2 transition-all text-sm text-left">
                  → Benefícios
                </button>
                <button onClick={() => scrollToSection('plantas')} className="block text-gray-300 hover:text-[#E8915B] hover:translate-x-2 transition-all text-sm text-left">
                  → Plantas
                </button>
                <button onClick={() => scrollToSection('galeria')} className="block text-gray-300 hover:text-[#E8915B] hover:translate-x-2 transition-all text-sm text-left">
                  → Lazer
                </button>
                <button onClick={() => scrollToSection('localizacao')} className="block text-gray-300 hover:text-[#E8915B] hover:translate-x-2 transition-all text-sm text-left">
                  → Localização
                </button>
              </div>
            </div>

            {/* Redes Sociais */}
            <div className="space-y-6">
              <h3 className="font-bold text-xl mb-6 text-[#E8915B] border-b-2 border-[#E8915B] pb-2 inline-block">Redes Sociais</h3>
              <div className="flex gap-4">
                <motion.a
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  href="https://www.instagram.com/genesisempreendimentos/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#E8915B] rounded-full flex items-center justify-center hover:bg-[#D67E4F] transition-colors shadow-lg hover:shadow-[#E8915B]/50"
                >
                  <Instagram className="w-6 h-6" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.15, rotate: -5 }}
                  href="https://www.facebook.com/genesisempreendimentos/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#E8915B] rounded-full flex items-center justify-center hover:bg-[#D67E4F] transition-colors shadow-lg hover:shadow-[#E8915B]/50"
                >
                  <Facebook className="w-6 h-6" />
                </motion.a>
              </div>
            </div>
          </div>

          {/* Informações Legais */}
          <div className="border-t border-gray-800 pt-10">
            <div className="space-y-6">
              <p className="text-gray-500 text-xs leading-7 text-center max-w-5xl mx-auto">
                Todas as imagens são meramente ilustrativas. O projeto arquitetônico, as numerações das unidades, as cores, os detalhes da fachada e as ilustrações artísticas poderão sofrer alterações. A decoração, os equipamentos da varanda, a mobília e o paisagismo são meras sugestões e não fazem parte das obrigações de entrega do imóvel. As unidades entregues e suas características, bem como o padrão de acabamento, estão discriminados no memorial descritivo arquivado no memorial de incorporação devidamente registrado no R-4 da matrícula 56515 no 2° Ofício de Registro de Imóveis de Nova Iguaçu. 1ª Circunscrição.
              </p>
              
              <div className="space-y-3">
                <p className="text-gray-500 text-xs text-center">
                  Autor do projeto: Claudius Arbes - CAU: A180818-5
                </p>
                <p className="text-gray-500 text-xs text-center">
                  Responsável Técnico: Rodrigo Fonseca da Costa - CREA/RJ: 2001109575
                </p>
              </div>

              <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-xs pt-6">
                <a href="#" className="text-gray-400 hover:text-[#E8915B] transition-colors">
                  Política de Privacidade
                </a>
                <span className="hidden md:inline text-gray-700">|</span>
                <span className="text-gray-400">
                  © 2026 desenvolvido por <a href="https://genesisempreendimentos.com" target="_blank" rel="noopener noreferrer" className="text-[#E8915B] hover:text-[#D67E4F] transition-colors font-semibold">Gênesis Empreendimentos</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>

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