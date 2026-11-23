export type MediaAsset = {
  src: string;
  srcSet?: string;
  webpSrc?: string;
  alt: string;
  width: number;
  height: number;
  available: boolean;
  position?: string;
};

export type Project = {
  id: 'twinpulse' | 'crypto' | 'whatsapp' | 'beethere' | 'teajudo';
  title: string;
  status: string;
  description: string;
  contributions: string[];
  technologies: string[];
};
