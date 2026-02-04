import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

interface FooterSectionProps {
  scrollToSection: (id: string) => void;
}

export default function FooterSection({ scrollToSection }: FooterSectionProps) {
  return (
    <footer id="contato" className="bg-gradient-to-b from-gray-900 to-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-16 mb-16">
          <div className="md:col-span-1 space-y-6">
            <img
              src="https://wp.oasis2.com.br/wp-content/uploads/2026/02/SR-GN-Int-Logo-Horizontal-azulbranco.png"
              alt="Gênesis Empreendimentos"
              className="h-14 w-auto"
            />
            <p className="text-gray-300 text-sm leading-5">
              A Gênesis Empreendimentos é sinônimo de excelência na transformação de cada projeto em uma história de sucesso e nossa principal missão é realizar sonhos.
            </p>
          </div>

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

          <div className="space-y-6">
            <h3 className="font-bold text-xl mb-6 text-[#E8915B] border-b-2 border-[#E8915B] pb-2 inline-block">Navegação</h3>
            <div className="space-y-4">
              <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="block text-gray-300 hover:text-[#E8915B] hover:translate-x-2 transition-all text-sm text-left">
                → Home
              </button>
              <button onClick={() => scrollToSection('imoveis')} className="block text-gray-300 hover:text-[#E8915B] hover:translate-x-2 transition-all text-sm text-left">
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

        <div className="border-t border-gray-800 pt-6">
          <div className="space-y-4">
            <p className="text-gray-500 text-[10px] leading-4 text-center max-w-5xl mx-auto">
              Todas as imagens são meramente ilustrativas. O projeto arquitetônico, as numerações das unidades, as cores, os detalhes da fachada e as ilustrações artísticas poderão sofrer alterações. A decoração, os equipamentos da varanda, a mobília e o paisagismo são meras sugestões e não fazem parte das obrigações de entrega do imóvel. As unidades entregues e suas características, bem como o padrão de acabamento, estão discriminados no memorial descritivo arquivado no memorial de incorporação devidamente registrado no R-4 da matrícula 56515 no 2° Ofício de Registro de Imóveis de Nova Iguaçu. 1ª Circunscrição.
            </p>
            
            <div className="space-y-1.5">
              <p className="text-gray-500 text-[10px] leading-4 text-center">
                Autora do projeto: Lalesca V. Rodrigues de Siqueira Guerreiro - CAU/RJ: 301474-6
              </p>
              <p className="text-gray-500 text-[10px] leading-4 text-center">
                Responsável Técnico: Rodrigo Fonseca da Costa - CREA/RJ: 2001109575
              </p>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center gap-3 text-[10px] leading-4 pt-4">
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
  );
}
