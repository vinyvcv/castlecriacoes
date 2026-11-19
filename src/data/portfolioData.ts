import { PortfolioItem, Deliverable, ProcessStep, CelebrationCategory } from '../types';

import heroMonogramCard from '../assets/images/hero_monogram_card_1795104711642.jpg';
import heroWatercolorPattern from '../assets/images/hero_watercolor_pattern_1795104712037.jpg';
import heroNavyIdentity from '../assets/images/hero_navy_identity_1795104712316.jpg';
import portfolioCasamentoSerra from '../assets/images/portfolio_casamento_serra_1795104712360.jpg';
import portfolio15AnosSophia from '../assets/images/portfolio_15anos_sophia_1795104712681.jpg';
import portfolioInfantilArthur from '../assets/images/portfolio_infantil_arthur_1795104711748.jpg';
import portfolioCasamentoRio from '../assets/images/portfolio_casamento_rio_1795104710944.jpg';
import portfolio15AnosBeatriz from '../assets/images/portfolio_15anos_beatriz_1795104711055.jpg';
import portfolioBodasHelena from '../assets/images/portfolio_bodas_helena_1795104712427.jpg';
import celebrationWeddingEditorial from '../assets/images/celebration_wedding_editorial_1795104712535.jpg';

export const HERO_MOODBOARD_IMAGES = {
  monogram: heroMonogramCard,
  pattern: heroWatercolorPattern,
  identity: heroNavyIdentity,
};

