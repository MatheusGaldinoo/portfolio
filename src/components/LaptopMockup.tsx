import { useRef } from 'react';
import type { MediaAsset } from '../types/content';
import { Photo } from './Photo';

export function LaptopMockup({ asset }: { asset: MediaAsset }) {
  const dialog = useRef<HTMLDialogElement>(null);
  return <>
    <div className="laptop-mockup">
      <button className="laptop-screen" onClick={() => dialog.current?.showModal()} aria-label="Ampliar captura do TwinPulse" aria-haspopup="dialog">
        <span className="laptop-camera" aria-hidden="true" />
        <Photo asset={asset} />
        <span className="macbook-wordmark" aria-hidden="true">MacBook Pro</span>
      </button>
      <div className="laptop-deck" aria-hidden="true">
        <div className="laptop-keyboard">{Array.from({ length: 48 }, (_, index) => <i key={index} />)}</div>
        <div className="laptop-trackpad" />
      </div>
      <div className="laptop-base" aria-hidden="true"><span /></div>
    </div>
    <dialog ref={dialog} className="screenshot-dialog" aria-label="Captura ampliada do TwinPulse" onClick={event => { if (event.target === event.currentTarget) dialog.current?.close(); }}>
      <div className="screenshot-dialog__bar"><span>TwinPulse</span><button autoFocus onClick={() => dialog.current?.close()} aria-label="Fechar captura ampliada">Fechar ×</button></div>
      <div className="screenshot-dialog__image"><img src={asset.src} alt={asset.alt} width={asset.width} height={asset.height} /></div>
    </dialog>
  </>;
}
