import { BeeThereProject } from '../components/BeeThereProject';
import { projects } from '../content/pt-BR/projects';
import { ProjectCard } from '../components/ProjectCard';

export function FeaturedProjects() {
  const twinpulse = projects.find(project => project.id === 'twinpulse')!;
  const visibleProjects = projects.filter(project => project.id !== 'twinpulse');

  return (
    <section id="projetos" className="featured-projects" aria-label="Projetos">
      <div className="container">
        <div className="project-list">
          {visibleProjects.map(project => <ProjectCard key={project.id} project={project}/>)}
          <BeeThereProject/>
          <ProjectCard project={twinpulse}/>
        </div>
      </div>
    </section>
  );
}
