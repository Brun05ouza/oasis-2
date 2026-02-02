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
  Users
} from 'lucide-react';
import { Button } from '@/app/components/Button';
import { FeatureCard } from '@/app/components/FeatureCard';
import { TestimonialCard } from '@/app/components/TestimonialCard';
import { CertificationBadge } from '@/app/components/CertificationBadge';
import { ContactForm } from '@/app/components/ContactForm';

export default function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const galleryImages = [
    {
      url: 'https://images.unsplash.com/photo-1758448511320-05d7d28f4298?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnQlMjBmbG9vciUyMHBsYW58ZW58MXx8fHwxNzY5OTUyMDE4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Planta do apartamento'
    },
    {
      url: 'https://images.unsplash.com/photo-1729707690998-1d4c5d755c0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwb29sJTIwcmVzb3J0fGVufDF8fHx8MTc3MDA1NzQwNHww&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Piscina'
    },
    {
      url: 'https://images.unsplash.com/photo-1761971975769-97e598bf526b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBneW0lMjBmaXRuZXNzJTIwY2VudGVyfGVufDF8fHx8MTc3MDAzODY5Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Academia'
    },
    {
      url: 'https://images.unsplash.com/photo-1654506012740-09321c969dc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGFydG1lbnQlMjBpbnRlcmlvciUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzcwMDE3MzE2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Living'
    },
    {
      url: 'https://images.unsplash.com/photo-1768118421324-8bae7959ad23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGJ1aWxkaW5nJTIwYmFsY29ueXxlbnwxfHx8fDE3NzAwNTc0MDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Varanda'
    },
    {
      url: 'https://images.unsplash.com/photo-1763218161026-dd8bcfa832de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZXNpZGVudGlhbCUyMGJ1aWxkaW5nJTIwYXBhcnRtZW50fGVufDF8fHx8MTc3MDA1NzQwM3ww&ixlib=rb-4.1.0&q=80&w=1080',
      alt: 'Fachada'
    }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-[#4CAF50] to-[#A5D6A7] rounded-lg flex items-center justify-center">
                <Home className="w-7 h-7 text-white" />
              </div>
              <span className="text-2xl font-bold text-[#4CAF50]">Oasis Residencial</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('sobre')} className="text-gray-700 hover:text-[#4CAF50] transition-colors">
                Sobre
              </button>
              <button onClick={() => scrollToSection('galeria')} className="text-gray-700 hover:text-[#4CAF50] transition-colors">
                Galeria
              </button>
              <button onClick={() => scrollToSection('depoimentos')} className="text-gray-700 hover:text-[#4CAF50] transition-colors">
                Depoimentos
              </button>
              <button onClick={() => scrollToSection('contato')} className="text-gray-700 hover:text-[#4CAF50] transition-colors">
                Contato
              </button>
              <Button variant="primary" size="sm">
                Agende Visita
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 py-4 space-y-3">
              <button onClick={() => scrollToSection('sobre')} className="block w-full text-left py-2 text-gray-700">
                Sobre
              </button>
              <button onClick={() => scrollToSection('galeria')} className="block w-full text-left py-2 text-gray-700">
                Galeria
              </button>
              <button onClick={() => scrollToSection('depoimentos')} className="block w-full text-left py-2 text-gray-700">
                Depoimentos
              </button>
              <button onClick={() => scrollToSection('contato')} className="block w-full text-left py-2 text-gray-700">
                Contato
              </button>
              <Button variant="primary" size="sm" className="w-full">
                Agende Visita
              </Button>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#4CAF50] via-[#2E7D32] to-[#1565C0]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white z-10"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Oasis Residencial:<br />
              Seu Oásis Acessível
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-white/90">
              Conforto premium com parcelas que cabem no bolso
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="lg">
                <Calendar className="w-5 h-5 mr-2" />
                Agende Visita
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-[#4CAF50]">
                Saiba Mais
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1763218161026-dd8bcfa832de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZXNpZGVudGlhbCUyMGJ1aWxkaW5nJTIwYXBhcnRtZW50fGVufDF8fHx8MTc3MDA1NzQwM3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Oasis Residencial"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
              Por que escolher o Oasis?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Viva em Teresópolis com todo o conforto e segurança que você merece
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Home}
              title="Apartamentos Amplos"
              description="Plantas inteligentes de 2 e 3 quartos com até 85m², perfeitas para sua família crescer."
              delay={0}
            />
            <FeatureCard
              icon={Waves}
              title="Lazer Completo"
              description="Piscina adulto e infantil, churrasqueira, salão de festas, playground e muito mais."
              delay={0.1}
            />
            <FeatureCard
              icon={Shield}
              title="Segurança 24h"
              description="Portaria 24 horas, câmeras de segurança e controle de acesso para sua tranquilidade."
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* Galeria Section */}
      <section id="galeria" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
              Conheça Nossos Espaços
            </h2>
            <p className="text-xl text-gray-600">
              Explore cada detalhe do seu futuro lar
            </p>
          </motion.div>

          <div className="relative">
            {/* Main Gallery Display */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {galleryImages.slice(0, 6).map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer"
                  onClick={() => setCurrentImageIndex(index)}
                >
                  <img 
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white font-medium">{image.alt}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Gallery Navigation Dots */}
            <div className="flex justify-center gap-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentImageIndex === index 
                      ? 'bg-[#4CAF50] w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certificações Section */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
              Certificações e Garantias
            </h2>
            <p className="text-xl text-gray-600">
              Qualidade garantida em cada detalhe
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-12 lg:gap-20">
            <CertificationBadge
              icon={Award}
              label="Qualidade"
              tooltip="Certificado ISO de qualidade"
              delay={0}
            />
            <CertificationBadge
              icon={Building2}
              label="Caixa"
              tooltip="Financiamento aprovado pela Caixa"
              delay={0.1}
            />
            <CertificationBadge
              icon={CheckCircle2}
              label="Garantia"
              tooltip="5 anos de garantia estrutural"
              delay={0.2}
            />
            <CertificationBadge
              icon={Leaf}
              label="Sustentável"
              tooltip="Construção sustentável certificada"
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Vantagens Exclusivas Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
              Vantagens Exclusivas
            </h2>
            <p className="text-xl text-gray-600">
              Diferenciais que fazem toda a diferença no seu dia a dia
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-[#FF5722] to-[#F4511E] rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <DollarSign className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Entrada Facilitada</h3>
              <p className="text-gray-600 text-sm">Condições especiais de pagamento com entrada reduzida</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-[#4CAF50] to-[#A5D6A7] rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Pronto para Morar</h3>
              <p className="text-gray-600 text-sm">Unidades prontas para você entrar e começar a viver</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-[#4CAF50] to-[#A5D6A7] rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Valorização</h3>
              <p className="text-gray-600 text-sm">Região em constante crescimento e valorização</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-[#FF5722] to-[#F4511E] rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Atendimento VIP</h3>
              <p className="text-gray-600 text-sm">Equipe dedicada do início ao fim da sua jornada</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Opções de Apartamentos Section */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
              Opções de Apartamentos
            </h2>
            <p className="text-xl text-gray-600">
              Encontre a planta perfeita para seu estilo de vida
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
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
                    <CheckCircle2 className="w-5 h-5 text-[#4CAF50]" />
                    <span>65m² privativos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#4CAF50]" />
                    <span>2 dormitórios com armários</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#4CAF50]" />
                    <span>Sacada com churrasqueira</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#4CAF50]" />
                    <span>1 vaga de garagem</span>
                  </li>
                </ul>
                <Button variant="secondary" className="w-full">
                  Ver Detalhes
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
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
                    <CheckCircle2 className="w-5 h-5 text-[#4CAF50]" />
                    <span>85m² privativos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#4CAF50]" />
                    <span>3 dormitórios sendo 1 suíte</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#4CAF50]" />
                    <span>Varanda gourmet ampla</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#4CAF50]" />
                    <span>2 vagas de garagem</span>
                  </li>
                </ul>
                <Button variant="secondary" className="w-full">
                  Ver Detalhes
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ambientes Refinados Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
              Ambientes Refinados
            </h2>
            <p className="text-xl text-gray-600">
              Design sofisticado em cada ambiente
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1654506012740-09321c969dc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGFydG1lbnQlMjBpbnRlcmlvciUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzcwMDE3MzE2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Interior sofisticado"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#4CAF50] rounded-lg flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Acabamento Premium</h3>
                  <p className="text-gray-600">Porcelanato, bancadas em granito e louças de primeira linha em todos os ambientes.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#4CAF50] rounded-lg flex items-center justify-center">
                    <Sofa className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Espaços Inteligentes</h3>
                  <p className="text-gray-600">Plantas otimizadas para aproveitar cada metro quadrado com funcionalidade.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#4CAF50] rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Iluminação Natural</h3>
                  <p className="text-gray-600">Amplas janelas garantem luz natural abundante e ventilação perfeita.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Espaços de Convivência Section */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
              Espaços de Convivência
            </h2>
            <p className="text-xl text-gray-600">
              Áreas de lazer completas para toda a família
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
              className="relative rounded-2xl overflow-hidden group h-80"
            >
              <img
                src="https://images.unsplash.com/photo-1729707690998-1d4c5d755c0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwb29sJTIwcmVzb3J0fGVufDF8fHx8MTc3MDA1NzQwNHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Piscina"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div>
                  <Trees className="w-8 h-8 text-white mb-2" />
                  <h3 className="text-white text-xl font-semibold">Piscina Adulto e Infantil</h3>
                  <p className="text-white/80 text-sm mt-1">Deck com espreguiçadeiras</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative rounded-2xl overflow-hidden group h-80"
            >
              <img
                src="https://images.unsplash.com/photo-1761971975769-97e598bf526b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBneW0lMjBmaXRuZXNzJTIwY2VudGVyfGVufDF8fHx8MTc3MDAzODY5Nnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Academia"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div>
                  <Target className="w-8 h-8 text-white mb-2" />
                  <h3 className="text-white text-xl font-semibold">Academia Completa</h3>
                  <p className="text-white/80 text-sm mt-1">Equipamentos modernos</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden group h-80"
            >
              <img
                src="https://images.unsplash.com/photo-1768118421324-8bae7959ad23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGJ1aWxkaW5nJTIwYmFsY29ueXxlbnwxfHx8fDE3NzAwNTc0MDV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Espaço Gourmet"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div>
                  <Waves className="w-8 h-8 text-white mb-2" />
                  <h3 className="text-white text-xl font-semibold">Salão de Festas</h3>
                  <p className="text-white/80 text-sm mt-1">Com churrasqueira e cozinha</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Localização Privilegiada Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
              Localização Privilegiada
            </h2>
            <p className="text-xl text-gray-600">
              No coração de Teresópolis, perto de tudo que você precisa
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-start gap-4 bg-[#F5F5F5] p-4 rounded-xl">
                <MapPin className="w-6 h-6 text-[#4CAF50] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Shopping e Comércio</h4>
                  <p className="text-gray-600 text-sm">A 5 minutos do centro comercial com supermercados, farmácias e lojas</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-[#F5F5F5] p-4 rounded-xl">
                <MapPin className="w-6 h-6 text-[#4CAF50] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Educação</h4>
                  <p className="text-gray-600 text-sm">Escolas e universidades de excelência nas proximidades</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-[#F5F5F5] p-4 rounded-xl">
                <MapPin className="w-6 h-6 text-[#4CAF50] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Saúde</h4>
                  <p className="text-gray-600 text-sm">Hospitais e clínicas a poucos minutos de distância</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-[#F5F5F5] p-4 rounded-xl">
                <MapPin className="w-6 h-6 text-[#4CAF50] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Natureza</h4>
                  <p className="text-gray-600 text-sm">Rodeado pela beleza natural da Serra dos Órgãos</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gray-200 rounded-2xl overflow-hidden shadow-xl h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14688.892123456789!2d-42.9650!3d-22.4125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDI0JzQ1LjAiUyA0MsKwNTcnNTQuMCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização Oasis Residencial"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nossa História Section */}
      <section className="py-20 bg-gradient-to-br from-[#4CAF50] to-[#2E7D32]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-white"
            >
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                Nossa História
              </h2>
              <p className="text-xl mb-6 text-white/90">
                Mais de 20 anos transformando sonhos em realidade
              </p>
              <p className="mb-6 text-white/80 leading-relaxed">
                Desde 2004, temos o compromisso de entregar empreendimentos de alta qualidade com preços justos. Nossa missão é tornar o sonho da casa própria acessível para todas as famílias.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <div className="text-4xl font-bold mb-2">20+</div>
                  <div className="text-sm text-white/70">Anos de Experiência</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">50+</div>
                  <div className="text-sm text-white/70">Empreendimentos</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">2500+</div>
                  <div className="text-sm text-white/70">Famílias Felizes</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1763218161026-dd8bcfa832de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZXNpZGVudGlhbCUyMGJ1aWxkaW5nJTIwYXBhcnRtZW50fGVufDF8fHx8MTc3MDA1NzQwM3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Nossa empresa"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Formulário de Contato Section */}
      <section id="formulario" className="py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
              Fale Conosco
            </h2>
            <p className="text-xl text-gray-600">
              Preencha o formulário e nossa equipe entrará em contato
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section id="depoimentos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
              O Que Nossos Clientes Dizem
            </h2>
            <p className="text-xl text-gray-600">
              Histórias reais de quem já realiza o sonho da casa própria
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              name="Maria Silva"
              avatar="https://images.unsplash.com/photo-1683815251677-8df20f826622?w=200&h=200&fit=crop"
              text="Realizei o sonho da casa própria com parcelas que cabem no meu bolso. O Oasis é perfeito para minha família!"
              delay={0}
            />
            <TestimonialCard
              name="João Santos"
              avatar="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop"
              text="Localização incrível em Teresópolis, área de lazer completa e acabamento impecável. Recomendo!"
              delay={0.1}
            />
            <TestimonialCard
              name="Ana Costa"
              avatar="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop"
              text="Atendimento excepcional desde o primeiro contato. Estou muito feliz com meu apartamento!"
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Logo e Descrição */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#4CAF50] to-[#A5D6A7] rounded-lg flex items-center justify-center">
                  <Home className="w-7 h-7 text-white" />
                </div>
                <span className="text-xl font-bold">Oasis</span>
              </div>
              <p className="text-gray-400 text-sm">
                Seu oásis acessível em Teresópolis
              </p>
            </div>

            {/* Contato */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Contato</h3>
              <div className="space-y-3">
                <a href="https://wa.me/5521999999999" className="flex items-center gap-3 text-gray-400 hover:text-[#4CAF50] transition-colors">
                  <Phone className="w-5 h-5" />
                  <span>+55 21 9999-9999</span>
                </a>
                <a href="mailto:contato@oasisresidencial.com.br" className="flex items-center gap-3 text-gray-400 hover:text-[#4CAF50] transition-colors">
                  <Mail className="w-5 h-5" />
                  <span>contato@oasis.com.br</span>
                </a>
                <div className="flex items-start gap-3 text-gray-400">
                  <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                  <span>Av. Principal, 1234<br />Teresópolis - RJ</span>
                </div>
              </div>
            </div>

            {/* Links Rápidos */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Links Rápidos</h3>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('sobre')} className="block text-gray-400 hover:text-[#4CAF50] transition-colors">
                  Sobre
                </button>
                <button onClick={() => scrollToSection('galeria')} className="block text-gray-400 hover:text-[#4CAF50] transition-colors">
                  Galeria
                </button>
                <button onClick={() => scrollToSection('depoimentos')} className="block text-gray-400 hover:text-[#4CAF50] transition-colors">
                  Depoimentos
                </button>
                <button className="block text-gray-400 hover:text-[#4CAF50] transition-colors">
                  Plantas
                </button>
                <button className="block text-gray-400 hover:text-[#4CAF50] transition-colors">
                  Localização
                </button>
              </div>
            </div>

            {/* Redes Sociais */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Redes Sociais</h3>
              <div className="flex gap-4">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#4CAF50] transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#4CAF50] transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#4CAF50] transition-colors"
                >
                  <Youtube className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © 2026 Oasis Residencial. Todos os direitos reservados.
              </p>
              <div className="flex gap-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-[#4CAF50] transition-colors">
                  Política de Privacidade
                </a>
                <a href="#" className="text-gray-400 hover:text-[#4CAF50] transition-colors">
                  Termos de Uso
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <motion.a
        href="https://wa.me/5521999999999"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl z-50"
      >
        <Phone className="w-7 h-7 text-white" />
      </motion.a>
    </div>
  );
}