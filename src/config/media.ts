import type { MediaAsset } from '../types/content';
const photo = (file: string, alt: string, width: number, height: number, position = 'center'): MediaAsset => ({
  src: `/media/optimized/${file}-1440.webp`, srcSet: `/media/optimized/${file}-640.webp 640w, /media/optimized/${file}-1440.webp 1440w`, alt, width, height, available: true, position,
});
export const media = {
  portrait: photo('IMG_20260209_184246', 'Apresentação de projeto com microfone no palco', 4000, 2646, '50% 35%'),
  teamwork: photo('CampusMobile_20260202-225', 'Equipe trabalhando em conjunto no Campus Mobile', 6766, 4386),
  coding: photo('CampusMobile_20260202-226', 'Participantes discutindo o projeto em frente ao notebook', 6621, 4414),
  workshop: photo('CampusMobile_20260202-116', 'Atividade de desenvolvimento durante o Campus Mobile', 7008, 4672),
  campus13: photo('IMG-20250213-WA0004', 'Registro de participantes durante a edição de 2025 do Campus Mobile', 3024, 4032),
  campus14: photo('IMG-20260205-WA0115', 'Equipe reunida durante a edição de 2026 do Campus Mobile', 1200, 1600),
  community: photo('IMG-20250215-WA0022', 'Participantes reunidos no Campus Mobile', 1200, 1600),
  medal: photo('medalha-opi', 'Cerimônia de premiação da Olimpíada Paraibana de Informática', 800, 799),
  leal: photo('home-lealcar', 'Captura real do catálogo de veículos do Leal Car’s Stock', 800, 396),
  twinpulse: { src: '/Captura de tela de 2026-11-16 15-50-15.png', alt: 'TwinPulse: análise e pré-processamento de dados', width: 1851, height: 932, available: true },
  beethere: { src: '/Captura de tela de 2026-11-16 15-26-46-1.png', alt: 'Imagem de apresentação do BeeThere fornecida por Matheus', width: 796, height: 455, available: true },
} satisfies Record<string, MediaAsset>;
export const videos = { teajudo: '/media/campus/teajudo-dlj-web.mp4', beethere: '/media/v5 (final) - BeeThere Apresentation(1).mp4' };
