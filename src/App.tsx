import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { usePortfolioMotion } from './hooks/usePortfolioMotion';
import { useSmoothAnchorScroll } from './hooks/useSmoothAnchorScroll';
import { textReveal02 } from './hooks/textReveal02';
import { WorkingAtVirtus } from './sections/WorkingAtVirtus';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { ProofStrip } from './sections/ProofStrip';
import { FeaturedProjects } from './sections/FeaturedProjects';
import { Recognition } from './sections/Recognition';
import { ClosingStatement } from './sections/ClosingStatement';
import { Contact } from './sections/Contact';

export default function App() {
  const main = useRef<HTMLElement>(null);
  usePortfolioMotion(main);
  useSmoothAnchorScroll();

  useEffect(() => {
    const scopeEl = main.current;
    if (!scopeEl) return;

    let cancelled = false;
    const ctx = gsap.context(() => {}, scopeEl);

    document.fonts.ready.then(() => {
      if (cancelled || !main.current) return;
      ctx.add(() => {
        textReveal02(main.current!);
      });
    });

    return () => {
      cancelled = true;
      ctx.revert();
    };
  }, []);

  return (
    <div className="portfolio">
      <a href="#conteudo" className="skip-link">Pular para o conteúdo</a>
      <Navbar />
      <main ref={main} id="conteudo">
        <Hero />
        <ProofStrip />
        <FeaturedProjects />
        <WorkingAtVirtus />
        <Recognition />
        <ClosingStatement />
      </main>
      <Contact />
    </div>
  );
}
