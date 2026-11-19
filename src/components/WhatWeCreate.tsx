import React from 'react';
import { motion } from 'motion/react';
import { DELIVERABLES } from '../data/portfolioData';
import { Deliverable } from '../types';

const DeliverableArtwork: React.FC<{ id: Deliverable['id'] }> = ({ id }) => {
  switch (id) {
    case 'monogramas':
      return (
        <svg viewBox="0 0 220 96" className="w-full h-full" fill="none" aria-hidden="true">
          <rect x="28" y="10" width="164" height="76" rx="8" stroke="#1C2D5A" strokeOpacity="0.22" strokeWidth="1" />
          <rect x="33" y="15" width="154" height="66" rx="5" stroke="#EAA227" strokeOpacity="0.45" strokeWidth="0.75" />
          <path d="M90 22 Q110 14 130 22" stroke="#1C2D5A" strokeOpacity="0.45" strokeWidth="1" strokeLinecap="round" />
          <text
            x="110"
            y="57"
            textAnchor="middle"
            fill="#1C2D5A"
            fontFamily="Cormorant Garamond, serif"
            fontStyle="italic"
            fontSize="30"
            fontWeight="500"
          >
            I &amp; G
          </text>
          <text
            x="110"
            y="71"
            textAnchor="middle"
            fill="#5E564B"
            fontFamily="Plus Jakarta Sans, sans-serif"
            fontSize="7"
            letterSpacing="3"
          >
            18 · 10 · 2026
          </text>
        </svg>
      );

    case 'artes-digitais':
      return (
        <svg viewBox="0 0 220 96" className="w-full h-full" fill="none" aria-hidden="true">
          {/* Desktop / Screen Frame */}
          <rect x="26" y="14" width="114" height="68" rx="7" fill="#FAF8F5" stroke="#1C2D5A" strokeOpacity="0.3" strokeWidth="1.1" />
          <line x1="26" y1="24" x2="140" y2="24" stroke="#1C2D5A" strokeOpacity="0.16" strokeWidth="0.9" />
          <circle cx="34" cy="19" r="1.4" fill="#EAA227" />
          <circle cx="40" cy="19" r="1.4" fill="#D81B60" />
          <text x="83" y="49" textAnchor="middle" fill="#1C2D5A" fontFamily="Cormorant Garamond, serif" fontStyle="italic" fontSize="15">
            Save the Date
          </text>
          <line x1="60" y1="58" x2="106" y2="58" stroke="#EAA227" strokeWidth="1" />
          <text x="83" y="69" textAnchor="middle" fill="#5E564B" fontFamily="Plus Jakarta Sans, sans-serif" fontSize="6.5" letterSpacing="2">
            CONVITE INTERATIVO
          </text>
          {/* Mobile Invite Frame */}
          <rect x="148" y="10" width="46" height="76" rx="8" fill="#1C2D5A" />
          <rect x="152" y="16" width="38" height="64" rx="5" stroke="#FAF8F5" strokeOpacity="0.35" strokeWidth="0.8" />
          <path d="M171 32 L173 37 L178 39 L173 41 L171 46 L169 41 L164 39 L169 37 Z" fill="#EAA227" />
          <line x1="160" y1="56" x2="182" y2="56" stroke="#FAF8F5" strokeOpacity="0.7" strokeWidth="1" />
          <line x1="164" y1="62" x2="178" y2="62" stroke="#FAF8F5" strokeOpacity="0.4" strokeWidth="1" />
        </svg>
      );

    case 'elementos-afetivos':
      return (
        <svg viewBox="0 0 220 96" className="w-full h-full" fill="none" aria-hidden="true">
          {/* Vintage Postage Stamp */}
          <rect
            x="38"
            y="14"
            width="64"
            height="68"
            rx="3"
            fill="#FAF8F5"
            stroke="#1C2D5A"
            strokeOpacity="0.4"
            strokeWidth="1.1"
            strokeDasharray="3 3"
          />
          <rect x="44" y="20" width="52" height="56" stroke="#1C2D5A" strokeOpacity="0.2" strokeWidth="0.8" />
          <path
            d="M70 57 C70 57 57 48.5 57 40 C57 35.8 60.5 33 64.2 33 C66.8 33 68.8 34.4 70 36.5 C71.2 34.4 73.2 33 75.8 33 C79.5 33 83 35.8 83 40 C83 48.5 70 57 70 57 Z"
            stroke="#D81B60"
            strokeWidth="1.2"
            fill="#D81B60"
            fillOpacity="0.08"
          />
          {/* Wax Seal */}
          <circle cx="152" cy="48" r="24" fill="#EAA227" fillOpacity="0.16" stroke="#EAA227" strokeWidth="1.2" />
          <circle cx="152" cy="48" r="18" stroke="#1C2D5A" strokeOpacity="0.55" strokeWidth="0.9" strokeDasharray="2 2" />
          <text x="152" y="53" textAnchor="middle" fill="#1C2D5A" fontFamily="Alex Brush, cursive" fontSize="20">
            C
          </text>
        </svg>
      );

    case 'ilustracoes':
      return (
        <svg viewBox="0 0 220 96" className="w-full h-full" fill="none" aria-hidden="true">
          {/* Botanical branch illustration */}
          <path
            d="M36 74 C76 62 114 48 182 22"
            stroke="#1C2D5A"
            strokeWidth="1.3"
            strokeLinecap="round"
          />
          <path d="M68 62 C62 46 72 34 86 38 C82 50 76 58 68 62 Z" fill="#1C2D5A" fillOpacity="0.1" stroke="#1C2D5A" strokeWidth="1" />
          <path d="M98 52 C104 66 118 72 128 64 C118 56 108 52 98 52 Z" fill="#EAA227" fillOpacity="0.18" stroke="#1C2D5A" strokeWidth="1" />
          <path d="M126 42 C122 26 134 16 146 22 C142 34 134 38 126 42 Z" fill="#1C2D5A" fillOpacity="0.1" stroke="#1C2D5A" strokeWidth="1" />
          <path d="M150 34 C158 46 172 48 180 40 C170 34 160 32 150 34 Z" fill="#D81B60" fillOpacity="0.12" stroke="#1C2D5A" strokeWidth="1" />
          {/* Delicate blossoms */}
          <circle cx="88" cy="28" r="3" fill="#EAA227" />
          <circle cx="164" cy="20" r="2.5" fill="#D81B60" />
          <circle cx="52" cy="54" r="2" fill="#1C2D5A" fillOpacity="0.5" />
        </svg>
      );

    case 'paleta':
      return (
        <div className="w-full h-full flex items-center justify-center gap-2.5 px-3">
          {[
            { hex: '#FAF8F5', border: '#D6CBB8' },
            { hex: '#E5DDD0', border: '#C9BEA9' },
            { hex: '#1C2D5A', border: '#1C2D5A' },
            { hex: '#EAA227', border: '#D6901A' },
            { hex: '#D81B60', border: '#BC1652' },
          ].map((swatch) => (
            <div key={swatch.hex} className="flex flex-col items-center gap-1.5">
              <span
                className="w-7 h-10 rounded-full shadow-2xs transition-transform duration-300 group-hover:-translate-y-0.5"
                style={{ backgroundColor: swatch.hex, border: `1px solid ${swatch.border}` }}
              />
              <span className="text-[8px] font-mono text-[#5E564B] tracking-tight">
                {swatch.hex.slice(1, 5)}
              </span>
            </div>
          ))}
        </div>
      );

    case 'tipografia':
      return (
        <div className="w-full h-full flex items-center justify-center gap-4 px-4">
          <div className="text-center">
            <span className="font-serif text-4xl text-[#1C2D5A] leading-none block">Aa</span>
            <span className="text-[8px] uppercase tracking-[0.2em] text-[#5E564B] block mt-1">
              Serif Editorial
            </span>
          </div>
          <div className="h-10 w-[1px] bg-[#D6CBB8]" />
          <div className="text-left">
            <span className="font-script text-2xl text-[#D81B60] leading-none block">
              Afetiva
            </span>
            <span className="text-[9px] font-sans uppercase tracking-[0.25em] text-[#1C2D5A] block mt-1 font-medium">
              Harmonia Visual
            </span>
          </div>
        </div>
      );

    case 'estampas':
      return (
        <svg viewBox="0 0 220 96" className="w-full h-full" fill="none" aria-hidden="true">
          <defs>
            <pattern id="castleTile" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M16 2 L30 16 L16 30 L2 16 Z" stroke="#1C2D5A" strokeOpacity="0.22" strokeWidth="0.9" fill="none" />
              <circle cx="16" cy="16" r="2.2" fill="#EAA227" fillOpacity="0.7" />
              <circle cx="2" cy="16" r="1.2" fill="#1C2D5A" fillOpacity="0.35" />
              <circle cx="16" cy="2" r="1.2" fill="#D81B60" fillOpacity="0.45" />
            </pattern>
          </defs>
          <rect x="12" y="10" width="196" height="76" rx="8" fill="url(#castleTile)" />
          <rect x="12" y="10" width="196" height="76" rx="8" stroke="#1C2D5A" strokeOpacity="0.16" strokeWidth="1" />
        </svg>
      );

    case 'aplicacoes':
      return (
        <svg viewBox="0 0 220 96" className="w-full h-full" fill="none" aria-hidden="true">
          {/* Envelope */}
          <rect x="24" y="26" width="84" height="54" rx="4" fill="#FAF8F5" stroke="#1C2D5A" strokeOpacity="0.45" strokeWidth="1.1" />
          <path d="M24 28 L66 56 L108 28" stroke="#1C2D5A" strokeOpacity="0.35" strokeWidth="1" />
          <circle cx="66" cy="54" r="5" fill="#D81B60" fillOpacity="0.85" />
          {/* Menu Card */}
          <rect x="122" y="12" width="44" height="72" rx="3" fill="#FAF8F5" stroke="#1C2D5A" strokeOpacity="0.45" strokeWidth="1.1" />
          <text x="144" y="28" textAnchor="middle" fill="#1C2D5A" fontFamily="Cormorant Garamond, serif" fontStyle="italic" fontSize="11">
            Menu
          </text>
          <line x1="132" y1="38" x2="156" y2="38" stroke="#1C2D5A" strokeOpacity="0.28" strokeWidth="1" />
          <line x1="134" y1="46" x2="154" y2="46" stroke="#1C2D5A" strokeOpacity="0.22" strokeWidth="1" />
          <line x1="132" y1="54" x2="156" y2="54" stroke="#1C2D5A" strokeOpacity="0.28" strokeWidth="1" />
          <line x1="136" y1="62" x2="152" y2="62" stroke="#EAA227" strokeWidth="1.2" />
          {/* Gift Tag */}
          <path d="M178 24 L196 24 L196 76 L178 76 L178 24 Z" fill="#1C2D5A" />
          <circle cx="187" cy="31" r="2" fill="#FAF8F5" />
          <line x1="183" y1="44" x2="191" y2="44" stroke="#EAA227" strokeWidth="1" />
          <line x1="183" y1="52" x2="191" y2="52" stroke="#FAF8F5" strokeOpacity="0.5" strokeWidth="1" />
        </svg>
      );
  }
};

