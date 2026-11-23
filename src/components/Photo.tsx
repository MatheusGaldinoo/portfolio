import { useState } from 'react';
import type { MediaAsset } from '../types/content';
export function Photo({ asset, className = '', eager = false }: { asset: MediaAsset; className?: string; eager?: boolean }) {
  const [failed, setFailed] = useState(false);
  const image = <img src={asset.src} srcSet={asset.srcSet} alt={asset.alt} width={asset.width} height={asset.height} loading={eager ? 'eager' : 'lazy'} fetchPriority={eager ? 'high' : 'auto'} style={{ objectPosition: asset.position }} onError={() => setFailed(true)} />;
  return <div className={`photo ${className}`}>
    {asset.available && !failed ? (
      asset.webpSrc ? <picture><source srcSet={asset.webpSrc} type="image/webp" />{image}</picture> : image
    ) : <div className="photo-fallback">Registro em breve<span>Matheus Galdino / portfólio</span></div>}
  </div>;
}
