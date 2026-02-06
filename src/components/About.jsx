import { FiUser } from 'react-icons/fi';

export default function About({ data }) {
  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <FiUser className="text-blue-600 dark:text-blue-400" size={28} />
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            About Me
          </h2>
        </div>

        {/* Content */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-sm">
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            {data.about}
          </p>

          {/* Quick Facts */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-xl">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">5+</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Years Experience</div>
            </div>
            <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-xl">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">10+</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Projects Completed</div>
            </div>
            <div className="text-center p-4 bg-white dark:bg-gray-700 rounded-xl">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">U of T</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">CS Graduate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
