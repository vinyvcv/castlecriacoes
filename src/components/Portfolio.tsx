import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Eye } from 'lucide-react';
import { CategoryType, PortfolioItem, StoryEventType } from '../types';
import { PORTFOLIO_PROJECTS } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { EditorialImage } from './EditorialImage';

interface PortfolioProps {
  onOpenStoryModal: (eventType?: StoryEventType) => void;
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

  const filteredProjects =
    activeCategory === 'todos'
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 sm:py-32 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs uppercase tracking-[0.35em] text-[#1C2D5A] font-semibold block mb-3">
            Histórias que ganharam forma
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#1A1A1A] font-normal leading-tight"
            style={{ textWrap: 'balance' }}
          >
            Projetos Castle
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#524C44] font-light max-w-xl mx-auto">
            Cada identidade nasce de uma história diferente. Por isso, nenhuma se parece com a outra.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12 sm:mb-16">
          {filterCategories.map((cat) => (
            <button
              key={cat.key}
              type="button"
              onClick={() => setActiveCategory(cat.key)}
              className={`px-5 py-2.5 text-xs tracking-widest uppercase transition-all duration-300 rounded-full font-medium whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C2D5A] ${
                activeCategory === cat.key
                  ? 'bg-[#1C2D5A] text-white shadow-sm'
                  : 'bg-[#F2EDE4] text-[#4F4A42] hover:bg-[#E8E1D5] hover:text-[#1C2D5A]'
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
            transition={{ duration: 0.45 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {filteredProjects.map((project, index) => (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  onClick={() => setSelectedProject(project)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedProject(project);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label={`Ver projeto ${project.clientNames || project.title}`}
                  className="group relative aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer bg-[#F3ECE0] border border-[#E5DDD0] shadow-2xs hover:shadow-lg transition-all duration-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C2D5A]"
                >
                  {/* Real Cover Image with Smooth Zoom & Fallback */}
                  <div className="absolute inset-0">
                    <EditorialImage
                      src={project.coverImage}
                      alt={`${project.title} — ${project.clientNames || project.subtitle}`}
                      fallbackTitle={project.clientNames || project.title}
                      fallbackSubtitle={project.subtitle}
                      className="transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Measured Bottom Gradient Scrim for Rest-State Legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121D3A]/85 via-[#121D3A]/20 to-transparent transition-opacity duration-300 group-hover:opacity-0" />

                  {/* Rest-State Editorial Caption */}
                  <div className="absolute inset-x-0 bottom-0 p-6 text-left text-white transition-opacity duration-300 group-hover:opacity-0">
                    <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-[#EAE2D6] mb-1.5">
                      <span>{project.categoryLabel}</span>
                      {project.location && (
                        <>
                          <span aria-hidden="true">·</span>
                          <span>{project.location}</span>
                        </>
                      )}
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl font-normal text-white leading-snug">
                      {project.clientNames || project.title}
                    </h3>
                    <p className="text-xs font-sans text-[#E4DFD5] font-light mt-1">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Discrete Hover Overlay */}
                  <div className="absolute inset-0 bg-[#1C2D5A]/92 text-white opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-300 p-8 flex flex-col justify-between items-center text-center backdrop-blur-[2px]">
                    <div className="text-[10px] uppercase tracking-[0.3em] text-[#E0E7F5]">
                      {project.categoryLabel}
                      {project.location ? ` · ${project.location}` : ''}
                    </div>

                    <div className="my-auto">
                      <h3 className="font-serif text-2xl font-normal text-white mb-2">
                        {project.clientNames || project.title}
                      </h3>
                      <p className="text-xs font-sans text-[#E0E7F5] font-light max-w-xs mx-auto line-clamp-3 leading-relaxed">
                        {project.story}
                      </p>
                    </div>

                    <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-white border-b border-white/50 pb-1 group-hover:border-white transition-colors">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Ver projeto</span>
                    </div>
                  </div>
                </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>
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
