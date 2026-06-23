import { FiFolder, FiExternalLink, FiGithub, FiCalendar } from 'react-icons/fi';
import SectionHeader from './SectionHeader';

export default function Projects({ data }) {
  return (
    <section id="projects" className="py-24 px-4 bg-bg">
      <div className="max-w-6xl mx-auto">
        <SectionHeader icon={FiFolder} data={data} name="projects" />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.projects.map((project, index) => (
            <div
              key={index}
              className="group card flex flex-col p-6"
            >
              {/* Content */}
              <div className="flex flex-col flex-grow">
                {/* Header */}
                <div className="flex items-start justify-between mb-2 gap-2">
                  <h3 className="font-display text-xl font-bold text-content group-hover:text-accent transition-colors">
                    {project.name}
                  </h3>
                  <div className="flex items-center gap-1 shrink-0">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-muted hover:text-accent transition-colors"
                        aria-label="View live project"
                      >
                        <FiExternalLink size={18} />
                      </a>
                    )}
                    {project.repo && (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-muted hover:text-accent transition-colors"
                        aria-label="View source code"
                      >
                        <FiGithub size={18} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Date */}
                <div className="flex items-center gap-1.5 text-sm text-muted mb-3">
                  <FiCalendar size={14} />
                  {project.when}
                </div>

                {/* Description */}
                <p className="text-muted text-sm mb-4 leading-relaxed">
                  {project.desc}
                </p>

                {/* Highlights */}
                {project.highlights && (
                  <ul className="space-y-1.5 mb-4 flex-grow">
                    {project.highlights.slice(0, 2).map((highlight, i) => (
                      <li key={i} className="text-muted text-xs flex gap-2">
                        <span className="mt-1.5 h-1 w-1 rounded-full bg-brand shrink-0" />
                        <span className="line-clamp-2">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-line">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-accent-soft text-accent text-xs rounded-md font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
