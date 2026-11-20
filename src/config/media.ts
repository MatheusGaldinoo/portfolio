import type { MediaAsset } from '../types/content';
export const media = {
  portrait: { src: '/media/optimized/hero-1920.webp', srcSet: '/media/optimized/hero-1024.webp 1024w, /media/optimized/hero-1920.webp 1920w', alt: 'Apresenta\u00e7\u00e3o de projeto com microfone no palco', width: 4000, height: 2646, available: true, position: '50% 35%' },
  medal: { src: '/media/medalha-opi.jpg', alt: 'Cerimônia de premiação da Olimpíada Paraibana de Informática', width: 1220, height: 1896, available: true, position: 'center 65%' },
  twinpulse: { src: '/Captura de tela de 2026-11-16 15-50-15.png', alt: 'TwinPulse: análise e pré-processamento de dados', width: 1851, height: 932, available: true },
} satisfies Record<string, MediaAsset>;
export const videos = { teajudo: '/media/campus/teajudo-dlj-web.mp4', beethere: '/media/v5 (final) - BeeThere Apresentation(1).mp4' };
