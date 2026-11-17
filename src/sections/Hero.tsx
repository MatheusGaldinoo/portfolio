import { useEffect } from 'react';
import { media } from '../config/media';
import { Photo } from '../components/Photo';
import { HeroSignature } from '../components/HeroSignature';

export function Hero() {
  useEffect(() => {
    const preference = matchMedia('(prefers-reduced-motion: reduce)');
    if (preference.matches || location.hash || window.scrollY > 0) return;

    let frame = 0;
    let delay = 0;
    let cancelled = false;
    const cancel = () => {
      cancelled = true;
      clearTimeout(delay);
      cancelAnimationFrame(frame);
    };
    const events = ['wheel', 'touchstart', 'pointerdown', 'keydown', 'resize'] as const;
    const preview = () => {
      if (cancelled || window.scrollY > 0 || location.hash) return;
      const start = performance.now();
      const distance = Math.min(96, innerHeight * 0.12);
      const ease = (progress: number) => (1 - Math.cos(Math.PI * progress)) / 2;
      const animate = (now: number) => {
        if (cancelled) return;
        const elapsed = now - start;
        const offset = elapsed < 650
          ? distance * ease(elapsed / 650)
          : elapsed < 1000
            ? distance
            : distance * (1 - ease(Math.min(1, (elapsed - 1000) / 750)));
        window.scrollTo({ top: offset, behavior: 'instant' });
        if (elapsed < 1750) frame = requestAnimationFrame(animate);
      };
      frame = requestAnimationFrame(animate);
    };
    const signature = document.querySelector('.signature-stroke');
    const afterSignature = () => {
      if (!cancelled) delay = window.setTimeout(preview, 250);
    };
    signature?.addEventListener('animationend', afterSignature, { once: true });

    events.forEach(event => window.addEventListener(event, cancel, { passive: true }));
    preference.addEventListener('change', cancel);
    return () => {
      cancel();
      signature?.removeEventListener('animationend', afterSignature);
      events.forEach(event => window.removeEventListener(event, cancel));
      preference.removeEventListener('change', cancel);
    };
  }, []);

  return (
    <section id="inicio" className="hero hero-full" aria-labelledby="hero-title">
      <Photo asset={media.portrait} eager />
      <div className="hero-overlay container">
        <h1 id="hero-title">
          <span className="name-highlight name-first">Matheus</span>
          <br />
          <span className="name-highlight name-last">Galdino</span>
          <span className="sr-only"> de Souza</span>
        </h1>
        <p className="hero-description">Engenheiro de software e inteligência artificial.</p>

      </div>
      <HeroSignature />
    </section>
  );
}
