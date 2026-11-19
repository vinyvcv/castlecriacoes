import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Heart } from 'lucide-react';
import { PortfolioItem, StoryEventType } from '../types';
import { CastleLogo } from './CastleLogo';
import { EditorialImage } from './EditorialImage';

interface ProjectModalProps {
  project: PortfolioItem | null;
  onClose: () => void;
  onOpenStoryModal: (eventType?: StoryEventType) => void;
}

const mapCategoryToEventType = (
  category: PortfolioItem['category']
): StoryEventType => {
  switch (category) {
    case 'casamentos':
      return 'casamento';
    case '15-anos':
      return '15-anos';
    case 'infantil':
      return 'infantil';
    default:
      return 'outra';
  }
};

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onOpenStoryModal,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState<number>(-1);

  // Reset selected gallery preview whenever project changes
  useEffect(() => {
    setActiveImageIndex(-1);
  }, [project?.id]);

  // Escape key close + body scroll lock
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const gallery = project.galleryImages || [];
  const defaultGalleryLabels = [
    'Detalhe — Monograma',
    'Detalhe — Papelaria',
    'Detalhe — Celebração',
  ];
  const featuredImage =
    activeImageIndex >= 0 && gallery[activeImageIndex]
      ? gallery[activeImageIndex]
      : project.coverImage;
  const featuredCaption =
    activeImageIndex >= 0
      ? project.galleryLabels?.[activeImageIndex] ||
        defaultGalleryLabels[activeImageIndex] ||
        project.subtitle
      : project.subtitle;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
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
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-4xl bg-[#FAF8F5] rounded-3xl shadow-2xl overflow-hidden z-10 my-8 border border-[#E8E1D5]"
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 z-20 p-2.5 text-[#1C2D5A] bg-white/90 hover:bg-white rounded-full shadow-md transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C2D5A]"
            aria-label="Fechar janela do projeto"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="p-6 sm:p-10 md:p-12 max-h-[85vh] overflow-y-auto">
            {/* Top Tag & Logo */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b border-[#EBE4D8]">
              <div>
                <span className="inline-block text-[10px] uppercase tracking-[0.28em] font-semibold text-[#1C2D5A] bg-[#F2EDE4] px-3 py-1 rounded-full border border-[#1C2D5A]/15">
                  {project.categoryLabel}
                </span>
                <h3
                  id="project-modal-title"
                  className="text-2xl sm:text-3xl font-serif text-[#1A1A1A] font-normal mt-2"
                >
                  {project.title}
                </h3>
                {project.clientNames && (
                  <p className="text-xs text-[#5A5248] font-sans mt-0.5">
                    {project.clientNames}
                    {project.location ? ` · ${project.location}` : ''}
                  </p>
                )}
              </div>
              <CastleLogo variant="text-only" className="scale-75 origin-left sm:origin-right" />
            </div>

            {/* Main Featured Editorial Image */}
            <div className="my-8 relative w-full h-64 sm:h-96 bg-[#F4EFEA] rounded-2xl border border-[#E5DDD0] overflow-hidden">
              <EditorialImage
                src={featuredImage}
                alt={`${project.title} — ${featuredCaption}`}
                fallbackTitle={project.clientNames || project.title}
                fallbackSubtitle={featuredCaption}
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#121D3A]/80 via-[#121D3A]/20 to-transparent px-5 py-3.5 flex items-center justify-between text-white">
                <span className="font-serif italic text-sm sm:text-base">
                  {featuredCaption}
                </span>
                {activeImageIndex >= 0 && (
                  <button
                    type="button"
                    onClick={() => setActiveImageIndex(-1)}
                    className="text-[10px] uppercase tracking-widest text-[#EAE2D6] hover:text-white underline underline-offset-4"
                  >
                    Ver capa principal
                  </button>
                )}
              </div>
            </div>

            {/* Story & Concept Section */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 my-8">
              <div className="md:col-span-7 space-y-4">
                <h4 className="text-xs uppercase tracking-widest text-[#1C2D5A] font-semibold">
                  A História por Trás do Projeto
                </h4>
                <p className="text-sm sm:text-base text-[#44403A] font-light leading-relaxed">
                  {project.story}
                </p>
              </div>

              {/* Elements & Palette */}
              <div className="md:col-span-5 bg-[#F5F0E8] rounded-2xl p-6 space-y-5 border border-[#E5DDD0]">
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-[#1C2D5A] font-semibold mb-2">
                    Elementos Criados
                  </h4>
                  <ul className="space-y-1.5 text-xs text-[#3A3631] font-sans">
                    {project.elements.map((elem, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#1C2D5A] shrink-0" />
                        <span>{elem}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-widest text-[#1C2D5A] font-semibold mb-2">
                    Paleta de Cores
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {project.colorPalette.map((color, idx) => (
                      <div key={idx} className="flex flex-col items-center">
                        <div
                          className="w-7 h-7 rounded-full border border-black/15 shadow-xs"
                          style={{ backgroundColor: color }}
                        />
                        <span className="text-[10px] text-[#5A5248] uppercase mt-1 font-mono">
                          {color}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Real Project Gallery Thumbnails */}
            <div className="space-y-4 pt-4 border-t border-[#EBE4D8]">
              <div className="flex items-center justify-between">
                <h4 className="text-xs uppercase tracking-widest text-[#1C2D5A] font-semibold">
                  Detalhes & Aplicações da Identidade
                </h4>
                <span className="text-[11px] text-[#5E564B] font-sans">
                  Clique para ampliar
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {(gallery.length > 0 ? gallery : [undefined, undefined, undefined]).map(
                  (imgSrc, idx) => {
                    const label =
                      project.galleryLabels?.[idx] ||
                      defaultGalleryLabels[idx] ||
                      `Aplicação ${idx + 1}`;
                    const isSelected = activeImageIndex === idx;

                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setActiveImageIndex(idx)}
                        className={`group relative h-32 rounded-xl overflow-hidden border text-left transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C2D5A] ${
                          isSelected
                            ? 'border-[#1C2D5A] ring-2 ring-[#1C2D5A]/25'
                            : 'border-[#E2D8C8] hover:border-[#1C2D5A]/60'
                        }`}
                      >
                        <EditorialImage
                          src={imgSrc}
                          alt={`${project.title} — ${label}`}
                          fallbackTitle={label}
                          className="transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#121D3A]/80 via-transparent to-transparent" />
                        <span className="absolute bottom-2.5 left-3 right-3 text-xs font-serif italic text-white leading-tight">
                          {label}
                        </span>
                      </button>
                    );
                  }
                )}
              </div>
            </div>

            {/* Modal Bottom CTA */}
            <div className="mt-8 pt-6 border-t border-[#EBE4D8] flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-[#554E45] italic font-serif text-center sm:text-left">
                Gostou do conceito deste projeto? Podemos criar um universo exclusivo para você.
              </p>
              <button
                type="button"
                onClick={() => {
                  const targetEventType = mapCategoryToEventType(project.category);
                  onClose();
                  onOpenStoryModal(targetEventType);
                }}
                className="w-full sm:w-auto px-6 py-3 text-xs uppercase tracking-widest font-medium text-white bg-[#1C2D5A] rounded-full hover:bg-[#0F1E40] transition-colors flex items-center justify-center space-x-2 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C2D5A]"
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
