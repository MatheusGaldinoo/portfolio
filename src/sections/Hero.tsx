import { useEffect, useRef } from 'react';
import { media } from '../config/media';
import { Photo } from '../components/Photo';
import { HeroSignature } from '../components/HeroSignature';
import { GlassCtaButton } from '../components/GlassCtaButton';

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const motion = matchMedia('(prefers-reduced-motion: reduce)');
    const hasSectionAnchor = () => Boolean(location.hash && location.hash !== '#inicio');
    if (motion.matches || hasSectionAnchor() || window.scrollY > 1) return;

    let frame = 0;
    let delay = 0;
    let cancelled = false;
    const stop = () => {
      cancelled = true;
      clearTimeout(delay);
      cancelAnimationFrame(frame);
    };

    const startPreview = () => {
      if (cancelled || motion.matches || window.scrollY > 1 || hasSectionAnchor()) return;
      const proofStrip = document.getElementById('destaques');
      const distance = proofStrip
        ? Math.max(0, proofStrip.getBoundingClientRect().bottom - innerHeight)
        : Math.min(96, innerHeight * 0.12);
      const start = performance.now();
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
      delay = window.setTimeout(() => {
        frame = requestAnimationFrame(animate);
      }, 250);
    };

    const introAnimations = heroRef.current?.getAnimations({ subtree: true })
      .filter(animation => animation instanceof CSSAnimation &&
        ['hero-portrait-zoom', 'sign-hero'].includes(animation.animationName)) ?? [];
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
          <span className="name-highlight name-first">Matheus</span>
          <br />
          <span className="name-highlight name-last">Galdino</span>
          <span className="sr-only"> de Souza</span>
        </h1>
        <p className="hero-description">Engenheiro de software e inteligência artificial.</p>
        <GlassCtaButton href="#projetos" className="hero-cta">Conheça meus projetos</GlassCtaButton>
      </div>
      <HeroSignature />
    </section>
  );
}
