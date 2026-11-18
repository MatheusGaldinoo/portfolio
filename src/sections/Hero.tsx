import { ProofStrip } from './ProofStrip';
import { media } from '../config/media';
import { Photo } from '../components/Photo';
import { HeroSignature } from '../components/HeroSignature';
import { useEffect, useRef } from 'react';

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const motion = matchMedia('(prefers-reduced-motion: reduce)');
    const hasSectionAnchor = () => Boolean(location.hash && location.hash !== '#inicio');
    if (motion.matches || hasSectionAnchor()) return;
    let frame = 0;
    let cancelled = false;
    const stop = () => {
      cancelled = true;
      cancelAnimationFrame(frame);
    };
    const startPreview = () => {
      const projects = document.getElementById('projects-title');
      if (cancelled || !projects || motion.matches || scrollY > 1 || hasSectionAnchor()) return;
      const distance = Math.max(0, projects.getBoundingClientRect().bottom - innerHeight + 28);
      const start = performance.now();
      const tick = (now: number) => {
        const elapsed = now - start;
        const phase = Math.max(0, Math.min(1, elapsed / 620, (1700 - elapsed) / 680));
        scrollTo({ top: distance * (1 - Math.cos(Math.PI * phase)) / 2, behavior: 'instant' });
        if (elapsed < 1700) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    };
    const introAnimations = heroRef.current?.getAnimations({ subtree: true })
      .filter(animation => animation instanceof CSSAnimation &&
        ['hero-portrait-zoom', 'sign-hero'].includes(animation.animationName)) ?? [];
    // A cancelled intro animation must not block the remaining intro or the preview.
    void Promise.allSettled(introAnimations.map(animation => animation.finished)).then(startPreview);
    const stopOnControl = (event: Event) => {
      if (event.target instanceof Element &&
          event.target.closest('a, button, input, select, textarea, [role="button"], [contenteditable="true"]')) stop();
    };
    const stopOnNavigationKey = (event: KeyboardEvent) => {
      if (['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' ', 'Tab', 'Escape', 'Enter'].includes(event.key)) stop();
    };
    const events = ['wheel', 'touchmove', 'hashchange'] as const;
    events.forEach(event => window.addEventListener(event, stop, { passive: true }));
    window.addEventListener('pointerdown', stopOnControl, { passive: true });
    window.addEventListener('click', stopOnControl);
    window.addEventListener('keydown', stopOnNavigationKey);
    motion.addEventListener('change', stop);
    return () => {
      stop();
      events.forEach(event => window.removeEventListener(event, stop));
      window.removeEventListener('pointerdown', stopOnControl);
      window.removeEventListener('click', stopOnControl);
      window.removeEventListener('keydown', stopOnNavigationKey);
      motion.removeEventListener('change', stop);
    };
  }, []);

  return (
    <section ref={heroRef} id="inicio" className="hero hero-full" aria-labelledby="hero-title">
      <Photo asset={media.portrait} eager />
      <div className="hero-overlay container">
        <h1 id="hero-title">
          <span className="name-highlight name-first">Matheus</span><br/>
          <span className="name-highlight name-last">Galdino</span>
          <span className="sr-only"> de Souza</span>
        </h1>
        <p className="hero-description">Engenharia de software e inteligência artificial.</p>
        <ProofStrip />
        <a className="hero-cta button" href="#projetos">Conheça meus projetos <svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 4v16m-6-6 6 6 6-6"/></svg></a>
      </div>
      <HeroSignature />
    </section>
  );
}