export const PORTFOLIO_PROJECTS: PortfolioItem[] = [
  {
    id: 'proj-01',
    title: 'Identidade Afetiva — Casamento',
    category: 'casamentos',
    categoryLabel: 'Casamento',
    subtitle: 'Monograma Autoral & Identidade Completa',
    aspectRatio: 'portrait',
    coverImage: portfolioCasamentoSerra,
    galleryImages: [heroMonogramCard, portfolioCasamentoSerra, celebrationWeddingEditorial],
    galleryLabels: ['Detalhe — Monograma & Lacre', 'Papelaria Artesanal', 'Mesa da Celebração'],
    story:
      'Inspirado em cartas guardadas por anos, na flor de laranjeira do jardim da família e em uma paleta suave e atemporal.',
    elements: ['Monograma Fluido', 'Estampa de Aquarela', 'Papelaria Artesanal', 'Selo de Lacre'],
    colorPalette: ['#FAF6F0', '#E5DDD0', '#1C2D5A', '#B58D72'],
    clientNames: 'Isabela & Gabriel',
    location: 'Serra Gaúcha',
  },
  {
    id: 'proj-02',
    title: 'Identidade Afetiva — 15 Anos',
    category: '15-anos',
    categoryLabel: '15 Anos',
    subtitle: 'Tipografia Exclusiva & Ilustração Botânica',
    aspectRatio: 'tall',
    coverImage: portfolio15AnosSophia,
    galleryImages: [portfolio15AnosSophia, heroWatercolorPattern, heroNavyIdentity],
    galleryLabels: ['Convite & Forro em Aquarela', 'Estampa Botânica Autoral', 'Composição da Identidade'],
    story:
      'Uma celebração da transição e da poesia da juventude. Uniu elementos da constelação do nascimento da aniversariante com traços botânicos em tons pastel.',
    elements: ['Símbolo Estelar', 'Padronagem Texturizada', 'Artes Digitais', 'Identidade para Menu'],
    colorPalette: ['#FDFBF7', '#F3E8EE', '#8E6C88', '#1C2D5A'],
    clientNames: 'Sophia',
    location: 'São Paulo',
  },
  {
    id: 'proj-03',
    title: 'Identidade Afetiva — Festa Infantil',
    category: 'infantil',
    categoryLabel: 'Infantil',
    subtitle: 'Ilustração Lúdica & Elementos Afetivos',
    aspectRatio: 'square',
    coverImage: portfolioInfantilArthur,
    galleryImages: [portfolioInfantilArthur, heroWatercolorPattern, heroMonogramCard],
    galleryLabels: ['Papelaria & Aquarela', 'Traço Botânico no Estúdio', 'Selo Afetivo'],
    story:
      'Desenvolvido a partir das memórias de infância dos pais e dos brinquedos favoritos do aniversariante, com ilustrações delicadas e traços autorais.',
    elements: ['Ilustração da Fauna', 'Monograma Infantil', 'Menu Interativo', 'Lembranças Afetivas'],
    colorPalette: ['#FAF7F2', '#E2EBE4', '#DFA381', '#1C2D5A'],
    clientNames: 'Primeiro Aninho do Arthur',
    location: 'Curitiba',
  },
  {
    id: 'proj-04',
    title: 'Identidade Afetiva — Casamento',
    category: 'casamentos',
    categoryLabel: 'Casamento',
    subtitle: 'Heráldica Minimalista & Lacre de Cera',
    aspectRatio: 'landscape',
    coverImage: portfolioCasamentoRio,
    galleryImages: [portfolioCasamentoRio, heroMonogramCard, celebrationWeddingEditorial],
    galleryLabels: ['Brasão em Alto Relevo', 'Monograma & Lacre', 'Menu na Recepção'],
    story:
      'A união entre o clássico e o contemporâneo. Uma crista heráldica reinterpretada com traços finos para criar monogramas gravados em alto relevo.',
    elements: ['Brasão Familiar Redesenhado', 'Tipografia Serifada', 'Aplicações Tecidas', 'Paleta Orgânica'],
    colorPalette: ['#F8F6F2', '#3D4A3E', '#C2A382', '#1C2D5A'],
    clientNames: 'Marina & Eduardo',
    location: 'Rio de Janeiro',
  },
  {
    id: 'proj-05',
    title: 'Identidade Afetiva — 15 Anos',
    category: '15-anos',
    categoryLabel: '15 Anos',
    subtitle: 'Direção Artística & Unboxing da Experiência',
    aspectRatio: 'portrait',
    coverImage: portfolio15AnosBeatriz,
    galleryImages: [portfolio15AnosBeatriz, heroNavyIdentity, heroMonogramCard],
    galleryLabels: ['Unboxing & Caixa Exclusiva', 'Suíte em Azul-Marinho & Ouro', 'Detalhe do Monograma'],
    story:
      'Inspirado em noites estreladas e na paixão por literatura da debutante, o projeto ganhou vida com tipografias clássicas e padrões abstratos dourados.',
    elements: ['Monograma Geométrico', 'Padronagem de Borda', 'Cartão Guia de Dresscode', 'Arte para Pista'],
    colorPalette: ['#F7F5F0', '#1C2D5A', '#E2C290', '#635368'],
    clientNames: 'Beatriz',
    location: 'Belo Horizonte',
  },
  {
    id: 'proj-06',
    title: 'Identidade Afetiva — Celebração Especial',
    category: 'outras',
    categoryLabel: 'Outras Celebrações',
    subtitle: 'Bodas de Prata & Memórias em Família',
    aspectRatio: 'landscape',
    coverImage: portfolioBodasHelena,
    galleryImages: [portfolioBodasHelena, heroNavyIdentity, celebrationWeddingEditorial],
    galleryLabels: ['Álbum de Assinaturas em Linho', 'Papelaria & Envelopes', 'Ambientação da Mesa'],
    story:
      'Celebração de 25 anos de casamento. Resgatou o monograma original do casamento de duas décadas atrás, evoluindo seus traços para uma estética sofisticada e atual.',
    elements: ['Evolução do Monograma Histórico', 'Linha do Tempo Visual', 'Selo Personalizado', 'Álbum de Assinaturas'],
    colorPalette: ['#FAF8F5', '#D6D1C7', '#736B60', '#1C2D5A'],
    clientNames: 'Bodas de Prata — Helena & Lucas',
    location: 'Florianópolis',
  },
];

