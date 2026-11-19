import React from 'react';
import { motion } from 'motion/react';
import { CastleLogo } from './CastleLogo';

export const AffectiveConcept: React.FC = () => {
  const sequenceSteps = [
    { title: 'História', subtitle: 'A vivência & as memórias', placeholder: '[ Elemento Afetivo: História ]' },
    { title: 'Referência', subtitle: 'Lugar, flor, cor ou símbolo', placeholder: '[ Elemento Afetivo: Símbolo ]' },
    { title: 'Criação', subtitle: 'Traço autoral no estúdio', placeholder: '[ Elemento Afetivo: Traço ]' },
    { title: 'Identidade', subtitle: 'O universo gráfico completo', placeholder: '[ Elemento Afetivo: Marca ]' },
    { title: 'Celebração', subtitle: 'A experiência inesquecível', placeholder: '[ Elemento Afetivo: Momento ]' },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#F6F2EB] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs uppercase tracking-[0.35em] text-[#1C2D5A] font-semibold block mb-3">
            CONCEITO AFETIVO
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1A1A1A] font-normal leading-tight">
            Detalhes que contam histórias.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#4A4A4A] font-light leading-relaxed max-w-2xl mx-auto font-sans">
            O que torna uma identidade verdadeiramente única são os detalhes que pertencem apenas àquela história.
          </p>
        </div>

        {/* Artistic Horizontal Editorial Flow */}
        <div className="relative">
          {/* Subtle connecting curved line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-[#1C2D5A]/20 to-transparent -translate-y-12" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 relative z-10">
            {sequenceSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="flex flex-col items-center text-center group"
              >
                {/* Artistic Circle Frame for Affective Drawing Placeholder */}
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#FAF8F5] border border-[#E2D8C8] shadow-xs flex flex-col items-center justify-center p-3 mb-5 transition-transform duration-500 group-hover:scale-105 group-hover:border-[#1C2D5A] group-hover:shadow-md relative">
                  <span className="text-[10px] font-serif italic text-[#1C2D5A] leading-tight px-1">
                    {step.placeholder}
                  </span>
                  <div className="absolute -bottom-2 text-[9px] font-mono uppercase bg-[#1C2D5A] text-white px-2 py-0.5 rounded-full">
                    0{index + 1}
                  </div>
                </div>

                {/* Step Title & Subtitle */}
                <h3 className="text-xl font-serif text-[#1A1A1A] group-hover:text-[#1C2D5A] transition-colors mb-1 font-normal">
                  {step.title}
                </h3>
                <p className="text-xs text-[#6A6A6A] font-sans font-light max-w-[160px]">
                  {step.subtitle}
                </p>

                {/* Arrow connector for mobile / tablet */}
                {index < sequenceSteps.length - 1 && (
                  <div className="lg:hidden my-4 text-[#C5BCAD]">↓</div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Editorial Vignette */}
        <div className="mt-16 sm:mt-20 p-8 sm:p-10 rounded-3xl bg-[#FAF8F5] border border-[#E8E1D5] max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <CastleLogo variant="symbol-only" className="w-12 h-12 flex-shrink-0" />
            <div>
              <p className="font-serif italic text-lg text-[#1C2D5A] font-medium">
                “Cada traço guarda um afeto, cada cor reflete uma lembrança.”
              </p>
              <p className="text-xs text-[#7A7A7A] font-sans mt-0.5">
                Processo criativo autoral e exclusivo da Castle Criações.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
