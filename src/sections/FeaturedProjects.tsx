import { BeeThereProject } from '../components/BeeThereProject';
import { TeAjudoProject } from '../components/TeAjudoProject';
import { projects } from '../content/pt-BR/projects';
import { ProjectCard } from '../components/ProjectCard';

export function FeaturedProjects() {
  const twinpulse = projects.find(project => project.id === 'twinpulse')!;
  const others = projects.filter(project => project.id !== 'twinpulse');

  return (
    <section id="projetos" className="featured-projects" aria-labelledby="projects-title">
      <div className="container">
        <header className="projects-heading">
          <h2 id="projects-title" className="section-title">Projetos</h2>
        </header>
        <div className="project-list">
          {others.map(project => <ProjectCard key={project.id} project={project}/>)}
          <BeeThereProject/>
          <TeAjudoProject/>
          <ProjectCard project={twinpulse}/>
        </div>
      </div>
    </section>
  );
}
