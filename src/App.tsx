import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { FeaturedProjects } from './sections/FeaturedProjects';
export default function App() {
  return <><a href="#conteudo" className="skip-link">Pular para o conteúdo</a><Navbar/><main id="conteudo"><Hero/><FeaturedProjects/></main><footer className="container page-footer"><span>Matheus Galdino de Souza</span><a href="#inicio">Voltar ao início ↑</a></footer></>;
}
