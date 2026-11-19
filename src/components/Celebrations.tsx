import React from 'react';
import { motion } from 'motion/react';
import { CELEBRATION_TYPES } from '../data/portfolioData';
import { Heart } from 'lucide-react';

interface CelebrationsProps {
  onOpenStoryModal: () => void;
}

export const Celebrations: React.FC<CelebrationsProps> = ({ onOpenStoryModal }) => {
  return (
    <section className="py-24 sm:py-32 bg-[#F7F4EF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs uppercase tracking-[0.35em] text-[#1C2D5A] font-semibold block mb-3">
            OCASIÕES ESPECIAIS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1A1A1A] font-normal leading-tight">
            Para cada forma de celebrar.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#5A5A5A] font-light max-w-xl mx-auto">
            Seja qual for o seu momento, criamos um universo gráfico sob medida para eternizá-lo.
          </p>
        </div>

        {/* Sophisticated Editorial Grid (Not store categories) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {CELEBRATION_TYPES.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="bg-[#FAF8F5] rounded-3xl p-6 sm:p-8 border border-[#E8E1D5] flex flex-col justify-between group hover:border-[#1C2D5A] transition-all duration-500 shadow-2xs hover:shadow-md"
            >
              <div>
                {/* Large Editorial Placeholder Frame */}
                <div className="w-full h-56 sm:h-64 bg-[#F2EDE4] rounded-2xl border border-dashed border-[#D6CBB8] p-6 flex flex-col justify-between items-center text-center relative overflow-hidden mb-6 group-hover:bg-[#EFE7DC] transition-colors">
                  <div className="w-full flex justify-between text-[10px] uppercase tracking-widest text-[#8A8070]">
                    <span>Castle Categoria</span>
                    <span>Ref. {item.id}</span>
                  </div>

                  <div className="my-auto">
                    <p className="font-serif italic text-lg sm:text-xl text-[#1C2D5A] font-medium">
                      {item.placeholderText}
                    </p>
                    <span className="text-[10px] uppercase tracking-widest text-[#8A8070] font-sans block mt-1">
                      Identidade Visual Afetiva & Autoral
                    </span>
                  </div>

                  <div className="w-full flex justify-center space-x-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1C2D5A]/40" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1C2D5A]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1C2D5A]/40" />
                  </div>
                </div>

                {/* Subtitle & Title */}
                <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-[#1C2D5A] block mb-1">
                  {item.subtitle}
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-[#1A1A1A] font-normal mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#555555] font-light leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-[#EAE2D6] flex justify-between items-center">
                <button
                  onClick={onOpenStoryModal}
                  className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-semibold text-[#1C2D5A] group-hover:text-[#0F1E40] transition-colors"
                >
                  <Heart className="w-3.5 h-3.5 text-[#D81B60]" />
                  <span>Conte-nos sobre seu {item.title.toLowerCase()}</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
