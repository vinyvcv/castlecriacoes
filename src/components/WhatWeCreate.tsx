import React from 'react';
import { motion } from 'motion/react';
import { DELIVERABLES } from '../data/portfolioData';

export const WhatWeCreate: React.FC = () => {
  return (
    <section id="o-que-criamos" className="py-24 sm:py-32 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs uppercase tracking-[0.35em] text-[#1C2D5A] font-semibold block mb-3">
            O QUE CRIAMOS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1A1A1A] font-normal leading-tight">
            Um universo visual criado para o seu momento.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#5A5A5A] font-light max-w-xl mx-auto">
            Cada elemento gráfico é elaborado sob medida para compor a atmosfera da sua celebração.
          </p>
        </div>

        {/* Editorial Layout Grid - No generic cards with heavy shadows */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {DELIVERABLES.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="flex flex-col justify-between pt-6 border-t border-[#E5DDD2] group transition-colors duration-300"
            >
              <div>
                {/* Top Number & Tag */}
                <div className="flex justify-between items-baseline mb-4">
                  <span className="font-serif italic text-2xl text-[#1C2D5A]/40 group-hover:text-[#1C2D5A] transition-colors">
                    {item.number}
                  </span>
                  <span className="text-[9px] uppercase tracking-widest text-[#8A8070] bg-[#F2EDE4] px-2.5 py-0.5 rounded-full">
                    Castle Element
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-serif text-[#1A1A1A] group-hover:text-[#1C2D5A] transition-colors mb-2 font-normal">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#555555] font-light leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Visual Placeholder Component */}
              <div className="w-full h-24 bg-[#F5F0E8] rounded-xl border border-dashed border-[#D6CBB8] flex items-center justify-center p-3 transition-all duration-300 group-hover:bg-[#EFE7DC]">
                <span className="font-serif italic text-xs text-[#1C2D5A] tracking-wider text-center">
                  {item.placeholderTag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
