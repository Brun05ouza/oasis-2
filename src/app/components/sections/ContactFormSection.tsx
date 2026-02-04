import { motion } from 'motion/react';
import { ContactForm } from '@/app/components/ContactForm';

interface ContactFormSectionProps {
  onSubmitSuccess: (leadId: string) => void;
}

export default function ContactFormSection({ onSubmitSuccess }: ContactFormSectionProps) {
  return (
    <section id="formulario" className="pt-20 pb-32 bg-gradient-to-b from-[#FAFAFA] via-[#F5F5F5] to-[#F0F0F0] relative overflow-hidden">
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
          <ContactForm onSubmitSuccess={onSubmitSuccess} />
        </div>
      </div>

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
  );
}
