import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Heart, Sparkles } from 'lucide-react';
import { HERO_MOODBOARD_IMAGES } from '../data/portfolioData';
import { EditorialImage } from './EditorialImage';

interface HeroProps {
  onOpenStoryModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenStoryModal }) => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex items-center justify-center overflow-hidden bg-[#FAF8F5]"
    >
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
            <div className="inline-flex items-center space-x-2 text-[11px] sm:text-xs tracking-[0.28em] sm:tracking-[0.35em] uppercase font-semibold text-[#1C2D5A] border-b border-[#1C2D5A]/20 pb-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#EAA227] shrink-0" />
              <span>Castle Criações · Identidade Visual Afetiva</span>
            </div>

            {/* Main Headline */}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-[#1A1A1A] leading-[1.12] tracking-tight"
              style={{ textWrap: 'balance' }}
            >
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
                className="inline-flex items-center justify-center px-7 py-3.5 text-xs tracking-widest uppercase font-medium text-white bg-[#1C2D5A] rounded-full shadow-sm hover:bg-[#0F1E40] transition-all duration-300 hover:shadow-md text-center whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C2D5A]"
              >
                Conheça nosso trabalho
              </a>

              <button
                type="button"
                onClick={onOpenStoryModal}
                className="inline-flex items-center justify-center px-7 py-3.5 text-xs tracking-widest uppercase font-medium text-[#1C2D5A] border border-[#1C2D5A]/50 rounded-full hover:bg-[#1C2D5A] hover:text-white transition-all duration-300 text-center space-x-2 group whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C2D5A]"
              >
                <Heart className="w-3.5 h-3.5 text-[#D81B60] group-hover:text-white transition-colors" />
                <span>Conte-nos sua história</span>
              </button>
            </div>

            {/* Discreet scroll indicator */}
            <div className="pt-8 hidden sm:flex items-center space-x-3 text-xs text-[#5E564B] tracking-widest uppercase font-medium">
              <a
                href="#manifesto"
                className="flex items-center space-x-2 hover:text-[#1C2D5A] transition-colors"
              >
                <span>Role para explorar</span>
                <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#1C2D5A]" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Structured Editorial Moodboard */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: 'easeOut' }}
            className="lg:col-span-6 w-full my-4 lg:my-0"
          >
            <div className="bg-[#F4EFEA] border border-[#E5DDD2] rounded-3xl p-5 sm:p-7 shadow-xs flex flex-col gap-5">
              {/* Moodboard Top Meta Bar */}
              <div className="flex justify-between items-center text-[10px] uppercase tracking-[0.22em] text-[#5E564B] font-medium">
                <span>Castle Moodboard Studio</span>
                <span>Acervo Autoral</span>
              </div>

              {/* Top Row: Two Balanced Vertical Editorial Frames */}
              <div className="grid grid-cols-2 gap-4">
                {/* Frame 1: Monograma & Lacre */}
                <div className="bg-white rounded-2xl shadow-sm border border-[#EAE2D8] p-2.5 flex flex-col group transition-shadow duration-300 hover:shadow-md">
                  <div className="w-full aspect-[4/5] rounded-xl overflow-hidden bg-[#FAF7F2]">
                    <EditorialImage
                      src={HERO_MOODBOARD_IMAGES.monogram}
                      alt="Monograma autoral em relevo azul-marinho e lacre de cera sobre papel algodão artesanal"
                      fallbackTitle="Monograma Autoral"
                      fallbackSubtitle="Desenho Manual & Lacre"
                      className="object-center transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="pt-2.5 px-1 flex items-center justify-between gap-2">
                    <span className="font-serif italic text-xs sm:text-sm text-[#1C2D5A] font-medium truncate">
                      Monograma &amp; Lacre
                    </span>
                    <span className="text-[10px] font-mono tabular-nums text-[#5E564B] shrink-0">
                      01
                    </span>
                  </div>
                </div>

                {/* Frame 2: Estampa em Aquarela */}
                <div className="bg-white rounded-2xl shadow-sm border border-[#EAE2D8] p-2.5 flex flex-col group transition-shadow duration-300 hover:shadow-md">
                  <div className="w-full aspect-[4/5] rounded-xl overflow-hidden bg-[#F5F0E8]">
                    <EditorialImage
                      src={HERO_MOODBOARD_IMAGES.pattern}
                      alt="Estampa botânica pintada em aquarela com pincel e pena de caligrafia sobre papel algodão"
                      fallbackTitle="Estampa Botânica"
                      fallbackSubtitle="Aquarela & Padronagem"
                      className="object-center transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="pt-2.5 px-1 flex items-center justify-between gap-2">
                    <span className="font-serif italic text-xs sm:text-sm text-[#1C2D5A] font-medium truncate">
                      Estampa em Aquarela
                    </span>
                    <span className="text-[10px] font-mono tabular-nums text-[#5E564B] shrink-0">
                      02
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Row: Full-Width Signature Navy Identity Feature Card */}
              <div className="bg-[#1C2D5A] text-white rounded-2xl shadow-md border border-[#2B3F75] p-3 sm:p-3.5 grid grid-cols-1 sm:grid-cols-12 gap-3.5 items-center group">
                <div className="sm:col-span-7 w-full aspect-[4/3] rounded-xl overflow-hidden bg-[#152348]">
                  <EditorialImage
                    src={HERO_MOODBOARD_IMAGES.identity}
                    alt="Suíte completa de papelaria autoral com envelopes em linho azul-marinho, fita de seda e relevo dourado"
                    fallbackTitle="Identidade Completa"
                    fallbackSubtitle="Papelaria & Aplicações"
                    className="object-center transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="sm:col-span-5 flex flex-col justify-between h-full py-1 px-1 text-left space-y-3">
                  <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-[#C8D4EA]">
                    <span>Castle Studio</span>
                    <span className="font-mono tabular-nums">03</span>
                  </div>

                  <div className="space-y-1">
                    <p className="font-serif italic text-base sm:text-lg text-[#FDFBF7] leading-snug">
                      Papelaria &amp; Universo Visual
                    </p>
                    <p className="text-[11px] font-sans text-[#C8D4EA] font-light leading-relaxed">
                      Harmonização afetiva do convite aos detalhes da celebração.
                    </p>
                  </div>

                  <div className="flex items-center space-x-2 pt-1" aria-label="Paleta assinatura Castle">
                    <span className="w-3 h-3 rounded-full bg-[#FAF6F0] border border-white/25" />
                    <span className="w-3 h-3 rounded-full bg-[#E5DDD0] border border-white/25" />
                    <span className="w-3 h-3 rounded-full bg-[#D81B60] border border-white/25" />
                    <span className="w-3 h-3 rounded-full bg-[#EAA227] border border-white/25" />
                  </div>
                </div>
              </div>

              {/* Moodboard Bottom Meta Bar */}
              <div className="flex justify-between items-center text-[10px] uppercase tracking-[0.22em] text-[#5E564B] font-medium pt-0.5">
                <span>Afetividade &amp; Sensibilidade</span>
                <span>Exclusividade Autoral</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
