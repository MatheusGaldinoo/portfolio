import { projects } from '../content/pt-BR/projects';
import { site } from '../content/pt-BR/site';
import { SectionHeading } from '../components/SectionHeading';
import { ProjectCard } from '../components/ProjectCard';
export function FeaturedProjects() {
  return <section id="projetos" className="featured-projects container" aria-label="Principais Projetos"><SectionHeading number="01—04" title={site.projectsTitle} description={site.projectsIntroduction}/><div>{projects.filter(project => project.id !== 'beethere').map(project => <ProjectCard key={project.id} project={project}/>)}</div></section>;
}
