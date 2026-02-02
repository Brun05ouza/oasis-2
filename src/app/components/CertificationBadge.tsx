import React, { useState } from 'react';
import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface CertificationBadgeProps {
  icon: LucideIcon;
  label: string;
  tooltip: string;
  delay?: number;
}

export function CertificationBadge({ icon: Icon, label, tooltip, delay = 0 }: CertificationBadgeProps) {
  const [showTooltip, setShowTooltip] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="relative flex flex-col items-center"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-[#A5D6A7] cursor-pointer"
      >
        <Icon className="w-10 h-10 text-[#4CAF50]" />
      </motion.div>
      
      <p className="mt-3 text-sm font-medium text-gray-700">{label}</p>
      
      {showTooltip && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full mt-2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap z-10"
        >
          {tooltip}
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45" />
        </motion.div>
      )}
    </motion.div>
  );
}
