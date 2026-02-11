import { FiMail, FiPhone, FiLinkedin, FiGithub, FiChevronDown, FiFileText } from 'react-icons/fi';

const iconMap = {
  email: FiMail,
  phone: FiPhone,
  linkedin: FiLinkedin,
  github: FiGithub,
};

export default function Hero({ data, showResumeLink }) {
  const handleScrollDown = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center relative px-4 pt-16"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 -z-10" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl -z-10" />

      <div className="text-center max-w-3xl mx-auto">
        {/* Greeting */}
        <p className="text-blue-600 dark:text-blue-400 font-medium mb-4 animate-fade-in">
          Hello, I'm
        </p>

        {/* Name */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4">
          {data.name}
        </h1>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl text-gray-600 dark:text-gray-300 mb-6">
          {data.title}
        </h2>

        {/* Tagline */}
        <p className="text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          {data.tagline}
        </p>

        {/* Social Links */}
        <div className="flex justify-center items-center gap-4 mb-8">
          {data.contacts
            .filter((c) => ['email', 'linkedin', 'github'].includes(c.type))
            .map((contact) => {
              const Icon = iconMap[contact.type];
              return (
                <a
                  key={contact.type}
                  href={contact.href}
                  target={contact.type !== 'email' ? '_blank' : undefined}
                  rel={contact.type !== 'email' ? 'noopener noreferrer' : undefined}
                  className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110"
                  aria-label={contact.type}
                >
                  <Icon size={24} />
                </a>
              );
            })}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Get in Touch
          </a>
          {showResumeLink && (
            <a
              href={data.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 font-medium rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              <FiFileText size={20} />
              View Resume
            </a>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={handleScrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <FiChevronDown size={32} />
      </button>
    </section>
  );
}
