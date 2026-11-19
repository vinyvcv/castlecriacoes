import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Eye } from 'lucide-react';
import { CategoryType, PortfolioItem } from '../types';
import { PORTFOLIO_PROJECTS } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

interface PortfolioProps {
  onOpenStoryModal: () => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onOpenStoryModal }) => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('todos');
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

  const filterCategories: { key: CategoryType; label: string }[] = [
    { key: 'todos', label: 'Todos' },
    { key: 'casamentos', label: 'Casamentos' },
    { key: '15-anos', label: '15 Anos' },
    { key: 'infantil', label: 'Infantil' },
    { key: 'outras', label: 'Outras Celebrações' },
  ];

  const filteredProjects = activeCategory === 'todos'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 sm:py-32 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs uppercase tracking-[0.35em] text-[#1C2D5A] font-semibold block mb-3">
            HISTÓRIAS QUE GANHARAM FORMA
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1A1A1A] font-normal leading-tight">
            Projetos Castle
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#5A5A5A] font-light max-w-xl mx-auto">
            Cada identidade nasce de uma história diferente. Por isso, nenhuma se parece com a outra.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12 sm:mb-16">
          {filterCategories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-5 py-2.5 text-xs tracking-widest uppercase transition-all duration-300 rounded-full font-medium ${
                activeCategory === cat.key
                  ? 'bg-[#1C2D5A] text-white shadow-sm'
                  : 'bg-[#F2EDE4] text-[#5A5A5A] hover:bg-[#E8E1D5] hover:text-[#1C2D5A]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Editorial Masonry/Asymmetric Grid Layout */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {filteredProjects.map((project, index) => {
              // Vary heights for editorial masonry feel
              const heightClass =
                project.aspectRatio === 'tall'
                  ? 'h-[420px] sm:h-[460px]'
                  : project.aspectRatio === 'portrait'
                  ? 'h-[360px] sm:h-[400px]'
                  : 'h-[300px] sm:h-[340px]';

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  onClick={() => setSelectedProject(project)}
                  className={`group relative rounded-2xl overflow-hidden cursor-pointer bg-[#F3ECE0] border border-[#E5DDD0] shadow-2xs hover:shadow-lg transition-all duration-500 ${heightClass}`}
                >
                  {/* Subtle Placeholder Graphic Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-between items-center text-center bg-gradient-to-b from-[#F5F0E8] to-[#EBE3D5] group-hover:scale-105 transition-transform duration-700">
                    <div className="w-full flex justify-between items-center text-[10px] uppercase tracking-widest text-[#8A8070]">
                      <span>Castle Portfolio</span>
                      <span>{project.categoryLabel}</span>
                    </div>

                    <div className="my-auto px-4">
                      <Sparkles className="w-6 h-6 text-[#EAA227] mx-auto mb-3 opacity-60" />
                      <p className="font-serif italic text-lg sm:text-xl text-[#1C2D5A] font-medium leading-snug">
                        {project.placeholderText}
                      </p>
                      <p className="text-[11px] font-sans text-[#7A7A7A] mt-2 font-light">
                        {project.subtitle}
                      </p>
                    </div>

                    <div className="text-[10px] uppercase tracking-widest text-[#8A8070]">
                      Exclusivo & Autoral
                    </div>
                  </div>

                  {/* Discrete Hover Overlay */}
                  <div className="absolute inset-0 bg-[#1C2D5A]/90 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-8 flex flex-col justify-between items-center text-center backdrop-blur-xs">
                    <div className="text-[10px] uppercase tracking-[0.3em] text-[#E0E7F5]">
                      {project.categoryLabel}
                    </div>

                    <div className="my-auto">
                      <h3 className="font-serif text-2xl font-normal text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-xs font-sans text-[#D0D9EB] font-light max-w-xs mx-auto line-clamp-3">
                        {project.story}
                      </p>
                    </div>

                    <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-white border-b border-white/40 pb-1 group-hover:border-white transition-colors">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Ver projeto</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Note about real projects */}
        <div className="mt-16 text-center text-xs text-[#8A8070] italic font-serif max-w-lg mx-auto">
          * As áreas de portfólio encontram-se estruturadas com placeholders elegantes e serão atualizadas na próxima etapa com as galerias e fotografias reais dos projetos Castle.
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenStoryModal={onOpenStoryModal}
      />
    </section>
  );
};
