import { useRef } from 'react';
import { usePortfolioMotion } from './hooks/usePortfolioMotion';
import { WorkingAtVirtus } from './sections/WorkingAtVirtus';

import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { FeaturedProjects } from './sections/FeaturedProjects';
import { Recognition } from './sections/Recognition';
import { Contact } from './sections/Contact';
export default function App() {
  const main = useRef<HTMLElement>(null);
  usePortfolioMotion(main);
  return (
    <div className="portfolio">
      <a href="#conteudo" className="skip-link">Pular para o conteúdo</a>
      <Navbar/>
      <main ref={main} id="conteudo">
        <Hero/>
        <FeaturedProjects/>
        <WorkingAtVirtus/>
        <Recognition/>
        <section className="closing-statement" aria-labelledby="closing-line">
          <h2 className="container" id="closing-line"><span>O código começa</span>{' '}
            <em>com uma pergunta.</em></h2>
        </section>
      </main>
      <Contact/>
    </div>
  );
}
