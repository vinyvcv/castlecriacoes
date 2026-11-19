import React, { useEffect, useRef, useState } from 'react';
import { Heart } from 'lucide-react';
import { CastleLogo } from './CastleLogo';

interface FinalCTAProps {
  onOpenStoryModal: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenStoryModal }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const fadeInUpBase =
    'transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0';
  const fadeInUpState = isVisible
    ? 'opacity-100 translate-y-0'
    : 'opacity-0 translate-y-5';

  return (
    <section
      id="contato"
      className="mt-8 sm:mt-12 py-32 sm:py-44 bg-[#F5F0E8] border-t border-[#E0DCD5] relative overflow-hidden"
    >
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#EAE2D2]/60 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-6 text-center">
        <div
          id="final-cta-section"
          ref={containerRef}
          className={`bg-[#FAF8F5] rounded-3xl px-8 py-14 sm:px-14 sm:py-20 md:px-16 md:py-24 border border-[#E5DDD0] shadow-xl relative ${fadeInUpBase} ${fadeInUpState}`}
        >
          {/* Logo Mark Header */}
          <div
            className={`mb-8 flex justify-center delay-75 ${fadeInUpBase} ${fadeInUpState}`}
          >
            <CastleLogo variant="full" className="w-28 sm:w-36 h-auto" />
          </div>

          {/* Minimalist Vertical Hairline Divider */}
          <div
            className={`flex flex-col items-center mb-8 delay-100 ${fadeInUpBase} ${fadeInUpState}`}
            aria-hidden="true"
          >
            <span className="w-px h-10 bg-gradient-to-b from-[#1C2D5A]/10 via-[#1C2D5A]/35 to-[#EAA227]/70" />
            <span className="w-1.5 h-1.5 rotate-45 bg-[#EAA227]/80 mt-1" />
          </div>

          {/* Section Main Title with 1px Solid #E0DCD5 Top Border */}
          <h2
            className={`border-t border-solid border-[#E0DCD5] pt-8 sm:pt-10 text-3xl sm:text-4xl md:text-5xl font-serif text-[#1A1A1A] font-normal leading-tight mb-7 sm:mb-9 delay-150 ${fadeInUpBase} ${fadeInUpState}`}
            style={{ textWrap: 'balance' }}
          >
            Vamos criar algo que tenha a sua história?
          </h2>

          {/* Description + Button Stack with 48px Gap */}
          <div className="flex flex-col items-center gap-[48px]">
            <p
              className={`text-base sm:text-lg text-[#4A4A4A] font-light leading-relaxed max-w-2xl mx-auto font-sans delay-200 ${fadeInUpBase} ${fadeInUpState}`}
            >
              Conte-nos um pouco sobre a sua celebração. Queremos conhecer as histórias, referências e detalhes que tornarão esse momento único.
            </p>

            <div className={`delay-300 ${fadeInUpBase} ${fadeInUpState}`}>
              <button
                type="button"
                onClick={onOpenStoryModal}
                className="inline-flex items-center justify-center px-10 py-4 text-xs sm:text-sm tracking-widest uppercase font-semibold text-white bg-[#1C2D5A] rounded-full shadow-md hover:bg-[#0F1E40] transition-all duration-300 hover:scale-105 space-x-2.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C2D5A]"
              >
                <Heart className="w-4 h-4 text-[#D81B60]" />
                <span>Quero criar minha identidade</span>
              </button>
            </div>
          </div>

          {/* Subtext */}
          <p
            className={`text-xs text-[#5E564B] font-serif italic mt-10 delay-300 ${fadeInUpBase} ${fadeInUpState}`}
          >
            Atendimento exclusivo sob agendamento prévio.
          </p>
        </div>
      </div>
    </section>
  );
};
