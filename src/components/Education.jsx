import { FiBook, FiCalendar } from 'react-icons/fi';

export default function Education({ data }) {
  return (
    <section id="education" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12">
          <FiBook className="text-blue-600 dark:text-blue-400" size={28} />
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Education
          </h2>
        </div>

        {/* Education Cards */}
        {data.educations.map((edu, index) => (
          <div
            key={index}
            className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-sm"
          >
            {/* School Info */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {edu.school}
                </h3>
                <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">
                  {edu.degree}
                </p>
              </div>
              <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
                <FiCalendar size={18} />
                <span className="font-medium">{edu.start} — {edu.end}</span>
              </div>
            </div>

            {/* Coursework */}
            {edu.coursework && (
              <div>
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-4">
                  Relevant Coursework
                </h4>
                <div className="flex flex-wrap gap-2">
                  {edu.coursework.map((course) => (
                    <span
                      key={course}
                      className="px-4 py-2 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm border border-gray-200 dark:border-gray-600 hover:border-blue-400 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
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
    </section>
  );
}
