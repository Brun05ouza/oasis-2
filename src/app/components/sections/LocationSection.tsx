import { motion } from 'motion/react';
import { MapPin, ShoppingBag, Fuel, GraduationCap, Dumbbell, Pill, Bus, Train, Landmark, Hospital } from 'lucide-react';
import { fadeInUp, fadeInDown } from './animationVariants';

export default function LocationSection() {
  return (
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
              <motion.div whileHover={{ y: -4, scale: 1.03 }} className="group bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#E8915B]/30 flex flex-col">
                <div className="w-12 h-12 bg-gradient-to-br from-[#E8915B] to-[#F0A574] rounded-xl flex items-center justify-center mb-2 mx-auto group-hover:scale-110 transition-transform shadow-md">
                  <ShoppingBag className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-gray-800 font-bold text-xs text-center mb-2 leading-tight min-h-[32px] flex items-center justify-center">Shopping N. Iguaçu</h4>
                <div className="flex items-center justify-center mt-auto">
                  <span className="px-2 py-1 bg-[#E8915B]/10 text-[#E8915B] rounded-full text-xs font-bold">300m</span>
                </div>
              </motion.div>

              <motion.div whileHover={{ y: -4, scale: 1.03 }} className="group bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#E8915B]/30 flex flex-col">
                <div className="w-12 h-12 bg-gradient-to-br from-[#E8915B] to-[#F0A574] rounded-xl flex items-center justify-center mb-2 mx-auto group-hover:scale-110 transition-transform shadow-md">
                  <Fuel className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-gray-800 font-bold text-xs text-center mb-2 leading-tight min-h-[32px] flex items-center justify-center">Posto de Gasolina</h4>
                <div className="flex items-center justify-center mt-auto">
                  <span className="px-2 py-1 bg-[#E8915B]/10 text-[#E8915B] rounded-full text-xs font-bold">400m</span>
                </div>
              </motion.div>

              <motion.div whileHover={{ y: -4, scale: 1.03 }} className="group bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#E8915B]/30 flex flex-col">
                <div className="w-12 h-12 bg-gradient-to-br from-[#E8915B] to-[#F0A574] rounded-xl flex items-center justify-center mb-2 mx-auto group-hover:scale-110 transition-transform shadow-md">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-gray-800 font-bold text-xs text-center mb-2 leading-tight min-h-[32px] flex items-center justify-center">Escola Maple Bear</h4>
                <div className="flex items-center justify-center mt-auto">
                  <span className="px-2 py-1 bg-[#E8915B]/10 text-[#E8915B] rounded-full text-xs font-bold">600m</span>
                </div>
              </motion.div>

              <motion.div whileHover={{ y: -4, scale: 1.03 }} className="group bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#E8915B]/30 flex flex-col">
                <div className="w-12 h-12 bg-gradient-to-br from-[#E8915B] to-[#F0A574] rounded-xl flex items-center justify-center mb-2 mx-auto group-hover:scale-110 transition-transform shadow-md">
                  <Dumbbell className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-gray-800 font-bold text-xs text-center mb-2 leading-tight min-h-[32px] flex items-center justify-center">Academia</h4>
                <div className="flex items-center justify-center mt-auto">
                  <span className="px-2 py-1 bg-[#E8915B]/10 text-[#E8915B] rounded-full text-xs font-bold">750m</span>
                </div>
              </motion.div>

              <motion.div whileHover={{ y: -4, scale: 1.03 }} className="group bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#E8915B]/30 flex flex-col">
                <div className="w-12 h-12 bg-gradient-to-br from-[#E8915B] to-[#F0A574] rounded-xl flex items-center justify-center mb-2 mx-auto group-hover:scale-110 transition-transform shadow-md">
                  <Pill className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-gray-800 font-bold text-xs text-center mb-2 leading-tight min-h-[32px] flex items-center justify-center">Farmácia</h4>
                <div className="flex items-center justify-center mt-auto">
                  <span className="px-2 py-1 bg-[#E8915B]/10 text-[#E8915B] rounded-full text-xs font-bold">800m</span>
                </div>
              </motion.div>

              <motion.div whileHover={{ y: -4, scale: 1.03 }} className="group bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#E8915B]/30 flex flex-col">
                <div className="w-12 h-12 bg-gradient-to-br from-[#E8915B] to-[#F0A574] rounded-xl flex items-center justify-center mb-2 mx-auto group-hover:scale-110 transition-transform shadow-md">
                  <Bus className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-gray-800 font-bold text-xs text-center mb-2 leading-tight min-h-[32px] flex items-center justify-center">Rodoviária</h4>
                <div className="flex items-center justify-center mt-auto">
                  <span className="px-2 py-1 bg-[#E8915B]/10 text-[#E8915B] rounded-full text-xs font-bold">1km</span>
                </div>
              </motion.div>

              <motion.div whileHover={{ y: -4, scale: 1.03 }} className="group bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#E8915B]/30 flex flex-col">
                <div className="w-12 h-12 bg-gradient-to-br from-[#E8915B] to-[#F0A574] rounded-xl flex items-center justify-center mb-2 mx-auto group-hover:scale-110 transition-transform shadow-md">
                  <Train className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-gray-800 font-bold text-xs text-center mb-2 leading-tight min-h-[32px] flex items-center justify-center">Estação de Trem</h4>
                <div className="flex items-center justify-center mt-auto">
                  <span className="px-2 py-1 bg-[#E8915B]/10 text-[#E8915B] rounded-full text-xs font-bold">1.8km</span>
                </div>
              </motion.div>

              <motion.div whileHover={{ y: -4, scale: 1.03 }} className="group bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#E8915B]/30 flex flex-col">
                <div className="w-12 h-12 bg-gradient-to-br from-[#E8915B] to-[#F0A574] rounded-xl flex items-center justify-center mb-2 mx-auto group-hover:scale-110 transition-transform shadow-md">
                  <Landmark className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-gray-800 font-bold text-xs text-center mb-2 leading-tight min-h-[32px] flex items-center justify-center">Prefeitura</h4>
                <div className="flex items-center justify-center mt-auto">
                  <span className="px-2 py-1 bg-[#E8915B]/10 text-[#E8915B] rounded-full text-xs font-bold">2.6km</span>
                </div>
              </motion.div>

              <motion.div whileHover={{ y: -4, scale: 1.03 }} className="group bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#E8915B]/30 flex flex-col">
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
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white sticky top-8 mb-4">
              <iframe
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Av.+Luz,+698+-+Luz,+Nova+Iguaçu+-+RJ,+26256-180&zoom=15"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Oasis Residencial"
                className="relative z-0"
              />
            </div>
            
            {/* Card de Endereço */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
              <div className="p-3 md:p-4 flex items-center gap-2 md:gap-3">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#E8915B] to-[#F0A574] rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm md:text-base font-bold text-[#1E3C58] mb-0.5">Oásis Residencial</h3>
                  <p className="text-gray-600 text-xs leading-tight">
                    Av. Ivani Vigne Babo, s/n<br />
                    Bairro da Luz, Nova Iguaçu - RJ
                  </p>
                </div>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Av.+Luz,+698+-+Luz,+Nova+Iguaçu+-+RJ,+26256-180"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 bg-gradient-to-r from-[#E8915B] to-[#D67E4F] text-white rounded-lg font-bold text-xs md:text-sm shadow-md hover:shadow-lg hover:from-[#D67E4F] hover:to-[#B86C3D] transition-all whitespace-nowrap flex items-center gap-1.5"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  Ver Rota
                </a>
              </div>
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
  );
}
