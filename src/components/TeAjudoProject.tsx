import { TechList } from './TechList';
import { VideoPlayer } from './VideoPlayer';
import { videos } from '../config/media';
import { teajudo } from '../content/pt-BR/projects';
export function TeAjudoProject() {
  return <article id="teajudo" className="project project-teajudo" aria-labelledby="teajudo-title"><div className="teajudo-grid">
    <div className="project-copy">
      <h3 id="teajudo-title" className="project-title"><img loading="lazy" className="project-logo" src="/logos/teajudo.png" width="48" height="48" alt=""/>{teajudo.title}</h3>
      <p className="project-status">{teajudo.status}</p>
      <p className="project-description">{teajudo.description}</p>
      <div className="contributions"><ul>
        {teajudo.contributions.map(item => <li key={item}>{item}</li>)}
      </ul></div>
      <TechList items={teajudo.technologies}/>
    </div>
    <div className="teajudo-presentation"><VideoPlayer src={videos.teajudo} title="apresentação do TEAjudo no DLJ" poster="/media/campus/teajudo-poster.png"/></div>
  </div></article>;
}
