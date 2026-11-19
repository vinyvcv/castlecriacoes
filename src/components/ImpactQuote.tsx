import React from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export const ImpactQuote: React.FC = () => {
  return (
    <section className="py-28 sm:py-40 bg-[#FAF8F5] relative overflow-hidden">
      {/* Subtle fine border accent lines */}
      <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-[#1C2D5A]/10 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="space-y-6"
        >
          <Sparkles className="w-6 h-6 text-[#EAA227] mx-auto opacity-70" />

          <blockquote className="text-3xl sm:text-5xl md:text-6xl font-serif font-normal text-[#1A1A1A] leading-[1.25] tracking-tight max-w-4xl mx-auto">
            “Sua celebração acontece uma vez.{' '}
            <span className="block mt-2 italic text-[#1C2D5A] font-medium">
              A identidade dela também deve ser única.”
            </span>
          </blockquote>

          <div className="pt-6">
            <span className="inline-block text-[11px] uppercase tracking-[0.35em] text-[#5E564B] font-sans font-medium">
              Castle Criações · Identidade Visual Afetiva
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
