import { useRef, useState } from 'react';

export function VideoPlayer({ src, title, poster }: { src: string; title: string; poster?: string }) {
  const [requested, setRequested] = useState(false);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const playButton = useRef<HTMLButtonElement>(null);
  return <div className={ready ? 'video-frame is-ready' : 'video-frame'}>
    {requested && <video src={src} controls autoPlay playsInline preload="metadata" aria-label={title}
      onLoadedData={event => {
        setReady(true);
        if (document.activeElement === playButton.current) event.currentTarget.focus({ preventScroll: true });
      }}
      onError={() => { setRequested(false); setReady(false); setFailed(true); }}/>}
    <button ref={playButton} className="video-poster" aria-label={`Reproduzir ${title}`} aria-hidden={ready}
      tabIndex={ready ? -1 : 0} onClick={() => { setFailed(false); setRequested(true); }}>
      {poster && <img src={poster} alt="" loading="lazy"/>}
      <span className="video-play" aria-hidden="true"><svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></span>
      {failed && <span role="status" className="video-error">Falha ao carregar. Tentar novamente</span>}
    </button>
  </div>;
}
