import { useState } from 'react';
import type { MediaAsset } from '../types/content';
export function MediaFrame({ asset, variant = 'project', title, caption }: { asset: MediaAsset; variant?: 'portrait' | 'project' | 'phone'; title: string; caption: string }) {
  const [failed, setFailed] = useState(false);
  return <figure className={`media-frame media-frame--${variant}`}>
    <div className="media-frame__content">
      {asset.available && !failed ? <img src={asset.src} alt={asset.alt} width={asset.width} height={asset.height} loading={variant === 'portrait' ? 'eager' : 'lazy'} style={{ objectPosition: asset.position }} onError={() => setFailed(true)} /> : <div className="media-placeholder"><span className="media-placeholder__label">{variant === 'portrait' ? 'RETRATO / EM BREVE' : 'ESPAÇO PARA MÍDIA REAL'}</span><span className="media-placeholder__title" aria-hidden="true">{title}</span><span className="media-placeholder__caption">{caption}</span></div>}
    </div>
  </figure>;
}
