import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Heart, Sparkles, Copy, Check } from 'lucide-react';
import { CastleLogo } from './CastleLogo';

interface StoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StoryModal: React.FC<StoryModalProps> = ({ isOpen, onClose }) => {
  const [eventType, setEventType] = useState('casamento');
  const [storyText, setStoryText] = useState('');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyDraft = () => {
    const textToCopy = `[ Castle Criações - Briefing Inicial ]\nCelebração: ${eventType}\nHistória e Referências:\n${storyText || 'Nenhuma nota adicionada.'}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

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
          className="relative w-full max-w-2xl bg-[#FAF8F5] rounded-3xl shadow-2xl overflow-hidden z-10 my-8 border border-[#E8E1D5]"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-20 p-2 text-[#2C2C2C] bg-white/80 hover:bg-white rounded-full shadow-md transition-all focus:outline-none"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="p-6 sm:p-10 md:p-12">
            {/* Logo & Header */}
            <div className="text-center mb-8">
              <div className="inline-block mb-3">
                <CastleLogo variant="text-only" className="scale-90" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif text-[#1A1A1A] font-normal">
                Conte-nos a sua história
              </h3>
              <p className="text-xs sm:text-sm text-[#5A5A5A] font-light mt-2 max-w-md mx-auto font-sans">
                Antes de iniciarmos o processo de criação, gostamos de ouvir sobre as memórias, sentimentos e preferências que tornarão seu momento único.
              </p>
            </div>

            {/* Helper Inputs */}
            <div className="space-y-6 text-left">
              <div>
                <label className="block text-xs uppercase tracking-widest font-semibold text-[#1C2D5A] mb-2">
                  Qual é a sua celebração?
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'casamento', label: 'Casamento' },
                    { id: '15-anos', label: '15 Anos' },
                    { id: 'infantil', label: 'Festa Infantil' },
                    { id: 'outra', label: 'Outra' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setEventType(item.id)}
                      className={`px-3 py-2 text-xs rounded-xl border text-center transition-all ${
                        eventType === item.id
                          ? 'bg-[#1C2D5A] text-white border-[#1C2D5A] font-medium'
                          : 'bg-white text-[#4A4A4A] border-[#E2D8C8] hover:border-[#1C2D5A]'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest font-semibold text-[#1C2D5A] mb-2">
                  Quais memórias, cores ou histórias inspiram você?
                </label>
                <textarea
                  rows={4}
                  value={storyText}
                  onChange={(e) => setStoryText(e.target.value)}
                  placeholder="Ex: 'Nos conhecemos em uma viagem à praia', 'Minha avó adorava hortênsias azuis', 'Gostamos de tons terrosos e papelaria artesanal'..."
                  className="w-full p-4 text-xs sm:text-sm rounded-2xl bg-white border border-[#E2D8C8] text-[#2C2C2C] placeholder-[#A09686] focus:outline-none focus:border-[#1C2D5A] focus:ring-1 focus:ring-[#1C2D5A] transition-all font-sans"
                />
              </div>

              {/* Informative Note */}
              <div className="p-4 bg-[#F4EFEA] rounded-2xl border border-[#E2D8C8] flex items-start space-x-3">
                <Sparkles className="w-5 h-5 text-[#EAA227] flex-shrink-0 mt-0.5" />
                <p className="text-xs text-[#555555] leading-relaxed font-sans">
                  Esta primeira etapa destina-se à estruturação visual do site. Guarde suas anotações ou copie o rascunho para compartilhar em nosso atendimento oficial.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="button"
                  onClick={handleCopyDraft}
                  className="w-full py-3.5 px-6 text-xs uppercase tracking-widest font-medium text-[#1C2D5A] bg-white border border-[#1C2D5A] rounded-full hover:bg-[#F2EDE4] transition-colors flex items-center justify-center space-x-2"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? 'Rascunho copiado!' : 'Copiar minhas anotações'}</span>
                </button>

                <button
                  type="button"
                  onClick={onClose}
                  className="w-full py-3.5 px-6 text-xs uppercase tracking-widest font-semibold text-white bg-[#1C2D5A] rounded-full hover:bg-[#0F1E40] transition-colors flex items-center justify-center space-x-2 shadow-xs"
                >
                  <Heart className="w-4 h-4 text-[#D81B60]" />
                  <span>Concluir leitura</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
