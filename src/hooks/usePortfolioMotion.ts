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
          const grouped = target.matches('ul');
          const elements = grouped ? Array.from(target.children) : [target];
          elements.forEach((element, index) => {
            const animation = element.animate([{ opacity: 0, transform: 'translateY(12px)' }, { opacity: 1, transform: 'none' }],
              { duration: 760, delay: index * 90, fill: 'backwards', easing: 'cubic-bezier(0.22, 1, 0.36, 1)' });
            reveals.add(animation);
            animation.onfinish = () => reveals.delete(animation);
          });
          observer.unobserve(target);
        }
      });
      const selector = '.project-title, .contributions ul, .campus-bullets, .tech-list, .recognition-group, .working-summary__copy';
      root.querySelectorAll(selector).forEach(el => observer.observe(el));
      // A altura natural do BeeThere define o tamanho de todos os cards.
      const list = root.querySelector<HTMLElement>('.project-list')!;
      const reference = list.querySelector<HTMLElement>(':scope > .beethere-project');
      const referenceContent = reference?.querySelector<HTMLElement>('article');
      const syncCardHeight = () => {
        if (!reference) return;
        reference.style.height = 'auto';
        if (referenceContent) referenceContent.style.height = 'auto';
        const height = Math.ceil(reference.getBoundingClientRect().height);
        if (referenceContent) referenceContent.style.removeProperty('height');
        reference.style.removeProperty('height');
        list.style.setProperty('--project-card-height', `${height}px`);
      };
      syncCardHeight();
      void document.fonts.ready.then(() => { if (active) syncCardHeight(); });
      let lastWidth = 0;
      const listSize = new ResizeObserver(entries => {
        const width = entries[0].contentRect.width;
        if (Math.abs(width - lastWidth) < 1) return;
        lastWidth = width;
        syncCardHeight();
      });
      listSize.observe(list);
      // A tall card only sticks once its last line has reached the viewport.
      const touchScroll = new IntersectionObserver(([entry]) => {
        list.toggleAttribute('data-touch-scroll', entry.isIntersecting);
      }, { rootMargin: '-45% 0px' });
      touchScroll.observe(list);
      const sizes = new ResizeObserver(syncCardHeight);
      sizes.observe(list);
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
        listSize.disconnect();
        sizes.disconnect();
        touchScroll.disconnect();
        list.removeAttribute('data-touch-scroll');
        list.style.removeProperty('--project-card-height');
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
