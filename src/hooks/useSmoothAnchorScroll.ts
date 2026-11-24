import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

const BASE_DURATION = 1.1;
const MIN_DURATION = 0.8;
const MAX_DURATION = 3;
const DISTANCE_EXPONENT = 0.6;
const EASE = 'power2.inOut';

// One viewport keeps the current feel; longer jumps get more time, with a cap.
function durationFor(distance: number) {
  const viewports = Math.max(0.1, distance / Math.max(1, innerHeight));
  return Math.min(MAX_DURATION, Math.max(MIN_DURATION,
    BASE_DURATION * Math.pow(viewports, DISTANCE_EXPONENT)));
}

export function useSmoothAnchorScroll() {
  useEffect(() => {
    const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
    let tween: gsap.core.Tween | undefined;

    const scrollToId = (id: string, animated: boolean) => {
      const target = document.getElementById(id);
      if (!target) return;

      tween?.kill();
      const padding = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0;
      const top = Math.max(0, target.getBoundingClientRect().top + scrollY - padding);

      if (!animated || reducedMotion.matches) {
        window.scrollTo({ top, behavior: 'instant' });
        return;
      }

      // ScrollToPlugin drives each frame itself; CSS smooth would fight the tween.
      document.documentElement.style.scrollBehavior = 'auto';
      tween = gsap.to(window, {
        duration: durationFor(Math.abs(top - scrollY)),
        ease: EASE,
        scrollTo: { y: top, autoKill: true },
        overwrite: 'auto',
      });
    };

    // Deep links are placed immediately; only in-page navigation animates.
    const initialId = decodeURIComponent(location.hash.slice(1));
    if (initialId) scrollToId(initialId, false);

    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 ||
          event.metaKey || event.ctrlKey || event.shiftKey || event.altKey ||
          !(event.target instanceof Element)) return;

      const anchor = event.target.closest('a[href^="#"]');
      if (!(anchor instanceof HTMLAnchorElement)) return;

      const href = anchor.getAttribute('href');
      if (!href || href === '#') return;

      let id: string;
      try {
        id = decodeURIComponent(href.slice(1));
      } catch {
        return;
      }
      if (!document.getElementById(id)) return;

      event.preventDefault();
      if (location.hash !== href) history.pushState(null, '', href);

      const target = document.getElementById(id)!;
      const hadTabIndex = target.hasAttribute('tabindex');
      if (!hadTabIndex) target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
      if (!hadTabIndex) target.addEventListener('blur', () => target.removeAttribute('tabindex'), { once: true });

      scrollToId(id, true);
    };

    const onPopState = () => {
      const id = decodeURIComponent(location.hash.slice(1));
      if (id) scrollToId(id, true);
    };

    document.addEventListener('click', onClick);
    addEventListener('popstate', onPopState);
    return () => {
      document.removeEventListener('click', onClick);
      removeEventListener('popstate', onPopState);
      tween?.kill();
    };
  }, []);
}
