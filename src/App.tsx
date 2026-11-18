import { WorkingAtVirtus } from './sections/WorkingAtVirtus';

import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { FeaturedProjects } from './sections/FeaturedProjects';
import { Recognition } from './sections/Recognition';
import { Contact } from './sections/Contact';
export default function App() {
  return (
    <div className="portfolio">
      <a href="#conteudo" className="skip-link">Pular para o conteúdo</a>
      <Navbar/>
      <main id="conteudo">
        <Hero/>
        <FeaturedProjects/>
        <WorkingAtVirtus/>
        <Recognition/>
      </main>
      <Contact/>
    </div>
  );
}
