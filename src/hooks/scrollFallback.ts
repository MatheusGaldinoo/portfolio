import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function attachScrollFallback(root: HTMLElement) {
  const media = gsap.matchMedia();

  media.add('(prefers-reduced-motion: no-preference)', () => {
    function parallax(selector: string, trigger: string, distance: number) {
      gsap.to(selector, {
        yPercent: distance, ease: 'none',
        scrollTrigger: { trigger, start: trigger === '#inicio' ? 'top top' : 'top bottom', end: 'bottom top', scrub: true },
      });
    }
    parallax('.hero-full > .photo', '#inicio', 12);
    parallax('.working-summary__photo', '.working-summary__frame', 8);
    gsap.fromTo('.projects-progress', { scaleX: 0 }, {
      scaleX: 1, ease: 'none',
      scrollTrigger: { trigger: '.project-list', start: 'top top', end: 'bottom bottom', scrub: true },
    });

  }, root);
  return () => media.revert();
}
