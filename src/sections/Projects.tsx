import { SectionHeader } from '../components/ui/SectionHeader';
import { ProjectCard } from '../components/ui/ProjectCard';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { projects } from '../data/projects';

export function Projects() {
  return (
    <section id="projects" className="py-[120px] px-6 max-w-7xl mx-auto">
      <SectionHeader label="// projects.explore" title="Things I've Built" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
        {projects.map((project, index) => (
          <ScrollReveal key={project.title} direction="up" delay={index * 0.1}>
            <ProjectCard project={project} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
