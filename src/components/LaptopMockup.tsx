import type { MediaAsset } from '../types/content';

const keyboard = [
  ['esc','1','2','3','4','5','6','7','8','9','0','−','=','⌫'],
  ['tab','Q','W','E','R','T','Y','U','I','O','P','[',']'],
  ['caps','A','S','D','F','G','H','J','K','L',';','enter'],
  ['shift','Z','X','C','V','B','N','M',',','.','/','shift'],
  ['fn','ctrl','alt','⌘','space','⌘','alt','←','↓','→'],
];

export function LaptopMockup({ asset }: { asset: MediaAsset }) {
  return (
    <div className="laptop-frame"><div className="laptop-mockup">
      <div className="laptop-screen">
        <span className="laptop-camera" aria-hidden="true" />
        <div className="laptop-display" tabIndex={0} role="region" aria-label="Tela do TwinPulse"><img loading="lazy" src={asset.src} alt={asset.alt} width={asset.width} height={asset.height}/></div>
      </div>
      <div className="laptop-deck" aria-hidden="true">
        <div className="laptop-keyboard">{keyboard.map((keys, row) => <div className={`keyboard-row keyboard-row-${row}`} key={row}>{keys.map((label, key) => <i key={key} className={label === 'space' ? 'space-key' : undefined}>{label === 'space' ? '' : label}</i>)}</div>)}</div>
        <div className="laptop-trackpad" />
      </div>
    </div>
    </div>
  );
}
