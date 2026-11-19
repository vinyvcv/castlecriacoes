import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Heart, Sparkles } from 'lucide-react';
import { CastleLogo } from './CastleLogo';

interface HeroProps {
  onOpenStoryModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenStoryModal }) => {
  return (
    <section id="inicio" className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex items-center justify-center overflow-hidden bg-[#FAF8F5]">
      {/* Decorative ambient background subtle gradients */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#F3ECE0]/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#E8EFF8]/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & Story Messaging */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-6 flex flex-col items-start text-left space-y-6 md:space-y-8"
          >
            {/* Top Brand Tagline */}
            <div className="inline-flex items-center space-x-2 text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.35em] uppercase font-semibold text-[#1C2D5A] border-b border-[#1C2D5A]/20 pb-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#EAA227]" />
              <span>CASTLE CRIAÇÕES · IDENTIDADE VISUAL AFETIVA</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-[#1A1A1A] leading-[1.12] tracking-tight">
              Identidades que transformam histórias em celebrações.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg font-sans text-[#4A4A4A] font-light leading-relaxed max-w-xl">
              Criamos identidades visuais afetivas e exclusivas para transformar sentimentos, memórias e histórias em cada detalhe do seu momento especial.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3.5 sm:space-y-0 sm:space-x-4 w-full sm:w-auto pt-2">
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center px-7 py-3.5 text-xs tracking-widest uppercase font-medium text-white bg-[#1C2D5A] rounded-full shadow-sm hover:bg-[#0F1E40] transition-all duration-300 hover:shadow-md text-center"
              >
                Conheça nosso trabalho
              </a>

              <button
                onClick={onOpenStoryModal}
                className="inline-flex items-center justify-center px-7 py-3.5 text-xs tracking-widest uppercase font-medium text-[#1C2D5A] border border-[#1C2D5A]/50 rounded-full hover:bg-[#1C2D5A] hover:text-white transition-all duration-300 text-center space-x-2 group"
              >
                <Heart className="w-3.5 h-3.5 text-[#D81B60] group-hover:text-white transition-colors" />
                <span>Conte-nos sua história</span>
              </button>
            </div>

            {/* Discreet scroll indicator */}
            <div className="pt-8 hidden sm:flex items-center space-x-3 text-xs text-[#7A7A7A] tracking-widest uppercase font-light">
              <a href="#manifesto" className="flex items-center space-x-2 hover:text-[#1C2D5A] transition-colors">
                <span>Role para explorar</span>
                <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#1C2D5A]" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Editorial Moodboard Layout */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-6 relative w-full h-[480px] sm:h-[560px] md:h-[600px] flex items-center justify-center my-4 lg:my-0"
          >
            {/* Background Moodboard Base Panel */}
            <div className="absolute inset-0 bg-[#F4EFEA] border border-[#E5DDD2] rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xs">
              <div className="flex justify-between items-start text-[10px] uppercase tracking-widest text-[#8C8275]">
                <span>Castle Moodboard Studio</span>
                <span>Ref. #2026.01</span>
              </div>
              <div className="flex justify-between items-end text-[10px] uppercase tracking-widest text-[#8C8275]">
                <span>Afetividade & Sensibilidade</span>
                <span>Exclusividade Autoral</span>
              </div>
            </div>

            {/* Overlapping Moodboard Frame 1: Monograma */}
            <div className="absolute top-4 left-4 sm:top-8 sm:left-6 w-48 sm:w-60 h-60 sm:h-72 bg-white rounded-2xl shadow-md border border-[#EAE2D8] p-4 flex flex-col justify-between transform -rotate-3 transition-transform duration-500 hover:rotate-0 hover:z-20 group">
              <div className="w-full h-full bg-[#FAF7F2] rounded-xl border border-dashed border-[#D8CEBF] p-4 flex flex-col items-center justify-center text-center relative overflow-hidden">
                <div className="w-16 h-16 mb-2 opacity-90 transition-transform group-hover:scale-105">
                  <CastleLogo variant="symbol-only" />
                </div>
                <p className="font-serif italic text-xs text-[#1C2D5A] mb-1 font-medium">
                  [ Projeto Castle — Monograma ]
                </p>
                <span className="text-[9px] uppercase tracking-widest text-[#8A8070] font-sans">
                  Desenho Autoral Manual
                </span>
              </div>
            </div>

            {/* Overlapping Moodboard Frame 2: Estampa & Padronagem */}
            <div className="absolute top-16 right-4 sm:top-20 sm:right-6 w-52 sm:w-64 h-52 sm:h-64 bg-white rounded-2xl shadow-lg border border-[#EAE2D8] p-4 flex flex-col justify-between transform rotate-4 transition-transform duration-500 hover:rotate-0 hover:z-20 group">
              <div className="w-full h-full bg-[#F5F0E8] rounded-xl border border-dashed border-[#D5C9B8] p-4 flex flex-col items-center justify-center text-center relative overflow-hidden">
                <div className="w-12 h-12 rounded-full border border-[#1C2D5A]/30 flex items-center justify-center mb-2 bg-white">
                  <span className="font-serif italic text-lg text-[#1C2D5A]">C</span>
                </div>
                <p className="font-serif italic text-xs text-[#1C2D5A] mb-1 font-medium">
                  [ Projeto Castle — Estampa ]
                </p>
                <span className="text-[9px] uppercase tracking-widest text-[#8A8070] font-sans">
                  Padronagem & Aquarela
                </span>
              </div>
            </div>

            {/* Overlapping Moodboard Frame 3: Identidade Completa */}
            <div className="absolute bottom-6 left-12 sm:bottom-8 sm:left-20 w-56 sm:w-72 h-44 sm:h-52 bg-[#1C2D5A] text-white rounded-2xl shadow-xl p-5 flex flex-col justify-between transform rotate-1 transition-transform duration-500 hover:rotate-0 hover:z-30">
              <div className="flex justify-between items-center text-[9px] tracking-widest uppercase text-[#D0D7E5]">
                <span>Papelaria & Aplicação</span>
                <span className="font-serif italic">Castle Studio</span>
              </div>
              <div className="my-auto text-center">
                <p className="font-serif text-sm sm:text-base italic text-[#FDFBF7] tracking-wide mb-1">
                  [ Projeto Castle — Identidade ]
                </p>
                <p className="text-[10px] font-sans text-[#A8B8D8] font-light">
                  Harmonização Afetiva para o Grande Dia
                </p>
              </div>
              <div className="flex space-x-2 justify-center">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FAF6F0]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#E5DDD0]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#D81B60]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#EAA227]" />
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
