import { FiUser } from 'react-icons/fi';
import SectionHeader from './SectionHeader';

export default function About({ data }) {
  const stats = data.stats || [];
  return (
    <section id="about" className="py-24 px-4 bg-bg">
      <div className="max-w-4xl mx-auto">
        <SectionHeader icon={FiUser} data={data} name="about" />

        <div className="card p-8 sm:p-10">
          <p className="text-lg text-muted leading-relaxed">
            {data.about}
          </p>

          {/* Quick Facts */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center p-5 rounded-xl bg-surface-2 border border-line"
              >
                <div className="font-display text-3xl font-bold text-gradient">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
