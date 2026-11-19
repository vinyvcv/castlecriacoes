import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Manifesto } from './components/Manifesto';
import { WhatWeCreate } from './components/WhatWeCreate';
import { Portfolio } from './components/Portfolio';
import { AffectiveConcept } from './components/AffectiveConcept';
import { Process } from './components/Process';
import { Celebrations } from './components/Celebrations';
import { ImpactQuote } from './components/ImpactQuote';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { StoryModal } from './components/StoryModal';

export default function App() {
  const [storyModalOpen, setStoryModalOpen] = useState(false);

  const handleOpenStoryModal = () => {
    setStoryModalOpen(true);
  };

  const handleCloseStoryModal = () => {
    setStoryModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#2C2C2C] font-sans selection:bg-[#1C2D5A] selection:text-white">
      {/* 1. HEADER */}
      <Header onOpenStoryModal={handleOpenStoryModal} />

      {/* 2. HERO */}
      <Hero onOpenStoryModal={handleOpenStoryModal} />

      {/* 3. MANIFESTO */}
      <Manifesto />

      {/* 4. O QUE CRIAMOS */}
      <WhatWeCreate />

      {/* 5. PORTFÓLIO (PROJETOS CASTLE) */}
      <Portfolio onOpenStoryModal={handleOpenStoryModal} />

      {/* 6. CONCEITO AFETIVO */}
      <AffectiveConcept />

      {/* 7. PROCESSO */}
      <Process />

      {/* 8. TIPOS DE CELEBRAÇÃO */}
      <Celebrations onOpenStoryModal={handleOpenStoryModal} />

      {/* 9. FRASE DE IMPACTO */}
      <ImpactQuote />

      {/* 10. CTA FINAL */}
      <FinalCTA onOpenStoryModal={handleOpenStoryModal} />

      {/* 11. FOOTER */}
      <Footer />

      {/* STORY BRIEFING HELPER MODAL */}
      <StoryModal
        isOpen={storyModalOpen}
        onClose={handleCloseStoryModal}
      />
    </div>
  );
}
