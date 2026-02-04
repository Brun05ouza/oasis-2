import { motion } from 'motion/react';
import { Eye } from 'lucide-react';
import { Button } from '@/app/components/Button';
import { BoxGlass } from '@/app/components/BoxGlass';

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
  setPreviewModalOpen: (open: boolean) => void;
}

export default function HeroSection({ scrollToSection, setPreviewModalOpen }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://wp.oasis2.com.br/wp-content/uploads/2026/02/hero.jpg"
          alt="Oasis Residencial - Fachada"
          className="w-full h-full object-cover object-center scale-105"
          style={{ objectPosition: 'center 40%' }}
        />
        {/* Overlay gradient para melhorar contraste */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/40 to-black/60" />
        {/* Gradient de transição no rodapé */}
        <div className="absolute bottom-0 left-0 w-full h-32 md:h-40 bg-gradient-to-t from-[#FFF1E6] to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 w-full min-h-screen grid grid-cols-1 md:grid-cols-[1fr_1.3fr] lg:grid-cols-[1fr_1.5fr] gap-0 items-center">
        <div className="hidden md:block" aria-hidden="true" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white z-10 text-left w-full max-w-4xl lg:max-w-5xl flex justify-end"
        >
          <BoxGlass className="w-full flex flex-col items-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-5 md:mb-8 leading-[1.1] px-2 text-center w-full max-w-2xl"
            >
              <span className="text-white font-semibold">O Desfrutar de </span>
              <span className="bg-gradient-to-r from-[#E8915B] to-[#F0A574] bg-clip-text text-transparent font-bold">Novos Começos</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mb-6 md:mb-8 px-2 text-center w-full max-w-2xl"
            >
              <p className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-thin text-white leading-relaxed">
                Viva a experiência de novos começos
              </p>
              <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-[#E8915B] to-transparent my-4 md:my-6 mx-auto" />
              <p className="text-sm xs:text-base sm:text-lg lg:text-xl text-white font-thin leading-relaxed">
                Um conceito inovador de bem-estar, onde conforto, segurança e lazer se unem em perfeita harmonia para você e sua família
              </p>
            </motion.div>
            <div className="flex flex-row flex-nowrap gap-2 sm:gap-3 md:gap-4 justify-center items-stretch px-2 w-full overflow-x-auto sm:overflow-visible pb-1">
              <Button variant="primary" size="lg" onClick={() => scrollToSection('formulario')} className="min-w-[180px] sm:min-w-[240px] w-[180px] sm:w-[240px] h-12 md:h-14 flex items-center justify-center text-sm md:text-base whitespace-nowrap shadow-[0_4px_12px_rgba(0,0,0,0.4)]">
                Entrar em contato
              </Button>
              <motion.button
                onClick={() => setPreviewModalOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 md:w-14 md:h-14 min-w-[48px] md:min-w-[56px] flex-shrink-0 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/40 transition-colors border-2 border-white/60 shadow-[0_4px_12px_rgba(0,0,0,0.4)]"
                aria-label="Visualizar projeto"
              >
                <Eye className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </motion.button>
              <Button variant="outline" size="lg" className="min-w-[180px] sm:min-w-[240px] w-[180px] sm:w-[240px] h-12 md:h-14 flex items-center justify-center bg-white/20 border-white text-white hover:bg-white hover:text-[#1E3C58] backdrop-blur-sm text-sm md:text-base whitespace-nowrap shadow-[0_4px_12px_rgba(0,0,0,0.4)]" onClick={() => scrollToSection('plantas')}>
                Ver Tipologias
              </Button>
            </div>
          </BoxGlass>
        </motion.div>
      </div>
    </section>
  );
}
