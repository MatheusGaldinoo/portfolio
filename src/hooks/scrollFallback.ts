import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function attachScrollFallback(root: HTMLElement) {
  const media = gsap.matchMedia();

  media.add('(prefers-reduced-motion: no-preference)', () => {
    gsap.fromTo('.projects-progress', { scaleX: 0 }, {
      scaleX: 1, ease: 'none',
      scrollTrigger: { trigger: '.project-list', start: 'top top', end: 'bottom bottom', scrub: true },
    });

  }, root);
  return () => media.revert();
}
