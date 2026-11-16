import type { Project } from '../types/content';
import { media } from '../config/media';
import { Arrow } from './Arrow';
import { MediaFrame } from './MediaFrame';
import { ProjectMetrics } from './ProjectMetrics';
export function ProjectCard({ project }: { project: Project }) {
  const asset = project.id === 'twinpulse' ? media.twinpulse : project.id === 'beethere' ? media.beethere : project.id === 'leal' ? media.leal : null;
  return <article className={`project project--${project.layout}`} aria-labelledby={`${project.id}-title`}>
    <div className="project-topline"><span className="project-index">/{project.number}</span><span>{project.category}</span><span className="project-status">{project.status}</span></div>
    <div className="project-body"><div className="project-copy"><h3 id={`${project.id}-title`}>{project.title}</h3><p className="project-description">{project.description}</p>
    {project.metrics && <ProjectMetrics metrics={project.metrics} />}
    <details className="project-details"><summary>Minhas contribuições<span aria-hidden="true">+</span></summary><ul>{project.contributions.map(item => <li key={item}>{item}</li>)}</ul></details>
    <ul className="technology-list" aria-label="Tecnologias e competências">{project.technologies.map(technology => <li key={technology}>{technology}</li>)}</ul>
    {project.link && <a className="text-link" href={project.link.href} target="_blank" rel="noopener noreferrer">{project.link.label}<Arrow diagonal /><span className="sr-only"> (abre em nova aba)</span></a>}</div>
    {asset && <MediaFrame asset={asset} variant={project.id === 'beethere' ? 'phone' : 'project'} title={project.title} caption={project.id === 'twinpulse' ? 'Captura autorizada a adicionar.' : project.id === 'beethere' ? 'Telas reais do protótipo a adicionar.' : 'Captura da aplicação a adicionar.'} />}
    </div><p className="project-note">{project.note}</p>
  </article>;
}
