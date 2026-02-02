import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  avatar: string;
  text: string;
  delay?: number;
}

export function TestimonialCard({ name, avatar, text, delay = 0 }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-2xl p-8 shadow-lg relative"
    >
      <Quote className="absolute top-6 right-6 w-10 h-10 text-[#1E3A8A] opacity-20" />

      <div className="flex items-center gap-4 mb-4">
        <img
          src={avatar}
          alt={name}
          className="w-16 h-16 rounded-full object-cover ring-4 ring-[#F97316]"
        />
        <div>
          <h4 className="font-semibold text-gray-800">{name}</h4>
          <div className="flex gap-1 mt-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[#F97316] text-[#F97316]" />
            ))}
          </div>
        </div>
      </div>

      <p className="text-gray-600 leading-relaxed italic">"{text}"</p>
    </motion.div>
  );
}
