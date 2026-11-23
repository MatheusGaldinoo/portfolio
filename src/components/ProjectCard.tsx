import type { Project } from '../types/content';
import { media } from '../config/media';
import { LaptopMockup } from './LaptopMockup';
import { PhoneMockup } from './PhoneMockup';
import { TechList } from './TechList';
const projectLogos: Partial<Record<Project['id'], string>> = {
  twinpulse: '/logos/twinpulse.svg',
  crypto: '/logos/trading-bot.webp',
  whatsapp: '/logos/WhatsApp.webp',
};

export function ProjectCard({ project }: { project: Project }) {
  const hasMedia = project.id === 'twinpulse' || project.id === 'whatsapp';
  return (
    <article className={`project project-${project.id} ${hasMedia ? 'has-media' : 'text-project'}`} id={project.id} aria-labelledby={`${project.id}-title`}>
      <div className="project-grid">
        {project.id === 'twinpulse' && <div className="project-visual"><LaptopMockup asset={media.twinpulse}/></div>}
        {project.id === 'whatsapp' && <div className="project-visual"><PhoneMockup src="/media/demonstracao-chatbot-editada.mp4" title="demonstração do WhatsApp Chatbot" poster="/media/chatbot-poster.jpg" aspectRatio="1220 / 2712"/></div>}
        <div className="project-copy">
          <h3 className="project-title" id={`${project.id}-title`}>{projectLogos[project.id] && <img loading="lazy" className="project-logo" src={projectLogos[project.id]} alt="" width="48" height="48"/>}{project.title}</h3>
          <p className="project-status">{project.status}</p>
          <p className="project-description">{project.description}</p>
          <div className="contributions"><ul>{project.contributions.map(item => <li key={item}>{item}</li>)}</ul></div>
          <TechList items={project.technologies}/>
        </div>
      </div>
    </article>
  );
}
