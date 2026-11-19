import React from 'react';
import { motion } from 'motion/react';
import { Heart, Sparkles } from 'lucide-react';
import { CastleLogo } from './CastleLogo';

interface FinalCTAProps {
  onOpenStoryModal: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenStoryModal }) => {
  return (
    <section id="contato" className="py-24 sm:py-32 bg-[#F5F0E8] relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#EAE2D2]/60 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#FAF8F5] rounded-3xl p-8 sm:p-14 md:p-16 border border-[#E5DDD0] shadow-xl relative"
        >
          {/* Logo Mark Header */}
          <div className="mb-8 flex justify-center">
            <CastleLogo variant="full" className="w-28 sm:w-36 h-auto" />
          </div>

          {/* Section Main Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1A1A1A] font-normal leading-tight mb-6">
            Vamos criar algo que tenha a sua história?
          </h2>

          {/* Text */}
          <p className="text-base sm:text-lg text-[#4A4A4A] font-light leading-relaxed max-w-2xl mx-auto font-sans mb-8">
            Conte-nos um pouco sobre a sua celebração. Queremos conhecer as histórias, referências e detalhes que tornarão esse momento único.
          </p>

          {/* Button */}
          <div className="flex justify-center">
            <button
              onClick={onOpenStoryModal}
              className="inline-flex items-center justify-center px-9 py-4 text-xs sm:text-sm tracking-widest uppercase font-semibold text-white bg-[#1C2D5A] rounded-full shadow-md hover:bg-[#0F1E40] transition-all duration-300 hover:scale-105 space-x-2.5"
            >
              <Heart className="w-4 h-4 text-[#D81B60]" />
              <span>Quero criar minha identidade</span>
            </button>
          </div>

          {/* Subtext */}
          <p className="text-xs text-[#8A8070] font-serif italic mt-6">
            Atendimento exclusivo sob agendamento prévio.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
