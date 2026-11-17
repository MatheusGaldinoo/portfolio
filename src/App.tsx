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
 useEffect(()=>{
 const preference=matchMedia('(prefers-reduced-motion: reduce)');let frame=0;
 const update=()=>{frame=0;document.querySelectorAll<HTMLElement>('.scroll-photo,.bitcoin-floats').forEach(el=>{const rect=el.getBoundingClientRect();const progress=Math.max(0,Math.min(1,(innerHeight-rect.top)/(innerHeight+rect.height)));el.style.setProperty('--photo-scale',preference.matches?'1':String(.92+progress*.08));el.style.setProperty('--drift',preference.matches?'0px':`${(progress-.5)*100}px`);});};
 const request=()=>{if(!frame)frame=requestAnimationFrame(update);};update();addEventListener('scroll',request,{passive:true});addEventListener('resize',request);preference.addEventListener('change',request);
 return()=>{cancelAnimationFrame(frame);removeEventListener('scroll',request);removeEventListener('resize',request);preference.removeEventListener('change',request);};
 },[]);
 return <div className="portfolio"><a href="#conteudo" className="skip-link">Pular para o conteúdo</a><Navbar/><main id="conteudo"><Hero/><FeaturedProjects/><WorkingAtVirtus/><Recognition/></main><Contact/></div>;
}
