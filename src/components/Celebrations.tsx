import React from 'react';
import { motion } from 'motion/react';
import { CELEBRATION_TYPES } from '../data/portfolioData';
import { StoryEventType } from '../types';
import { Heart, ArrowRight } from 'lucide-react';
import { EditorialImage } from './EditorialImage';

interface CelebrationsProps {
  onOpenStoryModal: (eventType?: StoryEventType) => void;
}

export const Celebrations: React.FC<CelebrationsProps> = ({ onOpenStoryModal }) => {
  return (
    <section className="py-24 sm:py-32 bg-[#F7F4EF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs uppercase tracking-[0.35em] text-[#1C2D5A] font-semibold block mb-3">
            Ocasiões especiais
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1A1A1A] font-normal leading-tight"
            style={{ textWrap: 'balance' }}
          >
            Para cada forma de celebrar.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#524C44] font-light max-w-xl mx-auto">
            Seja qual for o seu momento, criamos um universo gráfico sob medida para eternizá-lo.
          </p>
        </div>

        {/* Sophisticated Editorial Grid */}
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
                {/* Editorial Visual Frame */}
                <div className="w-full aspect-[4/3] bg-[#F2EDE4] rounded-2xl border border-[#E2D8C8] relative overflow-hidden mb-6">
                  <EditorialImage
                    src={item.coverImage}
                    alt={`Identidade visual afetiva para ${item.title} — Castle Criações`}
                    fallbackTitle={item.title}
                    fallbackSubtitle="Identidade Visual Afetiva & Autoral"
                    className="object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121D3A]/45 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-3 left-4 text-[10px] uppercase tracking-[0.25em] text-[#FAF8F5] font-medium drop-shadow-xs">
                    Identidade Visual Afetiva
                  </span>
                </div>

                {/* Subtitle & Title */}
                <span className="text-[10px] uppercase tracking-[0.28em] font-semibold text-[#1C2D5A] block mb-1">
                  {item.subtitle}
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-[#1A1A1A] font-normal mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#4F4A42] font-light leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Action — Pre-selects category in StoryModal */}
              <div className="pt-4 border-t border-[#EAE2D6] flex justify-between items-center">
                <button
                  type="button"
                  onClick={() => onOpenStoryModal(item.eventType)}
                  className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-semibold text-[#1C2D5A] hover:text-[#0F1E40] transition-colors group/btn focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1C2D5A] rounded"
                >
                  <Heart className="w-3.5 h-3.5 text-[#D81B60] shrink-0" />
                  <span>{item.ctaLabel}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
