import { BeeThereProject } from '../components/BeeThereProject';
import { projects } from '../content/pt-BR/projects';
import { ProjectCard } from '../components/ProjectCard';
export function FeaturedProjects() {
  return <section id="projetos" className="featured-projects container" aria-label="Principais Projetos"><h2 className="sr-only">Projetos</h2><div>{projects.filter(project => project.id !== 'beethere' && project.id !== 'leal').map(project => <ProjectCard key={project.id} project={project}/>)}<BeeThereProject/></div></section>;
}
