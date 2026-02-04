import { motion } from 'motion/react';
import { Shield, DollarSign, Home } from 'lucide-react';
import { fadeInUp, fadeInDown, scaleIn, staggerContainer } from './animationVariants';

export default function BenefitsSection() {
  return (
    <section id="imoveis" className="relative pt-20 md:pt-32 pb-32 md:pb-48 bg-gradient-to-b from-[#FFF1E6] via-[#FFF5EE] to-[#FFE8D9] overflow-hidden">
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
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none z-0">
        <svg className="relative w-full h-24" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path d="M0,50 C360,80 720,20 1080,50 C1260,65 1350,35 1440,50 L1440,100 L0,100 Z" fill="#FFF5F0" opacity="0.5" />
          <path d="M0,60 C360,90 720,30 1080,60 C1260,75 1350,45 1440,60 L1440,100 L0,100 Z" fill="#FFF5F0" />
        </svg>
      </div>
    </section>
  );
}
