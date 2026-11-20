import { beethere } from '../content/pt-BR/projects';
import { videos } from '../config/media';
import { PhoneMockup } from './PhoneMockup';
import { TechList } from './TechList';

export function BeeThereProject() {
  return (
    <div className="campus-editions beethere-project">
      <article id="beethere">
        <div>
          <h3 className="project-title"><img loading="lazy" className="project-logo project-logo--beethere" src="/logos/beethere.svg" alt="" width="48" height="48"/>{beethere.title}</h3>
          <p className="project-status">{beethere.status}</p>
          <p className="project-description">{beethere.description}</p>
          <ul className="campus-bullets">{beethere.contributions.map(item => <li key={item}>{item}</li>)}</ul>
          <TechList items={beethere.technologies}/>
        </div>
        <PhoneMockup src={videos.beethere} title="apresentação do BeeThere" poster="/media/capa-video-beethere.jpg"/>
      </article>
    </div>
  );
}
