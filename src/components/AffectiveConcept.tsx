import React from 'react';
import { motion } from 'motion/react';
import { CastleLogo } from './CastleLogo';

type StepIconId = 'historia' | 'referencia' | 'criacao' | 'identidade' | 'celebracao';

const AffectiveStepArtwork: React.FC<{ id: StepIconId }> = ({ id }) => {
  switch (id) {
    case 'historia':
      // Delicate fountain pen nib & handwritten ribbon
      return (
        <svg viewBox="0 0 64 64" className="w-12 h-12" fill="none" aria-hidden="true">
          <path
            d="M44 12 L52 20 L30 42 L18 46 L22 34 L44 12 Z"
            stroke="#1C2D5A"
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
          <line x1="18" y1="46" x2="31" y2="33" stroke="#1C2D5A" strokeWidth="1.2" />
          <circle cx="33" cy="31" r="2" fill="#EAA227" />
          <path
            d="M14 52 C22 48 30 56 40 52 C45 50 49 51 52 53"
            stroke="#D81B60"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
      );

    case 'referencia':
      // Delicate botanical flower sprig
      return (
        <svg viewBox="0 0 64 64" className="w-12 h-12" fill="none" aria-hidden="true">
          <path d="M32 52 C32 39 32 30 32 22" stroke="#1C2D5A" strokeWidth="1.4" strokeLinecap="round" />
          <path
            d="M32 42 C24 41 19 35 19 29 C26 29 31 34 32 42 Z"
            stroke="#1C2D5A"
            strokeWidth="1.2"
            fill="#1C2D5A"
            fillOpacity="0.06"
          />
          <path
            d="M32 38 C40 37 45 31 45 25 C38 25 33 30 32 38 Z"
            stroke="#1C2D5A"
            strokeWidth="1.2"
            fill="#1C2D5A"
            fillOpacity="0.06"
          />
          <circle cx="32" cy="18" r="4" stroke="#EAA227" strokeWidth="1.4" fill="#EAA227" fillOpacity="0.18" />
          <circle cx="25" cy="21" r="3" stroke="#1C2D5A" strokeWidth="1.2" />
          <circle cx="39" cy="21" r="3" stroke="#1C2D5A" strokeWidth="1.2" />
          <circle cx="32" cy="18" r="1.4" fill="#D81B60" />
        </svg>
      );

    case 'criacao':
      // Monogram sketch crest
      return (
        <svg viewBox="0 0 64 64" className="w-12 h-12" fill="none" aria-hidden="true">
          <circle cx="32" cy="32" r="20" stroke="#1C2D5A" strokeOpacity="0.28" strokeWidth="1" strokeDasharray="3 3" />
          <path
            d="M22 20 L42 20 L42 36 C42 44 32 49 32 49 C32 49 22 44 22 36 Z"
            stroke="#1C2D5A"
            strokeWidth="1.4"
            strokeLinejoin="round"
            fill="#FAF8F5"
          />
          <text
            x="32"
            y="38"
            textAnchor="middle"
            fill="#1C2D5A"
            fontFamily="Cormorant Garamond, serif"
            fontStyle="italic"
            fontSize="18"
            fontWeight="600"
          >
            C
          </text>
          <path d="M32 10 L33.5 14 L37.5 15.5 L33.5 17 L32 21 L30.5 17 L26.5 15.5 L30.5 14 Z" fill="#EAA227" />
        </svg>
      );

    case 'identidade':
      // Curated palette & stationery harmony
      return (
        <svg viewBox="0 0 64 64" className="w-12 h-12" fill="none" aria-hidden="true">
          <rect x="14" y="16" width="24" height="32" rx="3" stroke="#1C2D5A" strokeWidth="1.3" fill="#FAF8F5" />
          <line x1="20" y1="26" x2="32" y2="26" stroke="#1C2D5A" strokeOpacity="0.4" strokeWidth="1.2" />
          <line x1="20" y1="32" x2="30" y2="32" stroke="#1C2D5A" strokeOpacity="0.25" strokeWidth="1.2" />
          <circle cx="44" cy="24" r="6" fill="#1C2D5A" />
          <circle cx="46" cy="36" r="6" fill="#EAA227" />
          <circle cx="40" cy="46" r="5.5" fill="#D81B60" />
        </svg>
      );

    case 'celebracao':
      // Delicate champagne coupe with sparkling star
      return (
        <svg viewBox="0 0 64 64" className="w-12 h-12" fill="none" aria-hidden="true">
          <path
            d="M21 24 C21 33 26 38 32 38 C38 38 43 33 43 24 Z"
            stroke="#1C2D5A"
            strokeWidth="1.4"
            strokeLinejoin="round"
            fill="#EAA227"
            fillOpacity="0.12"
          />
          <line x1="32" y1="38" x2="32" y2="51" stroke="#1C2D5A" strokeWidth="1.4" />
          <line x1="24" y1="51" x2="40" y2="51" stroke="#1C2D5A" strokeWidth="1.4" strokeLinecap="round" />
          <path d="M32 10 L33.4 13.8 L37.2 15.2 L33.4 16.6 L32 20.4 L30.6 16.6 L26.8 15.2 L30.6 13.8 Z" fill="#EAA227" />
          <circle cx="43" cy="16" r="1.5" fill="#D81B60" />
          <circle cx="21" cy="17" r="1.3" fill="#1C2D5A" />
        </svg>
      );
  }
};

