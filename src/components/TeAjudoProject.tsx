import { TechList } from './TechList';
import { VideoPlayer } from './VideoPlayer';
import { videos } from '../config/media';
export function TeAjudoProject() {
  return <article id="teajudo" className="project project-teajudo" aria-labelledby="teajudo-title"><div className="teajudo-grid">
    <div className="project-copy">
      <h3 id="teajudo-title" className="project-title"><img className="project-logo" src="/logos/teajudo.png" width="48" height="48" alt=""/>TEAjudo</h3>
      <p className="project-status">Protótipo | Nov 2024 a Ago 2025</p>
      <p className="project-description">Aplicativo pensado para conectar pais de crianças com TEA a profissionais de saúde e educação.</p>
      <div className="contributions"><ul>
        <li>Design inclusivo: desenvolvi em equipe um protótipo móvel no Figma para explorar como famílias de crianças com TEA poderiam encontrar profissionais de saúde e educação. O desafio de UX foi aproximar públicos com necessidades diferentes em uma mesma experiência.</li>
        <li>Da proposta ao pitch: usei o Business Model Canvas para estruturar a proposta de valor e, com o projeto selecionado na 13ª edição do Campus Mobile, apresentei a ideia em um pitch criativo que exigiu colaboração, comunicação e negociação.</li>
      </ul></div>
      <TechList items={['Figma']}/>
    </div>
    <div className="teajudo-presentation"><VideoPlayer src={videos.teajudo} title="apresentação do TEAjudo no DLJ" poster="/media/campus/teajudo-poster.png"/></div>
  </div></article>;
}
