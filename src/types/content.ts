export type MediaAsset = { src: string; alt: string; width: number; height: number; available: boolean; position?: string };
export type Project = {
  id: string; number: string; title: string; category: string; status: string;
  description: string; contributions: string[]; technologies: string[];
  metrics?: { value: string; label: string }[]; note: string;
  link?: { href: string; label: string }; layout: 'feature' | 'metrics' | 'product' | 'compact';
};
