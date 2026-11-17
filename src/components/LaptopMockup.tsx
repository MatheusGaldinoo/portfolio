import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import { useEffect, useRef } from 'react';
import type { MediaAsset } from '../types/content';

const keyboard = [
  ['esc','1','2','3','4','5','6','7','8','9','0','−','=','⌫'],
  ['tab','Q','W','E','R','T','Y','U','I','O','P','[',']'],
  ['caps','A','S','D','F','G','H','J','K','L',';','enter'],
  ['shift','Z','X','C','V','B','N','M',',','.','/','shift'],
  ['fn','ctrl','alt','⌘','space','⌘','alt','←','↓','→'],
];

export function LaptopMockup({ asset }: { asset: MediaAsset }) {
  const scene = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const media = gsap.matchMedia();
    media.add('(min-width: 1101px) and (prefers-reduced-motion: no-preference)', () => {
      const el = scene.current;
      const grid = el?.closest<HTMLElement>('.project-grid');
      const laptop = el?.querySelector<HTMLElement>('.laptop-mockup');
      if (!el || !grid || !laptop) return;
      const copy = grid.querySelector<HTMLElement>('.project-copy');
      const stage = el.querySelector<HTMLElement>('.laptop-sticky');
      if (!stage) return;
      const visible = gsap.utils.clamp(0, 1);
      const setLaptop = gsap.quickSetter(laptop, 'css');
      const render = (progress: number) => {
        const expansion = gsap.parseEase('power1.inOut')(visible(progress / .45));
        const maxSize = Math.max(1, Math.min(940 / laptop.offsetWidth, (innerHeight - 140) / laptop.offsetHeight));
        const scale = .9 + (maxSize - .9) * expansion;
        const shift = (grid.offsetWidth - el.offsetWidth) / -2;
        setLaptop({ rotationX: 18 * (1 - expansion), rotationY: -24 * (1 - expansion),
          rotationZ: 16 * (1 - expansion), scale, x: shift * expansion, y: 0 });
        const bounds = laptop.getBoundingClientRect();
        const section = grid.getBoundingClientRect();
        const center = (innerHeight / 2 - (bounds.top + bounds.height / 2)) * expansion;
        const shiftY = Math.min(center, section.bottom - 24 - bounds.bottom);
        setLaptop({ y: Math.max(section.top + 12 - bounds.top, shiftY) });
        if (copy) copy.style.opacity = String(1 - visible(expansion * 2));
      };
      const trigger = ScrollTrigger.create({
        trigger: grid, start: 'bottom 95%', end: 'bottom top',
        onUpdate: self => render(self.progress),
        onRefresh: self => render(self.progress),
      });
      render(trigger.progress);
      return () => {
        gsap.set(laptop, { clearProps: 'transform' });
        copy?.style.removeProperty('opacity');
      };
    });
    return () => media.revert();
  }, []);
  return (
    <div ref={scene} className="laptop-scroll-scene"><div className="laptop-sticky"><div className="laptop-mockup">
      <div className="laptop-screen">
        <span className="laptop-camera" aria-hidden="true" />
        <div className="laptop-display" tabIndex={0} role="region" aria-label="Tela do TwinPulse"><img src={asset.src} alt={asset.alt} width={asset.width} height={asset.height}/></div>
      </div>
      <div className="laptop-deck" aria-hidden="true">
        <div className="laptop-keyboard">{keyboard.map((keys, row) => <div className={`keyboard-row keyboard-row-${row}`} key={row}>{keys.map((label, key) => <i key={key} className={label === 'space' ? 'space-key' : undefined}>{label === 'space' ? '' : label}</i>)}</div>)}</div>
        <div className="laptop-trackpad" />
      </div>
      <div className="laptop-base" aria-hidden="true"><span /></div>
    </div>
    </div></div>
  );
}
