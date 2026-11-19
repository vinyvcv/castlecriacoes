import React from 'react';
import { Instagram, Mail, MessageCircle } from 'lucide-react';
import { CastleLogo } from './CastleLogo';
import { buildWhatsAppUrl, CONTACT_CONFIG } from '../config/contact';

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

  const directWhatsAppUrl = buildWhatsAppUrl(
    'Olá, Castle Criações! Vim pelo site e gostaria de conversar sobre uma Identidade Visual Afetiva.'
  );

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
          <nav
            aria-label="Navegação do rodapé"
            className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-xs tracking-widest uppercase font-medium text-[#4F4A42]"
          >
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#1C2D5A] transition-colors whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Direct Contact Channels */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 pt-1 text-xs font-sans text-[#1C2D5A]">
            <a
              href={CONTACT_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 hover:text-[#D81B60] transition-colors font-medium"
            >
              <Instagram className="w-4 h-4 text-[#D81B60]" />
              <span>{CONTACT_CONFIG.instagramHandle}</span>
            </a>

            <span className="hidden sm:inline text-[#C9BEA9]" aria-hidden="true">
              ·
            </span>

            <a
              href={directWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 hover:text-[#1E6548] transition-colors font-medium"
            >
              <MessageCircle className="w-4 h-4 text-[#1E6548]" />
              <span>WhatsApp</span>
            </a>

            <span className="hidden sm:inline text-[#C9BEA9]" aria-hidden="true">
              ·
            </span>

            <a
              href={`mailto:${CONTACT_CONFIG.email}`}
              className="inline-flex items-center space-x-2 hover:text-[#0F1E40] transition-colors font-medium"
            >
              <Mail className="w-4 h-4 text-[#EAA227]" />
              <span>{CONTACT_CONFIG.email}</span>
            </a>
          </div>

          {/* Editorial Divider */}
          <div className="w-16 h-[1px] bg-[#DDD3C3] my-2" />

          {/* Copyright */}
          <div className="text-xs text-[#5E564B] font-sans space-y-1">
            <p>© {currentYear} CASTLE CRIAÇÕES. Todos os direitos reservados.</p>
            <p className="font-serif italic text-[#5A5248]">
              Estúdio de Design & Identidade Visual Afetiva
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
