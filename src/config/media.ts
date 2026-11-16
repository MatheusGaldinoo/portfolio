import type { MediaAsset } from '../types/content';
// Ative `available` somente depois de adicionar o arquivo real e autorizado.
export const media = {
  portrait: { src: '/media/portraits/matheus-galdino.webp', alt: 'Retrato profissional de Matheus Galdino de Souza', width: 1600, height: 2000, available: false, position: 'center' },
  twinpulse: { src: '/media/projects/twinpulse.webp', alt: 'Captura autorizada da interface do TwinPulse', width: 1920, height: 1200, available: false },
  beethere: { src: '/media/projects/beethere.webp', alt: 'Telas do protótipo BeeThere', width: 1080, height: 2340, available: false },
  leal: { src: '/media/projects/leal-cars-stock.webp', alt: 'Interface da aplicação Leal Car’s Stock', width: 1920, height: 1200, available: false },
} satisfies Record<string, MediaAsset>;