export const AffectiveConcept: React.FC = () => {
  const sequenceSteps: { id: StepIconId; title: string; subtitle: string }[] = [
    { id: 'historia', title: 'História', subtitle: 'A vivência & as memórias' },
    { id: 'referencia', title: 'Referência', subtitle: 'Lugar, flor, cor ou símbolo' },
    { id: 'criacao', title: 'Criação', subtitle: 'Traço autoral no estúdio' },
    { id: 'identidade', title: 'Identidade', subtitle: 'O universo gráfico completo' },
    { id: 'celebracao', title: 'Celebração', subtitle: 'A experiência inesquecível' },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#F6F2EB] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs uppercase tracking-[0.35em] text-[#1C2D5A] font-semibold block mb-3">
            Conceito afetivo
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1A1A1A] font-normal leading-tight"
            style={{ textWrap: 'balance' }}
          >
            Detalhes que contam histórias.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#4A4A4A] font-light leading-relaxed max-w-2xl mx-auto font-sans">
            O que torna uma identidade verdadeiramente única são os detalhes que pertencem apenas àquela história.
          </p>
        </div>

        {/* Artistic Horizontal Editorial Flow */}
        <div className="relative">
          {/* Subtle connecting line for desktop */}
          <div className="hidden lg:block absolute top-14 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-[#1C2D5A]/20 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 relative z-10">
            {sequenceSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                {/* Artistic Circle Frame with Delicate Minimalist Illustration */}
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#FAF8F5] border border-[#DFD5C5] shadow-xs flex flex-col items-center justify-center p-3 mb-5 transition-all duration-300 group-hover:scale-105 group-hover:border-[#1C2D5A] group-hover:shadow-md relative">
                  <AffectiveStepArtwork id={step.id} />
                  <span className="absolute -bottom-2 text-[10px] font-mono tabular-nums bg-[#1C2D5A] text-white px-2.5 py-0.5 rounded-full">
                    0{index + 1}
                  </span>
                </div>

                {/* Step Title & Subtitle */}
                <h3 className="text-xl font-serif text-[#1A1A1A] group-hover:text-[#1C2D5A] transition-colors mb-1 font-normal">
                  {step.title}
                </h3>
                <p className="text-xs text-[#554E45] font-sans font-light max-w-[170px]">
                  {step.subtitle}
                </p>

                {/* Arrow connector for mobile / tablet */}
                {index < sequenceSteps.length - 1 && (
                  <div className="lg:hidden my-4 text-[#8C8275]" aria-hidden="true">
                    ↓
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Editorial Vignette */}
        <div className="mt-16 sm:mt-20 p-8 sm:p-10 rounded-3xl bg-[#FAF8F5] border border-[#E8E1D5] max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <CastleLogo variant="symbol-only" className="w-12 h-12 shrink-0" />
            <div>
              <p className="font-serif italic text-lg text-[#1C2D5A] font-medium">
                “Cada traço guarda um afeto, cada cor reflete uma lembrança.”
              </p>
              <p className="text-xs text-[#5A5248] font-sans mt-0.5">
                Processo criativo autoral e exclusivo da Castle Criações.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
