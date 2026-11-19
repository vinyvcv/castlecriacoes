export type CategoryType = 'todos' | 'casamentos' | '15-anos' | 'infantil' | 'outras';

export type StoryEventType = 'casamento' | '15-anos' | 'infantil' | 'outra';

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'casamentos' | '15-anos' | 'infantil' | 'outras';
  categoryLabel: string;
  subtitle: string;
  aspectRatio: 'square' | 'portrait' | 'landscape' | 'tall';
  coverImage?: string;
  galleryImages?: string[];
  galleryLabels?: string[];
  story: string;
  elements: string[];
  colorPalette: string[];
  clientNames?: string;
  location?: string;
}

export interface Deliverable {
  number: string;
  id:
    | 'monogramas'
    | 'artes-digitais'
    | 'elementos-afetivos'
    | 'ilustracoes'
    | 'paleta'
    | 'tipografia'
    | 'estampas'
    | 'aplicacoes';
  title: string;
  subtitle: string;
  description: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface CelebrationCategory {
  id: string;
  eventType: StoryEventType;
  title: string;
  ctaLabel: string;
  subtitle: string;
  description: string;
  coverImage?: string;
}
