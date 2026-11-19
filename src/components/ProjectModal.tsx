import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Sparkles, Heart } from 'lucide-react';
import { PortfolioItem } from '../types';
import { CastleLogo } from './CastleLogo';

interface ProjectModalProps {
  project: PortfolioItem | null;
  onClose: () => void;
  onOpenStoryModal: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onOpenStoryModal
}) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#1A1A1A]/70 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl bg-[#FAF8F5] rounded-3xl shadow-2xl overflow-hidden z-10 my-8 border border-[#E8E1D5]"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-20 p-2 text-[#2C2C2C] bg-white/80 hover:bg-white rounded-full shadow-md transition-all focus:outline-none"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="p-6 sm:p-10 md:p-12 max-h-[85vh] overflow-y-auto">
            {/* Top Tag & Logo */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b border-[#EBE4D8]">
              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-[#1C2D5A] bg-[#EEFAF3] px-3 py-1 rounded-full border border-[#1C2D5A]/10">
                  {project.categoryLabel}
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-[#1A1A1A] font-normal mt-2">
                  {project.title}
                </h3>
                {project.clientNames && (
                  <p className="text-xs text-[#7A7A7A] font-sans mt-0.5">
                    {project.clientNames} {project.location ? `· ${project.location}` : ''}
                  </p>
                )}
              </div>
              <CastleLogo variant="text-only" className="scale-75 origin-right" />
            </div>

            {/* Main Featured Placeholder Frame */}
            <div className="my-8 w-full h-64 sm:h-80 bg-[#F4EFEA] rounded-2xl border border-dashed border-[#D5C9B8] flex flex-col items-center justify-center p-6 text-center relative overflow-hidden group">
              <Sparkles className="w-8 h-8 text-[#EAA227] mb-3 opacity-60" />
              <p className="font-serif italic text-xl sm:text-2xl text-[#1C2D5A] font-medium">
                {project.placeholderText}
              </p>
              <p className="text-xs text-[#8A8070] font-sans mt-2 max-w-md">
                Espaço reservado para o portfólio definitivo com galerias de fotos reais das aplicações Castle.
              </p>
            </div>

            {/* Story & Concept Section */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 my-8">
              <div className="md:col-span-7 space-y-4">
                <h4 className="text-xs uppercase tracking-widest text-[#1C2D5A] font-semibold">
                  A História por Trás do Projeto
                </h4>
                <p className="text-sm sm:text-base text-[#4A4A4A] font-light leading-relaxed">
                  {project.story}
                </p>
              </div>

              {/* Elements & Palette */}
              <div className="md:col-span-5 bg-[#F5F0E8] rounded-2xl p-6 space-y-5 border border-[#E5DDD0]">
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-[#1C2D5A] font-semibold mb-2">
                    Elementos Criados
                  </h4>
                  <ul className="space-y-1.5 text-xs text-[#3A3A3A] font-sans">
                    {project.elements.map((elem, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1C2D5A]" />
                        <span>{elem}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-widest text-[#1C2D5A] font-semibold mb-2">
                    Paleta de Cores
                  </h4>
                  <div className="flex space-x-3">
                    {project.colorPalette.map((color, idx) => (
                      <div key={idx} className="flex flex-col items-center">
                        <div
                          className="w-7 h-7 rounded-full border border-black/10 shadow-xs"
                          style={{ backgroundColor: color }}
                        />
                        <span className="text-[9px] text-[#8C8275] uppercase mt-1 font-mono">
                          {color}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Project Gallery Placeholders */}
            <div className="space-y-4 pt-4 border-t border-[#EBE4D8]">
              <h4 className="text-xs uppercase tracking-widest text-[#1C2D5A] font-semibold">
                Detalhes & Aplicações da Identidade
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="h-28 bg-[#F0EADF] rounded-xl border border-dashed border-[#D5C9B8] flex items-center justify-center p-2 text-center text-xs font-serif italic text-[#1C2D5A]">
                  [ Detalhe — Monograma ]
                </div>
                <div className="h-28 bg-[#F0EADF] rounded-xl border border-dashed border-[#D5C9B8] flex items-center justify-center p-2 text-center text-xs font-serif italic text-[#1C2D5A]">
                  [ Detalhe — Papelaria ]
                </div>
                <div className="h-28 bg-[#F0EADF] rounded-xl border border-dashed border-[#D5C9B8] flex items-center justify-center p-2 text-center text-xs font-serif italic text-[#1C2D5A]">
                  [ Detalhe — Celebração ]
                </div>
              </div>
            </div>

            {/* Modal Bottom CTA */}
            <div className="mt-8 pt-6 border-t border-[#EBE4D8] flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-[#6A6A6A] italic font-serif text-center sm:text-left">
                Gostou do conceito deste projeto? Podemos criar um universo exclusivo para você.
              </p>
              <button
                onClick={() => {
                  onClose();
                  onOpenStoryModal();
                }}
                className="w-full sm:w-auto px-6 py-3 text-xs uppercase tracking-widest font-medium text-white bg-[#1C2D5A] rounded-full hover:bg-[#0F1E40] transition-colors flex items-center justify-center space-x-2"
              >
                <Heart className="w-3.5 h-3.5 text-[#D81B60]" />
                <span>Solicitar Identidade Afetiva</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
