import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import type { MediaAsset } from '../types/content';

gsap.registerPlugin(ScrollTrigger);

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
    media.add('(min-width: 1101px) and (min-height: 500px) and (prefers-reduced-motion: no-preference)', () => {
      const el = scene.current;
      const grid = el?.closest<HTMLElement>('.project-grid');
      const section = el?.closest<HTMLElement>('.project-twinpulse');
      const laptop = el?.querySelector<HTMLElement>('.laptop-mockup');
      if (!el || !grid || !section || !laptop) return;
      const copy = grid.querySelector<HTMLElement>('.project-copy');
      const visible = gsap.utils.clamp(0, 1);
      const ease = gsap.parseEase('sine.inOut');
      const setLaptop = gsap.quickSetter(laptop, 'css');
      const expansionDistance = () => gsap.utils.clamp(240, 340, innerHeight * .32);
      const holdDistance = () => gsap.utils.clamp(240, 360, innerHeight * .4);
      const render = (progress: number) => {
        const distance = expansionDistance() + holdDistance();
        const expansion = ease(visible(progress * distance / expansionDistance()));
        const maxSize = Math.max(.9, Math.min(
          Math.min(940, section.clientWidth - 32) / laptop.offsetWidth,
          (innerHeight - 140) / laptop.offsetHeight,
        ));
        const scale = .9 + (maxSize - .9) * expansion;
        setLaptop({ rotationX: 18 * (1 - expansion), rotationY: -24 * (1 - expansion),
          rotationZ: 16 * (1 - expansion), skewX: 0, skewY: 0, scale, x: 0, y: 0 });
        const bounds = laptop.getBoundingClientRect();
        const sectionBounds = section.getBoundingClientRect();
        // Center inside the section's last viewport, including short desktop windows.
        // Keeping this relative to the section lets it leave naturally after the pin.
        setLaptop({
          x: (sectionBounds.left + sectionBounds.width / 2 - bounds.left - bounds.width / 2) * expansion,
          y: (sectionBounds.bottom - innerHeight / 2 - bounds.top - bounds.height / 2) * expansion,
        });
        if (copy) copy.style.opacity = String(1 - visible(expansion * 2));
      };
      const trigger = ScrollTrigger.create({
        id: 'twinpulse-focus',
        trigger: section,
        start: 'bottom bottom',
        end: () => `+=${expansionDistance() + holdDistance()}`,
        pin: section,
        pinSpacing: true,
        invalidateOnRefresh: true,
        onUpdate: self => render(self.progress),
        onRefresh: self => render(self.progress),
      });
      render(trigger.progress);

      let active = true;
      const refresh = () => { if (active) trigger.refresh(); };
      const screenshot = laptop.querySelector('img');
      document.fonts.ready.then(refresh);
      screenshot?.addEventListener('load', refresh);
      return () => {
        active = false;
        screenshot?.removeEventListener('load', refresh);
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
    </div>
    </div></div>
  );
}
