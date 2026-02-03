import React, { useEffect } from 'react';
import { motion } from 'motion/react';

export default function Obrigado() {
  useEffect(() => {
    // Scroll to top quando a página carrega
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - mesma do hero */}
      <div className="absolute inset-0">
        <img
          src="https://wp.oasis2.com.br/wp-content/uploads/2026/02/FACHADA-HERO-1-1.jpg"
          alt="Oasis Residencial"
          className="w-full h-full object-cover object-center"
        />
        {/* Overlay escuro */}
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 py-20 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Logo/Ícone de Sucesso */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="flex justify-center"
          >
            <div className="w-32 h-32 bg-gradient-to-br from-[#10B981] to-[#059669] rounded-full flex items-center justify-center shadow-2xl">
              <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </motion.div>

          {/* Mensagem Principal */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="space-y-6"
          >
            <h1 className="text-5xl sm:text-6xl font-bold text-white">
              PARABÉNS! 🎉
            </h1>
            <p className="text-2xl sm:text-3xl text-[#E8915B] font-bold">
              Sua inscrição na lista de interessados está confirmada!
            </p>
            <div className="max-w-2xl mx-auto space-y-4">
              <p className="text-xl text-white/90 leading-relaxed">
                Obrigado por seu interesse no <span className="text-[#E8915B] font-bold">Oasis Residencial</span>.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                Nossa equipe entrará em contato em breve para apresentar as melhores opções e condições especiais para você realizar o sonho do seu novo lar.
              </p>
            </div>
          </motion.div>

          {/* Informações Adicionais */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl p-8 max-w-xl mx-auto"
          >
            <h3 className="text-xl font-bold text-white mb-4">O que acontece agora?</h3>
            <div className="space-y-3 text-left">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#E8915B] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">1</span>
                </div>
                <p className="text-white/90">Nossa equipe analisará seu perfil e preferências</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#E8915B] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">2</span>
                </div>
                <p className="text-white/90">Entraremos em contato via WhatsApp ou telefone</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#E8915B] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">3</span>
                </div>
                <p className="text-white/90">Apresentaremos as melhores condições e opções de plantas</p>
              </div>
            </div>
          </motion.div>

          {/* Botão de Voltar */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <a
              href="/"
              className="inline-block bg-[#E8915B] hover:bg-[#D67E4F] text-white font-bold py-4 px-8 rounded-xl transition-colors shadow-lg hover:shadow-xl"
            >
              Voltar para o site
            </a>
          </motion.div>

          {/* Animação decorativa */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex justify-center gap-2 pt-6"
          >
            {[...Array(7)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ y: 0 }}
                animate={{ y: [-10, 0, -10] }}
                transition={{ 
                  delay: 1.2 + i * 0.1, 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-2 h-2 bg-[#E8915B] rounded-full"
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
