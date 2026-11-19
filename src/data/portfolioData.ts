import { PortfolioItem, Deliverable, ProcessStep, CelebrationCategory } from '../types';

export const PORTFOLIO_PROJECTS: PortfolioItem[] = [
  {
    id: 'proj-01',
    title: 'Identidade Afetiva — Casamento',
    category: 'casamentos',
    categoryLabel: 'Casamento',
    subtitle: 'Monograma Autoral & Identidade Completa',
    aspectRatio: 'portrait',
    placeholderText: '[ Projeto 01 — Casamento ]',
    story: 'Inspirado em cartas guardadas por anos, na flor de laranjeira do jardim da família e em uma paleta suave e atemporal.',
    elements: ['Monograma Fluido', 'Estampa de Aquarela', 'Papelaria Artesanal', 'Selo de Lacre'],
    colorPalette: ['#FAF6F0', '#E5DDD0', '#1C2D5A', '#B58D72'],
    clientNames: 'Isabela & Gabriel',
    location: 'Serra Gaúcha'
  },
  {
    id: 'proj-02',
    title: 'Identidade Afetiva — 15 Anos',
    category: '15-anos',
    categoryLabel: '15 Anos',
    subtitle: 'Tipografia Exclusiva & Ilustração Botânica',
    aspectRatio: 'tall',
    placeholderText: '[ Projeto 02 — 15 Anos ]',
    story: 'Uma celebração da transição e da poesia da juventude. Uniu elementos da constelação do nascimento da aniversariante com traços botânicos em tons pastel.',
    elements: ['Símbolo Estelar', 'Padronagem Texturizada', 'Artes Digitais', 'Identidade para Menu'],
    colorPalette: ['#FDFBF7', '#F3E8EE', '#8E6C88', '#1C2D5A'],
    clientNames: 'Sophia',
    location: 'São Paulo'
  },
  {
    id: 'proj-03',
    title: 'Identidade Afetiva — Festa Infantil',
    category: 'infantil',
    categoryLabel: 'Infantil',
    subtitle: 'Ilustração Lúdica & Elementos Afetivos',
    aspectRatio: 'square',
    placeholderText: '[ Projeto 03 — Infantil ]',
    story: 'Desenvolvido a partir das memórias de infância dos pais e dos brinquedos favoritos do aniversariante, com ilustrações delicadas e traços autorais.',
    elements: ['Ilustração da Fauna', 'Monograma Infantil', 'Menu Interativo', 'Lembranças Afetivas'],
    colorPalette: ['#FAF7F2', '#E2EBE4', '#DFA381', '#1C2D5A'],
    clientNames: 'Primeiro Aninho do Arthur',
    location: 'Curitiba'
  },
  {
    id: 'proj-04',
    title: 'Identidade Afetiva — Casamento',
    category: 'casamentos',
    categoryLabel: 'Casamento',
    subtitle: 'Heráldica Minimalista & Lacre de Cera',
    aspectRatio: 'landscape',
    placeholderText: '[ Projeto 04 — Casamento ]',
    story: 'A união entre o clássico e o contemporâneo. Uma crista heráldica reinterpretada com traços finos para criar monogramas gravados em alto relevo.',
    elements: ['Brasão Familiar Redesenhado', 'Tipografia Serifada', 'Aplicações Tecidas', 'Paleta Orgânica'],
    colorPalette: ['#F8F6F2', '#3D4A3E', '#C2A382', '#1C2D5A'],
    clientNames: 'Marina & Eduardo',
    location: 'Rio de Janeiro'
  },
  {
    id: 'proj-05',
    title: 'Identidade Afetiva — 15 Anos',
    category: '15-anos',
    categoryLabel: '15 Anos',
    subtitle: 'Direção Artística & Unboxing da Experiência',
    aspectRatio: 'portrait',
    placeholderText: '[ Projeto 05 — 15 Anos ]',
    story: 'Inspirado em noites estreladas e na paixão por literatura da debutante, o projeto ganhou vida com tipografias clássicas e padrões abstratos dourados.',
    elements: ['Monograma Geométrico', 'Padronagem de Borda', 'Cartão Guia de Dresscode', 'Arte para Pista'],
    colorPalette: ['#F7F5F0', '#1C2D5A', '#E2C290', '#635368'],
    clientNames: 'Beatriz',
    location: 'Belo Horizonte'
  },
  {
    id: 'proj-06',
    title: 'Identidade Afetiva — Celebração Especial',
    category: 'outras',
    categoryLabel: 'Outras Celebrações',
    subtitle: 'Bodas de Prata & Memórias em Família',
    aspectRatio: 'landscape',
    placeholderText: '[ Projeto 06 — Celebração ]',
    story: 'Celebração de 25 anos de casamento. Resgatou o monograma original do casamento de duas décadas atrás, evoluindo seus traços para uma estética sofisticada e atual.',
    elements: ['Evolução do Monograma Historic', 'Linha do Tempo Visual', 'Selo Personalizado', 'Álbum de Assinaturas'],
    colorPalette: ['#FAF8F5', '#D6D1C7', '#736B60', '#1C2D5A'],
    clientNames: 'Bodas de Prata — Helena & Lucas',
    location: 'Florianópolis'
  }
];

