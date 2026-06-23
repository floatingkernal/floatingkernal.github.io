import { FiCode, FiLayers, FiServer, FiDatabase, FiCheckCircle, FiTool, FiSmartphone, FiCloud, FiCpu, FiGrid } from 'react-icons/fi';
import SectionHeader from './SectionHeader';

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
    <section id="skills" className="py-24 px-4 bg-bg">
      <div className="max-w-6xl mx-auto">
        <SectionHeader icon={FiCode} eyebrow="Toolkit" title="Skills & Technologies" />

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(data.skills).map(([category, skills]) => {
            const Icon = categoryIcons[category] || FiCode;
            const gradient = categoryColors[category] || 'from-gray-500 to-gray-600';

            return (
              <div key={category} className="card p-6">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${gradient} text-white shadow-sm`}>
                    <Icon size={20} />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-content">
                    {category}
                  </h3>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-surface-2 text-muted text-sm rounded-full border border-line hover:border-accent/50 hover:text-accent transition-colors cursor-default"
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
