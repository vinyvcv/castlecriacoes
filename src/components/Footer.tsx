import React from 'react';
import { CastleLogo } from './CastleLogo';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'A Castle', href: '#manifesto' },
    { name: 'O que criamos', href: '#o-que-criamos' },
    { name: 'Portfólio', href: '#portfolio' },
    { name: 'Nosso processo', href: '#processo' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <footer className="bg-[#FAF8F5] pt-16 pb-12 border-t border-[#EAE2D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col items-center text-center space-y-8">
          
          {/* Official Castle Logo */}
          <a href="#inicio" className="transition-opacity hover:opacity-85">
            <CastleLogo variant="full" className="w-32 sm:w-40 h-auto" />
          </a>

          {/* Tagline */}
          <p className="font-serif italic text-base sm:text-lg text-[#1C2D5A] max-w-md">
            Identidade Visual Afetiva para celebrações que merecem ser lembradas.
          </p>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs tracking-widest uppercase font-medium text-[#5A5A5A]">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#1C2D5A] transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1C2D5A] transition-colors"
            >
              Instagram
            </a>
          </nav>

          {/* Editorial Divider */}
          <div className="w-16 h-[1px] bg-[#E2D8C8] my-4" />

          {/* Copyright & Disclaimer */}
          <div className="text-[11px] text-[#8C8275] font-sans space-y-1">
            <p>© {currentYear} CASTLE CRIAÇÕES. Todos os direitos reservados.</p>
            <p className="font-serif italic text-[#A09686]">
              Estúdio de Design & Identidade Visual Afetiva
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};
