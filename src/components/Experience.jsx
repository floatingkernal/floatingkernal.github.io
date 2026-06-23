import { FiBriefcase, FiMapPin, FiExternalLink } from 'react-icons/fi';
import SectionHeader from './SectionHeader';

export default function Experience({ data }) {
  return (
    <section id="experience" className="py-24 px-4 bg-bg">
      <div className="max-w-3xl mx-auto">
        <SectionHeader icon={FiBriefcase} data={data} name="experience" />

        {/* Timeline */}
        <div className="relative pl-8 sm:pl-10">
          {/* Vertical line */}
          <div className="absolute left-[7px] sm:left-[9px] top-2 bottom-2 w-px bg-gradient-to-b from-brand via-line to-transparent" />

          {data.workExp.map((job, index) => (
            <div key={index} className="relative mb-10 last:mb-0">
              {/* Dot */}
              <div className="absolute -left-8 sm:-left-10 top-6 w-4 h-4 rounded-full bg-gradient-to-br from-brand to-brand-2 ring-4 ring-bg" />

              <div className="card p-6">
                {/* Date */}
                <div className="inline-flex items-center text-xs font-semibold text-accent bg-accent-soft px-2.5 py-1 rounded-full mb-3">
                  {job.start} — {job.end}
                </div>

                {/* Position */}
                <h3 className="font-display text-xl font-bold text-content mb-1">
                  {job.position}
                </h3>

                {/* Company */}
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-content/90 font-medium">{job.company}</span>
                  {job.link && (
                    <a
                      href={job.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted hover:text-accent transition-colors"
                      aria-label={`${job.company} website`}
                    >
                      <FiExternalLink size={15} />
                    </a>
                  )}
                </div>

                {/* Location */}
                <div className="flex items-center gap-1.5 text-sm text-muted mb-4">
                  <FiMapPin size={14} />
                  {job.location}
                </div>

                {/* Description */}
                <ul className="space-y-2">
                  {job.description.map((item, i) => (
                    <li key={i} className="text-muted text-sm flex gap-2.5 leading-relaxed">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
