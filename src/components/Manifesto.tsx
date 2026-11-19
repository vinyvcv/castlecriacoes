import React from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export const Manifesto: React.FC = () => {
  return (
    <section id="manifesto" className="py-24 sm:py-32 bg-[#F7F4EF] relative overflow-hidden">
      {/* Delicate background rule decorative lines */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-[#1C2D5A]/20" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-[#1C2D5A]/20" />

      <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Eyebrow */}
          <span className="inline-block text-xs uppercase tracking-[0.35em] text-[#1C2D5A] font-semibold">
            MAIS DO QUE UMA IDENTIDADE VISUAL
          </span>

          {/* Section Main Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#1A1A1A] leading-[1.25] max-w-3xl mx-auto">
            Cada celebração carrega uma história. Nós a transformamos em identidade.
          </h2>

          {/* Editorial Divider */}
          <div className="w-12 h-[1px] bg-[#D0C7B8] mx-auto my-6" />

          {/* Main Prose Text */}
          <div className="space-y-6 text-base sm:text-lg text-[#4A4A4A] font-light leading-relaxed max-w-2xl mx-auto font-sans">
            <p>
              Existem detalhes que só fazem sentido para quem viveu aquela história.
            </p>
            <p className="font-serif italic text-xl sm:text-2xl text-[#1C2D5A] font-normal py-2">
              Um lugar especial. Uma flor. Uma memória. Uma cor. Um sonho.
            </p>
            <p>
              Na Castle, são essas referências que dão origem ao processo criativo.
              Transformamos sentimentos e histórias em elementos visuais que tornam cada celebração verdadeiramente única.
            </p>
          </div>

          {/* Emotionally Highlighted Quote Callout */}
          <div className="pt-8 pb-4">
            <div className="inline-block relative p-8 sm:p-12 rounded-3xl bg-[#FAF8F5] border border-[#E8E1D5] shadow-xs">
              <Sparkles className="w-5 h-5 text-[#EAA227] mx-auto mb-3 opacity-80" />
              <p className="text-2xl sm:text-3xl md:text-4xl font-serif italic text-[#1C2D5A] font-medium tracking-tight">
                “Criamos para celebrar quem você é.”
              </p>
              <span className="block mt-3 text-[11px] uppercase tracking-[0.28em] text-[#5E564B] font-sans font-medium">
                Filosofia Castle Criações
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
