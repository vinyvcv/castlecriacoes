import React from 'react';
import { motion } from 'motion/react';
import { PROCESS_STEPS } from '../data/portfolioData';

export const Process: React.FC = () => {
  return (
    <section id="processo" className="py-24 sm:py-32 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <span className="text-xs uppercase tracking-[0.35em] text-[#1C2D5A] font-semibold block mb-3">
            NOSSO PROCESSO
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1A1A1A] font-normal leading-tight">
            Da história à identidade.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#5A5A5A] font-light max-w-xl mx-auto">
            Cinco passos cuidadosos para transformar memórias em um universo gráfico inesquecível.
          </p>
        </div>

        {/* Editorial Timeline - Large Numbers, Distinct Layout */}
        <div className="space-y-12 sm:space-y-16">
          {PROCESS_STEPS.map((step, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-[#E8E1D5] ${
                  isEven ? '' : 'md:flex-row-reverse'
                }`}
              >
                {/* Large Elegant Number */}
                <div className="w-full md:w-5/12 flex items-baseline space-x-4">
                  <span className="font-serif text-6xl sm:text-7xl lg:text-8xl font-light text-[#1C2D5A]/25 select-none leading-none">
                    {step.number}
                  </span>
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-[#1C2D5A] block">
                      Etapa {step.number} · {step.subtitle}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-serif text-[#1A1A1A] font-normal mt-1">
                      {step.title}
                    </h3>
                  </div>
                </div>

                {/* Description & Detail Line */}
                <div className="w-full md:w-6/12 bg-[#F5F0E8] rounded-2xl p-6 sm:p-8 border border-[#E5DDD0]">
                  <p className="text-sm sm:text-base text-[#4A4A4A] font-light leading-relaxed font-sans">
                    {step.description}
                  </p>
                  <div className="mt-4 pt-4 border-t border-[#E5DDD0]/60 flex items-center justify-between text-[11px] text-[#8C8275] uppercase tracking-widest font-mono">
                    <span>Atendimento Autoral</span>
                    <span>Exclusividade Castle</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
