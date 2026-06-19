import { ExternalLink, Code2 } from 'lucide-react';
import { GlassCard } from './GlassCard';

export interface ProjectData {
  title: string;
  url: string | null;
  github?: string | null;
  accentColor: string;
  description: string;
  tags: string[];
  featuredBadge?: string;
}

export function ProjectCard({ project }: { project: ProjectData }) {
  return (
    <GlassCard accentColor={project.accentColor} className="flex flex-col h-full hover:-translate-y-1 hover:scale-[1.02]">
      {project.featuredBadge && (
        <div className="absolute top-4 right-4 border border-[var(--biolum-pink)] text-[var(--biolum-pink)] text-[0.65rem] uppercase tracking-wider px-2 py-1 rounded">
          {project.featuredBadge}
        </div>
      )}
      
      <div className="flex justify-between items-center mb-4 mt-2">
        <h3 className="font-syne font-semibold text-xl text-[var(--text-primary)]">
          {project.title}
        </h3>
        <div className="flex gap-3">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-[var(--biolum-secondary)] hover:text-[var(--biolum-primary)] hover:drop-shadow-[0_0_8px_var(--biolum-primary)] transition-all">
              <Code2 size={20} />
            </a>
          )}
          {project.url && (
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-[var(--biolum-secondary)] hover:text-[var(--biolum-primary)] hover:drop-shadow-[0_0_8px_var(--biolum-primary)] transition-all">
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>
      
      <p className="font-inter text-[var(--text-secondary)] text-sm mb-6 flex-grow">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tags.map(tag => (
          <span key={tag} className="bg-[rgba(0,255,213,0.05)] border border-[var(--border-subtle)] text-[var(--biolum-primary)] rounded-lg px-2.5 py-1 text-[0.7rem] uppercase">
            {tag}
          </span>
        ))}
      </div>
    </GlassCard>
  );
}
