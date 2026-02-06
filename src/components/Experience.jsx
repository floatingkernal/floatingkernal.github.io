import { FiBriefcase, FiMapPin, FiExternalLink } from 'react-icons/fi';

export default function Experience({ data }) {
  return (
    <section id="experience" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12">
          <FiBriefcase className="text-blue-600 dark:text-blue-400" size={28} />
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Work Experience
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-900 transform md:-translate-x-1/2" />

          {data.workExp.map((job, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full transform -translate-x-1/2 mt-6 ring-4 ring-white dark:ring-gray-800" />

              {/* Content */}
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} pl-8 md:pl-0`}>
                <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  {/* Date */}
                  <div className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-2">
                    {job.start} — {job.end}
                  </div>

                  {/* Position */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {job.position}
                  </h3>

                  {/* Company */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-gray-600 dark:text-gray-300 font-medium">
                      {job.company}
                    </span>
                    {job.link && (
                      <a
                        href={job.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                      >
                        <FiExternalLink size={16} />
                      </a>
                    )}
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <FiMapPin size={14} />
                    {job.location}
                  </div>

                  {/* Description */}
                  <ul className="space-y-2">
                    {job.description.map((item, i) => (
                      <li key={i} className="text-gray-600 dark:text-gray-300 text-sm flex">
                        <span className="text-blue-600 dark:text-blue-400 mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Spacer for timeline layout */}
              <div className="hidden md:block md:w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
