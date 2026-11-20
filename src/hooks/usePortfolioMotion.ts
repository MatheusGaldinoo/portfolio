import { useEffect, type RefObject } from 'react';

export function usePortfolioMotion(main: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root = main.current;
    if (!root) return;
    const motion = matchMedia('(prefers-reduced-motion: no-preference)');
    let cleanup: (() => void) | undefined;
    function update() {
      cleanup?.();
      if (!motion.matches || !root) return;
      const reveals = new Set<Animation>();
      const observer = new IntersectionObserver(entries => {
        for (const { target, isIntersecting } of entries) {
          if (!isIntersecting) continue;
          const grouped = target.matches('ul, #closing-line');
          const elements = grouped ? Array.from(target.children) : [target];
          elements.forEach((element, index) => {
            const animation = element.animate([{ opacity: 0, transform: 'translateY(12px)' }, { opacity: 1, transform: 'none' }],
              { duration: target.id === 'closing-line' ? 800 : 340, delay: index * 55, fill: 'backwards', easing: 'ease-out' });
            reveals.add(animation);
            animation.onfinish = () => reveals.delete(animation);
          });
          observer.unobserve(target);
        }
      });
      const selector = '.project-title, .contributions ul, .campus-bullets, .tech-list, .recognition-group, .working-summary__copy, #closing-line';
      root.querySelectorAll(selector).forEach(el => observer.observe(el));
      // A tall card only sticks once its last line has reached the viewport.
      const list = root.querySelector<HTMLElement>('.project-list')!;
      const touchScroll = new IntersectionObserver(([entry]) => {
        list.toggleAttribute('data-touch-scroll', entry.isIntersecting);
      }, { rootMargin: '-45% 0px' });
      touchScroll.observe(list);
      const cards = root.querySelectorAll<HTMLElement>('.project-list > *');
      const sizes = new ResizeObserver(entries => {
        entries.forEach(({ target }) => {
          const card = target as HTMLElement;
          card.style.setProperty('--card-height', card.offsetHeight + 'px');
        });
      });
      cards.forEach(card => sizes.observe(card));
      let active = true;
      let detach: (() => void) | undefined;
      if (!CSS.supports('animation-timeline: view()')) {
        void import('./scrollFallback').then(({ attachScrollFallback }) => {
          if (active) detach = attachScrollFallback(root);
        });
      }
      cleanup = () => {
        active = false;
        detach?.();
        sizes.disconnect();
        touchScroll.disconnect();
        list.removeAttribute('data-touch-scroll');
        observer.disconnect();
        reveals.forEach(animation => animation.cancel());
      };
    }
    update();
    motion.addEventListener('change', update);
    return () => {
      motion.removeEventListener('change', update);
      cleanup?.();
    };
  }, [main]);
}