export const DELIVERABLES: Deliverable[] = [
  {
    number: '01',
    title: 'Monogramas',
    description: 'Símbolos autorais e combinações tipográficas que entrelaçam iniciais, datas e elementos marcantes em uma marca única.',
    placeholderTag: '[ Monograma Autoral ]'
  },
  {
    number: '02',
    title: 'Artes Digitais',
    description: 'Composições visuais para salvar datas, convites interativos, menus digitais e telas para telas e projeções.',
    placeholderTag: '[ Arte Digital ]'
  },
  {
    number: '03',
    title: 'Elementos Afetivos',
    description: 'Traços gráficos carregados de significado: selos personalizados, ilustrações de lugares marcantes e memórias de família.',
    placeholderTag: '[ Detalhe Afetivo ]'
  },
  {
    number: '04',
    title: 'Ilustrações',
    description: 'Desenhos manuais e digitais de flora, fauna, arquitetura do local do evento ou histórias especiais dos celebrantes.',
    placeholderTag: '[ Ilustração Exclusiva ]'
  },
  {
    number: '05',
    title: 'Paleta de Cores',
    description: 'Harmoização cromática sensível que orienta decoradores, floristas, cenografia, vestidos e todos os fornecedores.',
    placeholderTag: '[ Curadoria de Cores ]'
  },
  {
    number: '06',
    title: 'Tipografia',
    description: 'Seleção e combinação criteriosa de fontes serifadas, manuscritas ou minimalistas que definem o tom da comunicação.',
    placeholderTag: '[ Sistema Tipográfico ]'
  },
  {
    number: '07',
    title: 'Estampas & Padronagens',
    description: 'Desenhos contínuos criados para revestimentos de estruturas, almofadas, papéis de seda, envelopes e detalhes visuais.',
    placeholderTag: '[ Padronagem Exclusiva ]'
  },
  {
    number: '08',
    title: 'Aplicações da Identidade',
    description: 'Guia visual completo de como aplicar o conceito em papelaria, lembranças, menus, sinalização e comunicação da celebração.',
    placeholderTag: '[ Guia de Aplicação ]'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Conhecer',
    subtitle: 'O Ponto de Partida',
    description: 'Uma conversa atenta, humana e sem pressa. Queremos ouvir suas histórias, entender suas memórias, o tom desejado para a celebração e tudo o que possui significado para você.'
  },
  {
    number: '02',
    title: 'Sentir',
    subtitle: 'A Tradução Afetiva',
    description: 'Mergulhamos nas suas referências visuais e emocionais. Mapeamos flores, lugares, cores, texturas e sentimentos que se transformarão nos pilares do projeto visual.'
  },
  {
    number: '03',
    title: 'Criar',
    subtitle: 'A Lapidação Artística',
    description: 'Onde a magia acontece no estúdio. Desenhamos à mão os monogramas, desenvolvemos as ilustrações autorais e criamos a paleta de cores e o conceito exclusivo.'
  },
  {
    number: '04',
    title: 'Construir',
    subtitle: 'O Universo Completo',
    description: 'Expandimos a identidade para todos os desdobramentos necessários: estampas, artes digitais, guia tipográfico e instruções minuciosas de aplicação.'
  },
  {
    number: '05',
    title: 'Celebrar',
    subtitle: 'O Momento Mágico',
    description: 'Entrega de todo o universo visual pronto para harmonizar com a decoração, os fornecedores e encantar cada convidado na data tão esperada.'
  }
];

export const CELEBRATION_TYPES: CelebrationCategory[] = [
  {
    id: 'casamentos',
    title: 'Casamentos',
    subtitle: 'Romantismo Atemporal & Sensibilidade',
    description: 'Para casais que desejam que cada detalhe do grande dia — do convite ao menu — reflita a história de amor única que construíram juntos.',
    placeholderText: '[ Projeto Castle — Casamentos ]'
  },
  {
    id: '15-anos',
    title: '15 Anos',
    subtitle: 'Elegância, Personalidade & Encanto',
    description: 'Identidades visuais marcantes e sofisticadas que traduzem os gostos, sonhos e o estilo autêntico da debutante.',
    placeholderText: '[ Projeto Castle — 15 Anos ]'
  },
  {
    id: 'infantil',
    title: 'Festas Infantis',
    subtitle: 'Ludicidade Autoral & Delicadeza',
    description: 'Celebrações infantis com estética refinada e sensível, longe de clichês comerciais, homenageando o nascimento e crescimento da criança.',
    placeholderText: '[ Projeto Castle — Festas Infantis ]'
  },
  {
    id: 'outras',
    title: 'Outras Celebrações',
    subtitle: 'Aniversários, Bodas & Momentos Marcantes',
    description: 'Bodas, renovações de votos, encontros familiares especiais ou aniversários de vida que merecem uma assinatura visual afetiva e memorável.',
    placeholderText: '[ Projeto Castle — Celebrações Especiais ]'
  }
];
