import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Copy, Check, MessageCircle } from 'lucide-react';
import { CastleLogo } from './CastleLogo';
import { StoryEventType } from '../types';
import {
  buildWhatsAppUrl,
  formatStoryBriefingMessage,
} from '../config/contact';

interface StoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialEventType?: StoryEventType;
}

const EVENT_OPTIONS: { id: StoryEventType; label: string }[] = [
  { id: 'casamento', label: 'Casamento' },
  { id: '15-anos', label: '15 Anos' },
  { id: 'infantil', label: 'Festa Infantil' },
  { id: 'outra', label: 'Outra' },
];

export const StoryModal: React.FC<StoryModalProps> = ({
  isOpen,
  onClose,
  initialEventType = 'casamento',
}) => {
  const [fullName, setFullName] = useState('');
  const [eventType, setEventType] = useState<StoryEventType>(initialEventType);
  const [eventDate, setEventDate] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const [storyText, setStoryText] = useState('');
  const [copied, setCopied] = useState(false);

  // Keep eventType synced with clicked Celebrations / Portfolio card
  useEffect(() => {
    if (isOpen && initialEventType) {
      setEventType(initialEventType);
    }
  }, [isOpen, initialEventType]);

  // Escape key close + body scroll lock
  useEffect(() => {
    if (!isOpen) return;

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
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const formattedMessage = formatStoryBriefingMessage({
    fullName,
    eventType,
    eventDate,
    eventLocation,
    storyText,
  });

  const whatsappUrl = buildWhatsAppUrl(formattedMessage);

  const handleCopyDraft = () => {
    navigator.clipboard.writeText(formattedMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="story-modal-title"
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
          className="relative w-full max-w-2xl bg-[#FAF8F5] rounded-3xl shadow-2xl overflow-hidden z-10 my-8 border border-[#E8E1D5]"
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 z-20 p-2.5 text-[#1C2D5A] bg-white/90 hover:bg-white rounded-full shadow-md transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C2D5A]"
            aria-label="Fechar formulário de história"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="p-6 sm:p-10 md:p-12 max-h-[88vh] overflow-y-auto">
            {/* Logo & Header */}
            <div className="text-center mb-7">
              <div className="inline-block mb-3">
                <CastleLogo variant="text-only" className="scale-90" />
              </div>
              <h3
                id="story-modal-title"
                className="text-2xl sm:text-3xl font-serif text-[#1A1A1A] font-normal"
              >
                Conte-nos a sua história
              </h3>
              <p className="text-xs sm:text-sm text-[#524C44] font-light mt-2 max-w-md mx-auto font-sans">
                Compartilhe os primeiros detalhes da sua celebração para iniciarmos o atendimento personalizado pelo WhatsApp.
              </p>
            </div>

            {/* Briefing Form Fields */}
            <div className="space-y-5 text-left">
              {/* Celebration Type Selector */}
              <div>
                <label className="block text-xs uppercase tracking-widest font-semibold text-[#1C2D5A] mb-2">
                  Qual é a sua celebração?
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {EVENT_OPTIONS.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setEventType(item.id)}
                      className={`px-3 py-2.5 text-xs rounded-xl border text-center transition-all whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C2D5A] ${
                        eventType === item.id
                          ? 'bg-[#1C2D5A] text-white border-[#1C2D5A] font-medium shadow-2xs'
                          : 'bg-white text-[#44403A] border-[#DED4C5] hover:border-[#1C2D5A]'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Full Name */}
              <div>
                <label
                  htmlFor="story-full-name"
                  className="block text-xs uppercase tracking-widest font-semibold text-[#1C2D5A] mb-2"
                >
                  Nome completo
                </label>
                <input
                  id="story-full-name"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Ex: Isabela Mendes e Gabriel Souza"
                  className="w-full px-4 py-3 text-xs sm:text-sm rounded-2xl bg-white border border-[#DED4C5] text-[#2C2C2C] placeholder-[#7C7366] focus:outline-none focus:border-[#1C2D5A] focus:ring-1 focus:ring-[#1C2D5A] transition-all font-sans"
                />
              </div>

              {/* Date & City/Location Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="story-event-date"
                    className="block text-xs uppercase tracking-widest font-semibold text-[#1C2D5A] mb-2"
                  >
                    Data prevista (ou mês/ano)
                  </label>
                  <input
                    id="story-event-date"
                    type="text"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    placeholder="Ex: Outubro de 2026"
                    className="w-full px-4 py-3 text-xs sm:text-sm rounded-2xl bg-white border border-[#DED4C5] text-[#2C2C2C] placeholder-[#7C7366] focus:outline-none focus:border-[#1C2D5A] focus:ring-1 focus:ring-[#1C2D5A] transition-all font-sans"
                  />
                </div>

                <div>
                  <label
                    htmlFor="story-event-location"
                    className="block text-xs uppercase tracking-widest font-semibold text-[#1C2D5A] mb-2"
                  >
                    Cidade / Local do evento
                  </label>
                  <input
                    id="story-event-location"
                    type="text"
                    value={eventLocation}
                    onChange={(e) => setEventLocation(e.target.value)}
                    placeholder="Ex: Serra Gaúcha, RS"
                    className="w-full px-4 py-3 text-xs sm:text-sm rounded-2xl bg-white border border-[#DED4C5] text-[#2C2C2C] placeholder-[#7C7366] focus:outline-none focus:border-[#1C2D5A] focus:ring-1 focus:ring-[#1C2D5A] transition-all font-sans"
                  />
                </div>
              </div>

              {/* Story & Memories */}
              <div>
                <label
                  htmlFor="story-notes"
                  className="block text-xs uppercase tracking-widest font-semibold text-[#1C2D5A] mb-2"
                >
                  Quais memórias, cores ou histórias inspiram você?
                </label>
                <textarea
                  id="story-notes"
                  rows={4}
                  value={storyText}
                  onChange={(e) => setStoryText(e.target.value)}
                  placeholder="Ex: 'Nos conhecemos em uma viagem à praia', 'Minha avó adorava hortênsias azuis', 'Gostamos de tons terrosos e papelaria artesanal'..."
                  className="w-full p-4 text-xs sm:text-sm rounded-2xl bg-white border border-[#DED4C5] text-[#2C2C2C] placeholder-[#7C7366] focus:outline-none focus:border-[#1C2D5A] focus:ring-1 focus:ring-[#1C2D5A] transition-all font-sans"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col-reverse sm:flex-row items-center gap-3">
                <button
                  type="button"
                  onClick={handleCopyDraft}
                  className="w-full py-3.5 px-6 text-xs uppercase tracking-widest font-medium text-[#1C2D5A] bg-white border border-[#1C2D5A]/60 rounded-full hover:bg-[#F2EDE4] transition-colors flex items-center justify-center space-x-2 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C2D5A]"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-[#1E6548]" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                  <span>{copied ? 'Anotações copiadas!' : 'Copiar minhas anotações'}</span>
                </button>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-6 text-xs uppercase tracking-widest font-semibold text-white bg-[#1C2D5A] rounded-full hover:bg-[#0F1E40] transition-colors flex items-center justify-center space-x-2 shadow-sm whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C2D5A]"
                >
                  <MessageCircle className="w-4 h-4 text-[#EAA227]" />
                  <span>Enviar pelo WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
