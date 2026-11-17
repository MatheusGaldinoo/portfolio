import { WorkingAtVirtus } from './sections/WorkingAtVirtus';

import { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { FeaturedProjects } from './sections/FeaturedProjects';
import { Recognition } from './sections/Recognition';
import { Contact } from './sections/Contact';
export default function App() {
 useEffect(() => {
  const chart = document.querySelector('.crypto-trend');
  if (!chart) return;
  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      chart.classList.add('is-visible');
      observer.disconnect();
    }
  }, { threshold: .3 });
  observer.observe(chart);
  return () => observer.disconnect();
 }, []);
 useEffect(() => {
  const coins = document.querySelector<HTMLElement>('.bitcoin-floats');
  if (!coins) return;
  const preference = matchMedia('(prefers-reduced-motion: reduce)');
  let frame = 0;
  const update = () => {
    frame = 0;
    const { top, height } = coins.getBoundingClientRect();
    const progress = Math.max(0, Math.min(1, (innerHeight - top) / (innerHeight + height)));
    coins.style.setProperty('--drift', preference.matches ? '0px' : `${(progress - .5) * 100}px`);
  };
  const request = () => { if (!frame) frame = requestAnimationFrame(update); };
  update();
  addEventListener('scroll', request, { passive: true });
  addEventListener('resize', request);
  preference.addEventListener('change', request);
  return () => {
    cancelAnimationFrame(frame);
    removeEventListener('scroll', request);
    removeEventListener('resize', request);
    preference.removeEventListener('change', request);
    coins.style.removeProperty('--drift');
  };
 }, []);
 return <div className="portfolio"><a href="#conteudo" className="skip-link">Pular para o conteúdo</a><Navbar/><main id="conteudo"><Hero/><FeaturedProjects/><WorkingAtVirtus/><Recognition/></main><Contact/></div>;
}
