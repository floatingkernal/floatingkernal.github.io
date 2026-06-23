import { FiBook, FiCalendar } from 'react-icons/fi';
import SectionHeader from './SectionHeader';

export default function Education({ data }) {
  return (
    <section id="education" className="py-24 px-4 bg-bg">
      <div className="max-w-4xl mx-auto">
        <SectionHeader icon={FiBook} data={data} name="education" />

        {/* Education Cards */}
        <div className="space-y-6">
          {data.educations.map((edu, index) => (
            <div key={index} className="card p-8">
              {/* School Info */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-6">
                <div>
                  <h3 className="font-display text-2xl font-bold text-content mb-1.5">
                    {edu.school}
                  </h3>
                  <p className="text-lg text-accent font-medium">
                    {edu.degree}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-muted text-sm whitespace-nowrap">
                  <FiCalendar size={16} />
                  <span className="font-medium">{edu.start} — {edu.end}</span>
                </div>
              </div>

              {/* Coursework */}
              {edu.coursework && (
                <div>
                  <h4 className="text-xs font-semibold text-muted uppercase tracking-wider mb-4">
                    Relevant Coursework
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course) => (
                      <span
                        key={course}
                        className="px-4 py-2 bg-surface-2 text-muted rounded-lg text-sm border border-line hover:border-accent/50 hover:text-accent transition-colors"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
