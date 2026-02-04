import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/app/components/Button';

interface HeaderSectionProps {
  scrolled: boolean;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  scrollToSection: (id: string) => void;
}

export default function HeaderSection({ scrolled, mobileMenuOpen, setMobileMenuOpen, scrollToSection }: HeaderSectionProps) {
  return (
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
  );
}
