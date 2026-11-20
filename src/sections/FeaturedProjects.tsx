import { BeeThereProject } from '../components/BeeThereProject';
import { TeAjudoProject } from '../components/TeAjudoProject';
import { projects } from '../content/pt-BR/projects';
import { ProjectCard } from '../components/ProjectCard';
export function FeaturedProjects() {
  return (
    <section id="projetos" className="featured-projects container" aria-labelledby="projects-title">
      <header className="projects-heading">
        <h2 id="projects-title" className="section-title">Projetos</h2>
      </header>
      <div className="projects-divider" aria-hidden="true"><i className="projects-progress"/></div>
      <div className="project-list">
        {projects.map(project => <ProjectCard key={project.id} project={project}/>)}
        <BeeThereProject/>
        <TeAjudoProject/>
      </div>
    </section>
  );
}