export const WhatWeCreate: React.FC = () => {
  return (
    <section id="o-que-criamos" className="py-24 sm:py-32 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs uppercase tracking-[0.35em] text-[#1C2D5A] font-semibold block mb-3">
            O que criamos
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1A1A1A] font-normal leading-tight"
            style={{ textWrap: 'balance' }}
          >
            Um universo visual criado para o seu momento.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#524C44] font-light max-w-xl mx-auto">
            Cada elemento gráfico é elaborado sob medida para compor a atmosfera da sua celebração.
          </p>
        </div>

        {/* Editorial Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {DELIVERABLES.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.06 }}
              className="flex flex-col justify-between pt-6 border-t border-[#E2D9CB] group transition-colors duration-300"
            >
              <div>
                {/* Top Number & Unboxed Editorial Subtitle */}
                <div className="flex justify-between items-baseline mb-4">
                  <span className="font-serif italic text-2xl text-[#1C2D5A]/55 group-hover:text-[#1C2D5A] transition-colors tabular-nums">
                    {item.number}
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.18em] text-[#5E564B] font-medium">
                    {item.subtitle}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-serif text-[#1A1A1A] group-hover:text-[#1C2D5A] transition-colors mb-2 font-normal">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#4F4A42] font-light leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Bespoke Editorial Artwork Preview */}
              <div className="w-full h-24 bg-[#F5F0E8] rounded-xl border border-[#E5DDD0] flex items-center justify-center p-2 transition-colors duration-300 group-hover:bg-[#EFE7DC] group-hover:border-[#D4C7B4] overflow-hidden">
                <DeliverableArtwork id={item.id} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
