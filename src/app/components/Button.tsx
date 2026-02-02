import React from 'react';
import { motion } from 'motion/react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = ''
}: ButtonProps) {
  const baseStyles = 'rounded-lg font-medium transition-all duration-300 inline-flex items-center justify-center';

  const variants = {
    primary: 'bg-[#F97316] text-white hover:bg-[#EA580C] shadow-lg hover:shadow-xl',
    secondary: 'bg-[#1E3A8A] text-white hover:bg-[#1E40AF] shadow-lg hover:shadow-xl',
    outline: 'border-2 border-white text-white hover:bg-white hover:text-[#1E3A8A]'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
