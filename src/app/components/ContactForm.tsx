import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, User, Mail, Phone, MessageSquare } from 'lucide-react';
import { Button } from '@/app/components/Button';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica de envio
    console.log('Form submitted:', formData);
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl shadow-xl p-8 space-y-6"
    >
      <div className="relative">
        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Seu nome completo"
          required
          className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-[#10B981] focus:outline-none transition-colors"
        />
      </div>

      <div className="relative">
        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Seu melhor e-mail"
          required
          className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-[#10B981] focus:outline-none transition-colors"
        />
      </div>

      <div className="relative">
        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Telefone com WhatsApp"
          required
          className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-[#10B981] focus:outline-none transition-colors"
        />
      </div>

      <div className="relative">
        <MessageSquare className="absolute left-4 top-6 w-5 h-5 text-gray-400" />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Conte-nos como podemos ajudar..."
          rows={4}
          required
          className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-[#10B981] focus:outline-none transition-colors resize-none"
        />
      </div>

      <Button type="submit" variant="primary" size="lg" className="w-full">
        <Send className="w-5 h-5 mr-2" />
        Enviar Mensagem
      </Button>
    </motion.form>
  );
}
