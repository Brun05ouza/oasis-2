import { motion } from 'motion/react';

interface AboutSectionProps {
  setVideoModalOpen: (open: boolean) => void;
}

export default function AboutSection({ setVideoModalOpen }: AboutSectionProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-[#FFF8F3] via-[#FFF1E6] to-[#FFEDD5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <div className="absolute inset-0 bg-gradient-to-tl from-[#E8915B]/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="relative rounded-2xl shadow-2xl overflow-hidden">
                  <img
                    src="https://wp.oasis2.com.br/wp-content/uploads/2026/02/Design-sem-nome-scaled.png"
                    alt="Oasis Residencial - Vídeo"
                    className="rounded-2xl w-full"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-black/70 via-black/30 to-transparent rounded-b-2xl pointer-events-none" />
                </div>
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="relative bg-white border border-[#E8915B]/20 rounded-2xl p-6 text-center hover:shadow-xl hover:border-[#E8915B]/40 transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
            <div className="relative w-20 h-20 mx-auto mb-4">
              <div className="absolute -inset-4 flex items-center justify-center opacity-40 pointer-events-none animate-spin" style={{ animationDuration: '20s' }}>
                <img src="/assets/Ativo 2.svg" alt="" className="w-28 h-28 object-contain" />
              </div>
              <img src="https://wp.oasis2.com.br/wp-content/uploads/2026/02/Design-sem-nome-5-1.png" alt="Nível A" className="relative w-full h-full object-contain" />
            </div>
            <h3 className="text-[#E8915B] font-bold text-lg mb-2">NÍVEL A</h3>
            <p className="text-gray-600 text-sm">Certificação de Qualidade</p>
          </div>

          <div className="relative bg-white border border-[#E8915B]/20 rounded-2xl p-6 text-center hover:shadow-xl hover:border-[#E8915B]/40 transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
            <div className="relative w-20 h-20 mx-auto mb-4">
              <div className="absolute -inset-4 flex items-center justify-center opacity-40 pointer-events-none animate-spin" style={{ animationDuration: '20s' }}>
                <img src="/assets/Ativo 2.svg" alt="" className="w-28 h-28 object-contain" />
              </div>
              <img src="https://wp.oasis2.com.br/wp-content/uploads/2026/02/PBQP-sem-fundo.png" alt="PBQP-H" className="relative w-full h-full object-contain" />
            </div>
            <h3 className="text-[#E8915B] font-bold text-lg mb-2">PBQP-H</h3>
            <p className="text-gray-600 text-sm">Programa Brasileiro de Qualidade</p>
          </div>

          <div className="relative bg-white border border-[#E8915B]/20 rounded-2xl p-6 text-center hover:shadow-xl hover:border-[#E8915B]/40 transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
            <div className="relative w-20 h-20 mx-auto mb-4">
              <div className="absolute -inset-4 flex items-center justify-center opacity-40 pointer-events-none animate-spin" style={{ animationDuration: '20s' }}>
                <img src="/assets/Ativo 2.svg" alt="" className="w-28 h-28 object-contain" />
              </div>
              <img src="https://wp.oasis2.com.br/wp-content/uploads/2026/02/caixa-sem-fundo.png" alt="Caixa" className="relative w-full h-full object-contain" />
            </div>
            <h3 className="text-[#E8915B] font-bold text-lg mb-2">CAIXA</h3>
            <p className="text-gray-600 text-sm">Parceiro Oficial</p>
          </div>

          <div className="relative bg-white border border-[#E8915B]/20 rounded-2xl p-6 text-center hover:shadow-xl hover:border-[#E8915B]/40 transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
            <div className="relative w-20 h-20 mx-auto mb-4">
              <div className="absolute -inset-4 flex items-center justify-center opacity-40 pointer-events-none animate-spin" style={{ animationDuration: '20s' }}>
                <img src="/assets/Ativo 2.svg" alt="" className="w-28 h-28 object-contain" />
              </div>
              <img src="https://wp.oasis2.com.br/wp-content/uploads/2026/02/ISO-sem-fundo.png" alt="ISO 9001" className="relative w-full h-full object-contain" />
            </div>
            <h3 className="text-[#E8915B] font-bold text-lg mb-2">ISO 9001</h3>
            <p className="text-gray-600 text-sm">Qualidade Certificada</p>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none">
        <svg className="relative w-full h-24" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path d="M0,50 C360,80 720,20 1080,50 C1260,65 1350,35 1440,50 L1440,100 L0,100 Z" fill="#FAFAFA" opacity="0.5" />
          <path d="M0,60 C360,90 720,30 1080,60 C1260,75 1350,45 1440,60 L1440,100 L0,100 Z" fill="#FAFAFA" />
        </svg>
      </div>
    </section>
  );
}
