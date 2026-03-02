import type { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  onOpen: (project: Project) => void;
}

export default function ProjectCard({ project, onOpen }: ProjectCardProps) {
  return (
    <div
      className="rounded-3xl overflow-hidden shadow-card hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1.5 cursor-pointer group"
      onClick={() => onOpen(project)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onOpen(project)}
      aria-label={`View case study: ${project.name}`}
    >
      {/* Color top band / mockup placeholder */}
      <div
        className="h-44 relative flex items-center justify-center overflow-hidden"
        style={{ backgroundColor: project.color }}
      >
        {/* Decorative SVG device mockup */}
        <svg viewBox="0 0 160 120" className="w-40 opacity-60" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="8" width="120" height="80" rx="10" fill="white" fillOpacity="0.7" />
          <rect x="30" y="18" width="100" height="60" rx="6" fill="white" fillOpacity="0.5" />
          <rect x="38" y="26" width="60" height="6" rx="3" fill="currentColor" fillOpacity="0.25" />
          <rect x="38" y="36" width="84" height="4" rx="2" fill="currentColor" fillOpacity="0.15" />
          <rect x="38" y="44" width="70" height="4" rx="2" fill="currentColor" fillOpacity="0.15" />
          <rect x="38" y="54" width="50" height="10" rx="5" fill="currentColor" fillOpacity="0.2" />
          <rect x="60" y="92" width="40" height="6" rx="3" fill="white" fillOpacity="0.5" />
        </svg>
        {/* Category pill */}
        <span className="absolute top-3 left-3 text-xs font-bold bg-white/70 backdrop-blur-sm rounded-full px-3 py-1 text-gray-700">
          {project.category}
        </span>
        {/* Hover reveal */}
        <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/10 transition-colors duration-300 flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white rounded-full px-4 py-2 text-sm font-bold text-dark shadow-soft">
            View Case Study →
          </span>
        </div>
      </div>
      {/* Card body */}
      <div className="bg-white p-5">
        <h3 className="font-display font-extrabold text-dark text-lg leading-tight">
          {project.name}
        </h3>
        <p className="mt-1.5 text-gray-600 text-sm leading-relaxed line-clamp-2">
          {project.tagline}
        </p>
        {/* Outcome pill */}
        <div className="mt-3 text-xs font-semibold text-green-700 bg-mint rounded-full px-3 py-1 inline-block">
          ✦ {project.outcome}
        </div>
        {/* Stack tags */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.stack.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs bg-gray-100 text-gray-600 rounded-full px-2.5 py-0.5 font-medium"
            >
              {tag}
            </span>
          ))}
          {project.stack.length > 3 && (
            <span className="text-xs bg-gray-100 text-gray-400 rounded-full px-2.5 py-0.5">
              +{project.stack.length - 3}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
