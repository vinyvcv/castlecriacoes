export type CategoryType = 'todos' | 'casamentos' | '15-anos' | 'infantil' | 'outras';

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'casamentos' | '15-anos' | 'infantil' | 'outras';
  categoryLabel: string;
  subtitle: string;
  aspectRatio: 'square' | 'portrait' | 'landscape' | 'tall';
  placeholderText: string;
  story: string;
  elements: string[];
  colorPalette: string[];
  clientNames?: string;
  location?: string;
}

export interface Deliverable {
  number: string;
  title: string;
  description: string;
  placeholderTag: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface CelebrationCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  placeholderText: string;
}
