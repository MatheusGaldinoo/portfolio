import { BeeThereProject } from '../components/BeeThereProject';
import { projects } from '../content/pt-BR/projects';
import { ProjectCard } from '../components/ProjectCard';
export function FeaturedProjects() {
  return (
    <section id="projetos" className="featured-projects container" aria-labelledby="projects-title">
      <header className="projects-heading">
        <h2 id="projects-title" className="section-title">Projetos</h2>
        <hr className="projects-divider" aria-hidden="true"/>
      </header>
      <div className="project-list">
        {projects.map(project => <ProjectCard key={project.id} project={project}/>)}
        <BeeThereProject/>
      </div>
    </section>
  );
}
