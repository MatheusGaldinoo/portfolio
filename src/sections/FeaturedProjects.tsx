import { projects } from '../content/pt-BR/projects';
import { site } from '../content/pt-BR/site';
import { SectionHeading } from '../components/SectionHeading';
import { ProjectCard } from '../components/ProjectCard';
export function FeaturedProjects() {
  return <section id="projetos" className="featured-projects container" aria-label="Projetos selecionados"><SectionHeading number="01—04" title={site.projectsTitle} description={site.projectsIntroduction}/><div>{projects.map(project => <ProjectCard key={project.id} project={project}/>)}</div></section>;
}
