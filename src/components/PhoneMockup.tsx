import type { CSSProperties } from 'react';
import { VideoPlayer } from './VideoPlayer';

export function PhoneMockup({ src, title, poster, aspectRatio = '9 / 16' }: { src: string; title: string; poster?: string; aspectRatio?: string }) {
  return <div className="phone-mockup iphone-mockup" style={{ '--video-ratio': aspectRatio } as CSSProperties}>
    <span className="iphone-island" aria-hidden="true"><i /></span>
    <span className="iphone-action" aria-hidden="true" />
    <VideoPlayer src={src} title={title} poster={poster} />
    <span className="phone-home" aria-hidden="true" />
  </div>;
}
