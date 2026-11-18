import { useEffect, useRef } from 'react';

export function CryptoIllustration() {
  const illustration = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = illustration.current;
    if (!element) return;
    const preference = matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = element.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, (innerHeight - rect.top) / (innerHeight + rect.height)));
      element.style.setProperty('--drift', preference.matches ? '0px' : `${(progress - .5) * 100}px`);
    };
    const request = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    addEventListener('scroll', request, { passive: true });
    addEventListener('resize', request);
    preference.addEventListener('change', request);
    return () => {
      cancelAnimationFrame(frame);
      removeEventListener('scroll', request);
      removeEventListener('resize', request);
      preference.removeEventListener('change', request);
    };
  }, []);

  return (
    <div ref={illustration} className="bitcoin-floats" aria-hidden="true">
      <img src="/logos/bitcoin.png" width="160" height="160" alt=""/>
      <img className="ethereum-float" src="/icons/ethereum.svg" width="70" height="100" alt=""/>
      <img className="solana-float" src="/icons/solana.svg" width="90" height="80" alt=""/>
    </div>
  );
}
