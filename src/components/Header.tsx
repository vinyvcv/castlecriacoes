import React, { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import { CastleLogo } from './CastleLogo';

interface HeaderProps {
  onOpenStoryModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenStoryModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'A Castle', href: '#manifesto' },
    { name: 'O que criamos', href: '#o-que-criamos' },
    { name: 'Portfólio', href: '#portfolio' },
    { name: 'Nosso processo', href: '#processo' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#EAE4DC] py-3 shadow-xs'
          : 'bg-transparent py-5 md:py-7'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 flex items-center justify-between gap-6 xl:gap-10">
        {/* Brand Logo Container */}
        <a
          href="#inicio"
          className="group flex items-center shrink-0 transition-opacity duration-300 hover:opacity-85 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1C2D5A] rounded"
        >
          <div className="h-10 sm:h-12 w-auto flex items-center">
            <CastleLogo variant="text-only" className="scale-90 origin-left" />
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-[11px] xl:text-xs tracking-[0.14em] xl:tracking-[0.18em] uppercase font-medium text-[#44403A]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative py-1 whitespace-nowrap shrink-0 transition-colors duration-300 hover:text-[#1C2D5A] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#1C2D5A] after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Action Button */}
        <div className="hidden lg:flex items-center shrink-0">
          <button
            type="button"
            onClick={onOpenStoryModal}
            className="group relative inline-flex items-center justify-center px-4 xl:px-5 py-2.5 text-[11px] xl:text-xs tracking-[0.14em] xl:tracking-[0.16em] uppercase font-medium text-[#1C2D5A] border border-[#1C2D5A]/45 rounded-full overflow-hidden transition-all duration-300 hover:border-[#1C2D5A] hover:bg-[#1C2D5A] hover:text-white shadow-xs whitespace-nowrap"
          >
            <span className="flex items-center space-x-1.5 z-10">
              <Heart className="w-3.5 h-3.5 text-[#D81B60] transition-transform duration-300 group-hover:scale-110 group-hover:text-white shrink-0" />
              <span>Conte-nos sua história</span>
            </span>
          </button>
        </div>

        {/* Mobile Hamburger Menu Button */}
        <div className="flex items-center lg:hidden space-x-2">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#1C2D5A] hover:bg-[#EAE4DC]/50 rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C2D5A]"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[60px] bg-[#FAF8F5] z-40 flex flex-col justify-between px-6 py-10 border-t border-[#EAE4DC]">
          <div className="flex flex-col space-y-6 pt-4 text-center">
            <div className="mb-4 flex justify-center">
              <CastleLogo variant="text-only" className="scale-110" />
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-serif tracking-wider text-[#2C2C2C] hover:text-[#1C2D5A] transition-colors py-1"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-8 border-t border-[#EAE4DC] flex flex-col items-center space-y-4">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenStoryModal();
              }}
              className="w-full py-3.5 text-xs uppercase tracking-widest font-semibold text-white bg-[#1C2D5A] rounded-full shadow-md transition-transform active:scale-95 flex items-center justify-center space-x-2"
            >
              <Heart className="w-4 h-4 text-[#D81B60]" />
              <span>Conte-nos sua história</span>
            </button>
            <p className="text-xs text-[#5E564B] font-serif tracking-wider">
              Identidade Visual Afetiva para Celebrações
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
