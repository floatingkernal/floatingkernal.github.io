import { FiCode, FiLayers, FiServer, FiDatabase, FiCheckCircle, FiTool, FiSmartphone, FiCloud, FiCpu, FiGrid } from 'react-icons/fi';

const categoryIcons = {
  Backend: FiServer,
  Languages: FiCode,
  Architecture: FiGrid,
  Databases: FiDatabase,
  Cloud: FiCloud,
  'DevOps & Tools': FiTool,
  'AI / ML': FiCpu,
  Frontend: FiLayers,
  Testing: FiCheckCircle,
  Mobile: FiSmartphone,
};

const categoryColors = {
  Backend: 'from-green-500 to-emerald-500',
  Languages: 'from-blue-500 to-cyan-500',
  Architecture: 'from-slate-500 to-zinc-600',
  Databases: 'from-orange-500 to-amber-500',
  Cloud: 'from-sky-500 to-blue-500',
  'DevOps & Tools': 'from-indigo-500 to-violet-500',
  'AI / ML': 'from-yellow-500 to-orange-500',
  Frontend: 'from-purple-500 to-pink-500',
  Testing: 'from-red-500 to-rose-500',
  Mobile: 'from-teal-500 to-cyan-500',
};

export default function Skills({ data }) {
  return (
    <section id="skills" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-12">
          <FiCode className="text-blue-600 dark:text-blue-400" size={28} />
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Skills & Technologies
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(data.skills).map(([category, skills]) => {
            const Icon = categoryIcons[category] || FiCode;
            const gradient = categoryColors[category] || 'from-gray-500 to-gray-600';

            return (
              <div
                key={category}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${gradient} text-white`}>
                    <Icon size={20} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {category}
                  </h3>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full border border-gray-200 dark:border-gray-600 hover:border-blue-400 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
