import { useState } from 'react';
import Section from '../components/ui/Section';
import ProjectCard from '../components/ui/ProjectCard';
import Modal from '../components/ui/Modal';
import Pill from '../components/ui/Pill';
import { useProjects } from '../hooks/useProjects';
import type { Project } from '../types';

function ProjectSkeleton() {
  return (
    <div className="rounded-3xl overflow-hidden bg-gray-100 animate-pulse">
      <div className="h-44 bg-gray-200" />
      <div className="p-5 space-y-3">
        <div className="h-5 bg-gray-200 rounded w-3/4" />
        <div className="h-4 bg-gray-200 rounded w-full" />
        <div className="h-4 bg-gray-200 rounded w-4/5" />
      </div>
    </div>
  );
}

function CaseStudyModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <Modal isOpen={true} onClose={onClose} title={project.name}>
      <div className="space-y-6">
        {/* Header band */}
        <div
          className="rounded-2xl p-6 flex flex-col gap-3"
          style={{ backgroundColor: project.color }}
        >
          <Pill color="dark" size="sm">{project.category}</Pill>
          <h3 className="font-display font-black text-dark text-xl leading-tight">{project.tagline}</h3>
          <div className="flex flex-wrap gap-4 text-sm text-gray-700">
            <span>⏱ {project.timeline}</span>
            <span>👥 {project.team}</span>
            <span>🎯 {project.role}</span>
          </div>
        </div>

        {/* Outcome */}
        <div className="bg-mint/40 rounded-2xl p-4">
          <p className="text-sm font-semibold text-green-800 uppercase tracking-wider mb-1">Outcome</p>
          <p className="font-bold text-dark">{project.outcome}</p>
        </div>

        {/* Problem */}
        <div>
          <p className="font-bold text-dark mb-2">The Problem</p>
          <ul className="space-y-2">
            {project.problem.map((p, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                {p}
              </li>
            ))}
          </ul>
        </div>

        {/* Solution */}
        <div>
          <p className="font-bold text-dark mb-2">What We Built</p>
          <ul className="space-y-2">
            {project.solution.map((s, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                <span className="text-green-600 mt-0.5 flex-shrink-0">✓</span>
                {s}
              </li>
            ))}
          </ul>
        </div>

        {/* Stack */}
        <div>
          <p className="font-bold text-dark mb-3">Tech Stack</p>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tag) => (
              <span
                key={tag}
                className="text-sm bg-gray-100 text-gray-700 rounded-full px-3 py-1 font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default function Projects() {
  const { data: projects, isLoading, isError } = useProjects();
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="bg-blush py-24">
      <div className="max-w-6xl mx-auto px-5">
        <Section>
          <div className="text-center mb-14">
            <span className="inline-block text-sm font-bold bg-white/70 rounded-full px-4 py-1.5 mb-4 text-gray-600">
              our portfolio
            </span>
            <h2 className="font-display font-black text-dark text-[clamp(2rem,5vw,3.5rem)] leading-tight">
              Look what{' '}
              <span className="relative inline-block">
                we made!
                <svg
                  className="absolute -bottom-1 left-0 w-full"
                  viewBox="0 0 280 10"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2,5 Q35,0 70,5 Q105,10 140,5 Q175,0 210,5 Q245,10 278,5"
                    fill="none"
                    stroke="#FFE4E4"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-md mx-auto">
              Real projects. Real metrics. Click any card to read the full story.
            </p>
          </div>
        </Section>

        {/* Grid */}
        <Section>
          {isError ? (
            <div className="text-center py-16 text-gray-500">
              <span className="text-4xl block mb-3">😬</span>
              <p className="font-medium">Couldn&apos;t load projects. Start the server with <code className="bg-white px-2 py-0.5 rounded text-sm">pnpm dev</code>.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {isLoading
                ? Array.from({ length: 6 }).map((_, i) => <ProjectSkeleton key={i} />)
                : projects?.map((project) => (
                    <ProjectCard key={project.id} project={project} onOpen={setActiveProject} />
                  ))}
            </div>
          )}
        </Section>
      </div>

      {/* Modal */}
      {activeProject && (
        <CaseStudyModal project={activeProject} onClose={() => setActiveProject(null)} />
      )}
    </section>
  );
}
