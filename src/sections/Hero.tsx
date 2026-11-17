import { ProofStrip } from './ProofStrip';
import { media } from '../config/media';
import { Photo } from '../components/Photo';
import { HeroSignature } from '../components/HeroSignature';
import { useEffect } from 'react';

export function Hero() {
  useEffect(() => {
    const motion = matchMedia('(prefers-reduced-motion: reduce)');
    if (motion.matches || location.hash) return;
    let frame = 0;
    const stop = () => { clearTimeout(timer); cancelAnimationFrame(frame); };
    const timer = window.setTimeout(() => {
      const projects = document.getElementById('projetos');
      if (!projects || motion.matches || scrollY > 1 || location.hash) return;
      const distance = Math.max(0, projects.getBoundingClientRect().top - innerHeight) + 85;
      const start = performance.now();
      const tick = (now: number) => {
        const elapsed = now - start;
        const phase = Math.max(0, Math.min(1, elapsed / 620, (1700 - elapsed) / 680));
        scrollTo({ top: distance * (1 - Math.cos(Math.PI * phase)) / 2, behavior: 'instant' });
        if (elapsed < 1700) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    }, 3700);
    const events = ['wheel', 'touchstart', 'pointerdown', 'keydown', 'hashchange'] as const;
    events.forEach(event => window.addEventListener(event, stop, { passive: true }));
    motion.addEventListener('change', stop);
    return () => {
      stop();
      events.forEach(event => window.removeEventListener(event, stop));
      motion.removeEventListener('change', stop);
    };
  }, []);

  return (
    <section id="inicio" className="hero hero-full" aria-labelledby="hero-title">
      <Photo asset={media.portrait} eager />
      <div className="hero-overlay container">
        <p className="hero-portfolio-label">Portfólio</p>
        <h1 id="hero-title">
          <span className="name-highlight name-first">Matheus</span>{' '}
          <span className="name-highlight name-last">Galdino<span className="hero-name-period">.</span></span>
          <span className="sr-only"> de Souza</span>
        </h1>
        <p className="hero-description">Desenvolvimento de software e pesquisa em inteligência artificial.</p>
        <ProofStrip />
        <a className="hero-cta button" href="#projetos">Conheça meus projetos <svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 4v16m-6-6 6 6 6-6"/></svg></a>
      </div>
      <HeroSignature />
    </section>
  );
}