export const DELIVERABLES: Deliverable[] = [
  {
    number: '01',
    id: 'monogramas',
    title: 'Monogramas',
    subtitle: 'Assinatura Autoral',
    description:
      'Símbolos autorais e combinações tipográficas que entrelaçam iniciais, datas e elementos marcantes em uma marca única.',
  },
  {
    number: '02',
    id: 'artes-digitais',
    title: 'Artes Digitais',
    subtitle: 'Experiência Interativa',
    description:
      'Composições visuais para salvar datas, convites interativos, menus digitais e telas para eventos e projeções.',
  },
  {
    number: '03',
    id: 'elementos-afetivos',
    title: 'Elementos Afetivos',
    subtitle: 'Memória em Traço',
    description:
      'Traços gráficos carregados de significado: selos personalizados, ilustrações de lugares marcantes e memórias de família.',
  },
  {
    number: '04',
    id: 'ilustracoes',
    title: 'Ilustrações',
    subtitle: 'Arte Exclusiva',
    description:
      'Desenhos manuais e digitais de flora, fauna, arquitetura do local do evento ou histórias especiais dos celebrantes.',
  },
  {
    number: '05',
    id: 'paleta',
    title: 'Paleta de Cores',
    subtitle: 'Curadoria Cromática',
    description:
      'Harmonização cromática sensível que orienta decoradores, floristas, cenografia, vestidos e todos os fornecedores.',
  },
  {
    number: '06',
    id: 'tipografia',
    title: 'Tipografia',
    subtitle: 'Sistema Editorial',
    description:
      'Seleção e combinação criteriosa de fontes serifadas, manuscritas ou minimalistas que definem o tom da comunicação.',
  },
  {
    number: '07',
    id: 'estampas',
    title: 'Estampas & Padronagens',
    subtitle: 'Superfícies Contínuas',
    description:
      'Desenhos contínuos criados para revestimentos de estruturas, almofadas, papéis de seda, envelopes e detalhes visuais.',
  },
  {
    number: '08',
    id: 'aplicacoes',
    title: 'Aplicações da Identidade',
    subtitle: 'Guia Completo',
    description:
      'Guia visual completo de como aplicar o conceito em papelaria, lembranças, menus, sinalização e comunicação da celebração.',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Conhecer',
    subtitle: 'O Ponto de Partida',
    description:
      'Uma conversa atenta, humana e sem pressa. Queremos ouvir suas histórias, entender suas memórias, o tom desejado para a celebração e tudo o que possui significado para você.',
  },
  {
    number: '02',
    title: 'Sentir',
    subtitle: 'A Tradução Afetiva',
    description:
      'Mergulhamos nas suas referências visuais e emocionais. Mapeamos flores, lugares, cores, texturas e sentimentos que se transformarão nos pilares do projeto visual.',
  },
  {
    number: '03',
    title: 'Criar',
    subtitle: 'A Lapidação Artística',
    description:
      'Onde a magia acontece no estúdio. Desenhamos à mão os monogramas, desenvolvemos as ilustrações autorais e criamos a paleta de cores e o conceito exclusivo.',
  },
  {
    number: '04',
    title: 'Construir',
    subtitle: 'O Universo Completo',
    description:
      'Expandimos a identidade para todos os desdobramentos necessários: estampas, artes digitais, guia tipográfico e instruções minuciosas de aplicação.',
  },
  {
    number: '05',
    title: 'Celebrar',
    subtitle: 'O Momento Mágico',
    description:
      'Entrega de todo o universo visual pronto para harmonizar com a decoração, os fornecedores e encantar cada convidado na data tão esperada.',
  },
];

export const CELEBRATION_TYPES: CelebrationCategory[] = [
  {
    id: 'casamentos',
    eventType: 'casamento',
    title: 'Casamentos',
    ctaLabel: 'Conte-nos sobre seu casamento',
    subtitle: 'Romantismo Atemporal & Sensibilidade',
    description:
      'Para casais que desejam que cada detalhe do grande dia — do convite ao menu — reflita a história de amor única que construíram juntos.',
    coverImage: celebrationWeddingEditorial,
  },
  {
    id: '15-anos',
    eventType: '15-anos',
    title: '15 Anos',
    ctaLabel: 'Conte-nos sobre seus 15 anos',
    subtitle: 'Elegância, Personalidade & Encanto',
    description:
      'Identidades visuais marcantes e sofisticadas que traduzem os gostos, sonhos e o estilo autêntico da debutante.',
    coverImage: portfolio15AnosSophia,
  },
  {
    id: 'infantil',
    eventType: 'infantil',
    title: 'Festas Infantis',
    ctaLabel: 'Conte-nos sobre sua festa infantil',
    subtitle: 'Ludicidade Autoral & Delicadeza',
    description:
      'Celebrações infantis com estética refinada e sensível, longe de clichês comerciais, homenageando o nascimento e crescimento da criança.',
    coverImage: portfolioInfantilArthur,
  },
  {
    id: 'outras',
    eventType: 'outra',
    title: 'Outras Celebrações',
    ctaLabel: 'Conte-nos sobre sua celebração',
    subtitle: 'Aniversários, Bodas & Momentos Marcantes',
    description:
      'Bodas, renovações de votos, encontros familiares especiais ou aniversários de vida que merecem uma assinatura visual afetiva e memorável.',
    coverImage: portfolioBodasHelena,
  },
];
