import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, User, Mail, Phone } from 'lucide-react';
import { Button } from '@/app/components/Button';
import { supabase } from '@/lib/supabase';

interface ContactFormProps {
  onSubmitSuccess?: (leadId: string) => void;
}

export function ContactForm({ onSubmitSuccess }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Envia os dados para o Supabase
      const { data, error: supabaseError } = await supabase
        .from('leads_oasis2')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone
          }
        ])
        .select();

      if (supabaseError) {
        throw supabaseError;
      }

      console.log('Formulário enviado com sucesso!');
      setFormData({ name: '', email: '', phone: '' });
      
      // Abre o questionário e passa o ID do lead
      if (onSubmitSuccess && data && data[0]) {
        onSubmitSuccess(data[0].id);
      }
    } catch (err) {
      console.error('Erro ao enviar formulário:', err);
      setError('Erro ao enviar formulário. Tente novamente.');
    } finally {
      setLoading(false);
    }
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

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
          {error}
        </div>
      )}

      <Button type="submit" variant="primary" size="lg" className="w-full" disabled={loading}>
        <Send className="w-5 h-5 mr-2" />
        {loading ? 'Enviando...' : 'Enviar Mensagem'}
      </Button>
    </motion.form>
  );
}
