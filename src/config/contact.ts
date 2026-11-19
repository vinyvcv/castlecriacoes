export const CONTACT_CONFIG = {
  brandName: 'Castle Criações',
  instagramHandle: '@castlecriacoes',
  instagramUrl: 'https://instagram.com/castlecriacoes',
  whatsappNumber: '5511999999999', // Substitua pelo número oficial com DDI e DDD
  whatsappDisplay: '(11) 99999-9999',
  email: 'contato@castlecriacoes.com.br',
};

export interface StoryBriefingData {
  fullName: string;
  eventType: string;
  eventDate: string;
  eventLocation: string;
  storyText: string;
}

const EVENT_TYPE_LABELS: Record<string, string> = {
  casamento: 'Casamento',
  '15-anos': '15 Anos',
  infantil: 'Festa Infantil',
  outra: 'Outra Celebração',
};

export function getEventTypeLabel(eventType: string): string {
  return EVENT_TYPE_LABELS[eventType] || 'Celebração Especial';
}

export function formatStoryBriefingMessage(data: StoryBriefingData): string {
  const lines = [
    'Olá, Castle Criações! Gostaria de iniciar uma conversa sobre minha Identidade Visual Afetiva.',
    '',
    `*Nome:* ${data.fullName.trim() || 'Não informado'}`,
    `*Celebração:* ${getEventTypeLabel(data.eventType)}`,
    `*Data prevista:* ${data.eventDate.trim() || 'A definir'}`,
    `*Cidade / Local:* ${data.eventLocation.trim() || 'A definir'}`,
    '',
    '*História, memórias e referências:*',
    data.storyText.trim() || 'Gostaria de conversar sobre as referências para o nosso momento.',
  ];

  return lines.join('\n');
}

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${CONTACT_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
