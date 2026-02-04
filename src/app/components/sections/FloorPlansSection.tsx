import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/app/components/Button';
import { fadeInDown, cardReveal } from './animationVariants';

interface FloorPlansSectionProps {
  plantas2Quartos: string[];
  plantas3Quartos: string[];
  plantasCobertura: string[];
  openPlantGallery: (images: string[]) => void;
}

export default function FloorPlansSection({ plantas2Quartos, plantas3Quartos, plantasCobertura, openPlantGallery }: FloorPlansSectionProps) {
  return (
    <section id="plantas" className="relative py-20 overflow-hidden bg-gradient-to-b from-white via-[#FFF5F0] to-[#FFEDD5]">
      {/* Ondas decorativas no topo */}
      <div className="absolute top-0 left-0 w-full h-40 overflow-hidden pointer-events-none opacity-25">
        <svg className="w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#F0A574" fillOpacity="0.12" d="M0,96 C80,120 160,140 240,144 C320,148 400,136 480,128 C560,120 640,116 720,112 C800,108 880,104 960,112 C1040,120 1120,140 1200,144 C1280,148 1360,136 1400,130 L1440,124 L1440,0 L0,0 Z" />
        </svg>
      </div>

      {/* Background com gradiente laranja suave */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#FFF5F0] to-[#FFEDD5]" />

      {/* SVGs Vazados */}
      <motion.div
        animate={{ rotate: [0, 360], scale: [1, 1.1, 1], x: [0, -20, 0], y: [0, -10, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="absolute -top-20 -left-20 w-96 h-96 opacity-5 pointer-events-none"
      >
        <img src="/assets/Ativo 2.svg" alt="" className="w-full h-full" />
      </motion.div>

      <motion.div
        animate={{ rotate: [360, 0], scale: [1, 1.12, 1], x: [0, 15, 0], y: [0, 20, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-20 -right-20 w-96 h-96 opacity-5 pointer-events-none"
      >
        <img src="/assets/Ativo 2.svg" alt="" className="w-full h-full" />
      </motion.div>

      <motion.div
        animate={{ rotate: [0, -360], scale: [1, 1.08, 1], x: [0, 10, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/3 right-1/4 w-64 h-64 opacity-5 pointer-events-none"
      >
        <img src="/assets/Ativo 2.svg" alt="" className="w-full h-full" />
      </motion.div>

      <motion.div
        animate={{ rotate: [0, 360], scale: [1, 1.1, 1], x: [0, 20, 0], y: [0, -20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-10 right-10 w-80 h-80 opacity-5 pointer-events-none"
      >
        <img src="/assets/Ativo 2.svg" alt="" className="w-full h-full" />
      </motion.div>

      <motion.div
        animate={{ rotate: [360, 0], scale: [1, 1.15, 1], x: [0, -15, 0], y: [0, 15, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 left-20 w-72 h-72 opacity-5 pointer-events-none"
      >
        <img src="/assets/Ativo 2.svg" alt="" className="w-full h-full" />
      </motion.div>

      <motion.div
        animate={{ rotate: [0, -360], scale: [1, 1.08, 1], y: [0, -25, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
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
              <Button variant="secondary" className="w-full" onClick={() => openPlantGallery(plantas2Quartos)}>
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
              <Button variant="secondary" className="w-full" onClick={() => openPlantGallery(plantas3Quartos)}>
                Ver Plantas
              </Button>
            </div>
          </motion.div>

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
              <Button variant="secondary" className="w-full" onClick={() => openPlantGallery(plantasCobertura)}>
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
  );
}
