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
        <li>Selecionado na 13ª edição do Campus Mobile.</li>
        <li>Modelei a proposta de valor e o negócio com o Business Model Canvas.</li>
        <li>Desenvolvi em equipe o protótipo do aplicativo móvel no Figma, com foco em UX, diversidade e inclusão.</li>
        <li>Apresentei a proposta em um pitch criativo, exercitando comunicação e negociação.</li>
        <li>Trabalhei gestão de projetos, empreendedorismo e resolução de problemas durante o desenvolvimento do protótipo.</li>
      </ul></div>
      <TechList items={['Figma']}/>
    </div>
    <div className="teajudo-presentation"><VideoPlayer src={videos.teajudo} title="apresentação do TEAjudo no DLJ" poster="/media/campus/teajudo-poster.png"/></div>
  </div></article>;
}
